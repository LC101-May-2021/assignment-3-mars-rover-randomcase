class Rover {
   constructor(position){
     this.position = position
     this.mode = "Normal"
     this.generatorWatts = 110
     this.recieveMessage(message)
   }
}

module.exports = Rover;