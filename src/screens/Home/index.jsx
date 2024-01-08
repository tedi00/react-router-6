import {useState} from "react";
import {PLong} from "../../components/PLong";

export default function Home() {
    const [isAboutExtended, setIsAboutExtended] = useState(false);
    return (
        <main>
            <div className="container">
                {/*<div className="header-row">*/}
                {/*    <div className='cv-picture'>*/}
                {/*        <img src={require('../../images/picture.png')} alt="Tedi"/>*/}
                {/*    </div>*/}
                {/*    <div className='header-row-text'>*/}
                {/*        <h1>Hello. I'm Tedi.</h1>*/}
                {/*        <div className='cv-contact'>*/}
                {/*            <p><a href="tel:+355676504288">+355 67 650 4288</a></p>*/}
                {/*            <p><a href="mailto:tedi.skenduli@yahoo.com">tedi.skenduli@yahoo.com</a></p>*/}
                {/*            <a href="https://github.com/tedi00">Github</a>&nbsp;*/}
                {/*            <a href="https://codepen.io/tedi00">Codepen</a>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
                <div className="content-row">
                    <h3>About me</h3>
                    <div className={'about-content' + (isAboutExtended? ' extended' : '')}>
                        <p>
                            With a strong foundation in JavaScript and a significant experience working with modern
                            frameworks such as Angular and React, my focus is on crafting websites and web applications
                            that are not only responsive and efficient but also intuitive and engaging. I take pride
                            in writing clean, maintainable code and meticulously testing across multiple platforms to
                            ensure a seamless user experience.
                        </p>
                        <button onClick={()=>{setIsAboutExtended(!isAboutExtended)}} className='content-more'>More...</button>
                        <PLong isVisible={isAboutExtended} text={'In this ever-evolving industry, I understand the importance of ' +
                            'continuous learning. Keeping myself updated with the latest trends, tools, and best ' +
                            'practices in front-end development is not just a requirement for me, but a habit I truly ' +
                            'enjoy.'}>
                        </PLong>
                        <PLong isVisible={isAboutExtended} text={'Working collaboratively, understanding different ' +
                            'perspectives, and contributing my skill sets to a team-oriented projects are some ' +
                            'activities that excite me. I firmly believe in the Agile methodology and value frequent' +
                            ' communication and feedback, aiming for incremental improvements that lead to top-notch ' +
                            'end products.'}>
                        </PLong>
                        <PLong isVisible={isAboutExtended} text={'While I\'m deeply focused and committed to my craft, ' +
                            'I also understand and practice the balance of life beyond the screen, valuing time spent ' +
                            'in nature, reading, and continuous self-improvement.'}>
                        </PLong>
                        <PLong isVisible={isAboutExtended} text={'With each line of code, I strive to make the digital ' +
                            'world a better, more accessible place — one well-structured, efficient, and user-friendly ' +
                            'website at a time.'}></PLong>
                        <button onClick={()=>{setIsAboutExtended(!isAboutExtended)}} className='about-me-more content-less'>Less...</button>
                    </div>
                </div>

            </div>
        </main>
    );
}