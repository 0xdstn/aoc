#!/usr/bin/env python3

with open('input.txt') as df: data = [x.strip() for x in df.readlines()]
#with open('input-test.txt') as df: data = [x.strip() for x in df.readlines()]

orbits = []
calculated = dict()

for o in data:
    ex = o.split(")")
    if ex[0] not in orbits:
       orbits.append(ex[0]) 
    if ex[1] not in orbits:
        orbits.append(ex[1]) 

count = 0
for orb in orbits:
    cur = orb
    curCount = 0
    while cur != "COM":
        for o in data:
            ex = o.split(")")
            if cur in calculated.keys():
                curCount += calculated[cur]
                cur = "COM"
            elif ex[1] == cur:
                curCount += 1
                cur = ex[0]
    count += curCount
    calculated[orb] = curCount

print(count)
