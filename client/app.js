var i, j, storyHTML, storyData;
var colors = ["#f44336", "#E91E63", "#9C27B0", "#9C27B0", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC348", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
var colorIndex = 1;

function setup() {
    // First, get the story template and writing JSON data
    // Then, once both are present, call displayStories()
    $.get('views/story.html', function(template){
        storyHTML = template;
        if (storyData) {
            displayStories();
        }
    });
    $.get('/writing', function(data){
        storyData = data.writing;
        if (storyHTML) {
            displayStories();
        }
    });
}

function displayStories() {
    for (i=0; i<storyData.length; i++) {
        $.get('/writing/' + storyData[i].file, function(text){
            console.log(text);
        });
    }
}

$(document).ready(function(){

    setup();

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