const featuresLinks = document.querySelector(".features-link");
const featuresDropdown = document.querySelector(".features-dropdown");
const featuresImgup = document.querySelector(".features-img-up");
const featuresImgdwn = document.querySelector(".features-img-down");

let featuresBoxstate = false;
featuresLinks.addEventListener("click", function(){
   featuresBoxstate = !featuresBoxstate;
//    console.log(featuresBoxstate)

    if (featuresBoxstate === true){
        featuresDropdown.style.display = "flex";
        featuresImgdwn.style.display = "none";
        featuresImgup.style.display = "block";
    } else{
        featuresDropdown.style.display = "none";
        featuresImgdwn.style.display = "block";
        featuresImgup.style.display = "none";
    }
})

const companyLinks = document.querySelector(".company-link");
const companyDropdown = document.querySelector(".company-dropdown");
const companyImgup = document.querySelector(".company-img-up");
const companyImgdwn = document.querySelector(".company-img-down");

let companyBoxstate = false;
companyLinks.addEventListener("click", function(){
    companyBoxstate = !companyBoxstate;

    if(companyBoxstate === true){
        companyDropdown.style.display = "flex";
        companyImgdwn.style.display = "none";
        companyImgup.style.display = "block";
    } else{
        companyDropdown.style.display = "none";
        companyImgdwn.style.display = "block";
        companyImgup.style.display = "none";
    }
})