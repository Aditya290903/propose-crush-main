const audio = document.getElementById("myAudio");

audio.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

var i = 0;
var txt1 =
 // "Hi Love.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When you saw me for the first time < You finds something Special to me.  <<                  As the days goes < you get closer to me....and we attached to both.... ! <<                           I don't know the reason for our breakingup but it seems like due to some immaturities and ego in both ,plz understand the problem and let fix it now , I promise to you that I fully changed for u  but you just give me a fdship and loyalty as I aspect from you in our relationship and let's go on the beautiful things of our relations and creates some other great memeories to show that we are undersatnding and unbreakable to each other ,there's alot of problems occur but it's our last time we fix it and go on to forever I changed my immature behaviour to u.Let's fix and creates the memories.....!                                                     > Everything about you is always intresting for me and this is last time we both trust and understand each other plz fix the problem n yrr lasttime ...!                     << I am somewhat immature in aggression i changed it Because I can't be lose u Let's fix the problem for tha last time and I won't to be anyone part in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <SweetHeart.....!                    <<<< Give me One chance to Prove my Love ...!   ";



  "Hi Love.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <SweetHeart.....! |                  <<<< Give me One chance to Prove my Love ...!   by untoldcoding";
var speed = 55;

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.body.addEventListener("click", () => {
  if (i === 0) {
    const img = document.querySelector("#box img");
    const box = document.getElementById("box");
    img.style = "transform: scale(3)";
    setTimeout(() => {
      box.style = "opacity: 0.8;";
    }, 100);
    setTimeout(() => {
      box.style = "opacity: 0.7;";
    }, 200);
    setTimeout(() => {
      box.style = "opacity: 0.6;";
    }, 300);
    setTimeout(() => {
      box.style = "opacity: 0.5;";
    }, 400);
    setTimeout(() => {
      box.style = "display:none";
      audio.currentTime = 49;
      audio.play();
      typeWriter();
    }, 500);
  }
});





