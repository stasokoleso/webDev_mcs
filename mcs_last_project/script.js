class Person {
  constructor(name) {
    this.name = name;
    this.happiness = 0
  }
  set plusHappiness() {
    return this.happiness++;
  }
  hasCat() {
    this.plusHappiness()
  }
  hasRest() {
    this.plusHappiness()
  }
  hasMoney() {
    this.plusHappiness()
  }
  isSunny() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=d3dd038f6d1e063cb7899182d8e507e2`, false);
	  xhr.send();
    let DATA = JSON.parse(xhr.responseText);
    if (Math.round(DATA.main.temp - 273) > 15) {
      this.plusHappiness();
    } else {
      return this.happiness;
    }
  }
};
let hasCat = document.querySelector('#hasCat').value;

const submit = document.querySelector('#submitButton');

submit.onclick = function (e) {
  e.preventDefault();
  let personName = document.querySelector('#personName').value;
  let hasCat = document.querySelector('#hasCat').value;
  let hasRest = document.querySelector('#hasRest').value;
  let hasMoney = document.querySelector('#hasMoney').value;

  let user = new Person(personName);
  if (hasCat === 'Да') {
    user.plusHappiness()
  }
}