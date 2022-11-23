// noinspection JSCheckFunctionSignatures
import {useEffect, useState, Children, isValidElement, cloneElement} from "react";

export const BoxSelector = (props) => {
    const [isShiftPressed, setIsShiftPressed] = useState(false);
    const [selected, setSelected] = useState([]);

    function compareNumbers(a, b) {
        return a - b;
    }

    /* Return a full array if there's empty elements between the others */
    const areEmptyBetween = (newEl) => {
        const min = selected[0] ? parseInt(selected[0]) : undefined;
        const max = selected[selected.length-1] ? parseInt(selected[selected.length-1]) : undefined;
        let len = 0;
        if(min != null) {
            if(newEl < min-1) {
                len = min - newEl + 1;
                return [...Array(len).keys()].map((el) => (el+newEl).toString());
            } else if(newEl > max + 1) {
                len = newEl - max + 1;
                return [...Array(len).keys()].map((el) => (el+max).toString());
            }
        }
        return false;
    }
    const addSelected = (id) => {
        const multiples = areEmptyBetween(parseInt(id));
        if(multiples) {
            addMultiple(multiples);
            return;
        }
        const filterDuplicates = new Set([...selected, id.toString()]);
        const newArr = [...filterDuplicates].sort(compareNumbers)
        setSelected([...newArr]);
    }
    const removeSelected = (id) => {
        if(id < selected[selected.length - 1] && id > selected[0]) {
            removeMultiple(id);
            return;
        }
        const index = selected.indexOf(id);
        const newArr = [...selected]
        if(index > -1) {
            newArr.splice(index, 1);
        }
        setSelected(newArr);
    }
    const controls = [addSelected, removeSelected];
    const addMultiple = (idArr) => {
        const filterDuplicates = new Set([...selected, ...idArr]);
        const newArr = [...filterDuplicates].sort(compareNumbers)
        setSelected([...newArr]);
    }
    const removeMultiple = (id) => {
        const newArr = [...selected].filter(el => parseInt(el) < parseInt(id));
        setSelected([...newArr]);
    }

    /* Shift keyup/keydown detectors */
    const setShift = (e) => {
        if((e.shiftKey || e.key.toLowerCase() === "shift") && e.type.toLowerCase() === 'keydown') {
            setIsShiftPressed(true);
        }
        if ((e.shiftKey || e.key.toLowerCase() === "shift") && e.type.toLowerCase() === 'keyup') {
            setIsShiftPressed(false);
        }
    }

    /* Shift key event listeners */
    useEffect(() => {
        const onKeyDown = (event) => {setShift(event)};
        const onKeyUp = (event) => {setShift(event)}
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        }
    }, []);

    const isActive = (id) => { // Selectable
        if(isShiftPressed) return true; // All selectable on shift hold
        const min = selected[0] ? parseInt(selected[0]) : undefined;
        const max = selected[selected.length-1] ? parseInt(selected[selected.length-1]) : undefined;
        if(min == null) return true; // None selected yet
        if(min - 1 <= id && id <= max + 1) return true; // In range
        return false;
    }
    const isSelected = (id) => { // Checkbox selected
        const min = selected[0] ? parseInt(selected[0]) : undefined;
        const max = selected[selected.length-1] ? parseInt(selected[selected.length-1]) : undefined;
        return min != null && (min <= id && id <= max);
    }



    return(<>
        <div className="box-container">
            {Children.map(props.children, (child, index) => {
                if(!isValidElement(child)) return null;
                return cloneElement(child, {...child.props, 'data-id': index.toString(), controls: controls, active: isActive(index), selected: isSelected(index)})
            })}
        </div>
    </>)
}
