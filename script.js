document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){
    window.close();
}
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.buttonconfirm'),
        loader = document.querySelector('.loader'),
        check = document.querySelector('.check');
    
    btn.addEventListener('click', function () {
      loader.classList.add('active');    
    });
   
    loader.addEventListener('animationend', function() {
      check.classList.add('active'); 
    });
  });
  