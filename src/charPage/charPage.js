import React from "react";
import { Link } from "react-router-dom";
import "./charPage.css"

function Character(props) {

    let slots = props.character.slots.map((slot => {
        return (
            <div className="slot">
                <Link to={`/character/${slot.char_id}/slots/${slot.slot_id}`}>
                    {slot.slot_id} {slot.slot_name}
                </Link>
            </div>
        )
    }))
    return (
        <section>
            <div>
                {props.character.char_name} || {props.character.class_name}
            </div>
            <div className="slotsWrapper">
                {slots}
            </div>
        </section>

    )


}

Character.defaultProps = {
    character: { slots: [] }
}
export default Character;