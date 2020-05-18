// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var btn = d3.select('button');

renderData(tableData);
btn.on('click', handleClick);

function renderData(data) {
    tbody.html('');

    data.forEach(obj => {
        var row = tbody.append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        })
    });
};

function handleClick() {
    tableData = data;
    var date = d3.select('input').property('value');

    
    if (date) {
        tableData = tableData.filter(obj => obj.datetime == date);
        console.log(date);
    };

    d3.select('input').property('value','');
    
    renderData(tableData);
}