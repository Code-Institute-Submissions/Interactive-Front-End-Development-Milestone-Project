# Interactive-Front-End-Development-Milestone-Project 


## The Matching Game. 

This project is a simple matching game that consists of 6 pairs of cards to match. 

## UX 

The game is directed at any age group, as a simple memory matching game can be played by most ages.

### User Stories

As a new visitor to the website...

1. I want a basic understanding of what the game is (the title). 
2. I want to be able to see a clear indicator as to how I start the game.

As a returning visitor to the website...

1. I want to be able to play the game and have the same, bug-free experience each time.

### The viewer would be visiting my site if they are: 

Looking to play a simple, memory matching game.

### The website can help to achieve that because: 

It is a simple memory matching game. It should be clear and concise, being easy to understand and play to help the viewer breeze through the page without any problems.

### Wireframes / Mock-ups Used: 

Here's the link to my first planning mock-up: [Mock-Up 1] 

Here's the link to my second planning mock-up: [Mock-Up 2]

## Features 

### Universal Website Features 

#### Header: 

Within my header is simply the title - "Memory Matching Game". There are no other pages as it is for the one game. Simple and clean with a nod to Code Insitute in the title and colour scheme.

#### Footer:  

The footer contains links to Twitter, Facebook and Instagram.

### The Game Page

#### How to Play:

The first box on the game page houses a brief explaination of how to play the game.

#### Timer & Click-Counter:

There is a timer and click counter. The timer starts when the user clicks "start". The click counter only increments when a card is clicked. 

#### Game Field: 
 
Contains the cards that are then matched up by the player.

## Existing Features 

- The "Start" button changes colour when hovering over it. This transition goes both ways, meaning it reverses the effect when the mouse is moved off of it. The mouse also becomes a pointer, to indicate that the button can be clicked.
- A timer that begins counting up upon clicking the "start" button, coupled with a click-counter that tracks each time the user clicks a card.
- The 12 cards can all be clicked, causing a flip animation. 
- When two cards don't match, they are flipped back over. 
- When two cards match, they stay face-up to indicate that the pair have been matched.
- The socials change colour when hovered over, coupling as links to Twitter, Facebook and Instagram.

## Features Left to Implement



## Technologies Used 

HTML / CSS and Javascript.

No languages were used in the coding of this project. It is pure HTML / CSS and Javascript. No frameworks or libraries were used.  

This website uses Google Fonts to style the website fonts. https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital,wght@1,300&display=swap.

This website uses Font Awesome to input 3 social website icons. https://kit.fontawesome.com/1bbedf96a8.js 

## Testing 

The website is simple and clean, meaning the HTML / CSS for it was fairly simple, too. I used flexbox once again to help position divs so that if a user was on mobile, it would squeeze it together and not cause any sort of misshaping. I ran into the most problems when it came to the Javascript. This project was very difficult for me, as over the two weeks I spent working on it, I spent most of it trying a bunch of different methods for my Javascript. I didn't realise there were so many different ways to do the same thing. The hardest part within my Javascript was definetely my check function. It required I make two lists for the two different cards clicked, a timeout for if the cards didn't match to prevent the user from spamming the cards and figuring out how to use the images to detect a match. 

Overall, it was very difficult for me as Javascript has been alluding me constantly. I watched some Youtube videos to help understand the Javascript and to really understand how to make those logical paths for my code.

### User Experience Testing: 

#### Header: 

1. The Title
  i. Check that the title doesn't overlap the header.
 ii. Check that the title resizes as the width changes for mobile or table use.
 
#### Body (Prior to Game Being Started):

1. Start Button
  i. Upon hovering, the button should change colour.
 ii. If the mouse is moved away from the button, it should revert to it's original colour slowly.
iii. Upon click, hide the button and the game field should appear.
 iv. Upon click, the timer should appear with the game field and begin.
  v. Upon click, the click counter should appear with the game field.
  
#### Body (When The Game Has Started):
 
1. How to Play
    1. Check that when resizing the page, the text does not overlap the parent container.
    2. Check that the font size does not change to maintain readability.

2. The Timer & Click Counter
  1. Confirm that when resizing, the text does not breach their respective containers.
  2. Make sure that the timer has begun, starting from 0.
  3. Confirm that the click counter only increments when a card is clicked.
 
1. The Game Field
  i. Check that when resizing the page, the cards do not breach the game field.
 ii. Check that the cards maintain their margin despite a change in device.
iii. Confirm that the cards shape changes as the screen is resized or if on another device.
 iv. Confirm that the cards can still be clicked when on another device without any difficulty due to resizing.
  v. Make sure the images resize and do not breach the card containers. 

#### Footer:


1. Socials Bar
  i. Check that the socials bar doesn't overlap the footer.
 ii. Check that the width and height resize correctly when changing the size of the window or to a different device.

2. The Socials Icons & Words
  i. Check that when hovering on "Instagram", "Facebook" or "Twitter" that the colour changes.
 ii. Check that when removing the mouse, this colour change is reverted.
iii. Confirm that when passing the width threshold (by changing device etc), remove the words and leave just the icons.
 iv. Confirm that when the words have been hidden, the icons have increased in size.
 
#### Logical Testing for The Newsletter: 



#### Logical Testing for The Donation Form: 



#### Further Testing 



## Deployment 

This project has been deployed via [GitHub Pages](https://github.com/KaganHuseyin/User-Centric-Front-End-Development-Milestone-Proeject).

1. Log into GitHub.
2. Select KaganHuseyin/User-Centric-Front-End-Development-Milestone-Project.
3. Select settings.
4. Scroll down the page and locate GitHub Pages.
5. Change the source to the master branch.
6. Once the page refreshes, the website has been deployed.
7. From here, go back to the repository and select "Environment."
8. Select view deployment and the website will open up in a new tab.

## Credits 



## Media Used: 

Below are the links to the websites that I obtained all images from.  


https://www.nytimes.com/2020/01/13/science/air-pollution-fires-genes.html?smid=tw-nytimesworld&smtyp=cur 

## Acknowledgements 


