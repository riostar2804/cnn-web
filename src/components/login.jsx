import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    async function handleLogin (e) {
        e.preventDefault();
        
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
                alert("Login Failed" + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error System")
        }
    }
    return(
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold text-center text-gray-900'>Welcome Back</h2>
                <form onSubmit={handleLogin} className='space-y-4'>
                    <label className='block mb-1 text-sm text-left font-medium text-gray-700'>
                        Email
                    </label>
                    <input 
                    type="email" 
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <br/>

                    <label className='block mb-1 text-sm text-left font-medium text-gray-700'>
                        Password
                    </label>
                    <input 
                    type="password" 
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <button 
                    type='submit'
                    className='w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition'
                    >Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login
