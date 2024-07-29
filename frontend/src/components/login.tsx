"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login({ setNewUser }: { readonly setNewUser: (val: boolean) => void }) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    function submitHandler() {
        router.push("/dashboard");
    }

    return (
        <div className="flex flex-col">
            <input
                type="email"
                placeholder="Your email"
                className="bg-gray-100 rounded-sm px-4 py-2 w-72 sm:w-96"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                className="bg-gray-100 rounded-sm px-4 py-2 w-72 sm:w-96"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
                className="bg-[#766BBC] text-white rounded px-4 py-2 w-72 sm:w-96"
                onClick={submitHandler}
            >
                Login
            </button>
            <br />
            <span className="text-center">Don't have an account? Create a <button className="text-[#766BBC]" onClick={() => setNewUser(true)}>new account</button>.</span>
        </div>
    );
}