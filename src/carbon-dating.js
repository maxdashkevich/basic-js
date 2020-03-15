const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;
let ans;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY ||  /[A-Za-z]/.test(sampleActivity)) {
return false;
  }
 return  Math.ceil( (Math.log( MODERN_ACTIVITY / parseFloat(sampleActivity)) /  (LN2 / HALF_LIFE_PERIOD )));
}


