function generateTriangle() {
    const height = parseInt(document.getElementById('height').value);
    const display = document.getElementById('triangle-display');
    
    // We start with an empty string
    let triangleString = "";

    // Outer loop for each row
    for (let i = 1; i <= height; i++) {
        
        // Inner loop to add the asterisks for that row
        for (let j = 1; j <= i; j++) {
            triangleString += "* ";
        }
        
        // Add a newline character at the end of each row
        triangleString += "\n";
    }

    // Instead of console.log(triangleString), we update the page:
    display.innerText = triangleString;
}

// Generate one on startup
window.onload = generateTriangle;