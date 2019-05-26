console.log('this is working');

function submitSurvey() {
  console.log('you got here so far')
  event.preventDefault();
  var answers = [];
  var selections = $(".custom-select").val();
  answers.push(selections);

  var surveyAnswers = {
      name: $("#userName").val().trim(),
      photo: $("#email").val().trim(),
      scores: [answers]
  }

  $.get("/api/friends", function(data, status) {
      console.log(JSON.stringify(data));
      console.log(surveyAnswers.scores);
  }).then(function() {
      console.log('survey submitted successfully')
      location.reload();
  });
}

function whatever() {

}

whatever();