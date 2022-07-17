import shirt from '../../assets/images/run_amc.png';

import style from './Hero.module.css';

export default function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <span className={style.title}>Flex On Brokies</span>
                    <br />
                    <span className={style.subtitle}>
                        So you made a lot of money trading? That's cute.
                        <br />
                        Let mf's know with Fake Investor gear.
                    </span>
                    <br />
                    <a className={style.button} href="/">
                        See Styles
                    </a>
                </div>
                <img className={style.shirt} src={shirt} alt="" />
            </div>
        </section>
    );
}
