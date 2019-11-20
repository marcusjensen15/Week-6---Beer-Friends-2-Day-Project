export class ApiCall {
  async getApiData(search){
  let response = await fetch(`https://api.punkapi.com/v2/beers?${search}`);
  let jsonifiedResponse = await response.json();
  return jsonifiedResponse;
  }
}
