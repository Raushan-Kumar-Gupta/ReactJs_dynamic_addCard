import React from "react";
import { useForm } from "react-hook-form";

const Form1=({formHandle})=>{
  const {register, handleSubmit, reset}=useForm();

  const formSubmit=(data)=>{
    formHandle(data);
    reset()
  }
    return (
            <form className="" onSubmit={handleSubmit(formSubmit)}>
                <input {...register('name')} className="m-4 font-semibold text-lg outline-none" type="text" placeholder="name"/>
                <input {...register('mail')} className="m-4 font-semibold text-lg outline-none" type="text" placeholder="email"/>
                <input {...register('image')} className="m-4 font-semibold text-lg outline-none" type="text" placeholder="image link"/>
                <input  className="bg-blue-500 p-1 rounded-md px-4 hover:cursor-pointer" type="submit" />
            </form>
    )
}

export default Form1;