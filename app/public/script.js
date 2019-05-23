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

  

  //iterate through the values selected and push them to the answered array.
  // let selection = $(".custom-select").val();

  // for(const index of answered) {
  //     answered.push(index);

  //     $.ajax("/data/friends.json", function(err, results) {

  //     })
  // }

$(".custom-select").on('click', function() {

})