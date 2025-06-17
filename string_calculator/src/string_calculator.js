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
StringCalculator.prototype.add = function (coordinates) {
    const result = findSpaceship(coordinates); // Store the result of findSpaceship
    if (result === "Spaceship lost forever.") {
        return result; // Return the error message directly
    }
    const [x_coordinate, y_coordinate] = result; // Destructure the result into variables
    return { x_coordinate, y_coordinate }; // Return as an object
};
