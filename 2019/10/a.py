#! /usr/bin/env python3

data = []
#with open('input-test.txt') as f:
with open('input.txt') as f:
    for ln in f:
        print(ln.strip())
        data.append(ln.strip())

curX = 0
curY = 0

maxX = len(data[0])
maxY = len(data)

asteroids = []

for ln in data:
    for char in ln:
        if char == '#':
            asteroids.append([curX,curY])
        curX += 1
    curY += 1
    curX = 0

highest = 0
for a in asteroids:
    #print('[*] ' + str(a[0]) + ',' + str(a[1]))
    count = 0
    for a2 in asteroids:
        print('')
        print('[*] Calculating:' + str(a[0]) + ',' + str(a[1]) + ' => ' + str(a2[0]) + ',' + str(a2[1]))
        if a != a2:
            done = False
            blocked = False
            tmpX = a[0]
            tmpY = a[1]
            diffX = a[0] - a2[0]
            diffY = a[1] - a2[1]

            if (diffX % 2) == 0 and (diffY % 2) == 0:
                diffX = diffX/2
                diffY = diffY/2

            if diffX == 0:
                diffY = 1 if a[1] < a2[1] else -1

            if diffY == 0:
                diffX = 1 if a[0] < a2[0] else -1

            if diffX == diffY:
                diffX = 1
                diffY = 1

            if a[0] < a2[0] and diffX < 0:
                diffX = diffX*-1
            elif a[0] > a2[0] and diffX > 0:
                diffX = diffX*-1
            
            if a[1] < a2[1] and diffY < 0:
                diffY = diffY*-1
            elif a[1] > a2[1] and diffY > 0:
                diffY = diffY*-1

            print('    DIFF ' + str(diffX) + ',' + str(diffY))

            while not done:
                tmpX += diffX
                tmpY += diffY
                #print('    CHECKING ' + str(tmpX) + ',' + str(tmpY))

                if [tmpX,tmpY] == a or [tmpX,tmpY] == a2 or tmpX < 0 or tmpY < 0 or tmpX > maxX or tmpY > maxY:
                    done = True
                elif [tmpX,tmpY] in asteroids:
                    print('[-] ' + str(a2[0]) + ',' + str(a2[1]) + ' BLOCKED BY ' + str(tmpX) + ',' + str(tmpY))
                    done = True
                    blocked = True
            if not blocked:
                print('[+] ' + str(a2[0]) + ',' + str(a2[1]))
                count += 1

    print('[+] Count for ' + str(a[0]) + ',' + str(a[1]) + ' is ' + str(count))
    #print('')
    if count > highest:
        highest = count
print(highest)
