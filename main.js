class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
   get isCheckedOut() {
    return this._isCheckedOut;
  }
   get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newBoolean) {
    if (typeof newBoolean === 'boolean'){
      this._isCheckedOut = newBoolean;
    } else {
      console.log("Must assign boolean to isCheckedOut");
    }
  }

  //Methods
  //Calculate average
  getAverageRating() {
    if (this._ratings === "underfined" || this._ratings.length === 0){
      console.log("No rating inputted")
    } else {
      const initialValue = 0;
      const sumOfArray = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
      const averageRating = sumOfArray / (this._ratings.length)
      //console.log(this._ratings)
      //console.log(averageRating)
      return `Average rating: ${averageRating}`;
      }
  }
  toggleCheckOutStatus() {
    if(this._isCheckedOut === false) {
      return this._isCheckedOut = true;
      }else {
      return this._isCheckedOut = false;
      }
  }
  addRating(inputRating){
    this._ratings.push(inputRating);
    //console.log(`${inputRating} added to ${this._ratings} `)
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author = author;
  }
  get pages() {
    return this._pages = pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director = director;
  }
  get runTime() {
    return this._runTime = runTime;
  }
}

//Title, ischeckedout, rating
//get

const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson", 544 );

historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything);
console.log(historyOfEverything.getAverageRating());

const interstellar = new Movie("Interstellar", "Christopher Nolen", "3 hours")

interstellar.toggleCheckOutStatus();

interstellar.addRating(1);
interstellar.addRating(5);
interstellar.addRating(5);

console.log(interstellar)
console.log(interstellar.getAverageRating());


