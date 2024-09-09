import React from "react";
import Card1 from "./Card1";

const Cards1=({users, handleRemove})=>{
    return(
        <div className="w-full h-fit min-h-[292px] bg-slate-200 rounded flex flex-wrap gap-4">
            {users.map((item, index)=>{
                return (<Card1 user={item} key={index} id={index} handleRemove={handleRemove}/>)
            })}
        </div>
    )
}

export default Cards1;