import {useSettings} from "../../hooks/useSettings";

export const SettingsList = () => {
    const {settings, setData} = useSettings();
    return [
        {
            key: "keepSidebarOpen",
            text: "Keep the sidebar open after navigating to another page",
            checked: !!settings.keepSidebarOpen,
            change: () => {
                setData({
                    ...settings,
                    keepSidebarOpen: !settings.keepSidebarOpen,
                });
            },
            defaultValue: false,
        },
        {
            key: "darkMode",
            text: "Dark Mode (experimental)",
            checked: !!settings.darkMode,
            change: () => {
                setData({
                    ...settings,
                    darkMode: !settings.darkMode,
                });
            },
            defaultValue: false,
        },
    ];
}