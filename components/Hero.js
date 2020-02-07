/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import '../assets/sass/style.scss';

/* eslint-disable react/display-name */
const Hero = props => (
  <>
    <section className="hero">
      <div className="hero-body">{props.children}</div>
    </section>
  </>
);

export default Hero;
