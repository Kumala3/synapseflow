export default function SignIn() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form className="flex flex-col w-1/3 mt-4">
                <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md mb-2" />
                <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-md mb-2" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Sign In</button>
            </form>
        </div>
    );
}
