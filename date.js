//jshint esversion:6

exports.getDate = function() {
  let today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  return today.toLocaleDateString("gb-EN", options);

};

exports.getDay = function() {
  let today = new Date();

  const options = {
    weekday: 'long',
  };

  return today.toLocaleDateString("gb-EN", options);
};
