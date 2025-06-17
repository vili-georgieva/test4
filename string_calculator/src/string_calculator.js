// StringCalculator.js

function findSpaceship(map) {
	const rows = map.trim().split('\n');// Split the map into rows
	const totalRows = rows.length;
  
	for (let i = 0; i < totalRows; i++) {
	  const row = rows[i];
	  const x = row.indexOf('X');
	  if (x !== -1) {
		const y = totalRows - 1 - i;
		return [x, y];
	  }
	}
	return "Spaceship lost forever.";
}
function StringCalculator() { }
StringCalculator.prototype.add = function (coordinates) {
	if(findSpaceship(coordinates) === "Spaceship lost forever.") {
		return "Spaceship lost forever.";
	}
	return [x_coordinate, y_coordinate] = findSpaceship(coordinates);
};
