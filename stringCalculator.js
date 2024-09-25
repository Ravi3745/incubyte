function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;

    if(numbers.startsWith("//")){
        const parts = numbers.split("\n");
        delimiter = new RegExp(`[${parts[0].charAt(2)}]`);
        numbers = parts[1];
    }
    const numArray = numbers.split(delimiter);

    const sum = numArray.reduce((curr, acc) => (curr += parseInt(acc)), 0);
    return sum;
}

module.exports = { add };