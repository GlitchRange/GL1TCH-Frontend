import Head from 'next/head';
import Header from '../Header';
import '../globals.css';

export default function Dashboard() {
  return (
    <div className="container darker-blue">
      <Head>
        <title>Glitch - Dashboard</title>
      </Head>
      <Header></Header>
      <div className="grid grid-cols-2 gap-4">
        {/* Add your boxes content here. You can duplicate the following structure for each box. */}
        <div className="box lighter-blue">{/* Box Content */}</div>
        <div className="box lighter-blue">{/* Box Content */}</div>
      </div>
    </div>
  );
}
