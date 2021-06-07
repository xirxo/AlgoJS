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
  
var count_container = document.getElementById("count");
function generate_idx() {
  for (var i = 0; i < 20; i++) {

    var array_ele2 = document.createElement("div");
    array_ele2.classList.add("block2");
    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 30}px)`;
  
    var array_ele_label2 = document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = i;

    array_ele2.appendChild(array_ele_label2);
    count_container.appendChild(array_ele2);
  }
}
  
async function Heapify(n, i) {
  var blocks = document.querySelectorAll(".block");
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (
    l < n &&
    Number(blocks[l].childNodes[0].innerHTML) >
      Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = l;
  
  if (
    r < n &&
    Number(blocks[r].childNodes[0].innerHTML) >
      Number(blocks[largest].childNodes[0].innerHTML)
  )
    largest = r;
  
  if (largest != i) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[largest].style.height;
    blocks[largest].style.height = temp1;
    blocks[i].childNodes[0].innerText =
    blocks[largest].childNodes[0].innerText;
    blocks[largest].childNodes[0].innerText = temp2;
  
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );
  
    await Heapify(n, largest);
  }
}

async function HeapSort(n) {
  var blocks = document.querySelectorAll(".block");
  
  for (var i = n / 2 - 1; i >= 0; i--) {
    await Heapify(n, i);
  }
  
  for (var i = n - 1; i > 0; i--) {
  
    
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[0].style.height;
    blocks[0].style.height = temp1;
    blocks[i].childNodes[0].innerText = 
    blocks[0].childNodes[0].innerText;
    blocks[0].childNodes[0].innerText = temp2;
  
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );
  
    
    await Heapify(i, 0);
  }
}
  
generatearray();
generate_idx();
HeapSort(20);
