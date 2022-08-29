import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {Link} from "react-router-dom";
import {useRoutes} from "../../hooks/useRoutes";

export default function Home() {

    const {getRoute} = useRoutes();
    const login = getRoute('login');

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header textContent={"Home"}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus a quam pretium
                        imperdiet
                        rhoncus dignissim orci. Pellentesque posuere molestie odio, id pretium ligula tempor a.
                        Vestibulum at
                        ullamcorper enim. Cras vel nibh mauris. Duis tempor sodales enim, at gravida nibh. Praesent
                        tincidunt
                        diam facilisis tincidunt sodales. Morbi vitae neque nec erat tincidunt feugiat ut sit amet nisl.
                        Integer
                        ullamcorper pellentesque erat, at sagittis lorem lacinia quis. In hac habitasse platea dictumst.
                        Nunc
                        lacinia nisi sit amet lacus feugiat, eget euismod arcu suscipit. Interdum et malesuada fames ac
                        ante
                        ipsum primis in faucibus. Morbi sit amet aliquam sem, in tincidunt lorem. Donec tempus bibendum
                        neque id
                        posuere. Phasellus et nisl cursus, pharetra nisi vitae, tincidunt sem. Aliquam semper nulla
                        erat, id
                        lacinia magna dignissim ac. In ut tortor id velit viverra aliquet.
                    </p>
                    <p>
                        Duis sit amet elit sit amet massa viverra rutrum at eu purus. Sed placerat quis massa quis
                        vulputate.
                        Quisque scelerisque at magna ut maximus. Fusce ut rutrum nunc. Cras nec porta erat. Duis in
                        ullamcorper
                        tellus. Maecenas tempor ligula nec bibendum bibendum. Aenean molestie commodo consequat. Class
                        aptent
                        taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec lorem ac
                        tellus
                        pretium ullamcorper. Mauris ornare mollis lectus nec maximus. Aenean sed libero sed tellus
                        vestibulum
                        molestie. Quisque ac bibendum est. Curabitur fringilla urna a tempor egestas.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Card>
                        <h5>Profile</h5>
                        <p>
                            Donec pretium, dolor at
                            accumsan malesuada, arcu nulla cursus lectus, et accumsan ante risus vel dui. Maecenas risus
                            nulla,
                            laoreet ac facilisis non, viverra eget turpis.
                        </p>
                        <Link to={login.path} key={login.name}>{login.name}</Link>
                    </Card>
                </div>
            </div>
        </div>
    )
        ;
}