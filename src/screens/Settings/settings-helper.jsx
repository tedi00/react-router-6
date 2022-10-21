import {Switch} from "../../components/Switch";
import {useSettings} from "../../hooks/useSettings";

export const SettingsHelper = () => {
    const {getSettings} = useSettings();

    // List mapping
    const switchList = (<>{
        getSettings().map(setting => (
            <label key={setting.key} className="d-flex flex-wrap align-items-center justify-content-between w-100 my-3">
                <span className="settings-text">{setting.text}</span>
                <Switch checked={setting.checked}
                        handleChange={() => {
                            setting.change();
                        }}/>
            </label>
        ))
    }</>);

    return {list: switchList};
}
