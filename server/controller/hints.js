// ====================================	========= ====================================//
// ====================================	 Methods  ====================================//
// ====================================	========= ====================================//
Meteor.methods({
	/**
	 * Method: get random hint
	 */
	getHint: function(){
		var count = Hints.find().count(), choice = new Array();
		while(count){
			choice.push(count);
			count--;
		}
		return Hints.find({},{skip:Random.choice(choice)-1, limit:1}).fetch();
	}
});

// ====================================	========= ====================================//
// ====================================	 Initial  ====================================//
// ====================================	========= ====================================//

/**
 * initial some data if groups is empty
 */
Meteor.startup(function() {
	if(Hints.find().count()==0){
		Hints.insert({
			image: '/img/social-create.png',
			text: 'Members can create their own societies and clubs when they reach a certain level. <br/> <i>The community pts is sum of all member\'s points.</i>'
		});
		Hints.insert({
			image: '/img/generic.svg',
			text: 'There is nothing you need to know.'
		})
	}
});

