import Tile from '/js/board/tile.js';

class Board {

  constructor(registry, width, height){

    this.registry = registry;
    this.width = width;
    this.height = height;
    this.gridSize = 100;
    let waterPercentage = 60;
    let continentCount = 2;

    console.log('Constructing Board: ' + this.width + "x" + this.height);
    this.tiles = [];
    // let terrainType = Object.keys(registry.terrains);
    // let lastTerrain = 0;
    for (let i = 0; i < this.height; i++) {
      this.tiles[i] = [];
      for (let j = 0; j < this.width; j++) {
        this.tiles[i][j] = "placeholder";
        // this.tiles[i][j] = new Tile ({ "id": j + ":" + i, "terrain":window.game.registry.terrains[terrainType[lastTerrain]]});
        // lastTerrain = (lastTerrain + 1) % terrainType.length;
      }
    }

    let totalTiles = this.width * this.height;
    let waterTiles = Math.ceil(totalTiles * waterPercentage / 100);
    let landTiles = totalTiles - waterTiles;
    console.log(waterTiles + ' water ' + landTiles + ' land = ' + totalTiles + ' tiles');
    let islandTiles = Math.ceil(landTiles * 4 / 100); // TODO: figure out algorithm to tell if a tile can be an island
    let continentTiles = landTiles - islandTiles;
    let tilesPerContinent = continentTiles / continentCount;
    console.log(tilesPerContinent + ' tiles per continent for ' + continentCount + ' continents and ' + islandTiles + ' island tile equals ' + landTiles + ' land tiles');

    //will eventually need a better way to pick seed locations but for now let's go upper-right and lower-left
    //upper-right
    let rangedWidth = 60 + Math.floor(Math.random()*20);
    let rangedHeight = Math.floor(Math.random()*25);
    let seed1x = Math.floor(this.width * rangedWidth / 100);
    let seed1y = Math.floor(this.height * rangedHeight / 100);
    //this.checkSurroundingTiles(seed1x, seed1y);
    // console.log(this.tiles);
            // this.tiles[seed1y][seed1x] = new Tile ({ "id": seed1x + ":" + seed1y, "terrain":registry.getRegisteredItem('terrains', 'grassland')});

    //using a numberpad there are 9 different directions to move, remove this tile (5) and we are left with movement
    //should build a recursive algorithm for this, but not yet

    this.buildContinent(seed1x, seed1y, tilesPerContinent);
            //let directions = [for (i of Array(9).keys()) i+1];
    //         let directions = [];
    //         for (let i of Array(9).keys()) { directions.push(i + 1) };
    //         directions = directions.filter(e => !this.checkSurroundingTiles(seed1x, seed1y).find(a => e == a));
    //         console.log(directions);
    //
    // do {
    //           let direction = directions[Math.floor(Math.random()*directions.length)];
    //           console.log('direction to try: ' + direction);
    //   //TODO: Add checks for out of range
    //           let newTilex = 0;
    //           let newTiley = 0;
    //           switch(direction) {
    //             case 1:
    //               newTilex = seed1x - 1;
    //               newTiley = seed1y + 1;
    //               break;
    //             case 2:
    //             newTilex = seed1x - 0;
    //             newTiley = seed1y + 1;
    //               break;
    //             case 3:
    //             newTilex = seed1x + 1;
    //             newTiley = seed1y + 1;
    //               break;
    //             case 4:
    //             newTilex = seed1x - 1;
    //             newTiley = seed1y - 0;
    //               break;
    //             // case 5:
    //             //   break;
    //             case 6:
    //             newTilex = seed1x + 1;
    //             newTiley = seed1y - 0;
    //               break;
    //             case 7:
    //             newTilex = seed1x - 1;
    //             newTiley = seed1y - 1;
    //               break;
    //             case 8:
    //             newTilex = seed1x - 0;
    //             newTiley = seed1y - 1;
    //               break;
    //             case 9:
    //             newTilex = seed1x + 1;
    //             newTiley = seed1y - 1;
    //               break;
    //           }
    //
    //           console.log('new tile: ' + newTilex + ', ' + newTiley)
    //           try {
    //             if (this.tiles[newTiley][newTilex] == undefined) {
    //               throw 'not a valid tile';
    //             } else {
    //               this.tiles[newTiley][newTilex] = new Tile ({ "id": newTilex + ":" + newTiley, "terrain":registry.getRegisteredItem('terrains', 'grassland')});
    //             }
    //             tilesLeft--;
    //           } catch (e) {
    //             console.log(e);
    //           }
    //           directions = directions.filter(e => e !== direction);
    //
    //           console.log(tilesLeft + ' continent tiles left');
    //           if (tilesLeft <= 0) {
    //             break;
    //           }
    //
    //         } while (directions.length > 0);



    rangedWidth = Math.floor(Math.random()*25);
    rangedHeight = 60 + Math.floor(Math.random()*20);
    let seed2x = Math.floor(this.width * rangedWidth / 100);
    let seed2y = Math.floor(this.height * rangedHeight / 100);
    // this.tiles[seed2y][seed2x] = new Tile ({ "id": seed2x + ":" + seed2y, "terrain":registry.getRegisteredItem('terrains', 'grassland')});

    this.buildContinent(seed2x, seed2y, tilesPerContinent);
    //       directions = [for (i of Array(9).keys()) i+1];
    //       directions = [];
    //       for (let i of Array(9).keys()) { directions.push(i + 1) };
    //       console.log(directions);
    //       directions = directions.filter(e => !this.checkSurroundingTiles(seed2x, seed2y).find(a => e == a));
    //       console.log(directions);
    //
    // do {
    //   let direction = directions[Math.floor(Math.random()*directions.length)];
    //   console.log('direction to try: ' + direction);
    //   //TODO: Add checks for out of range
    //   let newTilex = 0;
    //   let newTiley = 0;
    //   switch(direction) {
    //     case 1:
    //       newTilex = seed2x - 1;
    //       newTiley = seed2y + 1;
    //       break;
    //     case 2:
    //     newTilex = seed2x - 0;
    //     newTiley = seed2y + 1;
    //       break;
    //     case 3:
    //     newTilex = seed2x + 1;
    //     newTiley = seed2y + 1;
    //       break;
    //     case 4:
    //     newTilex = seed2x - 1;
    //     newTiley = seed2y - 0;
    //       break;
    //     // case 5:
    //     //   break;
    //     case 6:
    //     newTilex = seed2x + 1;
    //     newTiley = seed2y - 0;
    //       break;
    //     case 7:
    //     newTilex = seed2x - 1;
    //     newTiley = seed2y - 1;
    //       break;
    //     case 8:
    //     newTilex = seed2x - 0;
    //     newTiley = seed2y - 1;
    //       break;
    //     case 9:
    //     newTilex = seed2x + 1;
    //     newTiley = seed2y - 1;
    //       break;
    //   }
    //
    //   console.log('new tile: ' + newTilex + ', ' + newTiley)
    //   try {
    //     if (this.tiles[newTiley][newTilex] != "placeholder") {
    //       // [4, 0]
    //       throw 'not a valid tile';
    //     } else {
    //       this.tiles[newTiley][newTilex] = new Tile ({ "id": newTilex + ":" + newTiley, "terrain":registry.getRegisteredItem('terrains', 'grassland')});
    //     }
    //     tilesLeft--;
    //   } catch (e) {
    //     // -1 gets me here without throwing in the try
    //     console.log(e);
    //   }
    //   directions = directions.filter(e => e !== direction);
    //
    //   console.log(tilesLeft + ' continent tiles left');
    //   if (tilesLeft <= 0) {
    //     break;
    //   }
    //
    // } while (directions.length > 0);

    //add islands
    if (islandTiles > 0) {
      this.seedIslands(islandTiles);
    }

    //fill in our water tiles
    console.log('filling in water tiles');
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        // console.log(this.tiles[i][j]);
        if (this.tiles[i][j] == 'placeholder') {
          this.tiles[i][j] = new Tile ({ "id": j + ":" + i, "terrain":registry.getRegisteredItem('terrains', 'ocean')});
        }
      }
    }
    console.log('water tiles filled in');
    // for (let i = 0; i < this.height; i++) {
    //   for (let j = 0; j < this.width; j++) {
    //     console.log(this.tiles[i][j]);
    //   }
    // }

    // change the terrain image directly and check the terrain reference in the board object changed to show we are using shared memory
    // console.log(registry.terrains.grassland);
    // registry.terrains.grassland.image = 'booga booga';
    // console.log(this.tiles[0][0]); //great success!
  }

  buildContinent(seedx, seedy, tilesLeft) {
    // console.log('build continent starting at ' + seedx + ', ' + seedy + ', ' + tilesLeft + ' tiles left');
    //TODO: this is our recursive function
    //probably will look something like this:
      // 0. add a tile where we are if it doesn't have one
      // 1. create an array of possible moves
      // 2. if there is already a tile there, drop it from the array
      // 3. randomly pick a move
      // 4. add a tile there
      // 5. drop that move from the array
      // 6. randomly pick a move, add a tile there, drop that move from the array, repeat until no more moves
      // 7. go back to the seed, pick a direction, and use that as the new seed
      // 8. fill out all directions
      // 9. go back to the seed, pick a different direction, and use that as the new seed
      // 10. fill out all directions, repeat until all directions filled out
      // 11. go back to the seed, randomly pick a direction, move there and randomly pick a direction, use that as the new seed and fill out all the directions
      // 12. continue until out of continent tiles

      // 0. add a tile where we are if it doesn't have one
      try {
        if (this.tiles[seedy][seedx].terrain.name) {
          // console.log(this.tiles[seedy][seedx].terrains.name + ' tile exists at ' + seedx + ', ' + seedy + ', noop');
        } //noop
      } catch (e) {
        // console.log(e);
        this.tiles[seedy][seedx] = new Tile ({ "id": seedx + ":" + seedy, "terrain":this.registry.getRegisteredItem('terrains', 'grassland')});
        tilesLeft--;
        // console.log('added new seed tile, ' + tilesLeft + ' tiles left');
      }

      // 1-2
      let directions = this.getPossibleDirections(seedx,seedy);

      // 3-6
      // console.log('about to fill tiles around seed');
      tilesLeft = this.fillNewTile(seedx, seedy, tilesLeft, directions);
      // console.log('finished filling tiles around seed, ' + tilesLeft + ' tiles left');

      let seeds = [{x:seedx, y:seedy}];
      // console.log('seeds:');
      // console.log(seeds);
      let newSeed = seeds[0];
      // console.log('newSeed:');
      // console.log(newSeed);

      do {
        // 7. go back to the seed, pick a direction, and use that as the new seed
        directions = [];
        for (let i of Array(9).keys()) { directions.push(i + 1) };
        directions = directions.filter(e => e != 5);
        // console.log('build continent do loop directions:');
        // console.log(directions);
        let tempSeed = undefined;
        do {
          let direction = directions[Math.floor(Math.random()*directions.length)];
          directions = directions.filter(e => e != direction);
          // console.log('moving in direction ' + direction);
          tempSeed = this.getNewTileCoordinates(newSeed.x, newSeed.y, direction);
          // console.log('seeds:');
          // console.log(seeds);
          // console.log('newSeed:');
          // console.log(tempSeed);
          // console.log('seeds includes newSeed? ' + seeds.includes(newSeed));
        } while (tempSeed.x == -1 && tempSeed.y == -1);
        newSeed = tempSeed;
        seeds.push({x:newSeed.x, y:newSeed.y});
        // console.log('pushed seed:');
        // console.log(seeds);

        // 8. fill out all directions
        // console.log(tilesLeft + ' tiles left before filling around new seed');
        tilesLeft = this.fillNewTile(newSeed.x, newSeed.y, tilesLeft, this.getPossibleDirections(newSeed.x, newSeed.y));
        // console.log(tilesLeft + ' tiles left after filling around new seed');

        // 9. go back to the seed, pick a different direction, and use that as the new seed
        // 10. fill out all directions, repeat until all directions filled out
        // 11. go back to the seed, randomly pick a direction, move there and randomly pick a direction, use that as the new seed and fill out all the directions
        // 12. continue until out of continent tiles
      } while (tilesLeft > 0);
  }

  fillNewTile(x,y,tilesLeft, directions) {
    if (directions.length <= 0 || tilesLeft <= 0) {
      return tilesLeft;
    }

    // 3. randomly pick a move
    let direction = directions[Math.floor(Math.random()*directions.length)];
    // console.log('direction to try: ' + direction);

    // 4. add a tile there if it doesn't have one
    let newCoords = this.getNewTileCoordinates(x,y,direction);

    // console.log(newCoords);
    // console.log({x: -1, y: -1});
    // console.log(newCoords == {x: -1, y: -1});
    if (newCoords.x > -1 && newCoords.y > -1){
      try {
        // console.log(this.tiles[newCoords.y][newCoords.x]);
        if (this.tiles[newCoords.y][newCoords.x].terrain.name) {
          // console.log('filling tile that is already there, noop');
        } //noop
      } catch (e) {
        // console.log('no tile at ' + (newCoords.x) + ', ' + (newCoords.y) + ' so create new tile');
        //TODO: maybe randomly throw in a lake tile and don't decrement the tilesLeft count?
        this.tiles[newCoords.y][newCoords.x] = new Tile ({ "id": newCoords.x + ":" + newCoords.y, "terrain":this.registry.getRegisteredItem('terrains', 'grassland')});
        tilesLeft--;
        // console.log('Added new tile at ' + newCoords.x + ', ' + newCoords.y + ' leaving ' + tilesLeft + ' tiles left');
      }
    }

    // 5. drop that move from the array
    directions = directions.filter(e => e !== direction);
    // console.log('directions left:');
    // console.log(directions);

    // 6. randomly pick a move, add a tile there, drop that move from the array, repeat until no more moves
    tilesLeft = this.fillNewTile(x, y, tilesLeft, directions);
    // console.log('after recursion there are ' + tilesLeft + ' tiles left');

    return tilesLeft;
  }

  getPossibleDirections(x,y){
    // 1. create an array of possible moves
    let directions = [];
    for (let i of Array(9).keys()) { directions.push(i + 1) };

    // 2. if there is already a tile there, drop it from the array of possible moves
    directions = directions.filter(e => !this.checkSurroundingTiles(x, y).find(a => e == a));
    // console.log('possible directions:');
    // console.log(directions);

    return directions;
  }

  getNewTileCoordinates(x,y,direction){
    let newTilex = -1;
    let newTiley = -1;
    switch(direction) {
      case 1:
        if (x > 0 && y < (this.height - 1)){
          newTilex = x - 1;
          newTiley = y + 1;
        }// else { console.log('trying to move off the board'); }
        break;
      case 2:
        if (y < (this.height - 1)){
          newTilex = x - 0;
          newTiley = y + 1;
        }// else { console.log('trying to move off the board'); }
        break;
      case 3:
        if (x < (this.width - 1) && y < (this.height - 1)){
          newTilex = x + 1;
          newTiley = y + 1;
        }// else { console.log('trying to move off the board'); }
        break;
      case 4:
        if (x > 0){
          newTiley = y - 0;
          newTilex = x - 1;
        }// else { console.log('trying to move off the board'); }
        break;
      // case 5:
      //   break;
      case 6:
        if (x < (this.width - 1)){
          newTilex = x + 1;
          newTiley = y - 0;
        }// else { console.log('trying to move off the board'); }
        break;
      case 7:
        if (x > 0 && y > 0){
          newTilex = x - 1;
          newTiley = y - 1;
        }// else { console.log('trying to move off the board'); }
        break;
      case 8:
        if (y > 0){
          newTilex = x - 0;
          newTiley = y - 1;
        }// else { console.log('trying to move off the board'); }
        break;
      case 9:
        if (x < (this.width - 1) && y > 0){
          newTilex = x + 1;
          newTiley = y - 1;
        }// else { console.log('trying to move off the board'); }
        break;
    }
    return {x:newTilex, y:newTiley};
  }

  checkSurroundingTiles(x,y){
    //based on a standard keyboard number pad
    //there's probably a more clever way to do this but this works for now
    //catches here are noops
    let filled = [];
    //check passed-in tile
    try {
      if (this.tiles[y][x].terrain.name) {
        filled.push(5);
      }
    } catch (e) {}

    //check left tiles
    if (x > 0) {
      //upper
      if (y > 0) {
        try {
          if (this.tiles[y-1][x-1].terrain.name) {
            filled.push(7);
          }
        } catch (e) {}
      }

      //center
      try {
        if (this.tiles[y][x-1].terrain.name) {
          filled.push(4);
        }
      } catch (e) {}

      //lower
      if (y < (this.height - 1)) { // 0-index
        try {
          if (this.tiles[y+1][x-1].terrain.name) {
            filled.push(1);
          }
        } catch (e) {}
      }
    } else {
      filled.push(7);
      filled.push(4);
      filled.push(1);
    }

    //check right tiles
    if (x < (this.width - 1)) {
      //upper
      if (y > 0) {
        try {
          if (this.tiles[y-1][x+1].terrain.name) {
            filled.push(9);
          }
        } catch (e) {}
      }

      //center
      try {
        if (this.tiles[y][x+1].terrain.name) {
          filled.push(6);
        }
      } catch (e) {}

      //lower
      if (y < (this.height - 1)) { // 0-index
        try {
          if (this.tiles[y+1][x+1].terrain.name) {
            filled.push(3);
          }
        } catch (e) {}
      }
    } else {
      filled.push(9);
      filled.push(6);
      filled.push(3);
    }

    //check tile above
    if (y > 0) {
      try {
        if (this.tiles[y-1][x].terrain.name) {
          filled.push(8);
        }
      } catch (e) {}
    } else {
      filled.push(8);
    }

    //check tile below
    if (y < (this.height - 1)) {
      try {
        if (this.tiles[y-1][x].terrain.name) {
          filled.push(2);
        }
      } catch (e) {}
    } else {
      filled.push(2);
    }

    return filled;
  }

  seedIslands(islandTiles){
    //TODO:figure out island seeding
      //generate array of placeholder tiles
      let findPlaceholderTiles = function(self){
        let placeholders = [];
        for (let i = 0; i < self.height; i++) {
          for (let j = 0; j < self.width; j++) {
            if (self.tiles[i][j] == "placeholder"){
              placeholders.push({x:j,y:i});
            }
          }
        }
        return placeholders;
      }

      //pick tile not in array of picked tiles (randomly-ish?)
      let tryRandomTile = function(self, possibleIslandLocations){
        return possibleIslandLocations[Math.floor(Math.random() * (possibleIslandLocations.length - 1))];
      }

      //add tile coordinates to array of picked tiles
      //check surrounding tiles
      //if surrounding are placeholders generate island
        //maybe check surrounding tiles of surrounding tiles and add another tile for a larger island
      //if more islands and tiles left to pick from, begin again


    //algorithm might look like:
    //generate array of placeholder tiles
    let possibleIslandLocations = findPlaceholderTiles(this);
    console.log('possible island locations:');
    console.log(possibleIslandLocations);

    let triedIslandLocations = [];
    let confirmedIslandLocations = [];

    while (triedIslandLocations.length < possibleIslandLocations.length) {
      //pick tile not in array of picked tiles (randomly-ish?)
      let tileToTry = tryRandomTile(this, possibleIslandLocations);
      // console.log('tile to try:');
      // console.log(tileToTry);

      //add tile coordinates to array of picked tiles
      triedIslandLocations.push(tileToTry);
      // console.log('tried island locations:');
      // console.log(triedIslandLocations);

      //check surrounding tiles
      let filledTiles = this.checkSurroundingTiles(tileToTry.x, tileToTry.y);
      // console.log('filled tiles:');
      // console.log(filledTiles);

      //if surrounding are placeholders add location to array of confirmed potentials
      if (filledTiles.length == 0) {
        confirmedIslandLocations.push(tileToTry);
        // console.log('pushed ' + tileToTry.x + ', ' + tileToTry.y);
      }

    }

    let pickedLocation = [];
    //pick location from possible locations
    console.log('confirmedIslandLocations:');
    console.log(confirmedIslandLocations);
    console.log('length: ' + confirmedIslandLocations.length);
    pickedLocation.push(confirmedIslandLocations[Math.floor(Math.random()*(confirmedIslandLocations.length - 1))]);

    //generate island at random location from confirmed potentials
    // this.tiles[pickedLocation.y][pickedLocation.x] = new Tile ({ "id": pickedLocation.x + ":" + pickedLocation.y, "terrain":this.registry.getRegisteredItem('terrains', 'grassland')});
    // islandTiles--;

    //check surrounding tiles
    console.log(pickedLocation);
    let directions = this.getPossibleDirections(pickedLocation[pickedLocation.length - 1].x,pickedLocation[pickedLocation.length - 1].y);
    console.log(directions);
    let tempSeed = undefined;
    do {
      let direction = directions[Math.floor(Math.random()*directions.length)];
      directions = directions.filter(e => e != direction);
      console.log('moving in direction ' + direction);
      tempSeed = this.getNewTileCoordinates(pickedLocation[pickedLocation.length - 1].x, pickedLocation[pickedLocation.length - 1].y, direction);
    } while (tempSeed.x == -1 && tempSeed.y == -1);
    console.log('tempSeed:');
    console.log(tempSeed);

    //check surrounding tiles
    let filledTiles = this.checkSurroundingTiles(tempSeed.x, tempSeed.y);
    console.log(filledTiles);

    if (filledTiles.length == 0) {
      pickedLocation.push(tempSeed);
    }
    console.log('island squares:');
    console.log(pickedLocation);

    // do {
    //   // 7. go back to the seed, pick a direction, and use that as the new seed
    //   directions = [];
    //   for (let i of Array(9).keys()) { directions.push(i + 1) };
    //   directions = directions.filter(e => e != 5);
    //   // console.log('build continent do loop directions:');
    //   // console.log(directions);
    //   let tempSeed = undefined;
    //   do {
    //     let direction = directions[Math.floor(Math.random()*directions.length)];
    //     directions = directions.filter(e => e != direction);
    //     // console.log('moving in direction ' + direction);
    //     tempSeed = this.getNewTileCoordinates(newSeed.x, newSeed.y, direction);
    //     // console.log('seeds:');
    //     // console.log(seeds);
    //     // console.log('newSeed:');
    //     // console.log(tempSeed);
    //     // console.log('seeds includes newSeed? ' + seeds.includes(newSeed));
    //   } while (tempSeed.x == -1 && tempSeed.y == -1);
    //   newSeed = tempSeed;
    //   seeds.push({x:newSeed.x, y:newSeed.y});
    //   // console.log('pushed seed:');
    //   // console.log(seeds);
    //
    //   // 8. fill out all directions
    //   // console.log(tilesLeft + ' tiles left before filling around new seed');
    //   tilesLeft = this.fillNewTile(newSeed.x, newSeed.y, tilesLeft, this.getPossibleDirections(newSeed.x, newSeed.y));
    //   // console.log(tilesLeft + ' tiles left after filling around new seed');
    //
    //   // 9. go back to the seed, pick a different direction, and use that as the new seed
    //   // 10. fill out all directions, repeat until all directions filled out
    //   // 11. go back to the seed, randomly pick a direction, move there and randomly pick a direction, use that as the new seed and fill out all the directions
    //   // 12. continue until out of continent tiles
    // } while (tilesLeft > 0);

      //maybe check surrounding tiles of surrounding tiles and add another tile for a larger island
    //if more islands and tiles left to pick from, begin again
  }

  draw(){
    console.log('Drawing board');

    let board = this.find_or_create_board_html();

    for (let i = 0; i < this.height; i++) {
      let row = this.create_html('div', 'board_row_' + i, 'row');
      board.appendChild(row);
      for (let j = 0; j < this.width; j++) {
        this.tiles[i][j].draw(row);
      }
    }
  }


  // should be private, but JS doesn't do that without workarounds

  find_or_create_board_html() {
    let board_id = "board0";
    this.id = board_id;

    if(document.getElementById(board_id) == undefined) {
      document.body.appendChild(this.create_html('div', board_id, 'board'));
    }
    let board = document.getElementById(board_id);
    let phantomPixels = 10;
    board.style.width = (this.width * this.gridSize + phantomPixels) + 'px';
    board.style.height = (this.height * this.gridSize + phantomPixels) + 'px';
    return board;
  }

  // TODO: Move this to some sort of "utility" class
  create_html (tag, id, classes) {
    let element = document.createElement(tag);
    if (id !== undefined)
      element.setAttribute("id", id);
    if (classes !== undefined)
      element.setAttribute("class", classes);
    return element;
  }
}
export default Board;
