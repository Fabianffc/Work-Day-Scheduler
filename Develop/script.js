var currentDay = moment().format("dddd, MMMM Do")

$("#currentDay").text(currentDay)

var currentHour = moment().hour()


var militaryTime =  [9,10,11,12,13,14,15,16,17]

for (let i = 0; i < militaryTime.length; i++) {
   if (currentHour>militaryTime[i]){
       $("#"+i).addClass("past")
   }
   else if (currentHour<militaryTime[i]){
       $("#"+i).addClass("future")
   }
   else {
      $("#"+i).addClass("present")
   }
    
}