import '../../global.css';
import Sources from '../view/sources/sources';
import { ISourse } from '../../types/source';

class Slider {
    private sources: Sources;

    constructor() {
        this.sources = new Sources();
    }

    private createSliderControlButton() {
        const sliderControl = document.querySelector('.slider-control') as HTMLElement;
        createButton('less', 'slide-control__button', '<<', 'disabled');
        createButton('page', 'slide-control__button', '1');
        createButton('more', 'slide-control__button', '>>');
        function createButton(nameClassFirst: string, nameClassSecond: string, content: string, status?: string) {
            const buttonElement = document.createElement('button');
            buttonElement.classList.add(nameClassFirst);
            buttonElement.classList.add(nameClassSecond);
            buttonElement.textContent = content;
            if (status) {
                buttonElement.setAttribute(status, '');
            }
            sliderControl.append(buttonElement);
        }
    }

    slideControl(data: ISourse[]) {
        this.createSliderControlButton();
        const buttonLess = document.querySelector('.less') as HTMLInputElement;
        const buttonMore = document.querySelector('.more') as HTMLInputElement;
        const page = document.querySelector('.page') as HTMLInputElement;

        const countCurrentSource = 20;
        let numCurrentPage = 1;
        let startPos = 0;
        let endPos = 20;
        const drawButton = this.sources;
        const numMaxPage = Math.ceil(data.length / countCurrentSource);

        page.textContent = `${numCurrentPage}`;

        numCurrentPageIsStart();
        drawButton.draw(data.slice(startPos, endPos));

        function numCurrentPageIsStart() {
            buttonLess.disabled = true;
            buttonLess.classList.remove('active');
            buttonLess.removeEventListener('click', moveLess);

            buttonMore.disabled = false;
            buttonMore.classList.add('active');
            buttonMore.addEventListener('click', moveMore);
        }

        function numCurrentPageIsEnd() {
            buttonLess.disabled = false;
            buttonLess.classList.add('active');
            buttonLess.addEventListener('click', moveLess);

            buttonMore.disabled = true;
            buttonMore.classList.remove('active');
            buttonMore.removeEventListener('click', moveMore);
        }

        function numCurrentPageIsMiddle() {
            buttonLess.disabled = false;
            buttonLess.classList.add('active');
            buttonLess.addEventListener('click', moveLess);

            buttonMore.disabled = false;
            buttonMore.classList.add('active');
            buttonMore.addEventListener('click', moveMore);
        }

        function moveLess() {
            numCurrentPage--;
            changeStartEndPos(false);
            drawButton.draw(data.slice(startPos, endPos));
            if (numCurrentPage !== numMaxPage) {
                numCurrentPageIsMiddle();
            }
            if (numCurrentPage === 1) {
                numCurrentPageIsStart();
            }
            page.textContent = `${numCurrentPage}`;
        }

        function moveMore() {
            numCurrentPage++;
            changeStartEndPos(true);
            drawButton.draw(data.slice(startPos, endPos));
            if (numCurrentPage !== 1) {
                numCurrentPageIsMiddle();
            }
            if (numCurrentPage === numMaxPage) {
                numCurrentPageIsEnd();
            }
            page.textContent = `${numCurrentPage}`;
        }

        buttonLess.addEventListener('click', moveLess);
        buttonMore.addEventListener('click', moveMore);

        function changeStartEndPos(direction: boolean) {
            if (direction) {
                startPos += countCurrentSource;
                endPos += countCurrentSource;
            }
            if (!direction) {
                startPos -= countCurrentSource;
                endPos -= countCurrentSource;
            }
        }
    }
}

export default Slider;
