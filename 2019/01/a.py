#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()
answer = 0
for i in data:
    answer = answer + math.floor(int(i)/3)-2

print(answer)
