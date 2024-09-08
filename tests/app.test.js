import { nameIsValid, fullTrim, getTotal } from '../src/app';


//Проверка имени пользователя
describe('nameIsValid', () => {

    it('если имя больше 2х символов в формате string', () => {
        expect(nameIsValid('kate')).toBe(true);
        expect(nameIsValid('bob')).toBe(true);
        expect(nameIsValid('nik')).toBe(true);
    });

    it('если имя меньше 2х символов', () => {
        expect(nameIsValid('a')).toBe(false);
        expect(nameIsValid('b')).toBe(false);
    });


    it('если имя сожержит недопустимые символы', () => {
        expect(nameIsValid('alice123')).toBe(false);
        expect(nameIsValid('bob!')).toBe(false);
        expect(nameIsValid('carol ')).toBe(false);
    });




// удаления пробелов из строки

    test.each([
        ['  test test  ', 'testtest'],
        ['  te st  ', 'test'],
        ['   ', ''],
        ['t e s t', 'test'],
        ['  test  test  ', 'testtest'],
        ['test', 'test'],
        ['12345', '12345']
    ])('для строки "%s" ожидаем "%s"', (input, expected) => {
        expect(fullTrim(input)).toBe(expected);
    });


//Подсчёт суммы заказа

    it('без скидки', () => {
        const items = [{ price: 10, quantity: 10 }];
        const discount = 0;
        expect(getTotal(items, discount)).toBe(100);
    });


    it('скидка на сумму в 10% ', () => {
        const items = [{ price: 10, quantity: 10 }];
        const discount = 10;
        expect(getTotal(items, discount)).toBe(90);
    });


    it('если скидка 100%', () => {
        const items = [{ price: 10, quantity: 10 }];
        const discount = 100;
        expect(getTotal(items, discount)).toBe(0);
    });


    it('скидка отрицательная', () => {
        expect(() => getTotal([{ price: 10, quantity: 10 }], -5)).toThrow();
    });

    // Тест 5: Проверка выброса ошибки при некорректном типе скидки
    it('если скидка не число', () => {
        expect(() => getTotal([{ price: 10, quantity: 10 }], '10')).toThrow();
    });




});