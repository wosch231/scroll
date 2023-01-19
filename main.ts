input.onButtonPressed(Button.A, function () {
    scrollbit.clear()
    scrollbit_z.Kreis(0, 0, 8, 64)
    scrollbit.show()
})
input.onButtonPressed(Button.AB, function () {
    scrollbit.clear()
    scrollbit_z.scrollbit_Line1(0, 4, 7, 2, 64)
    scrollbit_z.scrollbit_Line1(8, 2, 16, 4, 64)
    scrollbit.setPixel(8, 1, 160)
    scrollbit.show()
})
input.onButtonPressed(Button.B, function () {
    scrollbit.clear()
    scrollbit.scrollText("I{Heart}", 64, 50)
    scrollbit.show()
})
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
scrollbit.clear()
scrollbit.setAll(50)
scrollbit.show()
