/*

This is an implementation of the HTML Custom Element API: https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements

" Living code explains itself, somewhat, but the real value is in having a haunted town full of horror stories."
  --𝙙𝙙𝙖𝙮

Only other programmers believe that below this comment lies several John Grisham novels worth of code.

A demo:

https://codepen.io/lindseymysse/pen/ExWZEEr

*/



class HansElement extends HTMLElement{
  connectedCallback(){
    /* 
      this function runs when the component is connected to the dom. 
      the this keyword refers to the HTML component itself, and you
      can treat it as any DOM object 
    */
    this.innerHTML = '<h1>Hans Element</h1>'
  }
  
  static get observedAttributes() {
    // an array of attribute names you want to watch for this component
    return [''];
  }

  attributeChangedCallback(name, old_value, new_value){
    /*
      what to do when an attribute has changed
      name is the attribute name that has changed
      old_value is the old name of the attribute
      new_value is the new name of the attribute
    
      To change update this element, access it like any other
      HTML element and use setAttribute() to make changes.
      an example:
      document.querySelector('hans-element').setAttribute('message', 'Hello World')
    */
  }
}

/*
  this component can be placed in the document using the notation
  <hans-element name="element name here"></hans-element>
  to change the name of the element in the dom, change the 
  value in the quotation marks. 
*/

customElements.define('hans-element', HansElement)
