const core = require("@actions/core");

const firstParameter = core.getInput("p1");
const secondParameter = core.getInput("p2");

console.log(`Hello ${firstParameter}`);
if (thirdParameter) {
  console.log(`Hello ${thirdParameter}`);
}
