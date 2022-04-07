import React, { Component } from "react";
//import DataService from "./data.service";
export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.onChangeQuestion= this.onChangeQuestion.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.state = {
      q: "",
      a: "",
      published: false,
      submitted: false,
    };
  }
  onChangeQuestion(e) {
    this.setState({
      q: e.target.value,
    });
  }
  onChangeAnswer(e) {
    this.setState({
      a: e.target.value,
    });
  }
  saveQuestion() {
    let data = {
      q: this.state.title,
      a: this.state.description,
      published: false
    };
    DataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newQuestion() {
    this.setState({
      title: "",
      description: "",
      published: false,
      submitted: false,
    });
  }
  render() { 
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newQuestion}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="q">Question</label>
                  <input
                    type="text"
                    className="form-control"
                    id="q"
                    required
                    value={this.state.q}
                    onChange={this.onChangeQuestion}
                    name="q"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="a">Answer</label>
                  <input
                    type="text"
                    className="form-control"
                    id="a"
                    required
                    value={this.state.a}
                    onChange={this.onChangeAnswer}
                    name="a"
                  />
                </div>
                <button onClick={this.saveQuestion} className="btn btn-success">
                  Submit
                </button>
              </div>
            )}
          </div>
        );
      }
   }
