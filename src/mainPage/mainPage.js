import React from "react";
import { Link } from "react-router-dom";



function MainPage(props) {
    const Characters = props.character.map(function (character) {
        return (
            <div key={character.id}>
                <Link to={`character/${character.id}/slots`}>
                    {character.char_name} || {character.class_name}
                </Link>
            </div>
        );
    });
    return (<section>
        <div className="mainpage">{Characters}</div>
        <div><Link to={'/charcreation'}>Create A Character</Link></div>
    </section>

    );
}
export default MainPage;