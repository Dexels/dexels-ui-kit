import { LoadingProgress } from '../types';

type CallbackFunction = (progress: LoadingProgress) => void;

export const simulateUploading = (callBack: CallbackFunction): Promise<number> =>
    new Promise((resolve) => {
        let progress: LoadingProgress = 0;
        callBack(progress);

        const timer = setInterval(() => {
            progress += 25;

            if (progress > 100) {
                clearInterval(timer);
                resolve(100);
            }

            callBack(progress as LoadingProgress);
        }, 1000);
    });
