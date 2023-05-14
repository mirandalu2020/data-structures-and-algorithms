'use strict';

const { Movies } = require('./movies');

// movies {
//   title: 'title',
//   year: 1111,
//   genres: ['horror', 'romance']
// }

function compareNumbers(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
}

function sortMovieByYear(arr) {
  let completed = false;
  let count=0;
  while (!completed) {
    let changed=false;
    for (let idx = 0; idx < arr.length - 1; idx++) {
      if (arr[idx]['year'] < arr[idx + 1]['year']) {
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        count ++;
        changed = true;
      }
      console.log('arr ', arr);
    }
    if(!changed) { completed = true;}
  }
  console.log('count ', count, arr);
  return arr;
}

// sortMovieByYear(Movies);

function sortMovieByTitle(arr) {
  //ignore leading A's and 'The's
  // ^(A|The)\s
  // "The Best Movie" -> "  Best Movie"
  const regex = /^(A|The)\s/gm;
  let titleMap = {};

  arr.map(movie => {
    let title = movie.title;
    if (movie['title'].match(regex)){
      title = movie.title.replace(regex, '');
      titleMap[title] = movie.title;
      movie['title']=title;
    }
  });
  console.log(titleMap);

  let completed = false;
  // let count=0;
  while (!completed) {
    let changed=false;
    for (let idx = 0; idx < arr.length - 1; idx++) {
      if ((arr[idx]['title']).localeCompare(arr[idx + 1]['title'])) {
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        // count ++;
        changed = true;
      }
    }
    if(!changed) { completed = true;}
    console.log('arr ', arr);
  }

  arr.map(movie => {
    let modiefiedTitle = movie['title'];
    movie['title'] = titleMap[modiefiedTitle];
  });
  console.log(arr);
  return arr;

  /*
   original_input = ["A Sunday in Chicago", "Fear!"]
   mapping = {
      "Sunday in Chicago": "A Suday in Chicago",
      "Fear!": "Fear!"
   }
   sanitized = ["Sunday in Chicago", "Fear!"]
   sorted = ["Fear!", "Sunday in Chciago"]
   result = [mapping.get(mov_name) for mov_name in sorted ]
   return result
   */
}
sortMovieByTitle(Movies);

module.exports = {
  sortYear: sortMovieByYear
};

