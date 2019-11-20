export class Beer {
  constructor(abv) {
    this.abv = abv;
    this.searchQuery = this.findAbv();
  }
  findAbv() {
    let search = "";
    if (this.abv === "low") {
      search = "abv_lt=4&abv_gt=1";
    } else if (this.abv === "med") {
      search = "abv_lt=7&abv_gt=4";
    } else if (this.abv === "high") {
      search = "abv_lt=15&abv_gt=7";
    }
    return search;
  }
}
