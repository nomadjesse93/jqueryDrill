$(document).ready(function () {


    $("#btnsubmit").on("click", function () {
        alert("Clicked Submit Button")
    });

    $("#btnsubmit2").on("click", function(){
       
    alert( $("#text").val())

});

if ($("#text").val() == 0){
    $("#btnsubmit2").prop("disabled", true)
}   
if ($("#text").keyup(function(){
    $("#btnsubmit2").prop("disabled",false)
}));
  

});
