$(document).ready(function () {
    let savedData;
    $.ajax({ url: "https://economia.awesomeapi.com.br/json/all" })
    .done(function (data) {
        const currencies = Object.keys(data);
        const options = currencies.map((currency) => {
            return `<option value="${currency}">${currency}</option>`
        });
        $("#currencies").html(options);

        $("#data").on('change', function () {
            $(".values").html("");
            let valueSelected = $("#currencies option:selected").val();
            let currency = data[valueSelected];
            let timePeriod = $(this).val().replaceAll("-", "");
            /*$(".values").append(`Última cotação da moeda: ${currency.create_date}`);
            $(".values").append(`Horário: ${currency.ask}`);
            $(".values").append(`Valor mínimo: ${currency.low}`);
            $(".values").append(`Valor máximo: ${currency.high}`);
            $(".values").append(`Valor de Fechamento: ${currency.bid}`);*/
            console.log(valueSelected);
            console.log(timePeriod);
            $.ajax({ url: `https://economia.awesomeapi.com.br/${valueSelected}/?start_date=${timePeriod}&end_date=${timePeriod}` })
            .done(function (data) {
                console.log(JSON.stringify(data));
            });
        });
    });
});