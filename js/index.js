$(document).ready(function(){
    var fName = $('#fname');
    
    fName.blur(function(e){
      if(fName.val() === '') {
        fName.css('border','1px solid red');
      }
      else {
        fName.css('border','1px solid #271458');
      }
    });

    $('#contactForm').submit(function(e){
      e.preventDefault();
      var fName = $('#fname');
      var email = $('#email');
      var subject = $('#subject');
      if (fName.val() === '' || email.val() === '' || subject.val() === '') {
        alert('All fields are required');
      }
      else {
        $('#successMessage').text(`Thank You ${fName.val()} for your message. I'll get back to you ASAP!`);
        fName.val('');
        email.val('');
        subject.val('');
      }
    });
    
    $('#testa').click(function(e){
      e.preventDefault();
      $('#testa').text('Clicked');
      //$('#fname').val('Hello');
      //$('#email').val();
      console.log($('#fname'));
    });
  });

  //$(".content) .delay(300).fadeIn(800).animate({top: "-50px},);