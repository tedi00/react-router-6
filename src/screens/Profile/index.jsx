import {useEffect, useState} from "react";
import {Header} from "../../components/Header";
import {useAuth} from "../../hooks/useAuth";
import {Card} from "../../components/Card";
import {FileInput} from "../../components/FileInput";
import {Api} from "../../api";


export const Profile = () => {

    const {user} = useAuth();
    const {endpoints} = Api();
    const [characterSheet, setCharacterSheet] = useState(<></>);
    const [hasCharSheet, setHasCharSheet] = useState(false);

    useEffect(() => {
        getCharacterSheet();
    }, []);

    const getCharacterSheet = () => {
        const characterSheetData = endpoints.get.characterSheet({user: user.id});
        //TODO: Finish getCharacterSheet
        if (characterSheetData.responseURL) {
            setCharacterSheet(<a download="characterSheet.pdf" href={characterSheetData.responseURL}>Download Character
                Sheet</a>);
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
                            <p>
                                {hasCharSheet ?
                                    "You have a character sheet uploaded!" :
                                    "You don't have a character sheet uploaded!"}
                            </p>
                            {hasCharSheet ?
                                <><span>{characterSheet}</span></> :
                                <><FileInput/></>
                            }
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
