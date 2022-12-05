import {useState} from "react"; // 얜 이제 필요없음!
import {FieldErrors, useForm} from "react-hook-form";

interface LoginForm {
    username : string;
    email : string;
    password : string;
}

export default function Forms() {
    const {register, handleSubmit, formState:{errors}} =  useForm<LoginForm>({
        mode : "onSubmit"
    });
    console.log('errors', errors.email?.message);
    const onValid = (data:LoginForm) => {
        console.log('invalid', data);
    }
    const onInValid = (errors:FieldErrors) => {
        console.log('errors', errors)
    }
    return <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input {...register("username",{
            required:"이름을 입력하세요",
            minLength:5
        })} type="text" placeholder="Username"/>
        <input {...register("email", {
            required:"이메일을 입력하세요",
            validate : {
                notGmail : (value) => !value.includes('@gmail.com') ? "":"지메일은 불가."
            }
        })} type="email" placeholder="Email" className={`${Boolean(errors.email) ? "border-red-500":""}`}/>
        {errors.email?.message}
        <input {...register("password", {
            required:"비밀번호를 입력하세요",
            minLength: {
                message : '5자이상 입력해야합니다.',
                value:5
            },
        })} type="password" placeholder="Password"/>
        <input type="submit" value="Create Account"/>
    </form>
}