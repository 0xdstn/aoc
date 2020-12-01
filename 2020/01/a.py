#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

for i in data:
    for x in data:
        if int(x) + int(i) == 2020:
            print('Answer: ' + str(int(x)*int(i)))
            exit()

