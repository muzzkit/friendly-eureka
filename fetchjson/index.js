"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// const url = 
axios_1["default"].get('https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
    console.log(response.data);
});

