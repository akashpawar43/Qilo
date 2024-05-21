import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className=" w-full bg-zinc-950 sticky h-16 top-0">
            <div className=" w-full h-full flex justify-start justify-center items-center">
                <button onClick={() => { navigate("/") }} className=' text-white hover:bg-zinc-700 rounded-md px-3 py-1'>
                    Q1
                </button>
                <button onClick={() => { navigate("/task2") }} className=' text-white hover:bg-zinc-700 rounded-md px-3 py-1'>
                    Q2
                </button>
                <button onClick={() => { navigate("/task3") }} className=' text-white hover:bg-zinc-700 rounded-md px-3 py-1'>
                    Q3
                </button>
            </div>
        </nav>
    )
}
