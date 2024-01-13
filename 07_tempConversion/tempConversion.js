const ftoc = function(temp) {
  let celcius = (temp - 32) * 5 / 9;
  let roundedCelcius = Math.round(celcius * 10) / 10;
  return roundedCelcius; 
};

const ctof = function(temp) {
  let farenheit = (temp *  9 / 5) + 32;
  let roundedFarenheit = Math.round(farenheit * 10) / 10;
  return roundedFarenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
