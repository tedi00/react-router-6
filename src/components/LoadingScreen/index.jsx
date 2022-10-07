import {useState} from "react";

export const LoadingScreen = (props) => {

    // const [visible, setVisible] = useState(false)

    let classes = "loading-screen d-flex justify-content-center align-items-center"
    classes = (props.className ? classes+` ${props.className}` : classes);

    // const toggle = () => {
    //     setVisible(!visible);
    // }

    return (
        <div className={classes/* + (!visible && "d-none")*/}>
            <div className="rotaries">
                <div className="rotary">
                    <div className="rotary">
                        <div className="rotary">
                            <div className="rotary">
                                <div className="rotary">
                                    <div className="rotary">
                                        <div className="rotary">
                                            <div className="rotary">
                                                <div className="rotary">
                                                    <div className="rotary">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
