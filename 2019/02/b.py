#!/usr/bin/env python3

with open('input.txt') as f: program = f.read()

program = [int(x.strip()) for x in program.strip().split(',')]

output = 0

for noun in range(0,99):
    for verb in range(0,99):
        data = program.copy()
        data[1] = noun
        data[2] = verb

        i = 0

        while i < len(data) and data[i] != 99:
            #print('[*] ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+3])) 

            if data[i] == 1:
                data[data[i+3]] = data[data[i+1]] + data[data[i+2]]
            elif data[i] == 2:
                data[data[i+3]] = data[data[i+1]] * data[data[i+2]]
            i += 4
        output = data[0]
        if output == 19690720:
            break
    if output == 19690720:
        break

print('')
print('noun ' + str(noun)) 
print('')
print('verb ' + str(verb)) 
print('')
print((100*noun)+verb)
