(function() {
  const javascriptLogo = document.getElementById("logo");
  let times = 0;
  javascriptLogo.addEventListener("click", () => {
    if (times === 0) {
      console.log("You have clicked this logo for the first time!");
      times++;
    } else {
      console.log("You have clicked the logo again!");
    }
  });
})();
