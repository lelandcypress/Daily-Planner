//Unlinked JS File intended for future refactoring//

// createa variable that holds the class of your input element (this)
var theDescription = $(this).siblings('.task');

var theTime = $(this).parent().attr("id");


localStorage.setItem(theTime,theDescription)

// grab the values - depending on the parent and sibilings
