export const AllquesObject = [
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    returnType: "int",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        javaFuncCall: "addTwoNumbers(10,5)",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        javaFuncCall: "addTwoNumbers(3,2)",

        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        javaFuncCall: "addTwoNumbers(200,300)",

        explanation: "a + b = 500",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(10, 5)",
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(3, 2)",
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(200, 300)",
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(1000000000, 1)",
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(999999999, 999999999)",
      },

      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(123456789, 987654321)",
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(17, 23)",
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(50, 50)",
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(-100, 200)",
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(999, -999)",
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(-123, -456)",
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
        javaFuncCall: "addTwoNumbers(0, 999)",
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

    heading: "String Reverse",
    difficulty: "Easy",

    attempts: 0,
    heading: "String Reverse",
    difficulty: "Easy",

    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a string, reverse the string and return the reversed string.",
    constraints: [
      "The input string can contain any characters including letters, digits, and special characters.",
      "The length of the input string is within the typical string length range.",
      "The input string may be empty.",
    ],
    functionName: "reverseString",
    returnType: "string",
    javascriptDefaultCode:
      "\n/**\n\t* @param {string} str\n\t* @return {string}\n*/\n\nvar reverseString = function(str) {\n\t// Write your code here\n};",
    pythonDefaultCode: "\ndef reverseString(s):\n\t# Write your code here",
    javaDefaultCode:
      "\npublic static String reverseString(String str) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "str = hello",
        output: "olleh",
        parameter: '"hello"',
        javaFuncCall: 'reverseString("hello")',
        explanation: "The input string 'hello' is reversed to 'olleh'.",
        image: null,
      },
      {
        number: 2,
        input: "str = world",
        output: "dlrow",
        parameter: '"world"',
        javaFuncCall: 'reverseString("world")',

        explanation: "The input string 'world' is reversed to 'dlrow'.",
        image: null,
      },
      {
        number: 3,
        input: "str = 12345",
        output: "54321",
        parameter: '"12345"',
        javaFuncCall: 'reverseString("12345")',

        explanation: "The input string '12345' is reversed to '54321'.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "hello",
        expectedOutput: "olleh",

        parameter: '"hello"',
        expectedOutput: "olleh",

        userOutput: null,
        javaFuncCall: 'reverseString("hello")',
      },
      {
        parameter: "world",
        expectedOutput: "dlrow",

        parameter: '"world"',
        expectedOutput: "dlrow",

        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: "apple",
        expectedOutput: "elppa",

        parameter: '"apple"',
        expectedOutput: "elppa",

        userOutput: null,
        javaFuncCall: 'reverseString("apple")',
      },
      {
        parameter: "openai",
        expectedOutput: "ianepo",

        parameter: '"openai"',
        expectedOutput: "ianepo",

        userOutput: null,
        javaFuncCall: 'reverseString("openai")',
      },
      {
        parameter: "racecar",
        expectedOutput: "racecar",

        parameter: '"racecar"',
        expectedOutput: "racecar",

        userOutput: null,
        javaFuncCall: 'reverseString("racecar")',
      },
      {
        parameter: "123456",
        expectedOutput: "654321",

        parameter: '"123456"',
        expectedOutput: "654321",

        userOutput: null,
        javaFuncCall: 'reverseString("123456")',
      },
      {
        parameter: "goodbye",
        expectedOutput: "eybdoog",

        parameter: '"goodbye"',
        expectedOutput: "eybdoog",

        userOutput: null,
        javaFuncCall: 'reverseString("goodbye")',
      },
      {
        parameter: "world",
        expectedOutput: "dlrow",

        parameter: '"world"',
        expectedOutput: "dlrow",

        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: "hello world",
        expectedOutput: "dlrow olleh",

        parameter: '"hello world"',
        expectedOutput: "dlrow olleh",

        userOutput: null,
        javaFuncCall: 'reverseString("hello world")',
      },
      {
        parameter: "algorithm",
        expectedOutput: "mhtirogla",

        parameter: '"algorithm"',
        expectedOutput: "mhtirogla",

        userOutput: null,
        javaFuncCall: 'reverseString("algorithm")',
      },
      {
        parameter: "reverse",
        expectedOutput: "esrever",

        parameter: '"reverse"',
        expectedOutput: "esrever",

        userOutput: null,
        javaFuncCall: 'reverseString("reverse")',
      },
      {
        parameter: "abcdef",
        expectedOutput: "fedcba",

        parameter: '"abcdef"',
        expectedOutput: "fedcba",

        userOutput: null,
        javaFuncCall: 'reverseString("abcdef")',
      },
      {
        parameter: "javascript",
        expectedOutput: "tpircsavaj",

        parameter: '"javascript"',
        expectedOutput: "tpircsavaj",

        userOutput: null,
        javaFuncCall: 'reverseString("javascript")',
      },
      {
        parameter: "programming",
        expectedOutput: "gnimmargorp",

        parameter: '"programming"',
        expectedOutput: "gnimmargorp",

        userOutput: null,
        javaFuncCall: 'reverseString("programming")',
      },
      {
        parameter: "computer",
        expectedOutput: "retupmoc",

        parameter: '"computer"',
        expectedOutput: "retupmoc",

        userOutput: null,
        javaFuncCall: 'reverseString("computer")',
      },
      {
        parameter: "science",
        expectedOutput: "ecneics",

        parameter: '"science"',
        expectedOutput: "ecneics",

        userOutput: null,
        javaFuncCall: 'reverseString("science")',
      },
      {
        parameter: "engineering",
        expectedOutput: "gnireenigne",

        parameter: '"engineering"',
        expectedOutput: "gnireenigne",

        userOutput: null,
        javaFuncCall: 'reverseString("engineering")',
      },
      {
        parameter: "artificial intelligence",
        expectedOutput: "ecnegilletni laicifitra",

        parameter: '"artificial intelligence"',
        expectedOutput: "ecnegilletni laicifitra",

        userOutput: null,
        javaFuncCall: 'reverseString("artificial intelligence")',
      },
      {
        parameter: "machine learning",
        expectedOutput: "gninrael enihcam",

        parameter: '"machine learning"',
        expectedOutput: "gninrael enihcam",

        userOutput: null,
        javaFuncCall: 'reverseString("machine learning")',
      },
      {
        parameter: "data science",
        expectedOutput: "ecneics atad",

        parameter: '"data science"',
        expectedOutput: "ecneics atad",

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

    heading: "Find Minimum and Maximum Number",
    difficulty: "Easy",

    attempts: 0,
    heading: "Find Minimum and Maximum Number",
    difficulty: "Easy",

    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an array of numbers, find the minimum and maximum numbers in the array, return the minimum and maximum number in array",
    constraints: [
      "The input array contains at least one element.",
      "The elements in the input array can be positive or negative integers.",
      "Duplicate elements are allowed in the input array.",
      "The length of the input array is within the range of a typical array.",
      "The values of the input array can range from the minimum to the maximum integer values.",
    ],
    functionName: "findMinMax",
    returnType: "array",
    javascriptDefaultCode:
      "\n/**\n\t* @param {number[]} nums\n\t* @return {number[]}\n*/\n\nvar findMinMax = function(nums) {\n\t// Write your code here\n};",
    pythonDefaultCode: "\ndef findMinMax(nums):\n\t# Write your code here",
    javaDefaultCode:
      "\npublic static int[] findMinMax(int[] nums) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [4, 2, 7, 1, 9]",
        output: "[1,9]",
        parameter: "[4, 2, 7, 1, 9]",
        javaFuncCall: "findMinMax(new int[]{4, 2, 7, 1, 9});",
        explanation:
          "In the input array [4, 2, 7, 1, 9], the minimum number is 1 and the maximum number is 9.",
        image: null,
      },
      {
        number: 2,
        input: "nums = [10, 5, 3, 8, 2]",
        output: "[2,10]",
        parameter: "[10, 5, 3, 8, 2]",
        javaFuncCall: "findMinMax(new int[]{10, 5, 3, 8, 2});",
        explanation:
          "In the input array [10, 5, 3, 8, 2], the minimum number is 2 and the maximum number is 10.",
        image: null,
      },
      {
        number: 3,
        input: "nums = [-5, -10, -3, -8, -2]",
        output: "[-10,-2]",
        parameter: "[-5, -10, -3, -8, -2]",
        javaFuncCall: "findMinMax(new int[]{-5, -10, -3, -8, -2});",
        explanation:
          "In the input array [-5, -10, -3, -8, -2], the minimum number is -10 and the maximum number is -2.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[4, 2, 7, 1, 9]",
        expectedOutput: "[1,9]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{4, 2, 7, 1, 9});",
      },
      {
        parameter: "[10, 5, 3, 8, 2]",
        expectedOutput: "[2,10]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{10, 5, 3, 8, 2});",
      },
      {
        parameter: "[-5, -10, -3, -8, -2]",
        expectedOutput: "[-10,-2]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{-5, -10, -3, -8, -2});",
      },
      {
        parameter: "[1, 1, 1, 1, 1]",
        expectedOutput: "[1,1]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{1, 1, 1, 1, 1});",
      },
      {
        parameter: "[0, 0, 0, 0, 0]",
        expectedOutput: "[0,0]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{0, 0, 0, 0, 0});",
      },
      {
        parameter: "[100, 200, 300, 400, 500]",
        expectedOutput: "[100,500]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{100, 200, 300, 400, 500});",
      },
      {
        parameter: "[-100, -200, -300, -400, -500]",
        expectedOutput: "[-500,-100]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{-100, -200, -300, -400, -500});",
      },
      {
        parameter: "[5, 4, 3, 2, 1]",
        expectedOutput: "[1,5]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{5, 4, 3, 2, 1});",
      },
      {
        parameter: "[10, -5, 8, -3, 6]",
        expectedOutput: "[-5,10]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{10, -5, 8, -3, 6});",
      },
      {
        parameter: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
        expectedOutput: "[1,10]",
        userOutput: null,
        javaFuncCall: "findMinMax(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10});",
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

    heading: "Find Second Largest Element in Array",
    difficulty: "Easy",

    attempts: 0,
    heading: "Find Second Largest Element in Array",
    difficulty: "Easy",

    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an array of integers, find the second largest element in the array. Return the answer",
    constraints: [
      "The input array contains at least two distinct elements.",
      "The elements in the input array are integers.",
      "Duplicate elements are allowed in the input array.",
      "The length of the input array is within the range of a typical array.",
      "The values of the input array can range from the minimum to the maximum integer values.",
    ],
    functionName: "findSecondLargest",
    returnType: "int",
    javascriptDefaultCode:
      "\n/**\n\t* @param {number[]} nums\n\t* @return {number}\n*/\n\nvar findSecondLargest = function(nums) {\n\t// Write your code here\n};",
    pythonDefaultCode:
      "\ndef findSecondLargest(nums):\n\t# Write your code here",
    javaDefaultCode:
      "\npublic static int findSecondLargest(int[] nums) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [4, 2, 7, 1, 9]",
        output: "7",
        parameter: "[4, 2, 7, 1, 9]",
        explanation:
          "In the input array [4, 2, 7, 1, 9], the second largest element is 7.",
        image: null,
        javaFuncCall: "findSecondLargest(new int[]{4, 2, 7, 1, 9})",
      },
      {
        number: 2,
        input: "nums = [10, 5, 3, 8, 2]",
        output: "8",
        parameter: "[10, 5, 3, 8, 2]",
        explanation:
          "In the input array [10, 5, 3, 8, 2], the second largest element is 8.",
        image: null,
        javaFuncCall: "findSecondLargest(new int[]{10, 5, 3, 8, 2})",
      },
      {
        number: 3,
        input: "nums = [-5, -10, -3, -8, -2]",
        output: "-3",
        parameter: "[-5, -10, -3, -8, -2]",
        explanation:
          "In the input array [-5, -10, -3, -8, -2], the second largest element is -3.",
        image: null,
        javaFuncCall: "findSecondLargest(new int[]{-5, -10, -3, -8, -2})",
      },
    ],
    cases: [
      {
        parameter: "[4, 2, 7, 1, 9]",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{4, 2, 7, 1, 9})",
      },
      {
        parameter: "[10, 5, 3, 8, 2]",
        expectedOutput: "8",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{10, 5, 3, 8, 2})",
      },
      {
        parameter: "[-5, -10, -3, -8, -2]",
        expectedOutput: "-3",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{-5, -10, -3, -8, -2})",
      },
      {
        parameter: "[1, 4, 4, 5, 1]",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{1, 4, 4, 5, 1})",
      },
      {
        parameter: "[0, 0, 0, 1, 5]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{0, 0, 0, 1, 5})",
      },
      {
        parameter: "[100, 200, 300, 400, 500]",
        expectedOutput: "400",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{100, 200, 300, 400, 500})",
      },
      {
        parameter: "[-100, -200, -300, -400, -500]",
        expectedOutput: "-200",
        userOutput: null,
        javaFuncCall:
          "findSecondLargest(new int[]{-100, -200, -300, -400, -500})",
      },
      {
        parameter: "[5, 4, 3, 2, 1]",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{5, 4, 3, 2, 1})",
      },
      {
        parameter: "[10, -5, 8, -3, 6]",
        expectedOutput: "8",
        userOutput: null,
        javaFuncCall: "findSecondLargest(new int[]{10, -5, 8, -3, 6})",
      },
      {
        parameter: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
        expectedOutput: "9",
        userOutput: null,
        javaFuncCall:
          "findSecondLargest(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})",
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

    heading: "Create Array of Numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Create Array of Numbers",
    difficulty: "Easy",

    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an integer n, create an array containing integers from 0 to n-1. Return the array.",
    constraints: [
      "The input integer n is greater than or equal to 0.",
      "The length of the output array is equal to n.",
      "The values of the output array range from 0 to n-1.",
    ],
    functionName: "createArray",

    returnType: "array",
    javascriptDefaultCode:
      "\n/**\n\t* @param {number} n\n\t* @return {number[]}\n*/\n\nvar createArray = function(n) {\n\t// Write your code here\n};",
    pythonDefaultCode: "\ndef createArray(n):\n\t# Write your code here",
    javaDefaultCode:
      "\npublic static int[] createArray(int n) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "n = 5",
        output: "[0,1,2,3,4]",
        parameter: "5",
        javaFuncCall: "createArray(5);",
        explanation:
          "For n = 5, the array should contain integers from 0 to 4.",
        image: null,
      },
      {
        number: 2,
        input: "n = 3",
        output: "[0,1,2]",
        parameter: "3",
        javaFuncCall: "createArray(3);",

        explanation:
          "For n = 3, the array should contain integers from 0 to 2.",
        image: null,
      },
      {
        number: 3,
        input: "n = 0",
        output: "[]",
        parameter: "0",
        javaFuncCall: "createArray(0);",

        explanation: "For n = 0, the array should be empty.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "5",
        expectedOutput: "[0,1,2,3,4]",
        javaFuncCall: "createArray(5);",
        userOutput: null,
      },
      {
        parameter: "3",
        expectedOutput: "[0,1,2]",
        javaFuncCall: "createArray(3);",
        userOutput: null,
      },
      {
        parameter: "0",
        expectedOutput: "[]",
        javaFuncCall: "createArray(0);",
        userOutput: null,
      },
      {
        parameter: "1",
        expectedOutput: "[0]",
        javaFuncCall: "createArray(1);",
        userOutput: null,
      },
      {
        parameter: "2",
        expectedOutput: "[0,1]",
        javaFuncCall: "createArray(2);",
        userOutput: null,
      },
      {
        parameter: "4",
        expectedOutput: "[0,1,2,3]",
        javaFuncCall: "createArray(4);",
        userOutput: null,
      },
      {
        parameter: "6",
        expectedOutput: "[0,1,2,3,4,5]",
        javaFuncCall: "createArray(6);",
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

    heading: "Increment Matrix Values",
    difficulty: "Easy",

    attempts: 0,
    heading: "Increment Matrix Values",
    difficulty: "Easy",

    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a matrix of arrays of numbers, increment each value in the matrix by 1. Return the modified matrix.",
    constraints: [
      "The input matrix is a 2-dimensional array.",
      "Each inner array represents a row in the matrix.",
      "The values in the matrix are integers.",
    ],
    functionName: "increment_matrix_values",
    returnType: "matrix",
    javascriptDefaultCode:
      "\n/**\n\t* @param {number[][]} matrix\n\t* @return {number[][]}\n*/\n\nvar increment_matrix_values = function(matrix) {\n\t// Write your code here\n};",
    pythonDefaultCode:
      "\ndef increment_matrix_values(matrix):\n\t# Write your code here",
    javaDefaultCode:
      "\npublic static int[][] increment_matrix_values(int[][] matrix) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "matrix = [[1, 2], [3, 4]]",
        output: "[[2,3],[4,5]]",
        parameter: "[[1, 2], [3, 4]]",
        javaFuncCall: "increment_matrix_values(new int[][]{{1, 2}, {3, 4}});",
        explanation: "Increment each value by 1.",
        image: null,
      },
      {
        number: 2,
        input: "matrix = [[0, 0], [0, 0]]",
        output: "[[1,1],[1,1]]",
        parameter: "[[0, 0], [0, 0]]",
        javaFuncCall: "increment_matrix_values(new int[][]{{0, 0}, {0, 0}});",
        explanation: "Increment each value by 1.",
        image: null,
      },
      {
        number: 3,
        input: "matrix = [[-1, -2], [-3, -4]]",
        output: "[[0,-1],[-2,-3]]",
        parameter: "[[-1, -2], [-3, -4]]",
        javaFuncCall:
          "increment_matrix_values(new int[][]{{-1, -2}, {-3, -4}});",
        explanation: "Increment each value by 1.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[[1, 2], [3, 4]]",
        expectedOutput: "[[2,3],[4,5]]",
        javaFuncCall: "increment_matrix_values(new int[][]{{1, 2}, {3, 4}});",
        userOutput: null,
      },
      {
        parameter: "[[0, 0], [0, 0]]",
        expectedOutput: "[[1,1],[1,1]]",
        javaFuncCall: "increment_matrix_values(new int[][]{{0, 0}, {0, 0}});",
        userOutput: null,
      },
      {
        parameter: "[[-1, -2], [-3, -4]]",
        expectedOutput: "[[0,-1],[-2,-3]]",
        javaFuncCall:
          "increment_matrix_values(new int[][]{{-1, -2}, {-3, -4}});",
        userOutput: null,
      },
      {
        parameter: "[[3, 5], [7, 9]]",
        expectedOutput: "[[4,6],[8,10]]",
        javaFuncCall: "increment_matrix_values(new int[][]{{3, 5}, {7, 9}});",
        userOutput: null,
      },
      {
        parameter: "[[10, 20, 30], [40, 50, 60], [70, 80, 90]]",
        expectedOutput: "[[11,21,31],[41,51,61],[71,81,91]]",
        javaFuncCall:
          "increment_matrix_values(new int[][]{{10, 20, 30}, {40, 50, 60}, {70, 80, 90}});",
        userOutput: null,
      },
      {
        parameter: "[[1], [2], [3], [4]]",
        expectedOutput: "[[2],[3],[4],[5]]",
        javaFuncCall:
          "increment_matrix_values(new int[][]{{1}, {2}, {3}, {4}});",
        userOutput: null,
      },
      {
        parameter: "[[-5, -3], [-1, 1], [3, 5], [7, 9]]",
        expectedOutput: "[[-4,-2],[0,2],[4,6],[8,10]]",
        javaFuncCall:
          "increment_matrix_values(new int[][]{{-5, -3}, {-1, 1}, {3, 5}, {7, 9}});",
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

    heading: "Number of Students Unable to Eat Lunch",
    difficulty: "Easy",

    attempts: 0,
    heading: "Number of Students Unable to Eat Lunch",
    difficulty: "Easy",

    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "The school cafeteria offers circular and square sandwiches at lunch break. Each student either prefers square or circular sandwiches. Given two arrays representing students and sandwiches, return the number of students unable to eat lunch.",
    constraints: [
      "1 <= students.length, sandwiches.length <= 100",
      "students.length == sandwiches.length",
      "sandwiches[i] is 0 or 1",
      "students[i] is 0 or 1",
    ],
    functionName: "countStudents",
    returnType: "number",
    javascriptDefaultCode: `\n/**\n\t* @param {number[]} students\n\t* @param {number[]} sandwiches\n\t* @return {number}\n*/\n\nvar countStudents = function(students, sandwiches) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef countStudents(students, sandwiches):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int countStudents(int[] students, int[] sandwiches) {\n\t// Write your code here\n}`,
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "students = [1,1,0,0], sandwiches = [0,1,0,1]",
        output: "0",
        parameter: "[1,1,0,0],[0,1,0,1]",
        explanation: "All students are able to eat.",
        image: null,
        javaFuncCall: "countStudents(new int[]{1,1,0,0}, new int[]{0,1,0,1})",
      },
      {
        number: 2,
        input: "students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]",
        output: "3",
        parameter: "[1,1,1,0,0,1],[1,0,0,0,1,1]",
        explanation: "Three students are unable to eat.",
        image: null,
        javaFuncCall:
          "countStudents(new int[]{1,1,1,0,0,1}, new int[]{1,0,0,0,1,1})",
      },
      {
        number: 6,
        input: "students = [0,0,0,0,0], sandwiches = [1,1,1,1,1]",
        output: "5",
        parameter: "[0,0,0,0,0],[1,1,1,1,1]",
        explanation: "All five students are unable to eat.",
        image: null,
        javaFuncCall:
          "countStudents(new int[]{0,0,0,0,0}, new int[]{1,1,1,1,1})",
      },
    ],
    cases: [
      {
        parameter: "[1,1,0,0],[0,1,0,1]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "countStudents(new int[]{1,1,0,0}, new int[]{0,1,0,1})",
      },
      {
        parameter: "[1,1,1,0,0,1],[1,0,0,0,1,1]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall:
          "countStudents(new int[]{1,1,1,0,0,1}, new int[]{1,0,0,0,1,1})",
      },

      {
        parameter: "[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1]",
        expectedOutput: "10",
        userOutput: null,
        javaFuncCall:
          "countStudents(new int[]{0,0,0,0,0,0,0,0,0,0}, new int[]{1,1,1,1,1,1,1,1,1,1})",
      },
      {
        parameter: "[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall:
          "countStudents(new int[]{0,1,0,1,0,1,0,1,0,1}, new int[]{1,0,1,0,1,0,1,0,1,0})",
      },

      {
        parameter: "[1,1,1,0,0,1],[1,0,0,0,1,1]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall:
          "countStudents(new int[]{1,1,1,0,0,1}, new int[]{1,0,0,0,1,1})",
      },
      {
        parameter: "[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1]",
        expectedOutput: "10",
        userOutput: null,
        javaFuncCall:
          "countStudents(new int[]{0,0,0,0,0,0,0,0,0,0}, new int[]{1,1,1,1,1,1,1,1,1,1})",
      },
      {
        parameter: "[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall:
          "countStudents(new int[]{0,1,0,1,0,1,0,1,0,1}, new int[]{1,0,1,0,1,0,1,0,1,0})",
      },
      {
        parameter: "[1,1,0,0,1],[1,1,0,1,1]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall:
          "countStudents(new int[]{1,1,0,0,1}, new int[]{1,1,0,1,1})",
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

    heading: "Remove Duplicates from Sorted List",
    difficulty: "Medium",

    attempts: 0,
    heading: "Remove Duplicates from Sorted List",
    difficulty: "Medium",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
    constraints: [
      "The number of nodes in the list is in the range [0, 300].",
      "-100 <= Node.val <= 100",
      "The list is guaranteed to be sorted in ascending order.",
    ],
    functionName: "deleteDuplicates",
    returnType: "linkedlist",
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
        input: "head = [1,1,2]",
        output: "[1,2]",
        parameter: "[1,1,2]",
        explanation:
          "After removing duplicates, the linked list becomes [1,2].",
        image: "P8a",
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))",
      },
      {
        number: 2,
        input: "head = [1,1,2,3,3]",
        output: "[1,2,3]",
        parameter: "[1,1,2,3,3]",
        explanation:
          "After removing duplicates, the linked list becomes [1,2,3].",
        image: "P8b",
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))))",
      },
      {
        number: 3,
        input: "head = [1,2,2,3,3]",
        output: "[1,2,3]",
        parameter: "[1,2,2,3,3]",
        explanation:
          "After removing duplicates, the linked list becomes [1,2,3].",
        image: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3))))))",
      },
    ],
    cases: [
      {
        parameter: "[1,1,2]",
        expectedOutput: "[1,2]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))",
      },
      {
        parameter: "[1,1,2,3,3]",
        expectedOutput: "[1,2,3]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))))",
      },
      {
        expectedOutput: "[1,2,3]",
        parameter: "[1,2,2,3,3]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3))))))",
      },
      {
        parameter: "[1,1,2,3,4]",
        expectedOutput: "[1,2,3,4]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))))",
      },
      {
        parameter: "[1,2,3,4,5]",
        expectedOutput: "[1,2,3,4,5]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))",
      },
      {
        parameter: "[1,1,1,1,1]",
        expectedOutput: "[1]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))))",
      },

      {
        parameter: "[1,1,2,2,3,3,4,4,5,5]",
        expectedOutput: "[1,2,3,4,5]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(5)))))))))))",
      },
      {
        parameter: "[1,1,1,1,2,2,2,2,3,3,3,3]",
        expectedOutput: "[1,2,3]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(3, new ListNode(3))))))))))))))",
      },

      {
        parameter: "[1,1,1,1,1,1,1,1,1,1]",
        expectedOutput: "[1]",
        userOutput: null,
        javaFuncCall:
          "deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))))))))",
      },
      {
        parameter: "[1]",
        expectedOutput: "[1]",
        userOutput: null,
        javaFuncCall: "deleteDuplicates(new ListNode(1))",
      },
      {
        parameter: "[]",
        expectedOutput: "[]",
        userOutput: null,
        javaFuncCall: "deleteDuplicates(null)",
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
    heading: "Find the median of an array",
    difficulty: "Medium",
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a sorted array of integers, find the median of the array. If sorted array is odd return the middle mumber else return the middle left side number",
    constraints: [
      "1 <= arr.length <= 1000",
      "-1000 <= arr[i] <= 1000",
      "arr.length is odd",
    ],
    functionName: "findMedian",
    returnType: "double",
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
        number: "1",
        input: "arr = [1, 2, 3, 4, 5]",
        output: "3",
        parameter: "[1,2,3,4,5]",
        javaFuncCall: "findMedian(new int[]{1,2,3,4,5})",
        explanation: "The median of the array [1, 2, 3, 4, 5] is 3.",
        image: null,
      },
      {
        number: "2",
        input: "arr = [1, 2, 3, 4, 5, 6]",
        output: "3",
        parameter: "[1,2,3,4,5,6]",
        javaFuncCall: "findMedian(new int[]{1,2,3,4,5,6})",
        explanation: "The median of the array [1, 2, 3, 4, 5, 6] is 3.5.",
        image: null,
      },
      {
        number: "3",
        input: "arr = [-1, 0, 2, 4, 5]",
        output: "2",
        parameter: "[-1,0,2,4,5]",
        javaFuncCall: "findMedian(new int[]{-1,0,2,4,5})",
        explanation: "The median of the array [-1, 0, 2, 4, 5] is 2.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[1,2,3,4,5]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "findMedian(new int[]{1,2,3,4,5})",
      },
      {
        parameter: "[1,2,3,4,5,6]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "findMedian(new int[]{1,2,3,4,5,6})",
      },
      {
        parameter: "[-1,0,2,4,5]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "findMedian(new int[]{-1,0,2,4,5})",
      },
      {
        parameter: "[-10, -5, 0, 5, 10]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "findMedian(new int[]{-10, -5, 0, 5, 10})",
      },
      {
        parameter: "[5]",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "findMedian(new int[]{5})",
      },
      {
        parameter: "[-3, -2, -1, 0, 1, 2, 3]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "findMedian(new int[]{-3, -2, -1, 0, 1, 2, 3})",
      },
    ],
  },
  {
    number: 7,
    heading: "Find the kth largest element in an array",
    difficulty: "Medium",
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an unsorted array of integers, find the kth largest element.",
    constraints: [
      "1 <= arr.length <= 1000",
      "-1000 <= arr[i] <= 1000",
      "1 <= k <= arr.length",
    ],
    functionName: "findKthLargest",
    returnType: "int",
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
        number: "1",
        input: "arr = [3, 2, 1, 5, 6, 4], k = 2",
        output: "5",
        parameter: "[3,2,1,5,6,4], 2",
        javaFuncCall: "findKthLargest(new int[]{3,2,1,5,6,4}, 2)",
        explanation:
          "The 2nd largest element in the array [3, 2, 1, 5, 6, 4] is 5.",
        image: null,
      },
      {
        number: "2",
        input: "arr = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4",
        output: "4",
        parameter: "[3,2,3,1,2,4,5,5,6], 4",
        javaFuncCall: "findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4)",
        explanation:
          "The 4th largest element in the array [3, 2, 3, 1, 2, 4, 5, 5, 6] is 4.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[3,2,1,5,6,4], 2",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "findKthLargest(new int[]{3,2,1,5,6,4}, 2)",
      },
      {
        parameter: "[3,2,3,1,2,4,5,5,6], 4",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4)",
      },
      {
        parameter: "[1, 2, 3, 4, 5], 1",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "findKthLargest(new int[]{1, 2, 3, 4, 5}, 1)",
      },
      {
        parameter: "[5, 4, 3, 2, 1], 3",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "findKthLargest(new int[]{5, 4, 3, 2, 1}, 3)",
      },
      {
        parameter: "[2, 2, 2, 2, 2], 1",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "findKthLargest(new int[]{2, 2, 2, 2, 2}, 1)",
      },
    ],
  },
];

