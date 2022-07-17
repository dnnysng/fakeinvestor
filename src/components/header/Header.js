import { Link } from 'react-router-dom';

import logo from '../../assets/images/fakeinvestor-text.png';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';

import style from './Header.module.css';

export default function Header({ toggleMenu }) {
    return (
        <header className={style.block}>
            <div className={style.container}>
                <div className={style.logoWrapper}>
                    <img
                        className={style.logo}
                        src={logo}
                        alt="fakeinvestor text logo"
                    />
                </div>
                <nav className={style.nav}>
                    <Link className={style.link} to="/">
                        Home
                    </Link>
                    <Link className={style.link} to="/news">
                        News
                    </Link>
                    <Link className={style.link} to="/tools">
                        Tools
                    </Link>
                    <Link className={style.link} to="/shop">
                        Shop
                    </Link>
                </nav>
                <Hamburger className={style.hamburger} onClick={toggleMenu} />
            </div>
        </header>
    );
}
