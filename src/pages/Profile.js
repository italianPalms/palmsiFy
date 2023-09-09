import Header from "../components/Header";

    export default function Profile() {
        return (
            <>
            <div className="mt-2">
                <Header />
            </div>
            <div className="flex flex-col items-center justify-center mt-40 ">
                <h1 className="text-4xl font-semibold">Welcome to your profile</h1>
            </div>
            </>
        )
    }