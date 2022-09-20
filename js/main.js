const featuresLinks = document.querySelector(".features-link");
const featuresDropdown = document.querySelector(".features-dropdown")

let featuresBoxstate = false;
featuresLinks.addEventListener("click", function(){
   featuresBoxstate = !featuresBoxstate;
//    console.log(featuresBoxstate)

    if (featuresBoxstate === true){
        featuresDropdown.style.display = "flex";
    } else{
        featuresDropdown.style.display = "none";
    }
})

const companyLinks = document.querySelector(".company-link");
const companyDropdown = document.querySelector(".company-dropdown");

let companyBoxstate = false;
companyLinks.addEventListener("click", function(){
    companyBoxstate = !companyBoxstate;

    if(companyBoxstate === true){
        companyDropdown.style.display = "flex";
    } else{
        companyDropdown.style.display = "none";
    }
})