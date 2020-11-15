import React, { Component } from "react";
import { toast } from "react-toastify";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    if (this.state.name.trim() !== "" && this.state.job.trim() !== "") {
      this.props.handleSubmit(this.state);
      toast.success("Nouvelle personne ajoutée");
    } else {
      toast.warning("Entrez le nom et le job SVP!");
    }
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
