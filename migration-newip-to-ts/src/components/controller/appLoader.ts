import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'edd6c54abdff4c278d036dc609a47ff8',
        });
    }
}

export default AppLoader;
