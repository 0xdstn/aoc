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
    mn = int(sp3[0])
    mx = int(sp3[1])
    occ = sp1[1].count(sp2[1])
    if occ >= mn and occ <= mx:
        count += 1
print(count)
