def solution(array, height):
    array2 = [i for i in array if i > height]
    return len(array2)
