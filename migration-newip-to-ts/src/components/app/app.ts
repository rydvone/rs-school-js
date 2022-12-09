import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ResponseArticle } from '../../types/articles';
import { ResponseSource } from '../../types/source';
import Select from '../select/select';

class App {
    private _controller: AppController;
    private _view: AppView;
    private _select: Select;

    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
        this._select = new Select();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) => {
            const getPage = this._select.selectSort();
            this._select.eTargetNews = e;
            return this._controller.getNews(e, getPage, (data: ResponseArticle) => this._view.drawNews(data));
        });
        (document.querySelector('#select-sort') as HTMLElement).addEventListener('change', (e) => {
            const getPage = this._select.selectListener(e);
            if (this._select.eTargetNews !== undefined) {
                this._controller.getNews(this._select.eTargetNews, getPage, (data: ResponseArticle) =>
                    this._view.drawNews(data)
                );
            }
        });
        this._controller.getSources((data: ResponseSource) => this._view.drawSources(data));
    }
}

export default App;
