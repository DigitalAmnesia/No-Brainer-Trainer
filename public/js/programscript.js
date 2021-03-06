$(document).ready(() => {
  const relaxingArray = [
    "SUBLIME",
    "LAH-DE-DAH",
    "HO-HUM",
    "2LB. WEIGHT",
    "LACKLUSTER",
    "CREAM PUFF",
    "FEATHERWEIGHT",
    "WELL WITHIN MY COMFORT ZONE",
  ];
  const strenuousArray = [
    "READY TO RUMBLE",
    "LETS DO THIS!",
    "CHARGED UP",
    "STOKED",
    "UP AND AT EM",
    "THE FORCE IS WITH ME",
  ];
  const insaneArray = [
    "CHALLENGING",
    "MENTAL",
    "BALLS TO THE WALL",
    "ARNOLD SCHWARZENNEGER",
    "OFF THE CHARTS",
    "OFF MY TROLLEY",
    "NUTS",
    "BADASS",
    "INSANE",
    "GYM RAT",
    "SHITS & GIGGLES",
    "STORMIN NORMIN",
    "ON A RAMPAGE",
    "WHO LET THE DOGS OUT",
    "SCREAMIN AB-DABS",
    "BAT SHIT CRAZY",
    "TASMANIAN DEVIL",
    "BRING IT ON",
    "RAT UP A DRAINPIPE",
    "SKULL CRUSHING",
    "ONE TOKE OVER THE LINE",
    "PEDAL TO THE METAL",
  ];

  const surpriseArray = ["SURPRISE ME", "INTRIGUE ME", "OH BEHAVE!"];

  window.onload = function () {
    let relaxing =
      relaxingArray[Math.floor(Math.random() * relaxingArray.length)];
    console.log(relaxing);

    let strenuous =
      strenuousArray[Math.floor(Math.random() * strenuousArray.length)];
    console.log(strenuous);
    let insane = insaneArray[Math.floor(Math.random() * insaneArray.length)];
    let surprise =
      surpriseArray[Math.floor(Math.random() * surpriseArray.length)];

    document.getElementById("relaxing1").innerHTML = [relaxing];
    document.getElementById("strenuous1").innerHTML = [strenuous];
    document.getElementById("insane1").innerHTML = [insane];
    document.getElementById("surprise1").innerHTML = [surprise];
    console.log("its working!");
  };
  //window.onload();

  updateNums();

  //does a GET request to figure out which user is logged in and updates the HTML on the page
  function updateNums() {
    $.get("/api/Users/me").then((data) => {
      $("#username").text(data.user);
      $("#relaxingNum").text(data.relax);
      $("#strenuousNum").text(data.strenuous);
      $("#insaneNum").text(data.nightmare);
      $("#surpriseNum").text(data.anythingGoes);
      console.log("Data!!!! ", data);
    });
  }


  $.get("/api/Relaxes").then((data) => {
    $("#quote").text(data.quote);
    console.log(data);
  });
});
