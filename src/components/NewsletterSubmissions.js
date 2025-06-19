
/*let captchaWidget1, captchaWidget3;

async function onloadCallback() {
  captchaWidget1 = grecaptcha.render('captcha1', {
    'sitekey': '6LchUBsrAAAAAEJe-JeaK_akOkeh-6eTwxFF5Gcx'
  });
  await subscribeFunction(); 
  
}

//modal send button click
$("#send").on("click", function(e){
    e.preventDefault(); // prevent de default action, which is to submit
    //call validate function for fields
    validateForm();

    //event is button not  form e.target.reset();
    //modal-contact-form
    $('#modal-contact-form')[0].reset();
        
});

function clearErrors() {
  $(".error").text('');
}

function validateForm() {
  clearErrors();

  let fullname = $("#fullname").val().trim();
  let phone = $("#phone").val().trim();
  let email = $("#email").val().trim();
  let subject = $("#subject").val().trim();
  let textbox_msg = $("#textbox_msg").val().trim();
  let gctoken = document.getElementById("g-recaptcha-response").value; //g-recaptcha-response
  let token1 = grecaptcha.getResponse(captchaWidget1);

  let isValid = true;

  if (fullname === '') {
    $("#fullname-error").text("Full name is required.");
    isValid = false;
  }

  if (phone === '') {
    $("#phone-error").text("Phone number is required.");
    isValid = false;
  } else if (!/^[0-9\-\+\s\(\)]+$/.test(phone)) {
    $("#phone-error").text("Please enter a valid phone number.");
    isValid = false;
  }

  if (email === '') {
    $("#email-error").text("Email is required.");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    $("#email-error").text("Please enter a valid email address.");
    isValid = false;
  }

  if (subject === '') {
    $("#subject-error").text("Subject is required.");
    isValid = false;
  }

  if (textbox_msg === '') {
    $("#textbox_msg-error").text("Message is required.");
    isValid = false;
  }

  if (isValid) {
    let data = {};
        data.fullname= fullname;
        data.phone= phone;
        data.email= email;
        data.subject= subject;
        data.textbox_msg = textbox_msg;
        data.gctoken = gctoken; // the google captcha key 
        data.token1 = token1;
    console.log("Ready to send:", data);
    // Proceed to send the data via AJAX or fetch
    
    const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer my-token',
                //'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify(data),
        };
        
        var elm = document.getElementById('message');
        fetch('https://crystalhansenartographic.com/api/index-contact.php/contact/send', requestOptions)
            .then(response => response.json())
            .then(data => elm.innerHTML = data.message);
          
    }

  return isValid;*/
  let captchaWidget1, captchaWidget3;

async function onloadCallback() {
  captchaWidget1 = grecaptcha.render('captcha1', {
    'sitekey': '6LchUBsrAAAAAEJe-JeaK_akOkeh-6eTwxFF5Gcx'
  });
  await subscribeFunction(); //found in footer.html
  
}


function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.textContent = '');
}

function validateForm() {
  clearErrors();


  const fullname = document.getElementById("fullname").value.trim();
 
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const textbox_msg = document.getElementById("textbox_msg").value.trim();
  const gctoken = document.getElementById("g-recaptcha-response").value;
  const token1 = grecaptcha.getResponse(captchaWidget1); // captchaWidget1 still needs to be defined globally

  let isValid = true;

  if (fullname === '') {
    document.getElementById("fullname-error").textContent = "Full name is required.";
    isValid = false;
  }

  if (phone === '') {
    document.getElementById("phone-error").textContent = "Phone number is required.";
    isValid = false;
  } else if (!/^[0-9\-\+\s\(\)]+$/.test(phone)) {
    document.getElementById("phone-error").textContent = "Please enter a valid phone number.";
    isValid = false;
  }

  if (email === '') {
    document.getElementById("email-error").textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (subject === '') {
    document.getElementById("subject-error").textContent = "Subject is required.";
    isValid = false;
  }

  if (textbox_msg === '') {
    document.getElementById("textbox_msg-error").textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    const data = {
      fullname,
      phone,
      email,
      subject,
      textbox_msg,
      gctoken,
      token1
    };

    //console.log("Ready to send:", data);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const elm = document.getElementById('message');

    fetch('https://crystalhansenartographic.com/api/index-contact.php/contact/send', requestOptions)
      .then(response => response.json())
      .then(responseData => {
        elm.innerHTML = responseData.message;
      })
      .catch(error => {
        elm.innerHTML = "There was an error processing the request.";
        console.error("Fetch error:", error);
      });
  }

  return isValid;
}

const waitForSendButton = () => {
  const sendButton = document.getElementById('send');
  if(sendButton){
      sendButton.addEventListener('click', function(e){
        e.preventDefault(); // prevent de default action, which is to submit
        //call validate function for fields
        validateForm();
    
        //event is button not  form e.target.reset();
        //modal-contact-form
        document.getElementById('modal-contact-form').reset();
      });
      
  } else {
    // Retry in 100ms
    setTimeout(waitForSendButton, 100);
  }
}
waitForSendButton();
const waitForCalendarButton = () => {
  const btn = document.getElementById('calendar');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = "https://crystalhansenartographic.com/pages/calendar.html";
    });
  } else {
    // Retry in 100ms
    setTimeout(waitForCalendarButton, 100);
  }
};

waitForCalendarButton();
const waitForSubscribeButton=()=> {
  const sendButton = document.getElementById('subscribe');
   if(sendButton){
      sendButton.addEventListener('click', function(e){
      e.preventDefault(); // prevent de default action, which is to submit

      document.getElementById("smessage-error").textContent ="";
      document.getElementById("smsg-error").textContent ="";
      var gctoken = document.getElementById("g-recaptcha-response-1").value.trim(); //g-recaptcha-response  g-recaptcha-response-2
      var mail =  document.getElementById("newsemail").value.trim(); 
      let token1 = grecaptcha.getResponse(captchaWidget3);
      let isValid = true;

    
      if (mail === '') {
        document.getElementById("email-error").textContent ="Email is required.";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        document.getElementById("email-error").textContent ="Please enter a valid email address.";
        isValid = false;
      }
      if(isValid){
        console.log("Valid email");
        data = {};
      
        // save your value where you want
        data.email= mail;//$("#newsemail").val();
        data.textbox_msg = "newsletter";
        data.gctoken = gctoken;
        data.token1 = token1;
          
        //console.log(data);
        
          // or call the save function here
          // save
          // POST request using fetch with set headers
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer my-token',
                    //'My-Custom-Header': 'foobar'
                },
                body: JSON.stringify(data),
            };
            
            var elm = document.getElementById('smessage');
            fetch('https://crystalhansenartographic.com/api/index-contact.php/contact/send', requestOptions)
                .then(response => response.json())
                .then(data => elm.innerHTML = data.message);
        }


        document.getElementById('newsletter-form').reset();
      });
    }else{ 
        // Retry in 100ms
        setTimeout(waitForSubscribeButton, 100);
        
    }
        
}

waitForSubscribeButton();