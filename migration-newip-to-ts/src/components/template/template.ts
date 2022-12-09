import '../../global.css';

class TemplateVisual {
    makeTemplate(element: string, res: boolean) {
        const templateItem = document.querySelector(element) as HTMLElement;
        templateItem.classList.remove('add');

        function clearFragment(element: string) {
            const item = document.querySelector(element);
            if (item === null) {
                throw new Error('No element');
            }
            item.innerHTML = '';
        }

        if (res && element === '.visual') {
            templateItem.classList.add('add');
            (document.querySelector('.visual-news') as HTMLElement).classList.remove('add');
            clearFragment('.sources');
            clearFragment('.news');
            clearFragment('.slider-control');
        }
        if (res && element === '.visual-news') {
            templateItem.classList.add('add');
            clearFragment('.news');
        }
        if (!res) {
            templateItem.classList.remove('add');
        }
    }
}

export default TemplateVisual;
