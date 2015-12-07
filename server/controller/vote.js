// ====================================	========= ====================================//
// ====================================	 Methods  ====================================//
// ====================================	========= ====================================//
/**
 * Method: like or dislike action
 * Get data from vote action to increase or decrease point of target
 * Then log it
 */
if(Meteor.isServer)
Meteor.methods({
	userVote: function(dataAttributes){
		if (! Meteor.user()) return {message: 'You are not logged in'};

		check(Meteor.userId(), String);		// id is valid
	    check(dataAttributes, {				// data is valid
	      targetId: String,
	      like: Boolean
	    });

	    /**
	     * Increase or decrease user point
	     * @param  point          amount of point
	     * @param  dataAttributes target
	     * @return success
	     */
	    var changePoint = function(point,dataAttributes){
			var target = Meteor.users.findOne({_id: dataAttributes.targetId});
			if(!target) return false;
			Meteor.users.update({_id: target._id,},{
				$inc: { points: point }
			});
			return true;
		}

		/**
		 * Check if this user has been voted before
		 */
	    var votedBefore = Votes.findOne({user_id: Meteor.userId(), target_id: dataAttributes.targetId},{sort: {createAt: -1}});
	    if (votedBefore){
	    	// This people has been liked or disliked
	    	if(dataAttributes.like){
	    		// Relike
	    		if(votedBefore.action=='dislike'){
	    			// Increase Point
			    	if(!changePoint(LIKE, dataAttributes)) return {message: 'Target did not exist!'};

	    			// Store action
			    	Votes.insert({
			    		user_id: Meteor.userId(),
			    		target_id: dataAttributes.targetId,
			    		action: 'like',
			    		createAt: Date.now()
			    	});
			    	return {message: false};
	    		}
	    		return {message: 'Bug, cannot relike this user'};
	    	} else {
	    		// Dislike last action
	    		if(votedBefore.action=='like'){
	    			// Decrease Point
			    	if(!changePoint(DISLIKE, dataAttributes)) return {message: 'Target did not exist!'};
			    	
	    			// Store action
			    	Votes.insert({
			    		user_id: Meteor.userId(),
			    		target_id: dataAttributes.targetId,
			    		action: 'dislike',
			    		createAt: Date.now()
			    	});
			    	return {message: false};
	    		}
	    		return {message: 'Bug, cannot dislike this user'};
	    	}
	    } else {
	    	// Increase Point
	    	if(!changePoint(LIKE, dataAttributes)) return {message: 'Target did not exist!'};
	    	// Store action
	    	Votes.insert({
	    		user_id: Meteor.userId(),
	    		target_id: dataAttributes.targetId,
	    		action: 'like',
	    		type: 'user',
	    		createAt: Date.now()
	    	});
	    	return {message: false};
	   	}
	}
});




