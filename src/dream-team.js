module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let ans = members.filter(name => typeof name == 'string').map( elem => elem = elem.trim().slice(0, 1).toUpperCase() ).join('');
    return ans.split('').sort().join('');
  } else return false;
};