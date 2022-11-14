
let passwordError = document.getElementById('password-error');
let passwordError2 = document.getElementById('password-error2');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');
let errorRadio = document.getElementById("error-radio");
let tripError = document.getElementById("trip-error")
let tripError2 = document.getElementById("trip-error2")



const checkdate = () => {
    let oneWay = document.getElementById('oneWay')

    if (oneWay.checked) { 
        tripError.innerHTML = "Please select your departure date";
        document.getElementById("tripdate").style.border = "2px solid orange";
        document.getElementById("tripdate").style.padding = "10px";
        document.getElementById("tripdate2").style.border = "none";
        document.getElementById("dep").style.fontWeight = "bold";
        document.getElementById("ret").style.fontWeight = "normal";
     } return true;

 
     } 
                                        
  const checkdate2 = () => {
    let roundTrip = document.getElementById('roundTrip')
    let date1 = document.getElementById('tripdate')
    let date2 = document.getElementById('tripdate2')

    if (roundTrip.checked) { 
        tripError.innerHTML = "Please select your departure and return dates";
        date1.style.border = "2px solid orange";
        date1.style.padding = "10px";
        document.getElementById("tripdate2").style.border = "2px solid orange";
        date2.style.padding = "10px";
        document.getElementById("dep").style.fontWeight = "bold";
        document.getElementById("ret").style.fontWeight = "bold";
     } 
     
     else if (roundTrip.checked) { 
              tripError.innerHTML = "Please select your departure and return dates";
     } return true
     } 



     
