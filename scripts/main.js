var sloths = ['http://i.imgur.com/QLy8flr.jpg', 'http://i.imgur.com/7asAJqw.jpg', 'http://i.imgur.com/WHuyNUx.jpg', 'http://i.imgur.com/stZo0zl.png', 'http://i.imgur.com/bLJwgCN.jpg', 'http://i.imgur.com/7MgspTH.jpg', 'http://i.imgur.com/txjUeA1.jpg', 'http://i.imgur.com/cZ6GDFY.jpg', 'http://i.imgur.com/6oZxYI9.jpg', 'http://i.imgur.com/5OHdllr.jpg', 'http://i.imgur.com/M7q1qzi.png', 'http://i.imgur.com/FRrN5tX.jpg', 'http://i.imgur.com/og36bRg.jpg', 'http://i.imgur.com/uSg8rgi.png', 'http://i.imgur.com/MXZ9mFr.jpg', 'http://i.imgur.com/aztmlwT.jpg', 'http://i.imgur.com/lIG1itA.png', 'http://i.imgur.com/RRZyJYF.jpg', 'http://i.imgur.com/VGxvMur.png', 'http://i.imgur.com/egJKThb.jpg', 'http://i.imgur.com/imABby8.jpg', 'http://i.imgur.com/ySbRRiA.jpg', 'http://i.imgur.com/HJ5ixut.jpg', 'http://i.imgur.com/JoKTB9s.jpg', 'http://i.imgur.com/tm5XmVS.jpg', 'http://i.imgur.com/1iiahIU.jpg', 'http://i.imgur.com/KiXxNhN.jpg', 'http://i.imgur.com/QLXBeOX.jpg', 'http://i.imgur.com/epfD9ps.png', 'http://i.imgur.com/C975XnF.jpg', 'http://i.imgur.com/7rz0Bll.jpg', 'http://i.imgur.com/Mtl0pTt.jpg', 'http://i.imgur.com/tBxfiOo.gif', 'http://i.imgur.com/aiXPItB.gif', 'http://i.imgur.com/WKIYCXY.gif', 'http://i.imgur.com/PwOFcmM.gif', 'http://i.imgur.com/gGgVGEn.gif', 'http://i.imgur.com/NAJYZRJ.gif', 'http://i.imgur.com/QppoTRe.gif', 'http://i.imgur.com/DWoZS2y.gif', 'http://i.imgur.com/eafrx63.gif'];
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var today = weekday[d.getDay()];

console.log(today);

//Send a random sloth image to the group
module.exports = function(bot){
	bot.hear(/sloth me/i, function(msg) {
    	return msg.send(msg.random(sloths));
  	});
//Respond with a random private sloth ;)
	bot.respond(/sloth me/i, function(res) {
  	return res.reply(msg.random(sloths));
	});
	
	bot.hear(/Hello!/i, function(res) {
		return res.send('Hi there sir!');
	});
//Future ideas__Fetch weather, ex. "Whats the weather in Boston"
//"It's sunny and 91 degrees in Boston today, tuesday the 19th"
	bot.hear(/What's the weather?/i, function(res) {
		return res.send("It's hot out today in Boston");
	});
//Fave color
	bot.hear(/What's your favorite color?/i, function(res) {
		return res.send("Aquamarine my guy");
	});
//Creation
	bot.respond(/When were you created?/i, function(res) {
		return res.send("Hmm, according to my records, it seems I've been around since July 2016! ¯\_(ツ)_/¯");
	});	
//Multiplication function
	bot.respond(/multiply (.) and (.)/i, function(msg) {
	var a;
	var b;
	a = parseInt(msg.match[1]);
	b = parseInt(msg.match[2]);
	c = a * b

	return msg.reply(a + ' times ' + b + ' = ' + c);
	});
//DM response
	bot.respond(/Hey bot, how ya doing?/i, function(res) {
  	return res.reply("I'm dandy thanks!");
});

	var HtmlParser, Select, animalMe, randimalMe;

Select = require("soupselect").select;

HtmlParser = require("htmlparser");

module.exports = function(robot) {
  return robot.respond(/animal me/i, function(msg) {
    return randimalMe(msg, function(url) {
      return msg.send(url);
    });
  });
};

randimalMe = function(msg, cb) {
  return msg.http("http://animalsbeingdicks.com/random").get()(function(err, res, body) {
    console.log(res.headers.location);
    return animalMe(msg, res.headers.location, function(location) {
      return cb(location);
    });
  });
};

animalMe = function(msg, location, cb) {
  return msg.http(location).get()(function(err, res, body) {
    var handler, img, parser;
    handler = new HtmlParser.DefaultHandler();
    parser = new HtmlParser.Parser(handler);
    parser.parseComplete(body);
    img = Select(handler.dom, "#content .post .entry img");
    console.log(img);
    return cb(img[0].attribs.src);
  });
};

//Ask if we have class and bot will respond!
	bot.hear(/Do we have class today?/i, function(res) {
		if (today == 'Monday') {
			return res.send('Yes! because today is ' + today);
		} else if (today == 'Wednesday') {
			return res.send('Yes! because today is ' + today);
		} else {
			return res.send('No :,( because today is ' + today);
		};
	})

};



