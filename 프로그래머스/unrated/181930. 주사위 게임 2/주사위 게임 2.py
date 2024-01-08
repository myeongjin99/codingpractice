def solution(a, b, c):
    answer = 0
    
    result = a+b+c
    result2 = a**2 + b**2 + c**2
    result3 = a**3 + b**3 + c**3
    
    if a != b != c != a:
        answer = result
    elif a == b == c:
        answer= (result) * (result2) * (result3)
    else:
        answer = (result) * (result2)
    return answer

    