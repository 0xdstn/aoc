#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

count = 0
cur = []
for x in data:
    if x.strip() == '':
        count += len(cur)
        cur = []
    else:
        for y in x:
            if y not in cur:
                cur.append(y)
count += len(cur)

print(count)
