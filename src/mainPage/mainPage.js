import React from "react";
import { Link } from "react-router-dom";
import "./mainPage.css"


function MainPage(props) {
    const Character = props.character.map(function (character) {
        return (
            <div key={`character-${character.id}`}>

                <Link className="character" to={`character/${character.id}/slots`}>
                    {character.char_name} || {character.class_name}
                </Link>
                <button onClick={(e) => props.onDeleteCharacter(e, character.id)}>DELETE CHARACTER</button>
            </div>
        );
    });
    return (<section className="header">
        <h3>Greetings Champion!</h3>
        <p className="maintext">Welcome to the Best-In-Slot-Manager. Here you can create your own personal checklist armory to keep track of your equipment.</p>
        <p className="maintext">Just Create one of your characters to get started!</p>
        <div className="mainpage">{Character}</div>
        <div><Link className="createbutton" to={'/charcreation'}>Create A Character</Link></div>
    </section>

    );
}
export default MainPage;