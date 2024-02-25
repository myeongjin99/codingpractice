def solution(myStr):
    answer = []
    myStr3 = []
    myStr4 = []
    myStr = myStr.split("a");
    for i in myStr:
        myStr2 = i.split("b")       
        for j in myStr2:
            if j != "":
                myStr3.append(j)
    
    for i in myStr3:
        test = i.split("c")
        for j in test :
            if j != "":
                myStr4.append(j)
    
    if len(myStr4) == 0 :
        myStr4.append("EMPTY")
    else : 
        return myStr4
    return myStr4