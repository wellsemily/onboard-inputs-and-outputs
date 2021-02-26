input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . # . # .
            . . # . .
            # . . . #
            `)
    }
})
music.playMelody("E B C5 G D E A A ", 120)
music.stopAllSounds()
basic.forever(function () {
	
})
