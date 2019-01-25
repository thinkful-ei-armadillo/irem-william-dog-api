/*global $*/

'use strict';
$('form').on('submit', function(e) {
  e.preventDefault();
  let numberOfDogs = $('.userNumber').val();
  getDogImage(numberOfDogs)
    .then(response => response.json())
    .then(jsonData => dogImageDisplay(jsonData));
});

function getDogImage(number) {
  return fetch(`https://dog.ceo/api/breeds/image/random/${number}`);
}

function dogImageDisplay(response){
  let imageElements= [];
  for(let i=0; i<response.message.length; i++){
    imageElements.push(`<img class="results-img" src="${response.message[i]}">`);
  }
  $('.js-display-images').html(imageElements);
}
