import React, { Component } from "react";
import uuidv1 from "uuid";
import { connect } from "react-redux";
import {addPost} from "../actions/"

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      desc: ""
    };
  }
  

  handleChange = (e) =>{
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      const { title, desc } = this.state;
      const id = uuidv1();
      console.log(this.props, "props");
      console.log(id,title,desc, "value");
      
      
      this.props.dispatch(addPost(id,title,desc))
  }

  render() {
    const { title, desc } = this.state;
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit} type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
    return {
        addPost : () => {dispatch(addPost())}
    }
  }

export default connect(mapDispatchToProps)(Form)
