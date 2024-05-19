export const AllquesObject = [
  {
    number: 1,
    heading: 'Add two numbers',
    difficulty: 'Easy',
    attempts: 0,
    isSolved: false,
    heading: 'Add two numbers',
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    returnType: 'int',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        javaFuncCall: 'addTwoNumbers(10,5)',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        javaFuncCall: 'addTwoNumbers(3,2)',

        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        javaFuncCall: 'addTwoNumbers(200,300)',

        explanation: 'a + b = 500',
        image: null,
      },
    ],
    cases: [
      // {
      //   parameter: '10,5',
      //   expectedOutput: '15',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(10, 5)',
      // },
      // {
      //   parameter: '3,2',
      //   expectedOutput: '5',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(3, 2)',
      // },
      // {
      //   parameter: '200,300',
      //   expectedOutput: '500',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(200, 300)',
      // },
      // {
      //   parameter: '1000000000,1',
      //   expectedOutput: '1000000001',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(1000000000, 1)',
      // },
      // {
      //   parameter: '999999999,999999999',
      //   expectedOutput: '1999999998',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(999999999, 999999999)',
      // },

      // {
      //   parameter: '123456789,987654321',
      //   expectedOutput: '1111111110',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(123456789, 987654321)',
      // },
      // {
      //   parameter: '17,23',
      //   expectedOutput: '40',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(17, 23)',
      // },
      // {
      //   parameter: '50,50',
      //   expectedOutput: '100',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(50, 50)',
      // },
      // {
      //   parameter: '-100,200',
      //   expectedOutput: '100',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(-100, 200)',
      // },
      // {
      //   parameter: '999,-999',
      //   expectedOutput: '0',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(999, -999)',
      // },
      // {
      //   parameter: '-123,-456',
      //   expectedOutput: '-579',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(-123, -456)',
      // },

      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(10, 5)',
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(3, 2)',
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(200, 300)',
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(1000000000, 1)',
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(999999999, 999999999)',
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(123456789, 987654321)',
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(17, 23)',
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(50, 50)',
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(-100, 200)',
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(999, -999)',
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(-123, -456)',
      },

      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
        javaFuncCall: 'addTwoNumbers(0, 999)',
      },

      // {
      //   parameter: '123456789,987654321',
      //   expectedOutput: '1111111110',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(123456789, 987654321)',
      // },
      // {
      //   parameter: '17,23',
      //   expectedOutput: '40',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(17, 23)',
      // },
      // {
      //   parameter: '50,50',
      //   expectedOutput: '100',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(50, 50)',
      // },
      // {
      //   parameter: '-100,200',
      //   expectedOutput: '100',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(-100, 200)',
      // },
      // {
      //   parameter: '999,-999',
      //   expectedOutput: '0',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(999, -999)',
      // },
      // {
      //   parameter: '-123,-456',
      //   expectedOutput: '-579',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(-123, -456)',
      // },
      // {
      //   parameter: '0,999',
      //   expectedOutput: '999',
      //   userOutput: null,
      //   javaFuncCall: 'addTwoNumbers(0, 999)',
      // },
    ],
    /*
    JS: 
      return a+b;

    PYTHON:
      return a+b

    JAVA:
      return a+b;
    */
  },
  {
    number: 2,
    heading: 'String Reverse',
    difficulty: 'Easy',
    attempts: 0,

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given a string, reverse the string and return the reversed string.',
    constraints: [
      'The input string can contain any characters including letters, digits, and special characters.',
      'The length of the input string is within the typical string length range.',
      'The input string may be empty.',
    ],
    functionName: 'reverseString',
    returnType: 'string',
    javascriptDefaultCode:
      '\n/**\n\t* @param {string} str\n\t* @return {string}\n*/\n\nvar reverseString = function(str) {\n\t// Write your code here\n};',
    pythonDefaultCode: '\ndef reverseString(s):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static String reverseString(String str) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'str = hello',
        output: 'olleh',
        parameter: '"hello"',
        javaFuncCall: 'reverseString("hello")',
        explanation: "The input string 'hello' is reversed to 'olleh'.",
        image: null,
      },
      {
        number: 2,
        input: 'str = world',
        output: 'dlrow',
        parameter: '"world"',
        javaFuncCall: 'reverseString("world")',

        explanation: "The input string 'world' is reversed to 'dlrow'.",
        image: null,
      },
      {
        number: 3,
        input: 'str = 12345',
        output: '54321',
        parameter: '"12345"',
        javaFuncCall: 'reverseString("12345")',

        explanation: "The input string '12345' is reversed to '54321'.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: '"hello"',
        expectedOutput: 'olleh',
        userOutput: null,
        javaFuncCall: 'reverseString("hello")',
      },
      {
        parameter: '"world"',
        expectedOutput: 'dlrow',
        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: '"apple"',
        expectedOutput: 'elppa',
        userOutput: null,
        javaFuncCall: 'reverseString("apple")',
      },
      {
        parameter: '"openai"',
        expectedOutput: 'ianepo',
        userOutput: null,
        javaFuncCall: 'reverseString("openai")',
      },
      {
        parameter: '"racecar"',
        expectedOutput: 'racecar',
        userOutput: null,
        javaFuncCall: 'reverseString("racecar")',
      },
      {
        parameter: '"123456"',
        expectedOutput: '654321',
        userOutput: null,
        javaFuncCall: 'reverseString("123456")',
      },
      {
        parameter: '"goodbye"',
        expectedOutput: 'eybdoog',
        userOutput: null,
        javaFuncCall: 'reverseString("goodbye")',
      },
      {
        parameter: '"world"',
        expectedOutput: 'dlrow',
        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: '"hello world"',
        expectedOutput: 'dlrow olleh',
        userOutput: null,
        javaFuncCall: 'reverseString("hello world")',
      },
      {
        parameter: '"algorithm"',
        expectedOutput: 'mhtirogla',
        userOutput: null,
        javaFuncCall: 'reverseString("algorithm")',
      },
      {
        parameter: '"reverse"',
        expectedOutput: 'esrever',
        userOutput: null,
        javaFuncCall: 'reverseString("reverse")',
      },
      {
        parameter: '"abcdef"',
        expectedOutput: 'fedcba',
        userOutput: null,
        javaFuncCall: 'reverseString("abcdef")',
      },
      {
        parameter: '"javascript"',
        expectedOutput: 'tpircsavaj',
        userOutput: null,
        javaFuncCall: 'reverseString("javascript")',
      },
      {
        parameter: '"programming"',
        expectedOutput: 'gnimmargorp',
        userOutput: null,
        javaFuncCall: 'reverseString("programming")',
      },
      {
        parameter: '"computer"',
        expectedOutput: 'retupmoc',
        userOutput: null,
        javaFuncCall: 'reverseString("computer")',
      },
      {
        parameter: '"science"',
        expectedOutput: 'ecneics',
        userOutput: null,
        javaFuncCall: 'reverseString("science")',
      },
      {
        parameter: '"engineering"',
        expectedOutput: 'gnireenigne',
        userOutput: null,
        javaFuncCall: 'reverseString("engineering")',
      },
      {
        parameter: '"artificial intelligence"',
        expectedOutput: 'ecnegilletni laicifitra',
        userOutput: null,
        javaFuncCall: 'reverseString("artificial intelligence")',
      },
    ],

    /*
    JS:
      return str.split('').reverse().join('');

    PYTHON:
      return s[::-1]

    JAVA:
    	return (new StringBuilder(str).reverse().toString());
    */
  },
  {
    number: 3,

    heading: 'Find Minimum and Maximum Number',
    difficulty: 'Easy',

    attempts: 0,

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an array of numbers, find the minimum and maximum numbers in the array, return the minimum and maximum number in array',
    constraints: [
      'The input array contains at least one element.',
      'The elements in the input array can be positive or negative integers.',
      'Duplicate elements are allowed in the input array.',
      'The length of the input array is within the range of a typical array.',
      'The values of the input array can range from the minimum to the maximum integer values.',
    ],
    functionName: 'findMinMax',
    returnType: 'array',
    javascriptDefaultCode:
      '\n/**\n\t* @param {number[]} nums\n\t* @return {number[]}\n*/\n\nvar findMinMax = function(nums) {\n\t// Write your code here\n};',
    pythonDefaultCode: '\ndef findMinMax(nums):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int[] findMinMax(int[] nums) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'nums = [4, 2, 7, 1, 9]',
        output: '[1,9]',
        parameter: '[4, 2, 7, 1, 9]',
        javaFuncCall: 'findMinMax(new int[]{4, 2, 7, 1, 9});',
        explanation:
          'In the input array [4, 2, 7, 1, 9], the minimum number is 1 and the maximum number is 9.',
        image: null,
      },
      {
        number: 2,
        input: 'nums = [10, 5, 3, 8, 2]',
        output: '[2,10]',
        parameter: '[10, 5, 3, 8, 2]',
        javaFuncCall: 'findMinMax(new int[]{10, 5, 3, 8, 2});',
        explanation:
          'In the input array [10, 5, 3, 8, 2], the minimum number is 2 and the maximum number is 10.',
        image: null,
      },
      {
        number: 3,
        input: 'nums = [-5, -10, -3, -8, -2]',
        output: '[-10,-2]',
        parameter: '[-5, -10, -3, -8, -2]',
        javaFuncCall: 'findMinMax(new int[]{-5, -10, -3, -8, -2});',
        explanation:
          'In the input array [-5, -10, -3, -8, -2], the minimum number is -10 and the maximum number is -2.',
        image: null,
      },
    ],
    cases: [
      {
        parameter: '[4, 2, 7, 1, 9]',
        expectedOutput: '[1,9]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{4, 2, 7, 1, 9});',
      },
      {
        parameter: '[10, 5, 3, 8, 2]',
        expectedOutput: '[2,10]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{10, 5, 3, 8, 2});',
      },
      {
        parameter: '[-5, -10, -3, -8, -2]',
        expectedOutput: '[-10,-2]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{-5, -10, -3, -8, -2});',
      },
      {
        parameter: '[1, 1, 1, 1, 1]',
        expectedOutput: '[1,1]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{1, 1, 1, 1, 1});',
      },
      {
        parameter: '[0, 0, 0, 0, 0]',
        expectedOutput: '[0,0]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{0, 0, 0, 0, 0});',
      },
      {
        parameter: '[100, 200, 300, 400, 500]',
        expectedOutput: '[100,500]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{100, 200, 300, 400, 500});',
      },
      {
        parameter: '[-100, -200, -300, -400, -500]',
        expectedOutput: '[-500,-100]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{-100, -200, -300, -400, -500});',
      },
      {
        parameter: '[5, 4, 3, 2, 1]',
        expectedOutput: '[1,5]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{5, 4, 3, 2, 1});',
      },
      {
        parameter: '[10, -5, 8, -3, 6]',
        expectedOutput: '[-5,10]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{10, -5, 8, -3, 6});',
      },
      {
        parameter: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
        expectedOutput: '[1,10]',
        userOutput: null,
        javaFuncCall: 'findMinMax(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10});',
      },
    ],

    /*
    JS:
      return [Math.min(...nums), Math.max(...nums)];
    
    PYTHON:
      return [min(nums), max(nums)]
    
    JAVA:
      int min = Arrays.stream(nums).min().getAsInt();
      int max = Arrays.stream(nums).max().getAsInt();
      return new int[] {min, max};
    */
  },
  {
    number: 4,

    heading: 'Find Second Largest Element in Array',
    difficulty: 'Easy',

    attempts: 0,

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an array of integers, find the second largest element in the array. Return the answer',
    constraints: [
      'The input array contains at least two distinct elements.',
      'The elements in the input array are integers.',
      'Duplicate elements are allowed in the input array.',
      'The length of the input array is within the range of a typical array.',
      'The values of the input array can range from the minimum to the maximum integer values.',
    ],
    functionName: 'findSecondLargest',
    returnType: 'int',
    javascriptDefaultCode:
      '\n/**\n\t* @param {number[]} nums\n\t* @return {number}\n*/\n\nvar findSecondLargest = function(nums) {\n\t// Write your code here\n};',
    pythonDefaultCode:
      '\ndef findSecondLargest(nums):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int findSecondLargest(int[] nums) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'nums = [4, 2, 7, 1, 9]',
        output: '7',
        parameter: '[4, 2, 7, 1, 9]',
        explanation:
          'In the input array [4, 2, 7, 1, 9], the second largest element is 7.',
        image: null,
        javaFuncCall: 'findSecondLargest(new int[]{4, 2, 7, 1, 9})',
      },
      {
        number: 2,
        input: 'nums = [10, 5, 3, 8, 2]',
        output: '8',
        parameter: '[10, 5, 3, 8, 2]',
        explanation:
          'In the input array [10, 5, 3, 8, 2], the second largest element is 8.',
        image: null,
        javaFuncCall: 'findSecondLargest(new int[]{10, 5, 3, 8, 2})',
      },
      {
        number: 3,
        input: 'nums = [-5, -10, -3, -8, -2]',
        output: '-3',
        parameter: '[-5, -10, -3, -8, -2]',
        explanation:
          'In the input array [-5, -10, -3, -8, -2], the second largest element is -3.',
        image: null,
        javaFuncCall: 'findSecondLargest(new int[]{-5, -10, -3, -8, -2})',
      },
    ],
    cases: [
      {
        parameter: '[4, 2, 7, 1, 9]',
        expectedOutput: '7',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{4, 2, 7, 1, 9})',
      },
      {
        parameter: '[10, 5, 3, 8, 2]',
        expectedOutput: '8',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{10, 5, 3, 8, 2})',
      },
      {
        parameter: '[-5, -10, -3, -8, -2]',
        expectedOutput: '-3',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{-5, -10, -3, -8, -2})',
      },
      {
        parameter: '[1, 4, 4, 5, 1]',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{1, 4, 4, 5, 1})',
      },
      {
        parameter: '[0, 0, 0, 1, 5]',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{0, 0, 0, 1, 5})',
      },
      {
        parameter: '[100, 200, 300, 400, 500]',
        expectedOutput: '400',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{100, 200, 300, 400, 500})',
      },
      {
        parameter: '[-100, -200, -300, -400, -500]',
        expectedOutput: '-200',
        userOutput: null,
        javaFuncCall:
          'findSecondLargest(new int[]{-100, -200, -300, -400, -500})',
      },
      {
        parameter: '[5, 4, 3, 2, 1]',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{5, 4, 3, 2, 1})',
      },
      {
        parameter: '[10, -5, 8, -3, 6]',
        expectedOutput: '8',
        userOutput: null,
        javaFuncCall: 'findSecondLargest(new int[]{10, -5, 8, -3, 6})',
      },
      {
        parameter: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
        expectedOutput: '9',
        userOutput: null,
        javaFuncCall:
          'findSecondLargest(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})',
      },
    ],
    /* 
    JS: 
      let max = nums.indexOf(Math.max(...nums));
	    nums.splice(max,1);
	    return Math.max(...nums)

    PYTHON: 
      maxNum = max(nums)
	    nums.remove(maxNum)
	    return max(nums)
    
    JAVA:
      int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        for (int num : nums) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num != max) {
                secondMax = num;
            }
        }
        return secondMax;
    
    */
  },
  {
    number: 5,

    heading: 'Create Array of Numbers',
    difficulty: 'Easy',

    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an integer n, create an array containing integers from 0 to n-1. Return the array.',
    constraints: [
      'The input integer n is greater than or equal to 0.',
      'The length of the output array is equal to n.',
      'The values of the output array range from 0 to n-1.',
    ],
    functionName: 'createArray',

    returnType: 'array',
    javascriptDefaultCode:
      '\n/**\n\t* @param {number} n\n\t* @return {number[]}\n*/\n\nvar createArray = function(n) {\n\t// Write your code here\n};',
    pythonDefaultCode: '\ndef createArray(n):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int[] createArray(int n) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'n = 5',
        output: '[0,1,2,3,4]',
        parameter: '5',
        javaFuncCall: 'createArray(5);',
        explanation:
          'For n = 5, the array should contain integers from 0 to 4.',
        image: null,
      },
      {
        number: 2,
        input: 'n = 3',
        output: '[0,1,2]',
        parameter: '3',
        javaFuncCall: 'createArray(3);',

        explanation:
          'For n = 3, the array should contain integers from 0 to 2.',
        image: null,
      },
      {
        number: 3,
        input: 'n = 0',
        output: '[]',
        parameter: '0',
        javaFuncCall: 'createArray(0);',

        explanation: 'For n = 0, the array should be empty.',
        image: null,
      },
    ],
    cases: [
      {
        parameter: '5',
        expectedOutput: '[0,1,2,3,4]',
        javaFuncCall: 'createArray(5);',
        userOutput: null,
      },
      {
        parameter: '3',
        expectedOutput: '[0,1,2]',
        javaFuncCall: 'createArray(3);',
        userOutput: null,
      },
      {
        parameter: '0',
        expectedOutput: '[]',
        javaFuncCall: 'createArray(0);',
        userOutput: null,
      },
      {
        parameter: '1',
        expectedOutput: '[0]',
        javaFuncCall: 'createArray(1);',
        userOutput: null,
      },
      {
        parameter: '2',
        expectedOutput: '[0,1]',
        javaFuncCall: 'createArray(2);',
        userOutput: null,
      },
      {
        parameter: '4',
        expectedOutput: '[0,1,2,3]',
        javaFuncCall: 'createArray(4);',
        userOutput: null,
      },
      {
        parameter: '6',
        expectedOutput: '[0,1,2,3,4,5]',
        javaFuncCall: 'createArray(6);',
        userOutput: null,
      },
    ],

    /*
     JS:
      let arr = [];
	    for(let i=0; i<n; i++) arr.push(i);
	    return arr;

     PYTHON:
      arr = []
	    for i in range(n):
		    arr.append(i)
	    return arr
      
      JAVA:
      int[] arr = new int[n];
      for (int i = 0; i < n; i++) {
        arr[i] = i;
      }
      return arr;
     */
  },
  {
    number: 6,

    heading: 'Increment Matrix Values',
    difficulty: 'Easy',

    attempts: 0,

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given a matrix of arrays of numbers, increment each value in the matrix by 1. Return the modified matrix.',
    constraints: [
      'The input matrix is a 2-dimensional array.',
      'Each inner array represents a row in the matrix.',
      'The values in the matrix are integers.',
    ],
    functionName: 'increment_matrix_values',
    returnType: 'matrix',
    javascriptDefaultCode:
      '\n/**\n\t* @param {number[][]} matrix\n\t* @return {number[][]}\n*/\n\nvar increment_matrix_values = function(matrix) {\n\t// Write your code here\n};',
    pythonDefaultCode:
      '\ndef increment_matrix_values(matrix):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int[][] increment_matrix_values(int[][] matrix) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'matrix = [[1, 2], [3, 4]]',
        output: '[[2,3],[4,5]]',
        parameter: '[[1, 2], [3, 4]]',
        javaFuncCall: 'increment_matrix_values(new int[][]{{1, 2}, {3, 4}});',
        explanation: 'Increment each value by 1.',
        image: null,
      },
      {
        number: 2,
        input: 'matrix = [[0, 0], [0, 0]]',
        output: '[[1,1],[1,1]]',
        parameter: '[[0, 0], [0, 0]]',
        javaFuncCall: 'increment_matrix_values(new int[][]{{0, 0}, {0, 0}});',
        explanation: 'Increment each value by 1.',
        image: null,
      },
      {
        number: 3,
        input: 'matrix = [[-1, -2], [-3, -4]]',
        output: '[[0,-1],[-2,-3]]',
        parameter: '[[-1, -2], [-3, -4]]',
        javaFuncCall:
          'increment_matrix_values(new int[][]{{-1, -2}, {-3, -4}});',
        explanation: 'Increment each value by 1.',
        image: null,
      },
    ],
    cases: [
      {
        parameter: '[[1, 2], [3, 4]]',
        expectedOutput: '[[2,3],[4,5]]',
        javaFuncCall: 'increment_matrix_values(new int[][]{{1, 2}, {3, 4}});',
        userOutput: null,
      },
      {
        parameter: '[[0, 0], [0, 0]]',
        expectedOutput: '[[1,1],[1,1]]',
        javaFuncCall: 'increment_matrix_values(new int[][]{{0, 0}, {0, 0}});',
        userOutput: null,
      },
      {
        parameter: '[[-1, -2], [-3, -4]]',
        expectedOutput: '[[0,-1],[-2,-3]]',
        javaFuncCall:
          'increment_matrix_values(new int[][]{{-1, -2}, {-3, -4}});',
        userOutput: null,
      },
      {
        parameter: '[[3, 5], [7, 9]]',
        expectedOutput: '[[4,6],[8,10]]',
        javaFuncCall: 'increment_matrix_values(new int[][]{{3, 5}, {7, 9}});',
        userOutput: null,
      },
      {
        parameter: '[[10, 20, 30], [40, 50, 60], [70, 80, 90]]',
        expectedOutput: '[[11,21,31],[41,51,61],[71,81,91]]',
        javaFuncCall:
          'increment_matrix_values(new int[][]{{10, 20, 30}, {40, 50, 60}, {70, 80, 90}});',
        userOutput: null,
      },
      {
        parameter: '[[1], [2], [3], [4]]',
        expectedOutput: '[[2],[3],[4],[5]]',
        javaFuncCall:
          'increment_matrix_values(new int[][]{{1}, {2}, {3}, {4}});',
        userOutput: null,
      },
      {
        parameter: '[[-5, -3], [-1, 1], [3, 5], [7, 9]]',
        expectedOutput: '[[-4,-2],[0,2],[4,6],[8,10]]',
        javaFuncCall:
          'increment_matrix_values(new int[][]{{-5, -3}, {-1, 1}, {3, 5}, {7, 9}});',
        userOutput: null,
      },

      /*
      JS:
        for(let i=0; i<matrix.length; i++){
		      for(let j=0; j<matrix[i].length; j++){
		      	matrix[i][j]++;
		      }
	      }
	      return matrix;

      PYTHON:
        for i in range(len(matrix)):
		      for j in range(len(matrix[0])):
		      	matrix[i][j] += 1
	      return matrix

      JAVA:
        int rows = matrix.length;
        int cols = matrix[0].length;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j]++;
            }
        }
        return matrix;
      */
    ],
  },
  {
    number: 7,

    heading: 'Number of Students Unable to Eat Lunch',
    difficulty: 'Medium',

    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'The school cafeteria offers circular and square sandwiches at lunch break. Each student either prefers square or circular sandwiches. Given two arrays representing students and sandwiches, return the number of students unable to eat lunch.',
    constraints: [
      '1 <= students.length, sandwiches.length <= 100',
      'students.length == sandwiches.length',
      'sandwiches[i] is 0 or 1',
      'students[i] is 0 or 1',
    ],
    functionName: 'countStudents',
    returnType: 'number',
    javascriptDefaultCode: `\n/**\n\t* @param {number[]} students\n\t* @param {number[]} sandwiches\n\t* @return {number}\n*/\n\nvar countStudents = function(students, sandwiches) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef countStudents(students, sandwiches):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int countStudents(int[] students, int[] sandwiches) {\n\t// Write your code here\n}`,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'students = [1,1,0,0], sandwiches = [0,1,0,1]',
        output: '0',
        parameter: '[1,1,0,0],[0,1,0,1]',
        explanation: 'All students are able to eat.',
        image: null,
        javaFuncCall: 'countStudents(new int[]{1,1,0,0}, new int[]{0,1,0,1})',
      },
      {
        number: 2,
        input: 'students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]',
        output: '3',
        parameter: '[1,1,1,0,0,1],[1,0,0,0,1,1]',
        explanation: 'Three students are unable to eat.',
        image: null,
        javaFuncCall:
          'countStudents(new int[]{1,1,1,0,0,1}, new int[]{1,0,0,0,1,1})',
      },
      {
        number: 6,
        input: 'students = [0,0,0,0,0], sandwiches = [1,1,1,1,1]',
        output: '5',
        parameter: '[0,0,0,0,0],[1,1,1,1,1]',
        explanation: 'All five students are unable to eat.',
        image: null,
        javaFuncCall:
          'countStudents(new int[]{0,0,0,0,0}, new int[]{1,1,1,1,1})',
      },
    ],
    cases: [
      {
        parameter: '[1,1,0,0],[0,1,0,1]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'countStudents(new int[]{1,1,0,0}, new int[]{0,1,0,1})',
      },
      {
        parameter: '[1,1,1,0,0,1],[1,0,0,0,1,1]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall:
          'countStudents(new int[]{1,1,1,0,0,1}, new int[]{1,0,0,0,1,1})',
      },

      {
        parameter: '[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1]',
        expectedOutput: '10',
        userOutput: null,
        javaFuncCall:
          'countStudents(new int[]{0,0,0,0,0,0,0,0,0,0}, new int[]{1,1,1,1,1,1,1,1,1,1})',
      },
      {
        parameter: '[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall:
          'countStudents(new int[]{0,1,0,1,0,1,0,1,0,1}, new int[]{1,0,1,0,1,0,1,0,1,0})',
      },

      {
        parameter: '[1,1,1,0,0,1],[1,0,0,0,1,1]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall:
          'countStudents(new int[]{1,1,1,0,0,1}, new int[]{1,0,0,0,1,1})',
      },
      {
        parameter: '[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1]',
        expectedOutput: '10',
        userOutput: null,
        javaFuncCall:
          'countStudents(new int[]{0,0,0,0,0,0,0,0,0,0}, new int[]{1,1,1,1,1,1,1,1,1,1})',
      },
      {
        parameter: '[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall:
          'countStudents(new int[]{0,1,0,1,0,1,0,1,0,1}, new int[]{1,0,1,0,1,0,1,0,1,0})',
      },
      {
        parameter: '[1,1,0,0,1],[1,1,0,1,1]',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall:
          'countStudents(new int[]{1,1,0,0,1}, new int[]{1,1,0,1,1})',
      },
    ],
    /*
    JS:
      let zeroes = 0, ones = 0;
      for (let student of students) {
          if(student === 1) ones++; 
          else zeroes++;
      }
      for(let sandwich of sandwiches) {
          if(sandwich === 1) {
              if(ones === 0 ) return zeroes;
              ones--;
          } 
          else {
              if(zeroes === 0 ) return ones; 
              zeroes--; 
          }
      }
      return 0;
    
    PYTHON:
      zeroes = 0
	    ones = 0	
	    for student in students:
	        if student == 1:
	            ones += 1
	        else:
	            zeroes += 1	
	    for sandwich in sandwiches:
	        if sandwich == 1:
	            if ones == 0:
	                return zeroes
	            ones -= 1
	        else:
	            if zeroes == 0:
	                return ones
	            zeroes -= 1	
	    return 0

    JAVA:
      int zeroes = 0, ones = 0;
      for (int student : students) {
          if (student == 1) ones++; 
          else zeroes++;
      }
      for (int sandwich : sandwiches) {
          if (sandwich == 1) {
              if (ones == 0) return zeroes;
              ones--;
          } else {
              if (zeroes == 0) return ones; 
              zeroes--; 
          }
      }
      return 0;
    */
  },
  {
    number: 8,
    heading: 'Remove Duplicates from Sorted List',
    difficulty: 'Hard',
    isSolved: false,
    language: 'javascript',
    attempts: 0,
    isSolved: true,
    language: 'javascript',
    heading: 'Remove Duplicates from Sorted List',
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.',
    constraints: [
      'The number of nodes in the list is in the range [0, 300].',
      '-100 <= Node.val <= 100',
      'The list is guaranteed to be sorted in ascending order.',
    ],
    functionName: 'deleteDuplicates',
    returnType: 'linkedlist',
    javascriptDefaultCode: `
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var deleteDuplicates = function(head) {
      // Write your code here
  };`,
    pythonDefaultCode: `
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        # Write your code here`,
    javaDefaultCode: `
/* Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

public ListNode deleteDuplicates(ListNode head) {
    // Write your code here
}`,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'head = [1,1,2]',
        output: '[1,2]',
        parameter: '[1,1,2]',
        explanation:
          'After removing duplicates, the linked list becomes [1,2].',
        image: 'P8a',
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))',
      },
      {
        number: 2,
        input: 'head = [1,1,2,3,3]',
        output: '[1,2,3]',
        parameter: '[1,1,2,3,3]',
        explanation:
          'After removing duplicates, the linked list becomes [1,2,3].',
        image: 'P8b',
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))))',
      },
      {
        number: 3,
        input: 'head = [1,2,2,3,3]',
        output: '[1,2,3]',
        parameter: '[1,2,2,3,3]',
        explanation:
          'After removing duplicates, the linked list becomes [1,2,3].',
        image: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3))))))',
      },
    ],
    cases: [
      {
        parameter: '[1,1,2]',
        expectedOutput: '[1,2]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))',
      },
      {
        parameter: '[1,1,2,3,3]',
        expectedOutput: '[1,2,3]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))))',
      },
      {
        expectedOutput: '[1,2,3]',
        parameter: '[1,2,2,3,3]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3))))))',
      },
      {
        parameter: '[1,1,2,3,4]',
        expectedOutput: '[1,2,3,4]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))))',
      },
      {
        parameter: '[1,2,3,4,5]',
        expectedOutput: '[1,2,3,4,5]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))',
      },
      {
        parameter: '[1,1,1,1,1]',
        expectedOutput: '[1]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))))',
      },

      {
        parameter: '[1,1,2,2,3,3,4,4,5,5]',
        expectedOutput: '[1,2,3,4,5]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(5)))))))))))',
      },
      {
        parameter: '[1,1,1,1,2,2,2,2,3,3,3,3]',
        expectedOutput: '[1,2,3]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(3, new ListNode(3))))))))))))))',
      },

      {
        parameter: '[1,1,1,1,1,1,1,1,1,1]',
        expectedOutput: '[1]',
        userOutput: null,
        javaFuncCall:
          'deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))))))))',
      },
      {
        parameter: '[1]',
        expectedOutput: '[1]',
        userOutput: null,
        javaFuncCall: 'deleteDuplicates(new ListNode(1))',
      },
      {
        parameter: '[]',
        expectedOutput: '[]',
        userOutput: null,
        javaFuncCall: 'deleteDuplicates(null)',
      },
    ],
    /*
    JS:
      let node = head;
      while(node !== null && node.next !== null){
          if(node.val === node.next.val){
              node.next = node.next.next;
          }
          else{
              node = node.next;
          }
      }

    return head;

    PYTHON:
      temp = head
      while (temp and temp.next):
          if (temp.next.val == temp.val):
              temp.next = temp.next.next
              continue
          temp = temp.next
      return head

    JAVA:
      ListNode temp = head; 
      while (temp != null && temp.next != null) {
          if (temp.next.val == temp.val) {
              temp.next = temp.next.next;
              continue;
          }
          temp = temp.next;
      }
      return head;
    */
  },
  {
    number: 9,

    heading: 'Find the median of an array',
    difficulty: 'Medium',
    isSolved: false,
    language: 'javascript',

    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given a sorted array of integers, find the median of the array. If sorted array is odd return the middle mumber else return the middle left side number',
    constraints: [
      '1 <= arr.length <= 1000',
      '-1000 <= arr[i] <= 1000',
      'arr.length is odd',
    ],
    functionName: 'findMedian',
    returnType: 'double',

    description:
      'Given a sorted array of integers, find the median of the array. If sorted array is odd return the middle mumber else return the middle left side number',
    constraints: [
      '1 <= arr.length <= 1000',
      '-1000 <= arr[i] <= 1000',
      'arr.length is even or odd',
    ],
    functionName: 'findMedian',
    returnType: 'double',

    javascriptDefaultCode: `
/**
* @param {number[]} arr
* @return {number}
*/

var findMedian = function(arr) {
    // Write your code here
};
`,
    pythonDefaultCode: `
def findMedian(arr):
    # Write your code here
`,
    javaDefaultCode: `
public static int findMedian(int[] arr) {
    // Write your code here
}
`,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: '1',
        input: 'arr = [1, 2, 3, 4, 5]',
        output: '3',
        parameter: '[1,2,3,4,5]',
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5})',
        explanation: 'The median of the array [1, 2, 3, 4, 5] is 3.',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [1, 2, 3, 4, 5, 6]',
        output: '3',
        parameter: '[1,2,3,4,5,6]',
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5,6})',
        explanation: 'The median of the array [1, 2, 3, 4, 5, 6] is 3.5.',
        image: null,
      },
      {
        number: '3',
        input: 'arr = [-1, 0, 2, 4, 5]',
        output: '2',
        parameter: '[-1,0,2,4,5]',
        javaFuncCall: 'findMedian(new int[]{-1,0,2,4,5})',
        explanation: 'The median of the array [-1, 0, 2, 4, 5] is 2.',

        number: '1',
        input: 'arr = [1, 2, 3, 4, 5]',
        output: '3',
        parameter: '[1,2,3,4,5]',
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5})',
        explanation: 'The median of the array [1, 2, 3, 4, 5] is 3.',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [1, 2, 3, 4, 5, 6]',
        output: '3',
        parameter: '[1,2,3,4,5,6]',
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5,6})',
        explanation: 'The median of the array [1, 2, 3, 4, 5, 6] is 3.5.',
        image: null,
      },
      {
        number: '3',
        input: 'arr = [-1, 0, 2, 4, 5]',
        output: '2',
        parameter: '[-1,0,2,4,5]',
        javaFuncCall: 'findMedian(new int[]{-1,0,2,4,5})',
        explanation: 'The median of the array [-1, 0, 2, 4, 5] is 2.',

        image: null,
      },
    ],
    cases: [
      {
        parameter: '[1,2,3,4,5]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5})',
      },
      {
        parameter: '[1,2,3,4,5,6]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5,6})',
      },
      {
        parameter: '[-1,0,2,4,5]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{-1,0,2,4,5})',
      },
      {
        parameter: '[-10, -5, 0, 5, 10]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{-10, -5, 0, 5, 10})',
      },
      {
        parameter: '[5]',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{5})',
      },
      {
        parameter: '[-3, -2, -1, 0, 1, 2, 3]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{-3, -2, -1, 0, 1, 2, 3})',

        parameter: '[1,2,3,4,5]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5})',
      },
      {
        parameter: '[1,2,3,4,5,6]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{1,2,3,4,5,6})',
      },
      {
        parameter: '[-1,0,2,4,5]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{-1,0,2,4,5})',
      },
      {
        parameter: '[-10, -5, 0, 5, 10]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{-10, -5, 0, 5, 10})',
      },
      {
        parameter: '[5]',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{5})',
      },
      {
        parameter: '[-3, -2, -1, 0, 1, 2, 3]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findMedian(new int[]{-3, -2, -1, 0, 1, 2, 3})',
      },
    ],
  },
  {
    number: 10,
    heading: 'Find the kth largest element in an array',
    difficulty: 'Medium',
    isSolved: false,
    language: 'javascript',

    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an unsorted array of integers, find the kth largest element.',
    constraints: [
      '1 <= arr.length <= 1000',
      '-1000 <= arr[i] <= 1000',
      '1 <= k <= arr.length',
    ],
    functionName: 'findKthLargest',
    returnType: 'int',

    description:
      'Given an unsorted array of integers, find the kth largest element.',
    constraints: [
      '1 <= arr.length <= 1000',
      '-1000 <= arr[i] <= 1000',
      '1 <= k <= arr.length',
    ],
    functionName: 'findKthLargest',
    returnType: 'int',

    javascriptDefaultCode: `
/**
* @param {number[]} arr
* @param {number} k
* @return {number}
*/

var findKthLargest = function(arr, k) {
    // Write your code here
};
`,
    pythonDefaultCode: `
def findKthLargest(arr, k):
    # Write your code here
`,
    javaDefaultCode: `
public static int findKthLargest(int[] arr, int k) {
    // Write your code here
}
`,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: '1',
        input: 'arr = [3, 2, 1, 5, 6, 4], k = 2',
        output: '5',
        parameter: '[3,2,1,5,6,4], 2',
        javaFuncCall: 'findKthLargest(new int[]{3,2,1,5,6,4}, 2)',
        explanation:
          'The 2nd largest element in the array [3, 2, 1, 5, 6, 4] is 5.',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4',
        output: '4',
        parameter: '[3,2,3,1,2,4,5,5,6], 4',
        javaFuncCall: 'findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4)',
        explanation:
          'The 4th largest element in the array [3, 2, 3, 1, 2, 4, 5, 5, 6] is 4.',

        number: '1',
        input: 'arr = [3, 2, 1, 5, 6, 4], k = 2',
        output: '5',
        parameter: '[3,2,1,5,6,4], 2',
        javaFuncCall: 'findKthLargest(new int[]{3,2,1,5,6,4}, 2)',
        explanation:
          'The 2nd largest element in the array [3, 2, 1, 5, 6, 4] is 5.',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4',
        output: '4',
        parameter: '[3,2,3,1,2,4,5,5,6], 4',
        javaFuncCall: 'findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4)',
        explanation:
          'The 4th largest element in the array [3, 2, 3, 1, 2, 4, 5, 5, 6] is 4.',

        image: null,
      },
    ],
    cases: [
      {
        parameter: '[3,2,1,5,6,4], 2',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{3,2,1,5,6,4}, 2)',
      },
      {
        parameter: '[3,2,3,1,2,4,5,5,6], 4',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4)',
      },
      {
        parameter: '[1, 2, 3, 4, 5], 1',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{1, 2, 3, 4, 5}, 1)',
      },
      {
        parameter: '[5, 4, 3, 2, 1], 3',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{5, 4, 3, 2, 1}, 3)',
      },
      {
        parameter: '[2, 2, 2, 2, 2], 1',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{2, 2, 2, 2, 2}, 1)',

        parameter: '[3,2,1,5,6,4], 2',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{3,2,1,5,6,4}, 2)',
      },
      {
        parameter: '[3,2,3,1,2,4,5,5,6], 4',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4)',
      },
      {
        parameter: '[1, 2, 3, 4, 5], 1',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{1, 2, 3, 4, 5}, 1)',
      },
      {
        parameter: '[5, 4, 3, 2, 1], 3',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{5, 4, 3, 2, 1}, 3)',
      },
      {
        parameter: '[2, 2, 2, 2, 2], 1',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findKthLargest(new int[]{2, 2, 2, 2, 2}, 1)',
      },
    ],
  },
  {
    number: '11',
    heading: 'Find the majority element in an array',
    difficulty: 'Medium',
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an array of size n, find the majority element. The majority element is the element that appears more than [n/2] times.',
    constraints: [
      '1 <= arr.length <= 10000',
      '0 <= arr[i] <= 10000',
      'There is always a majority element in the array.',
    ],
    functionName: 'findMajorityElement',
    returnType: 'number',

    description:
      'Given an array of size n, find the majority element. The majority element is the element that appears more than [n/2] times.',
    constraints: [
      '1 <= arr.length <= 10000',
      '0 <= arr[i] <= 10000',
      'There is always a majority element in the array.',
    ],
    functionName: 'findMajorityElement',
    returnType: 'number',

    javascriptDefaultCode: `
    /**
    * @param {number[]} arr
    * @return {number}
    */
    
    var findMajorityElement = function(arr) {
        // Write your code here
    };
    `,
    pythonDefaultCode: `
    def findMajorityElement(arr):
        # Write your code here
    `,
    javaDefaultCode: `
    public static int findMajorityElement(int[] arr) {
        // Write your code here
    }
    `,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: '1',
        input: 'arr = [3, 2, 2, 2, 2, 4, 2]',
        output: '2',
        parameter: '[3, 2, 2, 2, 2, 4, 2]',
        javaFuncCall: 'findMajorityElement(new int[]{3, 2, 2, 2, 2, 4, 2})',
        explanation:
          'In the array [3, 2, 2, 2, 2, 4, 2], the majority element is 2 as it appears more than ⌊ n/2 ⌋ times.',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [1, 2, 2, 2, 3, 4, 5, 2, 2]',
        output: '2',
        parameter: '[1, 2, 2, 2, 3, 4, 5, 2, 2]',
        javaFuncCall:
          'findMajorityElement(new int[]{1, 2, 2, 2, 3, 4, 5, 2, 2})',
        explanation:
          'In the array [1, 2, 2, 2, 3, 4, 5, 2, 2], the majority element is 2 as it appears more than ⌊ n/2 ⌋ times.',

        number: '1',
        input: 'arr = [3, 2, 2, 2, 2, 4, 2]',
        output: '2',
        parameter: '[3, 2, 2, 2, 2, 4, 2]',
        javaFuncCall: 'findMajorityElement(new int[]{3, 2, 2, 2, 2, 4, 2})',
        explanation:
          'In the array [3, 2, 2, 2, 2, 4, 2], the majority element is 2 as it appears more than ⌊ n/2 ⌋ times.',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [1, 2, 2, 2, 3, 4, 5, 2, 2]',
        output: '2',
        parameter: '[1, 2, 2, 2, 3, 4, 5, 2, 2]',
        javaFuncCall:
          'findMajorityElement(new int[]{1, 2, 2, 2, 3, 4, 5, 2, 2})',
        explanation:
          'In the array [1, 2, 2, 2, 3, 4, 5, 2, 2], the majority element is 2 as it appears more than ⌊ n/2 ⌋ times.',
        image: null,
      },
    ],
    cases: [
      {
        parameter: '[3, 2, 2, 2, 2, 4, 2]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findMajorityElement(new int[]{3, 2, 2, 2, 2, 4, 2})',
      },
      {
        parameter: '[1, 2, 2, 2, 3, 4, 5, 2, 2]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall:
          'findMajorityElement(new int[]{1, 2, 2, 2, 3, 4, 5, 2, 2})',
      },
      {
        parameter: '[1, 1, 1, 1, 2, 3, 4, 5, 6]',
        expectedOutput: '-1',
        userOutput: null,
        javaFuncCall:
          'findMajorityElement(new int[]{1, 1, 1, 1, 2, 3, 4, 5, 6})',
      },
      {
        parameter: '[10, 10, 20, 20, 20, 20, 30, 30]',
        expectedOutput: '-1',
        userOutput: null,
        javaFuncCall:
          'findMajorityElement(new int[]{10, 10, 20, 20, 20, 20, 30, 30})',
      },
      {
        parameter: '[5, 5, 5, 5, 1, 1, 1, 1, 1]',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall:
          'findMajorityElement(new int[]{5, 5, 5, 5, 1, 1, 1, 1, 1})',
      },
    ],
  },
  {
    number: '12',
    heading: 'Remove duplicates from an array',
    difficulty: 'Medium',
    number: '12',
    heading: 'Remove duplicates from an array',
    difficulty: 'Easy',
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an array of integers, remove duplicates from the array and return a new array without any duplicate elements.  Note: While solving in java return array as String for ex: "Arrays.toString(result)"',
    constraints: ['1 <= arr.length <= 10000', '-10000 <= arr[i] <= 10000'],
    functionName: 'removeDuplicates',
    returnType: 'number[]',
    constraints: ['1 <= arr.length <= 10000', '-10000 <= arr[i] <= 10000'],
    functionName: 'removeDuplicates',
    returnType: 'number[]',
    javascriptDefaultCode: `
    /**
    * @param {number[]} arr
    * @return {number[]}
    */
    
    var removeDuplicates = function(arr) {
        // Write your code here
    };
    `,
    pythonDefaultCode: `
    def removeDuplicates(arr):
        # Write your code here
    `,
    javaDefaultCode: `
    public static String removeDuplicates(int[] arr) {
        // Write your code here
    }
    `,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: '1',
        input: 'arr = [1, 1, 2, 3, 3, 4]',
        output: '[1, 2, 3, 4]',
        parameter: '[1,1,2,3,3,4]',
        javaFuncCall: 'removeDuplicates(new int[]{1,1,2,3,3,4})',
        explanation:
          'The array [1, 1, 2, 3, 3, 4] after removing duplicates becomes [1, 2, 3, 4].',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [1, 1, 1, 1]',
        output: '[1]',
        parameter: '[1,1,1,1]',
        javaFuncCall: 'removeDuplicates(new int[]{1,1,1,1})',
        explanation:
          'The array [1, 1, 1, 1] contains only one unique element [1], so the output remains [1].',
        number: '1',
        input: 'arr = [1, 1, 2, 3, 3, 4]',
        output: '[1, 2, 3, 4]',
        parameter: '[1,1,2,3,3,4]',
        javaFuncCall: 'removeDuplicates(new int[]{1,1,2,3,3,4})',
        explanation:
          'The array [1, 1, 2, 3, 3, 4] after removing duplicates becomes [1, 2, 3, 4].',
        image: null,
      },
      {
        number: '2',
        input: 'arr = [1, 1, 1, 1]',
        output: '[1]',
        parameter: '[1,1,1,1]',
        javaFuncCall: 'removeDuplicates(new int[]{1,1,1,1})',
        explanation:
          'The array [1, 1, 1, 1] contains only one unique element [1], so the output remains [1].',
        image: null,
      },
    ],
    cases: [
      {
        parameter: '[1,1,2,3,3,4]',
        expectedOutput: '[1, 2, 3, 4]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{1,1,2,3,3,4})',
      },
      {
        parameter: '[1,1,1,1]',
        expectedOutput: '[1]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{1,1,1,1})',
      },
      {
        parameter: '[3, 5, 3, 8, 9, 8]',
        expectedOutput: '[3, 5, 8, 9]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{3, 5, 3, 8, 9, 8})',
      },
      {
        parameter: '[-1, 0, 1, -1, 0, 1]',
        expectedOutput: '[-1, 0, 1]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{-1, 0, 1, -1, 0, 1})',
      },
      {
        parameter: '[9, 9, 9, 9, 9]',
        expectedOutput: '[9]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{9, 9, 9, 9, 9})',
      },
      {
        parameter: '[0, 0, 0, 0, 0]',
        expectedOutput: '[0]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{0, 0, 0, 0, 0})',
        parameter: '[1,1,2,3,3,4]',
        expectedOutput: '[1, 2, 3, 4]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{1,1,2,3,3,4})',
      },
      {
        parameter: '[1,1,1,1]',
        expectedOutput: '[1]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{1,1,1,1})',
      },
      {
        parameter: '[3, 5, 3, 8, 9, 8]',
        expectedOutput: '[3, 5, 8, 9]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{3, 5, 3, 8, 9, 8})',
      },
      {
        parameter: '[-1, 0, 1, -1, 0, 1]',
        expectedOutput: '[-1, 0, 1]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{-1, 0, 1, -1, 0, 1})',
      },
      {
        parameter: '[9, 9, 9, 9, 9]',
        expectedOutput: '[9]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{9, 9, 9, 9, 9})',
      },
      {
        parameter: '[0, 0, 0, 0, 0]',
        expectedOutput: '[0]',
        userOutput: null,
        javaFuncCall: 'removeDuplicates(new int[]{0, 0, 0, 0, 0})',
      },
    ],
  },
  {
    number: 13,
    heading: 'Find the maximum consecutive ones in an array',
    difficulty: 'Easy',
    isSolved: false,
    language: 'javascript',
    heading: 'Find the maximum consecutive ones in an array',
    difficulty: 'Easy',
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given a binary array, find the maximum number of consecutive 1s in this array.',
    constraints: ['1 <= nums.length <= 10^5', 'nums[i] is either 0 or 1'],
    functionName: 'findMaxConsecutiveOnes',
    returnType: 'number',
    javascriptDefaultCode:
      '\n/\n * @param {number[]} nums\n * @return {number}\n */\nvar findMaxConsecutiveOnes = function(nums) {\n    // Write your code here\n};\n',
    pythonDefaultCode:
      '\ndef findMaxConsecutiveOnes(nums):\n    # Write your code here\n',
    javaDefaultCode:
      '\npublic static int findMaxConsecutiveOnes(int[] nums) {\n    // Write your code here\n}\n',
    constraints: ['1 <= nums.length <= 10^5', 'nums[i] is either 0 or 1'],
    functionName: 'findMaxConsecutiveOnes',
    returnType: 'number',
    javascriptDefaultCode:
      '\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMaxConsecutiveOnes = function(nums) {\n    // Write your code here\n};\n',
    pythonDefaultCode:
      '\ndef findMaxConsecutiveOnes(nums):\n    # Write your code here\n',
    javaDefaultCode:
      '\npublic static int findMaxConsecutiveOnes(int[] nums) {\n    // Write your code here\n}\n',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: '1',
        input: 'nums = [1,1,0,1,1,1]',
        output: '3',
        parameter: '[1,1,0,1,1,1]',
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})',
        explanation:
          'The maximum number of consecutive 1s in the array [1,1,0,1,1,1] is 3.',
        image: null,
      },
      {
        number: '2',
        input: 'nums = [1,0,1,1,0,1]',
        output: '2',
        parameter: '[1,0,1,1,0,1]',
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})',
        explanation:
          'The maximum number of consecutive 1s in the array [1,0,1,1,0,1] is 2.',
        number: '1',
        input: 'nums = [1,1,0,1,1,1]',
        output: '3',
        parameter: '[1,1,0,1,1,1]',
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})',
        explanation:
          'The maximum number of consecutive 1s in the array [1,1,0,1,1,1] is 3.',
        image: null,
      },
      {
        number: '2',
        input: 'nums = [1,0,1,1,0,1]',
        output: '2',
        parameter: '[1,0,1,1,0,1]',
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})',
        explanation:
          'The maximum number of consecutive 1s in the array [1,0,1,1,0,1] is 2.',
        image: null,
      },
    ],
    cases: [
      {
        parameter: '[1,1,0,1,1,1]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})',
      },
      {
        parameter: '[1,0,1,1,0,1]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})',
      },
      {
        parameter: '[0,0,0,0]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{0,0,0,0})',
      },
      {
        parameter: '[1,1,1,1,1]',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,1,1,1,1})',
      },
      {
        parameter: '[0,1,0,1,0,1]',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{0,1,0,1,0,1})',
        parameter: '[1,1,0,1,1,1]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})',
      },
      {
        parameter: '[1,0,1,1,0,1]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})',
      },
      {
        parameter: '[0,0,0,0]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{0,0,0,0})',
      },
      {
        parameter: '[1,1,1,1,1]',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{1,1,1,1,1})',
      },
      {
        parameter: '[0,1,0,1,0,1]',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'findMaxConsecutiveOnes(new int[]{0,1,0,1,0,1})',
      },
    ],
  },
  {
    number: 14,
    heading: 'Count Vowels in a String',
    difficulty: 'Easy',
    isSolved: false,
    language: 'javascript',
    heading: 'Count Vowels in a String',
    difficulty: 'Easy',
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given a string, count the number of vowels (a, e, i, o, u) in the string.',
    constraints: [
      '1 <= s.length <= 10^5',
      'String contains only lowercase English letters.',
    ],
    functionName: 'countVowels',
    returnType: 'number',
    javascriptDefaultCode:
      '/\n* @param {string} s\n* @return {number}\n*/\nvar countVowels = function(s) {\n    // Write your code here\n};\n',
    pythonDefaultCode: 'def countVowels(s):\n# Write your code here\n',
    javaDefaultCode:
      'public static int countVowels(String s) {\n// Write your code here\n}',
    constraints: [
      '1 <= s.length <= 10^5',
      'String contains only lowercase English letters.',
    ],
    functionName: 'countVowels',
    returnType: 'number',
    javascriptDefaultCode:
      '/**\n* @param {string} s\n* @return {number}\n*/\nvar countVowels = function(s) {\n    // Write your code here\n};\n',
    pythonDefaultCode: 'def countVowels(s):\n# Write your code here\n',
    javaDefaultCode:
      'public static int countVowels(String s) {\n// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: '1',
        input: 's = "hello"',
        output: '2',
        number: '1',
        input: 's = "hello"',
        output: '2',
        parameter: '"hello"',
        javaFuncCall: 'countVowels("hello")',
        explanation: "The string \"hello\" contains 2 vowels: 'e' and 'o'.",
        image: null,
      },
      {
        number: '2',
        input: 's = "world"',
        output: '1',
        parameter: '"world"',
        javaFuncCall: 'countVowels("world")',
        explanation: 'The string "world" contains 1 vowel: \'o\'.',
        number: '2',
        input: 's = "world"',
        output: '1',
        parameter: '"world"',
        javaFuncCall: 'countVowels("world")',
        explanation: 'The string "world" contains 1 vowel: \'o\'.',
        image: null,
      },
    ],
    cases: [
      {
        parameter: '"hello"',
        expectedOutput: '2',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'countVowels("hello")',
      },
      {
        parameter: '"world"',
        expectedOutput: '1',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'countVowels("world")',
      },
      {
        parameter: '"programming"',
        expectedOutput: '3',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'countVowels("programming")',
      },
      {
        parameter: '"javascript"',
        expectedOutput: '3',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'countVowels("javascript")',
      },
      {
        parameter: '"algorithm"',
        expectedOutput: '3',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'countVowels("algorithm")',
      },
      {
        parameter: '"ai"',
        expectedOutput: '2',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'countVowels("ai")',
      },
    ],
  },
  {
    number: 15,
    heading: 'Remove Element',
    difficulty: 'Medium',
    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an array nums and a value val, remove all instances of that value in-place and return the new length.',
    constraints: [
      "The order of elements can be changed. It doesn't matter what you leave beyond the new length.",
    ],
    functionName: 'removeElement',
    returnType: 'int',
    javascriptDefaultCode:
      '/** @param {number[]} nums\n\t* @param {number} val\n\t* @return {number}\n*/\n\nvar removeElement = function(nums, val) {\n\t// Write your code here\n};',
    pythonDefaultCode:
      '\ndef removeElement(nums, val):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int removeElement(int[] nums, int val) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'nums = [3, 2, 2, 3], val = 3',
        output: '2',
        parameter: '[3, 2, 2, 3], 3',
        explanation:
          'Given nums array = [3, 2, 2, 3], and val = 3, Your function should return length = 2, with the first two elements of nums being 2.',
        image: null,
        javaFuncCall: 'removeElement(new int[]{3, 2, 2, 3}, 3)',
      },
      {
        number: 2,
        input: 'nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2',
        output: '5',
        parameter: '[0, 1, 2, 2, 3, 0, 4, 2], 2',
        explanation:
          'Given nums array = [0, 1, 2, 2, 3, 0, 4, 2], and val = 2, Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.',
        image: null,
        javaFuncCall: 'removeElement(new int[]{0, 1, 2, 2, 3, 0, 4, 2}, 2)',
      },
    ],
    cases: [
      {
        parameter: '[3, 2, 2, 3], 3',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{3, 2, 2, 3}, 3)',
      },
      {
        parameter: '[0, 1, 2, 2, 3, 0, 4, 2], 2',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{0, 1, 2, 2, 3, 0, 4, 2}, 2)',
      },
      {
        parameter: '[1], 1',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{1}, 1)',
      },
      {
        parameter: '[1], 2',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{1}, 2)',
      },
      {
        parameter: '[1, 2], 1',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{1, 2}, 1)',
      },
      {
        parameter: '[1, 2], 2',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{1, 2}, 2)',
      },
    ],
  },
  {
    number: 16,
    heading: 'Search Insert Position',
    difficulty: 'Easy',
    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
    constraints: [
      'The input array is guaranteed to be sorted in ascending order.',
      'The input array may contain duplicates, but they will not affect the answer.',
      'The length of the input array is within the range [0, 10^4].',
      'The elements in the input array are integers in the range [-10^4, 10^4].',
    ],
    functionName: 'searchInsert',
    returnType: 'int',
    javascriptDefaultCode:
      '/** @param {number[]} nums\n\t* @param {number} target\n\t* @return {number}\n*/\n\nvar searchInsert = function(nums, target) {\n\t// Write your code here\n};',
    pythonDefaultCode:
      '\ndef searchInsert(nums, target):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int searchInsert(int[] nums, int target) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'nums = [1, 3, 5, 6], target = 5',
        output: '2',
        parameter: '[1, 3, 5, 6], 5',
        explanation:
          'Since 5 is found at index 2 in the array, the function should return 2.',
        image: null,
        javaFuncCall: 'searchInsert(new int[]{1, 3, 5, 6}, 5)',
      },
      {
        number: 2,
        input: 'nums = [1, 3, 5, 6], target = 2',
        output: '1',
        parameter: '[1, 3, 5, 6], 2',
        explanation:
          'Since 2 is not found but can be inserted at index 1 in the array, the function should return 1.',
        image: null,
        javaFuncCall: 'searchInsert(new int[]{1, 3, 5, 6}, 2)',
      },
      {
        number: 3,
        input: 'nums = [1, 3, 5, 6], target = 7',
        output: '4',
        parameter: '[1, 3, 5, 6], 7',
        explanation:
          'Since 7 is not found but can be inserted at index 4 in the array, the function should return 4.',
        image: null,
        javaFuncCall: 'searchInsert(new int[]{1, 3, 5, 6}, 7)',
      },
    ],
    cases: [
      {
        parameter: '[1, 3, 5, 6], 5',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'searchInsert(new int[]{1, 3, 5, 6}, 5)',
      },
      {
        parameter: '[1, 3, 5, 6], 2',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'searchInsert(new int[]{1, 3, 5, 6}, 2)',
      },
      {
        parameter: '[1, 3, 5, 6], 7',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'searchInsert(new int[]{1, 3, 5, 6}, 7)',
      },
      {
        parameter: '[1, 3, 5, 6], 0',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'searchInsert(new int[]{1, 3, 5, 6}, 0)',
      },
      {
        parameter: '[1], 0',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'searchInsert(new int[]{1}, 0)',
      },
    ],
  },
  {
    number: 17,
    heading: 'Binary Search',
    difficulty: 'Medium',
    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.',
    constraints: [
      'You may assume that all elements in nums are unique.',
      'n will be in the range [1, 10000].',
      'The value of each element in nums will be in the range [-9999, 9999].',
    ],
    functionName: 'binarySearch',
    returnType: 'int',
    javascriptDefaultCode:
      '/** @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar binarySearch = function(nums, target) {\n    // Write your code here\n};',
    pythonDefaultCode:
      '\ndef binarySearch(nums: List[int], target: int) -> int:\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int binarySearch(int[] nums, int target) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'nums = [-1,0,3,5,9,12], target = 9',
        output: '4',
        parameter: '[-1,0,3,5,9,12], 9',
        explanation:
          'Return index 4 (0-indexed) since 9 is present at index 4 in nums.',
        image: null,
        javaFuncCall: 'binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 9)',
      },
      {
        number: 2,
        input: 'nums = [-1,0,3,5,9,12], target = 2',
        output: '-1',
        parameter: '[-1,0,3,5,9,12], 2',
        explanation: '2 is not present in nums so return -1.',
        image: null,
        javaFuncCall: 'binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 2)',
      },
    ],
    cases: [
      {
        parameter: '[-1,0,3,5,9,12], 9',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 9)',
      },
      {
        parameter: '[-1,0,3,5,9,12], 2',
        expectedOutput: '-1',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 2)',
      },
      {
        parameter: '[-1,0,3,5,9,12], 12',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 12)',
      },
      {
        parameter: '[5], 5',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{5}, 5)',
      },
      {
        parameter: '[5], -5',
        expectedOutput: '-1',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{5}, -5)',
      },
      {
        parameter: '[1,3,5,7,9], 7',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{1, 3, 5, 7, 9}, 7)',
      },
      {
        parameter: '[1,3,5,7,9], 10',
        expectedOutput: '-1',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{1, 3, 5, 7, 9}, 10)',
      },
      {
        parameter: '[-10,-5,0,3,7], 0',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{-10, -5, 0, 3, 7}, 0)',
      },
      {
        parameter: '[-10,-5,0,3,7], -10',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{-10, -5, 0, 3, 7}, -10)',
      },
      {
        parameter: '[1,2,3,4,5], 1',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'binarySearch(new int[]{1, 2, 3, 4, 5}, 1)',
      },
    ],
  },
  {
    number: 18,
    heading: 'Linear Search',
    number: 15,
    heading: 'Remove Element',
    difficulty: 'Easy',
    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an integer array nums and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.',
    constraints: [
      'You may assume that all elements in nums are unique.',
      'n will be in the range [1, 100].',
      'The value of each element in nums will be in the range [-100, 100].',
    ],
    functionName: 'linearSearch',
    returnType: 'int',
    javascriptDefaultCode:
      '/** @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar linearSearch = function(nums, target) {\n    // Write your code here\n};',
    pythonDefaultCode:
      '\ndef linearSearch(nums: List[int], target: int) -> int:\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int linearSearch(int[] nums, int target) {\n\t// Write your code here\n}',
    description:
      'Given an array nums and a value val, remove all instances of that value in-place and return the new length.',
    constraints: [
      "The order of elements can be changed. It doesn't matter what you leave beyond the new length.",
    ],
    functionName: 'removeElement',
    returnType: 'int',
    javascriptDefaultCode:
      '\n/**\n\t* @param {number[]} nums\n\t* @param {number} val\n\t* @return {number}\n*/\n\nvar removeElement = function(nums, val) {\n\t// Write your code here\n};',
    pythonDefaultCode:
      '\ndef removeElement(nums, val):\n\t# Write your code here',
    javaDefaultCode:
      '\npublic static int removeElement(int[] nums, int val) {\n\t// Write your code here\n}',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'nums = [1, 2, 3, 4, 5], target = 3',
        output: '2',
        parameter: '[1, 2, 3, 4, 5], 3',
        explanation:
          'Return index 2 (0-indexed) since 3 is present at index 2 in nums.',
        image: null,
        javaFuncCall: 'linearSearch(new int[]{1, 2, 3, 4, 5}, 3)',
      },
      {
        number: 2,
        input: 'nums = [1, 2, 3, 4, 5], target = 6',
        output: '-1',
        parameter: '[1, 2, 3, 4, 5], 6',
        explanation: '6 is not present in nums so return -1.',
        image: null,
        javaFuncCall: 'linearSearch(new int[]{1, 2, 3, 4, 5}, 6)',
        input: 'nums = [3, 2, 2, 3], val = 3',
        output: '2',
        parameter: '[3, 2, 2, 3], 3',
        explanation:
          'Given nums array = [3, 2, 2, 3], and val = 3, Your function should return length = 2, with the first two elements of nums being 2.',
        image: null,
        javaFuncCall: 'removeElement(new int[]{3, 2, 2, 3}, 3)',
      },
      {
        number: 2,
        input: 'nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2',
        output: '5',
        parameter: '[0, 1, 2, 2, 3, 0, 4, 2], 2',
        explanation:
          'Given nums array = [0, 1, 2, 2, 3, 0, 4, 2], and val = 2, Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.',
        image: null,
        javaFuncCall: 'removeElement(new int[]{0, 1, 2, 2, 3, 0, 4, 2}, 2)',
      },
    ],
    cases: [
      {
        parameter: '[1, 2, 3, 4, 5], 3',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'linearSearch(new int[]{1, 2, 3, 4, 5}, 3)',
      },
      {
        parameter: '[1, 2, 3, 4, 5], 6',
        expectedOutput: '-1',
        userOutput: null,
        javaFuncCall: 'linearSearch(new int[]{1, 2, 3, 4, 5}, 6)',
      },
      {
        parameter: '[10, 20, 30, 40, 50], 20',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'linearSearch(new int[]{10, 20, 30, 40, 50}, 20)',
      },
      {
        parameter: '[10, 20, 30, 40, 50], 50',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'linearSearch(new int[]{10, 20, 30, 40, 50}, 50)',
      },
      {
        parameter: '[-5, 0, 5, 10], -5',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'linearSearch(new int[]{-5, 0, 5, 10}, -5)',
        parameter: '[3, 2, 2, 3], 3',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{3, 2, 2, 3}, 3)',
      },
      {
        parameter: '[0, 1, 2, 2, 3, 0, 4, 2], 2',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'removeElement(new int[]{0, 1, 2, 2, 3, 0, 4, 2}, 2)',
      },
      {
        parameter: '[1], 1',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'linearSearch(new int[]{1}, 1)',
      },
      {
        parameter: '[1], 0',
        expectedOutput: '-1',
        userOutput: null,
        javaFuncCall: 'linearSearch(new int[]{1}, 0)',
      },
      {
        parameter: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall:
          'linearSearch(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 5)',
      },
      {
        parameter: '[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 7',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall:
          'linearSearch(new int[]{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}, 7)',
      },
      {
        parameter: '[1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 11',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall:
          'linearSearch(new int[]{1, 3, 5, 7, 9, 11, 13, 15, 17, 19}, 11)',
      },
    ],
  },
  {
    number: 19,
    heading: 'Find Peak Element',
    difficulty: 'Medium',
    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'A peak element in an integer array is an element that is strictly greater than its neighbors. Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index. The array may contain multiple peaks, in that case, return the index to any one of the peaks.',
    constraints: [
      '1 <= nums.length <= 1000',
      'nums[i] != nums[i + 1] for all valid i',
    ],
    functionName: 'findPeakElement',
    returnType: 'int',
    javaDefaultCode:
      'public static int findPeakElement(int[] nums) {\n        // Write your code here\n    }',
    pythonDefaultCode:
      'from typing import List\ndef findPeakElement(nums: List[int]) -> int:\n    # Write your code here',
    javascriptDefaultCode:
      '\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findPeakElement = function(nums) {\n    // Write your code here\n};',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'nums = [1, 2, 3, 1]',
        output: '2',
        parameter: '[1, 2, 3, 1]',
        explanation: 'The element at index 2 (3) is a peak element.',
        image: null,
        javaFuncCall: 'findPeakElement(new int[]{1, 2, 3, 1})',
      },
      {
        number: 2,
        input: 'nums = [1, 2, 1, 3, 5, 6, 4]',
        output: '5',
        parameter: '[1, 2, 1, 3, 5, 6, 4]',
        explanation: 'The element at index 5 (6) is a peak element.',
        image: null,
        javaFuncCall: 'findPeakElement(new int[]{1, 2, 1, 3, 5, 6, 4})',
      },
    ],
    cases: [
      {
        parameter: '[1, 2, 3, 1]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findPeakElement(new int[]{1, 2, 3, 1})',
      },
      {
        parameter: '[1, 2, 1, 3, 5, 6, 4]',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findPeakElement(new int[]{1, 2, 1, 3, 5, 6, 4})',
      },
      {
        parameter: '[1]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findPeakElement(new int[]{1})',
      },
      {
        parameter: '[5, 10, 20, 15, 10]',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'findPeakElement(new int[]{5, 10, 20, 15, 10})',
      },
      {
        parameter: '[10, 8, 6, 4, 2]',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'findPeakElement(new int[]{10, 8, 6, 4, 2})',
      },
      {
        parameter: '[1, 3, 2, 4, 1]',
        expectedOutput: '3',
        userOutput: null,
        javaFuncCall: 'findPeakElement(new int[]{1, 3, 2, 4, 1})',
      },
      {
        parameter: '[1, 2, 3, 4, 5, 6]',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'findPeakElement(new int[]{1, 2, 3, 4, 5, 6})',
      },
      {
        expectedOutput: '3',
        userOutput: null,
        parameter: '[1, 2, 3, 4]',
        javaFuncCall: 'findPeakElement(new int[]{1, 2, 3, 4})',
      },
      {
        expectedOutput: '0',
        userOutput: null,
        parameter: '[4, 3, 2, 1]',
        javaFuncCall: 'findPeakElement(new int[]{4, 3, 2, 1})',
      },
      {
        expectedOutput: '2',
        userOutput: null,
        parameter: '[1, 3, 20, 4, 1, 0]',
        javaFuncCall: 'findPeakElement(new int[]{1, 3, 20, 4, 1, 0})',
      },
      {
        expectedOutput: '2',
        userOutput: null,
        parameter: '[5, 10, 20, 15]',
        javaFuncCall: 'findPeakElement(new int[]{5, 10, 20, 15})',
      },
      {
        expectedOutput: '2',
        userOutput: null,
        parameter: '[1, 2, 3]',
        javaFuncCall: 'findPeakElement(new int[]{1, 2, 3})',
      },
      {
        expectedOutput: '0',
        userOutput: null,
        parameter: '[3, 2, 1]',
        javaFuncCall: 'findPeakElement(new int[]{3, 2, 1})',
      },
      {
        expectedOutput: '1',
        userOutput: null,
        parameter: '[1, 2]',
        javaFuncCall: 'findPeakElement(new int[]{1, 2})',
      },
    ],
  },
  {
    number: 20,
    heading: 'Square Root of an Integer',
    difficulty: 'Medium',
    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an integer x, find the square root of x. If x is not a perfect square, return floor(sqrt(x)).',
    constraints: ['1 <= x <= 2^31 - 1'],
    functionName: 'sqrt',
    returnType: 'int',
    javascriptDefaultCode:
      '\n/**\n * @param {number} num\n * @return {number}\n */\nvar sqrt = function(num) {\n    // Write your code here\n};',
    pythonDefaultCode: 'def sqrt(x: int) -> int:\n  ',
    javaDefaultCode:
      '// public static int sqrt(int n) {\n // write your code here\n// }',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'n = 4',
        output: '2',
        parameter: '4',
        explanation: 'The square root of 4 is 2.',
        image: null,
        javaFuncCall: 'sqrt(4)',
      },
      {
        number: 2,
        input: 'n = 8',
        output: '2',
        parameter: '8',
        explanation: 'The floor(sqrt(8)) is 2.82842..., so the result is 2.',
        image: null,
        javaFuncCall: 'sqrt(8)',
      },
    ],
    cases: [
      {
        parameter: '4',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'sqrt(4)',
      },
      {
        parameter: '8',
        expectedOutput: '2',
        userOutput: null,
        javaFuncCall: 'sqrt(8)',
      },
      {
        parameter: '16',
        expectedOutput: '4',
        userOutput: null,
        javaFuncCall: 'sqrt(16)',
      },
      {
        parameter: '25',
        expectedOutput: '5',
        userOutput: null,
        javaFuncCall: 'sqrt(25)',
      },
      {
        parameter: '36',
        expectedOutput: '6',
        userOutput: null,
        javaFuncCall: 'sqrt(36)',
      },
      {
        parameter: '49',
        expectedOutput: '7',
        userOutput: null,
        javaFuncCall: 'sqrt(49)',
      },
      {
        parameter: '64',
        expectedOutput: '8',
        userOutput: null,
        javaFuncCall: 'sqrt(64)',
      },
      {
        parameter: '81',
        expectedOutput: '9',
        userOutput: null,
        javaFuncCall: 'sqrt(81)',
      },
      {
        parameter: '100',
        expectedOutput: '10',
        userOutput: null,
        javaFuncCall: 'sqrt(100)',
      },
      {
        parameter: '121',
        expectedOutput: '11',
        userOutput: null,
        javaFuncCall: 'sqrt(121)',
      },
      {
        parameter: '144',
        expectedOutput: '12',
        userOutput: null,
        javaFuncCall: 'sqrt(144)',
      },
    ],
  },
  {
    number: 21,
    heading: 'Reverse Integer',
    difficulty: 'Easy',
    attempts: 0,
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given a 32-bit signed integer, reverse digits of an integer.',
    constraints: ['-2^31 <= x <= 2^31 - 1'],
    functionName: 'reverseInteger',
    returnType: 'int',
    javascriptDefaultCode:
      '/**\n\t*@param{number} n\n\t*@return{number}\n*/\n\n var reverseInteger = function(n) {\n//write your code here\n}',
    pythonDefaultCode: 'def reverseInteger(n: int) -> int:\n',
    javaDefaultCode:
      '// public static int reverseInteger(int n) {\n \t//write your code here\n',
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: 'n = 123',
        output: '321',
        parameter: '123',
        explanation: 'The reverse of 123 is 321.',
        image: null,
        javaFuncCall: 'reverseInteger(123)',
      },
      {
        number: 2,
        input: 'x = -123',
        output: '-321',
        parameter: '-123',
        explanation: 'The reverse of -123 is -321.',
        image: null,
        javaFuncCall: 'reverseInteger(-123)',
      },
    ],
    cases: [
      {
        parameter: '123',
        expectedOutput: '321',
        userOutput: null,
        javaFuncCall: 'reverseInteger(123)',
      },
      {
        parameter: '-123',
        expectedOutput: '-321',
        userOutput: null,
        javaFuncCall: 'reverseInteger(-123)',
      },
      {
        parameter: '120',
        expectedOutput: '21',
        userOutput: null,
        javaFuncCall: 'reverseInteger(120)',
      },
      {
        parameter: '0',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'reverseInteger(0)',
      },
      {
        parameter: '1534236469',
        expectedOutput: '0',
        userOutput: null,
        javaFuncCall: 'reverseInteger(1534236469)',
      },
      {
        parameter: '456',
        expectedOutput: '654',
        userOutput: null,
        javaFuncCall: 'reverseInteger(456)',
      },
      {
        parameter: '-321',
        expectedOutput: '-123',
        userOutput: null,
        javaFuncCall: 'reverseInteger(-321)',
      },
      {
        parameter: '908070',
        expectedOutput: '70809',
        userOutput: null,
        javaFuncCall: 'reverseInteger(908070)',
      },
      {
        parameter: '100',
        expectedOutput: '1',
        userOutput: null,
        javaFuncCall: 'reverseInteger(100)',
      },
      {
        parameter: '-450',
        expectedOutput: '-54',
        userOutput: null,
        javaFuncCall: 'reverseInteger(-450)',
      },
    ],
  },
]

export const javaAllQuesObj = [
  {
    number: 1,

    heading: 'these all probs are from javaAllQuesObj',
    difficulty: 'Easy',
    ds: 'array',

    attempts: 0,
    heading: 'these all probs are from javaAllQuesObj',
    difficulty: 'Easy',
    ds: 'array',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',
    ds: 'array',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',
    ds: 'array',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
]

export const jsAllQuesObj = [
  {
    number: 1,

    topic: 'array',
    heading: 'these all probs are from jsAllQuesObj',
    difficulty: 'Easy',

    attempts: 0,
    topic: 'array',
    heading: 'these all probs are from jsAllQuesObj',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
]

export const pythonAllQuesObj = [
  {
    number: 1,

    heading: 'these all probs are from pythonAllQuesObj',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'these all probs are from pythonAllQuesObj',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    topic: 'binary search',
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: 'Add two numbers',
    difficulty: 'Easy',

    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',

    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
]
