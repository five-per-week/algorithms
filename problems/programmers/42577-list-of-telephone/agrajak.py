def solution(phone_book):
            
    root = {}
    for num in phone_book:
        cursor = root
        for idx, n in enumerate(num):
            if n not in cursor:
                cursor[n] = {}
            
            cursor = cursor[n]
            if '*' in cursor:
                return False
        if cursor != {}:
            return False
            
        cursor['*'] = '*'
            
    return True