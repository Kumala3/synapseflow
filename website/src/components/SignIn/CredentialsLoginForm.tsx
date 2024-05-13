"use client";

import { Input, Button } from "@nextui-org/react";

export default function CredentialsLoginForm() {
    return (
        <main className="p-[100px] flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4 w-[380px] bg-[#0d1117] p-4 rounded shadow-lg">
                <Input
                    className=""
                    type="text"
                    placeholder="Username"
                    label="Username"
                />
                <Input
                    className=""
                    type="password"
                    placeholder="Password"
                    label="Password"
                />
                <Button className="mt-4" size="md" type="submit">
                    Sign In
                </Button>
            </div>
        </main>
    );
}
