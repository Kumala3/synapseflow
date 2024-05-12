import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
    id: string;
    username: string;
    password: string;
}

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-unique-username",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(
                credentials: Record<"username" | "password", string> | undefined
            ): Promise<User | null> {
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)

                // const res = await fetch("/your/endpoint", {
                //     method: "POST",
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" },
                // });
                // const user = await res.json();

                // If no error and we have user data, return it
                // if (res.ok && user) {
                //     return user;
                // }

                const user = {
                    id: "654743532",
                    username: "Kiids",
                    password: "gthyers5vhtrsz$2ctbd",
                };

                if (
                    credentials?.username === user.username &&
                    credentials?.password === user.password
                ) {
                    // Return the user object if the credentials are valid
                    return user;
                } else {
                    // Return null if user data could not be retrieved
                    return null;
                }
            },
        }),
    ],
    // Read more about custom pages here: https://next-auth.js.org/configuration/options
    // pages: {}
};
