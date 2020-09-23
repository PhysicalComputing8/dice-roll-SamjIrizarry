// Great Job! You moved the code inside of the onShake event trigger. Now it will run each time the micro:bit is shaken.
input.onGesture(Gesture.Shake, function () {
    // A variable is a place where your program can store a value. We need a place to store the result of the roll, so I created a variable called roll.
    // Nice work! You correctly changed the minimum and maximum of the numbers that will be generated, so it resembles the way dice behave.
    roll = randint(1, 6)
    // This is a good start, but I was hoping to see at least some of the advanced project completed by the end of class today.
    // 
    // Please let me know if you are having any trouble, so I can help you keep from falling behind.
    basic.showNumber(roll)
})
// Code added here will run once when the program starts
let roll = 0
basic.showString("Shake to roll the dice")
