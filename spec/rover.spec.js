const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
it ("constructor sets position and default values for mode and generatorWatts", function() {
  expect (rover.position).toEqual(this.position)
  expect (rover.mode).toEqual("Normal")
  expect (rover.generatorWatts).toEqual(110)
})

it ("response returned by receive Message contains name of message", function() {
  expect (rover.receiveMessage).toEqual(message.name)
})

it ("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  expect (rover.receiveMessage).toEqual(message.name, message.commands)
})

it ("responds correctly to status check command", function(){
  expect (rover.mode)
})

it ("responds correctly to mode change command", function(){
  expect (rover.mode).toEqual(message.command)
})

it ("responds with false completed value when attempting to move in LOW_POWER mode", fucntion(){
  expect (rover.position).toEqual()
})

it("responds with position for move command", function(){
  expect (rover.position).toEqual()
})
})