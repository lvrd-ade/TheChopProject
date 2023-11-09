import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export default async function NoAuthTemplate({ children }) {
    // TODO
    // const supabase = createServerClient({ cookies })
    // const { data, error } = await supabase.auth.getSession()
    
    // if(data.session){
    //     redirect('/')
    // }
    
    return children;
}