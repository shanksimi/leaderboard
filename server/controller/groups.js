// ====================================	========= ====================================//
// ====================================	 Methods  ====================================//
// ====================================	========= ====================================//
Meteor.methods({
	/**
	 * Method: count groups total documents
	 */
	countGroup: function(dataAttributes){
		if(dataAttributes.search)
			return Groups.find({ title: {$regex: dataAttributes.search} }).count();
		else	
			return Groups.find().count();
	}
});

// ====================================	========= ====================================//
// ====================================	 Initial  ====================================//
// ====================================	========= ====================================//

/**
 * initial some data if groups is empty
 */
Meteor.startup(function() {
	if(Groups.find().count()==0){
		Groups.insert({
			title: 'Harry Potter Society',
			points: 0,
			logo: '/img/harry-potter.png',
			leader: null,
		});
		Groups.insert({
			title: 'Hunger Game Society',
			points: 0,
			logo: '/img/hunger-game.png',
			leader: null,
		});
		Groups.insert({
			title: 'Divergent Society',
			points: 0,
			logo: '/img/divergent.png',
			leader: null,
		});
		Groups.insert({
			title: 'Book Club',
			points: 0,
			logo: '/img/book.png',
			leader: null,
		});
		Groups.insert({
			title: 'Man Utd Club',
			points: 0,
			logo: '/img/manutd.png',
			leader: null,
		});
		Groups.insert({
			title: 'Man City Club',
			points: 0,
			logo: '/img/mcfc.png',
			leader: null,
		});
	}	
});