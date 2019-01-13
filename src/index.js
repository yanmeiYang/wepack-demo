// import _ from "lodash";
import printMe from "./print.js";
import "./styles.css";
import { cube } from "./math.js";
// import './style.css';
// // 该图像讲被处理并添加到output目录，并且MyImage 变量讲包含该图像在处理后的最终url。
// import Icon from './user-solid.png';
// import Data from './data.xml';

function component() {
  // let element = document.createElement("div");
  // var btn = document.createElement("button");
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  // btn.innerHTML = "Click me and check console";
  // btn.onclick = printMe;
  // element.appendChild(btn);
  let cube_element = document.createElement("pre");
  cube_element.innerHTML = [
    "Hello webpack!",
    "5 cubed is equal to" + cube(5)
  ].join("\n\n");

  // element.classList.add('hello');

  //  讲图像添加到我们现有的 div.
  // var myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  // console.log(Data);

  return cube_element;
}

// document.body.appendChild(component());
let element = component(); // 当print.js 改变重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printme module");
    // printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
