var i, j;

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
            $el.append('<h3>' + data[i].title + '</h3>');
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
            $el.append('<h3>' + data[j].title + '</h3>');
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
});