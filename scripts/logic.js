$(document).ready(function() {
	$('.menu-basic').on('click', function(self) {
		expand(self.target);
	})
	//getRandomWord();
});

function expand(target) {
	const jqueryObject = $(target);
	if(jqueryObject.hasClass('menu-expanded')){
		smallization(jqueryObject);
	}else if(jqueryObject.hasClass('menu-basic')){
		expansion(jqueryObject);
		const others = $('.menu-expanded').not(jqueryObject);
		smallization(others);
	}
}

function insertRandom(key,target) {
	$.getJSON('./sources/sentences.json', function(data) {
		var string = data[key].randomElement() + '.';
		target.html("");
		showText(target, string, 0, 50);
	})
}

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

function smallization(target) {
	target.addClass('menu-basic');
	target.removeClass('menu-expanded');
	//$(target).find('.insert').removeClass('menu-content-more-visible');
	$(target).find('.insertion').removeClass('insertion-active');

}

function expansion(target) {
	target.addClass('menu-expanded');
	target.removeClass('menu-basic');
	const ins = $(target).find('.insertion')
	ins.addClass('insertion-active');
	insertRandom(ins.data('key'),ins);

}

var showText = function (target, message, index, interval) { 
  	if (index < message.length) {
    	target.append(message[index++]);
    	setTimeout(function () { showText(target, message, index, interval); }, interval);
  	}

}