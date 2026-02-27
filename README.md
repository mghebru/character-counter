**Character Counter**

The application will allow users to input text and see real-time statistics about their input, including character count, word count, and reading time. 
This lab focuses on state management, event handling, and component interaction using React hooks.








**Reflection Questions**

**How did you handle state updates when the text changed?**

I managed the text using useState in the CharacterCounter component. When the user typed in the textarea, the onTextChange
callback updated the parent’s state. This kept the data flow simple and organized.


**What considerations did you make when calculating reading time?**

I based reading time on an average speed of 200 words per minute. I used the word count instead of character 
count for better accuracy. I also handled empty input to avoid errors and formatted the result into minutes and seconds so it’s easier to read.


**How did you ensure the UI remained responsive during rapid text input?**

I kept the calculations simple and lightweight, like counting characters and splitting text by spaces. 
I also made sure calculations only run when the text changes.


**What challenges did you face when implementing the statistics calculations?**

The main challenge was counting words correctly. Extra spaces and line breaks can cause incorrect counts. I solved this by 
trimming the text and splitting it using a regular expression, then removing empty values.

