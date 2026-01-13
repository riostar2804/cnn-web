import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    async function handleLogin (e) {
        e.preventDefault();
    
        if ((!email || email.trim() === "") && (!password || password.trim() === "")){
            alert("Email and Password must be filled");
            return;
        }

        if (!email || email.trim() === ""){
            alert("Email must be filled");
            return;
        }

        if (!password || password.trim() === "") {
            alert("Password must be filled");
            return;
        }

        try {
            const response = await fetch("https://cnn-backend.jupriolas.workers.dev/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}),
            });
            const data = await response.json();
            console.log("Server response:", data);

            if (data.status === "success") {
                navigate("/dashboard");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error System")
        }
    }
    return(
        <div className='div-bg'>
            <div className='div-box'>
                <h2 className='h2-class'>Welcome Back</h2>
                <form onSubmit={handleLogin} className='space-y-4'>
                    <label className='label'>
                        Email
                    </label>
                    <input 
                    type="email" 
                    className='label-input'
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <br/>

                    <label className='label'>
                        Password
                    </label>
                    <input 
                    type="password" 
                    className='label-input'
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <button type='submit' className='button-submit'>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login
