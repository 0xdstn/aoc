#!/usr/bin/env python3

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

l1 = data[0].split(',')
l2 = data[1].split(',')

points1 = []
points2 = []

x = 0
y = 0
for point in l1:
    direction = point[0]
    distance = point[1:]
    i = 1
    while i <= int(distance):
        if direction == 'R':
            x = x + 1
        elif direction == 'L':
            x = x - 1
        elif direction == 'U':
            y = y + 1
        elif direction == 'D':
            y = y - 1
        points1.append(str(x) + ',' + str(y))
        i += 1

x = 0
y = 0
for point in l2:
    direction = point[0]
    distance = point[1:]
    i = 1
    while i <= int(distance):
        if direction == 'R':
            x = x + 1
        elif direction == 'L':
            x = x - 1
        elif direction == 'U':
            y = y + 1
        elif direction == 'D':
            y = y - 1
        points2.append(str(x) + ',' + str(y))
        i += 1

common = list(set(points1).intersection(points2))

lowest = 0
for point in common:
    coords = point.split(',')
    x = int(coords[0])
    y = int(coords[1])

    if x < 0: x = x*-1
    if y < 0: y = y*-1

    if lowest == 0 or x+y < lowest:
        lowest = x+y

print('')
print(lowest)
