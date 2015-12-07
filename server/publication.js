/**
 * Get groups list
 */
Meteor.publish('groups',function(skip,name){
	if(name)
		return Groups.find({ title: {$regex: name, $options: "i"} },{
			sort: { points: -1 },
			skip: skip*PAGING_GROUPS,
			limit: PAGING_GROUPS 
		});
	else
		return Groups.find({},{
			sort: { points: -1 },
			skip: skip*PAGING_GROUPS,
			limit: PAGING_GROUPS 
		});
});

/**
 * Get universities list
 */
Meteor.publish('universities',function(skip,name){
	if(name)
		return Universities.find({ title: {$regex: name, $options: "i"} },{
			sort: { points: -1 },
			skip: skip*PAGING_UNIVERSITIES,
			limit: PAGING_UNIVERSITIES 
		});
	else 
		return Universities.find({},{
			sort: { points: -1 },
			skip: skip*PAGING_UNIVERSITIES,
			limit: PAGING_UNIVERSITIES 
		});
});

/**
 * Get users list
 */
Meteor.publish('users',function(skip,name){
	if(name)
		return Meteor.users.find({ username: {$regex: name, $options: "i"} },{
			sort: { points: -1 },
			skip: skip*PAGING_USERS,
			limit: PAGING_USERS 
		});
	else
		return Meteor.users.find({},{
			sort: { points: -1 },
			skip: skip*PAGING_USERS,
			limit: PAGING_USERS 
		});
});

/**
 * Get all votes of current user
 */
Meteor.publish('user_votes',function(uid){
	return Votes.find({
		user_id: uid
	});
});