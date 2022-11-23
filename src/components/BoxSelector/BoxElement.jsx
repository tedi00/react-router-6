import React, {useEffect, useRef} from "react";

export const BoxElement = (props) => {
    const checkboxLabel = useRef();
    const checkbox = useRef();
    const [addSelected, removeSelected] = props.controls ?? [undefined, undefined];

    useEffect(() => {
        if (props.selected && !checkbox.current['checked']) {
            checkbox.current['checked'] = true;
        }
    }, [props.selected]);

    const handleToggle = (e) => {
        if (!props.active) {
            e.stopPropagation();
            e.preventDefault();
            return;
        }
        if (e.target === checkboxLabel.current && e.shiftKey) {
            checkbox.current['click']();
        }
        const id = checkboxLabel.current["dataset"].id;
        if (props.controls) {
            checkbox.current["checked"] ? addSelected(id) : removeSelected(id);
        }
    }

    return (<>
        <label data-active={props.active ? 'true' : 'false'}
               onClick={(e) => {
                   handleToggle(e)
               }}
               ref={checkboxLabel} data-id={props['data-id'] ? props['data-id'] : ""} className="box-element">
            <input onChange={(e) => {
                handleToggle(e)
            }}
                   ref={checkbox} checked={props.selected} type="checkbox"/>
        </label>
    </>);
}