const validateDateFrom = () => {
    let tripdate = document.getElementById('tripdate').value;
    let ddate = new Date();
    let inputdate = new Date(tripdate);
    
    if (inputdate < ddate) {
        tripError2.innerHTML = "Enter correct departure date. Date must be a future date.";
        return false;
    }
    tripError2.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

const validateDateTo = () => {
    let tripdate = document.getElementById('tripdate2').value;
    let ddate = new Date();
    let inputdate = new Date(tripdate);
    
    if (inputdate < ddate) {
        tripError2.innerHTML = "Enter correct departure and return date";
        return false;
    }
    //tripError2.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}




const validateName = () => {
    let name = document.getElementById('contact-name').value;
    let nameError = document.getElementById('name-error');

    if (name.length == 0 ) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    if (name.length < 5 ) {
        nameError.innerHTML = 'Name requires more than 5 characters';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

const validateName2 = () => {
    let name = document.getElementById('contact-name2').value;
    let nameError2 = document.getElementById('name-error2');

    if (name.length == 0 ) {
        nameError2.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError2.innerHTML = 'Write full name';
        return false;
    }
    if (name.length < 5 ) {
        nameError2.innerHTML = 'Name requires more than 5 characters';
        return false;
    }
    nameError2.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

const validateName3 = () => {
    let name = document.getElementById('contact-name3').value;
    let nameError3 = document.getElementById('name-error3');

    if (name.length == 0 ) {
        nameError3.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError3.innerHTML = 'Write full name';
        return false;
    }
    if (name.length < 5 ) {
        nameError3.innerHTML = 'Name requires more than 5 characters';
        return false;
    }
    nameError3.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

const validateName4 = () => {
    let name = document.getElementById('contact-name4').value;
    let nameError4 = document.getElementById('name-error4');

    if (name.length == 0 ) {
        nameError4.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError4.innerHTML = 'Write full name';
        return false;
    }
    if (name.length < 5 ) {
        nameError4.innerHTML = 'Name requires more than 5 characters';
        return false;
    }
    nameError4.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

const validateAge = () => {
    let age = document.getElementById('contact-age').value;
    let date = new Date();
    let inputage = new Date(age);
    let ageError = document.getElementById('age-error');
    

    if (inputage > date) {
        ageError.innerHTML = 'Enter correct DOB';
        return false;
    }
    ageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

const validateAge2 = () => {
    let age = document.getElementById('contact-age2').value;
    let date = new Date();
    let inputage = new Date(age);
    let ageError2 = document.getElementById('age-error2');

    if (inputage > date) {
        ageError2.innerHTML = 'Enter correct DOB';
        return false;
    }
    ageError2.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

const validateAge3 = () => {
    let age = document.getElementById('contact-age3').value;
    let date = new Date();
    let inputage = new Date(age);
    let ageError3 = document.getElementById('age-error3');

    if (inputage > date) {
        ageError3.innerHTML = 'Enter correct DOB';
        return false;
    }
    ageError3.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

const validateAge4 = () => {
    let age = document.getElementById('contact-age4').value;
    let date = new Date();
    let inputage = new Date(age);
    let ageError4 = document.getElementById('age-error4');

    if (inputage > date) {
        ageError4.innerHTML = 'Enter correct DOB';
        return false;
    }
    ageError4.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


const validatePhone = () => {
    let phone = document.getElementById('contact-phone').value;
    let phoneError = document.getElementById('phone-error');

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = '10 digits with no spaces or letters';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Please enter a 10 digit phone no.';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

const validatePhone2 = () => {
    let phone = document.getElementById('contact-phone2').value;
    let phoneError2 = document.getElementById('phone-error2');

    if (phone.length == 0) {
        phoneError2.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError2.innerHTML = '10 digits with no spaces or letters';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError2.innerHTML = 'Please enter a 10 digit phone no.';
        return false;
    }
    phoneError2.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}


const validatePhone3 = () => {
    let phone = document.getElementById('contact-phone3').value;
    let phoneError3 = document.getElementById('phone-error3');

    if (phone.length == 0) {
        phoneError3.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError3.innerHTML = '10 digits with no spaces or letters';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError3.innerHTML = 'Please enter a 10 digit phone no.';
        return false;
    }
    phoneError3.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

const validatePhone4 = () => {
    let phone = document.getElementById('contact-phone3').value;
    let phoneError4 = document.getElementById('phone-error4');

    if (phone.length == 0) {
        phoneError4.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError4.innerHTML = '10 digits with no spaces or letters';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError4.innerHTML = 'Please enter a 10 digit phone no.';
        return false;
    }
    phoneError4.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}


const validateEmail = () => {
    let email = document.getElementById('contact-email').value;
    let emailError = document.getElementById('email-error');

    if (email.length == 0) {
        emailError.style.display = 'block'
        setTimeout(function(){emailError.style.display = 'none';}, 2000);
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Please enter in format example@mail.com';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

const validateEmail2 = () => {
    let email = document.getElementById('contact-email2').value;
    let emailError2 = document.getElementById('email-error2');

    if (email.length == 0) {
        emailError2.style.display = 'block'
        setTimeout(function(){emailError.style.display = 'none';}, 2000);
        emailError2.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError2.innerHTML = 'Please enter in format example@mail.com';
        return false;
    }

    emailError2.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

const validateEmail3 = () => {
    let email = document.getElementById('contact-email3').value;
    let emailError3 = document.getElementById('email-error3');

    if (email.length == 0) {
        emailError3.style.display = 'block'
        setTimeout(function(){emailError.style.display = 'none';}, 2000);
        emailError3.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError3.innerHTML = 'Please enter in format example@mail.com';
        return false;
    }

    emailError3.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

const validateEmail4 = () => {
    let email = document.getElementById('contact-email4').value;
    let emailError4 = document.getElementById('email-error4');

    if (email.length == 0) {
        emailError4.style.display = 'block'
        setTimeout(function(){emailError.style.display = 'none';}, 2000);
        emailError4.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError4.innerHTML = 'Please enter in format example@mail.com';
        return false;
    }

    emailError4.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}



const validatePassword = () => {
    let password = document.getElementById('contact-password').value;

    if (password.length < 6) {
    passwordError.innerHTML = 'More than 6 characters'
    return false;
} 
passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;

}
const validatePassword2 = () => {
    let password = document.getElementById('contact-password').value;
    let password2 = document.getElementById('contact-password2').value;

    if (password == password2) {
        passwordError2.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
        return true;
    }
    else {
        passwordError2.innerHTML = 'Passwords must match'
    }
}

const checkgender = () => {
    let male = document.getElementById('male')
    let female = document.getElementById('female')
  
    
    if (male.checked) {
        return true
} else if (female.checked) {
    return true
}
}



const checkButton = () => {
    let radio = document.getElementsByName("destination").value;
    let Sydney = document.getElementById('Sydney')
    let Melbourne = document.getElementById('Melbourne')
    let Brisbane = document.getElementById('Brisbane')
    let Perth = document.getElementById('Perth')
 

    if (Sydney.checked) { 
        errorRadio.innerHTML = Sydney.value  + " has a cosomopoliatian feel to it. The food is world-class.";
     } 

     else if (Melbourne.checked) { 
        errorRadio.innerHTML = Melbourne.value  + " has great eateries and a reknown cafe culture.";

    }
    else if (Brisbane.checked) { 
        errorRadio.innerHTML = Brisbane.value  + " has palm trees, ocean breeze and good times.";
    }
    else if (Perth.checked) { 
        errorRadio.innerHTML = Perth.value  + " the place in Western Australia you should visit at least once.";
    }
    return true;

                          
    } 

   const addPassengers = () => {
    let addmore = document.getElementById('addMorePassengers')

    addmore.innerHTML = 'Please call us on 0981 213 123'
   }

const validateMessage = () => {
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
}

const validateFormFieldInput = () => {
    if (!validateName()) {
        submitError.style.display = 'block'
        submitError.innerHTML = "Please complete all sections before submitting";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
      
    }
    if (!validatePhone()) {
    submitError.style.display = 'block'
    submitError.innerHTML = "Please complete all sections before submitting";
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    }
    if (!validateEmail()) {
        submitError.style.display = 'block'
        submitError.innerHTML = "Please complete all sections before submitting";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        }
    if (!validatePassword()) {
        submitError.style.display = 'block'
        submitError.innerHTML = "Please complete all sections before submitting";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        }   
    if (!validatePassword2()) {
        submitError.style.display = 'block'
        submitError.innerHTML = "Please complete all sections before submitting";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        }   

}   

