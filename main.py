def on_button_pressed_a():
    global snake_velocity_x, snake_velocity_y
    if snake_velocity_x == 0 and snake_velocity_y == -1:
        snake_velocity_x = -1
        snake_velocity_y = 0
    elif snake_velocity_x == 0 and snake_velocity_y == 1:
        snake_velocity_x = 1
        snake_velocity_y = 0
    elif snake_velocity_x == 1 and snake_velocity_y == 0:
        snake_velocity_x = 0
        snake_velocity_y = -1
    elif snake_velocity_x == -1 and snake_velocity_y == 0:
        snake_velocity_x = 0
        snake_velocity_y = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global snake_velocity_x, snake_velocity_y
    if snake_velocity_x == 0:
        snake_velocity_x = snake_velocity_y * -1
        snake_velocity_y = 0
    elif snake_velocity_y == 0:
        snake_velocity_y = snake_velocity_x
        snake_velocity_x = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

snake_velocity_y = 0
snake_velocity_x = 0
snake_loc_x = 2
snake_loc_y = 2
snake_velocity_x = 0
snake_velocity_y = -1

def on_forever():
    global snake_loc_x, snake_loc_y
    basic.clear_screen()
    led.plot(snake_loc_x, snake_loc_y)
    basic.pause(200)
    snake_loc_x = snake_loc_x + snake_velocity_x
    if snake_loc_x == -1:
        snake_loc_x = 4
    if snake_loc_x == 5:
        snake_loc_x = 0
    snake_loc_y = snake_loc_y + snake_velocity_y
    if snake_loc_y == 5:
        snake_loc_y = 0
    if snake_loc_y == -1:
        snake_loc_y = 4
basic.forever(on_forever)
