#!/usr/bin/env python3

inputStart = 172930
inputEnd = 683082

total = 0
for x in range(inputStart,inputEnd):
    neverDecreases = True
    doubles = False

    prevD = 0
    for d in str(x):
        if int(d) < prevD:
            neverDecreases = False 
        
        if int(d) == prevD:
            doubles = True 

        prevD = int(d)

    if neverDecreases and doubles:
        total += 1

print('')
print(total)
