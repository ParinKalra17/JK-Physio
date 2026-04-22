const sizeOf = require('image-size');
const dimensions = sizeOf('c:/jk-physiotherapy/public/pulstar.jpg');
console.log(dimensions.width, dimensions.height);
