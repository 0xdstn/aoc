#!/usr/bin/env python3

import math
import re

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

codes = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
]

def validate(ex):
    for v in ex:
        typ = v[0:3]
        val = v[4:len(v)]
        if typ == 'byr' and ( int(val) > 2002 or int(val) < 1920 ):
            return False 
        elif typ == 'iyr' and ( int(val) > 2020 or int(val) < 2010 ):
            return False
        elif typ == 'eyr' and ( int(val) > 2030 or int(val) < 2020 ):
            return False
        elif typ == 'hgt':
            tmpVal = int(val[0:len(val)-2])
            meas = val[len(val)-2:len(val)]
            if meas == 'in' and ( tmpVal > 76 or tmpVal < 59 ):
                return False
            elif meas == 'cm' and ( tmpVal > 193 or tmpVal < 150 ):
                return False
            elif meas not in ['in','cm']:
                return False
        elif typ == 'hcl' and not re.match(r"^#[0-9a-f]{6}$",val):
            return False
        elif typ == 'ecl' and val not in ['amb','blu','brn','gry','grn','hzl','oth']:
            return False
        elif typ == 'pid' and not re.match(r"^[0-9]{9}$",val):
            return False
    return True
        
cur = ''
count = 0
for i in data:
    if i.strip() == '':
        valid = True
        for code in codes:
            if not code+':' in cur:
                valid = False
        if valid and not validate(cur.strip().split(' ')):
               valid = False 
        if valid:
            count += 1
        cur = ''
    cur += i + ' '
for code in codes:
    if not code+':' in cur:
        valid = False
if valid and not validate(cur.strip().split(' ')):
       valid = False 
if valid:
    count += 1

print(count)
