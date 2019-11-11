import React from "react";
import $ from "jquery";
import Slider1 from "react-slick";
// import "../../dist/styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
  getImages() {
    var that = this;
    $.ajax({
      url: "http://localhost:3002/retrive",
      type: "GET",
      success: data => {
        that.setState({
          images: data
        });
      },
      error: err => {}
    });
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    var settings = {
      speed: 500,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 0.5,
      arrows: true
    };

    return (
      // <div className="row">
      //   <div className="column left"></div>
      //   <div className="column right">
      <span style={{ width: 800, display: "block" }}>
        <Slider1 {...settings}>
          {this.state.images.map(image => (
            <div key={image.id}>
              <img src={image.url} height="370px"></img>
            </div>
          ))}
        </Slider1>
      </span>
      //   </div>
      //   <div className="column middle"> </div>
      // </div>
    );
  }
}
export default Slider;
// <div style={{ backgroundColor: "cyan" }}>
// <span style={{ width: 250, display: "block", backgroundColor: "red" }}>
//   edrfererer
// </span>
// <span style={{ width: 800, display: "block" }}>
//   <Slider1 {...settings}>
//     {this.state.images.map(image => (
//       <div key={image.id}>
//         <img src={image.url} height="370px"></img>
//       </div>
//     ))}
//   </Slider1>
// </span>
// </div>
