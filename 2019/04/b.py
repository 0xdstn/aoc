#!/usr/bin/env python3

inputStart = 172930
inputEnd = 683082

total = 0
for x in range(inputStart,inputEnd):
    neverDecreases = True

    prevD = 0
    doubleCount = 0
    twoDigitDoubles = 0
    for d in str(x):
        if int(d) < prevD:
            neverDecreases = False 
        
        if int(d) == prevD:
            doubleCount += 1
            if doubleCount == 1:
                twoDigitDoubles += 1
            elif doubleCount == 2:
                twoDigitDoubles -= 1
        else:
            doubleCount = 0

        prevD = int(d)

    if neverDecreases and twoDigitDoubles > 0:
        total += 1

print('')
print(total)
