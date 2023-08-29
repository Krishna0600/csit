function onSubmit(event) {
    ///This is to prevent the page from refreshing on submit button click
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var acceptLicenseYes = document.getElementById('acceptLicenseYes');
    var acceptLicenseNo = document.getElementById('acceptLicenseNo');
    var acceptLicense;
    if(acceptLicenseYes.checked == true && acceptLicenseNo.checked == true){
        acceptLicense = "Cannot select both checkboxes";
    }else if(acceptLicenseYes.checked == true){
        acceptLicense = document.getElementById('acceptLicenseYes').value;
    }else if(acceptLicenseNo.checked == true){
        acceptLicense = document.getElementById('acceptLicenseNo').value;
    }

    var country = document.getElementById('country').value;
    var countryText = country.options[country.selectedIndex].text;



    document.getElementById('formData').innerHTML = "Name: " + name + "<br> Email: " + 
    email + "<br> Gender: " + gender + "<br> Accept License: " + acceptLicense + "<br> Selected Country:" + country;
}

window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', onSubmit);
}