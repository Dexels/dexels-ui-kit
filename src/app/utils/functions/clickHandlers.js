import { useEffect, useRef } from 'react';

const useMountEffect = (fn) => useEffect(fn, []);

/** This function handles the clicking outside the boundaries of the component */
/** It also handles the attaching/detaching of eventListeneres */
export const useClickOutsideComponent = (handleOutsideClick) => {
    const componentRef = useRef();

    const onClick = (event) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            handleOutsideClick();
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
