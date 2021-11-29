#!/usr/bin/env python3

oneDiff = 0
threeDiff = 1

curVolt = 0

with open('input.txt') as f:
    data = [int(x.strip()) for x in f.readlines()]
    f.close()

data.sort()

for x in data:
    if x > curVolt and x <= curVolt+3:
        diff = x - curVolt
        #print(str(curVolt) + ' -- ' + str(x) + ' +' + str(diff))
        if diff == 1:
            oneDiff += 1
        if diff == 3:
            threeDiff += 1

        curVolt = x
    else:
        print('UHOH' + str(x))

print(oneDiff*threeDiff)
