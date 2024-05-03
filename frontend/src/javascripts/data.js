export const AllquesObject = [
  {
    number: 1,
    heading: 'Add two numbers',
    difficulty: 'Easy',
    isSolved: true,
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
        parameter: 'hello',
        expectedOutput: 'olleh',
        userOutput: null,
        javaFuncCall: 'reverseString("hello")',
      },
      {
        parameter: 'world',
        expectedOutput: 'dlrow',
        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: 'apple',
        expectedOutput: 'elppa',
        userOutput: null,
        javaFuncCall: 'reverseString("apple")',
      },
      {
        parameter: 'openai',
        expectedOutput: 'ianepo',
        userOutput: null,
        javaFuncCall: 'reverseString("openai")',
      },
      {
        parameter: 'racecar',
        expectedOutput: 'racecar',
        userOutput: null,
        javaFuncCall: 'reverseString("racecar")',
      },
      {
        parameter: '123456',
        expectedOutput: '654321',
        userOutput: null,
        javaFuncCall: 'reverseString("123456")',
      },
      {
        parameter: 'goodbye',
        expectedOutput: 'eybdoog',
        userOutput: null,
        javaFuncCall: 'reverseString("goodbye")',
      },
      {
        parameter: 'world',
        expectedOutput: 'dlrow',
        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: 'hello world',
        expectedOutput: 'dlrow olleh',
        userOutput: null,
        javaFuncCall: 'reverseString("hello world")',
      },
      {
        parameter: 'algorithm',
        expectedOutput: 'mhtirogla',
        userOutput: null,
        javaFuncCall: 'reverseString("algorithm")',
      },
      {
        parameter: 'reverse',
        expectedOutput: 'esrever',
        userOutput: null,
        javaFuncCall: 'reverseString("reverse")',
      },
      {
        parameter: 'abcdef',
        expectedOutput: 'fedcba',
        userOutput: null,
        javaFuncCall: 'reverseString("abcdef")',
      },
      {
        parameter: 'javascript',
        expectedOutput: 'tpircsavaj',
        userOutput: null,
        javaFuncCall: 'reverseString("javascript")',
      },
      {
        parameter: 'programming',
        expectedOutput: 'gnimmargorp',
        userOutput: null,
        javaFuncCall: 'reverseString("programming")',
      },
      {
        parameter: 'computer',
        expectedOutput: 'retupmoc',
        userOutput: null,
        javaFuncCall: 'reverseString("computer")',
      },
      {
        parameter: 'science',
        expectedOutput: 'ecneics',
        userOutput: null,
        javaFuncCall: 'reverseString("science")',
      },
      {
        parameter: 'engineering',
        expectedOutput: 'gnireenigne',
        userOutput: null,
        javaFuncCall: 'reverseString("engineering")',
      },
      {
        parameter: 'artificial intelligence',
        expectedOutput: 'ecnegilletni laicifitra',
        userOutput: null,
        javaFuncCall: 'reverseString("artificial intelligence")',
      },
      {
        parameter: 'machine learning',
        expectedOutput: 'gninrael enihcam',
        userOutput: null,
        javaFuncCall: 'reverseString("machine learning")',
      },
      {
        parameter: 'data science',
        expectedOutput: 'ecneics atad',
        userOutput: null,
        javaFuncCall: 'reverseString("data science")',
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
    heading: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    description:
      'Given a string s, return the longest palindromic substring in s.',
    example: [
      {
        number: '1',
        input: '"babad"',
        output: '"bab"',
        explanation: '',
        image: null,
      },
    ],
    constraints: [
      '1 <= s.length <= 1000',
      's consist of only digits and English letters (lower-case and/or upper-case)',
    ],
    cases: [
      {
        input: '"babad"',
        output: '"bab"',
      },
      {
        input: '"cbbd"',
        output: '"bb"',
      },
      {
        input: '"a"',
        output: '"a"',
      },
    ],
    image: null,
    isSolved: true,
    topic: 'LinkedList',
  },
  {
    number: 6,
    heading: 'ZigZag Conversion',
    difficulty: 'Medium',
    description:
      'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility) And then read line by line: "PAHNAPLSIIGYIR"',
    example: [
      {
        number: '1',
        input: '(s = "PAYPALISHIRING", numRows = 3)',
        output: '"PAHNAPLSIIGYIR"',
        explanation: '',
        image: null,
      },
    ],
    constraints: [
      '1 <= s.length <= 1000',
      "s consists of English letters (lower-case and upper-case), ', ' and '.'",
      '1 <= numRows <= 1000',
    ],
    cases: [
      {
        input: '(s = "PAYPALISHIRING", numRows = 3)',
        output: '"PAHNAPLSIIGYIR"',
      },
      {
        input: '(s = "PAYPALISHIRING", numRows = 4)',
        output: '"PINALSIGYAHRPI"',
      },
      {
        input: '(s = "A", numRows = 1)',
        output: '"A"',
      },
    ],
    // isSolved: false,
    image: null,
    isSolved: true,
    image: 'null',
    topic: 'Array',
  },
  {
    number: 7,
    heading: 'Reverse Integer',
    difficulty: 'Easy',
    description:
      'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.',
    example: [
      {
        number: '1',
        input: '123',
        output: '321',
        explanation: '',
        image: null,
      },
    ],
    constraints: ['-231 <= x <= 231 - 1'],
    cases: [
      {
        input: '123',
        output: '321',
      },
      {
        input: '-123',
        output: '-321',
      },
      {
        input: '120',
        output: '21',
      },
    ],
    image: null,
    isSolved: true,
    image: 'null',
    topic: 'Tree',
  },
  {
    number: 8,
    heading: 'Palindrome Number',
    difficulty: 'Easy',
    description:
      'Given an integer x, return true if x is a palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.',
    example: [
      {
        number: '1',
        input: '121',
        output: 'true',
        explanation: '',
        image: null,
      },
    ],
    constraints: ['-231 <= x <= 231 - 1'],
    cases: [
      {
        input: '121',
        output: 'true',
      },
      {
        input: '-121',
        output: 'false',
      },
      {
        input: '10',
        output: 'false',
      },
    ],
    image: null,
    isSolved: true,
    image: 'null',
    topic: 'Binary Search',
  },
  {
    number: 9,
    heading: 'Regular Expression Matching',
    difficulty: 'Hard',
    description:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: - '.' Matches any single character. - '*' Matches zero or more of the preceding element.",
    example: [
      {
        number: '1',
        input: '(s = "aa", p = "a")',
        output: 'false',
        explanation: '',
        image: null,
      },
    ],
    constraints: [
      '1 <= s.length <= 20',
      '1 <= p.length <= 30',
      's contains only lowercase English letters.',
      "p contains only lowercase English letters, '.', and '*'.",
      "It is guaranteed for each appearance of the character '.', there will be a previous valid character to match.",
    ],
    cases: [
      {
        input: '(s = "aa", p = "a")',
        output: 'false',
      },
      {
        input: '(s = "aa", p = "a*")',
        output: 'true',
      },
      {
        input: '(s = "ab", p = ".*")',
        output: 'true',
      },
    ],
    isSolved: false,
    image: null,
    topic: 'String',
  },
  {
    number: 10,
    heading: 'Container With Most Water',
    difficulty: 'Medium',
    description:
      'Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.',
    example: [
      {
        number: '1',
        input: '[1,8,6,2,5,4,8,3,7]',
        output: '49',
        explanation: '',
        image: null,
      },
    ],
    constraints: [
      'n == height.length',
      '2 <= n <= 10^5',
      '0 <= height[i] <= 10^4',
    ],
    isSolved: true,
    image: 'null',
    topic: 'String',
  },
  {
    heading: 'Sqrt(x)',
    difficulty: 'Hard',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      { input: 'nums = [6,3,6,0], target = 3', output: '[0,3]' },
      { input: 'nums = [1,23,4,5], target = 8', output: '[1,1]' },
    ],
    isSolved: true,
    image: 'null',
    topic: 'Array',
  },
  {
    heading: 'Merge Sorted Array',
    difficulty: 'Medium',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      {
        input: '[1,8,6,2,5,4,8,3,7]',
        output: '49',
      },
      {
        input: '[1,1]',
        output: '1',
      },
      {
        input: '[4,3,2,1,4]',
        output: '16',
      },
    ],
    isSolved: false,
    image: null,
    topic: 'Array',
  },
  {
    heading: 'Reverse Linked List 2',
    difficulty: 'Easy',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      { input: 'nums = [6,3,6,0], target = 3', output: '[0,3]' },
      { input: 'nums = [1,23,4,5], target = 8', output: '[1,1]' },
    ],
    isSolved: false,
    image: 'null',
    topic: 'LinkedList',
  },
  {
    heading: 'Same Tree',
    difficulty: 'Hard',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      { input: 'nums = [6,3,6,0], target = 3', output: '[0,3]' },
      { input: 'nums = [1,23,4,5], target = 8', output: '[1,1]' },
    ],
    isSolved: false,
    image: 'null',
    topic: 'Tree',
  },
  {
    heading: 'Looping',
    difficulty: 'Hard',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      { input: 'nums = [6,3,6,0], target = 3', output: '[0,3]' },
      { input: 'nums = [1,23,4,5], target = 8', output: '[1,1]' },
    ],
    isSolved: false,
    image: 'null',
    topic: 'Array',
  },
  {
    heading: 'Three Sum',
    difficulty: 'Hard',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      { input: 'nums = [6,3,6,0], target = 3', output: '[0,3]' },
      { input: 'nums = [1,23,4,5], target = 8', output: '[1,1]' },
    ],
    isSolved: false,
    image: 'null',
    topic: 'Array',
  },
  {
    heading: 'Longest Common Prefix',
    difficulty: 'Easy',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      { input: 'nums = [6,3,6,0], target = 3', output: '[0,3]' },
      { input: 'nums = [1,23,4,5], target = 8', output: '[1,1]' },
    ],
    isSolved: false,
    image: 'null',
    topic: 'Binary Search',
  },
  {
    heading: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: 'Example 1:Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    Explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints:
      '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
    cases: [
      { input: 'nums = [6,3,6,0], target = 3', output: '[0,3]' },
      { input: 'nums = [1,23,4,5], target = 8', output: '[1,1]' },
    ],
    isSolved: false,
    image: 'null',
    topic: 'Array',
  },
]

export default AllquesObject
