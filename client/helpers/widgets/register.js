/**
 * Init error var on register
 */
Template.register.onCreated(function(){
	this.error = new ReactiveVar();
});

// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//
/**
 * Register Error helper 
 */
Template.register.helpers({
	error: function(){
		return Template.instance().error.get();
	}
});

// ====================================	========= ====================================//
// ====================================	  Events  ====================================//
// ====================================	========= ====================================//
Template.register.events({
	/**
	 * Submit register form
	 * Check data then create user
	 */
	'submit form': function(e,temp){
		e.preventDefault();
		var username = $(e.target).find('[name=registerUsername]').val();
		var email = $(e.target).find('[name=registerEmail]').val();
		var password = $(e.target).find('[name=registerPassword]').val();
		var repassword = $(e.target).find('[name=registerRePassword]').val();

		
		if(password != repassword){
			temp.error.set('Password does not match!');
			return;
		} else temp.error.set(null);
		if(!password || !repassword || password.length < 8 || repassword.length < 8) {
			temp.error.set('Password cannot be empty or less than 8 character!');
			return;
		} else temp.error.set(null);

		if(!username || !email) {
			temp.error.set('Username and Email cannot be empty!');
			return;
		} else temp.error.set(null);
		Accounts.createUser({
		    username: username,
		    emails: new Array({
		      address: email,
		      verified: false
		    }),
		    password: password
		});
		Meteor.loginWithPassword(email, password);
		congra('Congratulations You are Now Registered');
	},

	/**
	 * Change to login form
	 */
	'click #btn-login':function(){
		Session.set('isLogging',true);
	}
});