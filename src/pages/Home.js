import PageTitle from '../components/page-title/PageTitle';

import style from './style/page.module.css';

export default function Home() {
    return (
        <div className={style.block}>
            <PageTitle title={'fakeinve$tor'} />
        </div>
    );
}
