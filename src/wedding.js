$(document).ready(function() {
    $(".addeventatc").on("click", function() {
      $(".ategoogle").click();
      
    });
      $(".download").on("click", function() {
     var a = document.createElement('a');
  a.href = "https://github.com/leenMalka/ourWedding/blob/master/images/wedding.jpg";
  a.download = "wedding.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  });
      
    });
  
  
