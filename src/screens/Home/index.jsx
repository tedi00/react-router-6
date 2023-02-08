import {Row} from "../../components/Draggable/Row";
import {useEffect, useState} from "react";
import {UIList} from "../../components/Draggable/UIList";
import {UISheet} from "../../components/Draggable/UISheet";

export default function Home() {
    const [draggedRow, setDraggedRow] = useState(undefined);
    // const [draggedCol, setDraggedCol] = useState(undefined);

    const dragstartHandler = (ev) => {
        // ev.dataTransfer.effectAllowed = "copy";
        setDraggedRow(ev.currentTarget);
        ev.dataTransfer.setData("text/plain", 'fromUIList');
    }

    useEffect(() => {
        console.log(draggedRow)
    }, [draggedRow])


    return (
        <div className="contain-wrapper">
            <div className="container-fluid g-0">
                <div className="row g-0 h-100">
                    <UIList draggedElement={draggedRow} setDraggedElement={setDraggedRow}>
                        <Row text={'Draggable row'} dragstartHandler={dragstartHandler}/>
                    </UIList>
                    <UISheet draggedElement={draggedRow} setDraggedElement={setDraggedRow}></UISheet>

                </div>
            </div>
        </div>
    );
}