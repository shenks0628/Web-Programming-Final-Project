let main = document.getElementById("main");
let curr_time = document.getElementById("curr_time");
let curr_weather = document.getElementById("curr_weather");
let change_img = document.getElementById("change_img");
let submit = document.getElementById("submit");
let apps = document.getElementById("apps");
let settings = document.getElementById("settings");
let app1 = document.getElementById("app1");
let app2 = document.getElementById("app2");
let app3 = document.getElementById("app3");
let z = 0;
let curr;
let isFull = false;
const weather_map = new Map(
    [[0, "Clear"],
    [1, "Partly Cloudy"], [2, "Partly Cloudy"], [3, "Partly Cloudy"],
    [45, "Fog"], [48, "Fog"],
    [51, "Drizzle"], [53, "Drizzle"], [55, "Drizzle"],
    [56, "Freezing Drizzle"], [57, "Freezing Drizzle"],
    [61, "Rain"], [63, "Rain"], [65, "Rain"],
    [66, "Freezing Rain"], [67, "Freezing Rain"],
    [71, "Snow Fall"], [73, "Snow Fall"], [75, "Snow Fall"],
    [77, "Snow Grains"],
    [80, "Rain Showers"], [81, "Rain Showers"], [82, "Rain Showers"],
    [85, "Snow Showers"], [86, "Snow Showers"]]
);

setInterval(()=>{
    let d = new Date();
    curr_time.innerHTML = d.toLocaleDateString() + " " + d.toLocaleTimeString();
}, 1000);

function change(file){
    if (file.files && file.files[0]){
        let reader = new FileReader();
        reader.onload = function(e){
            if (window.innerWidth <= 750){ // phone
                main.style.backgroundImage = "url(" + e.target.result + ")";
                localStorage.setItem("background_img_phone", e.target.result);
            }
            else { // desktop
                main.style.backgroundImage = "url(" + e.target.result + ")";
                localStorage.setItem("background_img_desktop", e.target.result);
            }
        }
        reader.readAsDataURL(file.files[0]);
        change_img.style.display = "none";
    }
}
function reset(){
    if (window.innerWidth <= 750){ // phone
        main.style.backgroundImage = "url('https://media.idownloadblog.com/wp-content/uploads/2021/06/ios-15-iPhone-wallpaper-from-ispazio-dark.png')";
        localStorage.removeItem("background_img_phone");
        change_img.style.display = "none";
    }
    else { // desktop
        main.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/macos-ventura-macos-13-macos-2022-stock-dark-mode-5k-retina-5120x2880-8133.jpg')";
        localStorage.removeItem("background_img_desktop");
        change_img.style.display = "none";
    }
}
function show(){
    if (change_img.style.display === "none"){ // show
        change_img.style.display = "block";
        submit.addEventListener("click", reset, false);
    }
    else { // hide
        change_img.style.display = "none";
        submit.removeEventListener("click", reset, false);
    }
}
settings.addEventListener("click", show, false);

function load1(){
    if (window.innerWidth > 750){
        let app1_page = document.getElementById("app1_page");
        if (app1_page){
            app1_page.style.display = "block";
            app1_page.style.zIndex = z;
            curr = app1_page;
        }
        else {
            let item = document.createElement("iframe");
            item.id = "app1_page";
            item.src = "https://holodive.onrender.com/";
            item.style.position = "absolute";
            item.style.top = "8%";
            item.style.left = "8%";
            item.style.zIndex = z;
            item.style.display = "block";
            item.style.border = "none";
            item.style.width = "83%";
            item.style.height = "83%";
            item.style.borderRadius = "10px";
            item.style.overscrollBehavior = "none";
            main.appendChild(item);
            app1_page = document.getElementById("app1_page");
            curr = app1_page;
        }
        z += 1;
    }
    else {
        window.open("https://holodive.onrender.com/","_self");
    }
}
app1.addEventListener("click", load1, false);

function load2(){
    if (window.innerWidth > 750){
        let app2_page = document.getElementById("app2_page");
        if (app2_page){
            app2_page.style.display = "block";
            app2_page.style.zIndex = z;
            curr = app2_page;
        }
        else {
            let item = document.createElement("iframe");
            item.id = "app2_page";
            item.src = "https://shenks0628.github.io/web/";
            item.style.position = "absolute";
            item.style.top = "9%";
            item.style.left = "9%";
            item.style.zIndex = z;
            item.style.display = "block";
            item.style.border = "none";
            item.style.width = "83%";
            item.style.height = "83%";
            item.style.borderRadius = "10px";
            item.style.overscrollBehavior = "none";
            main.appendChild(item);
            app2_page = document.getElementById("app2_page");
            curr = app2_page;
        }
        z += 1;
    }
    else {
        window.open("https://shenks0628.github.io/web/","_self");
    }
}
app2.addEventListener("click", load2, false);

