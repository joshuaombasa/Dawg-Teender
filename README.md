# Dawg-Teender
This code is a JavaScript program that displays a series of dog images and their descriptions, and allows the user to interact with them by clicking on the "cross" or "like" buttons.
The code imports a "dogs" array from a "data.js" file, which contains information about each dog, including their name, age, avatar image, and bio.

The code sets up event listeners for when the user clicks on the "cross" or "like" buttons. If the user clicks on the "cross" button, the program displays a "nope" badge and sets the "hasBeenSwiped" property of the current dog object in the "dogs" array to true. If the user clicks on the "like" button, the program displays a "like" badge and sets the "hasBeenLiked" property of the current dog object in the "dogs" array to true.

After the user clicks on either button, the program waits for 1 second before displaying the next dog image and description in the array. The program uses the "renderInitialPhoto" and "renderDogDescription" functions to display the current dog image and description on the page.

There is an event listener attached to the document object that waits for clicks. If the user clicks the "cross" button, a badge with the text "nope" is displayed and the hasBeenSwiped property of the current dog object is set to true. If the user clicks the "like" button, a badge with the text "like" is displayed and the hasBeenLiked property of the current dog object is set to true.
