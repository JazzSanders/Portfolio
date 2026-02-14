function printSum(x, y) {
    // Select the element where we want to display the message
    const resultElement = document.getElementById('result');
    
    const numX = parseFloat(x);
    const numY = parseFloat(y);

    const xIsNaN = isNaN(numX);
    const yIsNaN = isNaN(numY);

    let message = "";

    if (xIsNaN && yIsNaN) {
        message = `'${x}' and '${y}' are not numbers.`;
    } else if (xIsNaN) {
        message = `'${x}' is not a number.`;
    } else if (yIsNaN) {
        message = `'${y}' is not a number.`;
    } else {
        const sum = numX + numY;
        message = `Sum is ${sum}.`;
    }

    // Update the webpage instead of the console
    resultElement.textContent = message;
}