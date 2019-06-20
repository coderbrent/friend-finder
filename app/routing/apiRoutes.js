const express = require('express');
const app = express();
const path = require('path');
const friends = require('../data/friends.js')

module.exports = app => {
  app.post('/api/friends', (req, res) => {
    const userScore = req.body.scoreTotal;
    const scoreArray = [];
    //iterate through the imported friends array, tally up all their scores and put them into an array.
    for(i = 0; i < friends.length; i++) {
      
      //helper function to pass to the reduceRight method used when creating our new array below.
      const arrSum = (total, value) => {
        return total + value;
      }

      friendName = friends[i].name;
      photoURL = friends[i].photo;
      //gets the stored friends scores, sums them up and then subtracts them from the submitted users score.
      //since i was getting negative numbers here, i used Math.abs to make sure that "0" was the smallest number we could get.
      scoreSum = Math.abs(userScore - friends[i].scores.reduceRight(arrSum));
      scoreArray.push([friendName, photoURL, scoreSum])  
    }

    //since we know the smallest number (difference) will indicate our closest match, we sort the scoreArray in descending order by
    //the value in it's second position (which, in this case, is the users difference score)
    scoreArray.sort((a,b) => {
      return a[2] - b[2]
    })

    //since the array is now sorted properly, our best match will sit in the 0 position which can be easily extracted.
    let match = scoreArray[0];    
    console.log(match);
    friends.push(req.body)
    res.end();
    
  });
    

  
  app.get('/api/friends', (req, res) => {

  })
}