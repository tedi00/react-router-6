export const UISheet = ({draggedElement, setDraggedElement, ...props}) => {
    const dragoverHandler = (ev) => {
        ev.preventDefault();
        const fromColumn = ev.dataTransfer.getData('text/plain');
        switch (fromColumn) {
            case 'fromUIList': {
                ev.dataTransfer.dropEffect = "copy";
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
                    let newElement = draggedElement.cloneNode(true);
                    ev.currentTarget.appendChild(newElement);
                    newElement.addEventListener('dragstart', (ev) => {
                        setDraggedElement(ev.currentTarget);
                        ev.dataTransfer.setData("text/plain", 'fromUISheet');
                    });
                    newElement.style.borderStyle = 'dashed';
                    setDraggedElement(undefined);
                    break;
                }
                case 'fromUISheet': {
                    setDraggedElement(undefined);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    return (<div data-column={'uisheet'}
                 onDragOver={dragoverHandler}
                 onDrop={dropHandler}
                 className="col-8 border border-2 border-primary h-100 overflow-auto"></div>)
}