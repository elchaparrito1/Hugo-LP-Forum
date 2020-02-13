import Head from 'next/head';
import Form from '../components/Form';
import { LogoHeader } from '../components/Header';
import '../assets/sass/style.scss';

/* eslint-disable react/display-name */
const RSVPForm = () => (
  <>
    {/* <Head>
      <link rel="stylesheet" href="../static/css/view.css" />
    </Head> */}
    <section className="hero is-fullheight has-bg-img">
      <LogoHeader />
      <div className="hero-body">
        <div className="container">
          <Form />
        </div>
      </div>
    </section>
  </>
);

export default RSVPForm;
