#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

count = 0
for i in data:
    sp1 = i.split(': ')
    sp2 = sp1[0].split(' ')
    sp3 = sp2[0].split('-')
    p1 = int(sp3[0])
    p2 = int(sp3[1])
    l = sp2[1]
    pw = sp1[1]
    if pw[p1-1] == l or pw[p2-1] == l:
        if pw[p1-1] != pw[p2-1]:
            count += 1
print(count)
