console.log($("#colorPicker").val()); //select color input
console.log($("#inputHeight").val()); //select size input (height,weight)
console.log($("#inputWeight").val());

$("input[type='submit']").on("click", function(event) {
  event.preventDefault();

  var height = $("#inputHeight").val();
  var width = $("#inputWeight").val();

  $("#pixelCanvas").empty();
  makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
//for number up to height, create a table row
// & for number up to width, create a table data

function makeGrid(height, width) {
    for (i=0; i < height; i++) {
  $("#pixelCanvas").append($("<tr></tr>"));
  for (j=0; j < width; j++) {
    $("tr").last().append($("<td></td>"));
  }}

    $("#pixelCanvas").on("click","td", function() {
  $(this).css("background-color", $("#colorPicker").val());
});

  $("#pixelCanvas").on("dblclick", 'td', function() {
    $(this).css('background-color', '')});
}
