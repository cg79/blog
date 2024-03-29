Michael is interested in potentially hazardous asteroids. First, he wanted to know how many potentially hazardous asteroids are on their closest approach distance to Earth at any given time (for example, this week). Next, he wanted to know which of these potentially hazardous asteroids had their closest approach distance to Earth the most frequently in the period from 1900 to 1999. But Michael doesn't know how to calculate this, so he's asked for your help.

You have two dates, startDate and endDate, that represent the boundaries of the time interval in the format YYYY-MM-DD. You should find all potentially hazardous asteroids that are on their closest approach to Earth on any day during the period [startDate, endDate]. Next, from these found asteroids you should pick the one that appears the most frequently in the period from 1900 to 1999 and return the name of this asteroid. If there are several such asteroids, choose the one with lexicographically smaller name. If there are no potentially hazardous asteroids close to Earth in the period [startDate, endDate], return "-1".

Useful APIs

For this task, you can use the NASA API or any other public API that provides the necessary functionality.

Note that you are not allowed to access resources created specifically for solving this task (like your own service).

Example

For startDate = "2017-12-30" and endDate = "2018-01-06", the output should be
hazardousAsteroids(startDate, endDate) = "152671 (1998 HL3)".

On the week from 30th December 2017 to 6th January 2018, there are 10 potentially hazardous asteroids that have their closest approach to Earth:

(2017 WG2)
440212 (2004 OB)
152671 (1998 HL3)
(2017 QL33)
(2001 LD)
(2014 KT76)
(2017 YR1)
138175 (2000 EE104)
(2018 BP)
(2018 BM3)
If we count how many times each of them have their closest approach to Earth from 1900 to 1999, we will get the following:

(2017 WG2): 35 times
440212 (2004 OB): 11 times
152671 (1998 HL3): 52 times
(2017 QL33): 7 times
(2001 LD): 19 times
(2014 KT76): 13 times
(2017 YR1): 5 times
138175 (2000 EE104): 49 times
(2018 BP): 13 times
(2018 BM3): 7 times
As we can see, asteroid 152671 (1998 HL3) appears the most frequently, so the output is the name of this asteroid: "152671 (1998 HL3)".

Input/Output

[execution time limit] 32 seconds (js)

[input] string startDate

The start date (inclusive) of the time period in which you should search for potentially hazardous asteroids. It's guaranteed that the time interval [startDate, endDate] is no more than one week.

Guaranteed constraints:
startDate ≤ endDate.

[input] string endDate

The start date (inclusive) of the time period in which you should search for potentially hazardous asteroids. It's guaranteed that the time interval [startDate, endDate] is no more than one week.

Guaranteed constraints:
startDate ≤ endDate.

[output] string

Return the name of the potentially hazardous asteroid that has its closest approach to Earth in the period [startDate, endDate] and that, among all the potentially hazardous asteroids close to Earth in that same time period, has its closest approach to Earth the maximum number of times in the period from 1900 to 1999 .

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
white_check_mark
eyes
wave





