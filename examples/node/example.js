const webpackNumbers = require('./webpack-numbers.js');
// export function out(){
//     console.log('This is result for numtoword(1) ==== ' + webpackNumbers.numtoword(1));
// }
console.log("webpack numbers----",webpackNumbers);
var out = function() {
    process.stdout.write('This is the result for numtoword(1) === ' + webpackNumbers.numtoword(1));
};
out();