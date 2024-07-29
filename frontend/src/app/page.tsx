"use client";

import Login from "@/components/login";
import Signup from "@/components/signup";
import { useState } from "react";

export default function Home() {
    const [newUser, setNewUser] = useState<boolean>(false);

    return (
        <main className="bg-gradient-to-t from-[#B1A5FE] flex min-h-screen flex-col items-center justify-center">
            <div className="bg-white rounded border p-10">
                <h1
                    className="text-center text-2xl font-bold"
                >
                    Welcome to <span className="text-[#766BBC]">Taskify</span>!
                </h1>
                <br />
                {newUser ? <Signup setNewUser={setNewUser} /> : <Login setNewUser={setNewUser} />}
            </div>
        </main>
    );
}
