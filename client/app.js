var i, j;
var colors = ["#f44336", "#E91E63", "#9C27B0", "#9C27B0", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC348", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
var colorIndex = 1;

$(document).ready(function(){
    $.get('/poetry', function(data){
        var $poetry = $('.js-poetry');
        var $row;
        var $el;
        for (i=0; i<data.length; i++) {
            if (i % 3 == 0) {
                $row = $('<div class="row"></div>');
                $poetry.append($row);
            }
            $el = $('<div class="col-md-4 col-sm-6 poem"></div>');
            $el.append('<h3 class="rainbow">' + data[i].title + '</h3>');
            $el.append('<h6>' + data[i].date.toUpperCase() + '</h6>');
            $el.append('<p>' + data[i].body + '</p>');
            $row.append($el);
        }
    });
    $.get('/prose', function(data){
        var $proseFeatured = $('.js-prose-featured');
        var $prose = $('.js-prose');
        var $el;
        for (j=0; j<data.length; j++) {
            $el = $('<div class="col-sm-12 prose"></div>');
            $el.append('<h3 class="rainbow">' + data[j].title + '</h3>');
            $el.append('<h6>' + data[j].date.toUpperCase() + '</h6>');
            $el.append('<p>' + data[j].body + '</p>');
            var $row = $('<div class="row"></div>');
            $row.append($el);
            if (j == 0) {
                $proseFeatured.append($row);
            }
            else {
                $prose.append($row);
            }
        }
    });
    setInterval(function(){
        var color = colors[colorIndex % colors.length];
        $('.rainbow').css({color:color});
        colorIndex++;
    }, 3000);
});