#!/usr/bin/env python3

#with open('input-test.txt') as f:
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

distances = []

for point in common:
    coords = point.split(',')
    goalX = int(coords[0])
    goalY = int(coords[1])
    total = 0

    x = 0
    y = 0
    for point1 in l1:
        direction = point1[0]
        distance = point1[1:]
        j = 1
        while j <= int(distance):
            if direction == 'R':
                x = x + 1
            elif direction == 'L':
                x = x - 1
            elif direction == 'U':
                y = y + 1
            elif direction == 'D':
                y = y - 1
            j += 1
            total += 1
            if x == goalX and y == goalY:
                break
        if x == goalX and y == goalY:
            break

    x = 0
    y = 0
    for point2 in l2:
        direction = point2[0]
        distance = point2[1:]
        j = 1
        while j <= int(distance):
            if direction == 'R':
                x = x + 1
            elif direction == 'L':
                x = x - 1
            elif direction == 'U':
                y = y + 1
            elif direction == 'D':
                y = y - 1
            j += 1
            total += 1
            if x == goalX and y == goalY:
                break
        if x == goalX and y == goalY:
            break

    distances.append(total)

lowest = 0
for d in distances:
    if lowest == 0 or d < lowest:
        lowest = d

print('')
print(lowest)
