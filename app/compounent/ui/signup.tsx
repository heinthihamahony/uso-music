"use client";
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

interface SignupProps {
  onSignup: (username: string) => void;
}

export default function SignupComponent({ onSignup }: SignupProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSignup(username.trim());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Welcome to our website
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
            classNames={{
              input: "text-white",
              inputWrapper: "bg-zinc-800 border-zinc-600",
              label: "text-zinc-400",
            }}
            required
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
            size="lg"
            disabled={!username.trim()}
          >
            Get Started
          </Button>
        </form>

        <p className="text-zinc-400 text-sm text-center mt-6">
          Enter your username to start your music journey
        </p>
      </div>
    </div>
  );
}
