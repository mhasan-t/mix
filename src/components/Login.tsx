"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSignIn() {
		let res = await fetch("http://localhost:8000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ email: email, password: password }),
		});

		if (res.status === 201) {
			let data = await res.json();
			localStorage.setItem("token", data.token);
			console.log("logged in");
			router.push("/home");
		}
	}

	return (
		// LOGIN PAGE
		<div className="flex flex-col py-2">
			<h1 className="font-bold text-2xl">Login</h1>
			<span className="text-gray-600">Already have an account?</span>

			<input
				type="email"
				placeholder="email@example.com"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setEmail(e.target.value);
				}}
			/>
			<input
				type="password"
				placeholder="password"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setPassword(e.target.value);
				}}
			/>
			<button type="submit" onClick={handleSignIn}>
				Sign in
			</button>
		</div>
	);
}
