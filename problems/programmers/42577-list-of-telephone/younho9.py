def solution(phone_book):
    phone_book = sorted(phone_book)

    for short, long in zip(phone_book, phone_book[1:]):
        if long.startswith(short):
            return False
    return True
