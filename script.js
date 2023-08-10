const colorChangeBtn = document.getElementById('deals');


function handleMouseEnter() {
  colorChangeBtn.style.backgroundColor = '#075a16';
}


function handleMouseLeave() {
  colorChangeBtn.style.backgroundColor = '#148529';
}


colorChangeBtn.addEventListener('mouseenter', handleMouseEnter);
colorChangeBtn.addEventListener('mouseleave', handleMouseLeave);



function openCity(A) {
    
  var  tabcontent;
  tabcontent = document.getElementById("avbcd");

  tabcontent.value=A
}