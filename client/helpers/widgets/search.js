/**
 * Create tracker run when user change view
 * this tracker will clear search box value
 */
Template.search.onRendered(function(){
	var temp = this;
	Tracker.autorun(function(){
		// Tracker will track when router name change
		temp.routerName = new ReactiveVar(Router.current().route.getName());
		// Remove search session and clear the box if people change view
		
		if(temp.routerName.get() == 'groupList') 
			temp.$('input[type="text"]').val(Session.get('groupSearch'));
		else if(temp.routerName.get() == 'universityList') 
			temp.$('input[type="text"]').val(Session.get('universitySearch'));
		else if(temp.routerName.get() == 'userList') 
			temp.$('input[type="text"]').val(Session.get('userSearch'));
	});
});

// ====================================	========= ====================================//
// ====================================	 Events   ====================================//
// ====================================	========= ====================================//
/**
 * Search events trigger
 * @param  	{event)		 	
 * @set		Search session 
 */
var waitForType;
Template.search.events({
	'submit #search, keyup #search input[type="text"]': function(e,temp){
		e.preventDefault();

		// enter press will duplicate event
		if(e.keyCode == 13) return;		

		var value;
		if(e.target.id=='search') value = $(e.target).find('input[type="text"]').val();
		else value = e.target.value;
		
		// Do nothing if user keep typing
		if(waitForType != undefined) Meteor.clearTimeout(waitForType);

		// If value then wait few seconds before trigger
		if(value) {
			waitForType = Meteor.setTimeout(function(){
				/**
				 * Create session for searching
				 */
				if(temp.routerName.get() == 'groupList') Session.set('groupSearch',value);
				else if(temp.routerName.get() == 'universityList') Session.set('universitySearch',value);
				else if(temp.routerName.get() == 'userList') Session.set('userSearch',value);
			}, 1000);
		} else {
			/**
			 * Remove search session if user clear search box
			 */
			if(temp.routerName.get() == 'groupList') 
				Session.set('groupSearch',null);
			else if(temp.routerName.get() == 'universityList') 
				Session.set('universitySearch',null);
			else if(temp.routerName.get() == 'userList') 
				Session.set('userSearch',null);
		}
	}
});