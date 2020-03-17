import React, { Component } from "react";
// import { withRouter } from "react-router";
import config from "../config";
import { Link } from "react-router-dom";
class CreateCharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char_name: { value: "" },
            class_name: { value: "" }
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const collection = {
            char_name: this.state.char_name.value,
            class_name: this.state.class_name.value
        }
        console.log(collection);
        const url = `${config.API_ENDPOINT}/character`
        const options = {
            method: "POST",
            body: JSON.stringify(collection),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Seems the spell didn't come out, try casting again later.")
                }
                return res.json();
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })

    }
    updateName(char_name) {
        this.setState({ char_name: { value: char_name } })
    }
    updateClass(class_name) {
        this.setState({ class_name: { value: class_name } })
    }
    render() {

        return (
            <div>
                <h2>Create your Character</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label for="character-name-input">Name</label>
                    <input
                        type="text"
                        id="character-name-input"
                        onChange={e => this.updateName(e.target.value)}

                        required
                    ></input>
                    <lable for="character-class-input">Class</lable>
                    <input
                        type="text"
                        id="class-name-input"
                        onChange={e => this.updateClass(e.target.value)}
                        required
                    ></input>
                    <div>
                        <button className="buttons" type="submit">
                            Submit Character
                </button>
                    </div>
                </form>
                <Link to='/'>Go Back</Link>
            </div>
        );
    }
}
export default CreateCharacter;
