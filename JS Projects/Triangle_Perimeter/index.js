const canvas = document.getElementById('triangleCanvas');
const ctx = canvas.getContext('2d');

function getCoords() {
    return {
        x1: parseInt(document.getElementById('x1').value) || 0,
        y1: parseInt(document.getElementById('y1').value) || 0,
        x2: parseInt(document.getElementById('x2').value) || 0,
        y2: parseInt(document.getElementById('y2').value) || 0,
        x3: parseInt(document.getElementById('x3').value) || 0,
        y3: parseInt(document.getElementById('y3').value) || 0
    };
}

function draw() {
    const {x1, y1, x2, y2, x3, y3} = getCoords();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Triangle
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 123, 255, 0.1)';
    ctx.fill();

    // Labels
    ctx.fillStyle = "black";
    ctx.fillText(`A (${x1},${y1})`, x1 + 5, y1 - 5);
    ctx.fillText(`B (${x2},${y2})`, x2 + 5, y2 - 5);
    ctx.fillText(`C (${x3},${y3})`, x3 + 5, y3 - 5);
}

function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
    const side1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const side2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
    const side3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    return side1 + side2 + side3;
}

function triangleArea(x1, y1, x2, y2, x3, y3) {
    // Using the Shoelace Formula for area via coordinates
    return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}

function calculate() {
    const {x1, y1, x2, y2, x3, y3} = getCoords();
    
    const p = trianglePerimeter(x1, y1, x2, y2, x3, y3);
    const a = triangleArea(x1, y1, x2, y2, x3, y3);

    document.getElementById('peri-val').innerText = p.toFixed(2);
    document.getElementById('area-val').innerText = a.toFixed(2);
}

// Initial draw
draw();