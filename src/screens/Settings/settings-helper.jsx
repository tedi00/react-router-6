import {Switch} from "../../components/Switch";
import {SettingsList} from "./settings-list";
import {useSettings} from "../../hooks/useSettings";

export const SettingsHelper = () => {
    const {setData} = useSettings();
    const settingsList = SettingsList();

    const resetSettings = () => {
        let settingsObj = {}
        settingsList.forEach(setting => {
            settingsObj[setting.key] = setting.defaultValue;
        })
        setData(settingsObj);
    }

    // List mapping
    const mapList = (settingList) => {
        return (<>{
            settingList.map(setting => (
                <label key={setting.key}
                       className="d-flex flex-wrap align-items-center justify-content-between w-100 my-3">
                    <span className="settings-text">{setting.text}</span>
                    <Switch checked={setting.checked}
                            handleChange={() => {
                                setting.change();
                            }}/>
                </label>
            ))
        }</>);
    }

    return {mapList, resetSettings};
}