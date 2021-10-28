function displayNav() {
  const navBox = document.getElementById('narrowLinks');
  if (navBox.style.left == '-400px') {
    navBox.style.left = '0';
  } else {
    navBox.style.left = '-400px';
  }
} 