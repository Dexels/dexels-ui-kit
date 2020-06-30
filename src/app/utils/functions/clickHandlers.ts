/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useEffect, useRef } from 'react';

const useMountEffect = (fn: (...args: any[]) => any): void => useEffect(fn, []);

// This function handles the clicking outside the boundaries of the component
// It also handles the attaching/detaching of eventListeneres
export const useClickOutsideComponent = (
    handleOutsideClick: (event: MouseEvent) => void
): {
    componentRef: MutableRefObject<any>;
} => {
    const componentRef = useRef<any>();

    const onClick = (event: MouseEvent): void => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            handleOutsideClick(event);
        }
    };

    useMountEffect(() => {
        document.addEventListener('click', onClick, true);

        return (): void => {
            document.removeEventListener('click', onClick, true);
        };
    });

    return { componentRef };
};

export default useClickOutsideComponent;
