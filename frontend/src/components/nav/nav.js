import styles from './nav.module.css';

export default function Nav({ arr }) {

    const item = 'hello';

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {arr.includes('title') && (
                <li>
                    <div className={styles.title}>C.H.O.P</div>
                </li>
                )}


                {arr.includes('centerOptions') && (
                <li>
                    {item}
                </li>
                )}



                {arr.includes('loginBtn') && (
                <li  >
                    {item}
                </li>
                )}
                {arr.includes('signupBtn') && (
                <li  >
                    {item}
                </li>
                )}
                {arr.includes('search') && (
                <li  >
                    {item}
                </li>
                )}
                {arr.includes('settings') && (
                <li  >
                    {item}
                </li>
                )}
            </ul>
        </nav>
    );
}