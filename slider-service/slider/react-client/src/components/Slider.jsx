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
    this.fetchTrans();
  }
  getImages() {
    var that = this;
    $.ajax({
      url:
        "https://slider-service.herokuapp.com/retrive?product_id=" +
        that.props.item_id,
      // "http://localhost:3002/retrive/?product_id=" + this.props.item_id,
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
    // this.getImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item_id !== this.props.item_id) {
      this.fetchTrans();
    }
  }

  fetchTrans() {
    // this.props.fetchTrans(this.props.item_id);
    console.log(this.props.item_id);
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
      <span style={{ display: "block" }}>
        <Slider1 {...settings}>
          {this.state.images.map(image => (
            <div key={image.id}>
              <img src={image.url} height="370px"></img>
            </div>
          ))}
        </Slider1>
      </span>
    );
  }
}
export default Slider;
