import {useEffect, useState} from "react";
import {Header} from "../../components/Header";
import {useRequests} from "../../hooks/useRequests";
import {useAuth} from "../../hooks/useAuth";
import {Card} from "../../components/Card";


export const Profile = () => {

    const {user} = useAuth();
    const {getFile} = useRequests();
    const [characterSheet, setCharacterSheet] = useState(<></>);
    const [hasCharSheet, setHasCharSheet] = useState(false);

    useEffect(() => {
        getCharacterSheet();
    }, []);

    const getCharacterSheet = () => {
        const characterSheetData = getFile("getCharacterSheet", {user: user.id});
        if (characterSheetData.responseUrl) {
            setCharacterSheet(<a download="characterSheet.pdf" href={characterSheetData.responseUrl}>Download Character Sheet</a>);
            setHasCharSheet(true);
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header textContent={"Player Profile"}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <Card centerContent={true}>
                            <span>
                                {hasCharSheet ?
                                    "You have a character sheet uploaded!" :
                                    "You don't have a character sheet uploaded!"}
                            </span>
                            {hasCharSheet ? <><br/><span>{characterSheet}</span></> : <></>}
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
