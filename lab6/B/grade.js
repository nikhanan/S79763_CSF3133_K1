/*
ERROR LIST

Error 1 (Line 9): onsubmit should return checkMark()
Error 2 (Line 5): if(name = "") should be if(name == "")
Error 3 (Line 9): isNan() should be isNaN()
Error 4 (Line 14): mark < 0 && mark > 100 should be mark < 0 || mark > 100
Error 5 (Line 28): getElementByID() should be getElementById()
Error 6 (Line 30): style.colour should be style.color
Error 7 (Line 38): Loop starts at i = 1 it should use i = 0 causing Grade A missing
Error 8 (Line 42): innerHtml should be innerHTML
*/

// Check Mark Function
function checkMark() {

    let name =
        document.forms["gradeForm"]["name"].value;

    let mark =
        document.forms["gradeForm"]["mark"].value;

    // Empty Name
    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }

    // Empty Mark
    if (mark == "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Non Numeric Check
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    // Range Check
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;

    if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 65) {
        grade = "B";
    }
    else if (mark >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Color by Grade
    if (grade == "A" || grade == "B") {
        document.getElementById("result").style.color =
            "green";
    }
    else if (grade == "C") {
        document.getElementById("result").style.color =
            "orange";
    }
    else {
        document.getElementById("result").style.color =
            "red";
    }

    // Date and Time
    document.getElementById("dateTime").innerHTML =
        "Checked on: " + new Date();

    return false;
}

// Random Mark Button
function randomMark() {

    let randomNumber =
        Math.floor(Math.random() * 101);

    document.getElementById("mark").value =
        randomNumber;
}

// Show Grade Table
function showTable() {

    let grades =
        ["A", "B", "C", "F"];

    let ranges =
        ["80-100", "65-79", "50-64", "0-49"];

    let tableHTML =
        "<table>" +
        "<tr>" +
        "<th>Grade</th>" +
        "<th>Range</th>" +
        "</tr>";

    for (let i = 0; i < grades.length; i++) {

        tableHTML +=
            "<tr>" +
            "<td>" + grades[i] + "</td>" +
            "<td>" + ranges[i] + "</td>" +
            "</tr>";
    }

    tableHTML += "</table>";

    document.getElementById("tableContainer")
        .innerHTML = tableHTML;
}