$(document).ready(function () {
  const clubSuit = ['clubs'];
  const clubRanks = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
  clubSuit.forEach(function (suit) {
    clubRanks.forEach(function (ranks) {
    $('#myList').append('<li>' + ranks + ' of ' + suit + '</li>');
    });
  });
  const diamondSuit = ['diamonds'];
  const diamondRanks = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];

  diamondSuit.forEach(function (suit) {
    diamondRanks.forEach(function (ranks) {
    $('#myList').append('<li>' + ranks + ' of ' + suit + '</li>');
    });
  });

  const spadeSuit = ['spade'];
  const spadeRanks = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];

  spadeSuit.forEach(function (suit) {
    spadeRanks.forEach(function (ranks) {
    $('#myList').append('<li>' + ranks + ' of ' + suit + '</li>');
    });
  });

  const heartSuit = ['heart'];
  const heartRanks = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];

  heartSuit.forEach(function (suit) {
    heartRanks.forEach(function (ranks) {
    $('#myList').append('<li>' + ranks + ' of ' + suit + '</li>');
    });
  });
});
