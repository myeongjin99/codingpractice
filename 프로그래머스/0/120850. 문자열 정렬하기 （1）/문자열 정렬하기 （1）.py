def solution(my_string):
    answer = []
    arr = list(my_string)

    for i in arr:
        if i.isdigit():
            answer.append(int(i))
        answer.sort()
    return answer