export default function sortCharacters (characters) {
    const sortedArray = characters.sort(function(a, b) {
        return b.health - a.health;
    })
    return sortedArray;
}