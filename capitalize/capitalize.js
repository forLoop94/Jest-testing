const capitalize = (string) => {
	let text = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
		text += string[i];
	}
	return text;
}

module.exports = capitalize;