You work in a library and your task is to find the book with the largest number of pages.
You are given a long list of book titles printed on paper, with the number of pages next to it, on a single column, like this:
- Lord of the Flies, 226
- The Fire Next Time, 128
- The Left Hand of Darkness, 286
...
There are 10 pages like this, with 100 books on each page, for a total of 1000 books.
The only tools you have are a pen and some extra paper.
Write the step-by-step instructions to solve this task going in as much detail as possible.
Use regular language and don’t think about JavaScript. Imagine you have to give these instructions to someone else

//

1.sort out the 10 pages one after the other according to the numbers
2. see to that each page accomodates 100 book titles
3. take 1st page and to write the details
4. take 1st book and check the last page number and compare the largest page number
5. write on the paper, the title of the book and the last page number seen
6. repeat step 3 and 4 till you reach 100 books
7. take next page and repeat step 4,5,6
8. once you reached 100 books, repeat step 7
9. repeat till the 10th page and once you reached 100 books, stop writing
