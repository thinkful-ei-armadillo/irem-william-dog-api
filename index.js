/*global $*/

'use strict';
function handlingDogMultple() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    let numberOfDogs = $('.userNumber').val();
    console.log(numberOfDogs);
    if (numberOfDogs >= 1 && numberOfDogs <= 50) {
      getDogImage(numberOfDogs)
        .then(response => response.json())
        .then(jsonData => dogImageDisplay(jsonData));
    } else {
      throw new Error ('Number must be between 1 and 50');
    }
  });
}

function getDogImage(number) {
  return fetch(`https://dog.ceo/api/breeds/image/random/${number}`);
}

function dogImageDisplay(response) {
  let imageElements= [];
  for (let i=0; i<response.message.length; i++){
    imageElements.push(`<img class="results-img" src="${response.message[i]}">`);
  }
  $('.js-display-images').html(imageElements);
}


function getRandomBreedImage() {
  return fetch('https://dog.ceo/api/breed/hound/images/random')
    .then(response => response.json())
    .then(responseJson => dogDisplayRandomBreed(responseJson))
    .catch(error => alert('ERROR. Try again!'));
}


function dogDisplayRandomBreed(responseJson) {
  let randomImage = `<img class="results-img" src="${responseJson.message}">`;
  $('.js-display-images').html(randomImage);
}

function handleRandomBreed() {
  $('form').on('click', '#randomizeButton', function(e) {
    e.preventDefault();
    getRandomBreedImage();
    dogDisplayRandomBreed();
  }
  );
}


function main() {
  handleRandomBreed();
  handlingDogMultple();
}


$(main);