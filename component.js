/*
" Living code explains itself, somewhat, but the real value is in having a haunted town full of horror stories."

A STORY: 
I once got hired at a programming job and was told that I need to write a thousand lines of code a week. 
I don't know the reason it was a thousand but I can assure you it was capricious. 

People didn't really say hi to eachother in this place. 

There were novels worth of comments with lots of lists in this codebase. Normally I'm all about lists and long
detailed comments in code but this was done to that obnoxious, psychotic degree that only a truly toxic
workplace can generate. True idiocy built on idiocy. 

Anyway, I was fired the first week because my code contribution was in the negative thousands. 
I deleted a file of nothing but dead code that everyone left there. No I didn't break a test. No it shipped just fine. 
I just did what every programmer should always try to do: make my code as simple as possible. I consider it an 
honorable firing, a true testament to my dedication to the hacker cause. 

ANYWAY: 

Only other programmers believe that below this comment lies several John Grisham novels worth of code.

I use this instead of React, Vue or Angular. Yes, it won't scale because __x__. You're stuff won't ship because
you don't know how to actually write javascript 🤷.

*/



class HansElement extends HTMLElement{
  connectedCallback(){
    // this function runs when the component is connected to the dom. 
    // the this keyword refers to the HTML component itself, and you
    // can treat it as any DOM object
    this.innerHTML = '<h1>Hans Element</h1>'
  }
  
  static get observedAttributes() {
    // an array of attribute names you want to watch for this component
    return [''];
  }

  attributeChangedCallback(name, old_value, new_value){
    // what to do when an attribute has changed
    // name is the attribute name that has changed
    // old_value is the old name of the attribute
    // new_value is the new name of the attribute
    
    // To change update this element, access it like any other
    // HTML element and use setAttribute() to make changes.
    // an example:
    // document.querySelector('hans-element').setAttribute('message', 'Hello World')
  }
}

// this component can be placed in the document using the notation
// <hans-element name="element name here"></hans-element>
// to change the name of the element in the dom, change the 
// value in the quotation marks. 

customElements.define('hans-element', HansElement)
