function submit() {
    let num = 0;

    // Get value from the <select> element
    let a1 = document.getElementById("towers");
    let an1 = a1.value.trim(); // Use .value to get the selected option
    if (an1 === "Ranger") {
        num += 1;
    }

    // Get value from the text input for gems
    let a2 = document.getElementById("gems");
    let an2 = a2.value.trim(); // Use .value to get the input value
    if (an2 === "65000") {
        num += 1;
    }

    // Get value from the text input for num
    let a3 = document.getElementById("num");
    let an3 = a3.value.trim(); // Use .value to get the input value
    if (an3 === "3y - f") {
        num += 1;
    }

    // Display the result
    document.getElementById("output").innerHTML = num + "/3";
    console.log(num);

    // Check if score is 3/3 and redirect to a new page
    if (num === 3) {
        window.location.href = 'bonus.html'; // Replace with your target URL
    }
}