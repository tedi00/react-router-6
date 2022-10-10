import {useSettings} from "../../hooks/useSettings";
import React from "react";
import {Header} from "../../components/Header";
import {Switch} from "../../components/Switch";


export const Settings = () => {

    const {settings, setData} = useSettings();

    // Change handlers
    const sidebarToggle = () => {
        setData({
            keepSidebarOpen: !settings.keepSidebarOpen,
        })
    }

    // List of settings
    const settingList = [
        {
            key: "keepSidebarOpen",
            text: "Keep the sidebar open after navigating to another page",
            checked: settings.keepSidebarOpen,
            change: () => {sidebarToggle()},
        },
    ]

    // List mapping
    const settingSwitches = (<>{
            settingList.map(setting => (
                <label key={setting.key} className="d-flex flex-wrap align-items-center w-100 my-3">
                    <span className="me-3">{setting.text}</span>
                    <Switch checked={setting.checked}
                            handleChange={() => {
                                setting.change();
                            }}/>
                </label>
            ))
        }</>)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header textContent={"Settings"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="settings-container">
                            {settingSwitches}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
