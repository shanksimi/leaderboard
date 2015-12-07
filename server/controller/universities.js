// ====================================	========= ====================================//
// ====================================	 Methods  ====================================//
// ====================================	========= ====================================//
Meteor.methods({
	/**
	 * Method: count universities total documents
	 */
	countUniversity: function(dataAttributes){
		if(dataAttributes.search)
			return Universities.find({ title: {$regex: dataAttributes.search} }).count();
		else	
			return Universities.find().count();
	}
});

// ====================================	========= ====================================//
// ====================================	 Initial  ====================================//
// ====================================	========= ====================================//

/**
 * initial some data if universities is empty
 */
Meteor.startup(function() {
	if(Universities.find().count()==0){
		Universities.insert({
			title: 'Harvard University',
			logo: '/img/harvard.png',
			point: 0,
			numbers: 0,

		})
	}
});