var i;

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
            $el = $('<div class="col-sm-4 js-poem"></div>');
            $el.append('<h3>' + data[i].title + '</h3>');
            $el.append('<h6>' + data[i].date + '</h6>');
            $el.append('<p>' + data[i].body + '</p>');
            $row.append($el);
        }
    })
});