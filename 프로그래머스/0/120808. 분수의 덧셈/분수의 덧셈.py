from fractions import Fraction

def solution(numer1, denom1, numer2, denom2):
    answer = []
    result = 0
    result = Fraction(numer1, denom1) + Fraction(numer2, denom2)
    result2 = result.numerator
    result3 = result.denominator
    answer.append(result2)
    answer.append(result3)
    return answer