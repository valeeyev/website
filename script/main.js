myElement.style.display = 'none';

function myFunction() {
  var myElement = document.getElementById('myElement');

  if (myElement.style.display === "none") {
    myElement.style.display = 'flex';
  } else {
    myElement.style.display = 'none';
  }
}