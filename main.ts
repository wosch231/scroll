input.onButtonPressed(Button.A, function () {
    scrollbit.clear()
    scrollbit.setImage(
    images.createBigImage(`
        # # . . . . . . # #
        . # # . . . . # # .
        . . # # . . # # . .
        . . . # # # # . . .
        . . . . # # . . . .
        `),
    0,
    0,
    64
    )
    scrollbit.show()
})
input.onButtonPressed(Button.AB, function () {
    scrollbit.clear()
    scrollbit.setPixel(8, 3, 128)
    scrollbit.show()
})
input.onButtonPressed(Button.B, function () {
    scrollbit.clear()
    scrollbit.scrollText("hallo", 64, 50)
    scrollbit.show()
})
basic.showLeds(`
    . # . . .
    . # . . .
    . . . . .
    . # . . .
    . # . . .
    `)
