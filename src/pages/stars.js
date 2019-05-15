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
// TODO: 通过程序获取所有图片得名称
const images = [ '3bnP4.jpeg',
'IMG_2576.JPG',
'IMG_2591.JPG',
'IMG_2626.JPG',
'IMG_2674.JPG',
'IMG_2675.JPG',
'IMG_2676.JPG',
'IMG_2733.JPG',
'IMG_2735.JPG',
'IMG_2741.JPG',
'IMG_2778.JPG',
'IMG_2810.JPG',
'IMG_2813.JPG',
'IMG_2824.JPG',
'IMG_2830.JPG',
'IMG_2833.JPG',
'IMG_2841副本.jpg',
'IMG_2876.JPG',
'IMG_2893.JPG',
'IMG_2912.JPG',
'IMG_2921.JPG',
'IMG_2927.JPG',
'IMG_2977.JPG',
'IMG_2978.JPG',
'IMG_3006.JPG',
'IMG_3018.JPG',
'IMG_3027.JPG',
'IMG_3029.JPG',
'IMG_3030.JPG',
'IMG_3059.JPG',
'IMG_3060.JPG',
'IMG_3061.JPG',
'IMG_3083.JPG',
'IMG_3168.JPG',
'IMG_3173.JPG',
'IMG_3193.JPG',
'IMG_3219.JPG',
'IMG_3222.JPG',
'IMG_3223.JPG',
'IMG_3230.JPG',
'IMG_3251.JPG',
'IMG_3273.JPG',
'IMG_3355.JPG',
'IMG_3375.JPG',
'timg.jpeg',
'封面.JPG' ]
export default class Stars extends React.Component {
  componentDidMount() {
    this.generateStars();
  }
  generateStars = () => {
    const stars = Math.floor(Math.random() * 200);
    for (let index = 0; index < images.length; index++) {
      let star = document.createElement("div");
      const color =  colors[Math.floor(Math.random() * colors.length)];
      star.style.borderColor = color;
      star.style.color = color;
      star.className = `fas fa fa-${Math.floor(Math.random() * 6)}s  image-block`;
      let image = document.createElement("img");
      image.src=`./images/${images[index]}`
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
