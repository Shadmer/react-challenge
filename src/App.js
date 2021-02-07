import React, {useEffect} from "react";
import Context from "./context";
import NewsMenu from "./components/NewsMenu";
import NewsList from "./components/NewsList";
import LoadMore from "./components/LoadMore";
import Loader from './components/Loader';
import noImage from './assets/img/no-image.jpg';

function App() {

    let [news, setNews] = React.useState(
        []
    );
    let [newsToShow, setNewsToShow] = React.useState(
        []
    );
    let [menu, setMenu] = React.useState(
        [
            {title: 'Россия', href: '#', isActive: true},
            {title: 'Мир', href: '#', isActive: false},
            {title: 'Валюта', href: '#', isActive: false},
            {title: 'Тренды', href: '#', isActive: false},
        ]
    );
    let [errMessage, setErrMessage] = React.useState(null);
    let [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://api.bcs.ru/express_articles/v1')
            .then(response => response.json())
            .then(res => {
                let news,
                    newsToShow;

                news = res;
                newsToShow = news.splice(0, 3);

                setNews(news);
                setNewsToShow(newsToShow);
            })
            .catch(err => {
                setErrMessage('Ошибка соединения...');
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    function loadMore() {
        let newsList,
            newsToShowList;

        newsList = news;
        newsToShowList = newsList.splice(0, 3);

        setNews(newsList);
        setNewsToShow(newsToShow.concat(newsToShowList));
    }

    return (
        <Context.Provider value={{loadMore}}>
            <div className="app">
                <div className="app__top-menu">
                    <NewsMenu menu={menu}/>
                </div>
                <div className="app__content">
                    {loading ? <Loader/> : null}

                    {newsToShow.length
                        ? (
                            <NewsList news={newsToShow}/>
                        ) : (
                            loading ? null : (
                                <div className="app__blank">
                                    <h2>{errMessage}</h2>
                                    <img src={noImage} alt="blank"/>
                                </div>
                            )
                        )}

                </div>
                <div className="app__bottom-menu">
                    {loading ? null : <LoadMore news={news}/>}
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
