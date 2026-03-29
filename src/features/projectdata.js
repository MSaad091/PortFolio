import { createSlice } from "@reduxjs/toolkit";

const projectdataSlice = createSlice({
    name: "projectdata",
    initialState: {
        products: [
            {
                id: "1",
                name: "Ecommerce",
                projectlink: "https://react-ecommerce-app-two-pi.vercel.app",
                technology: "React js",
                info: "A fully responsive eCommerce web application built using React.js and Redux Toolkit. It includes features like product listing, add to cart functionality, state management, and a smooth user experience with modern UI design.",
                img: "/Screenshot (172).png"
            },
            {
                id: "2",
                name: "Recipe App",
                projectlink: "https://recipe-app-react-js-five.vercel.app",
                technology: "React js",
                info: "A dynamic Recipe Finder application developed with React.js and Redux Toolkit. Users can search for recipes, view detailed ingredients, and explore different cuisines with a clean and user-friendly interface.",
                img: "/Screenshot (161).png"
            },
            {
                id: "3",
                name: "Hotel App",
                projectlink: "https://hotel-reservation-system-dun.vercel.app",
                technology: "React js",
                info: "A modern Hotel Reservation System built using React.js and Redux Toolkit. It allows users to browse hotels, view details, and manage bookings with efficient state handling and responsive design.",
                img: "/Screenshot (173).png"
            },
            {
                id: "4",
                name: "Weather App",
                projectlink: "https://react-weather-app-olive-mu.vercel.app",
                technology: "React js",
                info: "A real-time Weather Application created with React.js and Redux Toolkit. It fetches live weather data from APIs and displays temperature, conditions, and location-based forecasts in an intuitive UI.",
                img: "/Screenshot (162).png"
            }
        ]
    }
});

export default projectdataSlice.reducer;