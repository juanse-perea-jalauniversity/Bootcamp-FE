// Example 1

const host = document.querySelector("#shadow-host");

const shadowRoot = host.attachShadow({ mode: "closed" });

shadowRoot.innerHTML = `
<span id="shadow-span">This span is in the shadow DOM, page CSS can't color it</span>
`;

const host2 = document.querySelector("#shadow-host2");

const shadowRoot2 = host2.attachShadow({ mode: "closed" });

shadowRoot2.innerHTML = `
<style>
    :host {
      all: initial;
    }
</style>
<span id="shadow-span2">Shadow node 2, reset css from within</span>
`;

// * Trying to select with Javascript
// querySelectorAll doesn't work
console.log("iterating spans:")
const spans = document.querySelectorAll("span")
for (let span of spans) {
  console.log(span.innerHTML)
}
console.log("==============")
// trying to select directly with the id doesn't work neither
const shadowSpan = document.querySelector("#shadow-span")
console.log(`shadowSpan with direct query: ${shadowSpan?.outerHTML}`)
// the only way is using the shadowRoot
const shadowSpanUsingRoot = host.shadowRoot?.querySelector("#shadow-span")
console.log(`shadowSpan using shadow root: ${shadowSpanUsingRoot?.outerHTML}`)
console.log("==============")

// Example 2
// const body = document.querySelector("body")
// console.log(`body: ${body.innerHTML}`)
// const video = document.querySelector("#video")
// console.log(`video outer html: ${video.outerHTML}`)
// console.log(`video inner html: ${video.innerHTML}`)
