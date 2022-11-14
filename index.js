const makeTemplate = document.querySelector('.makeTemplate');
const makeFilter = document.querySelector('.makeTemplateFilter');
const colorFilter = document.querySelector('.colorTemplateFilter');
const carTemplate = document.querySelector('.carTemplate');
const colorTempplate = document.querySelector('.colorTemplate');
const colorTemp = Handlebars.compile(colorTempplate.innerText);
const makeFiltering = Handlebars.compile(makeFilter.innerText);
const colorFiltering = Handlebars.compile(colorFilter.innerText);
var car_Template = Handlebars.compile(carTemplate.innerHTML)
var makeTemp = Handlebars.compile(makeTemplate.innerHTML)

const cars = document.querySelector('.cars');
const colors = document.querySelector('.colors');
const makes = document.querySelector('.make');
const desplay = document.querySelector('.desplay');
const desplay2 = document.querySelector('.desplay2');
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const defarentcars = document.querySelector('.defarentcars')
const defarentcars2 = document.querySelector('.defarentcars2')


document.addEventListener("DOMContentLoaded", function () {

    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars`)
        .then(result => {
            const car = result.data;
        
            let html = car_Template({
                carslist: car
            });
            cars.innerHTML = html;

        });

    axios
        .get(`https://api-tutor.herokuapp.com/v1/colors`)
        .then(result => {
            const thecolor = result.data;
        
            let html = colorTemp({
                colorList: thecolor
            });
            colors.innerHTML = html;

        });


    axios
        .get(`https://api-tutor.herokuapp.com/v1/makes`)
        .then(result => {
            const make = result.data;
            
            let html = makeTemp({
                makeList: make
            });
            makes.innerHTML = html;
        });
})

btn.addEventListener('click', function () {

    if (defarentcars.value === "Ford") {
        console.log(cars.value);
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/Ford`)
            .then(result => {
                const difrentmake = result.data;
                console.log(difrentmake);
                let html = makeFiltering({
                    makefilter: difrentmake
                });
                desplay.innerHTML = html;

            });
    } else if (defarentcars.value === "Nissan") {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/Nissan`)
            .then(result => {
                const difrentmake = result.data;
                console.log(difrentmake);
                let html = makeFiltering({
                    makefilter: difrentmake
                });
                desplay.innerHTML = html;

            });
    } else if (defarentcars.value === "Toyota") {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/Toyota`)
            .then(result => {
                const difrentmake = result.data;
                console.log(difrentmake);
                let html = makeFiltering({
                    makefilter: difrentmake
                });
                desplay.innerHTML = html;

            });
    } else if (defarentcars.value === "Volkswagen") {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/Volkswagen`)
            .then(result => {
                const difrentmake = result.data;
                console.log(difrentmake);
                let html = makeFiltering({
                    makefilter: difrentmake
                });
                desplay.innerHTML = html;

            });

    }
})
btn2.addEventListener('click', function () {

    if (defarentcars2.value === "Blue") {
        
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/Ford`)
            .then(result => {
                const difrentcolor = result.data;
            
                let html = colorFiltering({
                    colorfilter: difrentcolor
                });
                desplay2.innerHTML = html;

            });
    } else if (defarentcars2.value === "Red") {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/Red`)
            .then(result => {
                const difrentcolor = result.data;
                
                let html = colorFiltering({
                    colorfilter: difrentcolor
                });
                desplay2.innerHTML = html;

            });
    } else if (defarentcars2.value === "Orange") {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/Orange`)
            .then(result => {
                const difrentcolor = result.data;
            
                let html = colorFiltering({
                    colorfilter: difrentcolor
                });
                desplay2.innerHTML = html;

            });
    } else if (defarentcars2.value === "White") {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/White`)
            .then(result => {
                const difrentcolor = result.data;
            
                let html = colorFiltering({
                    colorfilter: difrentcolor
                });
                desplay2.innerHTML = html;

            });

    } else if (defarentcars2.value === "Grey") {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/Grey`)
            .then(result => {
                const difrentcolor = result.data;
                console.log(difrentcolor);
                let html = colorFiltering({
                    colorfilter: difrentcolor
                });
                desplay2.innerHTML = html;

            });
    }
})
