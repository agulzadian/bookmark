// listen fir form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e){
  //get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl,
  }

  /*
  //local storage test
  localStorage.setItem('test', 'Hello world');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  */

  //test if bookmarks is null
  if (localStorage.getItem('bookmarks') === null) {
    // init array
    var bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    // set to localStorage ===== localStorage takes strings so JSON.stringify is used to turn everything into a string
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // get bookmarks from localStorage ======= when retrieving from localStorage, the values have to be converted to JSON again through JSON.parse
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // add bookmark to array
    bookmarks.push(bookmark);
    // re-set it back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }

  //prevent form from submitting
  e.preventDefault();
}
