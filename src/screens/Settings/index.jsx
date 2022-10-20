import React from "react";
import {Header} from "../../components/Header";
import {SettingsHelper} from "./settings-helper";
import {SettingsList} from "./settings-list";


export const Settings = () => {
    const {mapList, resetSettings} = SettingsHelper();
    const settingList = SettingsList();
    const switchList = mapList(settingList);

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
                            {switchList}
                            <div className='w-100'>
                                <button type='button' className='btn btn-blue' onClick={resetSettings}>Reset Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
