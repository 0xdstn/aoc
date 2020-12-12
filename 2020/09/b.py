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
        keyNum = nextNum
        solved = False
        i = 0
        curSum = 0
        while not solved:
            reset = False
            while not reset:
                curRange = []
                for x in range(i,len(data)):
                    curRange.append(data[x])
                    curSum += data[x]
                    if curSum == keyNum:
                        print(min(curRange)+max(curRange))
                        exit()
                    elif curSum > keyNum:
                        reset = True
                        curSum = 0
                        i += 1
                        break
    cur += 1
