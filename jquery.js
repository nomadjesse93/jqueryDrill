
$(document).ready(function () {

    $("#btnsubmit").on("click", function () {
        alert("Clicked Submit Button")
    });



    $("#btnsubmit2").on("click", function () {
        event.preventDefault()
        printtext();
        alert($("#text").val())
    });




    if ($("#text").val() == 0) {

        $("#btnsubmit2").prop("disabled", true)
        
    }
    if ($("#text").keyup(function () {

        $("#btnsubmit2").prop("disabled", false)
    }))






        function printtext() {

            let div = $(document.createElement("div")).appendTo(document.body);
            let h2 = $(document.createElement("h2"));
            $(h2).appendTo(div);
            let text = $(document.createTextNode($("#text").val()))
            $(text).appendTo(h2)

        };

});

