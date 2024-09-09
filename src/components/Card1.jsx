import React from "react";

const Card1=({user, handleRemove, id})=>{
    return (
        <div className="w-[230px] min-w-[240px] bg-slate-100 flex  items-center flex-col rounded">
            <div className=" w-32 h-32 bg-slate-300 rounded-full mt-2 overflow-hidden">
                <img className="w-full h-full object-cover" src={user.image} alt="" />
            </div>
            <h2 className="font-semibold text-lg mt-1">{user.name}</h2>
            <h2 className="opacity-60 mt-1">{user.mail}</h2>
            <p className="text-xs mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quis vel voluptas.</p>
            <button onClick={()=>handleRemove(id)} className="rounded-md bg-blue-600 p-2 mt-2">Remove it</button>
        </div>
    )
}

export default Card1;