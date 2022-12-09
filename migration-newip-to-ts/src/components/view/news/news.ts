import './news.css';
import { IArticle } from '../../../types/articles';
import TemplateVisual from '../../template/template';

// type NullOrHTML = null | HTMLElement;
class News {
    private _template: TemplateVisual;

    constructor() {
        this._template = new TemplateVisual();
    }

    draw(data: IArticle[]) {
        if (data.length === 0) {
            this._template.makeTemplate('.visual-news', true);
        } else if (data.length !== 0) {
            this._template.makeTemplate('.visual-news', false);
        }
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLInputElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage ||
                `https://flomaster.club/uploads/posts/2021-11/1635853791_1-flomaster-club-p-narisovannaya-gazeta-krasivii-risunok-1.jpg`
            })`;

            (newsClone.querySelector('.news__meta-author') as HTMLElement).textContent =
                item.author || item.source.name;

            (newsClone.querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLElement).textContent = item.title;

            (newsClone.querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;

            (newsClone.querySelector('.news__description-content') as HTMLElement).textContent = item.description;

            (newsClone.querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '';
        (document.querySelector('.news') as HTMLElement).appendChild(fragment);
    }
}

export default News;
