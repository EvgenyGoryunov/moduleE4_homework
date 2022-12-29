function count_agr_in_arr() {
    const arr = [1, 'str', 0, 'name', NaN, null, 555, -985]

    let num = 0,
        even_num = 0,
        odd_num = 0,
        zero = 0,
        str = 0,
        other = 0

    arr.forEach(function (item, i, arr) {
        // console.log(item)
        if (typeof (item) == 'number') {
            num += 1
            if (item == 0) {
                zero += 1
            } else if (item % 2 == 0) {
                even_num += 1
            } else if (item % 2 != 0) {
                odd_num += 1
            }
        }
        else if (typeof (item) == 'string') {
            str += 1
        }
        else { other += 1 }
    });

    console.log('всего элементов в массиве: ' + arr.length)
    console.log('всего чисел: ' + num)
    console.log('нолей: ' + zero)
    console.log('четных: ' + even_num)
    console.log('нечетных: ' + odd_num)
    console.log('строк: ' + str)
    console.log('всех остальных: ' + other)

}

count_agr_in_arr()


// пример из модудя (не мое решение)
function getTypeOfNumbers() {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }

    console.log('четных элементов: ', even)
    console.log('нечетных элементов: ', odd)
    console.log('нулей: ', zero)
}

getTypeOfNumbers()

