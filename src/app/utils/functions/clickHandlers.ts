import { useEffect, useRef } from 'react';

const useMountEffect = (fn: (...args: any[]) => any) => useEffect(fn, []);

/** This function handles the clicking outside the boundaries of the component */
/** It also handles the attaching/detaching of eventListeneres */
export const useClickOutsideComponent = (handleOutsideClick: (event: MouseEvent) => void) => {
    const componentRef = useRef<any>();

    const onClick = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            handleOutsideClick(event);
        }
    };

    useMountEffect(() => {
        document.addEventListener('click', onClick, true);

        return () => {
            document.removeEventListener('click', onClick, true);
        };
    });

    return { componentRef };
};

export default useClickOutsideComponent;
