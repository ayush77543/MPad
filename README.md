# MPad
An interface that imitates keypad that of Old Phones with number and keys.

How it works

1. This app consists of 12 keys, each of which consists of lettes, numbers or (*, #) characters.
2. There is a time delay which the app is keeping record of, by default it is 2 seconds. 
3. As soon as the user click on a key the first letter(in case of keys from 1-9) or charatcer(present on last 3 keys) will be 
   printed on the input field.
4. If the user clicks same key before the time interval specified in time delay then it will iterate over all the letters 
   present on the key. 
5. If a user clicks different key before the time interval specified in time delay then it will append the 
   first letter(in case of keys from 1-9) or charatcer(present on last 3 keys) in the input field text
6. If a user clicks a key after the time interval specified in time delay then it will append the 
   first letter(in case of keys from 1-9) or charatcer(present on last 3 keys) in the input field text
7. On clicking of "Reset Input",input in the text field will be cleared.

How to view this app.

Online
  1. Open browser
  2. Navigate to the link - https://ayush77543.github.io/MPad/

Offline
  1. Clone this repository or download the ZIP file. Extract it in case of ZIP file
  2. Open index.html using any browser


Naming Convention for variables.

I have used the following naming convention in the development of this app.

1. For each integer variable added a prefix "i".
2. For each string variable added a prefix "s".
3. For each array object added a prefix "arr".
4. For each boolean variable added a prefix "b".
5. For each object variable added a prefix "o".
