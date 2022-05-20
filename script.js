//LEVEL 4: IS IT RAINING RIGHT NOW? 

$(".button4").click(function() {
    let weather = $(".input4").val();
    if (weather === "yes" || weather === "YES" || weather === "Yes") {
        $(".forecast1").text("Yes! It is raining!");
    } else {
        $(".forecast1").text("Nope! It's not raining right now.");
    }
});

//LEVEL 5: SHOULD I BRING AN UMBRELLA

$(".button5").click(function() {
    let weather = $(".input5").val();
    let umbrella = $(".input6").val();

    if ((weather === "yes" || weather === "YES" || weather === "Yes") && (umbrella === "yes" || umbrella === "YES" || umbrella === "Yes")) {
        $(".forecast2").text("YES! Bring that umbrella!");
    } else if (((weather === "yes" || weather === "YES" || weather === "Yes") && (umbrella === "no" || umbrella === "NO" || umbrella === "No"))) {
        $(".forecast2").text("Yeah, you're gonna want to get an umbrella! ");
    }
    else {
      $(".forecast2").text("Nope, no need for an umbrella!");
    }
});