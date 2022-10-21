import React, {createContext, useContext, useMemo} from "react";
import {useSessionStorage} from "../useSessionStorage";

const SettingsContext = createContext(null);

export const SettingsProvider = ({children}) => {
    const defaultSettings = {
        keepSidebarOpen: false,
        darkMode: false,
    }
    const [settings, setSettings] = useSessionStorage("settings", defaultSettings);

    const setData = async (data) => {
        setSettings({
            ...settings,
            ...data
        });
    };

    const resetData = () => {
        setSettings(defaultSettings);
    };

    const value = useMemo(
        () => ({
            settings,
            setData,
            resetData
        }),
        [settings]
    );

    return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
    return useContext(SettingsContext);
};
