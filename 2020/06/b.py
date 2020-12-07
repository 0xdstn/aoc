#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

count = 0
possible = []
for z in data[0]:
    possible.append(z)

for i,x in enumerate(data):
    if x.strip() == '':
        count += len(possible)
        possible = []
        for z in data[i+1]:
            possible.append(z)
    else:
        tmp = possible.copy()
        for y in tmp:
            if y not in x:
                possible.remove(y)
count += len(possible)

print(count)

