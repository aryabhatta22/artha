export const getInitials = (name) => {
  var nameArr = name.split(" ", 2);
  return nameArr[0][0] + nameArr[1][0];
};
