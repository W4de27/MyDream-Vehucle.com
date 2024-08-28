document.getElementById("btn").addEventListener("click", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = document.getElementById("check");
  const email = document.getElementById("mail").value;
  if (email.match(emailRegex)) {
    check.style.display = "block";
    document.getElementById("error").style.cssText =
      "border: none; box-shadow: 0 0 0 black";
  } else {
    check.style.display = "none";
    document.getElementById("error").style.cssText =
      "border: 3px solid red; box-shadow: 0 0 10px red";
  }
});

// ############################# Buttons ###########################

document.getElementById("card1").addEventListener("click", function (event) {
  if (event.target.id === "btn1" || event.target.id === "btn11") {
    document.body.style.overflow = "hidden";
    document.getElementById("c1").style.cssText = "visibility: visible";

    document.getElementById("close1").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c1").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card2").addEventListener("click", function (event) {
  if (event.target.id === "btn2" || event.target.id === "btn22") {
    document.body.style.overflow = "hidden";
    document.getElementById("c2").style.cssText = "visibility: visible";

    document.getElementById("close2").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c2").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card3").addEventListener("click", function (event) {
  if (event.target.id === "btn3" || event.target.id === "btn33") {
    document.body.style.overflow = "hidden";
    document.getElementById("c3").style.cssText = "visibility: visible";

    document.getElementById("close3").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c3").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card4").addEventListener("click", function (event) {
  if (event.target.id === "btn4" || event.target.id === "btn44") {
    document.body.style.overflow = "hidden";
    document.getElementById("c4").style.cssText = "visibility: visible";

    document.getElementById("close4").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c4").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card5").addEventListener("click", function (event) {
  if (event.target.id === "btn5" || event.target.id === "btn55") {
    document.body.style.overflow = "hidden";
    document.getElementById("c5").style.cssText = "visibility: visible";

    document.getElementById("close5").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c5").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card6").addEventListener("click", function (event) {
  if (event.target.id === "btn6" || event.target.id === "btn66") {
    document.body.style.overflow = "hidden";
    document.getElementById("c6").style.cssText = "visibility: visible";

    document.getElementById("close6").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c6").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card7").addEventListener("click", function (event) {
  if (event.target.id === "btn7" || event.target.id === "btn77") {
    document.body.style.overflow = "hidden";
    document.getElementById("c7").style.cssText = "visibility: visible";

    document.getElementById("close7").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c7").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card8").addEventListener("click", function (event) {
  if (event.target.id === "btn8" || event.target.id === "btn88") {
    document.body.style.overflow = "hidden";
    document.getElementById("c8").style.cssText = "visibility: visible";

    document.getElementById("close8").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c8").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card9").addEventListener("click", function (event) {
  if (event.target.id === "btn9" || event.target.id === "btn99") {
    document.body.style.overflow = "hidden";
    document.getElementById("c9").style.cssText = "visibility: visible";

    document.getElementById("close9").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c9").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card10").addEventListener("click", function (event) {
  if (event.target.id === "btn10" || event.target.id === "btn100") {
    document.body.style.overflow = "hidden";
    document.getElementById("c10").style.cssText = "visibility: visible";

    document.getElementById("close10").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c10").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card11").addEventListener("click", function (event) {
  if (event.target.id === "btn11" || event.target.id === "btn111") {
    document.body.style.overflow = "hidden";
    document.getElementById("c11").style.cssText = "visibility: visible";

    document.getElementById("close11").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c11").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card12").addEventListener("click", function (event) {
  if (event.target.id === "btn12" || event.target.id === "btn122") {
    document.body.style.overflow = "hidden";
    document.getElementById("c12").style.cssText = "visibility: visible";

    document.getElementById("close12").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c12").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card13").addEventListener("click", function (event) {
  if (event.target.id === "btn13" || event.target.id === "btn133") {
    document.body.style.overflow = "hidden";
    document.getElementById("c13").style.cssText = "visibility: visible";

    document.getElementById("close13").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c13").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card14").addEventListener("click", function (event) {
  if (event.target.id === "btn14" || event.target.id === "btn144") {
    document.body.style.overflow = "hidden";
    document.getElementById("c14").style.cssText = "visibility: visible";

    document.getElementById("close14").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c14").style.cssText = "visibility: hidden";
    });
  }
});
document.getElementById("card15").addEventListener("click", function (event) {
  if (event.target.id === "btn15" || event.target.id === "btn155") {
    document.body.style.overflow = "hidden";
    document.getElementById("c15").style.cssText = "visibility: visible";

    document.getElementById("close15").addEventListener("click", function () {
      document.body.style.overflow = "auto";
      document.getElementById("c15").style.cssText = "visibility: hidden";
    });
  }
});
