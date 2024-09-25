function add(numbers) {
    if (numbers === "") return 0;

    const numArray = numbers.split(/[\n,]/);

    const sum = numArray.reduce((curr, acc) => (curr += parseInt(acc)), 0);
    return sum;
}

module.exports = { add };