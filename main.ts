input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltge = reading * (1000 / 340)
    basic.showNumber(voltge)
})
let voltge = 0
let reading = 0
basic.showString("Battery Tester")
basic.forever(function () {
	
})
