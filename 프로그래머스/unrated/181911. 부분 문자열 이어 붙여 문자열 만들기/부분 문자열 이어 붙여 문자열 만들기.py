def solution(my_strings, parts):
    answer = ''
    for i,j in zip(my_strings,parts):
        a,b = j
        answer+=''.join((list(i)[a:b+1]))
    return answer