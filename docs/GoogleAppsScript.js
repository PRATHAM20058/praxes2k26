// ==========================================
// PRAXES 2K26-27 GOOGLE SHEETS WEBHOOK
// ==========================================
// Instructions for User:
// 1. Create a new Google Sheet inside your Google Drive.
// 2. Add these Headings to your columns (A to N):
//    Timestamp, Ticket ID, College Name, Event, Fee, Team Name,
//    Full Name, Department, Semester, Enrollment No, Contact No,
//    Email ID, Payment UPI, Transaction ID
// 3. Get your Google Sheet ID from its URL (docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit)
// 4. Replace "PUT_YOUR_SHEET_ID_HERE" with your actual Sheet ID!
// 5. Click "Deploy" -> "New deployment".
// 6. Choose "Web app", Execute as: "Me", Access: "Anyone".
// 7. Copy the "Web app URL" and place it in the `src/config.js` of your project!

var SHEET_ID = "PUT_YOUR_SHEET_ID_HERE";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Open the Spreadsheet explicitly by ID
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];

    // Append the row
    sheet.appendRow([
      new Date(),
      data.ticketId,
      data.collegeName,
      data.selectedEvent,
      data.eventFee,
      data.teamName || "N/A",
      data.fullName,
      data.department,
      data.semester,
      "'" + data.enrollmentNo,
      "'" + data.contactNo,
      data.emailId,
      data.paymentUpiId,
      data.transactionId || "N/A"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "ticket": data.ticketId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
