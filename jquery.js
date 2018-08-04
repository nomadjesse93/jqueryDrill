$(document).ready(function () {


    $("#btnsubmit").on("click", function () {
        alert("Clicked Submit Button")
    });

    $("#btnsubmit2").on("click", function(){
        
        alert( $("#text").val())
    });

});