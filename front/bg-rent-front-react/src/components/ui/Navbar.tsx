import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import EventSelector from './EventSelector';
import styles from './Navbar.module.css';

interface Props {
  children?: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => (
  <Fragment>
    <nav className={styles['main-navbar']}>
      <Link to='/' className={styles['nav-link']}>
        Home
      </Link>
      <Link to='/rent' className={styles['nav-link']}>
        Rent
      </Link>
      <Link to='/return' className={styles['nav-link']}>
        Return
      </Link>
      <EventSelector />
    </nav>
    {children}
  </Fragment>
);

export default Navbar;
