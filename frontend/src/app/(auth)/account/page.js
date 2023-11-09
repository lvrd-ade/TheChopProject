import Link from 'next/link';


export default function Account({major}) {
  const user = major.user

  return (
    <div className="card">
      <h2>User Profile</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">Last Signed In:</div>
      <code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
      <Link className="button" href="/">
        Go Home
      </Link>
      <button onClick={() => major.signOut()}>
        Sign Out 
      </button>
    </div>
  );
}
