// const { ipcRenderer } = require('electron')

// document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
//     const isDarkMode = await ipcRenderer.invoke('dark-mode:toggle')
//     document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
// })

// document.getElementById('reset-to-system').addEventListener('click', async () => {
//     await ipcRenderer.invoke('dark-mode:system')
//     document.getElementById('theme-source').innerHTML = 'System'
// })

document.getElementById('r0-result').addEventListener('click', async() => {
    var L = parseFloat(document.getElementById('r0-L').value)
    var dt = parseFloat(document.getElementById('r0-dt').value)
    var d3 = parseFloat(document.getElementById('r0-d3').value)
    var a3 = parseFloat(document.getElementById('r0-a3').value)

    var result = (Math.pow(L,2) + Math.pow((1.5 - d3 / (2 * dt)),2) - 1) / (2 * (1 - L * Math.sin(a3 * (2 * Math.PI / 360)) - (1.5 - d3 / (2 * dt)) * Math.cos(a3 * (2 * Math.PI / 360))))

    document.getElementById('dialog-content').innerHTML = result
})

document.getElementById('x0-result').addEventListener('click', async() => {
    var L = parseFloat(document.getElementById('x0-L').value)
    var R0 = parseFloat(document.getElementById('x0-r0').value)
    var a3 = parseFloat(document.getElementById('x0-a3').value)

    document.getElementById('dialog-content').innerHTML = L + R0 * Math.sin(a3 * (2 * Math.PI / 360))
})

document.getElementById('y0-result').addEventListener('click', async() => {
    var R0 = parseFloat(document.getElementById('y0-r0').value)
    var a3 = parseFloat(document.getElementById('y0-d3').value)
    var d3 = parseFloat(document.getElementById('y0-d3').value)

    document.getElementById('dialog-content').innerHTML = R0 * Math.cos(a3 * (2 * Math.PI / 360)) - d3 / 2
})