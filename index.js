
var unslug = module.exports = function unslug(slugs) {

	slugs = slugs.replace(/_/g, '-');
	slugs = slugs.replace(/--/g, '-');

	var list = [];
	slugs.split('-').forEach(function (slug) {
		list.push(slug.substr(0, 1).toUpperCase() + slug.substr(1));
	})
	return list.join(' ');
}
