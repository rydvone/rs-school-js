import News from './news/news';
import { ResponseArticle } from '../../types/articles';
import { ResponseSource } from '../../types/source';
import Slider from '../slider/slider';

export class AppView {
    private news: News;
    private slider: Slider;

    constructor() {
        this.news = new News();
        this.slider = new Slider();
    }

    public drawNews(data: ResponseArticle): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseSource): void {
        const values = data?.sources ? data?.sources : [];
        this.slider.slideControl(values);
    }
}

export default AppView;
