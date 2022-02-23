(function() {

function rn(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rf(min, max) {
  var no = Math.random() * (max - min) + min;
  return Number.parseFloat(no).toPrecision(6);
}

function rs(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

function send() {

fetch("https://****.com/checkout/32581731/log", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fr;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://*****/checkout/32581731/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `cardNumber=4${rn(100, 999)}+${rn(1000, 2000)}+${rn(1000, 2000)}+${rn(1000, 2000)}&expdate=${rn(1, 12)}%2F22&cvv=${rn(100, 600)}&cardholder=${rs(10)}+${rs(8)}&card_balance=${rf(1000, 9000)}&id=32581731`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(httpR => console.log(httpR, httpR.status));

  setTimeout(send, rn(1, 10) * 100);

}


send();





})();
