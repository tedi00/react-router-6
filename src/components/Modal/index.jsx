export const Modal = (props) => {
    let classes = "react-modal"
    classes = (props.className ? classes+` ${props.className}` : classes);

    const closeModal = () => {

    }

    return (
        <>
            <div className={"modal-wrapper"}>
                <div className={classes}>
                    <p>Hello</p>
                    {props.children}
                </div>
            </div>

        </>
    );
}