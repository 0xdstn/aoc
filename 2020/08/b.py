#!/usr/bin/env python3

import math
import copy

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

done = False
flipped = []

while not done:
    tmp = copy.deepcopy(data)
    for x in tmp:
        i = tmp.index(x)
        c = x[0:3]
        if (c == 'nop' or c == 'jmp') and i not in flipped:
            flipped.append(i)
            if c == 'nop':
                tmp[i] = tmp[i].replace('nop','jmp')
            else:
                tmp[i] = tmp[i].replace('jmp','nop')
            break

    dupe = False
    run = []
    pnt = 0
    acc = 0
    while not dupe:
        if pnt == len(tmp):
            done = True
            dupe = True
            print(acc)
            exit()

        sp = tmp[pnt].split(' ')
        cmd = tmp[pnt][0:3]
        mod = tmp[pnt][4]
        val = int(tmp[pnt][5:len(tmp[pnt])])

        if pnt in run:
            dupe = True

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
