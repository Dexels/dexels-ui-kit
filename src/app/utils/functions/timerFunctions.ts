/* eslint-disable */
import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useInterval = (callback: any, delay: number | null): void => {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect((): void => {
        const tick = (): void => {
            // @ts-ignore
            savedCallback.current();
        };

        if (delay !== null) {
            const id = setInterval(tick, delay);

            // @ts-ignore
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
