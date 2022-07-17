import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import style from './MobileMenu.module.css';

export default function MobileMenu({ toggleMenu }) {
    const variants = {
        start: {
            y: '-100vh',
        },
        open: {
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
        close: {
            y: '-100vh',
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.nav
            className={style.menu}
            variants={variants}
            initial="start"
            animate="open"
            exit="close"
        >
            <Link onClick={toggleMenu} className={style.link} to="/">
                home
            </Link>
            <Link onClick={toggleMenu} className={style.link} to="/news">
                new<span style={{ color: '#28ce40' }}>$</span>
            </Link>
            <Link onClick={toggleMenu} className={style.link} to="/tools">
                tool<span style={{ color: '#28ce40' }}>$</span>
            </Link>
            <Link onClick={toggleMenu} className={style.link} to="/shop">
                <span style={{ color: '#28ce40' }}>$</span>hop
            </Link>
        </motion.nav>
    );
}
