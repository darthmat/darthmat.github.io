$(function() {
  function user() {
    $.getJSON(
      "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
      function(data) {
        let newUser = $("<div></div>").attr("id", "dane-programisty");
        newUser.append("<p>" + "Imię: " + data.imie + "</p>");
        newUser.append("<p>" + "Nazwisko: " + data.nazwisko + "</p>");
        newUser.append("<p>" + "Firma: " + data.firma + "</p>");
        newUser.append("<p>" + "Zawód: " + data.zawod + "</p>");
        $("button").after(newUser);
      }
    );
  }

  $("button").one("click", function(e) {
    e.preventDefault();
    user();
  });
});
