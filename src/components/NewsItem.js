import React from 'react';
import noImage from '../assets/img/no-image.jpg';

export default function NewsItem({newItem}) {
    function getDate(time) {
        let date = new Date(time);
        let options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
        };
        return date.toLocaleString("ru", options)
            .replace(/\s*г\./, "");
    }

    function insertImage(image, title) {
        return image
            ? <img src={image} alt={title}/>
            : <img src={noImage} alt={title}/>
    }

    return (
        <div className="news-item">

            <a className="news-item__rubric" href={newItem.rubric_url}>
                {newItem.rubric}
            </a>

            <h3 className="news-item__title">
                <a href={newItem.article_url}>{newItem.title}</a>
            </h3>

            <div className="news-item__img">
                {insertImage(newItem.small_image_url, newItem.title)}
            </div>

            <div className="news-item__info">
                <div className="news-item__date">
                    <span>
                    {getDate(newItem.publish_date)}
                </span>
                </div>

                <div className="news-item__buttons">
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M21 9.71429C21 14.7634 12 20 12 20C12 20 3 14.7634 3 9.71429C3 9.58343 3 9.208 3 9.14286C3 6.30229 5.26631 4 8.0625 4C9.65325 4 11.0719 4.74686 11.9989 5.91257C12.927 4.74686 14.3462 4 15.9375 4C18.7337 4 21 6.30229 21 9.14286C21 9.20743 21 9.58286 21 9.71429Z"
                                  stroke="#CDD9E9" strokeWidth="1.5"/></svg>
                        <span>{newItem.like_count}</span>
                    </button>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M11.9999 19.116C6.90193 19.116 2.76918 15.6633 2.76918 11.4042C2.76918 7.14508 6.90193 3.69238 11.9999 3.69238C17.098 3.69238 21.2307 7.14508 21.2307 11.4042C21.2307 12.5746 20.7237 14.3956 19.8877 15.5473C18.8034 17.0408 17.2496 17.9769 17.2496 17.9769C17.2496 17.9769 17.2389 18.4557 17.4153 19.116C17.5917 19.7763 17.9654 20.2413 17.9654 20.2413C17.9654 20.2413 16.9641 20.5194 15.7511 19.9377C14.8901 19.5249 14.1139 18.9128 14.1139 18.9128C14.1139 18.9128 12.7273 19.116 11.9999 19.116Z"
                            stroke="#CDD9E9" strokeWidth="1.5"/></svg>
                        <span>{newItem.comment_count}</span>
                    </button>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.235 11.4149H17.5511C18.3193 11.4149 18.942 11.9584 18.942 12.6298V19.7852C18.942 20.4561 18.3158 21.0001 17.5478 21.0001H6.3941C5.6241 21.0001 4.99989 20.4565 4.99989 19.7852V12.2238C4.99989 11.5528 5.62096 11.4149 6.39215 11.4149H8.71052" stroke="#CDD9E9" strokeWidth="1.5"/>
                            <path d="M11.9709 4.92853V17.1279" stroke="#CDD9E9" strokeWidth="1.5" strokeLinecap="square"/>
                            <path d="M7.04167 7.92927L11.9234 4.01771L16.9002 7.92927" stroke="#CDD9E9" strokeWidth="1.5"/></svg>
                    </button>
                </div>
            </div>
        </div>

    )
}