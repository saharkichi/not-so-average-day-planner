$( document ).ready(function() {
    //Display current date
  var a= moment().format('dddd MMMM Do YYYY, h:mm');
    $("#display-date").text(a)
    var row = ""
    //loop to include all hours
      for (var i= 9 ; i<=18; i++){

        // create rows
        row = $(`<div class="row">`)
        col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`)
        col2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
        col3 = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
        row.append(col1)
        row.append(col2)
        row.append(col3)
        $("#display-planner").append(row)
        getlocalStorage(i)
      }
     $("button.btn.btn-success").click(function(e){
     var id = $(this).data("id")
     var inputText = $(this).parent().siblings().find("input").val()
     localStorage.setItem(id,inputText)
     })
    // AM to PM
     function displayAmorPm(hour){
       var b=""
       if(hour<=12){
         b= "AM"
       }else{
         b="PM"
       }
       hour = hour % 12
       hour = hour ? hour : 12
       return hour + " " + b
     }
    });
  
     function getlocalStorage(hour){
       let inputval = localStorage.getItem(hour)
       if(true){
        //  $("input").data(`input${hour}`)
        var text= $(`input#inputText${hour}`).val(inputval)
        console.log(text)
       }
     }
     function updateColor(){
       var hour = new Date().getHours();
       for (var i= 9 ; i<=18; i++){
         console.log(hour,i)
         if(hour==i ) {
          $(`#inputText${i}`).css("background","red")
         }else  if(hour<i ){
          
           $(`#inputText${i}`).css("background","lightblue")
  
         }
       }
     }
     setInterval(function(){
       updateColor()
     },1000)