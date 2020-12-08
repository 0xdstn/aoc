#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

acc = 0
pnt = 0
dupe = False
run = []

while not dupe:
    sp = data[pnt].split(' ')
    cmd = data[pnt][0:3]
    mod = data[pnt][4]
    val = int(data[pnt][5:len(data[pnt])])

    if pnt in run:
        dupe = True
        print(acc)

    run.append(pnt)

    if cmd == 'nop':
        pnt += 1
    elif cmd == 'acc':
        if mod == '+':
            acc += val
        else:
            acc -= val
        pnt += 1
    elif cmd == 'jmp':
        if mod == '+':
            pnt += val
        else:
            pnt -= val
