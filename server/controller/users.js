// ====================================	========= ====================================//
// ====================================	 Methods  ====================================//
// ====================================	========= ====================================//
if(Meteor.isServer){
	Meteor.methods({
		/**
		 * Method: count users total documents
		 */
		countUser: function(dataAttributes){
			if(dataAttributes.search)
				return Meteor.users.find({ username: {$regex: dataAttributes.search} }).count();
			else	
				return Meteor.users.find().count();

		}
	});
}

// ====================================	========= ====================================//
// ====================================	 Initial  ====================================//
// ====================================	========= ====================================//

/**
 * initial some data if users is empty
 */
Meteor.startup(function() {
	if(Meteor.users.find().count()==0){
		Accounts.createUser({
			username: 'shaz123',
			avatar: '/img/avatar/shaz123.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'shaz123@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Darrell Skinner',
			avatar: '/img/avatar/darrell-skinner.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'darrell.skinner@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'ArdourWorx',
			avatar: '/img/avatar/ardourworx.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'ardourworxr@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'KT InfoSoft',
			avatar: '/img/avatar/ktinfosoft.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'ktinfosoft@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Sandeep Shrestha',
			avatar: '/img/avatar/sandeepshrestha.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'sandy1000@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Tina Xu',
			avatar: '/img/avatar/tinaxu.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'tinaxu@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'jhliuster',
			avatar: '/img/avatar/jhliuster.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'jhliuster@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Jitin Chadha',
			avatar: '/img/avatar/jitinchadha1984.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'jitinchadha1984@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'abitus',
			avatar: '/img/avatar/abitus.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'abitus@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Gagan Kumar',
			avatar: '/img/avatar/gautam07.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'gautam07@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'BlueBoxWeb',
			avatar: '/img/avatar/blueboxweb.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'blueboxweb@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Jasmin Jakupovic',
			avatar: '/img/avatar/simplicityq88.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'simplicityq88@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Jeo',
			avatar: '/img/avatar/jeo.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'jeo@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Kevin James',
			avatar: '/img/avatar/kevinjames.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'kevinjames@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'PremiumAcademics',
			avatar: '/img/avatar/premiumacademics.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'premiumacademics@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Neha Verma',
			avatar: '/img/avatar/neha14vr.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'neha14vr@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'simul201',
			avatar: '/img/avatar/simul201.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'simul201@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'cambridgeprog',
			avatar: '/img/avatar/cambridgeprog.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'cambridgeprog@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Emil Alicic',
			avatar: '/img/avatar/limesta.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'limesta@gmail.com',
		        verified: false
		    })
		});
		Accounts.createUser({
			username: 'Soheil',
			avatar: '/img/avatar/virmach.jpg',
			password: 'abc@123',
			emails: new Array({
		        address: 'virmach@gmail.com',
		        verified: false
		    })
		});
	}	
});