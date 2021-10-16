var repoLink = 'https://github.com/IanClark-fullStack/muskytweets';
var pageLink1 = 'https://ianclark-fullstack.github.io/muskytweets/';

var repoLink2 = 'https://github.com/IanClark-fullStack/passwordGenerator';
var pageLink2 = 'https://ianclark-fullstack.github.io/passwordGenerator/';

var repoLink3 = 'https://github.com/IanClark-fullStack/workDayScheduler';
var pageLink3 = 'https://ianclark-fullstack.github.io/workDayScheduler/';

var repoArray =[repoLink, repoLink2, repoLink3];
var linkArray = [pageLink1, pageLink2, pageLink3];

var $customHover1 = $('#custom-hover1');
var $customHover2 = $('#custom-hover2');
var $customHover3 = $('#custom-hover3');
var $visibleInfo1 = $('#visibleInfo1');
var $visibleInfo2 = $('#visibleInfo2');
var $visibleInfo3 = $('#visibleInfo3');
var $hoverBox1 = $('#hover-box1');
var $hoverBox2 = $('#hover-box2');
var $hoverBox3 = $('#hover-box3');


var $customSection1 = $(('<h4 class="text-xl md:text-3xl mt-4 block">News / Stock Api</h4>' +
'<ul class="leading-loose">' +
    '<li id="custom-page">' + 
    '<a href="https://ianclark-fullstack.github.io/muskytweets/">See the Live Page</a>' + 
    '</li>' +
    '<li id="custom-repo">' + 
        '<a href="https://github.com/IanClark-fullStack/muskytweets">gitHub Repository</a>' +
    '</li>' +
'</ul>'
));
var $customSection2 = $(('<h4 class="text-xl md:text-3xl mt-4 block">Local Storage Todo</h4>' +
'<ul class="leading-loose">' +
    '<li id="custom-page">' + 
    '<a href="https://ianclark-fullstack.github.io/workDayScheduler/">See the Live Page</a>' + 
    '</li>' +
    '<li id="custom-repo">' + 
        '<a href="https://github.com/IanClark-fullStack/workDayScheduler/">gitHub Repository</a>' +
    '</li>' +
'</ul>'
));
var $customSection3 = $(('<h4 class="text-xl md:text-3xl mt-4 block">Password Generator</h4>' +
'<ul class="leading-loose">' +
    '<li id="custom-page">' + 
    '<a href="https://ianclark-fullstack.github.io/passwordGenerator/">See the Live Page</a>' + 
    '</li>' +
    '<li id="custom-repo">' + 
        '<a href="https://github.com/IanClark-fullStack/passwordGenerator">gitHub Repository</a>' +
    '</li>' +
'</ul>'
));



$customHover1.attr('class', 'w-1/2');
var $repoLink = $('<a>');
$repoLink.attr('href', 'https://ianclark-fullstack.github.io/muskytweets/');
$repoLink.text('check the live repo');
$customHover1.hover(
    function() {
        $repoLink.attr('class', 'block');
        $customHover1.append($repoLink);
    }, function() {
        $repoLink.attr('class', 'hidden');
    }
);


$visibleInfo1.hover(
    function() {
        $visibleInfo1.attr('class', 'bg-blue h-28 md:h-44 text-sm md:text-lg text-white');
        $customHover1.append($repoLink);
        $hoverBox1.attr('style', 'box-shadow: 8px 8px #ff0078; border: 2px solid #291aeb;');
        $visibleInfo1.append($customSection1);
    }, function() {
        $visibleInfo1.attr('class', 'bg-cover bg-center bg-muskyTweets-pattern bg-no-repeat h-28 md:h-44');
        $hoverBox1.attr('style', 'box-shadow: 8px 8px #291aeb; border: 2px solid #291aeb;');
        $visibleInfo1.empty($customSection1);
        $repoLink.attr('class', 'hidden');
    }

    
);
$visibleInfo2.hover(
    function() {
        $visibleInfo2.attr('class', 'bg-blue h-28 md:h-44 text-lg text-white');
        $customHover2.append($repoLink);
        $hoverBox2.attr('style', 'box-shadow: 8px 8px #ff0078; border: 2px solid #291aeb;');
        $visibleInfo2.append($customSection2);
    }, function() {
        $visibleInfo2.attr('class', 'bg-cover bg-center bg-todo-pattern bg-no-repeat h-28 md:h-44');
        $hoverBox2.attr('style', 'box-shadow: 8px 8px #291aeb; border: 2px solid #291aeb;');
        $visibleInfo2.empty($customSection2);
        $repoLink.attr('class', 'hidden');
    }

    
);
$visibleInfo3.hover(
    function() {
        $visibleInfo3.attr('class', 'bg-blue h-28 md:h-44  text-lg text-white');
        $customHover3.append($repoLink);
        $hoverBox3.attr('style', 'box-shadow: 8px 8px #ff0078; border: 2px solid #291aeb;');
        $visibleInfo3.append($customSection3);
    }, function() {
        $visibleInfo3.attr('class', 'bg-cover bg-center bg-password-Pattern  bg-no-repeat h-28 md:h-44');
        $hoverBox3.attr('style', 'box-shadow: 8px 8px #291aeb; border: 2px solid #291aeb;');
        $visibleInfo3.empty($customSection3);
        $repoLink.attr('class', 'hidden');
    }

    
);


