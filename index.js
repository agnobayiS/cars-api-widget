const makeTemplate = document.querySelector('.makeTemplate');
const carTemplate = document.querySelector('.carTemplate');
const colorTempplate = document.querySelector('.colorTemplate');
const colorTemp = Handlebars.compile(colorTempplate.innerText);
var car_Template = Handlebars.compile(carTemplate.innerHTML)
var makeTemp = Handlebars.compile(makeTemplate.innerHTML)

const cars = document.querySelector('.cars');
const colors = document.querySelector('.colors');
const makes = document.querySelector('.make');


document.addEventListener("DOMContentLoaded", function () {

    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars`)
        .then(result => {
            const car = result.data;
            // console.log(car);
            let html = car_Template({
                carslist: car
            });
            cars.innerHTML = html;

        });

    axios
        .get(`https://api-tutor.herokuapp.com/v1/colors`)
        .then(result => {
            const thecolor = result.data;
            // console.log(thecolor);
            let html = colorTemp({
                colorList: thecolor
            });
            colors.innerHTML = html;

        });


    axios
        .get(`https://api-tutor.herokuapp.com/v1/makes`)
        .then(result => {
            const make = result.data;
            console.log(make);
            let html = makeTemp({
                makeList: make
            });
            makes.innerHTML = html;
        });

})