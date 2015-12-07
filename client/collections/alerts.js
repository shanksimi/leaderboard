Alerts = new Mongo.Collection(null);
throwError = function(message){
	Alerts.insert({message: message, type: 'danger'});
}
log = function(message){
	Alerts.insert({message: message, type: 'log'});
}
congra = function(message){
	Alerts.insert({message: message, type: 'success'});
}