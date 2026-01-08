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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <p className="text-gray-500 text-sm">Total Users</p>
                        <p className="text-2xl font-bold text-gray-800">1,212</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                        <p className="text-gray-500 text-sm">Revenue</p>
                        <p className="text-2xl font-bold text-gray-800">$12,474</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                        <p className="text-gray-500 text-sm">Activate</p>
                        <p className="text-2xl font-bold text-gray-800">32</p>
                    </div>

                </div>
            </main>
        </div>
    )
}
export default Dashboard