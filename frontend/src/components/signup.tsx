export default function Signup({ setNewUser }: { readonly setNewUser: (val: boolean) => void }) {
    return (
        <div className="flex flex-col">
            <input
                type="text"
                placeholder="Full name"
                className="bg-gray-100 rounded-sm px-4 py-2 w-72 sm:w-96"
            />
            <br />
            <input
                type="email"
                placeholder="Your email"
                className="bg-gray-100 rounded-sm px-4 py-2 w-72 sm:w-96"
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                className="bg-gray-100 rounded-sm px-4 py-2 w-72 sm:w-96"
            />
            <br />
            <button
                className="bg-[#766BBC] text-white rounded px-4 py-2 w-72 sm:w-96"
            >
                Login
            </button>
            <br />
            <span className="text-center">Already have an account? <button className="text-[#766BBC]" onClick={() => setNewUser(false)}>Log in</button>.</span>
        </div >
    );
}