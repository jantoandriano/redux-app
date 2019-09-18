import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { fetchDataAPI } from "../actions/index";
import Cardcomp from "./Card";
class Post extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    let i = this.props.character.map((result) => (
      <Col key={result.id} >
        <Cardcomp id={result.id} name={result.name} imgURL={result.image} status={result.status} />
      </Col>
    ))
    return (
      <Container>
        <Row>
          {i}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchDataAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
