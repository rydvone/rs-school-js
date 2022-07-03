import { ResponseArticle } from '../../types/articles';
import { ResponseSource } from '../../types/source';

type getRespType = {
    endpoint: 'sources' | 'everything';
    options?: string;
};

class Loader {
    private _baseLink: string;
    private _options: string[];
    constructor(baseLink: string, options: string[]) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: getRespType,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<T>('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options, endpoint: string): string {
        // const urlOptions = { ...this.options, ...options };
        const urlOptions: { [index: string]: string } = { ...this._options, ...options };
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
            .then((data) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
