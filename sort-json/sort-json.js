var data = [
    { "id": "105", "name": "abc" },
    { "id": "109", "name": "abc2" },
    { "id": "107", "name": "abc3" },
    { "id": "106", "name": "abc4" }
];

data.sort(function (a, b) {
    return a.id.localeCompare(b.id);
});

document.write('<pre>' + JSON.stringify(data, 0, 4) + '</pre>');
