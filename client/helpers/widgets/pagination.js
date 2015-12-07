// ====================================	========= ====================================//
// ====================================	  Helper  ====================================//
// ====================================	========= ====================================//
Template.paginationItem.helpers({
	// Do stuffs
});

// ====================================	========= ====================================//
// ====================================	Functions ====================================//
// ====================================	========= ====================================//

/**
 * pagination generator
 * @param {String} route			Route name for create url
 * @param {Interger} total 			Total records
 * @return 							List of page number and it's url
 */
paginationFunc = function(route, total){	
	var currentPage = (Router.current().params.query.page?parseInt(Router.current().params.query.page):1);		// Current page
	var i = 1, result = [],
		pNumber = Math.ceil(total/PAGING_GROUPS);		// Total page
	
	// First link
	if(currentPage > 1)
	result.push({
		label:'<img src="/img/previous.png" alt="previous" />', 
		link: setQuery(route),
		active: false
	});

	while( i <= pNumber ){
		if(i >= currentPage - 2 && i <= currentPage + 2 )
			result.push({ 
				label: i, 
				link: setQuery(route,i),
				active: (currentPage==i?true:false)
			});
		i++;
	}

	// Last link
	if(currentPage < i-1)
	result.push({ 
		label: '<img src="/img/next.png" alt="last" />', 
		link: setQuery(route,i-1),
		active: false
	});
	return result;
}

/**
 * Set page parameter
 * Just for better looking
 */
function setQuery(route,page){
	if(page) return Meteor.absoluteUrl(route)+'?page='+String(page);
	else return Meteor.absoluteUrl(route);
}

/**
 * Get param value from a url string
 * @param  {String} string 				Url string
 * @param  {String} name   				Name of parameter
 * @return {String} 					Value of parameter
 */
function getParameterByName(string, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(string);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}