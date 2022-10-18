input.onButtonPressed(Button.A, function () {
    if (snake_velocity_x == 0 && snake_velocity_y == -1) {
        snake_velocity_x = -1
        snake_velocity_y = 0
    } else if (snake_velocity_x == 0 && snake_velocity_y == 1) {
        snake_velocity_x = 1
        snake_velocity_y = 0
    } else if (snake_velocity_x == 1 && snake_velocity_y == 0) {
        snake_velocity_x = 0
        snake_velocity_y = -1
    } else if (snake_velocity_x == -1 && snake_velocity_y == 0) {
        snake_velocity_x = 0
        snake_velocity_y = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (snake_velocity_x == 0) {
        snake_velocity_x = snake_velocity_y * -1
        snake_velocity_y = 0
    } else if (snake_velocity_y == 0) {
        snake_velocity_y = snake_velocity_x
        snake_velocity_x = 0
    }
})
function apple_random_location () {
    apple_loc_x = randint(0, 4)
    apple_loc_y = randint(0, 4)
}
let apple_loc_y = 0
let apple_loc_x = 0
let snake_velocity_y = 0
let snake_velocity_x = 0
let snake_loc_x = 2
let snake_loc_y = 2
snake_velocity_x = 0
snake_velocity_y = -1
basic.forever(function () {
    basic.clearScreen()
    led.plot(apple_loc_x, apple_loc_y)
    led.plot(snake_loc_x, snake_loc_y)
    basic.pause(200)
    snake_loc_x = snake_loc_x + snake_velocity_x
    if (snake_loc_x == -1) {
        snake_loc_x = 4
    }
    if (snake_loc_x == 5) {
        snake_loc_x = 0
    }
    snake_loc_y = snake_loc_y + snake_velocity_y
    if (snake_loc_y == 5) {
        snake_loc_y = 0
    }
    if (snake_loc_y == -1) {
        snake_loc_y = 4
    }
})
