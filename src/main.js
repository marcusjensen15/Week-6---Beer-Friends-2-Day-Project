import $ from 'jquery';
import './beerfriends.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Beer } from './../src/beerfriends.js';
import {ApiCall} from './../src/beerfriendsapi.js';

$(document).ready(function() {
  $('#beersearch').click(function() {
    const abvLevel = $('#abv').val();
    let beer = new Beer(abvLevel);

    const getElements = function(response) {
      $('.showBeerName').text(`${response.name}`);
      $('.showImage').append(`<img src="${response.image_url}">`);
    };

    (async () => {
      let apiCall = new ApiCall();
      let jsonifiedResponse = await apiCall.getApiData(beer.searchQuery);
      getElements(jsonifiedResponse[0]);
    })();

  });
});
