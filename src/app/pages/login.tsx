import Head from 'next/head';
import '../globals.css';

export default function Login() {
  return (
    <div className="container lighter-blue">
      <Head>
        <title>Glitch - Hacker Login</title>
      </Head>
      <h1>Hacker Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="green" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
