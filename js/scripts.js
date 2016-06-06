$(document).ready(function() {

  $("#submit").click(function(event) {
    var groceries = ["shoppingItem1", "shoppingItem2", "shoppingItem3", "shoppingItem4", "shoppingItem5"];
    alert("hello");
    var groceriesArray = [];

    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      userInput = userInput.toUpperCase();
      groceriesArray.push(userInput);


    });
    var groceriesSort = groceriesArray.sort();
    alert(groceriesSort);
    groceriesSort.forEach(function(grocery){
      $(".groceryList").append("<li>" + grocery +"</li>");
    });

    $(".blanks").hide();



    event.preventDefault();
  });
});
