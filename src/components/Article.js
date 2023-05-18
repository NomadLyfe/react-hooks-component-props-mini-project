import React from 'react';

function Article ({ title, date='January 1, 1970', preview, minutes }) {
    let coffee = '';
    let bentoBox = '';
    if (minutes < 30) {
        for (let i = Math.ceil(minutes/5); i > 0; i--) {
            coffee += '☕️';
        }
    } else {
        for (let i = Math.ceil(minutes/10); i > 0; i--) {
            coffee += '🍱';
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {coffee ? coffee : bentoBox} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;