{ // Anonymous closure
    var global = "Hello, I am global variabel";
    (function () {
        // Wee keep these variable private inside this closure scope

        var myGrades = [93, 95, 88, 0, 55, 91];

        var average = function () {
            var total = myGrades.reduce(function (acccumulator, item) {
                return acccumulator + item
            }, 0);
            return `your average grade is ` + (total / myGrades.length).toFixed(2) + `.`;
        }

        var failing = function () {
            var failingGrades = myGrades.filter(function (item) {
                return item < 70;
            });

            return `You failed ` + failingGrades.length + ` times.`;

        }
        console.log(average());
        console.log(failing());
        console.log(global);
    }

    ());

}