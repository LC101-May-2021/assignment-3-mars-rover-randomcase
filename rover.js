class Rover {
   constructor(position){
     this.position = position
     this.mode = "NORMAL"
     this.generatorWatts = 110
   }
   receiveMessage(message){
     let rainbow = {
       message: message.name,
       results: []
    }
    for(let i = 0; i < message.commands.length; i++){
      if (message.commands[i].commandType === "MODE_CHANGE"){
        this.mode = message.commands[i].value;
        rainbow.results.push({completed: true})
      }else{
        if (message.commands[i].commandType === "STATUS_CHECK"){
          rainbow.results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
        }else{
          if (message.commands[i].commandType === "MOVE"){
            this.position = message.commands[i].value;
            
            if(message.commands[i].value === "LOW_POWER"){
              rainbow.results.push({completed: false})

            }else{
              rainbow.results.push({completed: true})
            }
          }
        }
      }
    }
    
    return rainbow;
   }
}

module.exports = Rover;