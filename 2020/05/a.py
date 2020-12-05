#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

highest = 0
for i in data:
    rowData = i[0:7]
    colData = i[7:10]
    mn = 0
    mx = 127
    for r in rowData:
        if r == 'F':
            mx = mx-((mx+1-mn)/2)
        else:
            mn = mx-((mx+1-mn)/2)+1
    row = mn

    mn = 0
    mx = 7
    for c in colData:
        if c == 'L':
            mx = mx-((mx+1-mn)/2)
        else:
            mn = mx-((mx+1-mn)/2)+1
    col = mn

    seat = (row*8) + col
    if seat > highest:
        highest = seat

print(int(highest))
