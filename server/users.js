/**
 * Set default point for each login user
 * @return the user after modify
 */
Accounts.onCreateUser(function(opt,user){
	user.points = 100;
  if(user.services.google){
    user.avatar = user.services.google.picture;
    user.username = user.services.google.name;
    user.emails = new Array({
      address: user.services.google.email,
      verified: true
    });
  } else if(user.services.facebook){
    user.avatar = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    user.username = user.services.facebook.name;
    user.emails = new Array({
      address: user.services.facebook.email,
      verified: true
    });
  } else {
    if(opt.avatar && opt.avatar != undefined)
      user.avatar = opt.avatar;
    else user.avatar = '/img/photo.jpg';

    user.emails = opt.emails;
  }
	return user;
});


// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "1101128356606820",
      loginStyle: "popup",
      secret: "0094a143dc5186e86c474714dad5acde"
    }
  }
);

// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "766238977558-2cnp4i9tl307v0ss63f3jearv1qlus25.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "mGYzJ95WyqKoxA5ZAMjKKYwX"
    }
  }
);