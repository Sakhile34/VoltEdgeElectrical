function searchServices() {

    let input =
    document.getElementById("searchInput");

    if (!input) return;

    let filter =
    input.value.toUpperCase();

    let services =
    document.getElementsByClassName("service-item");

    for (let i = 0; i < services.length; i++) {

        let txt =
        services[i].textContent;

        if (txt.toUpperCase().indexOf(filter) > -1) {

            services[i].style.display = "";

        } else {

            services[i].style.display = "none";
        }
    }
}

const accordions =
document.querySelectorAll(".accordion-btn");

accordions.forEach(button => {

button.addEventListener("click", function(){

let content =
this.nextElementSibling;

if(content.style.display === "block"){

content.style.display = "none";

}else{

content.style.display = "block";

}

});

});

const enquiryForm =
document.getElementById("enquiryForm");

if(enquiryForm){

enquiryForm.addEventListener("submit",

function(event){

event.preventDefault();

document.getElementById("response")
.innerHTML =
"Thank you. We will contact you regarding availability and pricing.";

});

}

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",

function(event){

let name =
document.getElementById("fullName").value;

if(name.length < 3){

alert(
"Name must contain at least 3 characters"
);

event.preventDefault();

}

});

}