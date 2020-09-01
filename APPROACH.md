## CHALLENGE APPROACH AND METHODOLOGY. 

### WORK METHODOLOGY.

1.VERSION CONTROL

To work on this challenge I have used a version control methodology.

Once I cloned the TechTest to my system and created a new repository I created a new git branch to work in it, to not compromise at any moment the code in the master branch.

I have used git commits at any step which involved any significant change on the code.

Only when the solution was fully tested and checked i made a pull request from the master branch to merge the code with the main one.

2.TEST METHODOLOGY 

I have used a TDD (Test Driven Development) approach of testing, based on a red-green system.

To do that, I have created a test suite starting for the most simple cases expecting an error message(red), then I code the solution for the case until I have passed the test(green), trying, whenever is possible, to not break the previous test. 

A git commit explaining every step has been made at any green test.

For this specific scenario I have followed these steps:

GIVEN | EXPECTED
-- | --
PARENT | CHILD
PARENT | 2 CHILDS
2 PARENTS | 1 CHILD PER PARENT 
SEVERAL PARENTS | SEVERAL CHILDS
SEVERAL PARENTS UNORDERED | SEVERAL CHILDS
SEVERAL PARENTS UNORDERED, PARENT WITHOUT CHILD| SEVERAL CHILDS
PARENTS WITHOUT CHILDREN SORTED | SEVERAL CHILDS

2.LOGICAL APPROACH.

My first approach to this challenge was to obtain ,in the end, an organised list of data to work with.

Once the data-list was refined and sorted, I have obtained the desired outcome using a Js Object to display the given data, as requested.

Once I obtained the solution I created a test with random data, not just the final one provided. That test was failing and made me doubt  my first idea. To rely just on organising the data as I was doing it was not useful. If a hyphotetical user provides real names like "Jonh/Peter" without using the "parent1child" format in it the code was not going to be able to deal with it.

My final approach has been to refine the data selecting only the parents with children. Doing that and obtaining an array of data containing sub-arrays of 2 elements ["parent", "child"],  the problem is reduced to an if - else selection within the array.
