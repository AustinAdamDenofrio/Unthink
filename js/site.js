// Collect user inputs
// AKA the Entry Point
function getValues() {
  // get an input element for startNumber and grab its value.
  let startNumber = document.getElementById('startNumber').value;

  // Do the same for endNumber
  let endNumber = document.getElementById('endNumber').value;

  // HTML strings need the data type converted to integers. 
  // This is the constructor
  startNumber = Number(startNumber)
  endNumber = Number(endNumber)

  // run the function, passing the numbers, itll make an array and itll pass back an array.
  let generatedNumbers = generateValues(startNumber, endNumber);

  displayValues(generatedNumbers);

}





// generate a list of numbers between those 2 values
function generateValues(start, end) {
  let numbers = [];

  for (let i = start; i <= end; i = i + 1) {
      numbers.push(i);
  }

  return numbers;
}







// display in results table
function displayValues(numberArray) {

  // numberArray = [0,1,2,3,....]
  let tableHtml = '';

  for (let index = 0; index < numberArray.length; index = index + 1) {

    let number = numberArray[index];

    tableHtml = tableHtml + '<tr><td>' + number + '</td></tr>';

  }

  let tbody = document.getElementById('results');

  tbody.innerHTML = tableHtml;
}
