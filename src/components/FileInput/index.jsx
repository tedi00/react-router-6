import {useState} from "react";

export const FileInput = (props) => {
    let classes = "file-input"
    classes = (props.className ? classes+` ${props.className}` : classes);
    const [file, setFile] = useState(undefined);
    const handleChange = (e) => {
        const val = e.currentTarget.files[0];
        if(val.type === "application/pdf" || val.type === "application/msword") {
            setFile(val);
        }
    }
    return (
        <div className={classes}>
            {file ? <>{file.name}</> : <div className="d-flex h-100 align-items-baseline">Browse files<span className="dots">...</span></div>}
            <input accept="application/pdf, application/msword" onChange={handleChange} type="file"/>
        </div>
    );
}