# Research

To fulfill this task, I did a combination of research documentation and prompting LLMs (Claude)

First prompt:

> _"How to make an empty div fill all the available space from the parent, using flexbox, without using width and height"_

 Claude answered that using flex-grow is a good way to do it

Also I researched the flexbox doc: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Another prompt I used was:

> _"If I don't have the option to use width and height to adjust the size of the elements inside the page, and I want to use flexbox, what options do I have?"_

To this, Claude basically answered this options:

* flex-basis: used to set an initial size using the absolute value or the relative (percentage).
* flex-grow: Defines how much of the remaining space each item is going to fill.
* flex-shrink: Determines how much the element shrinks if there is not enough space.
* aspect-ratio: Determines the size of an item using proportions.