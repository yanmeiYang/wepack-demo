import React from "react";

export default class App extends React.Component {
  //   function interview1() {
  //     var count = 10;
  //   }
  interview1 = () => {
    var count = 10;
    const test = () => {
      var count = 0;
      count += 1;
      console.log(count);
    };
  };
  print = () => {
    const pubIdLists = [];
    for (let i = 0; i < 100; i++) {
      pubIdLists.push(i);
    }
    console.time("map normal for");
    const adjArray = pubIdLists.map(() => 0);
    console.timeEnd("map normal for");

    console.time("fill 填充");
    const fillArray = Array(pubIdLists.length).fill(0);
    console.timeEnd("fill 填充");
  };
  render() {
    return (
      <div>
        <h1>Hello React & Webpack!</h1>
        <ul>
          {["a", "b", "c"].map(name => (
            <li key={name}>{`I'm ${name}!`}</li>
          ))}
        </ul>
        <button onClick={this.print}> 面试题1</button>
      </div>
    );
  }
}
