const table = $("#project-list");

const sampTable = $("<table>");

let sample = [
    { name: "Project 1", type: "Javascript", date: dayjs() },
    { name: "Project 2", type: "HTML", date: dayjs() },
    { name: "Project 3", type: "CSS", date: dayjs() }
]

for (let i = 0; i < sample.length; i++) {
    let row = makeRow(sample[i]);
    table.append(row);
}

function makeRow(project) {
    let newCell;
    let newRow = $("<tr>");
    for (var i=0; i<3; i++) {
        newCell = $("<td>");
        newRow.append(newCell);
    }
    newRow.children().eq(0).text(project.name);
    newRow.children().eq(1).text(project.type);
    newRow.children().eq(2).text(project.date);

    return newRow;
}