export const AllquesObject = [
  {
    number: 1,
    heading: "Add two numbers",
    topic: ["Math"],
    ds: "[ Math ]",
    difficulty: "Easy",
    attempts: 0,
    isSolved: false,
    heading: "Add two numbers",
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given two parameter, add both and return the value",
    constraints: ["0 <= a <= 999", "0 <= b <= 999"],
    functionName: "addTwoNumbers",
    returnType: "int",
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `def addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `public static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
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

    heading: "Number of Students Unable to Eat Lunch",
    difficulty: "Medium",
    topic: ["Array", "Queue"],
    ds: "[ Array, Queue ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: `The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches. <br>
   <br>
    The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step: <br>
     <br>
     &bull; If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue. <br>
     &bull; Otherwise, they will leave it and go to the queue's end. <br>
    This continues until none of the queue students want to take the top sandwich and are thus unable to eat. <br>
     <br>
    You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat. <br>`,
    constraints: [
      "1 <= students.length, sandwiches.length <= 100",
      "students.length == sandwiches.length",
      "sandwiches[i] is 0 or 1",
      "students[i] is 0 or 1",
    ],
    functionName: "countStudents",
    returnType: "number",
    javascriptDefaultCode: `\n/**\n\t* @param {number[]} students\n\t* @param {number[]} sandwiches\n\t* @return {number}\n*/\n\nvar countStudents = function(students, sandwiches) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `def countStudents(students, sandwiches):\n\t# Write your code here`,
    javaDefaultCode: `public static int countStudents(int[] students, int[] sandwiches) {\n\t// Write your code here\n}`,
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
    number: 3,
    heading: "String Reverse",
    difficulty: "Easy",
    attempts: 0,
    topic: ["String"],
    ds: "[ String ]",
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
    pythonDefaultCode: "def reverseString(s):\n\t# Write your code here",
    javaDefaultCode:
      "public static String reverseString(String str) {\n\t// Write your code here\n}",
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
        parameter: '"hello"',
        expectedOutput: "olleh",
        userOutput: null,
        javaFuncCall: 'reverseString("hello")',
      },
      {
        parameter: '"world"',
        expectedOutput: "dlrow",
        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: '"apple"',
        expectedOutput: "elppa",
        userOutput: null,
        javaFuncCall: 'reverseString("apple")',
      },
      {
        parameter: '"openai"',
        expectedOutput: "ianepo",
        userOutput: null,
        javaFuncCall: 'reverseString("openai")',
      },
      {
        parameter: '"racecar"',
        expectedOutput: "racecar",
        userOutput: null,
        javaFuncCall: 'reverseString("racecar")',
      },
      {
        parameter: '"123456"',
        expectedOutput: "654321",
        userOutput: null,
        javaFuncCall: 'reverseString("123456")',
      },
      {
        parameter: '"goodbye"',
        expectedOutput: "eybdoog",
        userOutput: null,
        javaFuncCall: 'reverseString("goodbye")',
      },
      {
        parameter: '"world"',
        expectedOutput: "dlrow",
        userOutput: null,
        javaFuncCall: 'reverseString("world")',
      },
      {
        parameter: '"hello world"',
        expectedOutput: "dlrow olleh",
        userOutput: null,
        javaFuncCall: 'reverseString("hello world")',
      },
      {
        parameter: '"algorithm"',
        expectedOutput: "mhtirogla",
        userOutput: null,
        javaFuncCall: 'reverseString("algorithm")',
      },
      {
        parameter: '"reverse"',
        expectedOutput: "esrever",
        userOutput: null,
        javaFuncCall: 'reverseString("reverse")',
      },
      {
        parameter: '"abcdef"',
        expectedOutput: "fedcba",
        userOutput: null,
        javaFuncCall: 'reverseString("abcdef")',
      },
      {
        parameter: '"javascript"',
        expectedOutput: "tpircsavaj",
        userOutput: null,
        javaFuncCall: 'reverseString("javascript")',
      },
      {
        parameter: '"programming"',
        expectedOutput: "gnimmargorp",
        userOutput: null,
        javaFuncCall: 'reverseString("programming")',
      },
      {
        parameter: '"computer"',
        expectedOutput: "retupmoc",
        userOutput: null,
        javaFuncCall: 'reverseString("computer")',
      },
      {
        parameter: '"science"',
        expectedOutput: "ecneics",
        userOutput: null,
        javaFuncCall: 'reverseString("science")',
      },
      {
        parameter: '"engineering"',
        expectedOutput: "gnireenigne",
        userOutput: null,
        javaFuncCall: 'reverseString("engineering")',
      },
      {
        parameter: '"artificial intelligence"',
        expectedOutput: "ecnegilletni laicifitra",
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
    number: 4,
    heading: "Remove Duplicates from Sorted List",
    difficulty: "Hard",
    topic: ["LinkedList"],
    ds: "[ LinkedList ]",
    isSolved: false,
    language: "javascript",
    attempts: 0,
    isSolved: true,
    language: "javascript",
    heading: "Remove Duplicates from Sorted List",
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
    number: 5,

    heading: "Find Minimum and Maximum Number",
    difficulty: "Easy",
    topic: ["Array", "Math"],
    ds: "[ Array, Math ]",
    attempts: 0,

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
    pythonDefaultCode: "def findMinMax(nums):\n\t# Write your code here",
    javaDefaultCode:
      "public static int[] findMinMax(int[] nums) {\n\t// Write your code here\n}",
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
      // {
      //   parameter: "[100, 200, 300, 400, 500]",
      //   expectedOutput: "[100,500]",
      //   userOutput: null,
      //   javaFuncCall: "findMinMax(new int[]{100, 200, 300, 400, 500});",
      // },
      // {
      //   parameter: "[-100, -200, -300, -400, -500]",
      //   expectedOutput: "[-500,-100]",
      //   userOutput: null,
      //   javaFuncCall: "findMinMax(new int[]{-100, -200, -300, -400, -500});",
      // },
      // {
      //   parameter: "[5, 4, 3, 2, 1]",
      //   expectedOutput: "[1,5]",
      //   userOutput: null,
      //   javaFuncCall: "findMinMax(new int[]{5, 4, 3, 2, 1});",
      // },
      // {
      //   parameter: "[10, -5, 8, -3, 6]",
      //   expectedOutput: "[-5,10]",
      //   userOutput: null,
      //   javaFuncCall: "findMinMax(new int[]{10, -5, 8, -3, 6});",
      // },
      // {
      //   parameter: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      //   expectedOutput: "[1,10]",
      //   userOutput: null,
      //   javaFuncCall: "findMinMax(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10});",
      // },
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
    number: 6,

    heading: "Find Second Largest Element in Array",
    difficulty: "Easy",
    topic: ["Array", "Math"],
    ds: "[ Array, Math ]",
    attempts: 0,

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
    pythonDefaultCode: "def findSecondLargest(nums):\n\t# Write your code here",
    javaDefaultCode:
      "public static int findSecondLargest(int[] nums) {\n\t// Write your code here\n}",
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
    number: 7,

    heading: "Create Array of Numbers",
    difficulty: "Easy",
    topic: ["Array"],
    ds: "[ Array ]",
    attempts: 0,
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
    pythonDefaultCode: "def createArray(n):\n\t# Write your code here",
    javaDefaultCode:
      "public static int[] createArray(int n) {\n\t// Write your code here\n}",
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
    number: 8,

    heading: "Increment Matrix Values",
    difficulty: "Easy",
    topic: ["Matrices"],
    ds: "[ Matrices ]",
    attempts: 0,

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
      "def increment_matrix_values(matrix):\n\t# Write your code here",
    javaDefaultCode:
      "public static int[][] increment_matrix_values(int[][] matrix) {\n\t// Write your code here\n}",
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
    number: 9,

    heading: "Find the median of an array",
    difficulty: "Medium",
    isSolved: false,
    language: "javascript",
    topic: ["BinarySearch", "Array"],
    ds: "[ BinarySearch, Array ]",
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

    description:
      "Given a sorted array of integers, find the median of the array. If sorted array is odd return the middle mumber else return the middle left side number",
    constraints: [
      "1 <= arr.length <= 1000",
      "-1000 <= arr[i] <= 1000",
      "arr.length is even or odd",
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

    /* js :
          const n = arr.length;
    const mid = Math.floor(n / 2);
    
    if (n % 2 === 1) {
        // Odd number of elements
        return Math.floor(arr[mid]);
    } else {
        // Even number of elements
        return Math.floor((arr[mid - 1] + arr[mid]) / 2);
    }

    return 0;


    python:
          n = len(arr)
    mid = n // 2
    
    if n % 2 == 1:
        # Odd number of elements
        return arr[mid]
    else:
        # Even number of elements
        return (arr[mid - 1] + arr[mid]) // 2


    java :
           int n = arr.length;
    int mid = n / 2;
    
    if (n % 2 == 1) {
        // Odd number of elements
        return arr[mid];
    } else {
        // Even number of elements
        return (arr[mid - 1] + arr[mid]) / 2;
    }
    */
  },
  {
    number: 10,
    heading: "Find the kth largest element in an array",
    difficulty: "Medium",
    isSolved: false,
    language: "javascript",
    topic: ["Array", "Sorting"],
    ds: "[ Array, Sorting ]",
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

        number: "3",
        input: "arr = [3, 2, 1, 5, 6, 4], k = 2",
        output: "5",
        parameter: "[3,2,1,5,6,4], 2",
        javaFuncCall: "findKthLargest(new int[]{3,2,1,5,6,4}, 2)",
        explanation:
          "The 2nd largest element in the array [3, 2, 1, 5, 6, 4] is 5.",
        image: null,
      },
      {
        number: "4",
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

    /* 
    js : 
        arr.sort((a, b) => b - a); // Sort array in descending order
    return arr[k - 1];


    python :
          arr.sort(reverse=True)
    
    # Return the k-th largest element
    return arr[k - 1]


    java :
        Arrays.sort(arr);
        return arr[arr.length - k];
    
    */
  },
  {
    number: "11",
    heading: "Find the majority element in an array",
    difficulty: "Medium",
    topic: ["Array", "Sorting", "HashTable"],
    ds: "[ Array, Sorting, HashTable ]",
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an array of size n, find the majority element. The majority element is the element that appears more than [n/2] times.",
    constraints: [
      "1 <= arr.length <= 10000",
      "0 <= arr[i] <= 10000",
      "There is always a majority element in the array.",
    ],
    functionName: "findMajorityElement",
    returnType: "number",

    description:
      "Given an array of size n, find the majority element. The majority element is the element that appears more than [n/2] times.",
    constraints: [
      "1 <= arr.length <= 10000",
      "0 <= arr[i] <= 10000",
      "There is always a majority element in the array.",
    ],
    functionName: "findMajorityElement",
    returnType: "number",

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
        number: "1",
        input: "arr = [3, 2, 2, 2, 2, 4, 2]",
        output: "2",
        parameter: "[3, 2, 2, 2, 2, 4, 2]",
        javaFuncCall: "findMajorityElement(new int[]{3, 2, 2, 2, 2, 4, 2})",
        explanation:
          "In the array [3, 2, 2, 2, 2, 4, 2], the majority element is 2 as it appears more than ⌊ n/2 ⌋ times.",
        image: null,
      },
      {
        number: "2",
        input: "arr = [1, 2, 2, 2, 3, 4, 5, 2, 2]",
        output: "2",
        parameter: "[1, 2, 2, 2, 3, 4, 5, 2, 2]",
        javaFuncCall:
          "findMajorityElement(new int[]{1, 2, 2, 2, 3, 4, 5, 2, 2})",
        explanation:
          "In the array [1, 2, 2, 2, 3, 4, 5, 2, 2], the majority element is 2 as it appears more than ⌊ n/2 ⌋ times.",
      },
      {
        number: "3",
        input: "arr = [3, 3, 3, 3, 2, 4, 2]",
        output: "3",
        parameter: "[3, 3, 3, 3, 2, 4, 2]",
        javaFuncCall: "findMajorityElement(new int[]{3, 3, 3, 3, 2, 4, 2})",
        explanation:
          "In the array [3, 3, 3, 3, 2, 4, 2], the majority element is 3 as it appears more than ⌊ n/2 ⌋ times.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[3, 2, 2, 2, 2, 4, 2]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "findMajorityElement(new int[]{3, 2, 2, 2, 2, 4, 2})",
      },
      {
        parameter: "[6, 6, 6, 7, 7, 7, 7, 6, 7]",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{6, 6, 6, 7, 7, 7, 7, 6, 7})",
      },
      {
        parameter: "[4, 4, 4, 4, 4, 5, 5, 5, 5]",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{4, 4, 4, 4, 4, 5, 5, 5, 5})",
      },
      {
        parameter: "[1, 1, 1, 2, 3, 4, 5, 1, 1]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{1, 1, 1, 2, 3, 4, 5, 1, 1})",
      },
      {
        parameter: "[2, 3, 2, 3, 2, 3, 2, 3, 2]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{2, 3, 2, 3, 2, 3, 2, 3, 2})",
      },
      {
        parameter: "[7, 8, 8, 8, 9, 8, 8, 8, 7]",
        expectedOutput: "8",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{7, 8, 8, 8, 9, 8, 8, 8, 7})",
      },
      {
        parameter: "[3, 1, 2, 2, 2, 3, 2, 2, 2]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{3, 1, 2, 2, 2, 3, 2, 2, 2})",
      },
      {
        parameter: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9})",
      },
      {
        parameter: "[9, 9, 9, 9, 1, 2, 3, 9, 9]",
        expectedOutput: "9",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{9, 9, 9, 9, 1, 2, 3, 9, 9})",
      },
      {
        parameter: "[2, 2, 2, 1, 1, 1, 2, 2, 2, 2]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{2, 2, 2, 1, 1, 1, 2, 2, 2, 2})",
      },
      {
        parameter: "[5, 6, 5, 6, 5, 6, 6, 6, 6]",
        expectedOutput: "6",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{5, 6, 5, 6, 5, 6, 6, 6, 6})",
      },

      {
        parameter: "[1, 2, 2, 2, 3, 4, 5, 2, 2]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{1, 2, 2, 2, 3, 4, 5, 2, 2})",
      },
      {
        parameter: "[1, 1, 1, 1, 2, 3, 4, 5, 6]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{1, 1, 1, 1, 2, 3, 4, 5, 6})",
      },
      {
        parameter: "[10, 10, 20, 20, 20, 20, 30, 30]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{10, 10, 20, 20, 20, 20, 30, 30})",
      },
      {
        parameter: "[5, 5, 5, 5, 1, 1, 1, 1, 1]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall:
          "findMajorityElement(new int[]{5, 5, 5, 5, 1, 1, 1, 1, 1})",
      },
    ],

    /* 
    js :
              var findMajorityElement = function(arr) {
            // Write your code here
            let candidate = null;
    let count = 0;
    
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    // Step 2: Verify that the candidate is indeed the majority element
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }
    
    // If the candidate appears more than n/2 times, it is the majority element
    if (count > Math.floor(arr.length / 2)) {
        return candidate;
    } else {
        return -1;  // Assuming the majority element always exists, otherwise handle it accordingly
    }
        };




    python:
          candidate = None
    count = 0
    
    for num in arr:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    
    # Step 2: Verify that the candidate is indeed the majority element
    count = 0
    for num in arr:
        if num == candidate:
            count += 1
    
    # If the candidate appears more than n/2 times, it is the majority element
    if count > len(arr) // 2:
        return candidate
    else:
        return -1

 int candidate = 0;
        int count = 0;
        
        for (int num : arr) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        
        // Step 2: Verify that the candidate is indeed the majority element
        count = 0;
        for (int num : arr) {
            if (num == candidate) {
                count++;
            }
        }
        
        // If the candidate appears more than n/2 times, it is the majority element
        if (count > arr.length / 2) {
            return candidate;
        } else {
            return -1;  // If no majority element found, return -1
        }

    java :

    
    */
  },
  {
    number: "12",
    heading: "Remove duplicates from an array",
    difficulty: "Medium",
    number: "12",
    heading: "Remove duplicates from an array",
    difficulty: "Easy",
    topic: ["Array", "TwoPointer"],
    ds: "[ Array, TwoPointer ]",
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      'Given an array of integers, remove duplicates from the array and return a new array without any duplicate elements.  Note: While solving in java return array as String for ex: "Arrays.toString(result)"',
    constraints: ["1 <= arr.length <= 10000", "-10000 <= arr[i] <= 10000"],
    functionName: "removeDuplicates",
    returnType: "number[]",
    constraints: ["1 <= arr.length <= 10000", "-10000 <= arr[i] <= 10000"],
    functionName: "removeDuplicates",
    returnType: "number[]",
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
        number: "1",
        input: "arr = [1, 1, 2, 3, 3, 4]",
        output: "[1, 2, 3, 4]",
        parameter: "[1,1,2,3,3,4]",
        javaFuncCall: "removeDuplicates(new int[]{1,1,2,3,3,4})",
        explanation:
          "The array [1, 1, 2, 3, 3, 4] after removing duplicates becomes [1, 2, 3, 4].",
        image: null,
      },
      {
        number: "2",
        input: "arr = [1, 1, 1, 1]",
        output: "[1]",
        parameter: "[1,1,1,1]",
        javaFuncCall: "removeDuplicates(new int[]{1,1,1,1})",
        explanation:
          "The array [1, 1, 1, 1] contains only one unique element [1], so the output remains [1].",
        number: "1",
        input: "arr = [1, 1, 2, 3, 3, 4]",
        output: "[1, 2, 3, 4]",
        parameter: "[1,1,2,3,3,4]",
        javaFuncCall: "removeDuplicates(new int[]{1,1,2,3,3,4})",
        explanation:
          "The array [1, 1, 2, 3, 3, 4] after removing duplicates becomes [1, 2, 3, 4].",
        image: null,
      },
      {
        number: "2",
        input: "arr = [1, 1, 1, 1]",
        output: "[1]",
        parameter: "[1,1,1,1]",
        javaFuncCall: "removeDuplicates(new int[]{1,1,1,1})",
        explanation:
          "The array [1, 1, 1, 1] contains only one unique element [1], so the output remains [1].",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[1,1,2,3,3,4]",
        expectedOutput: "[1, 2, 3, 4]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{1,1,2,3,3,4})",
      },
      {
        parameter: "[1,1,1,1]",
        expectedOutput: "[1]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{1,1,1,1})",
      },
      {
        parameter: "[3, 5, 3, 8, 9, 8]",
        expectedOutput: "[3, 5, 8, 9]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{3, 5, 3, 8, 9, 8})",
      },
      {
        parameter: "[-1, 0, 1, -1, 0, 1]",
        expectedOutput: "[-1, 0, 1]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{-1, 0, 1, -1, 0, 1})",
      },
      {
        parameter: "[9, 9, 9, 9, 9]",
        expectedOutput: "[9]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{9, 9, 9, 9, 9})",
      },
      {
        parameter: "[0, 0, 0, 0, 0]",
        expectedOutput: "[0]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{0, 0, 0, 0, 0})",
        parameter: "[1,1,2,3,3,4]",
        expectedOutput: "[1, 2, 3, 4]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{1,1,2,3,3,4})",
      },
      {
        parameter: "[1,1,1,1]",
        expectedOutput: "[1]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{1,1,1,1})",
      },
      {
        parameter: "[3, 5, 3, 8, 9, 8]",
        expectedOutput: "[3, 5, 8, 9]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{3, 5, 3, 8, 9, 8})",
      },
      {
        parameter: "[-1, 0, 1, -1, 0, 1]",
        expectedOutput: "[-1, 0, 1]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{-1, 0, 1, -1, 0, 1})",
      },
      {
        parameter: "[9, 9, 9, 9, 9]",
        expectedOutput: "[9]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{9, 9, 9, 9, 9})",
      },
      {
        parameter: "[0, 0, 0, 0, 0]",
        expectedOutput: "[0]",
        userOutput: null,
        javaFuncCall: "removeDuplicates(new int[]{0, 0, 0, 0, 0})",
      },
    ],

    /* 
      js :
        var removeDuplicates = function(arr) {
    let uniqueElements = new Set(arr);
    return Array.from(uniqueElements);
};
   python :
      def removeDuplicates(arr):
    seen = set()
    result = []
    for num in arr:
        if num not in seen:
            seen.add(num)
            result.append(num)
    return result 
    
    

    java : 
        public class RemoveDuplicates {
    public static String removeDuplicates(int[] arr) {
        LinkedHashSet<Integer> set = new LinkedHashSet<>();
        for (int num : arr) {
            set.add(num);
        }
        
        int[] result = new int[set.size()];
        int i = 0;
        for (int num : set) {
            result[i++] = num;
        }
        
        return Arrays.toString(result);
    }
    */
  },
  {
    number: 13,
    heading: "Find the maximum consecutive ones in an array",
    difficulty: "Easy",
    isSolved: false,
    language: "javascript",
    heading: "Find the maximum consecutive ones in an array",
    difficulty: "Easy",
    isSolved: false,
    topic: ["Array"],
    ds: "[ Array ]",
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a binary array, find the maximum number of consecutive 1s in this array.",
    constraints: ["1 <= nums.length <= 10^5", "nums[i] is either 0 or 1"],
    functionName: "findMaxConsecutiveOnes",
    returnType: "number",
    javascriptDefaultCode:
      "\n/\n * @param {number[]} nums\n * @return {number}\n */\nvar findMaxConsecutiveOnes = function(nums) {\n    // Write your code here\n};\n",
    pythonDefaultCode:
      "\ndef findMaxConsecutiveOnes(nums):\n    # Write your code here\n",
    javaDefaultCode:
      "\npublic static int findMaxConsecutiveOnes(int[] nums) {\n    // Write your code here\n}\n",
    constraints: ["1 <= nums.length <= 10^5", "nums[i] is either 0 or 1"],
    functionName: "findMaxConsecutiveOnes",
    returnType: "number",
    javascriptDefaultCode:
      "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMaxConsecutiveOnes = function(nums) {\n    // Write your code here\n};\n",
    pythonDefaultCode:
      "def findMaxConsecutiveOnes(nums):\n    # Write your code here\n",
    javaDefaultCode:
      "public static int findMaxConsecutiveOnes(int[] nums) {\n    // Write your code here\n}\n",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: "1",
        input: "nums = [1,1,0,1,1,1]",
        output: "3",
        parameter: "[1,1,0,1,1,1]",
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})",
        explanation:
          "The maximum number of consecutive 1s in the array [1,1,0,1,1,1] is 3.",
        image: null,
      },
      {
        number: "2",
        input: "nums = [1,0,1,1,0,1]",
        output: "2",
        parameter: "[1,0,1,1,0,1]",
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})",
        explanation:
          "The maximum number of consecutive 1s in the array [1,0,1,1,0,1] is 2.",
        number: "1",
        input: "nums = [1,1,0,1,1,1]",
        output: "3",
        parameter: "[1,1,0,1,1,1]",
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})",
        explanation:
          "The maximum number of consecutive 1s in the array [1,1,0,1,1,1] is 3.",
        image: null,
      },
      {
        number: "2",
        input: "nums = [1,0,1,1,0,1]",
        output: "2",
        parameter: "[1,0,1,1,0,1]",
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})",
        explanation:
          "The maximum number of consecutive 1s in the array [1,0,1,1,0,1] is 2.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[1,1,0,1,1,1]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})",
      },
      {
        parameter: "[1,0,1,1,0,1]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})",
      },
      {
        parameter: "[0,0,0,0]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{0,0,0,0})",
      },
      {
        parameter: "[1,1,1,1,1]",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,1,1,1,1})",
      },
      {
        parameter: "[0,1,0,1,0,1]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{0,1,0,1,0,1})",
      },
      {
        parameter: "[1,1,0,1,1,1]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,1,0,1,1,1})",
      },
      {
        parameter: "[1,0,1,1,0,1]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,0,1,1,0,1})",
      },
      {
        parameter: "[0,0,0,0]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{0,0,0,0})",
      },
      {
        parameter: "[1,1,1,1,1]",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{1,1,1,1,1})",
      },
      {
        parameter: "[0,1,0,1,0,1]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "findMaxConsecutiveOnes(new int[]{0,1,0,1,0,1})",
      },
    ],

    /* 
    js : 
      var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentCount = 0;
    
    for (let num of nums) {
        if (num === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }
    
    return maxCount;
};

    python :
      def findMaxConsecutiveOnes(nums):
    max_count = 0
    current_count = 0
    
    for num in nums:
        if num == 1:
            current_count += 1
            if current_count > max_count:
                max_count = current_count
        else:
            current_count = 0
    
    return max_count

    java :
      public static int findMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0;
        int currentCount = 0;
        
        for (int num : nums) {
            if (num == 1) {
                currentCount++;
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                }
            } else {
                currentCount = 0;
            }
        }
        
        return maxCount;
    }
    
    */
  },
  {
    number: 14,
    heading: "Count Vowels in a String",
    difficulty: "Easy",
    isSolved: false,
    language: "javascript",
    heading: "Count Vowels in a String",
    difficulty: "Easy",
    topic: ["Array", "String"],
    ds: "[ Array, String ]",
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a string, count the number of vowels (a, e, i, o, u) in the string.",
    constraints: [
      "1 <= s.length <= 10^5",
      "String contains only lowercase English letters.",
    ],
    functionName: "countVowels",
    returnType: "number",
    javascriptDefaultCode:
      "/\n* @param {string} s\n* @return {number}\n*/\nvar countVowels = function(s) {\n    // Write your code here\n};\n",
    pythonDefaultCode: "def countVowels(s):\n# Write your code here\n",
    javaDefaultCode:
      "public static int countVowels(String s) {\n// Write your code here\n}",
    constraints: [
      "1 <= s.length <= 10^5",
      "String contains only lowercase English letters.",
    ],
    functionName: "countVowels",
    returnType: "number",
    javascriptDefaultCode:
      "/**\n* @param {string} s\n* @return {number}\n*/\nvar countVowels = function(s) {\n    // Write your code here\n};\n",
    pythonDefaultCode: "def countVowels(s):\n# Write your code here\n",
    javaDefaultCode:
      "public static int countVowels(String s) {\n// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: "1",
        input: 's = "hello"',
        output: "2",
        parameter: '"hello"',
        javaFuncCall: 'countVowels("hello")',
        explanation: "The string \"hello\" contains 2 vowels: 'e' and 'o'.",
        image: null,
      },
      {
        number: "2",
        input: 's = "world"',
        output: "1",
        parameter: '"world"',
        javaFuncCall: 'countVowels("world")',
        explanation: "The string \"world\" contains 1 vowel: 'o'.",
        number: "2",
        image: null,
      },
      {
        number: "3",
        input: 's = "javascript"',
        output: "3",
        parameter: "javascript",
        javaFuncCall: 'countVowels("javascript")',
        explanation:
          "The string \"javascript\" contains 2 vowel: 'a' and one vowel : i total  = 3.",
        number: "2",
        image: null,
      },
    ],
    cases: [
      {
        parameter: '"hello"',
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'countVowels("hello")',
      },
      {
        parameter: '"world"',
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'countVowels("world")',
      },
      {
        parameter: '"programming"',
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'countVowels("programming")',
      },
      {
        parameter: '"javascript"',
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'countVowels("javascript")',
      },

      {
        parameter: '"algorithm"',
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'countVowels("algorithm")',
      },
      {
        parameter: '"ai"',
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'countVowels("ai")',
      },
      {
        parameter: '"hello"',
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'countVowels("hello")',
      },
      {
        parameter: '"world"',
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'countVowels("world")',
      },
      {
        parameter: '"programming"',
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'countVowels("programming")',
      },
      {
        parameter: '"javascript"',
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'countVowels("javascript")',
      },
      {
        parameter: '"algorithm"',
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'countVowels("algorithm")',
      },
      {
        parameter: '"ai"',
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'countVowels("ai")',
      },
      {
        parameter: '"abcdefghijklmnopqrstuvwxyz"',
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: 'countVowels("abcdefghijklmnopqrstuvwxyz")',
      },
      {
        parameter: '"AEIOUaeiou"',
        expectedOutput: "10",
        userOutput: null,
        javaFuncCall: 'countVowels("AEIOUaeiou")',
      },
      {
        parameter: '"12345"',
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'countVowels("12345")',
      },
    ],

    /* 
      js :
            const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    
    // Iterate through each character in the string
    for (let char of s) {
        // Check if the character is a vowel
        if (vowels.has(char)) {
            count++;
        }
    }
    
    return count;

      python :
        def countVowels(s):
    # Define a set of vowels
    vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    
    # Initialize count to zero
    count = 0
    
    # Iterate through each character in the string
    for char in s:
        # Check if the character is in the set of vowels
        if char in vowels:
            count += 1
            
    return count

      java : 
        public static int countVowels(String s) {
        // Define a set of vowels
        HashSet<Character> vowels = new HashSet<>();
        vowels.add('a');
        vowels.add('e');
        vowels.add('i');
        vowels.add('o');
        vowels.add('u');
        vowels.add('A');
        vowels.add('E');
        vowels.add('I');
        vowels.add('O');
        vowels.add('U');
        
        // Initialize count to zero
        int count = 0;
        
        // Iterate through each character in the string
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            // Check if the character is in the set of vowels
            if (vowels.contains(c)) {
                count++;
            }
        }
        
        return count;
    }
    */
  },
  {
    number: 15,
    heading: "Search Insert Position",
    difficulty: "Easy",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    topic: ["Array", "BinarySearch"],
    ds: "[ Array, BinarySearch ]",
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    constraints: [
      "The input array is guaranteed to be sorted in ascending order.",
      "The input array may contain duplicates, but they will not affect the answer.",
      "The length of the input array is within the range [0, 10^4].",
      "The elements in the input array are integers in the range [-10^4, 10^4].",
    ],
    functionName: "searchInsert",
    returnType: "int",
    javascriptDefaultCode:
      "/** @param {number[]} nums\n\t* @param {number} target\n\t* @return {number}\n*/\n\nvar searchInsert = function(nums, target) {\n\t// Write your code here\n};",
    pythonDefaultCode:
      "def searchInsert(nums, target):\n\t# Write your code here",
    javaDefaultCode:
      "public static int searchInsert(int[] nums, int target) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [1, 3, 5, 6], target = 5",
        output: "2",
        parameter: "[1, 3, 5, 6], 5",
        explanation:
          "Since 5 is found at index 2 in the array, the function should return 2.",
        image: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 5)",
      },
      {
        number: 2,
        input: "nums = [1, 3, 5, 6], target = 2",
        output: "1",
        parameter: "[1, 3, 5, 6], 2",
        explanation:
          "Since 2 is not found but can be inserted at index 1 in the array, the function should return 1.",
        image: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 2)",
      },
      {
        number: 3,
        input: "nums = [1, 3, 5, 6], target = 7",
        output: "4",
        parameter: "[1, 3, 5, 6], 7",
        explanation:
          "Since 7 is not found but can be inserted at index 4 in the array, the function should return 4.",
        image: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 7)",
      },
    ],
    cases: [
      {
        parameter: "[1, 3, 5, 6], 5",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 5)",
      },
      {
        parameter: "[1, 3, 5, 6], 2",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 2)",
      },
      {
        parameter: "[1, 3, 5, 6], 7",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 7)",
      },
      {
        parameter: "[1, 3, 5, 6], 0",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 0)",
      },
      {
        parameter: "[1], 0",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1}, 0)",
      },
      {
        parameter: "[], 5",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{}, 5)",
      },
      {
        parameter: "[2, 4, 6, 8, 10], 7",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{2, 4, 6, 8, 10}, 7)",
      },
      {
        parameter: "[2, 4, 6, 8, 10], 11",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{2, 4, 6, 8, 10}, 11)",
      },
      {
        parameter: "[2, 4, 6, 8, 10], -1",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{2, 4, 6, 8, 10}, -1)",
      },
      {
        parameter: "[1, 2, 3, 4, 5], 3",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 2, 3, 4, 5}, 3)",
      },
      {
        parameter: "[1, 3, 5, 6], 5",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 5)",
      },
      {
        parameter: "[1, 3, 5, 6], 2",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 2)",
      },
      {
        parameter: "[1, 3, 5, 6], 7",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 7)",
      },
      {
        parameter: "[1, 3, 5, 6], 0",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1, 3, 5, 6}, 0)",
      },
      {
        parameter: "[1], 0",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "searchInsert(new int[]{1}, 0)",
      },
    ],

    /* 
    js :
      var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};


    python :
      def searchInsert(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return left


    java : 
          public static int searchInsert(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }

    */
  },
  {
    number: 16,
    heading: "Binary Search",
    difficulty: "Medium",
    topic: ["Array", "BinarySearch"],
    ds: "[ Array, BinarySearch ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.",
    constraints: [
      "You may assume that all elements in nums are unique.",
      "n will be in the range [1, 10000].",
      "The value of each element in nums will be in the range [-9999, 9999].",
    ],
    functionName: "binarySearch",
    returnType: "int",
    javascriptDefaultCode:
      "/** @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar binarySearch = function(nums, target) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "def binarySearch(nums: List[int], target: int) -> int:\n\t# Write your code here",
    javaDefaultCode:
      "public static int binarySearch(int[] nums, int target) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        parameter: "[-1,0,3,5,9,12], 9",
        explanation:
          "Return index 4 (0-indexed) since 9 is present at index 4 in nums.",
        image: null,
        javaFuncCall: "binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 9)",
      },
      {
        number: 2,
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        parameter: "[-1,0,3,5,9,12], 2",
        explanation: "2 is not present in nums so return -1.",
        image: null,
        javaFuncCall: "binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 2)",
      },
      {
        number: 3,
        input: "nums = [0,0,3,5,9,13], target = 2",
        output: "-1",
        parameter: "[0,0,3,5,9,13], 2",
        explanation: "2 is not present in nums so return -1.",
        image: null,
        javaFuncCall: "binarySearch(new int[]{0, 0, 3, 5, 9, 13}, 2)",
      },
    ],
    cases: [
      {
        parameter: "[-1,0,3,5,9,12], 9",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 9)",
      },
      {
        parameter: "[-1,0,3,5,9,12], 2",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 2)",
      },
      {
        parameter: "[-1,0,3,5,9,12], 12",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{-1, 0, 3, 5, 9, 12}, 12)",
      },
      {
        parameter: "[5], 5",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{5}, 5)",
      },
      {
        parameter: "[5], -5",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{5}, -5)",
      },
      {
        parameter: "[1,3,5,7,9], 7",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{1, 3, 5, 7, 9}, 7)",
      },
      {
        parameter: "[1,3,5,7,9], 10",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{1, 3, 5, 7, 9}, 10)",
      },
      {
        parameter: "[-10,-5,0,3,7], 0",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{-10, -5, 0, 3, 7}, 0)",
      },
      {
        parameter: "[-10,-5,0,3,7], -10",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{-10, -5, 0, 3, 7}, -10)",
      },
      {
        parameter: "[1,2,3,4,5], 1",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "binarySearch(new int[]{1, 2, 3, 4, 5}, 1)",
      },
    ],

    /* 
    js :
      var binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid; // Found the target, return the index
        } else if (nums[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    
    return -1; // Target not found
};
    
    python:
      def binarySearch(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

    java:
         public static int binarySearch(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
    */
  },
  {
    number: 17,
    heading: "Linear Search",
    difficulty: "Easy",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    topic: ["Array"],
    ds: "[ Array ]",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an array nums and searching value as target, search the target element in array nums and return its index, otherwise return -1.",
    constraints: [
      "You may assume that all elements in nums are unique.",
      "n will be in the range [1, 100].",
      "The value of each element in nums will be in the range [-100, 100].",
    ],
    functionName: "linearSearch",
    returnType: "number",
    javascriptDefaultCode:
      "/** @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar linearSearch = function(nums, target) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "from typing import List \ndef linearSearch(nums: List[int], target: int) -> int:\n\t# Write your code here",
    javaDefaultCode:
      "public static int linearSearch(int[] nums, int target) {\n\t// Write your code here\n}",
    constraints: ["1 <= nums.length <= 100", "1 <= nums[i] <= 99"],
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [1, 2, 3, 4, 5], target = 3",
        output: "2",
        parameter: "[1, 2, 3, 4, 5], 3",
        explanation:
          "Return index 2 (0-indexed) since 3 is present at index 2 in nums.",
        image: null,
        javaFuncCall: "linearSearch(new int[]{1, 2, 3, 4, 5}, 3)",
      },
      {
        number: 2,
        input: "nums = [1, 2, 3, 4, 5], target = 2",
        output: "1",
        parameter: "[1, 2, 3, 4, 5], 2",
        explanation:
          "Return index 2 (0-indexed) since 3 is present at index 2 in nums.",
        image: null,
        javaFuncCall: "linearSearch(new int[]{1, 2, 3, 4, 5}, 2)",
      },
      {
        number: 3,
        input: "nums = [1, 2, 8, 4, 7], target = 2",
        output: "1",
        parameter: "[1, 2, 2, 4, 2], 2",
        explanation:
          "After removing all instances of 2, the array becomes [1, 4]. The new length of the array is 2.",
        image: null,
        javaFuncCall: "linearSearch(new int[]{1, 2, 2, 4, 2}, 2)",
      },
    ],
    cases: [
      {
        parameter: "[1, 2, 3, 4, 5], 3",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "linearSearch(new int[]{1, 2, 3, 4, 5}, 3)",
      },
      {
        parameter: "[1, 2, 3, 4, 5], 6",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "linearSearch(new int[]{1, 2, 3, 4, 5}, 6)",
      },
      {
        parameter: "[10, 20, 30, 40, 50], 20",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "linearSearch(new int[]{10, 20, 30, 40, 50}, 20)",
      },
      {
        parameter: "[10, 20, 30, 40, 50], 50",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "linearSearch(new int[]{10, 20, 30, 40, 50}, 50)",
      },
      {
        parameter: "[-5, 0, 5, 10], -5",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "linearSearch(new int[]{-5, 0, 5, 10}, -5)",
      },
      {
        parameter: "[0, 1, 2, 7, 3], 2",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "removeElement(new int[]{0, 1, 2, 2, 3, 0, 4, 2}, 2)",
      },
      {
        parameter: "[1], 1",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "linearSearch(new int[]{1}, 1)",
      },
      {
        parameter: "[1], 0",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "linearSearch(new int[]{1}, 0)",
      },
      {
        parameter: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall:
          "linearSearch(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 5)",
      },
      {
        parameter: "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 7",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall:
          "linearSearch(new int[]{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}, 7)",
      },
      {
        parameter: "[1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 11",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall:
          "linearSearch(new int[]{1, 3, 5, 7, 9, 11, 13, 15, 17, 19}, 11)",
      },
    ],

    /* 
    js:
      var linearSearch = function(nums, target) {
    // Write your code here
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    
    return -1;
};

    python:
      from typing import List 
def linearSearch(nums: List[int], target: int) -> int:
	# Write your code here
    for i in range(len(nums)):
        if nums[i] == target:
            return i  # Return the index if target is found
    
    return -1 

    java:
      public static int linearSearch(int[] nums, int target) {
// Write your code here
for(int i = 0; i < nums.length; i++) {
if(nums[i] == target) {
return i;
}
} 
    */
  },
  {
    number: 18,
    heading: "Find Peak Element",
    difficulty: "Medium",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    topic: ["Array", "BinarySearch"],
    ds: "[ Array, BinarySearch ]",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "A peak element in an integer array is an element that is strictly greater than its neighbors. Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index. The array may contain multiple peaks, in that case, return the index to any one of the peaks.",
    constraints: [
      "1 <= nums.length <= 1000",
      "nums[i] != nums[i + 1] for all valid i",
    ],
    functionName: "findPeakElement",
    returnType: "int",
    javaDefaultCode:
      "public static int findPeakElement(int[] nums) {\n        // Write your code here\n    }",
    pythonDefaultCode:
      "from typing import List\ndef findPeakElement(nums: List[int]) -> int:\n    # Write your code here",
    javascriptDefaultCode:
      "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findPeakElement = function(nums) {\n    // Write your code here\n};",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [1, 2, 3, 1]",
        output: "2",
        parameter: "[1, 2, 3, 1]",
        explanation: "The element at index 2 (3) is a peak element.",
        image: null,
        javaFuncCall: "findPeakElement(new int[]{1, 2, 3, 1})",
      },
      {
        number: 2,
        input: "nums = [1, 2, 1, 3, 5, 6, 4]",
        output: "5",
        parameter: "[1, 2, 1, 3, 5, 6, 4]",
        explanation: "The element at index 5 (6) is a peak element.",
        image: null,
        javaFuncCall: "findPeakElement(new int[]{1, 2, 1, 3, 5, 6, 4})",
      },
      {
        number: 3,
        input: "nums = [1]",
        output: "0",
        parameter: "[1]",
        explanation: "The element at index 0 (1) is a peak element.",
        image: null,
        javaFuncCall: "findPeakElement(new int[]{1})",
      },
    ],
    cases: [
      {
        parameter: "[1, 2, 3, 1]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "findPeakElement(new int[]{1, 2, 3, 1})",
      },
      {
        parameter: "[1, 2, 1, 3, 5, 6, 4]",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "findPeakElement(new int[]{1, 2, 1, 3, 5, 6, 4})",
      },
      {
        parameter: "[1]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "findPeakElement(new int[]{1})",
      },
      {
        parameter: "[5, 10, 20, 15, 10]",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "findPeakElement(new int[]{5, 10, 20, 15, 10})",
      },
      {
        parameter: "[10, 8, 6, 4, 2]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "findPeakElement(new int[]{10, 8, 6, 4, 2})",
      },
      {
        parameter: "[1, 3, 2, 4, 1]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "findPeakElement(new int[]{1, 3, 2, 4, 1})",
      },
      {
        parameter: "[1, 2, 3, 4, 5, 6]",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "findPeakElement(new int[]{1, 2, 3, 4, 5, 6})",
      },
      {
        expectedOutput: "3",
        userOutput: null,
        parameter: "[1, 2, 3, 4]",
        javaFuncCall: "findPeakElement(new int[]{1, 2, 3, 4})",
      },
      {
        expectedOutput: "0",
        userOutput: null,
        parameter: "[4, 3, 2, 1]",
        javaFuncCall: "findPeakElement(new int[]{4, 3, 2, 1})",
      },
      {
        expectedOutput: "2",
        userOutput: null,
        parameter: "[1, 3, 20, 4, 1, 0]",
        javaFuncCall: "findPeakElement(new int[]{1, 3, 20, 4, 1, 0})",
      },
      {
        expectedOutput: "2",
        userOutput: null,
        parameter: "[5, 10, 20, 15]",
        javaFuncCall: "findPeakElement(new int[]{5, 10, 20, 15})",
      },
      {
        expectedOutput: "2",
        userOutput: null,
        parameter: "[1, 2, 3]",
        javaFuncCall: "findPeakElement(new int[]{1, 2, 3})",
      },
      {
        expectedOutput: "0",
        userOutput: null,
        parameter: "[3, 2, 1]",
        javaFuncCall: "findPeakElement(new int[]{3, 2, 1})",
      },
      {
        expectedOutput: "1",
        userOutput: null,
        parameter: "[1, 2]",
        javaFuncCall: "findPeakElement(new int[]{1, 2})",
      },
    ],

    /* var findPeakElement = function(nums) {
    // Write your code here
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid; // Peak is potentially at mid or to the left
        } else {
            left = mid + 1; // Peak is definitely to the right
        }
    }
    
    return left;

}; */

    /*     left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        
        if nums[mid] > nums[mid + 1]:  # Peak is on the left side
            right = mid
        else:  # Peak is on the right side
            left = mid + 1
    
    return left */

    /* int left = 0;
    int right = nums.length - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] > nums[mid + 1]) {
            // Peak is on the left side or at mid
            right = mid;
        } else {
            // Peak is on the right side of mid
            left = mid + 1;
        }
    }
    
    return left; */
  },
  {
    number: 19,
    heading: "Square Root of an Integer",
    difficulty: "Medium",
    topic: ["Math"],
    ds: "[ Math ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an integer x, find the square root of x. If x is not a perfect square, return floor(sqrt(x)).",
    constraints: ["1 <= x <= 2^31 - 1"],
    functionName: "sqrt",
    returnType: "int",
    javascriptDefaultCode:
      "\n/**\n * @param {number} num\n * @return {number}\n */\nvar sqrt = function(num) {\n    // Write your code here\n};",
    pythonDefaultCode: "def sqrt(x: int) -> int:\n  ",
    javaDefaultCode:
      "public static int sqrt(int n) {\n \t// write your code here\n }",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "n = 4",
        output: "2",
        parameter: "4",
        explanation: "The square root of 4 is 2.",
        image: null,
        javaFuncCall: "sqrt(4)",
      },
      {
        number: 2,
        input: "n = 8",
        output: "2",
        parameter: "8",
        explanation: "The floor(sqrt(8)) is 2.82842..., so the result is 2.",
        image: null,
        javaFuncCall: "sqrt(8)",
      },
      {
        number: 3,
        input: "n = 49",
        output: "7",
        parameter: "49",
        explanation: "The floor(sqrt(49)) is 7.82842..., so the result is 7.",
        image: null,
        javaFuncCall: "sqrt(49)",
      },
    ],
    cases: [
      {
        parameter: "4",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "sqrt(4)",
      },
      {
        parameter: "8",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: "sqrt(8)",
      },
      {
        parameter: "16",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "sqrt(16)",
      },
      {
        parameter: "25",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "sqrt(25)",
      },
      {
        parameter: "36",
        expectedOutput: "6",
        userOutput: null,
        javaFuncCall: "sqrt(36)",
      },
      {
        parameter: "49",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall: "sqrt(49)",
      },
      {
        parameter: "64",
        expectedOutput: "8",
        userOutput: null,
        javaFuncCall: "sqrt(64)",
      },
      {
        parameter: "81",
        expectedOutput: "9",
        userOutput: null,
        javaFuncCall: "sqrt(81)",
      },
      {
        parameter: "100",
        expectedOutput: "10",
        userOutput: null,
        javaFuncCall: "sqrt(100)",
      },
      {
        parameter: "121",
        expectedOutput: "11",
        userOutput: null,
        javaFuncCall: "sqrt(121)",
      },
      {
        parameter: "144",
        expectedOutput: "12",
        userOutput: null,
        javaFuncCall: "sqrt(144)",
      },
    ],

    /* if (num < 2) return num; // Base cases for 0 and 1
    
    let left = 0;
    let right = num;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        
        if (square === num) {
            return mid; // Found the exact square root
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // If we don't find an exact square root, return the floor value
    return right; */

    /* if x < 2:
        return x  # Base cases for 0 and 1
    
    left, right = 0, x
    
    while left <= right:
        mid = (left + right) // 2
        mid_squared = mid * mid
        
        if mid_squared == x:
            return mid
        elif mid_squared < x:
            left = mid + 1
        else:
            right = mid - 1
    
    return right  # Return the largest integer r such that r*r <= x */

    /* if (n < 2) {
        return n; // Base cases for 0 and 1
    }
    
    long left = 0;
    long right = n;
    
    while (left <= right) {
        long mid = left + (right - left) / 2;
        long midSquared = mid * mid;
        
        if (midSquared == n) {
            return (int) mid; // Found the exact square root
        } else if (midSquared < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Return the largest integer r such that r*r <= n
    return (int) right; */
  },
  {
    number: 20,
    heading: "Reverse Integer",
    difficulty: "Easy",
    topic: ["Array", "TwoPointer"],
    ds: "[ Array, TwoPointer ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: "Given a 32-bit signed integer, reverse digits of an integer.",
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    functionName: "reverseInteger",
    returnType: "int",
    javascriptDefaultCode:
      "/**\n\t*@param{number} n\n\t*@return{number}\n*/\n\n var reverseInteger = function(n) {\n//write your code here\n}",
    pythonDefaultCode: "def reverseInteger(n: int) -> int:\n",
    javaDefaultCode:
      "public static int reverseInteger(int n) {\n \t//write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "n = 123",
        output: "321",
        parameter: "123",
        explanation: "The reverse of 123 is 321.",
        image: null,
        javaFuncCall: "reverseInteger(123)",
      },
      {
        number: 2,
        input: "x = -123",
        output: "-321",
        parameter: "-123",
        explanation: "The reverse of -123 is -321.",
        image: null,
        javaFuncCall: "reverseInteger(-123)",
      },
      {
        number: 3,
        input: "x = 120",
        output: "21",
        parameter: "120",
        explanation: "The reverse of 120 is 21.",
        image: null,
        javaFuncCall: "reverseInteger(120)",
      },
    ],
    cases: [
      {
        parameter: "123",
        expectedOutput: "321",
        userOutput: null,
        javaFuncCall: "reverseInteger(123)",
      },
      {
        parameter: "-123",
        expectedOutput: "-321",
        userOutput: null,
        javaFuncCall: "reverseInteger(-123)",
      },
      {
        parameter: "120",
        expectedOutput: "21",
        userOutput: null,
        javaFuncCall: "reverseInteger(120)",
      },
      {
        parameter: "0",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "reverseInteger(0)",
      },
      {
        parameter: "1534236469",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "reverseInteger(1534236469)",
      },
      {
        parameter: "456",
        expectedOutput: "654",
        userOutput: null,
        javaFuncCall: "reverseInteger(456)",
      },
      {
        parameter: "-321",
        expectedOutput: "-123",
        userOutput: null,
        javaFuncCall: "reverseInteger(-321)",
      },
      {
        parameter: "908070",
        expectedOutput: "70809",
        userOutput: null,
        javaFuncCall: "reverseInteger(908070)",
      },
      {
        parameter: "100",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "reverseInteger(100)",
      },
      {
        parameter: "-450",
        expectedOutput: "-54",
        userOutput: null,
        javaFuncCall: "reverseInteger(-450)",
      },
    ],

    /* const maxInt = Math.pow(2, 31) - 1; // 2^31 - 1
    const minInt = -Math.pow(2, 31);    // -2^31
    
    // Convert number to string to handle negative sign
    let str = Math.abs(n).toString();
    
    // Reverse the string
    let reversed = parseInt(str.split('').reverse().join(''));
    
    // Check for overflow
    if (reversed > maxInt) {
        return 0;
    }
    
    // Apply original sign
    if (n < 0) {
        reversed *= -1;
    }
    
    return reversed; */

    /* MAX_INT = 2**31 - 1
    MIN_INT = -2**31
    
    # Convert integer to string to handle digits easily
    str_n = str(n)
    
    # Handle negative sign
    if str_n[0] == '-':
        reversed_str = '-' + str_n[:0:-1]  # Reverse digits excluding the negative sign
    else:
        reversed_str = str_n[::-1]         # Reverse all digits
    
    # Convert reversed string back to integer
    reversed_int = int(reversed_str)
    
    # Check for overflow
    if reversed_int < MIN_INT or reversed_int > MAX_INT:
        return 0
    
    return reversed_int
 */

    /*     final int MAX_INT = Integer.MAX_VALUE;   // 2^31 - 1
    final int MIN_INT = Integer.MIN_VALUE;   // -2^31
    
    // Convert integer to string to handle digits easily
    String strN = Integer.toString(n);
    
    // Handle negative sign
    boolean isNegative = strN.charAt(0) == '-';
    StringBuilder reversedStr = new StringBuilder();
    
    // Reverse the digits excluding the negative sign
    for (int i = strN.length() - 1; i >= (isNegative ? 1 : 0); i--) {
        reversedStr.append(strN.charAt(i));
    }
    
    // Convert reversed string back to integer
    int reversedInt;
    try {
        reversedInt = isNegative ? -Integer.parseInt(reversedStr.toString()) : Integer.parseInt(reversedStr.toString());
    } catch (NumberFormatException e) {
        return 0; // Handle NumberFormatException
    }
    
    // Check for overflow
    if (reversedInt < MIN_INT || reversedInt > MAX_INT) {
        return 0;
    }
    
    return reversedInt; */
  },
  {
    number: 21,
    heading: "Sort Colors",
    difficulty: "Medium",
    topic: ["Array", "TwoPointer", "Sorting"],
    ds: "[ Array, TwoPointer, Sorting ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. Note: While solving in java return array as String for ex: Arrays.toString(result)",
    constraints: ["1 <= nums.length <= 300", "nums[i] is 0, 1, or 2."],
    functionName: "sortColors",
    returnType: "number[]",
    javascriptDefaultCode:
      "/**\n\t*@param{number[]} nums\n\t*@return{number[]}\n*/\n\nvar sortColors = function(nums) {\n //write your code here \n};",
    pythonDefaultCode:
      "from typing import List \ndef sortColors(nums: list[int]) -> list[int]:\n",
    javaDefaultCode:
      "public static String sortColors(int[] nums) {\n//  write your code here\n }",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [2,0,2,1,1,0]",
        output: "[0,0,1,1,2,2]",
        parameter: "[2,0,2,1,1,0]",
        explanation: "The sorted array is [0,0,1,1,2,2].",
        image: null,
        javaFuncCall: "sortColors(new int[]{2,0,2,1,1,0})",
      },
      {
        number: 2,
        input: "nums = [2,0,1]",
        output: "[0,1,2]",
        parameter: "[2,0,1]",
        explanation: "The sorted array is [0,1,2].",
        image: null,
        javaFuncCall: "sortColors(new int[]{2,0,1})",
      },
      {
        number: 3,
        input: "nums = [1,0,0,2,1,2]",
        output: "[0,0,1,1,2,2]",
        parameter: "[1,0,0,2,1,2]",
        explanation: "The sorted array is [0,0,1,1,2,2].",
        image: null,
        javaFuncCall: "sortColors(new int[]{1,0,0,2,1,2})",
      },
    ],
    cases: [
      {
        parameter: "[2,0,2,1,1,0]",
        expectedOutput: "[0,0,1,1,2,2]",
        userOutput: null,
        javaFuncCall: "sortColors(new int[]{2,0,2,1,1,0})",
      },
      {
        parameter: "[2,0,1]",
        expectedOutput: "[0,1,2]",
        userOutput: null,
        javaFuncCall: "sortColors(new int[]{2,0,1})",
      },
      {
        parameter: "[0]",
        expectedOutput: "[0]",
        userOutput: null,
        javaFuncCall: "sortColors(new int[]{0})",
      },
      {
        parameter: "[1]",
        expectedOutput: "[1]",
        userOutput: null,
        javaFuncCall: "sortColors(new int[]{1})",
      },
      {
        parameter: "[2]",
        expectedOutput: "[2]",
        userOutput: null,
        javaFuncCall: "sortColors(new int[]{2})",
      },
      {
        parameter: "[1,2,0]",
        expectedOutput: "[0,1,2]",
        userOutput: null,
        javaFuncCall: "sortColors(new int[]{1,2,0})",
      },
    ],
    /*var sortColors = function(nums) {
      let low = 0, mid = 0, high = nums.length - 1;
      
      while (mid <= high) {
          if (nums[mid] === 0) {
              [nums[low], nums[mid]] = [nums[mid], nums[low]];
              low++;
              mid++;
          } else if (nums[mid] === 1) {
              mid++;
          } else {
              [nums[mid], nums[high]] = [nums[high], nums[mid]];
              high--;
          }
      }
  }; */

    /* def sortColors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
 */

    /* import java.util.Arrays;

public class Solution {
    public static String sortColors(int[] nums) {
        // Count the occurrences of 0s, 1s, and 2s
        int count0 = 0, count1 = 0, count2 = 0;
        
        for (int num : nums) {
            switch (num) {
                case 0:
                    count0++;
                    break;
                case 1:
                    count1++;
                    break;
                case 2:
                    count2++;
                    break;
            }
        }
        
        // Overwrite the original array based on the counts
        int index = 0;
        while (count0 > 0) {
            nums[index++] = 0;
            count0--;
        }
        while (count1 > 0) {
            nums[index++] = 1;
            count1--;
        }
        while (count2 > 0) {
            nums[index++] = 2;
            count2--;
        }
        
        return Arrays.toString(nums);
    }

    public static void main(String[] args) {
        int[] nums = {2, 0, 2, 1, 1, 0};
        System.out.println(sortColors(nums)); // Output: [0, 0, 1, 1, 2, 2]
    }
}
 */
  },
  {
    number: 22,
    heading: "Sort Even Odd",
    difficulty: "Medium",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    topic: ["Sorting", "Math", "Array"],
    ds: "[ Sorting, Math, Array ]",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an array nums with n integers, sort them in-place so that all even numbers come before all odd numbers. Additionally, sort the even numbers in ascending order and the odd numbers in descending order.Note: While solving in java return array as String for ex: Arrays.toString(result)",
    constraints: ["1 <= nums.length <= 300", "-1000 <= nums[i] <= 1000"],
    functionName: "sortEvenOdd",
    returnType: "number[]",
    javascriptDefaultCode:
      "/**\n\t*@param{number[]} nums\n\t*@return{number[]}\n*/\n\nvar sortEvenOdd = function(nums) {\n // write your code here \n};",
    pythonDefaultCode:
      "from typing import List \ndef sortEvenOdd(nums: list[int]) -> list[int]:\n",
    javaDefaultCode:
      "public static String sortEvenOdd(int[] nums) {\n//  write your code here \n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [3,1,2,4]",
        output: "[2,4,3,1]",
        parameter: "[3,1,2,4]",
        explanation:
          "The sorted array is [2,4,3,1]. Even numbers are sorted in ascending order and odd numbers are sorted in descending order.",
        image: null,
        javaFuncCall: "sortEvenOdd(new int[]{3,1,2,4})",
      },
      {
        number: 2,
        input: "nums = [6,5,4,3,2,1]",
        output: "[2,4,6,5,3,1]",
        parameter: "[6,5,4,3,2,1]",
        explanation:
          "The sorted array is [2,4,6,5,3,1]. Even numbers are sorted in ascending order and odd numbers are sorted in descending order.",
        image: null,
        javaFuncCall: "sortEvenOdd(new int[]{6,5,4,3,2,1})",
      },
      {
        number: 3,
        input: "nums = [20,10,30,15,25,35]",
        output: "[10,20,30,35,25,15]",
        parameter: "[20,10,30,15,25,35]",
        explanation:
          "The sorted array is [0,2,4,6,7,5,3,1]. Even numbers are sorted in ascending order and odd numbers are sorted in descending order.",
        image: null,
        javaFuncCall: "sortEvenOdd(new int[]{20,10,30,15,25,35})",
      },
    ],
    cases: [
      {
        parameter: "[3,1,2,4]",
        expectedOutput: "[2,4,3,1]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{3,1,2,4})",
      },
      {
        parameter: "[6,5,4,3,2,1]",
        expectedOutput: "[2,4,6,5,3,1]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{6,5,4,3,2,1})",
      },
      {
        parameter: "[0]",
        expectedOutput: "[0]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{0})",
      },
      {
        parameter: "[1]",
        expectedOutput: "[1]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{1})",
      },
      {
        parameter: "[2]",
        expectedOutput: "[2]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{2})",
      },
      {
        parameter: "[3,2,1]",
        expectedOutput: "[2,3,1]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{3,2,1})",
      },
      {
        parameter: "[5,3,8,6,7,2]",
        expectedOutput: "[2,6,8,7,5,3]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{5,3,8,6,7,2})",
      },
      {
        parameter: "[32,11,23,15,42,66]",
        expectedOutput: "[32,42,66,23,15,11]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{32,11,23,15,42,66})",
      },
      {
        parameter: "[3,3,2,2,1,1]",
        expectedOutput: "[2,2,3,3,1,1]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{3,3,2,2,1,1})",
      },
      {
        parameter: "[20,10,30,15,25,35]",
        expectedOutput: "[10,20,30,35,25,15]",
        userOutput: null,
        javaFuncCall: "sortEvenOdd(new int[]{20,10,30,15,25,35})",
      },
    ],

    /*  const isEven = num => num % 2 === 0;

    // Two pointers approach
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // Move left pointer to find the next odd number
        while (left < right && isEven(nums[left])) {
            left++;
        }

        // Move right pointer to find the next even number
        while (left < right && !isEven(nums[right])) {
            right--;
        }

        // Swap nums[left] (odd) with nums[right] (even)
        if (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }

    // Sort even numbers in ascending order (only the first left+1 elements)
    nums.sort((a, b) => (isEven(a) && isEven(b)) ? a - b : 0);

    // Sort odd numbers in descending order (from right to left)
    for (let i = left; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (!isEven(nums[i]) && !isEven(nums[j]) && nums[j] > nums[i]) {
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }

    return nums; */

    /*     # Function to check if a number is even
    def is_even(num):
        return num % 2 == 0
    
    # Two pointers approach
    left = 0
    right = len(nums) - 1
    
    while left < right:
        # Move left pointer to find the next odd number
        while left < right and is_even(nums[left]):
            left += 1
        
        # Move right pointer to find the next even number
        while left < right and not is_even(nums[right]):
            right -= 1
        
        # Swap nums[left] (odd) with nums[right] (even)
        if left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
    
    # Sort even numbers in ascending order
    evens = [num for num in nums if is_even(num)]
    evens.sort()
    
    # Sort odd numbers in descending order
    odds = [num for num in nums if not is_even(num)]
    odds.sort(reverse=True)
    
    # Combine sorted even and odd numbers
    sorted_nums = []
    even_index = 0
    odd_index = 0
    
    for num in nums:
        if is_even(num):
            sorted_nums.append(evens[even_index])
            even_index += 1
        else:
            sorted_nums.append(odds[odd_index])
            odd_index += 1
    
    return sorted_nums  */

    /*         boolean isEven = false;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] % 2 == 0) {
                isEven = true;
                break;
            }
        }

        // Two pointers approach
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            // Move left pointer to find the next odd number
            while (left < right && nums[left] % 2 == 0) {
                left++;
            }

            // Move right pointer to find the next even number
            while (left < right && nums[right] % 2 != 0) {
                right--;
            }

            // Swap nums[left] (odd) with nums[right] (even)
            if (left < right) {
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
                right--;
            }
        }

        // Convert int[] to List<Integer> for easier manipulation
        List<Integer> numList = new ArrayList<>();
        for (int num : nums) {
            numList.add(num);
        }

        // Separate even and odd numbers
        List<Integer> evens = new ArrayList<>();
        List<Integer> odds = new ArrayList<>();
        for (int num : numList) {
            if (num % 2 == 0) {
                evens.add(num);
            } else {
                odds.add(num);
            }
        }

        // Sort evens in ascending order
        Collections.sort(evens);

        // Sort odds in descending order
        Collections.sort(odds, Collections.reverseOrder());

        // Combine sorted evens and odds back into nums
        int evensIndex = 0, oddsIndex = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] % 2 == 0) {
                nums[i] = evens.get(evensIndex++);
            } else {
                nums[i] = odds.get(oddsIndex++);
            }
        }

        // Return the sorted array as a string
        return Arrays.toString(nums); */
  },
  {
    number: 23,
    heading: "Longest Consecutive Sequence",
    difficulty: "Hard",
    topic: ["Array", "HashTable"],
    ds: "[ Array, HashTable ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description: `Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
      <br>
      You must write an algorithm that runs in O(n) time.`,
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    functionName: "longestConsecutive",
    returnType: "int",
    javascriptDefaultCode:
      "\n/**\n\t* @param {number[]} nums\n\t* @return {number}\n*/\n\nvar longestConsecutive = function(nums) {\n\t// Write your code here\n};",
    pythonDefaultCode:
      "from typing import List \ndef longestConsecutive(nums: List[int]) -> int:\n\t# Write your code here",
    javaDefaultCode:
      "public static int longestConsecutive(int[] nums) {\n\t// Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
        parameter: "[100,4,200,1,3,2]",
        javaFuncCall: "longestConsecutive(new int[]{100,4,200,1,3,2})",
        explanation:
          "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.",
        image: null,
      },
      {
        number: 2,
        input: "nums = [0,3,7,2,5,8,4,6,0,1]",
        output: "9",
        parameter: "[0,3,7,2,5,8,4,6,0,1]",
        javaFuncCall: "longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1})",
        explanation:
          "The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore, the length is 9.",
        image: null,
      },
      {
        number: 3,
        input: "nums = [10,5,12,3,55,11,4]",
        output: "3",
        parameter: "[10,5,12,3,55,11,4]",
        javaFuncCall: "longestConsecutive(new int[]{10,5,12,3,55,11,4})",
        explanation:
          "The longest consecutive elements sequence is [3, 4, 5, 6]. Therefore, the length is 4.",
        image: null,
      },
    ],
    cases: [
      {
        parameter: "[100,4,200,1,3,2]",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{100,4,200,1,3,2})",
      },
      {
        parameter: "[0,3,7,2,5,8,4,6,0,1]",
        expectedOutput: "9",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1})",
      },
      {
        parameter: "[10,5,12,3,55,11,4]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{10,5,12,3,55,11,4})",
      },
      {
        parameter: "[]",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{})",
      },
      {
        parameter: "[1]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{1})",
      },
      {
        parameter: "[5, 2, 99, 1, 100, 3, 4]",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{5, 2, 99, 1, 100, 3, 4})",
      },
      {
        parameter: "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
        expectedOutput: "10",
        userOutput: null,
        javaFuncCall:
          "longestConsecutive(new int[]{10, 9, 8, 7, 6, 5, 4, 3, 2, 1})",
      },
      {
        parameter: "[1, 2, 0, 1]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{1, 2, 0, 1})",
      },
      {
        parameter: "[7, 6, 5, 4, 3, 2, 1]",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{7, 6, 5, 4, 3, 2, 1})",
      },
      {
        parameter: "[50, 3, 2, 1, 40, 41, 42, 43, 44, 45, 46, 47]",
        expectedOutput: "8",
        userOutput: null,
        javaFuncCall:
          "longestConsecutive(new int[]{50, 3, 2, 1, 40, 41, 42, 43, 44, 45, 46, 47})",
      },
      {
        parameter: "[102, 4, 103, 3, 101, 5, 100, 2, 6]",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall:
          "longestConsecutive(new int[]{102, 4, 103, 3, 101, 5, 100, 2, 6})",
      },
      {
        parameter: "[3, 7, 2, 1, 9, 8, 4]",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "longestConsecutive(new int[]{3, 7, 2, 1, 9, 8, 4})",
      },
      {
        parameter: "[100, 200, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
        expectedOutput: "10",
        userOutput: null,
        javaFuncCall:
          "longestConsecutive(new int[]{100, 200, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})",
      },
      {
        parameter: "[10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
        expectedOutput: "15",
        userOutput: null,
        javaFuncCall:
          "longestConsecutive(new int[]{10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9})",
      },
    ],
    /* var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    // Use a set for fast lookup
    let numSet = new Set(nums);
    let maxLength = 0;
    
    for (let num of numSet) {
        // Only process if num is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            
            // Count the sequence length
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            // Update maxLength if currentLength is greater
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
}; */

    /*     if not nums:
        return 0
    
    num_set = set(nums)
    max_length = 0
    
    for num in nums:
        if num - 1 not in num_set:  # Only start counting from the beginning of a sequence
            current_num = num
            current_length = 1
            
            # Count the length of the sequence
            while current_num + 1 in num_set:
                current_num += 1
                current_length += 1
            
            # Update the maximum length found
            max_length = max(max_length, current_length)
    
    return max_length */

    /* if (nums == null || nums.length == 0) {
            return 0;
        }
        
        HashSet<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }
        
        int maxLength = 0;
        
        for (int num : nums) {
            if (!numSet.contains(num - 1)) {  // Only start counting from the beginning of a sequence
                int currentNum = num;
                int currentLength = 1;
                
                // Count the length of the sequence
                while (numSet.contains(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                }
                
                // Update the maximum length found
                maxLength = Math.max(maxLength, currentLength);
            }
        }
        
        return maxLength; */
  },
  {
    number: 24,
    heading: "Longest Substring Without Repeating Characters",
    difficulty: "Hard",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    topic: ["HashTable", "String", "SlidingWindow"],
    ds: "[ HashTable, String, SlidingWindow ]",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    constraints: [
      "0 <= s.length <= 5 * 104",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    functionName: "lengthOfLongestSubstring",
    returnType: "int",
    javascriptDefaultCode:
      " /** \n* @param {string} s - The input string \n* @return {number} - The length of the longest substring without repeating characters \n*/ \nvar lengthOfLongestSubstring = function(s) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "def lengthOfLongestSubstring(s: str) -> int:\n    # Write your code here",
    javaDefaultCode:
      "public static int lengthOfLongestSubstring(String s) {\n    // Write your code here \n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "s = 'abcabcbb'",
        output: "3",
        parameter: "'abcabcbb'",
        explanation:
          "The longest substring without repeating characters is 'abc', which has a length of 3.",
        image: null,
        javaFuncCall: 'lengthOfLongestSubstring("abcabcbb")',
      },
      {
        number: 2,
        input: "s = 'bbbbb'",
        output: "1",
        parameter: "'bbbbb'",
        explanation:
          "The longest substring without repeating characters is 'b', which has a length of 1.",
        image: null,
        javaFuncCall: 'lengthOfLongestSubstring("bbbbb")',
      },
      {
        number: 3,
        input: "s = 'pwwkew'",
        output: "3",
        parameter: "'pwwkew'",
        explanation:
          "The longest substring without repeating characters is 'wke', which has a length of 3.",
        image: null,
        javaFuncCall: 'lengthOfLongestSubstring("pwwkew")',
      },
    ],
    cases: [
      {
        parameter: "'abcabcbb'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("abcabcbb")',
      },
      {
        parameter: "'bbbbb'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("bbbbb")',
      },
      {
        parameter: "'pwwkew'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("pwwkew")',
      },
      {
        parameter: "''",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("")',
      },
      {
        parameter: "'au'",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("au")',
      },
      {
        parameter: "'aab'",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("aab")',
      },
      {
        parameter: "'dvdf'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("dvdf")',
      },
      {
        parameter: "'tmmzuxt'",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("tmmzuxt")',
      },
      {
        parameter: "'abcde'",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("abcde")',
      },
      {
        parameter: "'abccba'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("abccba")',
      },
      {
        parameter: "'abcdefgh'",
        expectedOutput: "8",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("abcdefgh")',
      },
      {
        parameter: "'aaabcdefg'",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("aaabcdefg")',
      },
      {
        parameter: "'a'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'lengthOfLongestSubstring("a")',
      },
      {
        parameter:
          "'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'",
        expectedOutput: "62",
        userOutput: null,
        javaFuncCall:
          'lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")',
      },
    ],

    /*   let maxLength = 0;
    let left = 0;
    let right = 0;
    let set = new Set();
    
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    
    return maxLength; */

    /*     char_map = {}
    max_length = 0
    left = 0
    
    for right in range(len(s)):
        if s[right] in char_map:
            left = max(char_map[s[right]] + 1, left)
        
        char_map[s[right]] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length */

    /*         HashMap<Character, Integer> charMap = new HashMap<>();
        int maxLength = 0;
        int left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (charMap.containsKey(ch)) {
                left = Math.max(charMap.get(ch) + 1, left);
            }
            charMap.put(ch, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength; */
  },
  {
    number: 25,
    heading: "Length of Last Word",
    difficulty: "Easy",
    topic: ["String"],
    ds: "[ String ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.",
    constraints: [
      "1 <= s.length <= 104",
      "s consists of only English letters and spaces ' '.",
      "There will be at least one word in s.",
    ],
    functionName: "lengthOfLastWord",
    returnType: "int",
    javascriptDefaultCode:
      "/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLastWord = function(s) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "def lengthOfLastWord(s: str) -> int:\n    # Write your code here",
    javaDefaultCode:
      "public static int lengthOfLastWord(String s) {\n    // Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "s = 'Hello World'",
        output: "5",
        parameter: "'Hello World'",
        explanation:
          "The last word in the string is 'World', which has a length of 5.",
        image: null,
        javaFuncCall: 'lengthOfLastWord("Hello World")',
      },
      {
        number: 2,
        input: "s = '   fly me   to   the moon  '",
        output: "4",
        parameter: "'   fly me   to   the moon  '",
        explanation:
          "The last word in the string is 'moon', which has a length of 4.",
        image: null,
        javaFuncCall: 'lengthOfLastWord("   fly me   to   the moon  ")',
      },
      {
        number: 3,
        input: "s = 'The quick brown fox jumps over the lazy dog'",
        output: "3",
        parameter: "'The quick brown fox jumps over the lazy dog'",
        explanation:
          "The last word in the string is 'dog', which has a length of 3.",
        image: null,
        javaFuncCall:
          'lengthOfLastWord("The quick brown fox jumps over the lazy dog")',
      },
    ],
    cases: [
      {
        parameter: "'Hello World'",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Hello World")',
      },
      {
        parameter: "'   fly me   to   the moon  '",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("   fly me   to   the moon  ")',
      },
      {
        parameter: "'luffy is still joyboy'",
        expectedOutput: "6",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("luffy is still joyboy")',
      },
      {
        parameter: "'a '",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("a ")',
      },
      {
        parameter: "' a'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord(" a")',
      },
      {
        parameter: "' a '",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord(" a ")',
      },
      {
        parameter: "''",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("")',
      },
      {
        parameter: "'Python'",
        expectedOutput: "6",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Python")',
      },
      {
        parameter: "'Java 8'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Java 8")',
      },
      {
        parameter: "'  C++  '",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("  C++  ")',
      },
      {
        parameter: "'Java is fun!'",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Java is fun!")',
      },
      {
        parameter: "'Algorithm Design'",
        expectedOutput: "6",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Algorithm Design")',
      },
      {
        parameter: "'Dynamic Programming is amazing'",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Dynamic Programming is amazing")',
      },
      {
        parameter: "'Artificial Intelligence'",
        expectedOutput: "12",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Artificial Intelligence")',
      },
      {
        parameter: "'Hello  World'",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Hello  World")',
      },
      {
        parameter: "'Computer Science'",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Computer Science")',
      },
      {
        parameter: "'Software Engineering'",
        expectedOutput: "11",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Software Engineering")',
      },
      {
        parameter: "'Data Structures'",
        expectedOutput: "10",
        userOutput: null,
        javaFuncCall: 'lengthOfLastWord("Data Structures")',
      },
    ],

    /*  s = s.trim();
    
    // Split by spaces
    let words = s.split(' ');
    
    // Find the last non-empty word
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== '') {
            return words[i].length;
        }
    }
    
    // If no valid word found, return 0
    return 0; */

    /*   s = s.strip()
    
    # Split by spaces
    words = s.split()
    
    # Return length of the last word
    return len(words[-1]) if words else 0 */

    /* s = s.trim();
    
    // Split by one or more whitespace characters
    String[] words = s.split("\\s+");
    
    // Return length of the last word
    return words.length > 0 ? words[words.length - 1].length() : 0; */
  },

  {
    number: 26,
    heading: "First Unique Character in a String",
    difficulty: "Easy",
    topic: ["String", "HashTable"],
    ds: "[ Hash Table, String ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    constraints: [
      "1 <= s.length <= 105",
      "s consists of only lowercase English letters.",
    ],
    functionName: "firstUniqueChar",
    returnType: "number",
    javascriptDefaultCode:
      "/**\n * @param {string} s\n * @return {number}\n */\nvar firstUniqueChar = function(s) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "def firstUniqueChar(s: str) -> int:\n    # Write your code here",
    javaDefaultCode:
      "public static int firstUniqueChar(String s) {\n    // Write your code here\n    return -1;\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "s = 'leetcode'",
        output: "0",
        parameter: "'leetcode'",
        explanation:
          "The first non-repeating character in 'leetcode' is 'l', which has index 0.",
        image: null,
        javaFuncCall: 'firstUniqueChar("leetcode")',
      },
      {
        number: 2,
        input: "s = 'loveleetcode'",
        output: "2",
        parameter: "'loveleetcode'",
        explanation:
          "The first non-repeating character in 'loveleetcode' is 'v', which has index 2.",
        image: null,
        javaFuncCall: 'firstUniqueChar("loveleetcode")',
      },
      {
        number: 3,
        input: "s = 'aabb'",
        output: "-1",
        parameter: "'aabb'",
        explanation:
          "'aabb' does not have any unique characters, so return -1.",
        image: null,
        javaFuncCall: 'firstUniqueChar("aabb")',
      },
    ],
    cases: [
      {
        parameter: "'leetcode'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("leetcode")',
      },
      {
        parameter: "'loveleetcode'",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("loveleetcode")',
      },
      {
        parameter: "'aabb'",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("aabb")',
      },
      {
        parameter: "'abcde'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("abcde")',
      },
      {
        parameter: "'abacabad'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("abacabad")',
      },
      {
        parameter: "'hello'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("hello")',
      },
      {
        parameter: "'racecar'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("racecar")',
      },
      {
        parameter: "'apple'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("apple")',
      },
      {
        parameter: "'xyyx'",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("xyyx")',
      },
      {
        parameter: "'programmer'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("programmer")',
      },
      {
        parameter: "'algorithm'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("algorithm")',
      },
      {
        parameter: "'leetcodeisfun'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("leetcodeisfun")',
      },
      {
        parameter: "'codingisfun'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("codingisfun")',
      },
      {
        parameter: "'programming'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("programming")',
      },
      {
        parameter: "'interview'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'firstUniqueChar("interview")',
      },
    ],

    /* 
  js:
    var firstUniqueChar = function(s) {
    let charCount = new Map();
    
    // Count occurrences of each character
    for (let char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }
    
    // Find the index of the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1; // No unique character found
};


  python:
    def firstUniqueChar(s: str) -> int:
    char_count = {}
    
    # Count occurrences of each character
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # Find the index of the first unique character
    for i in range(len(s)):
        if char_count[s[i]] == 1:
            return i
    
    return -1 


  java:
      public static int firstUniqueChar(String s) {
    Map<Character, Integer> charCount = new HashMap<>();
    
    // Count occurrences of each character
    for (char c : s.toCharArray()) {
        charCount.put(c, charCount.getOrDefault(c, 0) + 1);
    }
    
    // Find the index of the first unique character
    for (int i = 0; i < s.length(); i++) {
        if (charCount.get(s.charAt(i)) == 1) {
            return i;
        }
    }
    
    return -1; // No unique character found
}
  */
  },

  {
    number: 27,
    heading: "Sum of All Multiples of 3 or 5",
    difficulty: "Easy",
    topic: ["Math", "Looping"],
    ds: "[ Integer ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Write a function sumMultiples(n) that takes an integer n as input and returns the sum of all positive integers that are multiples of either 3 or 5 up to n (exclusive).",
    constraints: ["1 <= n <= 10^6"],
    functionName: "sumMultiples",
    returnType: "int",
    javascriptDefaultCode:
      "/**\n * @param {number} n\n * @return {number}\n */\nvar sumMultiples = function(n) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "def sumMultiples(n: int) -> int:\n    # Write your code here",
    javaDefaultCode:
      "public static int sumMultiples(int n) {\n        // Write your code here\n    }",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "n = 10",
        output: "23",
        parameter: "10",
        explanation:
          "The multiples of 3 or 5 up to 10 are 3, 5, 6, and 9. Their sum is 3 + 5 + 6 + 9 = 23.",
        image: null,
        javaFuncCall: "sumMultiples(10)",
      },
      {
        number: 2,
        input: "n = 20",
        output: "78",
        parameter: "20",
        explanation:
          "The multiples of 3 or 5 up to 20 are 3, 5, 6, 9, 10, 12, and 15. Their sum is 3 + 5 + 6 + 9 + 10 + 12 + 15 = 78.",
        image: null,
        javaFuncCall: "sumMultiples(20)",
      },
      {
        number: 3,
        input: "n = 6",
        output: "8",
        parameter: "6",
        explanation:
          "The multiples of 3 or 5 up to 6 are 3 and 5. Their sum is 3 + 5 = 8.",
        image: null,
        javaFuncCall: "sumMultiples(6)",
      },
    ],
    cases: [
      {
        parameter: "10",
        expectedOutput: "23",
        userOutput: null,
        javaFuncCall: "sumMultiples(10)",
      },
      {
        parameter: "20",
        expectedOutput: "78",
        userOutput: null,
        javaFuncCall: "sumMultiples(20)",
      },
      {
        parameter: "6",
        expectedOutput: "8",
        userOutput: null,
        javaFuncCall: "sumMultiples(6)",
      },
      {
        parameter: "15",
        expectedOutput: "45",
        userOutput: null,
        javaFuncCall: "sumMultiples(15)",
      },
      {
        parameter: "100",
        expectedOutput: "2318",
        userOutput: null,
        javaFuncCall: "sumMultiples(100)",
      },
      {
        parameter: "50",
        expectedOutput: "543",
        userOutput: null,
        javaFuncCall: "sumMultiples(50)",
      },
      {
        parameter: "1000",
        expectedOutput: "233168",
        userOutput: null,
        javaFuncCall: "sumMultiples(1000)",
      },
      {
        parameter: "5",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "sumMultiples(5)",
      },
      {
        parameter: "12",
        expectedOutput: "33",
        userOutput: null,
        javaFuncCall: "sumMultiples(12)",
      },
      {
        parameter: "3",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "sumMultiples(3)",
      },
      {
        parameter: "1",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: "sumMultiples(1)",
      },
      {
        parameter: "7",
        expectedOutput: "14",
        userOutput: null,
        javaFuncCall: "sumMultiples(7)",
      },
    ],

    /*  
    js:
      var sumMultiples = function(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};


    python:
      def sumMultiples(n: int) -> int:
    sum = 0
    for i in range(1, n):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum


    java:
         public static int sumMultiples(int n) {
        int sum = 0;
        for (int i = 1; i < n; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }
    */
  },
  {
    number: 28,
    heading: "Maximum Subarray",
    difficulty: "Medium",
    topic: ["Array", "Dynamic Programming"],
    ds: "[ Array ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    functionName: "maxSubArray",
    returnType: "number",
    javascriptDefaultCode:
      "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function(nums) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "from typing import List\n\ndef maxSubArray(nums: List[int]) -> int:\n    # Write your code here",
    javaDefaultCode:
      "public static int maxSubArray(int[] nums) {\n    // Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        output: "6",
        parameter: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        explanation:
          "The contiguous subarray [4, -1, 2, 1] has the largest sum = 6.",
        image: null,
        javaFuncCall: "maxSubArray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4})",
      },
      {
        number: 2,
        input: "nums = [1]",
        output: "1",
        parameter: "[1]",
        explanation:
          "The contiguous subarray [1] itself is the maximum subarray with sum 1.",
        image: null,
        javaFuncCall: "maxSubArray(new int[]{1})",
      },
      {
        number: 3,
        input: "nums = [5, 4, -1, 7, 8]",
        output: "23",
        parameter: "[5, 4, -1, 7, 8]",
        explanation:
          "The entire array [5, 4, -1, 7, 8] itself is the maximum subarray with sum 23.",
        image: null,
        javaFuncCall: "maxSubArray(new int[]{5, 4, -1, 7, 8})",
      },
    ],
    cases: [
      {
        parameter: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        expectedOutput: "6",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4})",
      },
      {
        parameter: "[1]",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{1})",
      },
      {
        parameter: "[5, 4, -1, 7, 8]",
        expectedOutput: "23",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{5, 4, -1, 7, 8})",
      },
      {
        parameter: "[-1, -2, -3, -4]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{-1, -2, -3, -4})",
      },
      {
        parameter: "[10, -2, 3, -4, 7, 2, -5]",
        expectedOutput: "16",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{10, -2, 3, -4, 7, 2, -5})",
      },
      {
        parameter: "[1, 2, 3, 4, 5]",
        expectedOutput: "15",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{1, 2, 3, 4, 5})",
      },
      {
        parameter: "[-2, -3, -1, -5, -7]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{-2, -3, -1, -5, -7})",
      },
      {
        parameter: "[3, -1, 6, 4, 2]",
        expectedOutput: "14",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{3, -1, 6, 4, 2})",
      },
      {
        parameter: "[-1, 2, -3, 4, -5]",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{-1, 2, -3, 4, -5})",
      },
      {
        parameter: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        expectedOutput: "6",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4})",
      },
      {
        parameter: "[-2, -5, 6, -2, -3, 1, 5, -6]",
        expectedOutput: "7",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{-2, -5, 6, -2, -3, 1, 5, -6})",
      },
      {
        parameter: "[1, 2, -1, -2, 2, 1, -2, 1]",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{1, 2, -1, -2, 2, 1, -2, 1})",
      },
      {
        parameter: "[-1, -2, -3, -4, -5]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall: "maxSubArray(new int[]{-1, -2, -3, -4, -5})",
      },
      {
        parameter: "[-2, -1, -3, -4, -1, -2, -1, -5, -4]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall:
          "maxSubArray(new int[]{-2, -1, -3, -4, -1, -2, -1, -5, -4})",
      },
      {
        parameter: "[-1, -2, -3, -4, -5, -6, -7, -8, -9]",
        expectedOutput: "-1",
        userOutput: null,
        javaFuncCall:
          "maxSubArray(new int[]{-1, -2, -3, -4, -5, -6, -7, -8, -9})",
      },
    ],

    /*  
    js:
      var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};


    python:
      from typing import List

def maxSubArray(nums: List[int]) -> int:
    if not nums:
        return 0
    
    max_sum = current_sum = nums[0]
    
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    
    return max_sum


    java:
      public static int maxSubArray(int[] nums) {
    if (nums.length == 0) return 0;
    
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
    
    */
  },

  {
    number: 29,
    heading: "Longest Palindromic Substring",
    difficulty: "Hard",
    topic: ["String", "Dynamic Programming"],
    ds: "[ String ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. A palindrome is a sequence that reads the same backward as forward.",
    constraints: [
      "1 <= s.length <= 1000",
      "s consists only of lowercase English letters.",
    ],
    functionName: "longestPalindrome",
    returnType: "string",
    javascriptDefaultCode:
      "/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function(s) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "def longestPalindrome(s: str) -> str:\n    # Write your code here",
    javaDefaultCode:
      "public static String longestPalindrome(String s) {\n    // Write your code here\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "s = babad",
        output: "bab",
        parameter: "'babad'",
        explanation: "'aba' is also a valid answer.",
        image: null,
        javaFuncCall: 'longestPalindrome("babad")',
      },
      {
        number: 2,
        input: "s = aaabbbaa",
        output: "aabbbaa",
        parameter: "'aaabbbaa'",
        explanation: "",
        image: null,
        javaFuncCall: 'longestPalindrome("aaabbbaa")',
      },
      {
        number: 3,
        input: "s = a",
        output: "a",
        parameter: "'a'",
        explanation: "",
        image: null,
        javaFuncCall: 'longestPalindrome("a")',
      },
    ],
    cases: [
      {
        parameter: "'cbbd'",
        expectedOutput: "bb",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("cbbd")',
      },
      {
        parameter: "'a'",
        expectedOutput: "a",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("a")',
      },
      {
        parameter: "'ac'",
        expectedOutput: "a",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("ac")',
      },
      {
        parameter: "'racecar'",
        expectedOutput: "racecar",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("racecar")',
      },
      {
        parameter: "'abcdefedcba'",
        expectedOutput: "abcdefedcba",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("abcdefedcba")',
      },
      {
        parameter: "'aaaabaaaa'",
        expectedOutput: "aaaabaaaa",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("aaaabaaaa")',
      },
      {
        parameter: "'banana'",
        expectedOutput: "anana",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("banana")',
      },
      {
        parameter: "'forgeeksskeegfor'",
        expectedOutput: "geeksskeeg",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("forgeeksskeegfor")',
      },
      {
        parameter: "'ababababababa'",
        expectedOutput: "ababababababa",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("ababababababa")',
      },
      {
        parameter: "'zxabcyxcba'",
        expectedOutput: "z",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("zxabcyxcba")',
      },
      {
        parameter: "'madam'",
        expectedOutput: "madam",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("madam")',
      },
      {
        parameter: "'abaxyzzyxf'",
        expectedOutput: "xyzzyx",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("abaxyzzyxf")',
      },
      {
        parameter: "'abcdxyzyxabcdd'",
        expectedOutput: "xyzyx",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("abcdxyzyxabcdd")',
      },
      {
        parameter: "'abcbadefgfedcba'",
        expectedOutput: "defgfed",
        userOutput: null,
        javaFuncCall: 'longestPalindrome("abcbadefgfedcba")',
      },
    ],

    /*  
    js:
      var longestPalindrome = function(s) {
    if (!s) return "";
    
    let start = 0, maxLen = 1;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currLen = right - left + 1;
            if (currLen > maxLen) {
                maxLen = currLen;
                start = left;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // odd length palindromes
        expandAroundCenter(i, i + 1); // even length palindromes
    }
    
    return s.substring(start, start + maxLen);
};



    python:
        def longestPalindrome(s: str) -> str:
    if not s:
        return ""
    
    n = len(s)
    start, max_len = 0, 1
    
    def expand_around_center(left, right):
        nonlocal start, max_len
        while left >= 0 and right < n and s[left] == s[right]:
            if right - left + 1 > max_len:
                start = left
                max_len = right - left + 1
            left -= 1
            right += 1
    
    for i in range(n):
        expand_around_center(i, i)      # odd length palindromes
        expand_around_center(i, i + 1)  # even length palindromes
    
    return s[start:start + max_len]


    java:
      if (s == null || s.length() < 1) return "";
        
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);     // odd length palindromes
            int len2 = expandAroundCenter(s, i, i + 1); // even length palindromes
            int maxLen = Math.max(len1, len2);
            if (maxLen > end - start) {
                start = i - (maxLen - 1) / 2;
                end = i + maxLen / 2;
            }
        }
        
        // Handle case where no palindrome longer than 1 character is found
        if (end - start == 0) {
            return String.valueOf(s.charAt(0));
        }
        
        return s.substring(start, end + 1);
    }
    
    private static int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    */
  },

  {
    number: 30,
    heading: "Decode Ways",
    difficulty: "Hard",
    topic: ["DynamicProgramming", "String"],
    ds: "[ String, Dynamic Programming ]",
    attempts: 0,
    isSolved: false,
    language: "javascript",
    image: null,
    allOutput: [],
    allResult: [],
    description:
      "A message containing letters from A-Z can be encoded into numbers using the following mapping: 'A' -> '1', 'B' -> '2', ..., 'Z' -> '26'. Given a string s containing only digits, determine the total number of ways to decode it.",
    constraints: [
      "1 <= s.length <= 100",
      "s contains only digits and may contain leading zeros.",
    ],
    functionName: "numDecodings",
    returnType: "number",
    javascriptDefaultCode:
      "/**\n * @param {string} s\n * @return {number}\n */\nvar numDecodings = function(s) {\n    // Write your code here\n};",
    pythonDefaultCode:
      "def numDecodings(s: str) -> int:\n    # Write your code here",
    javaDefaultCode:
      "public static int numDecodings(String s) {\n    // Write your code here\n    return 0;\n}",
    isSubmitted: false,
    testCaseOutputs: [],
    testCaseResults: [],
    example: [
      {
        number: 1,
        input: "s = '12'",
        output: "2",
        parameter: "'12'",
        explanation: "It could be decoded as 'AB' (1 2) or 'L' (12).",
        image: null,
        javaFuncCall: 'numDecodings("12")',
      },
      {
        number: 2,
        input: "s = '226'",
        output: "3",
        parameter: "'226'",
        explanation:
          "It could be decoded as 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6).",
        image: null,
        javaFuncCall: 'numDecodings("226")',
      },
      {
        number: 3,
        input: "s = '0'",
        output: "0",
        parameter: "'0'",
        explanation: "There is no valid encoding starting with '0'.",
        image: null,
        javaFuncCall: 'numDecodings("0")',
      },
    ],
    cases: [
      {
        parameter: "'12'",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'numDecodings("12")',
      },
      {
        parameter: "'226'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'numDecodings("226")',
      },
      {
        parameter: "'0'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'numDecodings("0")',
      },
      {
        parameter: "'11106'",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'numDecodings("11106")',
      },
      {
        parameter: "'27'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'numDecodings("27")',
      },
      {
        parameter: "'10'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'numDecodings("10")',
      },
      {
        parameter: "'01'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'numDecodings("01")',
      },
      {
        parameter: "'230'",
        expectedOutput: "0",
        userOutput: null,
        javaFuncCall: 'numDecodings("230")',
      },
      {
        parameter: "'123456789'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'numDecodings("123456789")',
      },
      {
        parameter: "'1123'",
        expectedOutput: "5",
        userOutput: null,
        javaFuncCall: 'numDecodings("1123")',
      },
      {
        parameter: "'27'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'numDecodings("27")',
      },
      {
        parameter: "'2611055971756562'",
        expectedOutput: "4",
        userOutput: null,
        javaFuncCall: 'numDecodings("2611055971756562")',
      },
      {
        parameter: "'206'",
        expectedOutput: "1",
        userOutput: null,
        javaFuncCall: 'numDecodings("206")',
      },
      {
        parameter: "'611'",
        expectedOutput: "2",
        userOutput: null,
        javaFuncCall: 'numDecodings("611")',
      },
      {
        parameter: "'226'",
        expectedOutput: "3",
        userOutput: null,
        javaFuncCall: 'numDecodings("226")',
      },
    ],

    /*  
    js:
      var numDecodings = function(s) {
    if (s === null || s.length === 0) {
        return 0;
    }
    
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s.charAt(0) === '0' ? 0 : 1;
    
    for (let i = 2; i <= n; i++) {
        let oneDigit = parseInt(s.substring(i - 1, i));
        let twoDigits = parseInt(s.substring(i - 2, i));
        
        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }
        
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
};


    python:
      def numDecodings(s: str) -> int:
    if not s or s[0] == '0':
        return 0
    
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1 if s[0] != '0' else 0
    
    for i in range(2, n + 1):
        one_digit = int(s[i - 1:i])
        two_digits = int(s[i - 2:i])
        
        if 1 <= one_digit <= 9:
            dp[i] += dp[i - 1]
        
        if 10 <= two_digits <= 26:
            dp[i] += dp[i - 2]
    
    return dp[n]


    java:
      def numDecodings(s: str) -> int:
    if not s or s[0] == '0':
        return 0
    
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1 if s[0] != '0' else 0
    
    for i in range(2, n + 1):
        one_digit = int(s[i - 1:i])
        two_digits = int(s[i - 2:i])
        
        if 1 <= one_digit <= 9:
            dp[i] += dp[i - 1]
        
        if 10 <= two_digits <= 26:
            dp[i] += dp[i - 2]
    
    return dp[n]

    */
  },
];
