const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilms = function () {
  const result = this.films.map(film => film.title);
  return result;
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find(film => film.title === title);
  return result;
};

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre);
  return result;
};


Cinema.prototype.checkByYear = function (year) {
    const result = this.films.some(film => film.year === year);
    return result;
};

Cinema.prototype.lengthLimit = function (length) {
  const result = this.films.every(film => film.length >= length )
  return result;
};

Cinema.prototype.totalLength = function () {
  const result = this.films.reduce((accumulator, currentValue) => {
    return  accumulator + currentValue.length;
  },0);
  return result;
};

Cinema.prototype.filterByYear = function (year) {
  const result = this.films.filter(film => film.year === year );
  return result;
};

Cinema.prototype.filterBy = function (property, value) {
  const result = this.films.filter(film => film[property] === value );
  return result;
};



module.exports = Cinema;
