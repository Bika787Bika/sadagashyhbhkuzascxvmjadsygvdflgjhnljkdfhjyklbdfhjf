input.onButtonPressed(Button.A, function () {
    x += alphabet[i]
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    if (i == 0) {
        i = alphabet.length - 1
    } else {
        i += -1
    }
    basic.showString("" + (alphabet[i]))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    x = ""
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
    basic.showString("" + (alphabet[i]))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString(x)
    basic.clearScreen()
    basic.showString("" + (alphabet[i]))
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    if (i == alphabet.length - 1) {
        i = 0
    } else {
        i += 1
    }
    basic.showString("" + (alphabet[i]))
})
let alphabet: string[] = []
let i = 0
let x = ""
x = ""
i = 0
alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.showString("" + (alphabet[i]))
