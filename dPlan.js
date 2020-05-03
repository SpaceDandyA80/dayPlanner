$(document).ready(function () {

 
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var hourPlan = JSON.parse(localStorage.getItem("hourPlan")) || showBlock();
    console.log(hourPlan);
    //goes through an object
    for (var time in hourPlan) {

        var currentTime;

     console.log(time );
        var tr = $("<tr>");

        var tableTime = $("<td>")
            .addClass("hour")
            .text(time);

console.log(tableTime)

        var tableEvent = $("<td>")
            .addClass("textarea");

            console.log(tableEvent)


        if (moment(time, "ha").isSame(moment())){
            console.log(currentTime)
        currentTime = "present";
        } else if 
        (moment(time, "ha").isAfter(moment ())){
              currentTime = "future"
        } else if (moment(time, "ha").isBefore(moment() )){
            currentTime = "past";
        }
        var areaText = $( "<textarea>")
        .addClass("description")
         .addClass(currentTime)
        .attr("data-time", time)

        .val(hourPlan[time]);
        tableEvent.append(areaText);

console.log(areaText)
        var tableSub = $("<td>").addClass("saveBtn");

        var simCard = $("<i>").addClass("fas fa-sim-card");

        tableSub.append(simCard);
        tr.append(tableTime);
      tr.append(tableEvent);
           tr.append( tableSub);


        $("#planSchedule").append(tr);

    }
    function showBlock() {
        var planBlock = [];

        for (var i = 0; i < 24; i++) {
            planBlock[moment(i, "h").format("ha")] = "";
        }
        return planBlock;
    }

});