#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

codes = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
]

cur = ''
count = 0
for i in data:
    if i.strip() == '':
        valid = True
        for code in codes:
            if not code+':' in cur:
                valid = False
        if valid:
            count += 1
        cur = ''
    cur += i
for code in codes:
    if not code+':' in cur:
        valid = False
if valid:
    count += 1

print(count)
