export const AllquesObject = [
  {
    number: 1,
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
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\treturn a+b;\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\treturn a+b`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\treturn a+b;\n}`,
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
  },
  {
    number: 2,
    heading: 'Two Sum',
    difficulty: 'Easy',
    language: 'javascript',
    returnType: 'int[]',
    isSolved: true,
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
    ],
    functionName: 'twoSum',
    javascriptDefaultCode: `\n/**\n\t* @param {array} nums\n\t* @param {number} target\n\t* @return {array}\n*/\n\nvar twoSum = function(nums, target) {\n\t//Write your code here\n};`,
    pythonDefaultCode: `\n'''\n\t* @param {array} nums\n\t* @param {number} target\n\t* @return {array}\n'''\n\ndef twoSum(nums,target):\n\t#Write your code here`,
    javaDefaultCode: `\npublic static int[] twoSum(int[] nums, int target){\n\t// Write your code here\n}`,
    example: [
      {
        number: '1',
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        parameter: '[2,7,11,15],9',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
        image: null,
      },
      {
        number: '2',
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        parameter: '[3,2,4],6',
        explanation: '',
        image: null,
      },
      {
        number: '3',
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
        parameter: '[3,3],6',
        explanation: '',
        image: null,
      },
    ],
  },
  {
    number: 3,
    heading: 'Reverse a String',
    difficulty: 'Easy',
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given a string, reverse it and return the reversed string.',
    constraints: ['1 <= string.length <= 1000'],
    functionName: 'reverseString',
    javascriptDefaultCode: `\n/**\n\t* @param {string} str\n\t* @return {string}\n*/\n\nvar reverseString = function(str) {\n\treturn str.split('').reverse().join('');\n};`,
    pythonDefaultCode: `\ndef reverseString(str):\n\treturn str[::-1]`,
    javaDefaultCode: `\npublic static String reverseString(String str) {\n\treturn new StringBuilder(str).reverse().toString();\n}`,
    example: [
      {
        number: '1',
        input: 'str = "hello"',
        output: 'olleh',
        parameter: '"hello"',
        explanation: 'Reversing the string "hello" results in "olleh".',
        image: null,
      },
      {
        number: '2',
        input: 'str = "world"',
        output: 'dlrow',
        parameter: '"world"',
        explanation: 'Reversing the string "world" results in "dlrow".',
        image: null,
      },
      {
        number: '3',
        input: 'str = "example"',
        output: 'elpmaxe',
        parameter: '"example"',
        explanation: 'Reversing the string "example" results in "elpmaxe".',
        image: null,
      },
    ],
  },

  {
    number: 4,
    heading: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    description:
      'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
    example: [
      {
        number: '1',
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.00000',
        explanation: '',
        image: null,
      },
    ],
    constraints: [
      'nums1.length == m',
      'nums2.length == n',
      '0 <= m <= 1000',
      '0 <= n <= 1000',
      '1 <= m + n <= 2000',
      '-10^6 <= nums1[i], nums2[i] <= 10^6',
    ],
    cases: [
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2',
      },
      {
        input: 'nums1 = [1,2], nums2 = [3,4]',
        output: '2.50000',
      },
      {
        input: 'nums1 = [0,0], nums2 = [0,0]',
        output: '0.00000',
      },
    ],
    isSolved: false,
    image: null,
    isSolved: false,
    image: 'null',
    topic: 'Binary Search',
  },
  {
    number: 5,
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
    isSolved: false,
    image: null,
    isSolved: true,
    image: 'null',
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
    isSolved: false,
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
    isSolved: false,
    image: null,
    isSolved: false,
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
    isSolved: false,
    image: null,
    isSolved: false,
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
    isSolved: false,
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
