import Head from 'next/head';
import Link from 'next/link';

export default function SignIn() {
    return (<>
        <Head>
            <title>Sign In | CHOP</title>
            <desc>Sign In to your Chop dashboard.</desc>
        </Head>
        <form
            className="flex-1 flex flex-col max-w-md justify-center gap-2"
            action="/auth/sign-in"
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
                Sign In
            </button>
            <p>Don&apos;t have an account? <Link href="/sign-up">Signup for an account</Link></p>
        </form>
    </>)    
}