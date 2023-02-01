function tipCalculate(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let people = document.getElementById.value('billSplit').value

    let total = (bill * serviceQuality) / people;
    total = total.toFixed(2);
    document.getElementById('totalTip').innerHTML(total);
    document.getElementById('totalTip').style.display = 'block';
}
document.getElementById('totalTip').style.display = 'none';

document.getElementById('formStyle').addEventListener('submit', tipCalculate);

