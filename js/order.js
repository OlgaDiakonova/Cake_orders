// JavaScript source code
var cakes = [
    { name: "Chocolate Mousse cake", cake_size: ["8 inch"]},
    { name: "Raspberry Mousse cake", cake_size: ["8 inch"] },
    { name: "Mango Mousse cake", cake_size: ["8 inch"] },
    { name: "Black currant mousse cake", cake_size: ["8 inch"] },
    { name: "Black & White(Smetannik)", cake_size: ["1/8 slab", "1/4 slab", "1/2 slab", "1 slab"] },
    { name: "Queen Bee(Medovik)", cake_size: ["8 inch", "10 inch","1/8 slab", "1/4 slab", "1/2 slab", "1 slab"] },
    { name: "Queen Bee with prunes(Medovik)", cake_size: ["8 inch", "10 inch", "1/8 slab", "1/4 slab", "1/2 slab", "1 slab"] },
    { name: "Raspberry Hazelnut", cake_size: ["8 inch", "10 inch", "1/8 slab", "1/4 slab", "1/2 slab", "1 slab"] },
];

var time = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"];

window.onload = function fillCakes() {

    var datalist = document.getElementById("cakes");
    for(var i = 0; i < cakes.length; i++) {
        var options = document.createElement("option");
        options.value = cakes[i].name;
        options.innerText = cakes[i].name;
        datalist.appendChild(options);

    };
    
}

function fillSizes() {

    var datalist_sizes = document.getElementById("sizes");

    datalist_sizes.innerHTML = "";
    document.getElementById("sizes").innerText = "";

    var cake = document.getElementById("cakes");

    for (var i = 0; i < cakes.length; i++) {
        if (cakes[i].name == cake.value) {
            for (var j = 0; j < cakes[i].cake_size.length; j++) {
              var options = document.createElement("option");
              options.value = cakes[i].cake_size[j];
              options.innerText = cakes[i].cake_size[j];

              datalist_sizes.appendChild(options);
            }
        }

    };


}

function setData() {

    var dataInput = document.getElementById("date");

    var minDate = new Date();
    var dd = minDate.getDate() + 1;
    var dd2 = minDate.getDate() + 1;
    var mm = minDate.getMonth() + 1; //January is 0!
    var mm2 = minDate.getMonth() + 2;

    var yyyy = minDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (dd2 < 10) {
        dd2 = '0' + dd2;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    if (mm2 < 10) {
        mm2 = '0' + mm2;
    }
    //for months with 30 days
    if ((mm2 == 4 || mm2 == 6 || mm2 == 9 || mm2 == 11) && dd == 31) {
        dd2 = '30';    
    }
    //for February
    if (mm2 == 2 && dd == 31) {
        dd2 = '28';
    }
    var minDate = yyyy + '-' + mm + '-' + dd;
    var maxDate = yyyy + '-' + mm2 + '-' + dd2;

    dataInput.min = minDate;
    dataInput.max = maxDate;

}

function setTime() {
    var dataInput = document.getElementById("date");
    var day = new Date(dataInput.value).getDay();

    var timeInput = document.getElementById("date_time");
    timeInput.innerHTML = "";
    document.getElementById("date_time").innerText = "";

    var start = 0;
    var end = 9;

    if (day == 1 || day == 2) { //Tuesday, Wednesday from 12 till 8 pm
        start = 2;
        end = 10;    
    }
    if (day == 6) {//Sunday till 5pm
        start = 0;
        end = 7;
    }

    for (var i = start; i <= end; i++) {
        var options = document.createElement("option");
        options.value = time[i];
        options.innerText = time[i];

        timeInput.appendChild(options);
    }

    if (day == 0) {
        timeInput.innerHTML = "";
        document.getElementById("date_time").value = "";
        //close on Monday
    }

}