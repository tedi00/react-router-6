import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {Link} from "react-router-dom";
import {Routing} from "../../routing";

export default function Home() {

    const {getRoute} = Routing();
    const login = getRoute('login');
    const maps = getRoute('maps');
    const deities = getRoute('deities');

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Header textContent={"Home"}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>
                        This page was made with Dungeons & Dragons sessions in mind. It is intended to help you progress
                        through your journey, giving you information and helping you maintain a grasp on what you
                        already know. It is only available to you through your Dungeon Master, who will update you with
                        new information and keep track of your character sheets through this web app.
                    </p>
                    <p>
                        Feel free to ask your Dungeon Master if you have any questions regarding usage or navigation.
                        Explore, search through game data and save your character sheets.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mb-3">
                    <Card>
                        <h5>Login</h5>
                        <p>
                            See your profile, upload your character sheets, and keep your Dungeon Master up to date with
                            your character information. Lucky feat users will be judged.
                        </p>
                        {login ? <Link to={login.path} key={login.name}>{login.name}</Link> : <></>}
                    </Card>
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-3">
                    <Card>
                        <h5>Maps</h5>
                        <p>
                            Check your map to see what you know, if your DM gave you a map key. Maybe one day you'll
                            have the whole thing.
                        </p>
                        {maps ? <Link to={maps.path} key={maps.name}>{maps.name}</Link> : <></>}
                    </Card>
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-3">
                    <Card>
                        <h5>Deities</h5>
                        <p>
                            Need a list of the gods of your world? What they represent? Refresh your memory here.
                        </p>
                        {deities ? <Link to={deities.path} key={deities.name}>{deities.name}</Link> : <></>}
                    </Card>
                </div>
            </div>
        </div>
    );
}