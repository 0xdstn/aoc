#!/usr/bin/env python3

with open('input.txt') as f: data = f.read()

data = [int(x.strip()) for x in data.strip().split(',')]

data[1] = 12
data[2] = 2

i = 0

while i < len(data) and data[i] != 99:
    print('[*] ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+3])) 

    if data[i] == 1:
        data[data[i+3]] = data[data[i+1]] + data[data[i+2]]
    elif data[i] == 2:
        data[data[i+3]] = data[data[i+1]] * data[data[i+2]]
    i += 4

print('')
print(data[0])
