document.addEventListener("DOMContentLoaded", function () {
  HGWeather.initialize();
});

var HGWeather = (function (e) {
  var t = {};
  function o(e, o, a, n) {
    var s = new XMLHttpRequest(),
      r =
        t.options.endpoint +
        "/?format=json-cors&key=4697890e" +
        o +
        (globals.byLocation ? "&user_ip=remote" : "") +
        "&woeid=455827" +
        a +
        "&sdk_version=js" +
        t.VERSION +
        (n ? "&lat=" + n.coords.latitude + "&lon=" + n.coords.longitude : "");
    function i() {
      var o = e.querySelector('[data-weather="message"]');
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
            }
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
    (t.messages = {
      developmentKeyWarning:
        '<div><strong>AtenÃ§Ã£o!</strong> VocÃª estÃ¡ usando a chave de API de testes, a mesma sÃ³ funciona no domÃ­nio localhost ou diretamente pelo arquivo.<br><a href="https://console.hgbrasil.com/keys" target="_blank">Clique aqui</a> e solicite uma chave para seu site gratuitamente. Altere a chave na <code>data-key</code> da div com a classe <code>hg-weather</code>.</div>',
      getDataError: "Erro ao tentar obter dados da HG Weather.",
      getLocationError:
        "Erro ao tentar obter a localizaÃ§Ã£o atravÃ©s do seu navegador.",
    }),
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
