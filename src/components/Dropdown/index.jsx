/* eslint-disable no-unused-vars,react-hooks/exhaustive-deps */
import {useEffect, useMemo, useRef, useState} from "react";
import {DropdownOptions} from "./DropdownOptions";

export const Dropdown = ({name, options, style, ...props}) => {
    const optList = useRef();
    const selectElement = useRef();
    const [isActive, setIsActive] = useState(false);

    const defaultIndex = (options.findIndex(option => option.defaultValue)) ?? 0;
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

    const onOptionHover = (e) => {
        const element = e.currentTarget;
        const index = Array.from(optList.current['children']).findIndex(el => el === element);
        setHighlightedIndex(index);
    }
    const onOptionClick = (e) => {
        const element = e.currentTarget;
        const index = Array.from(optList.current['children']).findIndex(el => el === element);
        setSelectedIndex(index);
        setIsActive(false);
    }

    const [enableClick, setEnableClick] = useState(true);
    const onDropdownFocus = () => {
        setIsActive(true); // Open dropdown
        setEnableClick(false)
    }
    const onDropdownBlur = () => {
        setIsActive(false); // Close dropdown
    }
    const onDropdownClick = () => {
        if (enableClick) {
            setIsActive(!isActive)
        }
        setEnableClick(true);
    }
    const onDropdownKeyDown = (e) => {
        if (!e.key) return;
        if (e.key === 'Escape') {
            setIsActive(false);
        }
        if (e.key === 'Enter') {
            if (isActive) {
                setSelectedIndex(highlightedIndex);
            }
            setEnableClick(true);
            setIsActive(!isActive);
        }
        if (e.key === 'ArrowUp') {
            if (highlightedIndex === 0) return;
            setHighlightedIndex(highlightedIndex - 1);
        }
        if (e.key === 'ArrowDown') {
            if (highlightedIndex === options.length - 1) return;
            setHighlightedIndex(highlightedIndex + 1);
        }
    }

    const getSelectedOptionValue = () => {
        return options[selectedIndex].value ?? options.selectedIndex.name;
    }
    const getSelectedOptionText = () => {
        return options[selectedIndex].name;
    }

    useEffect(() => {
        selectElement.current['selectedIndex'] = selectedIndex;
        const event = new Event('change', { bubbles: true });
        selectElement.current['dispatchEvent'](event);
    }, [selectedIndex])
    const select = useMemo(() => {
        return (
            <select {...props} onChange={props.onChange} name={name} ref={selectElement}>
                {options.map((el, i) => {
                    return (<option key={i} value={el.value ? el.value : el.name}>{el.name}</option>)
                })}
            </select>)
    }, [selectedIndex])

    return (
        <div onKeyDown={onDropdownKeyDown}
             onFocus={onDropdownFocus}
             onBlur={onDropdownBlur}
             onClick={onDropdownClick}
             className={'react-dropdown' + (isActive ? ' active' : '')}
             role="listbox" tabIndex={0} data-value={getSelectedOptionValue()}
             style={style}>
            <span className="value">{getSelectedOptionText()}</span>
            <ul ref={optList} className={'optList' + (isActive ? '' : ' hidden')} role="presentation">
                <DropdownOptions options={options}
                                 selectedIndex={selectedIndex}
                                 highlightedIndex={highlightedIndex}
                                 eventListeners={{onOptionHover, onOptionClick}}/>
            </ul>
            {select}
        </div>
    )
}
