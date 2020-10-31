#!/usr/bin/env python3

width = 25
height = 6
with open('input.txt') as f: data = f.read().strip()

#data = "123456789012"
#width = 3
#height = 2

layers = []

curLayer = 1
curX = 1
curY = 1
zeroesCount = 0
onesCount = 0
twosCount = 0
for x in data:
    if x == "0": zeroesCount += 1
    if x == "1": onesCount += 1
    if x == "2": twosCount += 1
    if curX == width and curY == height:
        layers.append([zeroesCount,onesCount,twosCount])
        curX = 1
        curY = 1
        curLayer += 1
        curRow = 1
        zeroesCount = 0
        onesCount = 0
        twosCount = 0
    elif curX == width:
        curY += 1
        curX = 1
    else:
        curX += 1

minIndex = 0
for x in range(0,len(layers)):
    if  layers[x][0] < layers[minIndex][0]:
        minIndex = x

print(layers[minIndex][1]*layers[minIndex][2])
