/**
 * Get total groups when page load
 */
Template.groupList.onCreated(function(){
	var temp = this;
	temp.total = new ReactiveVar();
	/**
	 * Recalculate if user searching                                   
	 */
	Tracker.autorun(function(){
		Meteor.call('countGroup',{search: Session.get('groupSearch')},function(err,rs){
			temp.total.set(rs);
		});
	});
});


// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//
Template.groupList.helpers({
	/**
	 * Get group list and set position number
	 */
	groups : function(){
		var temp =  Groups.find({}).fetch();
		for(var i = 1; i<= temp.length; i++){
			temp[i-1].pos = i;
		}
		return temp;
	},

	/**
	 * pagination
	 */
	paging: function(){
		return paginationFunc('groups', Template.instance().total.get());
	}

});

/**
 * Find the leader of each group
 */
Template.groupListItem.helpers({
	groupLeader: function(){
		var leader = Meteor.users.findOne({_id: this.leader});
		if(leader) return leader.services.google.name;
	}
});

