import {useState} from "react";

export default function Forms() {
    const [username,setUsername] = useState("");
    const [email,setUseremail] = useState("");
    const [password,setUserPassword] = useState("");
    const [formErrors,setFormErrors] = useState("");

    const onUsernameChange = (event:React.SyntheticEvent<HTMLInputElement>)=>{
        const {
            currentTarget: { value },
        } = event;
        setUsername(value);
    };
    const onUserEmailChange = (event:React.SyntheticEvent<HTMLInputElement>)=>{
        const {
            currentTarget: { value },
        } = event;
        setUseremail(value);
    };
    const onUserPasswordChange = (event:React.SyntheticEvent<HTMLInputElement>)=>{
        const {
            currentTarget: { value },
        } = event;
        setUserPassword(value);
    };
    const onSubmit = (event:React.SyntheticEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log('username,email,password',username,email,password);
        if (username === "" || email === "" || password === "") {
            setFormErrors("All fields are required")
        }
    }
    return <form onSubmit={onSubmit}>
        <input value={username} onChange={onUsernameChange} type="text" minLength={5} placeholder="Username" required/>
        <input value={email} onChange={onUserEmailChange} type="email" placeholder="Email" required/>
        <input value={password} onChange={onUserPasswordChange} type="password" placeholder="Password" required/>
        <input type="submit" value="Create Account"/>
    </form>

}