function load3(){
    if (window.innerWidth > 750){
        let app3_page = document.getElementById("app3_page");
        if (app3_page){
            app3_page.style.display = "block";
            app3_page.style.zIndex = z;
            curr = app3_page;
        }
        else {
            let item = document.createElement("iframe");
            item.id = "app3_page";
            item.src = "https://shenks0628.github.io/web/";
            item.style.position = "absolute";
            item.style.top = "10%";
            item.style.left = "10%";
            item.style.zIndex = z;
            item.style.display = "block";
            item.style.border = "none";
            item.style.width = "83%";
            item.style.height = "83%";
            item.style.borderRadius = "10px";
            item.style.overscrollBehavior = "none";
            main.appendChild(item);
            app3_page = document.getElementById("app3_page");
            curr = app3_page;
        }
        z += 1;
    }
    else {
        window.open("https://shenks0628.github.io/web/","_self");
    }
}
app3.addEventListener("click", load3, false);

document.addEventListener("keydown", function(event){
    if (event.key == "Escape"){
        if (curr){
            main.removeChild(curr);
            curr = undefined;
        }
    }
}, false);

function preshow(){
    if (window.innerWidth <= 750){ // phone
        let url = localStorage.getItem("background_img_phone");
        if (url){
            main.style.backgroundImage = "url(" + url + ")";
        }
        else {
            main.style.backgroundImage = "url('https://media.idownloadblog.com/wp-content/uploads/2021/06/ios-15-iPhone-wallpaper-from-ispazio-dark.png')";
        }
    }
    else { // desktop
        let url = localStorage.getItem("background_img_desktop");
        if (url){
            main.style.backgroundImage = "url(" + url + ")";
        }
        else {
            main.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/macos-ventura-macos-13-macos-2022-stock-dark-mode-5k-retina-5120x2880-8133.jpg')";
        }
    }
    
    if (window.innerHeight <= 600 || window.innerWidth <= 750){
        apps.style.flexDirection = "row";
    }
    else {
        apps.style.flexDirection = "column";
    }
    
    if (window.innerWidth <= 750){
        z = 0;
        let app1_page = document.getElementById("app1_page");
        if (app1_page){
            main.removeChild(app1_page);
        }
        let app2_page = document.getElementById("app2_page");
        if (app2_page){
            main.removeChild(app2_page);
        }
        let app3_page = document.getElementById("app3_page");
        if (app3_page){
            main.removeChild(app3_page);
        }
    }
}
window.addEventListener("resize", preshow, false);

function set_img(){
    z = 0;
    if (window.innerWidth <= 750){ // phone
        let url = localStorage.getItem("background_img_phone");
        if (url){
            main.style.backgroundImage = "url(" + url + ")";
        }
    }
    else { // desktop
        let url = localStorage.getItem("background_img_desktop");
        if (url){
            main.style.backgroundImage = "url(" + url + ")";
        }
    }
}
window.addEventListener("load", set_img, false);

// weather API from: https://open-meteo.com/en
const successCallback = (position) => {
    console.log(position);
    let geoLat = position.coords.latitude.toFixed(5);
    let geoLng = position.coords.longitude.toFixed(5);
    let weather_condition;
    $.getJSON("https://api.open-meteo.com/v1/forecast?latitude=" + geoLat + "&longitude=" + geoLng + "&current_weather=true", function(data) {
        console.log(data.current_weather.temperature);
        console.log(data.current_weather.weathercode);
        weather_map.forEach((value, key) => {
            if (key == data.current_weather.weathercode){
                weather_condition = value;
            }
        });
        curr_weather.innerHTML = data.current_weather.temperature + " °C " + weather_condition;
    });
    setInterval(()=>{
        $.getJSON("https://api.open-meteo.com/v1/forecast?latitude=" + geoLat + "&longitude=" + geoLng + "&current_weather=true", function(data) {
            console.log(data.current_weather.temperature);
            console.log(data.current_weather.weathercode);
            weather_map.forEach((value, key) => {
                if (key == data.current_weather.weathercode){
                    weather_condition = value;
                }
            });
            curr_weather.innerHTML = data.current_weather.temperature + " °C " + weather_condition;
        });
    }, 600000);
};
const errorCallback = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        default:
            alert("An unknown error occurred.");
    }
    alert("We'll show the weather at NTOU.");
    $.getJSON("https://api.open-meteo.com/v1/forecast?latitude=25.9253&longitude=121.463425&current_weather=true", function(data) {
        console.log(data.current_weather.temperature);
        console.log(data.current_weather.weathercode);
        weather_map.forEach((value, key) => {
            if (key == data.current_weather.weathercode){
                weather_condition = value;
            }
        });
        curr_weather.innerHTML = data.current_weather.temperature + " °C " + weather_condition;
    });
    setInterval(()=>{
        $.getJSON("https://api.open-meteo.com/v1/forecast?latitude=25.9253&longitude=121.463425&current_weather=true", function(data) {
            console.log(data.current_weather.temperature);
            console.log(data.current_weather.weathercode);
            weather_map.forEach((value, key) => {
                if (key == data.current_weather.weathercode){
                    weather_condition = value;
                }
            });
            curr_weather.innerHTML = data.current_weather.temperature + " °C " + weather_condition;
        });
    }, 600000);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);