from itertools import chain, permutations # https://docs.python.org/3/library/itertools.html?highlight=itertools#itertools.permutations
def solution(numbers):
    n = len(numbers)
    primes = [True]*(10 ** n)
    cand = set(map(lambda x:int(''.join(x)), chain.from_iterable([permutations(numbers, i+1) for i in range(n)])))
    for i in range(2, max(cand)+1):
        if primes[i]:
            for j in range(i+i, len(primes), i):
                primes[j]= False
    primes[1] = primes[0] = False
    
    return sum([1 if primes[c] else 0 for c in cand])