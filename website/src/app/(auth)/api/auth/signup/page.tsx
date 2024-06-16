import SignUpLoginForm from "@/components/Auth/SingUpLoginForm";

export default async function SignUp() {
    return (
        <main className="dark:bg-[#000000] bg-[#fff] flex justify-center mt-4 p-6">
            <SignUpLoginForm />
        </main>
    );
}
