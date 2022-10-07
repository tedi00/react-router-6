import {useState} from "react";

export const useClasses = (baseClass) => {
    const [classSet, setClassSet] = useState(new Set([baseClass]));

    /* Helpers */
    const classList = () => {
        const setArray = Array.from(classSet);
        return setArray.join(" ");
    }
    const updateState = (arr) => {
        // if (arr instanceof Set) setClassSet(arr); else
        setClassSet(new Set([...arr]));
    }

    /* Main Methods */
    const addClasses = (classes) => {
        let temp = new Set([...classSet]);
        const classArr = classes.split(" ").filter((item) => item !== "");
        classArr.forEach(className => temp.add(className));
        updateState(temp);
    };
    const removeClasses = (classes) => {
        let temp = new Set([...classSet]);
        const classArr = classes.split(" ").filter((item) => item !== "");
        classArr.forEach((className) => {
            temp.delete(className)
        });
        updateState(temp);
    }
    const setClasses = (classes, keepBaseClass) => {
        if (keepBaseClass || classes === "") {
            classes += " " + baseClass;
        }
        const classArr = classes.split(" ").filter((item) => item !== "");
        let temp = new Set(classArr);
        updateState(temp);
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
