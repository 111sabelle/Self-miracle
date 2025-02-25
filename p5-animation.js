let colorSchemes = [
    { colors: ['#A0A2CF', '#463E6B', '#684489', '#AB456A', '#BF8EBB', '#2F1C3', '#F0F8FE', '#A1A4D4'], background: '#A1A4D4' },
    { colors: ['#2E4272', '#030309', '#45212F', '#B72846', '#4C0B19', '#282B3E', '#1C2839', '#181D30'], background: '#A1A4D4' },
    { colors: ['#221416', '#AA4662', '#522C2C', '#B48F5E', '#82633F', '#927351', '#6C6F64', '#F2DFB2'], background: '#B48F5E' },
    { colors: ['#EDF66C', '#EDF3DB', '#A28057', '#867153', '#706856', '#5F6154', '#4A5953', '#033E50'], background: '#706856' },
    { colors: ['#030303', '#23151D', '#957A61', '#431C36', '#24194E', '#44411D', '#180A18', '#7E5C4B'], background: '#24194E' },
    { colors: ['#D7E8EB', '#507277', '#20414F', '#43535A', '#89A7AD', '#DA8F73', '#030B16', '#162234'], background: '#162234' },
    { colors: ['#3F3F73', '#7364A2', '#3B384B', '#34365E', '#8A9FCD', '#8476B6', '#E4EBFF', '#575382'], background: '#8A9FCD' },
    { colors: ['#314944', '#7B8E73', '#73625E', '#5F644B', '#1A1D19', '#A3F3C8', '#22312C', '#2A413B'], background: '#314944' },
    { colors: ['#43191A', '#0E0300', '#858258', '#2B140B', '#3F2814', '#7F7B4E', '#A0EFFF', '#3D1616'], background: '#3F2814' },
    { colors: ['#5F5F5F', '#8F8F8F', '#FFFFFF', '#383838', '#4E4E4E', '#6C6C6C', '#B3B3B3', '#1E1E1E'], background: '#1E1E1E' },
    { colors: ['#000006', '#D1EFFE', '#72ABCD', '#03161A', '#316180', '#3D7298', '#507D99', '#1E4C65'], background: '#03161A' },
    { colors: ['#847783', '#E5E1E4', '#C0B8B7', '#AFACBB', '#61404B', '#B29895', '#E5DFD9', '#462C35'], background: '#AFACBB' },
    { colors: ['#1C8D99', '#03304C', '#056276', '#001F39', '#000B1F', '#003850', '#00192F', '#000B1C'], background: '#056276' },
    { colors: ['#6E594B', '#14162D', '#16142A', '#D0FFFD', '#282637', '#657D82', '#575F5B', '#1E2738'], background: '#14162D' },
    { colors: ['#000310', '#06142E', '#394764', '#CCE2E3', '#D5C3CD', '#91C7C9', '#5A949F', '#20324D'], background: '#394764' },
    { colors: ['#394764', '#0E233E', '#C78DBB', '#909BBF', '#578BAD', '#376186', '#1D3F5F', '#5A869E'], background: '#5A869E' },
    { colors: ['#EFFCFD', '#EADDF9', '#CF9CD1', '#C572AD', '#893773', '#6E2356', '#581631', '#9B335F'], background: '#C572AD' },
    { colors: ['#1C1406', '#282210', '#524B32', '#615B40', '#969D7F', '#EAFFFF', '#45391E', '#321D0D'], background: '#615B40' },
    { colors: ['#17100E', '#2E2720', '#686B59', '#809379', '#533F3F', '#5C7071', '#312D20', '#1D190B'], background: '#686B59' },
    { colors: ['#0C6CB4', '#024294', '#00125F', '#03245D', '#030335', '#00002E', '#57A0D1', '#082C60'], background: '#03245D' },
    { colors: ['#000006', '#2A2A25', '#282C2D', '#FEFEF8', '#272236', '#2E3336', '#23233F', '#6E6B5D'], background: '#23233F' },
    { colors: ['#445061', '#687582', '#A3ABB2', '#D5D5D5', '#878494', '#737377', '#43505E', '#1A222E'], background: '#687582' },
    { colors: ['#353D49', '#353D49', '#575956', '#F3FBFD', '#131425', '#727071', '#494F5B', '#9FACAC'], background: '#9FACAC' },
    { colors: ['#FFFCDA', '#89582A', '#531206', '#314251', '#210000', '#000006', '#505E68', '#FFECD9'], background: '#000006' },
    { colors: ['#D8C6F5', '#ABA6AA', '#4F4227', '#412B10', '#1E0300', '#46381D', '#301603', '#483E29'], background: '#4F4227' },
    { colors: ['#000000', '#F72F06', '#E32713', '#750600', '#450502', '#420003', '#230302', '#6A0401'], background: '#230302' },
    { colors: ['#3B5462', '#F4FBFC', '#435C6F', '#325064', '#142D42', '#4D7798', '#355D79', '#06243C'], background: '#355D79' },
    { colors: ['#FF9B17', '#FF6803', '#C62502', '#631006', '#1D0E10', '#2D1D16', '#480C04', '#1B1111'], background: '#1D0E10' },
    { colors: ['#7D4533', '#EADFC7', '#994825', '#C49A6C', '#581F1F', '#220C09', '#21160B', '#58130F'], background: '#58130F' },
    { colors: ['#5A411F', '#45372A', '#774228', '#D4A73D', '#73270A', '#C7DAD9', '#160E0B', '#A96A28'], background: '#774228' },
    { colors: ['#ABCBAE', '#CFFBFE', '#0F346D', '#BBF0FC', '#375A50', '#91DFF6', '#1E7FB5', '#002A57'], background: '#ABCBAE' },
    { colors: ['#4A2522', '#7B615E', '#D5D7B3', '#79828B', '#2D363D', '#3F5963', '#726A60', '#302017'], background: '#79828B' },
    { colors: ['#79828B', '#9B8387', '#4A4750', '#191A20', '#7F93A2', '#87A4B5', '#BDBB97', '#293B45'], background: '#87A4B5' },
    { colors: ['#E5E9ED', '#53585C', '#030E14', '#51545F', '#3C404B', '#2C3637', '#333836', '#707780'], background: '#51545F' },
    { colors: ['#FEFFF8', '#A4B7A6', '#90C2AA', '#537762', '#31463A', '#51645C', '#343A36', '#120E10'], background: '#51645C' },
    { colors: ['#001776', '#FFFFFF', '#AA8B51', '#C19C6D', '#362609', '#080A2E', '#888948', '#9E3F20'], background: '#080A2E' },
    { colors: ['#5C0034', '#2C0041', '#170641', '#D1B17C', '#100000', '#644B27', '#FEF3C8', '#814A52'], background: '#170641' }
  ];
  
  
  function createP5Instance(containerId) {
    return function (p) {
        let rects = [];
        let maxBlurRects = 4;
        let squareSize = 600;
        let selectedScheme = Math.floor(Math.random() * colorSchemes.length);
        let colors = colorSchemes[selectedScheme].colors;
        let bgColor = colorSchemes[selectedScheme].background;
        let maxRecursionDepth = 7;
        let frameSkip = 1;

        p.setup = function () {
            
            let existingCanvas = document.getElementById('defaultCanvas0');
            if (existingCanvas) {
                existingCanvas.remove();
            }

            let parentElement = document.getElementById(containerId);
            if (parentElement) {
                squareSize = Math.min(parentElement.offsetWidth, 400);
                let canvas = p.createCanvas(squareSize, squareSize);
                canvas.parent(parentElement);
                p.rectMode(p.CORNER);
                p.noStroke();
                divideRect(0, 0, squareSize, squareSize, 0);
                p.frameRate(24);
            } else {
                console.error("Parent element not found.");
            }
        };

        p.draw = function () {
            if (p.frameCount % frameSkip === 0) {
                p.background(bgColor);
                for (let r of rects) {
                    r.update();
                    r.display();
                }
            }
        };

        function divideRect(x, y, w, h, depth) {
            if (depth > maxRecursionDepth) return;

            let probability = p.map(w, 0, p.width, 0, 0.8);
            if (p.min(w, h) > 80 && p.random() > probability) {
                if (w >= h) {
                    let rndw = p.random(0.4, 0.6) * w;
                    divideRect(x, y, rndw, h, depth + 1);
                    divideRect(x + rndw, y, w - rndw, h, depth + 1);
                } else {
                    let rndh = p.random(0.4, 0.6) * h;
                    divideRect(x, y, w, rndh, depth + 1);
                    divideRect(x, y + rndh, w, h - rndh, depth + 1);
                }
            } else {
                form(x, y, w, h);
            }
        }

        function form(x, y, w, h) {
            let c1 = p.int(p.random(2, 4));
            let c2 = p.int(p.random(2, 4));
            let ww = w / c1;
            let hh = h / c2;
            let off = p.min(ww, hh) * p.random(0.1, 0.2);

            let col1 = p.color(p.random(colors));
            let col2 = p.color(p.random(colors));

            while (col1 === col2) {
                col2 = p.color(p.random(colors));
            }

            let isBlurred = p.random() > 0.7 && rects.filter(r => r.isBlurred).length < maxBlurRects;
            rects.push(new MovingRect(x, y, w, h, col1, col2, isBlurred));

            for (let i = 0; i < c1; i++) {
                for (let j = 0; j < c2; j++) {
                    let xx = x + i * ww;
                    let yy = y + j * hh;
                    let innerCol1 = p.color(p.random(colors));
                    let innerCol2 = p.color(p.random(colors));

                    while (innerCol1 === innerCol2) {
                        innerCol2 = p.color(p.random(colors));
                    }

                    isBlurred = p.random() > 0.7 && rects.filter(r => r.isBlurred).length < maxBlurRects;
                    rects.push(new MovingRect(xx, yy, ww - off, hh - off, innerCol1, innerCol2, isBlurred));
                }
            }
        }

        class MovingRect {
            constructor(x, y, w, h, col1, col2, isBlurred) {
                this.originX = x;
                this.originY = y;
                this.originW = w;
                this.originH = h;
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.col1 = col1;
                this.col2 = col2;
                this.isBlurred = isBlurred;
                this.offsetX = p.random(p.TWO_PI);
                this.offsetY = p.random(p.TWO_PI);
                this.speedX = p.random(0.001, 0.005);
                this.speedY = p.random(0.001, 0.005);
                this.amplitudeX = p.random(20, 30);
                this.amplitudeY = p.random(20, 30);
                this.scaleOffset = p.random(p.TWO_PI);
                this.scaleSpeed = p.random(0.004, 0.008);
            }

            update() {
                this.offsetX += this.speedX;
                this.offsetY += this.speedY;
                this.scaleOffset += this.scaleSpeed;

                this.x = this.originX + p.sin(this.offsetX) * this.amplitudeX;
                this.y = this.originY + p.sin(this.offsetY) * this.amplitudeY;

                this.w = this.originW * (1 + 0.4 * p.sin(this.scaleOffset));
                this.h = this.originH * (1 + 0.4 * p.cos(this.scaleOffset * 1.5));
            }

            display() {
                if (this.isBlurred) {
                    p.push();
                    p.filter(p.BLUR, 4);
                    this.fillGradientRect(this.x, this.y, this.w, this.h, this.col1, this.col2);
                    p.pop();
                } else {
                    this.fillGradientRect(this.x, this.y, this.w, this.h, this.col1, this.col2);
                }
            }

            fillGradientRect(x, y, w, h, col1, col2) {
                let step = 0.01;
                for (let i = 0; i <= 1; i += step) {
                    let interCol = p.lerpColor(col1, col2, i);
                    p.stroke(interCol);
                    p.line(x + i * w, y, x + i * w, y + h);
                }
            }
        }
    };
}

function initP5Instance(id) {
    let existingCanvas = document.getElementById('defaultCanvas0');
    if (existingCanvas) {
        existingCanvas.remove(); 
    }
    new p5(createP5Instance(id, true));
}

document.addEventListener('DOMContentLoaded', function() {
    initP5Instance('p5-animation-1');
    initP5Instance('p5-animation-2');
});



