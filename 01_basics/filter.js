//filter similar to for loop but actually return value 

const books = [
      {title :'book one', genre :'fiction', publish :1981, edition:2004},
      {title :'book two', genre :'non-fiction', publish :1992, edition:2008},
      {title :'book thre', genre :'history', publish :1999, edition:2007},
      {title :'book four', genre :'non-fiction', publish :1989, edition:2010},
      {title :'book five', genre :'science', publish :1981, edition:2014},
      {title :'book six', genre :'fiction', publish :2009, edition:2010},
      {title :'book seven', genre :'history', publish :1987, edition:2014},
      {title :'book eight', genre :'science', publish :1986, edition:2010},
      {title :'book nine', genre :'fiction', publish :2011, edition:1996},
      {title :'book ten', genre :'fiction', publish :1981, edition:2004},,
];

//const userBooks = books.filter((bk)=> bk.genre ==='history');
const userBooks = books.filter((bk)=> {return bk.publish >='1900' && bk.genre=='science'});

console.log(userBooks);