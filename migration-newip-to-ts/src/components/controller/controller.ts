import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: (data: T) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, sortBy: string, callback: (data: T) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;
        if (newsContainer === null) {
            const sourceId = target.getAttribute('data-source-id');
            super.getResp(
                {
                    endpoint: 'everything',
                    options: {
                        sources: sourceId,
                        page: sortBy,
                    },
                },
                callback
            );
        } else {
            while (target !== newsContainer) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (sourceId === null) {
                        throw new Error('sourceId is empty');
                    }
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                    page: sortBy,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
