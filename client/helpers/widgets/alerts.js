Template.alert.rendered = function(){
	var id = this.data._id;
	Meteor.setTimeout(function() {
		Alerts.remove(id);
	}, 3000);
}

// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//

Template.alerts.helpers({
	/**
	 * Get Alert if exists
	 */
	mess: function(){
		return Alerts.find();
	}
});


