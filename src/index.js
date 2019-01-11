import _ from "lodash";
import printMe from "./print.js";
// import './style.css';
// // 该图像讲被处理并添加到output目录，并且MyImage 变量讲包含该图像在处理后的最终url。
// import Icon from './user-solid.png';
// import Data from './data.xml';

function component() {
  let element = document.createElement("div");
  var btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check console";
  btn.onclick = printMe;
  element.appendChild(btn);
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  li.innerHTML="1";
  // element.classList.add('hello');

  //  讲图像添加到我们现有的 div.
  // var myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  // console.log(Data);

  return element;
}

document.body.appendChild(component());
