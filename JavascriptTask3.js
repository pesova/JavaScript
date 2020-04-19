function NumberReplacer(Number) {
    AllNumbers = [];
    ConvertTo = 0;
    for (var i = 1; i <= Number; i++) {
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            ConvertTo = 'yu-gi-oh';
        } else if (i % 2 == 0 && i % 3 == 0) {
            ConvertTo = 'yu-gi';
        } else if (i % 2 == 0 && i % 5 == 0) {
            ConvertTo = 'yu-oh';
        } else if (i % 3 == 0 && i % 5 == 0) {
            ConvertTo = 'gi-oh';
        } else if (i % 2 == 0) {
            ConvertTo = 'yu';
        } else if (i % 3 == 0) {
            ConvertTo = 'gi';
        } else if (i % 5 == 0) {
            ConvertTo = 'oh';
        } else {
            ConvertTo = i;
        }

        AllNumbers.push(ConvertTo)
    }
    console.log(AllNumbers)
}
NumberReplacer(100);
