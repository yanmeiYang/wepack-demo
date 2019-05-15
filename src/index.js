import React from 'react';
import ReactDOM from 'react-dom';
// import App from './pages/App';
import Stars from './pages/stars';
import './styles.less';

ReactDOM.render(<Stars/>, document.getElementById('root'));

// import _ from "lodash";
// import numRef from "./ref.json";
// import "./styles.less";
// function component() {
//   var element = document.createElement("div");
//   //  Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   var p = document.createElement("p");
//   p.innerHTML = "Click me and check console";
//   p.className = "class";
//   element.appendChild(p);
//   return element;
// }
// document.body.appendChild(component());
//  library 没有成功
// export function numToWord(num) {
//   // TODO reduce 是什么
//   return _.reduce(
//     numRef,
//     (accum, ref) => {
//       return ref.num === num ? ref.word : accum;
//     },
//     ""
//   );
// }

// export function wordToNum(word) {
//   return _.reduce(
//     numRef,
//     (accum, ref) => {
//       return ref.word === word && word.toLowerCase() ? ref.num : accum;
//     },
//     -1
//   );
// }
// import printMe from "./print.js";
// import "./styles.css";
// import { cube } from "./math.js";
// import './style.css';
// // 该图像讲被处理并添加到output目录，并且MyImage 变量讲包含该图像在处理后的最终url。
// import Icon from './user-solid.png';
// import Data from './data.xml';

// function component() {
// function getComponent() {
// let element = document.createElement("div");
// var btn = document.createElement("button");
// element.innerHTML = _.join(["Hello", "webpack"], " ");
// btn.innerHTML = "Click me and check console";
// btn.onclick = printMe;
// element.appendChild(btn);
// let cube_element = document.createElement("pre");
// cube_element.innerHTML = [
//   "Hello webpack!",
//   "5 cubed is equal to" + cube(5)
// ].join("\n\n");

// element.appendChild(cube_element);
// return import(/* webpackChunkName:"lodash"*/ "lodash").then(_ => {
//   var element = document.createElement('div');
//   var _ = _.default;
//   element.innerHTML = _.join(['Hello','webpack',' ']);
//   return element;
// }).catch(error => 'An error occurred while loading the component');

// element.classList.add('hello');

//  讲图像添加到我们现有的 div.
// var myIcon = new Image();
// myIcon.src = Icon;

// element.appendChild(myIcon);
// console.log(Data);

// return element;
// }
// async function getComponent() {
//   var element = document.createElement("div");
//   const _ = await import(/* webpackChunkName: "lodash"*/ "lodash");
//   element.innerHTML = _.join(["Hello", "webpack", " "]);
//   return element;
// }
// getComponent().then(component => {
//   document.body.appendChild(component);
// });
// function component() {
//   var element = document.createElement("div");
//   var button = document.createElement("button");
//   var br = document.createElement("br");

//   button.innerHTML = "Click me and look at the console!";
//   element.innerHTML = _.join(["Hello", "webpack", " "]);
//   // element.onclick = printMe.bind(null, "Hello webpack!");
//   element.appendChild(br);
//   element.appendChild(button);

//   // 使用ES6模板的import()方法时，必须只想模块的.default值，因为它才是promise被处理后返回的实际的module对象
//   button.onclick = e =>
//     import(/* webpackChunkName: "print" */ "./print").then(module => {
//       console.log("index.js 中import后返回的结果----", module);
//       var print = module.default;
//       print();
//     });
//   return element;
// }

// document.body.appendChild(component());
// document.body.appendChild(component());
// let element = component(); // 当print.js 改变重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept("./print.js", function() {
//     console.log("Accepting the updated printme module");
//     // printMe();
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }
