import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button,  } from "react-bootstrap";
import "./LapTop.css";
export default class LapTop extends Component {
  render() {
    // console.log("bnam");
    // console.log(this.props.phoneList);
    return (
      <div className="laptopList  row xs={12} sm={12} xl={3} lg={3}">
        <div className="text-title">BEST LAPTOP</div>
        {this.props.laptopList.map((laptop, index) => {
          return (
            <Card style={{ width: "25rem" }} className="cus-card ">
              
              <Card.Img variant="top" src={laptop.img} />
              <Card.Body>
                <Card.Title>{laptop.name}</Card.Title>
                <Card.Text>{laptop.desc}</Card.Text>
                <div className=" w-10 d-flex justify-content-center pl-2 pr-2">
                <Button variant="primary" style={{ marginRight: "10rem"}}>Detail</Button>
                <Button variant="danger">Card</Button>
                </div>
               
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

LapTop.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
};
