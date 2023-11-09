import Link from 'next/link';
import { Lily_Script_One } from 'next/font/google';
import { MdOutlineManageAccounts, MdTravelExplore } from 'react-icons/md';


const lily_script_one = Lily_Script_One({ subsets: ['latin'], weight: ['400'] })


export default function Nav({ arr }) {


    return (
        <header className='fixed top-0 w-full shadow-md border-gray-200/50 border-b'>
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-5">
                    
            <Link href="/" className=' hover:opacity-80'>
                <span className="flex flex-shrink-0 items-center text-3xl"><h1 className={lily_script_one.className}>C.H.O.P</h1></span>
            </Link>

            <div className="block w-auto" id="navbar-default">
            <ul className="text-lg flex p-0 flex-row space-x-6 mt-0 ">
            </ul>
            </div>

            <div className=" block w-auto" id="navbar-default">
            <ul className="text-xl flex flex-row space-x-5 p-1">
                {arr.includes('Explore') && (
                    <li>
                        <Link href="/explore" className='hover:opacity-80'><MdTravelExplore /></Link>
                    </li>
                )} 

                {arr.includes('Account') && (
                    <li>
                        <Link href="/account" className='hover:opacity-80'><MdOutlineManageAccounts /></Link>
                    </li>
                )} 
            </ul>
            </div>


        </nav>
        </header>
    );
}