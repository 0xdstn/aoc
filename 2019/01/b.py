#!/usr/bin/env python3

import math

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()
answer = 0
for i in data:
    print('[*]' + i)
    tmp = int(i)
    total = 0
    while tmp > 0:
        tmp = math.floor(int(tmp)/3)-2
        if tmp > 0:
            total = total + tmp
            print('   ' + str(tmp))
    answer = answer + total

print('')
print(answer)
