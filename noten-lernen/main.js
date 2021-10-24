function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function onload() {
    var img_number = random(1, 2)
    $("#logo").attr("src", `logo${random(1, 2)}.png`)
}