import {useState} from "react";

export const useClasses = (baseClass) => {
    const [classList, setClassList] = useState(new Set([baseClass]));

    /* Helpers */
    const stringifySet = () => {
        const setArray = Array.from(classList);
        return setArray.join(" ");
    }
    const updateState = (arr) => {
        // if (arr instanceof Set) setClassList(arr); else
        setClassList(new Set([...arr]));
    }

    /* Main Methods */
    const addClasses = (classes) => {
        let temp = new Set([...classList]);
        const classArr = classes.split(" ").filter((item) => item !== "");
        classArr.forEach(className => temp.add(className));
        updateState(temp);
    };
    const removeClasses = (classes) => {
        let temp = new Set([...classList]);
        const classArr = classes.split(" ").filter((item) => item !== "");
        classArr.forEach((className) => {
            temp.delete(className)
        });
        updateState(temp);
    }
    const setClasses = (classes, keepBaseClass = false) => {
        if (keepBaseClass || classes === "") {
            classes += " " + baseClass;
        }
        const classArr = classes.split(" ").filter((item) => item !== "");
        let temp = new Set(classArr);
        updateState(temp);
    }
    const hasClass = (className) => {
        return classList.has(className);
    }

    const Classes = {
        list: stringifySet(),
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
    return Classes;
}
