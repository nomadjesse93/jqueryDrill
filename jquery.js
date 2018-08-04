$(document).ready(function () {


    $("#btnsubmit").on("click", function () {
        alert("Clicked Submit Button")
    });

    $("#btnsubmit2").on("click", function(){
       
    alert( $("#text").val())

    });

    if ($("#text").val() == ''){
        $("#btnsubmit2").prop("disabled", true)
}else {
    $("#btnsubmit2").prop("enabled", true)
};
});