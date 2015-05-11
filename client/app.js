var i, j;
var colors = ["#f44336", "#E91E63", "#9C27B0", "#9C27B0", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC348", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
var colorIndex = 1;

$(document).ready(function(){
    $.get('/writing', function(data){
        console.log(data);
        $.get('/writing/' + data.writing[0].file, function(data){
            console.log(data);
        });
    });

    // Makes rainbows out of the headers
    setInterval(function(){
        var color = colors[colorIndex];
        $('.rainbow').css({color:color});
        colorIndex++;
        if (colorIndex == colors.length) {
            colorIndex = 0;
        }
    }, 3000);
});