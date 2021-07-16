const fs = require("fs")
const Handlebars = require("handlebars")
const DateFns = require("date-fns")

module.exports = { render }

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8")
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8")
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	})
}

Handlebars.registerHelper("nl2br", function(value) {
	return (value || "").replace(/\n/g, "</p><p>")
})

Handlebars.registerHelper("monthYear", function(dateString) {
	if (dateString) {
		const d = Date.parse(dateString)
		return DateFns.format(d, 'LLL uuuu')
	} else {
		return 'present'
	}
})
