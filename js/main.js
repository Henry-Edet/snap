const featuresLinks = document.querySelector(".features-link");
const featuresDropdown = document.querySelector(".features-dropdown")

let featuresBoxstate = false;
featuresLinks.addEventListener("click", function(){
   featuresBoxstate = !featuresBoxstate;
   console.log(featuresBoxstate) 
})