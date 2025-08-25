const fs = require('fs');
const path = require('path');


const results = JSON.parse(fs.readFileSync(path.join(__dirname, '../results.json'), 'utf8'));

let models = [];
results.forEach(device => {
  device.benchmarks.forEach(b => {
    if (!models.includes(b.model)) models.push(b.model);
  });
});



let table = `<table><caption>Device & Model Performance</caption><thead>`;
// Header row: device info, then model columns with quant and size
table += '<tr>';
table += '<th rowspan="2">Manufacturer</th><th rowspan="2">Model</th><th rowspan="2">CPU</th><th rowspan="2">RAM</th><th rowspan="2">GPU</th><th rowspan="2">VRAM</th>';
models.forEach(m => {
  // Find first device with this model to get quant and size
  let bm = null;
  for (const device of results) {
    bm = device.benchmarks.find(b => b.model === m);
    if (bm) break;
  }
  table += `<th>${m} (${bm ? bm.quant : '-'}) (${bm ? bm.size : '-'})</th>`;
});
table += '</tr>';
// Second header row: TTFT and TPS labels
table += '<tr>';
models.forEach(() => {
  table += '<th>TTFT</th>';
});
table += '</tr>';
table += '</thead><tbody>';
results.forEach(device => {
  // TTFT row
  table += `<tr><td>${device.manufacturer}</td><td>${device.model}</td><td>${device.cpu}</td><td>${device.ram}</td><td>${device.gpu}</td><td>${device.vram}</td>`;
  models.forEach(m => {
    let bm = device.benchmarks.find(b => b.model === m);
    table += `<td>${bm ? bm.ttft_s : '-'}</td>`;
  });
  table += '</tr>';
  // TPS row
  table += `<tr><td></td><td></td><td></td><td></td><td></td><td></td>`;
  models.forEach(m => {
    let bm = device.benchmarks.find(b => b.model === m);
    table += `<td>${bm ? bm.tps : '-'}</td>`;
  });
  table += '</tr>';
});
table += '</tbody></table>';


const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Benchmarks Results</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>AI Benchmarks Results</h1>
  <div id="results-table">
    ${table}
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../docs/index.html'), html);
console.log('Static HTML generated in docs/index.html');