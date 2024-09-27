import sortCharacters from "../app";

test.each([
    [[
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'шрек', health: 75 },
        { name: 'лунтик', health: 200 },
    ],
    [
        
        { name: 'лунтик', health: 200 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'шрек', health: 75 },
        { name: 'мечник', health: 10 },
    ]]
])('should sort array of characters', (characters, expected) => {
    const result = sortCharacters(characters);
    expect(result).toEqual(expected);
})