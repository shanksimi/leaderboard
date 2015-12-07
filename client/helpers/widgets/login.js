/**
 * Login Initial
 * @return {String}image         	The image of hint will display
 * @return {String}text         	The content of hint will display
 */
Template.login.onCreated(function(){
	var temp = this;
	temp.image = new ReactiveVar();
	temp.text = new ReactiveVar();
	Meteor.call('getHint',function(err,rs){
		temp.image.set(rs[0].image);
		temp.text.set(rs[0].text);
	});
});

// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//
Template.login.helpers({
	/**
	 * Display hint
	 */
	hint: function(){
		return {
			image: Template.instance().image.get(), 
			text: Template.instance().text.get()
		};
	}
});