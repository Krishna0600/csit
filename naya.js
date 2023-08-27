function onSubmit(event){
    //this is to prevent the page from refreshing on submit button click
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  // console.log("submit button press")
   
    var gender = document.querySelector('input[name="gender"]:checked').value;

   document.getElementById('formData').innerHTML= "Name: " + name + "<br> Email: " + email + "<br> Gender: " + gender;

}

window.onload = function(){
    document.getElementById('contactForm').addEventListener('submit',onSubmit);
}