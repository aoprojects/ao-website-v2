// for building hover of nav icons that reveal the names of those pages, in md and lg

// if hover over ('.sidebar-nav-link-icon') 
// then
// show the next following ('.sidebar-nav-link-title')

$(document).ready(function() {
	$(".sidebar-nav-link-icon:hover");
		$(".sidebar-nav-link-title").addClass("visible");
})

