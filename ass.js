let sat = document.getElementById(`sat`);
let cont = document.getElementById(`cont`);
let bright = document.getElementById(`bright`);
let sepia = document.getElementById(`sepia`);
let gray = document.getElementById(`gray`);
let blu = document.getElementById(`blur`);
let hue = document.getElementById(`hue`);
let download = document.getElementById(`download`);

let upload = document.getElementById(`upload`);
let img = document.getElementById(`img`);
const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);

let reset = document.querySelector(`span`);
let picBox = document.querySelector(`.pic`);

window.onload = function () {
  download.style.cssText = `display: none;`;
  reset.style.cssText = `display: none;`;
};

upload.onchange = function () {
  restValue();
  download.style.cssText = `display: block;`;
  reset.style.cssText = `display: block;`;
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = `none`;
  };
};
// محاوله فاشله للعمل بال oop
// class Filter {
//   constructor(img, sat, cont, bright, sepia, gray, blur, hue) {
//     this.img = img;
//     this.sat = sat.value;
//     this.cont = cont.value;
//     this.bright = bright.value;
//     this.sepia = sepia.value;
//     this.gray = gray.value;
//     this.blur = blu.value;
//     this.hue = hue.value;
//   }
//   makeFilter() {
//     img.style.filter = `saturate(${this.sat})`;
//     img.style.filter = `saturate(${this.cont})`;
//     img.style.filter = `saturate(${this.bright})`;
//     img.style.filter = `saturate(${this.sepia})`;
//     img.style.filter = `saturate(${this.gray})`;
//     img.style.filter = `saturate(${this.blur})`;
//     img.style.filter = `saturate(${this.hue})`;
//   }
// }
// sat.addEventListener(`input`, function () {
//   let filter = new Filter(img, sat, cont, bright, sepia, gray, blu, hue);
//   filter.makeFilter();
// });
// filter:saturate(${sat.value}%) contrast(${cont.value}%) brightness(${bright.value}%) sepia(${sepia.value}%) grayscale(${gray}) blur(${blu.value}px) hue-rotate(${hue.value}deg)

let filters = document.querySelectorAll(`ul li input`);
filters.forEach((filter) => {
  filter.addEventListener(`input`, function () {
    // ctx.style.cssText = `filter:saturate(${sat.value}%) contrast(${cont.value}%) brightness(${bright.value}%) sepia(${sepia.value}%) grayscale(${gray.value}) blur(${blu.value}px) hue-rotate(${hue.value}deg)`;
    ctx.filter = `      saturate(${sat.value}%)
                        contrast(${cont.value}%)
                        brightness(${bright.value}%)
                        sepia(${sepia.value}%)
                        grayscale(${gray.value})
                        blur(${blu.value}px)
                        hue-rotate(${hue.value}deg)`;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});

function restValue() {
  img.style.filter = `none`;
  ctx.filter = `none;`;
  gray.value = `0`;
  sat.value = `100`;
  cont.value = `100`;
  bright.value = `100`;
  sepia.value = `0`;
  blu.value = `0`;
  hue.value = `0`;
}
reset.onclick = function () {
  restValue();
};
download.onclick = function () {
  download.href = canvas.toDataURL(`image/jpeg`);
};
