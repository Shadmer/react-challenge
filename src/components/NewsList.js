import React from 'react';
import NewsItem from "./NewsItem";


export default function NewsList(props) {
    return (
        <div className="news-list">
            {props.news.map(newItem => (
                <div className="news-list__item" key={newItem.id}>
                    <NewsItem newItem={newItem}/>
                </div>
            ))}
        </div>
    )
}




