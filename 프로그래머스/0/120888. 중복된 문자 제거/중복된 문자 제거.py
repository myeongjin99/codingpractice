from collections import OrderedDict

def solution(my_string):
    answer = ''
    result = "".join(OrderedDict.fromkeys(my_string))
    return result