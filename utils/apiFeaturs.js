class APIFeatures {
  constructor(query, querystring) {
    this.query = query;
    this.querystring = querystring;
  }

  // Filtring query
  filter() {
    const queryObject = { ...this.querystring }; // Conver to objcts
    const excludeFields = ["page", "limit", "sort", "fields"];
    excludeFields.forEach((el) => delete queryObject[el]); // deleting objects

    // Advance filtering
    let querystring = JSON.stringify(queryObject);
    querystring = querystring.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => "$" + match
    );
    this.query.find(JSON.parse(querystring));
    return this;
  }

  // sorting
  sort() {
    if (this.querystring.sort) {
      const sortBy = this.querystring.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createAt");
    }
    return this;
  }

  // Selecting fields
  fields() {
    if (this.querystring.fields) {
      const selectFields = this.querystring.fields.split(",").join(" ");
      this.query = this.query.select(selectFields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }
  //Pagination
  pagenation() {
    const page = this.querystring.page * 1 || 1;
    const limit = this.querystring.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
