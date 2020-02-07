import Link from 'next/link';
import Logo from '../static/images/HLP.jpg';

const linkStyle = {
  marginRight: 15,
};

const NavHeader = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

const LogoHeader = () => (
  <figure className="image is-128x128">
    <img className="logo-img" alt="company logo" src={Logo} />
  </figure>
);

export { NavHeader, LogoHeader };
