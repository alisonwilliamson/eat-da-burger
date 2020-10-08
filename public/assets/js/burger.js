$(function() {
  $(".eatburger").on("click", function(event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("Burger devoured");
        // Reload the page to get the updated list
        location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var addedburger = {
      burger_name: $("#addedburger")
        .val()
        .trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: addedburger
    }).then(
      function() {
        console.log("Added new burger");
        // Reload the page to get the updated list
        location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(
      // Reload the page to get the updated list
      location.reload());
  });
});
