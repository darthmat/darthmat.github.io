$(document).ready(function() {
  function getExchangeData() {
    let lastBuy = parseFloat($("#current-exchange-buy").text());
    let lastSell = parseFloat($("#current-exchange-sell").text());

    $.getJSON("https://blockchain.info/pl/ticker", function(btcData) {
      if (lastBuy < btcData.PLN.last || lastSell < btcData.PLN.sell) {
        $(".fa-minus").remove();
        $(".fa-arrow-down").remove();
        $(".fa-arrow-up").remove();
        $("#current-exchange-buy").after('<i class="fas fa-arrow-up"></i>');
        $("#current-exchange-sell").after('<i class="fas fa-arrow-up"></i>');
        $("#exchange-info").html("zanotowano wzrost");
      } else if (lastBuy > btcData.PLN.last || lastSell > btcData.PLN.sell) {
        $(".fa-minus").remove();
        $(".fa-arrow-up").remove();
        $(".fa-arrow-down").remove();
        $("#current-exchange-buy").after('<i class="fas fa-arrow-down"></i>');
        $("#current-exchange-sell").after('<i class="fas fa-arrow-down"></i>');
        $("#exchange-info").html("zanotowano spadek");
      } else {
        $(".fa-arrow-up").remove();
        $(".fa-arrow-down").remove();
        $(".fa-minus").remove();
        $(".fa-minus").remove();
        $("#current-exchange-buy").after('<i class="fas fa-minus"></i>');
        $("#current-exchange-sell").after('<i class="fas fa-minus"></i>');
        $("#exchange-info").html("kurs nie uległ zmianie");
      }

      $("#current-exchange-buy").text(btcData.PLN.last);
      $("#current-exchange-sell").text(btcData.PLN.sell);
    });
  }

  getExchangeData();

  $("button").click(function() {
    getExchangeData();
  });
});
