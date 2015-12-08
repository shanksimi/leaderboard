/**
 * Get total groups when page load
 */
Template.userList.onCreated(function(){
	var temp = this;
	temp.total = new ReactiveVar();
	/**
	 * Recalculate if user searching                                   
	 */
	Tracker.autorun(function(){
		Meteor.call('countUser',{search: Session.get('userSearch')},function(err,rs){
			temp.total.set(rs);
		});
	});
	
});


// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//

Template.userList.helpers({
	/**
	 * List all user logged
	 */
	Users : function(){
		var temp =  Meteor.users.find({},{sort: {points:'desc'}}).fetch();
		for(var i = 1; i<= temp.length; i++){
			temp[i-1].pos = i;
		}
		return temp;
	},

	/**
	 * pagination
	 */
	paging: function(){
		return paginationFunc('people', Template.instance().total.get());
	}
});


Template.userListItem.helpers({
	/**
	 * Get main email address
	 */
	email:function(){
		return this.emails[0].address;
	},

	/**
	 * Check if user voted this before
	 */
	action: function(){
		var target = this._id;
		var action = Votes.find({target_id:target});
		var like = 0, dislike = 0;
		action.forEach(function(act){
			if(act.action=='like') like++;
			if(act.action=='dislike') dislike++;
		});

		if(like - dislike > 0) return 'dislike'; else return 'like';
	}
});


// ====================================	========= ====================================//
// ====================================	  Events  ====================================//
// ====================================	========= ====================================//
Template.userListItem.events({
	/**
	 * Like event handle
	 */
	'click .like': function(event){
		Meteor.call('userVote', {like:true, targetId:this._id}, function(error,result){
			if(error) throwError(error.message);
			if(result.message)
				throwError(result.message);
		})
	},
	/**
	 * Dislike event handle
	 */
	'click .dislike': function(event){
		Meteor.call('userVote', {like:false, targetId:this._id}, function(error,result){
			if(error) throwError(error.message);
			if(result.message)
				throwError(result.message);
		})
	}
});