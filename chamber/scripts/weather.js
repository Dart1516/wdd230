document.addEventListener("DOMContentLoaded", function () {
  HGWeather.initialize();
});

var HGWeather = (function (e) {
  var t = {};
  // Declaramos variables para almacenar los datos de temperatura y velocidad del viento
  var temperatureData, windSpeedData;

  function o(e, o, a, n) {
    var s = new XMLHttpRequest(),
      r =
        t.options.endpoint +
        "/?format=json-cors&key=" +
        o +
        (globals.byLocation ? "&user_ip=remote" : "") +
        "&woeid=" +
        a +
        "&sdk_version=js" +
        t.VERSION +
        (n ? "&lat=" + n.coords.latitude + "&lon=" + n.coords.longitude : "");
    function i() {
      var o = "570d7d81";
      (o.style.display = "block"), (o.innerText = t.messages.getDataError);
    }
    (s.onload = function () {
      s.status >= 200 && s.status < 400
        ? (function (o) {
            var a = e.querySelectorAll("[data-weather]"),
              n = e.querySelector('[data-weather="image"]'),
              s = 0;
            for (
              e.className = t.options.defaultClass + " " + o.condition_slug,
                n.style.display = "inline-block",
                n.src =
                  t.options.assetsEndpoint + "/images/" + o.img_id + ".png",
                e.querySelector('[data-weather="message"]').style.display =
                  "none";
              s < a.length;
              ++s
            ) {
              var r = a[s];
              -1 !== t.options.accessibleData.indexOf(r.dataset.weather) &&
                (r.innerText = o[r.dataset.weather]);

              // This is my code for Windchill
              if (r.dataset.weather === "temp") {
                temperatureData = o[r.dataset.weather];
              }
              if (r.dataset.weather === "wind_speedy") {
                windSpeedData = o[r.dataset.weather];
              }
            }
// fot the formula in celcius was took here https://www.wikihow.life/Calculate-Wind-Chill
            function calculateWindChill(temperatureData, windSpeedData) {
              if (temperatureData <= 50 && windSpeedData > 1) {
                const windChill = 13.12 + 0.6215 * temperatureData - 11.37 * Math.pow(windSpeedData, 0.16) + 0.3965 * temperatureData * Math.pow(windSpeedData, 0.16);
                return windChill.toFixed(2);
              } else {
                return "N/A";
              }
            }
            // This is to see if is loading the data
            console.log("temperature:", temperatureData);
            console.log("windSpeed:", windSpeedData);

            console.log("Wind Chill:",calculateWindChill(temperatureData,
                            windSpeedData
              )
            );

            const windChillElement = e.querySelector(
              '[data-weather="wind_chill"]'
            );

            // This is the code to calculate
            const windChillValue = calculateWindChill(
              parseFloat(temperatureData),
              parseFloat(windSpeedData)
            );
            
            // and this is the code to appear
            windChillElement.innerText = windChillValue + " º C";
            
          })(JSON.parse(s.responseText).results)
        : i(s.responseText);
    }),
      (s.onerror = i),
      s.open("GET", r),
      s.send();
  }
  return (
    (globals = {}),
    (t.VERSION = "1.0.0"),
    (t.options = {
      accessibleData: [
        "temp",
        "description",
        "date",
        "time",
        "city",
        "humidity",
        "wind_speedy",
        "sunrise",
        "sunset",
      ],
      assetsEndpoint: "https://assets.hgbrasil.com/weather",
      defaultClass: "hg-weather",
      developmentKey: "4697890e",
      developmentWoeid: "455827",
      endpoint: "https://api.hgbrasil.com/weather",
      locationButtonSelector: ".get-location",
      selector: ".hg-weather",
    }),
    (t.messages = {}),
    (t.initialize = function (a, n) {
      for (
        var s = e.querySelectorAll(t.options.selector), r = 0;
        r < s.length;
        ++r
      ) {
        var i = s[r];
        (currentLocationButton = i.querySelector(
          t.options.locationButtonSelector
        )),
          (globals.key = a || i.dataset.key || t.options.developmentKey),
          (globals.woeid = n || i.dataset.woeid || t.options.developmentWoeid),
          globals.key == t.options.developmentKey &&
            e.body.insertAdjacentHTML(
              "afterbegin",
              t.messages.developmentKeyWarning
            ),
          currentLocationButton
            ? ((globals.byLocation = !0),
              currentLocationButton.addEventListener("click", function (e) {
                e.preventDefault(), t.getLocation(i);
              }))
            : (globals.byLocation = !1),
          o(i, globals.key, globals.woeid, !1);
      }
    }),
    (t.getLocation = function (e) {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(function (t) {
            o(e, globals.key, globals.woeid, t);
          })
        : alert(t.messages.getLocationError);
    }),
    t
  );
})(document);
