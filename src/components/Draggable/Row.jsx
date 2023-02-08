export const Row = ({dragstartHandler, text, draggedCol, setDraggedCol, ...props}) => {

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
        if (draggedCol) {
            const fromColumn = ev.dataTransfer.getData('text/plain');

        }
    }

    return(<div onDragStart={(ev) => {dragstartHandler(ev)}}
                className='m-2 row'
                style={{minHeight:'10px', border:'2px solid green', padding:'.5rem'}}
                draggable={true}>
        {props.children ?? text}
    </div>)
}