import { Beer } from './../src/beerfriends.js'

describe('Beer', () => {
  test("should take in abv and determine correct seach range.", () => {
    let beer = new Beer ("med");
    expect(beer.searchQuery).toEqual("abv_lt=7&abv_gt=4");
  });
});
