function onEdit(e){
  let ss = e.source;
  let range = e.range;
  let sheet = range.getSheet();
  let sheetName = sheet.getName();
  
  // Check if the edit is in the "Database" sheet or outside the desired column range
  if (sheetName === "Database" || range.columnStart < 1 || range.columnStart > 58) return;

  // Clear the content of the edited cell
  range.clearContent();

  // Get the value and row from the active sheet
  let value = e.value;
  let row = range.rowStart;

  // Access the "Database" sheet
  let db = ss.getSheetByName("Database");

  // Check if the row exists in the "Database" sheet
  let numRows = db.getLastRow();
  if (row > numRows) {
    // If the row doesn't exist, append a new row to the "Database" sheet
    db.appendRow(new Array(row - numRows).fill(""));
  }

  // Set the value in the corresponding cell in the "Database" sheet
  db.getRange(row, range.columnStart).setValue(value);
}