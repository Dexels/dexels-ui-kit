import { cloneArray } from './arrayFunctions';

export const cloneObject = (src) => {
    // const mixin = (dest, source, copyFunc) => {
    //     const empty = {};

    //     Object.keys(source).forEach((item) => {
    //         console.log(dest, source, copyFunc);

    //         if (!(item in dest)
    //             || (dest[item] !== source[item] && (!(item in empty) || empty[item] !== source[item]))
    //         ) {
    //             return copyFunc ? copyFunc(source[item]) : source[item];
    //         }

    //         return item;
    //     });
    // };

    function mixin(dest, source, copyFunc) {
		var name, s, i, empty = {};
		for(name in source){
			// the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
			// inherited from Object.prototype.	 For example, if dest has a custom toString() method,
			// don't overwrite it with the toString() method that source inherited from Object.prototype
			s = source[name];
			if(!(name in dest) || (dest[name] !== s && (!(name in empty) || empty[name] !== s))){
				dest[name] = copyFunc ? copyFunc(s) : s;
			}
		}
		return dest;
	}

    if (!src || typeof src !== 'object' || Object.prototype.toString.call(src) === '[object Function]') {
        return src;
    }

    if (src.nodeType && 'cloneNode' in src) {
        return src.cloneNode(true);
    }

    if (src instanceof Date) {
        return new Date(src.getTime());
    }

    if (src instanceof RegExp) {
        return new RegExp(src);
    }

    let r;

    if (src instanceof Array) {
        r = cloneArray(src);
    } else {
        r = src.constructor ? new src.constructor() : {};
    }

    return mixin(r, src, cloneObject);
};

export default cloneObject;

