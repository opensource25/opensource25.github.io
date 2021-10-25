function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function onload() {
    alert("test7")
    $("#logo").attr("src", `logo${random(1, 2)}.svg`);
    update_note_amount();
}

function update_note_amount() {
  var note_amount = "test123"
  console.log(note_amount);
  console.log($("#note-amount-range-slider").value);
  $("#note-amount").text(`Noten Anzahl: ${note_amount}`);
}

$("#note-amount-range-slider").onmouseover = update_note_amount;