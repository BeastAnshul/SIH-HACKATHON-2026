const deviceData = [
    { name: 'Router Gateway', ip: '192.168.1.1', mac: '00:1A:2B:3C:4D:5E', status: 'SECURE', type: 'Gateway', bw: '15.2 Mbps' },
    { name: 'Anshul-PC', ip: '192.168.1.5', mac: '24:A0:74:89:C8:D7', status: 'SECURE', type: 'Workstation', bw: '8.7 Mbps' },
    { name: 'Unknown-Device', ip: '192.168.1.12', mac: '10:98:76:54:32:10', status: 'SECURE', type: 'IoT Node', bw: '0.1 Mbps' },
    { name: 'Guest-Phone', ip: '192.168.1.20', mac: '88:99:AA:BB:CC:DD', status: 'VULNERABLE', type: 'Mobile', bw: '2.5 Mbps' }
];

function simulateLiveData() {
    const rows = document.querySelectorAll('.device-table tbody tr');
    rows.forEach((row, index) => {
        const data = deviceData[index];
        let currentBw = parseFloat(data.bw);
        const change = (Math.random() - 0.5) * 0.4;
        data.bw = (Math.max(0.1, currentBw + change)).toFixed(1) + ' Mbps';
        row.querySelector('.bw-col').innerText = data.bw;
    });
}

function populateTable() {
    const tbody = document.querySelector('#device-table-body');
    deviceData.forEach(device => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="device-col">${device.name}</td>
            <td class="type-col">${device.type}</td>
            <td class="ip-col">${device.ip}</td>
            <td class="mac-col">${device.mac}</td>
            <td class="bw-col">${device.bw}</td>
            <td class="status-col status-${device.status.toLowerCase()}">${device.status}</td>
        `;
        tbody.appendChild(row);
    });
}

populateTable();
setInterval(simulateLiveData, 2500);