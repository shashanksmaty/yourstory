const moment = require('moment');

module.exports = {
	truncate: function(str, len){
		if(str.length > 0 && str.length > len) {
			let new_str = str + " ";
			new_str = str.substr(0, len);
			new_str = str.substr(0, new_str.lastIndexOf(" "));
			new_str = (new_str.length > 0) ? new_str : str.substr(0, len);
			return new_str + "...";
		}
		return str;
	},
	stripTags: function(input){
		return input.replace(/<(?:.|\n)*?>/gm, '');
	},
	formatDate: function(date, format){
		return moment(date).format(format);
	},
	optionSelected: function(value, options) {
		return options.fn(this).replace(new RegExp('value=\"' + value + '\"'), '$&selected="selected"').replace(new RegExp('>' + value + '</option>'), 'selected="selected"$&');
	}
}