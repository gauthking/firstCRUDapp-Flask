function myFunction() {
    let check = document.getElementById("flexSwitchCheckDefault");
    let body = document.getElementById("main");
    let modes = document.getElementsByClassName('modes')

    if (check.checked == true) {
      body.className = "bg-dark";
      for (let index = 0; index < modes.length; index++) {
        modes[index].className = "modes text-white";
      }

    } else if (check.checked == false) {
      body.className = "bg-light";
      for (let index = 0; index < modes.length; index++) {
        modes[index].className = "modes";
      }
    }
  }