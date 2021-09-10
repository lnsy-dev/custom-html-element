/*

This is an implementation of the HTML Custom Element API: https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements

" Living code explains itself, somewhat, but the real value is in having a haunted town full of horror stories."
  --𝙙𝙙𝙖𝙮

Only other programmers believe that below this comment lies several John Grisham novels worth of code.

A demo:

https://codepen.io/lindseymysse/pen/ExWZEEr

*/


class CustomElement extends HTMLElement {

  /* 
      this function runs when the component is connected to the dom. 
      the this keyword refers to the HTML component itself, and you
      can treat it as any DOM object 
   */
  connectedCallback(){
    // get the attribute called title, if it is null assign a new one
    this.title = this.getAttribute('title')
    if(this.title === null){
      this.title = 'CUSTOM ELEMENT'
    } 
    this.innerHTML = `<h1>${this.title}</h1>`
  }
  
  static get observedAttributes() {
    // an array of attribute names you want to watch for this component
    return ['title'];
  }
  /*
    what to do when an attribute has changed
    name is the attribute name that has changed
    old_value is the old name of the attribute
    new_value is the new name of the attribute

    To change update this element, access it like any other
    HTML element and use setAttribute() to make changes.
    an example:
    document.querySelector('custom-element').setAttribute('message', 'Hello World')
  */
  attributeChangedCallback(name, old_value, new_value){
    if(name  === 'title'){
      this.title = new_value
      this.innerHTML = `<h1>${this.title}</h1>`
    }
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.')
  }
  adoptedCallback() {
    console.log('Custom square element moved to new page.')
  }
}

/*
  this component can be placed in the document using the notation
  <custom-element title="element name here"></custom-element>
  to change the name of the element in the dom, change the 
  value in the quotation marks. 
*/

customElements.define('custom-element', CustomElement)
