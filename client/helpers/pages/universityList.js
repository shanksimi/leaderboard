/**
 * Get total groups when page load
 */
Template.universityList.onCreated(function(){
	var temp = this;
	temp.total = new ReactiveVar();
	/**
	 * Recalculate if user searching                                   
	 */
	Tracker.autorun(function(){
		Meteor.call('countUniversity',{search: Session.get('universitySearch')},function(err,rs){
			temp.total.set(rs);
		});
	});
});


// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//
Template.universityList.helpers({
	/**
	 * Get university list and set position number
	 */
	universities : function(){
		var temp =  Universities.find({}).fetch();
		for(var i = 1; i<= temp.length; i++){
			temp[i-1].pos = i;
		}
		return temp;
	},

	/**
	 * pagination
	 */
	paging: function(){
		return paginationFunc('universities', Template.instance().total.get());
	}
});

Template.universityListItem.helpers({
});