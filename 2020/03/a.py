#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

lineLen = len(data[0])-1
answer = 0

x = 0
y = 0
trees = 0
while y <= len(data)-1:
    y += 1
    x += 3
    if y > len(data)-1:
        break
    if x+1 > lineLen:
        x = x-lineLen-1

    if data[y][x] == '#':
        trees += 1
if answer == 0:
    answer = trees
else:
    answer = answer * trees
print(answer)
