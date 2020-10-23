// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var eating = $(this).data("eating");

        var eaten = {
            devoured: eating
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val(),
            devoured: 0
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created ne");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".delete-cat").on("click", function(event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function() {
    //             console.log("deleted cat", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});