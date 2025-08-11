import { NextResponse } from "next/server";
import ConnectDB from "../../../../lib/config/ConnectDB";
import BlogModel from "@/app/models/BlogModel";
import {writeFile} from 'fs/promises'
import fs from 'fs'

const LoadDB = async() => {
    await ConnectDB();
}
LoadDB();


export async function GET(req) {

  const blogId = req.nextUrl.searchParams.get("id");

   if(blogId){
    const blog = await BlogModel.findOne({ _id: blogId });

    return NextResponse.json(blog);
   }
   else{
    const blogs = await BlogModel.find({});
    return NextResponse.json({blogs});
   }
    
   
}


export async function POST(req) {
  
  const formData = await req.formData();

    const timestamp = Date.now()
    const image = formData.get('image');
    const imagebyteData= await image.arrayBuffer() ;
    const buffer = Buffer.from(imagebyteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl =  `/${timestamp}_${image.name}`
    console.log(imgUrl);

    const blogData = {
        title:`${formData.get('title')}`,
        article:`${formData.get('article')}`,

        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image: imgUrl, 

    
    }

    await BlogModel.create(blogData);
    console.log("Blog Savedd")
    return NextResponse.json({success:true , msg:"blog added"})

}



export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get("id")
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public/${blog.image}`, ()=>{})
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({msg:"Blog Deleted"})
}