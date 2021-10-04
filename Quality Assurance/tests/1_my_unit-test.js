// Load modul chai dan assign ke chai
const chai = require('chai');
// Assign chai.assert ke assert untuk peringkas code. 
const assert = chai.assert;

// Buat test suite yang berisi suite lain
suite('My Unit Test', () => {
    suite('Basic Assertion', () => {
        // #1 Check value null 
        test('#isNull #isNotNull', () => {
            assert.isNull(null, 'This is an optional error description -e.g. null is null');
            assert.isNotNull(1, '1 is not null');
        });
        // #2 check value is defined
        test('#isDefined, #isUndefined', () => {
            assert.isDefined(null, 'null is not undefined');
            assert.isUndefined(undefined, 'undefined is undefined');
            assert.isDefined('hello', 'Astring is not undefined');
        });
        // #3 check object is truthy
        test('#isOk, #isNotOk', () => {
            assert.isNotOk(null, 'null is falsey');
            assert.isOk("I'm truthy", 'A string is truthy');
            assert.isOk(true, 'true is truthy');
        });
        // #4 check value is boolean value is true
        test('#isTrue, #isNotTure', () => {
            assert.isTrue(true, 'true is true');
            assert.isTrue(!!'double negation', 'Double negation of a truthy value is true ');
            assert.isNotTrue({ value: 'truthy' }, 'Object are truthy, but not boolean values');
        });
    });
    //---------------------------------------------------------------------

    suite('Equality', () => {
        // #5 check value is equal with coerced
        test('#equal, #notEqual', () => {
            assert.equal(12, '12', 'Number are coerced into string with ==');
            assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references');
            assert.equal(6 * '2', '12');
            assert.notEqual(6 + '2', '12');
        });
        // #6 check value strict equal but make sure value not coerced first
        test('#strictEqual, #notStrictEqual', () => {
            assert.notStrictEqual(6, '6');
            assert.strictEqual(6, 3 * 2);
            assert.strictEqual(6 * '2', 12);
            assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
        });
        // #7 check value is deep equal 
        test('#deepEqual, #notDeepEqual', () => {
            assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");
            assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] }, 'The order of array element does metter');
        });
    });
    //-----------------------------------------------------------------
    function weirdNumbers(delta) {
        return 1 + delta - Math.random();
    }
    suite('Comparasions', () => {
        // #8 check value isAbove(greater than), isAtmost(less than equal)
        test('#isAbove, #isAtMost', () => {
            assert.isAtMost('hello'.length, 5);
            assert.isAbove(1, 0);
            assert.isAbove(Math.PI, 3);
            assert.isAtMost(1 - Math.random(), 1);
        });
        // #9 check value is Below(is less than) or is AtLeast(greater than equal);
        test('#isBelow, #isAtLeast', () => {
            assert.isAtLeast('world'.length, 5);
            assert.isAtLeast(2 * Math.random(), 0);
            assert.isBelow(5 % 2, 2);
            assert.isBelow(2 / 3, 1);
        });
        // #10 Check value si approximately/sekitar delta
        test('#approximately', () => {
            assert.approximately(weirdNumbers(0.5), 1, 0.9);
            assert.approximately(weirdNumbers(0.2), 1, 0.9);
        });
    });
    //-------------------------------------------------------------------
    const winterMonths = ['dec', 'jan', 'feb', 'mar'];
    const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
    suite('Arrays', () => {
        // #11 Check value is array or not
        test('#isArray, #isNotArray', () => {
            assert.isArray('isThisAnArray?'.split(''), 'Sting.prototype.split() returns an array');
            assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number');
        });
        //#12 Check an array item is include in array or not
        test('Array #include, #notInclude', () => {
            assert.notInclude(winterMonths, 'jul', "It's summer in july...");
            assert.include(backendLanguages, 'javascript', 'JS is a backend language');
        });

    });
    //-----------------------------------------------------------------------

    const formatPeople = (name, age) => {
        return `# name: ${name}, age: ${age}` + '\n';
    };
    suite('Strings', () => {
        // #13 Check value string
        test('#isString, #isNotString', () => {
            assert.isNotString(Math.sin(Math.PI / 4), 'A float is not a stirng');
            assert.isString(process.env.PATH, 'An env variable is a string (or undefined)');
            assert.isString(JSON.stringify({ type: 'object' }), 'JSON is a string');
        });
        // #14 Check chracter include in string
        test('Strings #isInclude, #notInclude', () => {
            assert.include('Arrow', 'row', 'Arrow contains row');
            assert.notInclude('dart', 'queue', "But 'dart' doesn't contain 'queue'");
        });
        // #15 check string match using regex
        test('#match, #notMatch', () => {
            const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
            assert.match(formatPeople('Gilang Romadhan', 29), regex);
            assert.notMatch(formatPeople('Paul Smith III', "twenty-four"), regex);
        });
    });
    //----------------------------------------------------------------------------------------------
    const Car = function () {
        this.model = 'sedan';
        this.engine = 1;
        this.wheels = 4;
    };
    const Plane = function () {
        this.model = '737';
        this.engine = ['Left', 'Right'];
        this.wheels = 6;
        this.wings = 2;
    };
    const myCar = new Car();
    const airlinePlane = new Plane();

    suite('Objects', () => {
        //#16 check value  property object
        test('#property, notProperty', () => {
            assert.notProperty(myCar, 'wings', `Cars don't have wings`);
            assert.property(airlinePlane, 'engine', 'Plane have engines');
            assert.property(myCar, 'wheels', 'Cars have wheels');
        });
        //#17 check type property value
        test('#typeof, notTypeof', () => {
            assert.typeOf(myCar, 'object');
            assert.typeOf(myCar.model, 'string');
            assert.notTypeOf(airlinePlane.wings, 'string');
            assert.typeOf(airlinePlane.engine, 'array');
            assert.typeOf(myCar.wheels, 'number');
        });
        //18 Check  object instance
        test('#instanceOf, #notInstanceOf', () => {
            assert.notInstanceOf(myCar, Plane);
            assert.instanceOf(airlinePlane, Plane);
            assert.instanceOf(airlinePlane, Object);
            assert.notInstanceOf(myCar.wheels, String);
        });
    });
});
