

class mazeSolution {

	sol = [];
	maze = [[]];
	
	constructor(maze) {
		this.maze = maze;
	}


	check = (pos) => {
		if(pos.x< 0 || pos.y < 0 ) {
			return false;
		}

		if(pos.x>= this.maze.length || pos.y >= this.maze.length ) {
			return false;
		}

		var mazePositionValue = this.maze[pos.x][pos.y];

		if(mazePositionValue !== 1) {
			return false;
		}


		return true;
	}	

	print = () => {
		this.sol.forEach(el => console.log(el));
		this.sol = [];
	}

	getMove(coord, dir) {
		switch(dir) {
			case 't': {
				return {
					x: coord.x,
					y: coord.y -1,
				}
			}
			case 'l': {
				return {
					x: coord.x-1,
					y: coord.y,
				}
			}
			case 'r': {
				return {
					x: coord.x +1,
					y: coord.y,
				}
			}
			case 'b': {
				return {
					x: coord.x,
					y: coord.y +1,
				}
			}
		}
	}

	start = (pos, goalPos) => {
		debugger;
		if(pos.x === goalPos.x && pos.y === goalPos.y) {
			return this.print();
		}

		for(var i=pos.x;i< this.maze.length;i++) {
			for(var j=pos.y;j< this.maze.length;j++) {

				var coord = {
					x: i,
					y: j,
				};

				var nextPositions = [];


				var posLeft = this.getMove(coord, 'l');
				var posTop = this.getMove(coord, 't');
				var posRight = this.getMove(coord, 'r');
				var posBottom = this.getMove(coord, 'b');

				this.check(posLeft) && nextPositions.push(posLeft);
				this.check(posTop) && nextPositions.push(posTop);
				this.check(posRight) && nextPositions.push(posRight);
				this.check(posBottom) && nextPositions.push(posBottom);

				for(var x=0;x< nextPositions.length;x++) {
						var np = nextPositions[x];
						this.sol.push(np);
						this.maze[np.x][np.y] = 2;

						this.start(nextPositions[x], goalPos);

				}

				
				
			}
		}

	}

}


var mat = [];
mat[0] = [1,0,0];
mat[1] = [1,1,0];
mat[2] = [0,1,1];



new mazeSolution(mat).start({x:0,y:0}, {
	x: 2,
	y: 2,
})

