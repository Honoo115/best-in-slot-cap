import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import "./slotForm.css"
class SlotForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slot_name: { value: "" },
        }
    }

    // USE SLOT.ID NOT SLOT_ID
    handleSubmit(event) {
        event.preventDefault();
        let idToPatch = this.props.slot.id;
        const bank = {
            slot_name: this.state.slot_name.value
        }
        const url = `${config.API_ENDPOINT}/${this.props.slot.char_id}/slots/${idToPatch}`;
        const options = {
            method: "PATCH",
            body: JSON.stringify(bank),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(url, options)

            .then(res => {
                if (!res.ok) {
                    throw new Error(" Spell Failed. Try casting again.")
                }
                this.props.getCharacters();
                this.props.history.goBack();
                return res.json();
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }
    componentDidMount() {

        this.setState({
            slots: this.props.character.slots[this.props.slot_id]
        })
    }
    patchSlot(slot_name) {
        this.setState({ slot_name: { value: slot_name } })
    }
    render() {
        console.log(this.props.slot.slot_name)
        return (
            <div>
                <h2>Input the name of your gear.</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        defaultValue={this.props.slot.slot_name === ''
                            ? ''
                            : this.props.slot.slot_name
                        }
                        type="text"
                        id="slot-name-input"
                        onChange={e => this.patchSlot(e.target.value)}
                        required
                    ></input>
                    <div>
                        <button className="buttons" type="submit">
                            Add Item To Slot
            </button>
                    </div>
                </form>
                <div className="gobackwrapper">
                    <Link className="goback" to={`/character/${this.props.slot.char_id}/slots`}>
                        Go Back
                    </Link>
                </div>

            </div>
        )
    }
}

SlotForm.defaultProps = {
    character: {
        slots: []
    },
    slot: { slot: { id: NaN } }
};

export default SlotForm;