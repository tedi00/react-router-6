
export const UIList = ({draggedElement, setDraggedElement, ...props}) => {

    const dragoverHandler = (ev) => {
        ev.preventDefault();
        const fromColumn = ev.dataTransfer.getData('text/plain');
        switch (fromColumn) {
            case 'fromUIList': {
                // ev.dataTransfer.dropEffect = "copy";
                break;
            }
            case 'fromUISheet': {
                ev.dataTransfer.dropEffect = "move";
                break;
            }
            default: {
                break;
            }
        }
    }
    const dropHandler = (ev) => {
        ev.preventDefault();
        if (draggedElement) {
            const fromColumn = ev.dataTransfer.getData('text/plain');
            switch (fromColumn) {
                case 'fromUIList': {
                    setDraggedElement(undefined);
                    break;
                }
                case 'fromUISheet': {
                    draggedElement.remove();
                    setDraggedElement(undefined);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    return (<div data-column={'uilist'}
                 onDragOver={dragoverHandler}
                 onDrop={dropHandler}
                 className="col-4 border border-2 border-danger">
        {props.children}
    </div>)
}