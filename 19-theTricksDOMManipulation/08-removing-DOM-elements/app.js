/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems, articleList;


// First method ~ using parrent
articleItems = $(".bold");
articleList = articleItems.parent();
//articleList.css( "background-color", "red" );
articleList.remove();

// // Second method ~ using siblings
// articleItems = $(".bold");
// articleList = articleItems.siblings();
// //articleList.css( "background-color", "red" );
// articleList.remove();
// articleItems.remove();

// // Thrid method
// var ul;
// articleItems = $('.article-item');
// ul = articleItems.find('ul');
// ul.remove();
