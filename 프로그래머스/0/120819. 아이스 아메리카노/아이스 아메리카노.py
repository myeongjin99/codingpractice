def solution(money):
    if money % 5500 ==0:
        return [money//5500,0]
    else:
        return [money//5500,money%5500]