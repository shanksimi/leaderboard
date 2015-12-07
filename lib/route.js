/**
 * Default config for route
 * Set Layout
 * Set Not Found page
 * Set Loading page
 */
Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'appNotFound',
	loadingTemplate: 'appLoading',
});

/**
 * Main page will display list of user
 */
Router.route(/^(\/|\/people)$/,{
	name: 'userList',
	waitOn: function() { 
		var page = this.params.query.page;
		Meteor.subscribe('users',(page?page-1:0),Session.get('userSearch'));
		Meteor.subscribe('user_votes',Meteor.userId());
	}
});

/**
 * Groups: Societies & Clubs
 */
Router.route('groups',{
	name: 'groupList',
	waitOn: function() { 
		var page = this.params.query.page;
		Meteor.subscribe('groups',(page?page-1:0),Session.get('groupSearch'));
		Meteor.subscribe('user_votes',Meteor.userId());
	}
});

/**
 * Universities
 */
Router.route('universities',{
	name: 'universityList',
	waitOn: function() { 
		var page = this.params.query.page;
		Meteor.subscribe('universities',(page?page-1:0),Session.get('universitySearch'));
		Meteor.subscribe('user_votes',Meteor.userId());
	}
});