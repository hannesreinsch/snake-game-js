//The default Map 
var map = [//0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20
/* y 0 */  ["B", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 1 */  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 3 */  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 4*/   ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 5 */  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 6 */  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 7 */  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 8 */  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 9 */  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 10 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "C", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 11 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 12 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 13 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 14 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 15 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 16 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 17 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 18 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 19 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
/* y 20 */ ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
]


//class to create new Character 
function Character (direction, position)  {
  this.direction = "E";
  this.lngth = 1;
  this.speed = 1;
  this.position =  {
    x: 0,
    y: 0
  };
}


//the first character "bus"
var bus = new Character (this.direction, this.position);


//function to turn character right
Character.prototype.turnRight = function () {
  switch(this.direction){
    case "N":
      return this.direction = "E";
      break;
    case "E":
      return this.direction = "S";
      break;
    case "S":
      return this.direction = "W";
      break;
    case "W":
      return this.direction = "N";
      break;
  }
}


//function to turn character left
Character.prototype.turnLeft = function () {
  switch(this.direction){
    case "N":
      return this.direction = "W";
      break;
    case "W":
      return this.direction = "S";
      break;
    case "S":
      return this.direction = "E";
      break;
    case "E":
      return this.direction = "N";
      break;
  }
}


//function to move the character
Character.prototype.move = function () { 
  switch(this.direction){
    case "N":
    this.position.y--;
    console.log(this.position);
    break;
    case "E":
    this.position.x++;
    console.log(this.position);
    break;
    case "S":
    this.position.y++;
    console.log(this.position);
    break;
    case "W":
    this.position.x--;
    console.log(this.position);
    break;
  }
}

//set interval for move function
var moveInterval = setInterval(function(){
  bus.move()
}, 300);


//makes sure that character doesn't leave the map
Character.prototype.boundaries = function () {
  if (this.position.x > 20){
    this.position.x = 0;
  }else if (this.position.y > 20){
    this.position.y = 0;
  }else if (this.position.x < 0){
    this.position.x = 20;
  }else if(this.position.y < 0){
    this.position.y = 20;
  }
  return this.position;
}


//spawns the items to collect (beer)
function randomBeer () {


}


//spawns a random obstacle
function randomObstacle () {

}