import React, {useContext} from 'react';
import Context from "../context";

export default function LoadMore(props) {
    const {loadMore} = useContext(Context);
    let classes = [
        'load-more__btn',
        'btn'
    ];
    let isDisable = false;

    if (!props.news.length) {
        classes.push('btn--disabled');
        isDisable = true;
    }

    return (
        <div className="load-more">
            <button
                className={classes.join(' ')}
                disabled={isDisable}
                onClick={loadMore.bind(this)}
            >
                {props.news.length ? 'Смотреть ещё' : 'Новостей нет'}
            </button>
        </div>
    )
}


