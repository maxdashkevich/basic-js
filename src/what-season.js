module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  };
  if (!(Object.prototype.toString.call(date) == '[object Date]' )) throw new Error();

  let month = date.getMonth();
  
  return (month >= 0 && month <= 1 || month == 11 ) ? 'winter' : 
  (month > 1 && month <= 4) ? 'spring' :
  (month > 4 && month <= 7) ? 'summer' :
  (month > 7 && month <= 10) ? 'autumn' : false;
};