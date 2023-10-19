import Head from 'next/head';
import Link from 'next/link';

export default function SignUp() {
    return (<>
        <Head>
            <title>Sign Up | CHOP</title>
            <desc>Sign Up for Chop and Join the Fun.</desc>
        </Head>
        <form
            className="flex-1 flex flex-col max-w-md justify-center gap-2"
            action="/auth/sign-up"
            method="post"
        >

            <label className="text-md" htmlFor="email">
                Email
            </label>
            <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                placeholder="you@example.com"
                required
            />

            <label className="text-md" htmlFor="password">
                Password
            </label>
            <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                placeholder="••••••••"
                required
            />
            <button className="bg-blue-700 rounded-md px-4 py-2 text-white mb-2">
                Sign Up
            </button>
            <p>Have an account? <Link href="/sign-in">Login into your account</Link></p>
        </form>
    </>)    
}