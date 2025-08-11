import first_img from '../public/2222.avif';
import travel from '../public/travel.avif';
import coffee from '../public/coffee.avif';
import photography from '../public/photography.avif';
import design from '../public/ui.avif';      
import wellness from '../public/wellness.avif'; 

export const blog_data = [
  {
    id: 1,
    title: "The Evolution of Web Development",
    description: "A journey through the history and advancements in web technologies.",
    image: first_img,
    date: new Date(),
    category: "Technology",
    author: "Sam Carter",
    author_img: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "The Secrets to Perfect Coffee Making",
    description: "Brewing methods and tips for coffee enthusiasts.",
    image: coffee,
    date: new Date(),
    category: "Lifestyle",
    author: "Anna Lee",
    author_img: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "Top 10 Travel Destinations for 2025",
    description: "Unveiling the most breathtaking places to visit this year.",
    image: travel,
    date: new Date(),
    category: "Travel",
    author: "John Smith",
    author_img: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "Photography Techniques for Beginner",
    description: "Essential tips to kickstart your photography journey.",
    image: photography,
    date: new Date(),
    category: "Photography",
    author: "Rachel Adams",
    author_img: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    title: "Mastering UI/UX Design Principles",
    description: "Understanding the core concepts of effective and intuitive design.",
    image: design,
    date: new Date(),
    category: "Design",
    author: "Liam Walker",
    author_img: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    title: "Daily Wellness Habits for a Healthier Life",
    description: "Incorporate these simple habits to boost your mental and physical well-being.",
    image: wellness,
    date: new Date(),
    category: "Health",
    author: "Emily Stone",
    author_img: "https://via.placeholder.com/100",
  },
];
