#!/usr/bin/env python3

width = 25
height = 6
with open('input.txt') as f: data = f.read().strip()

#width = 2
#height = 2
#data = "0222112222120000"

layerLen = width*height

img = [2] * layerLen

y = 0
for x in data:
    if img[y] == 2:
        img[y] = int(x)
    y += 1
    if y == layerLen:
        y = 0

row = ""
rowCount = 0
for x in img:
    if x == 2:
        row += " "
    elif x == 1:
        row += "\033[37m" + u"\u2588"
    else:
        row += "\033[34m" + u"\u2588"
    if rowCount == width-1:
        print(row)
        row = ""
        rowCount = 0
    else:
        rowCount += 1
