import {useState} from "react";

export const useClasses = (baseClass) => {
    const [classSet, setClassSet] = useState(new Set([baseClass]));

    /* Helper */
    const updateState = (arr) => {
        setClassSet(new Set([...arr]));
    }

    const toArray = (str) => {
        if (typeof str !== "string") return [];
        return str.split(" ").filter((item) => item !== "");
    }

    /* Main Methods */
    const classList = () => {
        const setArray = Array.from(classSet);
        return setArray.join(" ");
    }

    const addClasses = (classes) => {
        let temp = new Set([...classSet]);
        const classArr = toArray(classes);
        classArr.forEach(className => temp.add(className));
        updateState(temp);
    };

    const removeClasses = (classes) => {
        let temp = new Set([...classSet]);
        const classArr = toArray(classes);
        classArr.forEach((className) => {
            temp.delete(className)
        });
        updateState(temp);
    }

    const setClasses = (classes, keepBaseClass) => {
        if (keepBaseClass || classes === "") {
            classes += " " + baseClass;
        }
        const classArr = toArray(classes);
        updateState(classArr);
    }

    const hasClass = (className) => {
        return classSet.has(className);
    }

    const classHandlers = {
        add(classList) {
            addClasses(classList)
        },
        remove(classList) {
            removeClasses(classList)
        },
        has(className) {
            return hasClass(className)
        },
        reset(classList = "", keepBaseClass = false) {
            setClasses(classList, keepBaseClass)
        }
    }

    return [classList(), classHandlers];
}
