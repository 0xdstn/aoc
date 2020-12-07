#!/usr/bin/env python3

import math
import re

with open('input.txt') as f:
    data = [x.strip() for x in f.readlines()]
    f.close()

sg = 'shiny gold'

count = 0
bags = []
contents = []
for x in data:
    tmp = x.replace('.','').replace(' bags','').replace(' bag','')
    sp = tmp.split(" contain ")
    bag = sp[0]
    con = sp[1].split(', ')
    bags.append(bag)
    contents.append(con)

toSearch = ['shiny gold']

while len(toSearch):
    index = bags.index(toSearch[0])
    con = contents[index]
    for x in con:
        if x != 'no other':
            num = int(x[0])
            typ = x[2:len(x)]
            count += num
            for i in range(0,num):
                toSearch.append(typ)
    toSearch.pop(0)
        
print(count)
