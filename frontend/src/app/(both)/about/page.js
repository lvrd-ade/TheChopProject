import Head from 'next/head';
import { Mochiy_Pop_One } from 'next/font/google'

import Nav from '@components/nav/nav';
import Section from '@components/section/section';



const mochiy_pop_one = Mochiy_Pop_One({ subsets: ['latin'], weight: ['400'] })


export default function About() {
  return (
    <>
      <Head>
        <title>About | CHOP</title>
        <desc>Why Chop?</desc>
      </Head>
      <Nav arr={[ 'title', 'loginBtn', 'signupBtn' ]} />
      <main className="border overflow-auto scroll-smooth snap-y snap-mandatory h-full w-full py-5">   
       
        <Section>
          <div className='absolute top-cust-8p w-7/12 h-4/6 text-9xl'>Only 3<br></br> Rules</div>
          <div className='absolute top-cust-65p w-7/12 px-5'>
            <ul className='list-disc text-lg'>
              <li>Dont be A Dick</li>
              <li>Have Fun</li>
              <li>ksf</li>
            </ul>
          </div>
          <div className='border rounded-xl absolute top-cust-8p left-cust-60p h-5/6 w-cust-40p'/>
        </Section>

        {/* <Section>
          <div className=''>Why <br /> Chop?</div>
          <div className=''>
            Nrskfl Tdf Dfsmoer Kfdsoe Edfgje D Grednerdfn In Refd D Hgrnfdxc Hre Fdvber Dffv Rdj
            Nefdnvreo&nbsp;&nbsp;Nre Krej,dnv Erfdjkervfdnf Vevner Redf Nvervdvnervdf Vrev Dv Ndn Vien Vfd Ukvjn Edfvnr
          </div>
            <div className='' >
              {["Chop", "Life", "DnD", "Riz"].map( (str, i) => (
                <div key={i} className={styles.rectangle}>{str}</div>
              ))}
          </div>
        </Section> */}
        <Section>
          <div className='absolute top-cust-8p w-7/12 h-4/6 text-9xl'>Why<br></br> Chop?</div>
          <div className='absolute top-cust-65p w-7/12 px-5'>
            <ul className='list-disc text-lg'>
              <li>Dont be A Dick</li>
              <li>Have Fun</li>
              <li>ksf</li>
            </ul>
          </div>
          <div className='border rounded-xl absolute top-cust-8p left-cust-60p h-5/6 w-cust-40p'/>
        </Section>

        <Section>
          <div className='absolute top-cust-8p w-6/12 h-4/6 text-9xl'>Why<br></br> Chop?</div>

          <div className='absolute top-cust-65p w-6/12 px-5'>
            Yarnergn erngdf er gdszv erdcxing engngr  ndf  ng nv n er xkc v re Dffvjwes Dm main
            jf,s d er hg re n n vre re ifmkr fvn sd rsviroe vv risdvnnregv bo nr nd  l
          </div>

          <div className={mochiy_pop_one.className}>
          <div className='border rounded-xl absolute top-cust-8p left-cust-55p h-5/6 w-cust-45p flex flex-row flex-wrap'>
            <h2 className='absolute top-cust-5p left-cust-10p opacity-80'>POPULAR...</h2>
            {["Chop", "Life", "DnD", "Riz"].map( (str, i) => (
                <div key={i} className='border-cust-border border-solid border-transparent [border-image:linear-gradient(to_top_right,rgba(246,183,60,0.5),rgba(246,183,60,0.5))_30]  rounded-md flex flex-shrink-0 w-5/12 h-2/6 m-2 p-2 items-center justify-center '>{str}</div>
            ))}
          </div>
          </div>
        </Section>
      </main>
    </>
  )
}
 