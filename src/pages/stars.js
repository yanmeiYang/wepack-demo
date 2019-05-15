import React from "react";
// import test from '../images/IMG_2576.JPG'
import "./stars.less";
const colors = [
  "yellow",
  "pink",
  "purple",
  "lightblue",
  "hotpink",
  "teal",
  "lavender",
  "white",
  "cyan",
  "aqua",
  "chartreuse",
  "fuschia",
  "tomato",
  "aquamarine",
  "lightgreen",
  "gainsboro",
  "aliceblue",
  "orchid",
  "deeppink",
  "blueviolet",
  "salmon",
  "chocolate",
  "cornflowerblue",
  "crimson",
  "skyblue",
  "ghostwhite",
  "honeydew",
  "indigo",
  "lime",
  "paleturquoise",
  "plum",
  "thistle",
  "springgreen",
  "peachpuff",
  "gold",
  "floralwhite",
  "transparent",
  "turquoise",
  "orange"
];
export default class Stars extends React.Component {
  componentDidMount() {
    this.generateStars();
  }
  generateStars = () => {
    const stars = Math.floor(Math.random() * 200);
    for (let index = 0; index < stars; index++) {
      let star = document.createElement("div");
      const color =  colors[Math.floor(Math.random() * colors.length)];
      star.style.borderColor = color;
      star.style.color = color;
      star.className = `fas fa fa-${Math.floor(Math.random() * 6)}s  image-block`;
      let image = document.createElement("img");
      image.src="./images/IMG_2576.JPG"
      image.className = 'image'
      star.append(image)
    
      document.querySelector(".galaxy").append(star);
    }
  };

  render() {
    return (
      <div>
        <div className="galaxy" />
      </div>
    );
  }
}
