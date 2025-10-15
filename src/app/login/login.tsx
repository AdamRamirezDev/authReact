"use client";

import { useState } from "react";

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        //Mas adelante conectare con nextAuth
    }

    return (
        <div className="flex items-center justify-center h-screen border-2">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded shadow-md w-100 h-100 flex flex-col gap-4"
            >
            <h1 className="text-2xl font-bold text-center text-black">Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border text-black p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 required"
            ></input>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border text-black border-black p-2 text-gray focus:ouline-none focus-ring-2 focus:ring-blue-500 required"
            >
            </input>

            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            > Entrar
            </button>
        </form>
    </div>
    );
}