const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
it ("constructor sets position and default values for mode and generatorWatts", function() {
let rover = new Rover(98382)
  expect (rover.position).toEqual(98382)
  expect (rover.mode).toEqual("NORMAL")
  expect (rover.generatorWatts).toEqual(110)
})

it ("response returned by receive Message contains name of message", function() {
  //let command = new Command("STATUS_CHECK")
  let rover = new Rover(98382)
  let result = new Message("Tortoise", ["STATUS_CHECK"])
  let response = rover.receiveMessage(result)
  expect (response.message).toEqual("Tortoise")
})

it ("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  let rover = new Rover(98382)
  let result = new Message("Tortoise", [new Command ("MOVE"), new Command ("STATUS_CHECK")])
  let response = rover.receiveMessage(result)
  expect (response.results.length).toEqual(2)
  
})


it ("responds correctly to status check command", function(){
  let rover = new Rover(98382)
  let result = new Command("STATUS_CHECK")
  let response = new Message ("Tortoise", [result])
  expect (rover.receiveMessage(response).results[0]).toEqual({completed: true, roverStatus: {mode: "NORMAL", generatorWatts: 110, position: 98382}})
})

 it ("responds correctly to mode change command", function(){
  let rover = new Rover(98382)
  let result = new Command("MODE_CHANGE", "NORMAL")
  let response = new Message ("Tortoise", [result])
  expect (rover.receiveMessage(response).results[0]).toEqual({completed: true})
  expect(rover.mode).toEqual("NORMAL")
})

it ("responds with false completed value when attempting to move in LOW_POWER mode", function(){
   let rover = new Rover(98382)
   let result = new Command("MOVE", "LOW_POWER")
   let response = new Message("Tortoise", [result])
  expect (rover.receiveMessage(response).results[0]).toEqual({completed: false})
})

it("responds with position for move command", function(){
   let rover = new Rover(98382)
   let result = new Command("MOVE", 18273)
   let response = new Message("Tortoise", [result])
   rover.receiveMessage(response)
  expect (rover.position).toEqual(18273)
})
})
