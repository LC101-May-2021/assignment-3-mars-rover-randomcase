class Rover {
   constructor(position){
     this.position = position
     this.mode = "Normal"
     this.generatorWatts = 110
   }
   receiveMessage(message){
     let rainbow = {
       message: message.name,
       results: []
    }
    return rainbow;
   }
}

module.exports = Rover;