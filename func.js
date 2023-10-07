const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const segments = ["Lucky", "Try Again", "Lucky", "Try Again", "Lucky", "Try Again"];
let currentAngle = 0;

function drawWheel() {
    let angle = 2 * Math.PI / segments.length;
    for (let i = 0; i < segments.length; i++) {
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 200, currentAngle, currentAngle + angle);
        ctx.lineTo(200, 200);
        ctx.fillStyle = i % 2 === 0 ? '#FFD700' : '#FF6347';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#000';
        ctx.font = '20px Arial';
        ctx.fillText(segments[i], 200 + 100 * Math.cos(currentAngle + angle / 2), 200 + 100 * Math.sin(currentAngle + angle / 2));
        currentAngle += angle;
    }
}

function spinWheel() {
    let spins = Math.floor(Math.random() * (10 - 3 + 1)) + 3; // Random spins between 3 and 10
    let totalRotation = spins * 2 * Math.PI;
    let segmentAngle = 2 * Math.PI / segments.length;
    let randomSegment = Math.floor(Math.random() * segments.length);
    let finalAngle = randomSegment * segmentAngle;

    let rotation = totalRotation + finalAngle;
    currentAngle += rotation;

    drawWheel();

    setTimeout(() => {
        if (segments[randomSegment] === "Lucky") {
            alert("You're lucky! Start chatting with someone!");
        } else {
            alert("Try again later!");
        }
    }, 5000); // 5 seconds for the wheel to stop and show the result
}

drawWheel();
