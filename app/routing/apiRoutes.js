const express = require('express');
const app = express();
const path = require('path');
const friends = require('../data/friends.js')

module.exports = app => {
  app.post('/api/friends', (req, res) => {
    console.log(req.body)
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
      console.log(friends[i].scores)
      scoreArray.push([friendName, photoURL, scoreSum])
    }

    //since we know the smallest number (difference) will indicate our closest match, we sort the scoreArray in descending order by
    //the value in it's second position (which, in this case, is the users difference score)
    scoreArray.sort((a,b) => {
      return a[2] - b[2]
    })

    //since the array is now sorted properly, our best match will sit in the 0 position which can be easily extracted.    
    friends.push(req.body)

    let response = {
      name: scoreArray[0][0],
      photo: scoreArray[0][1]
    }
console.log(response);

    res.json(response);
    
  });
    

  
  app.get('/api/friends', (req, res) => {

  })
}