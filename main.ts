bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
bluetooth.startUartService()
bluetooth.startAccelerometerService()
bluetooth.startMagnetometerService()
bluetooth.startTemperatureService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
basic.showString("S")
