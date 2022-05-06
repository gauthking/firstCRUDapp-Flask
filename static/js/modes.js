function myFunction() {
    let check = document.getElementById("flexSwitchCheckDefault");
    let body = document.getElementById("main");
    let modes = document.getElementsByClassName('modes');
    let nav = document.getElementById("nav");
    let nav1 = document.getElementById("navitem");
    let nav2 = document.getElementById("navitem1");
    let nav3 = document.getElementById("navitem2");


    if (check.checked == true) {
      body.className = "bg-dark";
      for (let index = 0; index < modes.length; index++) {
        modes[index].className = "modes text-white";
      }
      nav.className = "navbar navbar-expand-lg navbar-light bg-warning";
      nav1.className = "navbar-brand text-black";
      nav2.className = "nav-link active text-black";
      nav3.className = "nav-link text-black";

    } else if (check.checked == false) {
      body.className = "bg-light";
      for (let index = 0; index < modes.length; index++) {
        modes[index].className = "modes";
      }
      nav.className = "navbar navbar-expand-lg navbar-light bg-dark";
      nav1.className = "navbar-brand text-white";
      nav2.className = "nav-link active text-white";
      nav3.className = "nav-link text-white";
    }
  }