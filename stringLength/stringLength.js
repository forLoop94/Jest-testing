const stringLength = (string) => {
	const errorMsg = "string should be between 1 and 10 characters";
  if(string.length < 1 || string.length > 10) {
    return errorMsg;
  }
  return string.length;
}

module.exports = stringLength;