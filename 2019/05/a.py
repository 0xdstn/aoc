#!/usr/bin/env python3

with open('input.txt') as f: data = f.read()
#with open('input-test.txt') as f: data = f.read()

data = [int(x.strip()) for x in data.strip().split(',')]

i = 0

def getVal(mode, pointer):
    if mode == 0: # position
        return int(data[data[pointer]])
    elif mode == 1: # immediate
        return data[pointer]

inputCode = 1

while i < len(data) and data[i] != 99:

    opcode = data[i]

    modes = []
    modesStr = ''
    if len(str(opcode)) > 1:
        code = str(opcode)
        opcode = int(code[-1])
        modesStr = code[:-2]
    if len(modesStr) < 3:
        modes.append(0)
    if len(modesStr) < 2:
        modes.append(0)
    if len(modesStr) < 1:
        modes.append(0)
    for m in modesStr:
        modes.append(int(m))

    if opcode == 1:
        p1 = getVal(modes[2],i+1)
        p2 = getVal(modes[1],i+2)
        data[data[i+3]] = p1 + p2
        print('[1] ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+3]) + ' // ' + str(p1) + ' + ' + str(p2) + ' = ' + str(data[data[i+3]]) + ' => ' + str(data[i+3]))
        i += 4
    elif opcode == 2:
        p1 = getVal(modes[2],i+1)
        p2 = getVal(modes[1],i+2)
        data[data[i+3]] = p1 * p2
        print('[2] ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+3]) + ' // ' + str(p1) + ' * ' + str(p2) + ' = ' + str(data[data[i+3]]) + ' => ' + str(data[i+3]))
        i += 4
    elif opcode == 3:
        data[data[i+1]] = inputCode
        print('[3] ' + str(data[i]) + ',' + str(data[i+1])) 
        i += 2
    elif opcode == 4:
        print('[4] ' + str(data[i]) + ',' + str(data[i+1])) 
        print('==> ' + str(getVal(modes[2],i+1)))
        print('')
        i += 2
    else:
        print('[-] ERR: ' + str(opcode))
        break;
    

