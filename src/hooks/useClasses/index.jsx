import {useState} from "react";

export const useClasses = (baseClass) => {
    const [classSet, setClassSet] = useState(new Set([baseClass]));

    /* Helper */
    const updateState = (arr) => {
        setClassSet(new Set([...arr]));
    }
    String.prototype.toArray = function () {
        return this.split(" ").filter((item) => item !== "");
    }

    /* Main Methods */
    const classList = () => {
        const setArray = Array.from(classSet);
        return setArray.join(" ");
    }

    const addClasses = (classes) => {
        let temp = new Set([...classSet]);
        const classArr = classes.toArray();
        classArr.forEach(className => temp.add(className));
        updateState(temp);
    };

    const removeClasses = (classes) => {
        let temp = new Set([...classSet]);
        const classArr = classes.toArray();
        classArr.forEach((className) => {
            temp.delete(className)
        });
        updateState(temp);
    }

    const setClasses = (classes, keepBaseClass) => {
        if (keepBaseClass || classes === "") {
            classes += " " + baseClass;
        }
        const classArr = classes.toArraySanitized();
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
