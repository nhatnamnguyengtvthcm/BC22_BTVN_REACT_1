import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button,  } from "react-bootstrap";
import "./Smartphone.css";
export default class SmartPhone extends Component {
  render() {
    // console.log("bnam");
    // console.log(this.props.phoneList);
    return (
      <div className="phoneList  row xs={12} sm={12} xl={3} lg={3}">
        <div className="text-title">BEST SMARTPHONE</div>
        {this.props.phoneList.map((phone, index) => {
          return (
            <Card style={{ width: "25rem" }} className="cus-card ">
              
              <Card.Img variant="top" src={phone.img} />
              <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Text>{phone.desc}</Card.Text>
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

SmartPhone.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
};
