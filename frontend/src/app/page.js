import Head from 'next/head';

import Nav from '@components/nav/nav';
import Section from '@components/section/section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | CHOP</title>
        <desc>Sign In to your Chop dashboard.</desc>
      </Head>
      <Nav arr={[ 'title', 'loginBtn', 'signupBtn' ]} />
      <div className="flex-1 flex flex-col w-full justify-center gap-2 m-3">
        
        
        {/* <Section>
          <div className={}>Only 3 Rules</div>
          <div className={}>
            <ul>
              <li>Dont be A Dick</li>
              <li>Have Fun</li>
            </ul>
          </div>
          <div className={styles.panel} />  
        </Section>

        <Section>
          <div className={styles.title}>Why <br /> Chop?</div>
          <div className={styles.rules}>
            Nrskfl Tdf Dfsmoer Kfdsoe Edfgje D Grednerdfn In Refd D Hgrnfdxc Hre Fdvber Dffv Rdj
            Nefdnvreo&nbsp;&nbsp;Nre Krej,dnv Erfdjkervfdnf Vevner Redf Nvervdvnervdf Vrev Dv Ndn Vien Vfd Ukvjn Edfvnr
          </div>
          <div className={} >
            {["Chop", "Life", "DnD", "Riz"].map( (str, i) => (
              <div key={i} className={styles.rectangle}>{str}</div>
            ))}
          </div>
        </Section>

        <Section>
        Leave me alone
        </Section> */}
      </div>
    </>
  )
}
 