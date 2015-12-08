/**
 * Init error var on login form
 */
Template.login.onCreated(function(){
	this.error = new ReactiveVar();
});

// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//
Template.login.helpers({
	/**
	 * Signin Error helper 
	 */
	error: function(){
		return Template.instance().error.get();
	}
});

// ====================================	========= ====================================//
// ====================================	  Events  ====================================//
// ====================================	========= ====================================//
Template.login.events({
	/**
	 * Submit login form
	 */
	'submit form': function(e,temp){
		e.preventDefault();
		var email = $(e.target).find('[name=loginEmail]').val();
		var password = $(e.target).find('[name=loginPassword]').val();

		if(!password){
			temp.error.set('Password cannot be empty!');
			return;
		}
		if(!email){
			temp.error.set('Email cannot be empty!');
			return;
		}

		Meteor.loginWithPassword(email, password);
		congra('Login successfully!');
	},
	
	/**
	 * Change to register form
	 */
	'click #btn-register':function(){
		Session.set('isLogging',false);
	}
});