export const javaAllQuesObj = [
  {
    number: 1,

    heading: "these all probs are from javaAllQuesObj",
    difficulty: "Easy",
    ds: "array",

    attempts: 0,
    heading: "these all probs are from javaAllQuesObj",
    difficulty: "Easy",
    ds: "array",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",
    ds: "array",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",
    ds: "array",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
];

export const jsAllQuesObj = [
  {
    number: 1,

    topic: "array",
    heading: "these all probs are from jsAllQuesObj",
    difficulty: "Easy",

    attempts: 0,
    topic: "array",
    heading: "these all probs are from jsAllQuesObj",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
];

export const pythonAllQuesObj = [
  {
    number: 1,

    heading: "these all probs are from pythonAllQuesObj",
    difficulty: "Easy",

    attempts: 0,
    heading: "these all probs are from pythonAllQuesObj",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    topic: "binary search",
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
  {
    number: 1,

    heading: "Add two numbers",
    difficulty: "Easy",

    attempts: 0,
    heading: "Add two numbers",
    difficulty: "Easy",

    isSolved: true,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: "1",
        input: "a = 10, b = 5",
        output: "15",
        parameter: "10,5",
        explanation: "a + b = 15",
        image: null,
      },
      {
        number: "2",
        input: "a = 3, b = 2",
        output: "5",
        parameter: "3,2",
        explanation: "a + b = 5",
        image: null,
      },
      {
        number: "3",
        input: "a = 200, b = 300",
        output: "500",
        parameter: "200,300",
        explanation: "a + b = 500",
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: "10,5",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "3,2",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "200,300",
        expectedOutput: "500",
        userOutput: null,
      },
      {
        parameter: "0,0",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-5,5",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-10,-20",
        expectedOutput: "-30",
        userOutput: null,
      },
      {
        parameter: "1000000000,1",
        expectedOutput: "1000000001",
        userOutput: null,
      },
      {
        parameter: "999999999,999999999",
        expectedOutput: "1999999998",
        userOutput: null,
      },
      {
        parameter: "123456789,987654321",
        expectedOutput: "1111111110",
        userOutput: null,
      },
      {
        parameter: "2,3",
        expectedOutput: "5",
        userOutput: null,
      },
      {
        parameter: "7,8",
        expectedOutput: "15",
        userOutput: null,
      },
      {
        parameter: "17,23",
        expectedOutput: "40",
        userOutput: null,
      },
      {
        parameter: "100,100",
        expectedOutput: "200",
        userOutput: null,
      },
      {
        parameter: "50,50",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "123,456",
        expectedOutput: "579",
        userOutput: null,
      },
      {
        parameter: "-100,200",
        expectedOutput: "100",
        userOutput: null,
      },
      {
        parameter: "999,-999",
        expectedOutput: "0",
        userOutput: null,
      },
      {
        parameter: "-123,-456",
        expectedOutput: "-579",
        userOutput: null,
      },
      {
        parameter: "0,999",
        expectedOutput: "999",
        userOutput: null,
      },
      {
        parameter: "1,0",
        expectedOutput: "1",
        userOutput: null,
      },
    ],
  },
];
