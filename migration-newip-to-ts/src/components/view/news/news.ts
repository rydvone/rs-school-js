import './news.css';
import { IArticle } from '../../../types/articles';

class News {
    draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            // if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');
            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLInputElement).classList.add('alt');

            // (newsClone.querySelector('.news__meta-photo') as HTMLInputElement).style.backgroundImage = `url(${
            //     item.urlToImage || 'img/news_placeholder.jpg'
            // })`;
            const urlToImageItem = newsClone.querySelector('.news__meta-photo') as HTMLInputElement;
            if (urlToImageItem === null) {
                throw new Error('No element');
            }
            urlToImageItem.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const authorItem = newsClone.querySelector('.news__meta-author');
            if (authorItem === null) {
                throw new Error('No element');
            }
            authorItem.textContent = item.author || item.source.name;

            const publishedAtItem = newsClone.querySelector('.news__meta-date');
            if (publishedAtItem === null) {
                throw new Error('No element');
            }
            publishedAtItem.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const titleItem = newsClone.querySelector('.news__description-title');
            if (titleItem === null) {
                throw new Error('No element');
            }
            titleItem.textContent = item.title;

            const sourceNameItem = newsClone.querySelector('.news__description-source');
            if (sourceNameItem === null) {
                throw new Error('No element');
            }
            sourceNameItem.textContent = item.source.name;

            const descriptionItem = newsClone.querySelector('.news__description-content');
            if (descriptionItem === null) {
                throw new Error('No element');
            }
            descriptionItem.textContent = item.description;

            // newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);
            const setAttributeItem = newsClone.querySelector('.news__read-more a');
            if (setAttributeItem === null) {
                throw new Error('No element');
            }
            setAttributeItem.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        // document.querySelector('.news').innerHTML = '';
        // document.querySelector('.news').appendChild(fragment);
        const newsItem = document.querySelector('.news');
        if (newsItem === null) {
            throw new Error('No element');
        }
        newsItem.innerHTML = '';
        newsItem.appendChild(fragment);
    }
}

export default News;
