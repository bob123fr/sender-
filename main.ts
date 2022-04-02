input.onButtonPressed(Button.A, function () {
    radio.sendString("Spin")
})
radio.setGroup(1)
basic.showLeds(`
    # # # . .
    # . # # #
    # # # . #
    . . # # #
    . . # . .
    `)
