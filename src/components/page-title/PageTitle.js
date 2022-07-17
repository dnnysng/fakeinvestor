import style from './PageTitle.module.css';

export default function PageTitle({ title }) {
    return (
        <section className={style.block}>
            <div className={style.container}>
                <h1 className={style.title}>{title}</h1>
            </div>
        </section>
    );
}
