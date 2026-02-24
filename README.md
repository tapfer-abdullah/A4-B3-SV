# A4-B3-SV

## Answers to Questions

1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?
   - getElementById grabs one element by its ID. getElementsByClassName returns a live list of elements with a class. querySelector gets the first match for a CSS selector, while querySelectorAll gets all matches as a static list.

2. How do you create and insert a new element into the DOM?
   - Use document.createElement to make an element, then add it to the page with appendChild, prepend, or insertBefore.

3. What is Event Bubbling? How does it work?
   - When an event happens, it starts at the target element and moves up through its parents, triggering handlers along the way.

4. What is Event Delegation in JavaScript? Why is it useful?
   - Event delegation means putting a single event listener on a parent, then checking which child triggered it. It saves memory and works for dynamic elements.

5. Difference between preventDefault() and stopPropagation()?
   - preventDefault stops the default browser action. stopPropagation stops the event from going up to parent elements.
