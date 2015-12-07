Template.layout.helpers({
	/**
	 * Change the search title for each route
	 */
	titleActive: function(){
		if(routerTypeFunc() == 1) return 'Societies & Clubs';
		else if(routerTypeFunc() == 2) return 'Universities';
		else return 'People';
	},

	/**
	 * Hightlight the navigation
	 */
	navActive: function(){
		if(routerTypeFunc() == 1) return {'groups':true};
		else if(routerTypeFunc() == 2) return {'universities':true};
		else return {'people':true};
	}
});

/**
 * Mobile events for hamburger                                                                                                                                                                            [description]
 */
Template.layout.events({
	'click #hamburger': function(e){
		e.preventDefault();
		if($('#side,#wrapper').hasClass('moveright'))
			$('#side,#wrapper').removeClass('moveright');
		else
			$('#side,#wrapper').addClass('moveright');

	}
});

/**
 * Get current router, we're working on
 */
function routerTypeFunc(){
	if(Router.current().route.getName() == 'groupList') return 1;
	else if(Router.current().route.getName() == 'universityList') return 2;
	else return 3;
}