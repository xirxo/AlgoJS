# BubbleSort
🧠 A simple bubble sort visualizer in HTML, CSS and JS. \
🔗 https://github.com/xirxo/BubbleSort/ \
🔗 https://bubblesort.xirxo.repl.co/

### Quick Note
`ctrl+r` to reset and generate a new array.

### HTML
[`index.html`](https://github.com/xirxo/BubbleSort/blob/main/index.html)
```html
<html lang="en">
  
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content=
        "width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
</head>
  
<body>
    <br />
    <p class="header">Bubble Sort</p>
  
    <div id="array"></div>
    <script src="script.js"></script>
</body>
  
</html>
```
### CSS
[`style.css`](https://github.com/xirxo/BubbleSort/blob/main/style.css)
```css
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
  
.header {
    font-size: 20px;
    text-align: center;
}
  
#array {
    background-color: white;
    height: 413px;
    width: 598px;
    margin: auto;
    position: relative;
    margin-top: 64px;
}
  
.block {
    width: 28px;
    background-color: #6b5b95;
    position: absolute;
    bottom: 0px;
    transition: 0.2s all ease;
}
  
.block_id {
    position: absolute;
    color: black;
    margin-top: -20px;
    width: 100%;
    text-align: center;
}
```
### JS
[`script.js`](https://github.com/xirxo/BubbleSort/blob/main/script.js)
```js
var container = document.getElementById("array");

function generatearray() {
    for (var i = 0; i < 20; i++) {
        var value = Math.ceil(Math.random() * 100);
        var array_ele = document.createElement("div");
  
        array_ele.classList.add("block");
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

function swap(el1, el2) {
    return new Promise((resolve) => {
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 200);
        });
    });
}

async function BubbleSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");

    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
  
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }
  
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}

generatearray();
setTimeout(() => {
    BubbleSort();
}, 2000);
```
