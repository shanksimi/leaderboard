/**
 * Number format for high pts
 */
Template.registerHelper('numberFormatHelper',function(number){
	if(number==undefined) return 0;
	var str = String(number);
	var len = Math.ceil(str.length/3);
	var temp = new Array();
	while(len){
		temp[len-1] = str.slice(-3);
		str = str.slice(0,-3);
		len--;
	}
	return temp.join('.');
});

/**
 * User login check
 */
Template.registerHelper('isLogged',function(number){
	return (Meteor.user()?true:false);
});