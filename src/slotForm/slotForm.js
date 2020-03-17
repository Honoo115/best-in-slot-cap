import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";

class AssignSlot extends Component {
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
        console.log(bank);
        const url = `${config.API_ENDPOINT}/${this.props.slot.char_id}/slots/${idToPatch}` // :character_id
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
        return (
            <div>
                <h2>What item is it?</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label for="slot-name-input">Name</label>
                    <input
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
                <Link to='/character'>Go Back</Link>
            </div>
        )
    }
}

AssignSlot.defaultProps = {
    character: {
        slots: []
    },
    slot: { slot: { id: NaN } }
};

export default AssignSlot;