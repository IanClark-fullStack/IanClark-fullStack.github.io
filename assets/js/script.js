var $customHover1 = $('#custom-hover1');
var $visibleInfo1 = $('#visibleInfo1');
var $hoverBox1 = $('#hover-box1');
var $customSection = $(('<h4 class="text-3xl mt-4 block">News / Stock Api</h4>' +
'<ul class="leading-loose">' +
    '<li id="custom-link1">' +
        '<a href="https://ianclark-fullstack.github.io/passwordGenerator/">See the Live Repo</a>' +
    '</li>' +
    '<li id="custom-link1">' + 
        '<a href="https://ianclark-fullstack.github.io/passwordGenerator/">See the Live Repo</a>' +
    '</li>' +
'</ul>'
));
$customHover1.attr('class', 'w-3-1/2');
var $repoLink1 = $('<a>');
$repoLink1.attr('href', 'https://ianclark-fullstack.github.io/muskytweets/');
$repoLink1.text('check the live repo');
$customHover1.hover(
    function() {
        $repoLink1.attr('class', 'block');
        $customHover1.append($repoLink1);
    }, function() {
        $repoLink1.attr('class', 'hidden');
    }
);
$visibleInfo1.hover(
    function() {
        $visibleInfo1.attr('class', 'bg-blue h-44 text-lg text-white');
        $customHover1.append($repoLink1);
        $hoverBox1.attr('style', 'box-shadow: 8px 8px #ff0078; border: 2px solid #291aeb;');
        $visibleInfo1.append($customSection);
    }, function() {
        $visibleInfo1.attr('class', 'bg-contain bg-center bg-muskyTweets-pattern h-44');
        $visibleInfo1.empty($customSection);
        $repoLink1.attr('class', 'hidden');
    }
);