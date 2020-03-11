class Game {
	constructor() {
		this.board = board;
		this.players = this.createPlayers();
		this.ready = false;
	}

	/**
	 * Creates two player objects
	 * @return  {Array}    An array of two Player objects.
	 */
	createPlayers() {
		const players = [
			new Player('Player 1', 1, '#39FF33', true),
			new Player('Player 2', 2, '#3386FF')
		];
		return players;

		// Refactored Above
		// const player1 = new Player('Player 1', 1, '#39FF33', true);
		// const player2 = new Player('Player 2', 2, '#3386FF');

		// players.push(player1);
		// players.push(player2);
		// return players;
	}

	startGame() {}
}
