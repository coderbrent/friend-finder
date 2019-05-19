
function dynamicQuestions() {
    const qBank = ['question 1', 'question 2', 'question 3'];

    let newDiv = $("<div>");
    let formGroup = $(".form-group row");
    for(i=0; i > qBank.length; i++) {
        formGroup.append(newDiv);
    }
}