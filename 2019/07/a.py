#!/usr/bin/env python3

import itertools

with open('input.txt') as f: data = f.read()
#with open('input-test.txt') as f: data = f.read()

origData = [int(x.strip()) for x in data.strip().split(',')]


def getVal(mode, pointer):
    if mode == 0: # position
        return int(data[data[pointer]])
    elif mode == 1: # immediate
        return data[pointer]

def getKey(mode,pointer):
    if mode == 0: # position
        return int(data[pointer])
    elif mode == 1: # immediate
        return pointer

sequence = [4,3,2,1,0]
largest = 0

for phaseSequence in itertools.permutations(sequence):
    inputSig = 0
    for phaseSetting in phaseSequence:
        print('[*] PHASE SETTING ' + str(phaseSetting))

        inputCount = 1
        i = 0

        data = origData.copy()

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

            if opcode == 1: # Addition
                p1 = getVal(modes[2],i+1)
                p2 = getVal(modes[1],i+2)
                p3 = getKey(modes[0],i+3)
                data[p3] = p1 + p2
                print('[1] ADD ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+3]) + ' // ' + str(p1) + ' + ' + str(p2) + ' = ' + str(data[data[i+3]]) + ' => ' + str(data[i+3]))
                i += 4
            elif opcode == 2: # Multiplication
                p1 = getVal(modes[2],i+1)
                p2 = getVal(modes[1],i+2)
                p3 = getKey(modes[0],i+3)
                data[p3] = p1 * p2
                print('[2] MUL ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+3]) + ' // ' + str(p1) + ' * ' + str(p2) + ' = ' + str(data[data[i+3]]) + ' => ' + str(data[i+3]))
                i += 4
            elif opcode == 3: # Input
                p1 = getKey(modes[2],i+1)
                if inputCount == 1:
                    data[p1] = phaseSetting
                else:
                    data[p1] = inputSig
                print('[3] INP ' + str(data[i]) + ',' + str(data[i+1]) + ' // ' + str(data[p1]) + ' => ' + str(p1)) 
                i += 2
                inputCount += 1
            elif opcode == 4: # Output
                out = getVal(modes[2],i+1)
                print('[4] OUT ' + str(data[i]) + ',' + str(data[i+1])) 
                print('==> ' + str(out))
                inputSig = out
                if out > largest:
                    largest = out 
                i += 2
            elif opcode == 5: # jump-if-true
                p1 = getVal(modes[2],i+1)
                p2 = getVal(modes[1],i+2)
                print('[5] JIT ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2])) 
                if p1 != 0:
                    i = p2
                else:
                    i += 3
            elif opcode == 6: # jump-if-false
                p1 = getVal(modes[2],i+1)
                p2 = getVal(modes[1],i+2)
                print('[6] JIF ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2])) 
                if p1 == 0:
                    i = p2
                else:
                    i += 3
            elif opcode == 7: # less than
                p1 = getVal(modes[2],i+1)
                p2 = getVal(modes[1],i+2)
                p3 = getKey(modes[0],i+3)
                if p1 < p2:
                    data[p3] = 1
                else:
                    data[p3] = 0
                i += 4
                print('[7] LTN ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+2])) 
            elif opcode == 8: # equals
                p1 = getVal(modes[2],i+1)
                p2 = getVal(modes[1],i+2)
                p3 = getKey(modes[0],i+3)
                if p1 == p2:
                    data[p3] = 1
                else:
                    data[p3] = 0
                i += 4
                print('[8] EQU ' + str(data[i]) + ',' + str(data[i+1]) + ',' + str(data[i+2]) + ',' + str(data[i+3]) + ' // ' + str(p1) + ' = ' + str(p2) + ' -> ' + str(data[p3]) + ' => ' + str(p3)) 
            else:
                print('[-] ERR: ' + str(opcode))
                break;
            
print('Largest: ' + str(largest))
