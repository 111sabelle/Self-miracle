let lastX = window.innerWidth / 2;
let lastY = window.innerHeight / 2;
const fixedDistance = 6;  
let animationFrame;
let autoMoveInterval;
let autoMove = false;
let lastMouseMoveTime = Date.now();

const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true });

function applyMosaicEffect(img, blockSize) {
    offscreenCanvas.width = img.width;
    offscreenCanvas.height = img.height;
    offscreenCtx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = offscreenCtx.getImageData(0, 0, img.width, img.height);
    const pixels = imageData.data;

    for (let y = 0; y < img.height; y += blockSize) {
        for (let x = 0; x < img.width; x += blockSize) {
            const red = pixels[((y * img.width) + x) * 4];
            const green = pixels[((y * img.width) + x) * 4 + 1];
            const blue = pixels[((y * img.width) + x) * 4 + 2];

            for (let dy = 0; dy < blockSize; dy++) {
                for (let dx = 0; dx < blockSize; dx++) {
                    if (x + dx < img.width && y + dy < img.height) {
                        pixels[((y + dy) * img.width + (x + dx)) * 4] = red;
                        pixels[((y + dy) * img.width + (x + dx)) * 4 + 1] = green;
                        pixels[((y + dy) * img.width + (x + dx)) * 4 + 2] = blue;
                    }
                }
            }
        }
    }

    offscreenCtx.putImageData(imageData, 0, 0);
    return offscreenCanvas.toDataURL();
}

const imgUrls = [
    'images/41723871841_.pic 1.png',
    'images/51723871841_.pic 1.png',
    'images/61723871841_.pic_hd 1.png',
    'images/帧-000343.png',
    'images/帧-000385.png',
    'images/帧-000689.png',
    'images/帧-000867.png',
    'images/帧-000982.png',
    'images/帧-001341.png',
    'images/帧-001608.png',
    'images/帧-001724.png',
    'images/帧-001902 1.png',
    'images/帧-001931.png',
    'images/帧-001967 1.png',
    'images/帧-001971.png',
    'images/帧-002005.png',
    'images/帧-002137.png',
    'images/帧-002454.png',
    'images/帧-002495.png',
    'images/帧-002566 1.png',
    'images/帧-003305.png',
    'images/帧-003408.png',
    'images/帧-003521.png',
    'images/帧-003596.png',
    'images/帧-004133.png',
    'images/帧-004273.png',
    'images/帧-004312.png',
    'images/帧-004624.png',
    'images/帧-004775.png',
    'images/帧-004993.png',
    'images/帧-005168.png',
    'images/帧-005525.png',
    'images/帧-006913.png',
    'images/帧-007125.png',
    'images/帧-007183.png',
    'images/帧-007269.png',
    'images/帧-007272.png',
];

const mosaicImages = [];

imgUrls.forEach((url, index) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; 
    img.onload = function () {
        const mosaicDataURL = applyMosaicEffect(img, 20); 
        mosaicImages[index] = mosaicDataURL;
    };
    img.src = url;
});

function isOverlapping(x, y, blocks) {
    for (const block of blocks) {
        const rect1 = { left: x, top: y, right: x + 100, bottom: y + 100 };
        const rect2 = block.getBoundingClientRect();

        if (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        ) {
            return true;
        }
    }
    return false;
}

function createWhiteBlocks() {
    const overlayContainer = document.getElementById('overlay-container');
    const numBlocks = 5; 
    const blocks = [];

    for (let i = 0; i < numBlocks; i++) {
        let x, y;
        let attempts = 0;
        do {
            x = Math.random() * (window.innerWidth - 100);
            y = Math.random() * (window.innerHeight - 100);
            attempts++;
        } while (isOverlapping(x, y, blocks) && attempts < 100); 
        const block = document.createElement('div');
        block.className = 'white-block';
        block.style.left = `${x}px`;
        block.style.top = `${y}px`;

        blocks.push(block);
        overlayContainer.appendChild(block);
    }
}

function generateTrail() {
    const trailContainer = document.getElementById('trail-container');

    const dx = Math.random() * 60 - 30; 
    const dy = Math.random() * 60 - 30;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance >= fixedDistance && mosaicImages.length > 0) {  
        const angle = Math.atan2(dy, dx);
        lastX += Math.cos(angle) * fixedDistance;
        lastY += Math.sin(angle) * fixedDistance;

        const mosaicDataURL = mosaicImages[Math.floor(Math.random() * mosaicImages.length)];

        const imgElement = document.createElement('div');
        imgElement.className = 'trail';
        imgElement.style.backgroundImage = `url(${mosaicDataURL})`;
        imgElement.style.left = `${lastX}px`;
        imgElement.style.top = `${lastY}px`;

        trailContainer.appendChild(imgElement);
    }

    lastX = Math.max(0, Math.min(window.innerWidth, lastX));
    lastY = Math.max(0, Math.min(window.innerHeight, lastY));
}

function toggleAutoMove() {
    if (Date.now() - lastMouseMoveTime > 3000 && !autoMove) { 
        autoMove = true;
        autoMoveInterval = setInterval(generateTrail, 30); 
    } else if (Date.now() - lastMouseMoveTime <= 3000 && autoMove) {
        autoMove = false;
        clearInterval(autoMoveInterval);
    }
}

document.addEventListener('mousemove', function(event) {
    lastMouseMoveTime = Date.now();
    if (autoMove) {
        clearInterval(autoMoveInterval);
        autoMove = false;
    }

    if (animationFrame) cancelAnimationFrame(animationFrame);

    animationFrame = requestAnimationFrame(() => {
        const trailContainer = document.getElementById('trail-container');

        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= fixedDistance && mosaicImages.length > 0) {  
            const angle = Math.atan2(dy, dx);
            lastX += Math.cos(angle) * fixedDistance;
            lastY += Math.sin(angle) * fixedDistance;

            const mosaicDataURL = mosaicImages[Math.floor(Math.random() * mosaicImages.length)];

            const imgElement = document.createElement('div');
            imgElement.className = 'trail';
            imgElement.style.backgroundImage = `url(${mosaicDataURL})`;
            imgElement.style.left = `${lastX}px`;
            imgElement.style.top = `${lastY}px`;

            trailContainer.appendChild(imgElement);
        }
    });
});

createWhiteBlocks();

setInterval(toggleAutoMove, 1000);

setInterval(() => {
    const trailContainer = document.getElementById('trail-container');
    const overlayContainer = document.getElementById('overlay-container');
    trailContainer.innerHTML = ''; 
    overlayContainer.innerHTML = ''; 
    createWhiteBlocks();
}, 40000); 
