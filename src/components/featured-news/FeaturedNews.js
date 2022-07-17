import style from './FeaturedNews.module.css';

export default function FeaturedPosts({ articles }) {
    console.log(articles);
    const smallPosts = [articles[1], articles[2], articles[3]];
    return (
        <section id="headlines" className={style.block}>
            <div className={style.container}>
                <div className={style.single}>
                    <a
                        className={style.link}
                        href={articles[0].url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={style.largePost}>
                            <article className={style.wrapper}>
                                <img
                                    className={style.image}
                                    src={articles[0].urlToImage}
                                    alt=""
                                />
                                <div className={style.details}>
                                    <small className={style.source}>
                                        {articles[0].source.name}
                                    </small>
                                    <h4 className={style.title}>
                                        {articles[0].title}
                                    </h4>
                                    <p className={style.excerpt}>
                                        {articles[0].description}
                                    </p>
                                </div>
                            </article>
                        </div>
                    </a>
                </div>
                <div className={style.triple}>
                    {smallPosts.map((article, id) => (
                        <a
                            className={style.link}
                            href={articles[0].url}
                            target="_blank"
                            rel="noreferrer"
                            key={id}
                        >
                            <div className={style.smallPost}>
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
                                    </div>
                                </article>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
