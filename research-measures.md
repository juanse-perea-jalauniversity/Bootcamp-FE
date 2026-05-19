# Differences between dvh, vh, fr and rem

First, to understand this concepts, we need to understand the concept of **containing block**:

> _The containing block is the content area of an element's nearest block-level ancestor_

Now, with this said, let's define the different measures:

* **vh**: Stands for "viewport height", and represent 1% of the total viewport's initial containing block. For example, if used on a body tag, whose only parent is the html tag, 100vh means 100% of the visible space for the website.
* **dvh**: Stands for "dynamic viewport height" and represent almost the same as vh, but the difference is that it will dynamically check for the viewport height, not only the initial. For example, on mobile when the user scroll the address bar disappear, which changes the viewport height.
* **fr**: Stands for "flexible unit" and represents a fraction of the leftover (or remaining) space in a grid container. 
* **rem**: Stands for "Root EM" and represent the font size of the root element (most likely html). Its default value use to be 16px.

Sources:

* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length
* https://www.w3.org/TR/css3-grid-layout/#fr-unit
* Google AI mode to understand in other words their definition. Prompts used:
	* "css dvh"
	*  "what does dvh/vh/fr/rem stands for?"