import Header from "../components/Header";


export default function Signup() {
    return (
        <>
        <div>
            <Header />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen py-2">

        <h1 className="text-4xl font-semibold mb-3">Signup</h1>

        <label className="text-xl font-medium mt-3">Username</label>
        <input
        className="p-2 mt-2 text-black rounded"
        id="username"
        type="username"
        placeholder="Enter your username"></input>

        <label className="text-xl font-medium mt-3">Email</label>
        <input
        className="p-2 mt-2 text-black rounded"
        id="email"
        type="email"
        placeholder="Enter your email">
        </input>

        <label className="text-xl font-medium mt-3">Password</label>
        <input
        className="p-2 mt-2 text-black rounded"
        id="password"
        type="password"
        placeholder="Enter your password"></input>

        <button className="border-2 mt-8 p-2 w-48 bg-sky-400"
        onClick={() => {
            console.log("Signup button clicked")
        }}
        >Signup</button>

        <a href="/login" className="p-2 font-medium text-base">Already a user? Login here!</a>

        </div>
        </>

    )
}