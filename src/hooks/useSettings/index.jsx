import React, {createContext, useContext, useMemo} from "react";
import {useSessionStorage} from "../useSessionStorage";

const SettingsContext = createContext(null);

export const SettingsProvider = ({children}) => {

    const [settings, setSettings] = useSessionStorage("settings", null);

    const setData = async (data) => {
        setSettings({
            ...settings,
            ...data
        });
    };

    const value = useMemo(
        () => ({
            settings,
            setData
        }),
        [settings]
    );

    return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
    return useContext(SettingsContext);
};
