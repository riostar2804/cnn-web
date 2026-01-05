import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    async function handleLogin (e) {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:3001/login", {
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
                alert("Login Failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return(
        <div>
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin}>
            <input type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            <br/>

            <input type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <br/>

            <button>Login</button>
            </form>
        </div>
    );
};
export default Login
