import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export default async function AuthTemplate({ children }) {
    // const supabase = createServerClient({ cookies }) //TODO
    // const { data, error } = await supabase.auth.getSession()
    
    // if(data.session == null){
    //     if(error) console.error(error)
    //     redirect('/sign-in')
    // }
    
    // return children({ major: { user: data.session.user, signOut: () => supabase.auth.signOut() } });
    return children
}