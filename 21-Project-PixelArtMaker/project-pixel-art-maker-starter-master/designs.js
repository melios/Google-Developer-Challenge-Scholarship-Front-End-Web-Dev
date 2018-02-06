function makeGrid() {
  //defaults
  //get  rows, columns, table & color
  const rows = $('#input_height').val();
  const columns = $('#input_width').val();
  const table = $('#pixel_canvas');

  //empty the table
  table.children().remove();

  //create rows and columns
  for (let i=0; i<rows; i++) {
    table.append('<tr></tr>');
    for (let j=0; j<columns; j++) {
      table.children().last().append('<td></td>');
    }
  }
  //pick a color
  table.on('click', 'td', function() {
    const color = $('#colorPicker').val();
    $(this).attr('bgcolor', color);
  });
}
  //calling makeGrid function
  $('#submit').on('click', function(event) {
   event.preventDefault();
   makeGrid();
  });
  //remove color
  $('#pixel_canvas').on('dblclick', 'td', function(event) {
    $(this).attr('bgcolor', '');
  });
