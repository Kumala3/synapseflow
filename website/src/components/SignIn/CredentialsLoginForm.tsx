"use client";

import { Input, Button } from "@nextui-org/react";

export default function CredentialsLoginForm() {
    return (
        <main className="p-[100px] flex flex-col items-center">
            <div className="honk-brand text-[100px]">
                Candeel
            </div>

            <div className="flex flex-col gap-4 w-[380px] p-2 rounded shadow-lg">
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
                <Button className="mt-1" size="md" type="submit">
                    Sign In
                </Button>
            </div>
        </main>
    );
}
