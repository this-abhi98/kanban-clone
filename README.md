# Getting Started with Create React App

This project was bootstrapped with Create React App.

## steps to run the project

In the project directory, you need to run:

 1.  run `npm install`

 2. run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000]



## features of the app and logic used 

1. All the cards that are in the TODO bucket needs to be in grey color. All the
cards that are in the DOING bucket needs to be in blue color. All the cards
that are in the DONE bucket needs to be in green color.

solution explanation :- we pass listTitle (for ex :- todo,doing,done) into the card component from card list component. and then using switch to set corosponding card color according to recieved listTitle. you card see more of it inside card component.


2. User can move any cards from one bucket to another.

solution explanation :- for this purpose we have used `react-beautiful-dnd` package it helped in creating drag and drop coomponent.package have been used according to docs. `onDragEnd` is written on app.js file 

3. Every cards needs to have a unique number associated to it. As a user,
you must be able to distinguish each task from other.

solution :- here i am tracking the total no. of cards when new card added card no. will be appended.we can also use `uuid()` and other packages but this gives random id thats why i did not use this approach in this particular case.


4. As a user, you can add a new card in any bucket.

solution :- simple logic used here simply take the input of new card and then add it to the existing array of particular list and update the state.for more detail you can check `addMoreCard` function inside app component.


5. As a user, you can also sort the task in the Bucket.

solution :- for sorting i have `arg.sort()` method. we pass array of cards in particular list and type of sort(currently we have only two types of sorting i.e `cardTitle ascending` and `cardTitle descending` it can be increased in future). and it returns the sorted list and then list is updated accordingly.


Althouth the app and also explanation could have been much better then this but due to time constraints i am leaving it here thanks for reading. I hope i will be able to explain in more detail in the interview(if it happens).Thanks

