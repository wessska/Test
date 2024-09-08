function kolobok(name) {
    switch (name) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'лиса':
            return 'Меня съели';
    }
}

console.log(kolobok('дедушка'));
console.log(kolobok('лиса'));


function newYear(name) {
    if (name === 'Дед Мороз') {
        return `${name}! ${name}! ${name}!`;
    } else if (name === 'Снегурочка') {
        return `${name}! ${name}! ${name}!`;
    }
}

console.log(newYear('Дед Мороз'));
console.log(newYear('Снегурочка'));

//дз!