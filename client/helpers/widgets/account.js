/**
 * Login Initial
 * @return {String}image         	The image of hint will display
 * @return {String}text         	The content of hint will display
 */
Template.account.onCreated(function(){
	var temp = this;
	temp.image = new ReactiveVar();
	temp.text = new ReactiveVar();
	temp.user = new ReactiveVar();

	// Get random hint on load
	Meteor.call('getHint',function(err,rs){
		temp.image.set(rs[0].image);
		temp.text.set(rs[0].text);
	});


	// Get user login in and track if they log out
	temp.autorun(function(){
		var userId = Meteor.userId();
		Meteor.call('getUser',{}, function(err,rs){ 
			temp.user.set(rs);
		});
	});

	// Show login form
	Session.set('isLogging',true);
});

/**
 * Render the point bar
 */
Template.profile.onRendered(function(){
	var self = this;
	var points = self.$('.bar').data('point');
	var total = self.$('.bar > a').width();
	var percent = Math.ceil(points/10);
	self.$('.bar > a > span').css('width',(total/percent)+'px');
});



// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//
Template.account.helpers({
	/**
	 * Display hint
	 */
	hint: function(){
		return {
			image: Template.instance().image.get(), 
			text: Template.instance().text.get()
		};
	},

	/**
	 * Show form register or login
	 */
	isLogging: function(){
		return Session.get('isLogging');
	},

	/**
	 * User info
	 */
	user: function(){
		return Template.instance().user.get();
	}
});

Template.account.events({
	/**
	 * Login or sign up with google plus account
	 */
	'click #login-buttons-google': function(){
		Meteor.loginWithGoogle({}, function(err){
            if (err) {
            	throwError("Google login failed");
            }
        });
	},
	/**
	 * Login or sign up with facebook account
	 */
	'click #login-buttons-facebook': function(){
		Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throwError("Facebook login failed");
            } else {

            }
        });
	},
	/**
	 * Logout all users
	 */
	'click #logout': function(){
		Meteor.logout();
	}
});



