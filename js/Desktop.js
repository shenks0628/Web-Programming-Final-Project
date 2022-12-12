let main = document.getElementById("main");
let curr_time = document.getElementById("curr_time");
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
let buff = [];

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
            console.log(item.style.overscrollBehavior);
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
