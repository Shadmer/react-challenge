import React from 'react';

export default function NewsMenu(props) {

    function clickHandler(e) {
        e.preventDefault();
    }

    return (
        <ul className="news-menu">
            {props.menu.map((menuItem, index) => {
                let classes = [
                    'news-menu__item'
                ];

                if (menuItem.isActive) {
                    classes.push('news-menu__item--active');
                }

                return (
                    <li className={classes.join(" ")} key={index}>
                        <a href={menuItem.href} onClick={clickHandler}>{menuItem.title}</a>
                    </li>
                )
            })}
        </ul>

    )
}


