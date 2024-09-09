import React, { useState } from "react";
import Cards1 from "./components/Cards1";
import Form1 from "./components/Form1";

function App(){
     const [users, setUser]=useState([]);

    const formHandle=(data=>{
     return setUser([...users, data])
    })

    const handleRemove=(id)=>{
     setUser(users.filter((item, index)=>id!=index))
    }
     return (
          <div className="w-full h-screen  bg-slate-200">
              <div className="container w-full h-full bg-slate-200 flex p-16 flex-col gap-8">
                    <Cards1 users={users} handleRemove={handleRemove}/>
                    <Form1 formHandle={formHandle}/>
              </div>
          </div>
     )
}

export default App;
