let szám = 0
input.onGesture(Gesture.Shake, function () {
    szám = randint(1, 6)
    if (szám == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (szám == 2) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
    } else if (szám == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (szám == 4) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            . # # # #
            . . . # .
            `)
    } else if (szám == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (szám == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
