/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { NavHeader } from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = props => (
  <div style={layoutStyle}>
    <NavHeader />
    {props.children}
  </div>
);

export default Layout;
