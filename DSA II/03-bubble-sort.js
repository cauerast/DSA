/*
    Bubble sort - sorting by comparison 

  Given the following unsorted list: [ 5, 2, 4, 1 ]
  
  Step 1: Compare the first two numbers (5 and 2).
  [ 5, 2, 4, 1 ] -> Is 5 greater than 2? Yes! So they swap places.
    ^  ^
  [ 2, 5, 4, 1 ] -> It looks like this now.
  
  Step 2: Compare the next two numbers (5 and 4).
  [ 2, 5, 4, 1 ] -> Is 5 greater than 4? Yes! They swap places.
     ^  ^
  [ 2, 4, 5, 1 ] -> It looks like this now.
  
  Step 3: Compare the last two numbers (5 and 1).
  [ 2, 4, 5, 1 ] -> Is 5 greater than 1? Yes! They swap places.
        ^  ^
  [ 2, 4, 1, 5 ] -> The largest number (5) has "bubbled up" to the end!
  
  The cycle repeats for the remaining numbers until everything is sorted:
  [ 2, 4, 1, 5 ] -> Compare (2 and 4), then (4 and 1) swap, etc.
  Final sorted result: [ 1, 2, 4, 5 ]
*/
