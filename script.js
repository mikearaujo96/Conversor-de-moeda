/*

[✅] Mapear Botão conversor, atribuir evento de click

[✅] Mapear input e capturar o valor digitado 

[✅] Criar função que converte valores  

[✅] Mapear Select

[✅] Atribuir resultados diferentes para select selecionado

[✅] Imprimir o resultado na tela


    
*/


const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");






convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);


function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value;
    const inputCurrencyValue = inputCurrency.value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)

};




function changeCurrency() {

    const currencyName = document.querySelector(".currency-name");
    const currencyImage = document.querySelector(".currency-image");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americado"
        currencyImage.src = "assets/img/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/img/euro.png"
    }
    convertValues()
}















