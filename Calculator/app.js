let historyLog = [];

function addToScreen(value) {

  document.getElementById('screen').value += value;

}

function clearScreen() {
  document.getElementById('screen').value = '';
}

function del() {
  var result = document.getElementById('screen').value;
  //result = Math.floor(result /10);
  var s = result.toString().length - 1;
  result = result.slice(0, s);
  if (result == null || result == 0) {
    document.getElementById('screen').value = '';
  } else {
    document.getElementById('screen').value = result;
  }
}

const sqrtBtn = document.getElementById('sqrt-btn');

sqrtBtn.addEventListener('click', () => {
  const input = document.getElementById('screen');
  const result = Math.sqrt((document.getElementById('screen').value));
  console.log(result)
  if (isNaN(result) || result == 0) {
    input.value = '';
  } else {
    input.value = result.toFixed(4);
  }
});

function calculateScreen() {
  var result = eval(document.getElementById('screen').value);
  if (result == null) {
    document.getElementById('screen').value = '';
  } else {
    if (Number.isInteger(result)) {
      document.getElementById('screen').value = result;
    }
    else {
      document.getElementById('screen').value = result.toFixed(4);
    }
  }
}

function addToHistoryLog(input, result) {
  historyLog.push({ input, result });
  let historyLogDiv = document.getElementById("history-log");
  let newEntry = document.createElement("div");
  newEntry.textContent = "=> " + input + " = " + result.toFixed(4);
  historyLogDiv.appendChild(newEntry);
}

function calculate() {
  let input = (document.getElementById('screen').value);
  console.log("input: " + input)
  let result = eval(document.getElementById('screen').value);
  addToHistoryLog(input, result);
  return result;
}

function log() {
  let historyLogDiv = document.getElementById("history-container");

  if (historyLogDiv.style.visibility == 'visible') {
    historyLogDiv.style.visibility = 'hidden'
  }
  else {
    historyLogDiv.style.visibility = 'visible'
  }

}