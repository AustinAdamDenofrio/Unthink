//Display the value property of input id to alert

function displayMessage() {
    let inputBox = document.getElementById('message');
    let message = inputBox.value;

    Swal.fire({
        title: "Unthink",
        text: message,
        icon: "success",
        backdrop: false
    
      });
      
}

