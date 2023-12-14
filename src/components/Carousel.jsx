import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    if (this.state.count < 2) {
      this.setState({ count: (this.state.count += 1) });
    } else {
      this.setState({ count: (this.state.count -= 2) });
    }
  };

  decrease = () => {
    if (this.state.count > 0) {
      this.setState({ count: (this.state.count -= 1) });
    } else {
      this.setState({ count: (this.state.count += 2) });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="left-arrow">
            <button onClick={this.decrease}>
              <ArrowBackIosIcon />
            </button>
          </div>
          <div className="info">
            <img className="img" src={images[this.state.count].img} alt="" />
          </div>
          <div className="right-arrow">
            <button onClick={this.increase}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div>
          <h1 className="title">{images[this.state.count].title}</h1>
          <p className="subtitle">{images[this.state.count].subtitle}</p>
        </div>
      </>
    );
  }
}

export default Carousel;
