import React from "react";
import {useClasses} from "../../hooks/useClasses";

export const Modal = (props) => {
    let classes = "modal-wrapper active"
    classes = (props.className ? classes+` ${props.className}` : classes);
    const [classList, classHandler] = useClasses(classes);

    const closeModal = () => {
        console.log("called");
        classHandler.remove('active');
    }

    return (
        <>
            <div className={classList}>
                <div className="react-modal">
                    <div className="modal-body">
                        <p>Hello</p>
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type='button' onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>

        </>
    );
}
