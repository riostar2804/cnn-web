import { useNavigate } from "react-router-dom";

const Dashboard = () =>{
    const navigate = useNavigate();

    function handleLogout() {
        navigate("/");
    }

    return (
        //MAIN
        <div className="h-screen bg-gray-100">
             {/* NAVBAR */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-xl font-bold">CNN</h1>

                        <div className="flex justify-between items-center h-16 space-x-4">
                            <span className="text-gray-500 text-sm">Hello Again, Rio</span>
                                <div className="h-9 w-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                                    R
                                </div>
                        </div>

                    </div>
                </div>
            </nav>
            {/* CONTENT */}
            <main className="max-w-7xl mx-auto py-8 px-2">
                <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h2>
                    <p className="text-gray-600 mb-6">
                        System Running Normal
                    </p>

                    <button onClick={handleLogout} className="btn-danger">
                        Logout
                    </button>
                </div>

                <div className="div-grid">

                    <div className="div-grid-content border-blue-500">
                        <p className="div-grid-content-p1">Total Users</p>
                        <p className="div-grid-content-p2">1,212</p>
                    </div>

                    <div className="div-grid-content border-green-500">
                        <p className="div-grid-content-p1">Revenue</p>
                        <p className="div-grid-content-p2">$12,474</p>
                    </div>

                    <div className="div-grid-content border-purple-500">
                        <p className="div-grid-content-p1">Activate</p>
                        <p className="div-grid-content-p2">32</p>
                    </div>

                </div>
            </main>
        </div>
    )
}
export default Dashboard