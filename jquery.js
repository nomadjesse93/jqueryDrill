$(document).ready(function () {

    $("#btnsubmit").on("click", function () {
        alert("Clicked Submit Button")
    });

    function makelist(){
        let div = ($(document.createElement("div")));
        
        let ul = ($(document.createElement("ul")));
    
       let li =  ($(document.createElement("li")));

       let txt = ($(document.createTextNode($("#text").val())))

       $(txt).appendTo(li)
       $(li).appendTo(ul)
        $(ul).appendTo(div)
        $(div).appendTo("body");
    }


    $("#btnsubmit2").on("click", function () {
        event.preventDefault()
        makelist()
        alert($("#text").val())
   
        

    });


    if ($("#text").val() == 0) {

        $("#btnsubmit2").prop("disabled", true)

    }
    if ($("#text").keyup(function () {

        $("#btnsubmit2").prop("disabled", false)
    }));



    
    







});