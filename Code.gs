function scanDriveFiles() {
  var folderId = "15y-xrxfE9Xhaxw8eHlkrmTn8wOlqOWfq"; 
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();

  // Header Row
  sheet.appendRow([
    "File Name",
    "File ID",
    "File Type",
    "Owner",
    "Date Created",
    "Last Modified",
    "File Size (Bytes)",
    "File URL"
  ]);

  while (files.hasNext()) {
    var file = files.next();

    sheet.appendRow([
      file.getName(),
      file.getId(),
      file.getMimeType(),
      file.getOwner().getEmail(),
      file.getDateCreated(),
      file.getLastUpdated(),
      file.getSize(),
      file.getUrl()
    ]);
  }

  Logger.log("Drive scan completed!");
}
