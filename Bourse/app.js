function manageMain() {
    document.getElementById("form").innerHTML = "";
    createMain()
}
function manageOffering() {
    document.getElementById("form").innerHTML = "";
    createOffering()
}
function manageCollect() {
    document.getElementById("form").innerHTML = "";
    createCollect()
}
function main() {
    manageMain()
    var click = document.getElementById('cal')
    var res = document.getElementById('reset')

    var mainMoney = document.getElementById('main-money')
    var rate = document.getElementById('rate')
    var terms = document.getElementById('terms')

    var result = document.getElementById('result')
    
    click.onclick = function () {

        let interim = mainMoney.value;
        for (var i = 0; i < terms.value; i++) {
            interim = Number(interim) + Number(interim * rate.value / 100)
        }
        result.innerText = interim.toFixed(3) + " TL"

    }

    res.onclick = function () {
        terms.value = ""
        mainMoney.value = ""
        rate.value = ""
        result.innerHTML = "0 TL"

    }

}

function offering() {
    manageOffering()
    var click = document.getElementById('cal')
    var res = document.getElementById('reset')

    var rate = document.getElementById('rate')
    var price = document.getElementById('price')
    var amount = document.getElementById('amount')
    var terms = document.getElementById('terms')
    var result = document.getElementById('result')

    click.onclick = function () {
        let interim = Number(price.value * amount.value)

        for (var i = 0; i < terms.value; i++) {
            interim = (Number(interim) + Number(interim * rate.value / 100))
        }

        result.innerText = interim.toFixed(3) + " TL"

    }
    res.onclick = function () {
        terms.value = ""
        amount.value = ""
        price.value = ""
        rate.value = ""
        result.innerHTML = "0 TL"

    }

}

function collect(){
    manageCollect()
    var click = document.getElementById('cal')
    var res = document.getElementById('reset')

    var rate = document.getElementById('rate')
    var mainMoney = document.getElementById('main-money')
    var mensal = document.getElementById('mensal')
    var terms = document.getElementById('terms')
    var result = document.getElementById('result')

    click.onclick = function () {
        let interim = mainMoney.value

        for (var i = 0; i < terms.value; i++) {
            interim = (Number(interim) + Number(interim * rate.value / 100))
            if(i%30 == 0){
                interim += Number(mensal.value)
            }
        }
        
        result.innerText = interim.toFixed(3) + " TL"

    }
    res.onclick = function () {
        terms.value = ""
        mensal.value = ""
        mainMoney.value = ""
        rate.value = ""
        result.innerHTML = "0 TL"

    }

}

function createOffering() {
    var form = document.getElementById('form')


    const container = document.createElement('div');
    container.classList.add('form-container');
    container.id = "form-offering"

    const h2 = document.createElement('h2')

    const price = document.createElement('input')
    price.setAttribute('TYPE', 'number')
    price.id = "price"
    price.placeholder = "Başlangıç Fiyatı"
    const amount = document.createElement('input')
    amount.setAttribute('TYPE', 'number')
    amount.id = "amount"
    amount.placeholder = "Miktar"
    const rate = document.createElement('input')
    rate.setAttribute('TYPE', 'number')
    rate.id = "rate"
    rate.placeholder = "Oran"
    const day = document.createElement('input')
    day.setAttribute('TYPE', 'number')
    day.id = "terms"
    day.placeholder = "Gün"

    const subButton = document.createElement('button')
    subButton.setAttribute("TYPE", "submit")
    subButton.id = "cal"
    subButton.textContent = "Hesapla"

    const resButton = document.createElement('button')
    resButton.setAttribute("TYPE", "reset")
    resButton.classList.add('reset')
    resButton.id = "reset"
    resButton.textContent = "Temizle"

    const resultArea = document.createElement('span')
    resultArea.classList.add('result-money')
    resultArea.innerHTML = "Sonuç: "
    const result = document.createElement('span')
    result.id = 'result';
    result.innerHTML = "0 TL"

    resultArea.append(result)

    container.appendChild(h2)
    container.appendChild(price)
    container.appendChild(amount)
    container.appendChild(rate)
    container.appendChild(day)
    container.appendChild(subButton)
    container.appendChild(resButton)
    container.appendChild(resultArea)

    form.append(container)

}
function createMain() {
    var form = document.getElementById('form')

    const container = document.createElement('div');
    container.classList.add('form-container');
    container.id = "form-main"

    const h2 = document.createElement('h2')

    const mainMoney = document.createElement('input')
    mainMoney.setAttribute('TYPE', 'number')
    mainMoney.id = "main-money"
    mainMoney.placeholder = "Ana Para"
    const rate = document.createElement('input')
    rate.setAttribute('TYPE', 'number')
    rate.id = "rate"
    rate.placeholder = "Oran"
    const day = document.createElement('input')
    day.setAttribute('TYPE', 'number')
    day.id = "terms"
    day.placeholder = "Gün"

    const subButton = document.createElement('button')
    subButton.setAttribute("TYPE", "submit")
    subButton.id = "cal"
    subButton.textContent = "Hesapla"

    const resButton = document.createElement('button')
    resButton.setAttribute("TYPE", "reset")
    resButton.classList.add('reset')
    resButton.id = "reset"
    resButton.textContent = "Temizle"

    const resultArea = document.createElement('span')
    resultArea.classList.add('result-money')
    resultArea.innerHTML = "Sonuç:  "
    const result = document.createElement('span')
    result.id = 'result';
    result.innerHTML = " 0 TL"

    resultArea.append(result)

    container.appendChild(h2)
    container.appendChild(mainMoney)
    container.appendChild(rate)
    container.appendChild(day)
    container.appendChild(subButton)
    container.appendChild(resButton)
    container.appendChild(resultArea)

    form.append(container)

}
function createCollect() {
    var form = document.getElementById('form')


    const container = document.createElement('div');
    container.classList.add('form-container');
    container.id = "form-collect"

    const h2 = document.createElement('h2')

    const mainMoney = document.createElement('input')
    mainMoney.setAttribute('TYPE', 'number')
    mainMoney.id = "main-money"
    mainMoney.placeholder = "Ana Para"
    const mensal = document.createElement('input')
    mensal.setAttribute('TYPE', 'number')
    mensal.id = "mensal"
    mensal.placeholder = "Aylık ek birikim (Her ay borsaya ayrılan ekstra para)"
    const rate = document.createElement('input')
    rate.setAttribute('TYPE', 'number')
    rate.id = "rate"
    rate.placeholder = "Oran"
    const day = document.createElement('input')
    day.setAttribute('TYPE', 'number')
    day.id = "terms"
    day.placeholder = "Gün"

    const subButton = document.createElement('button')
    subButton.setAttribute("TYPE", "submit")
    subButton.id = "cal"
    subButton.textContent = "Hesapla"

    const resButton = document.createElement('button')
    resButton.setAttribute("TYPE", "reset")
    resButton.classList.add('reset')
    resButton.id = "reset"
    resButton.textContent = "Temizle"

    const resultArea = document.createElement('span')
    resultArea.classList.add('result-money')
    resultArea.innerHTML = "Sonuç: "
    const result = document.createElement('span')
    result.id = 'result';
    result.innerHTML = "0 TL"

    resultArea.append(result)

    container.appendChild(h2)
    container.appendChild(mainMoney)
    container.appendChild(rate)
    container.appendChild(day)
    container.appendChild(mensal)
    container.appendChild(subButton)
    container.appendChild(resButton)
    container.appendChild(resultArea)

    form.append(container)

}