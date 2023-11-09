import Head from 'next/head';
import Link from 'next/link';

import Messages from '@/components/messages/messages';


export default function ForgotPassword() {
    return (<>
        <Head>
            <title>Forgot Password | CHOP</title>
            <desc>Forgot Password to your Chop dashboard.</desc>
        </Head>
        <form
            className="flex-1 flex flex-col max-w-md justify-center gap-2"
            action="/api/forgot-password"
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
            <button className="bg-blue-700 rounded-md px-4 py-2 text-white mb-2 ">
                Send Link To Email
            </button>
            <Messages/>
        </form>
    </>)    
}