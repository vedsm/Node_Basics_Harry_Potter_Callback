var fs = require('fs');

var isMotherLilyPotter = function(name,callback){
	fs.readFile('./mothers/'+name+'.txt',function(err,data){
		if(err){
			callback(err);
		}
		else{
			console.log("mother's name was->",data.toString());
			var motherName=data.toString();
			if(motherName=='Lily Potter\n'){
				callback(null,true);
			}
			else{
				callback(null,false);
			}
		}
	})
};

var canKillVoldemort = function(name,callback){
	isMotherLilyPotter(name,callback);
}

canKillVoldemort("Voldemort",function(err,canKill){
	if(err){
		console.error("error in finding canKillVoldemort",err);
	}
	else{
		console.log("canKillVoldemort?",canKill);
	}
})