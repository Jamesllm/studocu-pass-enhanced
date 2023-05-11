console.log("loaded");
window.addEventListener("load", function () {
  console.log("injected");
  setTimeout(() => {
    let testBanner = document.querySelector("._d090be426bcb");
    let banner = document.querySelector("._869f7c361ca9");
    testBanner.style.display = "none";
    banner.style.display = "none";
  }, 50);

  setTimeout(() => {
    try {
      const paywalls = document.getElementsByClassName("banner-wrapper");
      paywalls.forEach((paywall) => {
        paywall.remove();
      });
    } catch (error) {
      console.log("no mid-page ads found");
    }

    try {
      document.getElementsByClassName("_99b399f6f9ba")[0].remove();
    } catch (error) {
      console.log("no over-page ads found");
    }
  }, 100);
});
