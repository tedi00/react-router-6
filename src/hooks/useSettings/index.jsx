/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useContext, useMemo} from "react";
import {useSessionStorage} from "../useSessionStorage";
import {SettingsList} from "./settings-list";

const SettingsContext = createContext(null);

export const SettingsProvider = ({children}) => {
    const list = SettingsList();

    const getDefaultSettings = () => {
        let settingsObj = {}
        list.forEach(setting => {
            settingsObj[setting.key] = setting.defaultValue;
        })
        return settingsObj;
    }

    const defaultSettings = getDefaultSettings();
    const [settings, setSettings] = useSessionStorage("settings", defaultSettings);

    const fixSettings = () => {
        list.forEach(setting => {
            let key = setting.key
            setting['checked'] = !!settings[key];
            setting['change'] = () => {
                setSettings({
                    ...settings,
                    [key]: !setting['checked'],
                })
            }
        })
    }
    fixSettings();

    const getSettings = () => {
        return list;
    }

    const setData = (data) => {
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
            resetData,
            getSettings
        }),
        [settings]
    );

    return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
    return useContext(SettingsContext);
};
