import React from "react";

const Card=({values})=>{
    const {name, description, image}=values;
    return(
            <div className="w-1/6 bg-blue-200 rounded overflow-hidden">
                <div className="w-full h-36 bg-red-200">
                    <img className="w-full h-full object-cover object-top" src={image} alt="" />
                </div>
                <div className="mt-1">
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-xs">{description}</p>
                </div>
            </div>
            )
}

export default Card;