var socket = require('socket.io-client')('http://shma.jp:4040');
var SerialPort = require('serialport').SerialPort;
var serial = new SerialPort('/dev/tty.usbmodem1451',{
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

socket.on('voicedata', function (data) {
    console.log(data);
    serial.write(data + "\n");
});
