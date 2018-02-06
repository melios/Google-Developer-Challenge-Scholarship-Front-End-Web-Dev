/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

// Simple Solution
// h1 = articleList.siblings();
// kids = articleList.children();
// parents = articleList.parents();

// Advnaced solution

h1 = articleList.siblings('h1');
// Unlike most of the tree traversal methods, the selector expression is required in a call to .find().
// If we need to retrieve all of the descendant elements, we can pass in
// the universal selector '*' to accomplish this.
kids = articleList.find('*');
// select div otherwise it will select all the parents including body
parents = articleList.parents('div');

console.log(h1, kids, parents);
