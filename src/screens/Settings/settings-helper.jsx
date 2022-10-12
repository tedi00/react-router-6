import {Switch} from "../../components/Switch";
import {useSettings} from "../../hooks/useSettings";

export const SettingsHelper = () => {
    const {settings, setData} = useSettings();

    // Change handlers
    const sidebarToggle = () => {
        setData({
            ...settings,
            keepSidebarOpen: !settings.keepSidebarOpen,
        });
    }
    const colorModeToggle = () => {
        setData({
            ...settings,
            darkMode: !settings.darkMode,
        });
    }

    // List of settings
    const settingList = [
        {
            key: "keepSidebarOpen",
            text: "Keep the sidebar open after navigating to another page",
            checked: settings.keepSidebarOpen,
            change: () => {sidebarToggle()},
        },
        {
            key: "darkMode",
            text: "Dark Mode",
            checked: settings.darkMode,
            change: () => {colorModeToggle()},
        },
    ];

    // List mapping
    const switchList = (<>{
        settingList.map(setting => (
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