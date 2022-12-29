
import React, {useEffect} from "react";
import {RoutingHelpers} from "../../routing/routing-helpers";
import {ImageExpandCard} from "../../components/ImageExpandCard";
import heartOfAndes from "../../media/Church_Heart_of_the_Andes.jpg";
import {ImageDot} from "../../components/ImageDot";
import {ImageDescCard} from "../../components/ImageDescCard";
import {VoyageSlider} from "../../components/VoyageSlider";
import OvalWire from '../../media/details/Oval wire.jpg';
import RoundWire from '../../media/details/Round wire.jpg';
import SquareWire from '../../media/details/Square wire.jpg';
import HighExtCabinet1 from '../../media/models/high_extension_cabinet/DGW-002.jpg'
import HighExtCabinet2 from '../../media/models/high_extension_cabinet/GSL-001.jpg'
import HighExtCabinet3 from '../../media/models/high_extension_cabinet/GSL-002.jpg'
import HighExtCabinet4 from '../../media/models/high_extension_cabinet/GSL-003.jpg'
import HighExtCabinet5 from '../../media/models/high_extension_cabinet/GSL-004.jpg'
import MulBasket1 from '../../media/models/mul_basket/DC002-016.jpg'
import MulBasket2 from '../../media/models/mul_basket/C001-002.jpg'
import MulBasket3 from '../../media/models/mul_basket/C002-002.jpg'
import MulBasket4 from '../../media/models/mul_basket/DC001-001.jpg'
import MulBasket5 from '../../media/models/mul_basket/DC001-002.jpg'
import SwingBasket1 from '../../media/models/swing_basket/EB02-001.jpg'
import SwingBasket2 from '../../media/models/swing_basket/EB02-005.jpg'
import SwingBasket3 from '../../media/models/swing_basket/F001-001.jpg'
import SwingBasket4 from '../../media/models/swing_basket/F001-002.jpg'
import SwingBasket5 from '../../media/models/swing_basket/F001-003.jpg'
import ThreeSideBasket1 from '../../media/models/three_sided_basket/A003-3.jpg'
import ThreeSideBasket2 from '../../media/models/three_sided_basket/A002-017.jpg'
import ThreeSideBasket3 from '../../media/models/three_sided_basket/A001-003.jpg'
import ThreeSideBasket4 from '../../media/models/three_sided_basket/A001-004.jpg'
import ThreeSideBasket5 from '../../media/models/three_sided_basket/A001-008.jpg'



