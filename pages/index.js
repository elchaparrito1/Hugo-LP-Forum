// import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/MyLayout';
import Form from './form';
import '../assets/sass/style.scss';

function HomePage() {
  return (
    <Layout>
      {/* <Head>
        <link rel="stylesheet" href="../static/css/view.css" />
      </Head> */}
      <div className="testingDiv">Welcome to Next.js!</div>
      <div></div>
    </Layout>
  );
}

export default HomePage;
