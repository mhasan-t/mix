"use client";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	return (
		// LOGIN PAGE
		<div className="flex gap-2 min-w-full min-h-screen py-2">
			<div>
				<Login />
			</div>
			<div>
				<Register />
			</div>
		</div>
	);
}