export default function Home() {

    const {getRoute} = RoutingHelpers();
    const login = getRoute('login');
    const maps = getRoute('maps');
    const deities = getRoute('deities');

    useEffect(() => {setTimeout(() => {console.clear()}, 500)}, [])

    return (
        <div className="container-fluid">
            {/*<div className="row">*/}
            {/*    <div className="col-12">*/}
            {/*        <Header textContent={"Home"}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <div className="col-12 col-sm-6 col-md-4 mb-3">*/}
            {/*        <Card>*/}
            {/*            <h5>Login</h5>*/}
            {/*            <p>*/}
            {/*                See your profile, upload your character sheets, and keep your Dungeon Master up to date with*/}
            {/*                your character information. Lucky feat users will be judged.*/}
            {/*            </p>*/}
            {/*            {login ? <Link to={login.path} key={login.name}>{login.name}</Link> : <></>}*/}
            {/*        </Card>*/}
            {/*    </div>*/}
            {/*    <div className="col-12 col-sm-6 col-md-4 mb-3">*/}
            {/*        <Card>*/}
            {/*            <h5>Maps</h5>*/}
            {/*            <p>*/}
            {/*                Check your map to see what you know, if your DM gave you a map key. Maybe one day you'll*/}
            {/*                have the whole thing.*/}
            {/*            </p>*/}
            {/*            {maps ? <Link to={maps.path} key={maps.name}>{maps.name}</Link> : <></>}*/}
            {/*        </Card>*/}
            {/*    </div>*/}
            {/*    <div className="col-12 col-sm-6 col-md-4 mb-3">*/}
            {/*        <Card>*/}
            {/*            <h5>Deities</h5>*/}
            {/*            <p>*/}
            {/*                Need a list of the gods of your world? What they represent? Refresh your memory here.*/}
            {/*            </p>*/}
            {/*            {deities ? <Link to={deities.path} key={deities.name}>{deities.name}</Link> : <></>}*/}
            {/*        </Card>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="row">
                <div className="col-12">
                    <VoyageSlider/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="h3 mt-5">
                        Our metallic wire and nanotech parts
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <ImageExpandCard imageDescription={'Oval wire'}
                                     style={{marginTop: '2rem'}} src={OvalWire}>
                    </ImageExpandCard>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <ImageExpandCard imageDescription={'Round wire'}
                                     style={{marginTop: '2rem'}} src={RoundWire}>
                    </ImageExpandCard>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <ImageExpandCard imageDescription={'Square wire'}
                                     style={{marginTop: '2rem'}} src={SquareWire}>
                    </ImageExpandCard>
                </div>
                <div className="col-12">
                    <div className="h3 mt-4">
                        Our products
                    </div>
                </div>
                <div className="col-12">
                    {/*col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3*/}
                    <ImageDescCard imageDescription={(<><h4>High extension cabinets</h4><p>Anti-slippery mats</p><p>Tempered glass</p></>)}
                                   style={{marginTop: '2rem'}} src={HighExtCabinet1}>
                        <ImageDot style={{top: '10%', left: '50%'}} src={HighExtCabinet2} />
                        <ImageDot style={{top: '66%', left: '50%'}} src={HighExtCabinet3} />
                        <ImageDot style={{top: '25%', left: '50%'}} src={HighExtCabinet4} />
                        <ImageDot style={{top: '35%', left: '55%'}} src={HighExtCabinet5} />
                    </ImageDescCard>
                </div>
                <div className="col-12">
                    {/*col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3*/}
                    <ImageDescCard imageSide={'right'} imageDescription={(<><h4>Mul Basket</h4><p>Square wire</p><p>Plated stainless steel</p><p>Seasoning Basket</p></>)}
                                   style={{marginTop: '2rem'}} src={MulBasket1}>
                        <ImageDot style={{top: '15%', left: '50%'}} src={MulBasket2} />
                        <ImageDot style={{top: '50%', left: '33%'}} src={MulBasket3} />
                        <ImageDot style={{top: '25%', left: '50%'}} src={MulBasket4} />
                        <ImageDot style={{top: '35%', left: '55%'}} src={MulBasket5} />
                    </ImageDescCard>
                </div>
                <div className="col-12">
                    {/*col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3*/}
                    <ImageDescCard imageDescription={(<><h4>Swing Basket</h4><p>Pull out storage basket</p><p>Anti-slippery mats</p></>)}
                                   style={{marginTop: '2rem'}} src={SwingBasket1}>
                        <ImageDot style={{top: '25%', left: '33%'}} src={SwingBasket2} />
                        <ImageDot style={{top: '50%', left: '33%'}} src={SwingBasket3} />
                        <ImageDot style={{top: '50%', left: '60%'}} src={SwingBasket4} />
                        <ImageDot style={{top: '35%', left: '55%'}} src={SwingBasket5} />
                    </ImageDescCard>
                </div>
                <div className="col-12">
                    {/*col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3*/}
                    <ImageDescCard imageSide={'right'} imageDescription={(<><h4>Three Sided Basket</h4><p>Round wire</p><p>Nanotech surface treatment technology</p></>)}
                                   style={{marginTop: '2rem'}} src={ThreeSideBasket1}>
                        <ImageDot style={{top: '48%', left: '33%'}} src={ThreeSideBasket2} />
                        <ImageDot style={{top: '66%', left: '33%'}} src={ThreeSideBasket3} />
                        <ImageDot style={{top: '50%', left: '60%'}} src={ThreeSideBasket4} />
                        <ImageDot style={{top: '35%', left: '55%'}} src={ThreeSideBasket5} />
                    </ImageDescCard>
                </div>

            </div>
        </div>
    );
}
