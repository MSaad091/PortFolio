import { createSlice } from "@reduxjs/toolkit";




const fullstackSlice = createSlice({
    name:"fullstackdata",
    initialState:{
  products:[
     {
  id:"1",
  img:"/Screenshot (171).png",
  name:"Hotel Booking App",
  owner:"User Panel",
  link:"https://mern-hotel-booking-app-rpao.vercel.app",
  info:"Hotel booking web application built with MERN stack.",
  desc:"This is a MERN stack hotel booking application where users can register and login to their account, view available hotel rooms, book rooms online, and cancel their bookings. The project is built using MongoDB for database, Express.js and Node.js for backend API, and React.js for the frontend interface.",
    pass:"pool1",
  Mail:"pool1@gmail.com",
  message:"login this email"
},
       {
  id:"2",
  img:"/Screenshot (174).png",
  name:"Hotel Booking App",
  owner:"Admin Panel",
  link:"https://mern-hotel-booking-app-64io.vercel.app",
  info:"Admin dashboard to manage hotel booking system.",
  desc:"This admin panel allows the administrator to manage the hotel booking system. Admin can create and update hotels and rooms, view user details, check how many rooms are booked or available, and manage platform data. The project is built using MongoDB, Express.js, React.js, and Node.js (MERN Stack).",
    pass:"123456",
  Mail:"abdullah@gmail.com",
  message:"login this email"
},
{
  id:"3",
  img:"/Screenshot (176).png",
  name:"Ecommerce App",
  owner:"User Panel",
  link:"https://mern-ecommerce-app-psi.vercel.app",
  info:"Ecommerce web application built with MERN stack.",
  desc:"This is a MERN stack ecommerce application where users can register and login to their account, browse products, add items to cart, and place orders online. Users can also view their orders and manage their shopping experience. The project is built using MongoDB for database, Express.js and Node.js for backend API, and React.js for the frontend interface.",
   pass:"pool",
  Mail:"pool@gmail.com",
  message:"login this email"
},
{
  id:"4",
  img:"/Screenshot (175).png",
  name:"Ecommerce App",
  owner:"Admin Panel",
  link:"https://mern-ecommerce-app-swrd.vercel.app",
  info:"Admin dashboard to manage ecommerce platform.",
  desc:"This admin panel allows the administrator to manage the ecommerce platform. Admin can create, update, and delete products, manage categories, view user details, and monitor customer orders. The project is built using MongoDB, Express.js, React.js, and Node.js (MERN Stack).",
  pass:"pool",
  Mail:"pool@gmail.com",
  message:"login this email"
},
{
  id:"5",
  img:"/Screenshot (177).png",
  name:"Blog App",
  owner:"Blog Platform",
  link:"https://blog-app-znpr.vercel.app",
  info:"Blog web application built with MERN stack.",
  desc:"This is a MERN stack blog application where users can register, login, create blog posts, and update their blogs. Users can also read blogs shared on the platform. The application is built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for storing blog data.",
  
  pass:"pool1",
  Mail:" pool1@gmail.com",
  message:"login this email"
},
{
  id:"6",
  img:"/Screenshot (178).png",
  name:"Authentication App",
  owner:"Web Application",
  link:"https://auth-app-ten-bay.vercel.app",
  info:"User authentication system built with MERN stack.",
  desc:"This is a MERN stack authentication application where users can register an account, login securely, and update their profile information. The project demonstrates user authentication, protected routes, and profile management. It is built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for storing user data.",
  pass:"pool",
  Mail:" pool@gmail.com",
  message:"login this email"
},
{
  id:"7",
  img:"/Screenshot (184).png",
  name:"Todo - App",
  owner:"Web Application",
  link:"https://todo-app-isti.vercel.app",
  info:"User authentication system built with MERN stack.",
 desc: "This is a MERN stack Todo application where users can register, login, and manage their tasks securely. The project demonstrates full CRUD functionality, user authentication, protected routes, and personalized task management. It is built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for storing user todos.",
  pass:"12345",
  Mail:"Saad@gmail.com",
  message:"login this email"
}
  ]
}
})
export default fullstackSlice.reducer 

