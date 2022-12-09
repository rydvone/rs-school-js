import TemplateVisual from '../template/template';

type IResp = {
    endpoint: 'sources' | 'everything';
    options?: { [k: string]: string | null };
};

class Loader {
    private _baseLink: string;
    private _options: { [k: string]: string };
    private _template: TemplateVisual;
    constructor(baseLink: string, options: { [k: string]: string }) {
        this._baseLink = baseLink;
        this._options = options;
        this._template = new TemplateVisual();
    }

    getResp<T>(
        { endpoint, options = {} }: IResp,
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<T>('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            this._template.makeTemplate('.visual', true);
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: { [k: string]: string }, endpoint: string): string {
        const urlOptions: { [x: string]: string } = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load<K>(method: string, endpoint: string, callback: (data: K) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler.bind(this))
            .then((res) => res.json())
            .then((data: K) => callback(data))
            .catch((err: Error) => {
                this._template.makeTemplate('.visual', true);
                return console.error('Error is: ', err);
            });
    }
}

export default Loader;
