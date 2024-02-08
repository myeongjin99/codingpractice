import re

def solution(my_string):
    answer = 0
    nums = re.findall(r"[0-9]+", my_string)
    for num in nums:
        answer += int(num)
    return answer