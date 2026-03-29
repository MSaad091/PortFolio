import { createSlice } from "@reduxjs/toolkit";

const projectdataSlice = createSlice({
    name:"projectdata",
    initialState:{
        products:[
            {
                id:"1",
                name:"Ecommerce",
                projectlink:"https://react-ecommerce-app-two-pi.vercel.app",
                  technology:"React js",
               info:"React js and using Redux Toolkit",
                img:"/Screenshot (172).png"
            },
            {
                id:"2",
                name:"Recipe App",
                projectlink:"https://recipe-app-react-js-five.vercel.app",
                technology:"React js",
               info:"React js and using Redux Toolkit ",
                img:"/Screenshot (161).png"
            },
              {
                id:"3",
                name:"Hotel App",
                projectlink:"https://hotel-reservation-system-dun.vercel.app",
                technology:"React js",
               info:"React js and using Redux Toolkit",
                img:"/Screenshot (173).png"
            }
            ,   {
                id:"4",
                name:"Weather  App",
                projectlink:"https://react-weather-app-olive-mu.vercel.app",
                technology:"React js",
               info:"React js and using Redux Toolkit",
                img:"/Screenshot (162).png"
            }
        ]
    }
})

export default projectdataSlice.reducer