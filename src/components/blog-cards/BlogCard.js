import dayjs from 'dayjs';

import style from './BlogCard.module.css';

export default function BlogCard(article) {
    const detail = article.article;

    return (
        <a
            className={style.link}
            href={detail.url}
            target="_blank"
            rel="noreferrer"
        >
            <article className={style.wrapper}>
                <img className={style.image} src={detail.urlToImage} alt="" />
                <div className={style.details}>
                    <h4 className={style.title}>{detail.title}</h4>
                    <small className={style.source}>{detail.source.name}</small>
                </div>
            </article>
        </a>
    );
}
