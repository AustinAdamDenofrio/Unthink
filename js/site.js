function getValues() {
  // get an input element for startNumber and grab its value.
  let startNumber = document.getElementById('startNumber').value;

  // Do the same for endNumber
  let endNumber = document.getElementById('endNumber').value;

  // HTML strings need the data type converted to integers. 
  // This is the constructor
  startNumber = Number(startNumber)
  endNumber = Number(endNumber)

  // Validate if the input values are numbers before continuing or run error message.
  if (isNaN(startNumber) || isNaN(endNumber)) {
    // display an error message
    swal.fire({
      icon:'error',
      title: 'Oops!',
      backdrop: false,
      text: `Please enter a valid number for Unthink to work properly.`
    });
  } else {
    // run the function, passing the numbers, itll make an array and itll pass back an array.
    let generatedNumbers = generateValues(startNumber, endNumber);
    displayValues(generatedNumbers);
  }
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

  // placeholder for storing numberArray = [0,1,2,3,....]
  let tableHtml = '';

  for (let index = 0; index < numberArray.length; index = index + 1) {

      let number = numberArray[index];
      let className = '';

      // if number is even
      if (number % 2 == 0) {
          // write class 'even'
          className = 'even'; 
      } else {      
          // write class 'odd'
          className = 'odd';
      }

      tableHtml += `<tr><td class="${className}">${number}</td></tr>`;
  }

  // grab an HTML Element by ID and store in a let to prepare to change property
  let tbody = document.getElementById('results');
  // Change property of HTML element
  tbody.innerHTML = tableHtml;
}
