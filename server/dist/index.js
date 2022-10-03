"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get('/', (res, req) => {
  res.json({
    message: "Server is running"
  });
});
const PORT = 4000;
zomato.listen(PORT, () => {
  console.log("Server is running !!!");
});