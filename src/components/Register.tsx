"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
	const router = useRouter();

	// STATES
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	async function handleSignUp() {
		if (password !== confirmPassword) {
			alert("no");
		}

		let res = await fetch("http://localhost:8000/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
			}),
		});

		if (res.status === 201) {
			let data = await res.json();
			router.push("/home");
		}
	}

	return (
		<div className="flex flex-col py-2">
			<h1 className="font-bold text-2xl">Create Account</h1>
			<span className="text-gray-600">
				Don't have an account? Register here.
			</span>

			<input
				type="text"
				placeholder="John Doe"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setName(e.target.value);
				}}
			/>
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
			<input
				type="password"
				placeholder="password"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setConfirmPassword(e.target.value);
				}}
			/>
			<button type="submit" onClick={handleSignUp}>
				Register
			</button>
		</div>
	);
}
