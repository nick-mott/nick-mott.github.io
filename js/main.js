/* $ is a shortcut for JQuery */
// or /* */ is a way of adding comments into Javascript
// one '=' is for assinging value to a variable, '==' is to compare value, '==='' is to compare value and type, 3= signs is preferable'
// != Not Equal value
// !== Not equal value or type
// && means AND
// || means OR
function askQuestions() {	

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	if (firstName.trim() ==='General' && lastName.trim()!=='Assembly') {
		console.log('Hey' + ' ' + fullName + ' ' + 'you are an awesome dude.');
	} else {
		console.log('Go away'+ ' ' + fullName.toUpperCase() + ' ' + 'you have been reported to the authorities');
	}

	var faveColour = prompt('What is your totes fave colour babez??').toLowerCase();
	if (faveColour === 'red' ||
		faveColour === 'orange' ||
		faveColour === 'black' ||
		faveColour === 'turqoise' ||
		faveColour === 'purple') {

		$('h1').css('color', faveColour);
	}
}

$("#infoToggler").click(function() {
    $(this).find('img').toggle();
});


$(function () { /* $(function () is always the JQuery shortcut for 'when the page loads*/
	
	$('img').on('click', askQuestions);

	$('h3').on('click',function(){	/* When the user clicks an h3*/

		$(this).next().slideToggle(100); 			/* Hide the next element */

	})

});