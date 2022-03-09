function openHoursDropdown() {
    var x = document.getElementsByClassName("dropdown-content")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
        changeTriangle(0)
    } else {
        x.style.display = "block";
        x.style.margin = "0";
        changeTriangle(-90)
    }
}

function closeHoursDropdown() {
    var x = document.getElementsByClassName("dropdown-content")[0];
    x.style.display = "none";
    changeTriangle(0)
}

function changeTriangle(deg) {    
    var triangleBtn = document.getElementsByClassName("dropdown-triangle")[0];
    triangleBtn.style.transform = `rotate(${deg}deg)`;
}

function toggleSidebar() {
    var main = document.getElementsByTagName("main")[0];
    var sidebarContent = document.getElementById("sidebar");
    console.log('display: ' + sidebarContent.style.display);
    if (sidebarContent.style.display === "block") {
        sidebarContent.style.display = "none";
    } else {
        sidebarContent.style.display = "block";
    }
}

function openImgGallery() {
    var x = document.getElementsByClassName("img-gallery")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function closeImgGallery() {
    var x = document.getElementsByClassName("img-gallery")[0];
    x.style.display = "none";
}