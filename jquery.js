$(document).ready(function () {

    $("#btnsubmit").on("click", function () {
        alert("Clicked Submit Button")
    });

    let div = ($(document.createElement("div")));
    let ul = ($(document.createElement("ul")));
   
    function makelist(){
        
        
        let li =  ($(document.createElement("li")));
    $(li).addClass("words")
        
    let txt = ($(document.createTextNode($("#text").val())))
       
     
        $(txt).appendTo(li)
        $(li).appendTo(ul)
        $(ul).appendTo(div)
        $(div).appendTo("body");

        $(li).on("click", function () {
        
            $(li).css({"color": getRandomColor()})
            
        });
    
        $(li).on("dblclick", function(){
    $(li).remove()
        })
    
       
    }

    
    

    let color = $(["red","yellow","blue", "green", "orange"])
    
   
   
  function getRandomColor(){
    let randomColor = color[Math.floor(Math.random() * color.length)]  
    return randomColor;
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