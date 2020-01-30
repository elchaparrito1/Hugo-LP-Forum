// import Link from 'next/link';
import Layout from '../components/MyLayout';
import Form from './form';

function HomePage() {
  return (
    <Layout>
      <div>Welcome to Next.js!</div>
      <div>
        <Form />
      </div>
    </Layout>
  );
}

export default HomePage;
