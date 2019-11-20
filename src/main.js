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
    let apiCall = new ApiCall;
    let response = apiCall.getApiData(beer.findAbv());

    //works till here

    console.log(typeof response, response);

    const getElements = function(response) {
      $('.showBeerName').text(`${response.name}`);
      $('.showImage').append(`<img src="${response.image_url}"`);
    };

      getElements(response);
      // setTimeout(function(){ getElements(response); }, 3000);

  });
});
