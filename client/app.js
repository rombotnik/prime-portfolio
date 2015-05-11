var i, storyHTML, storyData;
var colors = ["#f44336", "#E91E63", "#9C27B0", "#9C27B0", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC348", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
var colorIndex = 1;
var filesToGet = [];
var storyContents = [];

function setup() {
    // First, get the story template and writing JSON data
    // Then, once both are present, process the data
    $.get('views/story.html', function(template){
        storyHTML = template;
        if (storyData) {
            console.log('StoryHTML finished first');
            // Loop through storyData and add the filename to each for processing
            for (i=0; i<storyData.length; i++) {
                filesToGet.push(storyData[i].file);
            }
            // Call getWriting(), which will run recursively until filesToGet is empty
            getWriting();
        }
    });
    $.get('/writing', function(data){
        storyData = data.writing;
        if (storyHTML) {
            console.log('StoryData finished first');
            // Loop through storyData and add the filename to each for processing
            for (i=0; i<storyData.length; i++) {
                filesToGet.push(storyData[i].file);
            }
            // Call getWriting(), which will run recursively until filesToGet is empty
            getWriting();
        }
    });
}

function getWriting() {
    $.get('/writing/' + filesToGet.shift(), function(text){
        console.log('Getting writing');
        storyContents.push(text);
        if (filesToGet.length > 0) {
            getWriting();
        }
        else {
            console.log('Done getting writing');
            displayStories();
        }
    });
}

function displayStories() {
    var $main = $('main');
    for (i=0; i<storyData.length; i++) {
        var $story = $(storyHTML);
        $story.find('.story-title').text(storyData[i].title);
        $story.find('.story-date').text(storyData[i].date);
        $story.find('.story-description').text(storyData[i].description);
        $story.find('pre').append(storyContents[i]);
        $main.append($story);
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