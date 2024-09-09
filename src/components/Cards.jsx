import React, { useState } from "react";
import Card from "./Card";
const Cards=()=>{
    const raw=[{name:'Sahil', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae", image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name:'Purab', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae", image:"https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name:'Mohit', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae", image:"https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name:'Ishwor', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae", image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name:'Samip', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae", image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
    ]
    const [data, setData]=useState(raw);
   return ( <div className=" w-[95%] h-56 bg-slate-100 rounded flex gap-x-4 place-content-between">
            { data.map((item, index)=>{
                return <Card key={index} values={item}/>
            })}
    </div>)
}
export default Cards;

