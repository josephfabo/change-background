function btnfun(){
    var random = randomColor();
    document.body.style.backgroundColor = random;
    document.getElementById('submit').style.color = random;

    function randomColor(){
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
