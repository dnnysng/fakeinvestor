import PageTitle from '../components/page-title/PageTitle';
import FeaturedNews from '../components/featured-news/FeaturedNews';
import NewsGrid from '../components/news-grid/NewsGrid';

import style from './style/page.module.css';

export default function News({ articles }) {
    return (
        <div className={style.block}>
            <PageTitle title="late$t NEW$" />
            <FeaturedNews articles={articles} />
            <NewsGrid articles={articles} />
        </div>
    );
}
