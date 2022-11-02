function draw_snake() {
    
    while (snake_pxl_loc <= snake_loc_x.length + -1) {
        led.plot(snake_loc_x[snake_pxl_loc], snake_loc_y[snake_pxl_loc])
        snake_pxl_loc += 1
    }
}

function update_snake_y() {
    
    snake_temp_loc_y = snake_loc_y[snake_loc_x.length - 1] + snake_velocity_y
    if (snake_temp_loc_y == 5) {
        snake_temp_loc_y = 0
    }
    
    if (snake_temp_loc_y == -1) {
        snake_temp_loc_y = 4
    }
    
    snake_loc_y.push(snake_temp_loc_y)
    snake_loc_y.removeAt(0)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    a()
})
function b() {
    
    if (snake_velocity_x == 0) {
        snake_velocity_x = snake_velocity_y * -1
        snake_velocity_y = 0
    } else if (snake_velocity_y == 0) {
        snake_velocity_y = snake_velocity_x
        snake_velocity_x = 0
    }
    
}

function update_snake_x() {
    
    snake_temp_loc_x = snake_loc_x[snake_loc_x.length - 1] + snake_velocity_x
    if (snake_temp_loc_x == -1) {
        snake_temp_loc_x = 4
    }
    
    if (snake_temp_loc_x == 5) {
        snake_temp_loc_x = 0
    }
    
    snake_loc_x.push(snake_temp_loc_x)
    snake_loc_x.removeAt(0)
}

function a() {
    
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
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    b()
})
let snake_temp_loc_x = 0
let snake_velocity_x = 0
let snake_temp_loc_y = 0
let snake_pxl_loc = 0
let snake_loc_y : number[] = []
let snake_loc_x : number[] = []
let snake_velocity_y = 0
snake_velocity_y = 1
snake_loc_x = [1, 1, 1]
snake_loc_y = [2, 1, 0]
basic.forever(function on_forever() {
    basic.clearScreen()
    draw_snake()
    update_snake_x()
    update_snake_y()
    basic.pause(250)
})
