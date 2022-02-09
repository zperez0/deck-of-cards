$(document).ready(function() {
  
  const clubSuit = ['club'];
  const clubRanks = ['ace','2','3','4','5','6','7','8','9','10', 'jack','queen', 'king'];

  clubSuit.forEach(function(suit) {
    clubRanks.forEach(function(ranks) {
    $('#myList').append('<li>' + ranks + ' of ' + suit + '</li>');
    });

  const 
  });
});


// create an empty array and push the other two arrays. need to slice or split?

// use concat(clubSuit) & push?

// use index to find positon?

// clubRanks.push(club);
//     console.log(clubRanks);

// clubSuit.forEach(function(club) {
//   emptyArray.push(clubRanks.concat(club));
//   console.log(emptyArray);

