import $ from 'jquery';
import './beerfriends.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Beer } from './../src/beerfriends.js';
// import {ApiCall} from './../src/beerfriendsapi.js';

$(document).ready(function() {
  $('#beersearch').click(function() {
    const abvLevel = $('#abv').val();
    let beer = new Beer(abvLevel);

    const getElements = function(response) {
      $('.showBeerName').text(`${response.name}`);
      $('.showImage').append(`<img src="${response.image_url}">`);
    };

    (async () => {
  // The API call is business logic.
  let response = await fetch(`https://api.punkapi.com/v2/beers?${beer.searchQuery}`);
  let jsonifiedResponse = await response.json();
  // The getElements method is UI logic so it will need to be separated from the business logic.

  getElements(jsonifiedResponse[0]);
})();

  });
});
