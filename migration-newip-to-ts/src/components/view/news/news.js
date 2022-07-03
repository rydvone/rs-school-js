"use strict";
exports.__esModule = true;
require("./news.css");
var News = /** @class */ (function () {
    function News() {
    }
    News.prototype.draw = function (data) {
        var news = data.length >= 10 ? data.filter(function (_item, idx) { return idx < 10; }) : data;
        var fragment = document.createDocumentFragment();
        var newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach(function (item, idx) {
            var newsClone = newsItemTemp.content.cloneNode(true);
            // if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');
            if (idx % 2)
                newsClone.querySelector('.news__item').classList.add('alt');
            // (newsClone.querySelector('.news__meta-photo') as HTMLInputElement).style.backgroundImage = `url(${
            //     item.urlToImage || 'img/news_placeholder.jpg'
            // })`;
            var urlToImageItem = newsClone.querySelector('.news__meta-photo');
            if (urlToImageItem === null) {
                throw new Error('No element');
            }
            urlToImageItem.style.backgroundImage = "url(".concat(item.urlToImage || 'img/news_placeholder.jpg', ")");
            var authorItem = newsClone.querySelector('.news__meta-author');
            if (authorItem === null) {
                throw new Error('No element');
            }
            authorItem.textContent = item.author || item.source.name;
            var publishedAtItem = newsClone.querySelector('.news__meta-date');
            if (publishedAtItem === null) {
                throw new Error('No element');
            }
            publishedAtItem.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            var titleItem = newsClone.querySelector('.news__description-title');
            if (titleItem === null) {
                throw new Error('No element');
            }
            titleItem.textContent = item.title;
            var sourceNameItem = newsClone.querySelector('.news__description-source');
            if (sourceNameItem === null) {
                throw new Error('No element');
            }
            sourceNameItem.textContent = item.source.name;
            var descriptionItem = newsClone.querySelector('.news__description-content');
            if (descriptionItem === null) {
                throw new Error('No element');
            }
            descriptionItem.textContent = item.description;
            // newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);
            var setAttributeItem = newsClone.querySelector('.news__read-more a');
            if (setAttributeItem === null) {
                throw new Error('No element');
            }
            setAttributeItem.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        // document.querySelector('.news').innerHTML = '';
        // document.querySelector('.news').appendChild(fragment);
        var newsItem = document.querySelector('.news');
        if (newsItem === null) {
            throw new Error('No element');
        }
        newsItem.innerHTML = '';
        newsItem.appendChild(fragment);
    };
    return News;
}());
exports["default"] = News;
