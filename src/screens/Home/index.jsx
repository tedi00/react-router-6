import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {Link} from "react-router-dom";
import React from "react";
import {RoutingHelpers} from "../../routing/routing-helpers";
import {Canvas} from "../../components/Canvas";
import {Carousel} from "../../components/Carousel";
import {BoxSelector} from "../../components/BoxSelector";
import {BoxElement} from "../../components/BoxSelector/BoxElement";
import {Dropdown} from "../../components/Dropdown";
import {ImageExpandCard} from "../../components/ImageExpandCard";
import heartOfAndes from "../../media/Church_Heart_of_the_Andes.jpg";
import {ImageDot} from "../../components/ImageDot";

export default function Home() {

    const {getRoute} = RoutingHelpers();
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
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <ImageExpandCard imageDescription={'The Heart of the Andes is a large oil-on-canvas landscape painting by the American artist Frederic Edwin Church (1826–1900).'} style={{position: 'relative'}} src={heartOfAndes}>
                        <ImageDot style={{top: '10rem', left: '5rem'}} src={heartOfAndes} />
                        <ImageDot style={{top: '12rem', left: '10rem'}} src={heartOfAndes} />
                    </ImageExpandCard>
                </div>
            </div>
        </div>
    );
}
