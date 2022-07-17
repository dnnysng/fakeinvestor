import style from './NewsGrid.module.css';

export default function NewsGrid({ articles }) {
    const croppedArticles = [];
    for (let i = 4; i < 16; i++) {
        croppedArticles.push(articles[i]);
    }
    return (
        <section className={style.block}>
            <div className={style.container}>
                {croppedArticles.map((article, id) => (
                    <a
                        className={style.link}
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        key={id}
                    >
                        <div className={style.largePost}>
                            <article className={style.wrapper}>
                                <img
                                    className={style.image}
                                    src={article.urlToImage}
                                    alt=""
                                />
                                <div className={style.details}>
                                    <small className={style.source}>
                                        {article.source.name}
                                    </small>
                                    <h4 className={style.title}>
                                        {article.title}
                                    </h4>
                                    <p className={style.excerpt}>
                                        {article.content}
                                    </p>
                                </div>
                            </article>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
