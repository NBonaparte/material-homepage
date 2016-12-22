/* Needs jQuery */
$(function() {
hierarchyload();
ink();
});

function hierarchyload() {
  var speed = 1500;
  var container =  $('.tile-container');
  container.each(function() {
    var elements = $(this).children();
    elements.each(function() {
      var elementOffset = $(this).offset();
      var offset = elementOffset.left*0.8 + elementOffset.top;
      var delay = parseFloat(offset/speed).toFixed(2);
      $(this)
        .css("transition-delay", delay+'s')
        .addClass('animated');
        setTimeout(function() {
		elements.css("transition-delay", "")
	}, delay+300);
    });
  });

};

function ink(){
	var ink, d, x, y;
	$(".tile").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }

    ink = $(this).find(".ink");
    ink.removeClass("animate");

    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }

    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;

    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
};
