#!/usr/bin/env python3

with open('input.txt') as df: data = [x.strip() for x in df.readlines()]
#with open('input-test.txt') as df: data = [x.strip() for x in df.readlines()]

orbits = []
for o in data:
    ex = o.split(")")
    if ex[0] not in orbits:
       orbits.append(ex[0]) 
    if ex[1] not in orbits:
        orbits.append(ex[1]) 


san = []
cur = 'SAN'
while cur != "COM":
    for o in data:
        ex = o.split(")")
        if ex[1] == cur:
            san.append(ex[0])
            cur = ex[0]

count = 0
cur = 'YOU'
cross = ''
while cur != "COM":
    for o in data:
        ex = o.split(")")
        if ex[1] == cur:
            print(ex[0])
            if cur in san:
                cross = cur
                cur = "COM"
            else:
                cur = ex[0]
                count += 1

for o in san:
    if o == cross:
        print(count-1)
    else:
        count += 1
