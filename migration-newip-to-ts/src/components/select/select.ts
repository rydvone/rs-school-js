import '../../global.css';

class Select {
    public _eTargetNews: Event | undefined;

    selectSort() {
        const selectSortBy = document.querySelector('#select-sort') as HTMLSelectElement;

        return selectSortBy.value;
    }

    get eTargetNews() {
        return this._eTargetNews;
    }

    set eTargetNews(e: Event | undefined) {
        this._eTargetNews = undefined;
        if (e) {
            this._eTargetNews = e;
        }
    }

    selectListener(e: Event) {
        const select = e.target as HTMLInputElement;
        if (select === null) {
            throw new Error('False <select> e.target');
        }
        return select.value;
    }
}

export default Select;
