import React, { Component } from "react";
// import { withRouter } from "react-router";
import config from "../config";
import { Link } from "react-router-dom";
import "./charForm.css"
class CharForm extends Component {
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
                    <div>
                        <div className="formtitle">Name</div>

                        <input
                            type="text"
                            id="character-name-input"
                            onChange={e => this.updateName(e.target.value)}

                            required
                        ></input></div>
                    <div>
                        <div className="formtitle">Class</div>

                        <input className="classinput"
                            type="text"
                            id="class-name-input"
                            onChange={e => this.updateClass(e.target.value)}
                            required
                        ></input>
                    </div>

                    <div>
                        <button className="buttons" type="submit">
                            Submit Character
                            
                </button>

                    </div>
                </form>
                <div className="go"><Link  className="goback"to='/'>Go Back</Link></div>
                
            </div>
        );
    }
}
export default CharForm;
