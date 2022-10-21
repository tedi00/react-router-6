import React from "react";
import {Header} from "../../components/Header";
import {SettingsHelper} from "./settings-helper";


export const Settings = () => {

    const switchList = SettingsHelper().list;

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
