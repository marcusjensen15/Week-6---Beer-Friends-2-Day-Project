import $ from 'jquery';
import './beerfriends.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Beer } from './../src/beerfriends.js';
import {ApiCall} from './../src/beerfriendsapi.js';

$(document).ready(function() {
  $('#beers').submit(function(event) {
    event.preventDefault();
    const abvLevel = $('input[name=abv]:checked').val();
    let beer = new Beer(abvLevel);

    const getElements = function(response) {
      $('.showBeerName').text(`${response.name}`);
      $('.showBeerAbv').text(`${response.abv}`);
      $('.showBeerDescription').text(`${response.description}`);
      $('.showImage').append(`<img src="${response.image_url}">`);
    };

    (async () => {
      let apiCall = new ApiCall();
      let jsonifiedResponse = await apiCall.getApiData(beer.searchQuery);
      let randomNumber = (Math.floor(Math.random() * jsonifiedResponse.length));
      console.log(randomNumber);
      getElements(jsonifiedResponse[randomNumber]);
    })();

    document.getElementById("beers").reset();
  });
});
