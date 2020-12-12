#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [int(x.strip()) for x in f.readlines()]
    f.close()

preamble = 25
cur = 0
found = False

while not found:
    nextNum = data[cur+preamble]
    valid = False
    for x in range(cur,cur+preamble):
        for y in range(cur,cur+preamble):
            if data[x]+data[y] == nextNum:
                valid = True
    if not valid:
        print(nextNum)
        exit()
    cur += 1
