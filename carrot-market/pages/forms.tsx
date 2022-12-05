import {useState} from "react"; // 얜 이제 필요없음!
import {useForm} from "react-hook-form";

export default function Forms() {
    const {register, handleSubmit} =  useForm();
    const onValid = () => {
        console.log('invalid')
    }
    console.log('register', register("name"));
    return <form onSubmit={handleSubmit(onValid)}>
        <input {...register("username",{})} type="text" minLength={5} placeholder="Username" required/>
        <input {...register("email")} type="email" placeholder="Email" required/>
        <input {...register("password")} type="password" placeholder="Password" required/>
        <input {...register("submit")} type="submit" value="Create Account"/>
    </form>
}