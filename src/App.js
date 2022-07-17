import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/header/Header';
import MobileMenu from './components/header/MobileMenu';
import Home from './pages/Home';
import News from './pages/News';
import Shop from './pages/Shop';
import Tools from './pages/Tools';

import style from './App.module.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [articles, setArticles] = useState(null);
    const key = '6386a049577e438fa40603e5db73844b';

    // menu toggle
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    // fetch articles
    useEffect(() => {
        fetch(
            `https://newsapi.org/v2/everything?q=stocks%20or%20crypto&language=en&sortBy=publishedAt&apiKey=${key}`,
        )
            .then((res) => res.json())
            .then((result) => {
                setArticles(() =>
                    result.articles.filter(
                        (article) =>
                            (article.source.name !== 'Investorplace.com' ||
                                article.source.name !== 'The Atlantic') &&
                            (article.urlToImage !==
                                'https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=99'),
                    ),
                );
            });
    }, []);

    return (
        <div className={style.block}>
            <Header
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <AnimatePresence>
                {isMenuOpen && (
                    <MobileMenu
                        className={style.mobileMenu}
                        toggleMenu={toggleMenu}
                    />
                )}
            </AnimatePresence>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                    path="/news"
                    element={articles && <News articles={articles} />}
                />
                <Route path="/tools" element={<Tools />} />
            </Routes>
        </div>
    );
}

export default App;
