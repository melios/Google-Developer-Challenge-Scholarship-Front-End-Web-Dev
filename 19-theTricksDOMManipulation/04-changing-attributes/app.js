/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// // Start with this variable!
// // quick solution
var navList;
//find the first li element .nav-item
navList = $('.nav-item').first();
firstUrl = navList.children('a');
firstUrl.attr('href', "#1");

// // three variable, one list, one the first list element <li> and one for the link <a>
// var navlist, firstItem, link;

// //find the list .nav-list
// navlist = $('.nav-list');
// //find the first element
// firstItem = navlist.children().first();
// //find a in the first element
// link = firstItem.find('a');
// link.attr('href', "#1");
