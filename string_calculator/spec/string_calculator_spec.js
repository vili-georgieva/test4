describe('String Calculator', function () {
	beforeEach(function () {
		calculator = new StringCalculator();
	});

	it('negative test', function () {
		let map = "..........\n" +
			".......X..\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........";

		// 20 does not exist in the map, on purpose
		expect(calculator.add(map)).toEqual([7, 20]);
	});

	it('should find the spaceship at correct location', function () {
		let map = "..........\n" +
			"..........\n" +
			"..........\n" +
			".......X..\n" +
			"..........\n" +
			"..........";

		expect(calculator.add(map)).toEqual([7, 2]);
	});

	it('lost in space and time', function () {
		let map = "..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........";

		expect(calculator.add(map)).toEqual("Spaceship lost forever.");
	});
});
