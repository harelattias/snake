def draw_snake():
    snake_pxl_loc = 0
    while snake_pxl_loc <= len(snake_loc_x) + -1:
        led.plot(snake_loc_x[snake_pxl_loc], snake_loc_y[snake_pxl_loc])
        snake_pxl_loc += 1
def update_snake_y():
    global snake_temp_loc_y
    snake_temp_loc_y = snake_loc_y[len(snake_loc_x) - 1] + snake_velocity_y
    if snake_temp_loc_y == 5:
        snake_temp_loc_y = 0
    if snake_temp_loc_y == -1:
        snake_temp_loc_y = 4
    snake_loc_y.append(snake_temp_loc_y)
    snake_loc_y.remove_at(0)

def on_button_pressed_a():
    a()
input.on_button_pressed(Button.A, on_button_pressed_a)

def b():
    global snake_velocity_x, snake_velocity_y
    if snake_velocity_x == 0:
        snake_velocity_x = snake_velocity_y * -1
        snake_velocity_y = 0
    elif snake_velocity_y == 0:
        snake_velocity_y = snake_velocity_x
        snake_velocity_x = 0
def update_snake_x():
    global snake_temp_loc_x
    snake_temp_loc_x = snake_loc_x[len(snake_loc_x) - 1] + snake_velocity_x
    if snake_temp_loc_x == -1:
        snake_temp_loc_x = 4
    if snake_temp_loc_x == 5:
        snake_temp_loc_x = 0
    snake_loc_x.append(snake_temp_loc_x)
    snake_loc_x.remove_at(0)
def a():
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

def on_button_pressed_b():
    b()
input.on_button_pressed(Button.B, on_button_pressed_b)

snake_temp_loc_x = 0
snake_velocity_x = 0
snake_temp_loc_y = 0
snake_loc_y: List[number] = []
snake_loc_x: List[number] = []
snake_velocity_y = 0
snake_velocity_y = 1
snake_loc_x = [1, 1, 1]
snake_loc_y = [2, 1, 0]

def on_forever():
    basic.clear_screen()
    draw_snake()
    update_snake_x()
    update_snake_y()
    basic.pause(250)
basic.forever(on_forever)
