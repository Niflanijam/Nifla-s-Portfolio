document.getElementById('BUTTON1').addEventListener('click', function() {
    document.getElementById('image1').style.display = 'block';
    document.getElementById('image2').style.display = 'none';
});

document.getElementById('BUTTON2').addEventListener('click', function() {
    document.getElementById('image1').style.display = 'none';
    document.getElementById('image2').style.display = 'block';
});


(function() {
    emailjs.init("ipr-B6k8DFozYRRG4"); // Replace YOUR_USER_ID with your EmailJS User ID
})();

    // Initialize EmailJS with your user ID
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email
        emailjs.send('service_jeps3jn', 'template_k0ib2ba', {
            name: name,
            email: email,
            message: message
        })
        .then(function(_response) {
            alert('Message sent successfully!');
            // Clear the form
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Error sending message: ' + JSON.stringify(error));
        });
    });

    
    

    /* Basic sliding animation */
  
  



  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  // Function to handle the scroll event and trigger animations
  function handleScroll() {
    const elements = document.querySelectorAll('.left-slide'); // Select the element
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.querySelector('.content').classList.add('slide-in'); // Add class to trigger animation
      }
    });
  }

  // Add event listeners to trigger animations when scrolling
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);  // Trigger on page load to animate elements already in view




















  
  
  

  
  
  
  















 







  


  
  
  
  
  
  
  
  
  

  
  
  









  
  
  
  
  
    
    
    
    
    
