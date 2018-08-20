$(function () {

    $("#btnsubmit").on("click", function () {
        alert("Clicked Submit Button")
    });

    let $div = $("<div> </div>");
    let $ul = $("<ul> </ul>");

    function makelist() {


        let $li = ("<li> "+$("#text").val()+" </li>");




    
        $($ul).append($li);
        $($div).append($ul);
        $('body').append($div);

  
        $($div).children().children().on("click", function () {

            $(this).css({ "color": getRandomColor()});
    
        });
    
        $($div).children().children().on("dblclick", function () {
            $(this).remove()
        });
    
    

    };



    let color = $(["red", "yellow", "blue", "green", "orange"]);



    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)]
        return randomColor;
    };




    $("#btnsubmit2").on("click", function () {
        event.preventDefault()
        makelist()
        alert($("#text").val())



    });


    if ($("#text").val() == 0) {

        $("#btnsubmit2").prop("disabled", true)

    };
    if ($("#text").keyup(function () {

        $("#btnsubmit2").prop("disabled", false)
    }));












});