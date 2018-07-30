$(document).ready(function() {
    $(".addeventatc").on("click", function() {
      $(".ategoogle").click();
      
    });
      $(".download").on("click", function() {
     var a = document.createElement('a');
  a.href = "http://preview.ibb.co/eF1vOo/Robert_and_Jennifer_2_1.jpg";
  a.download = "wedding.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  });
      
    });
  
  
