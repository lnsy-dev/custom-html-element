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
  }
}

// this component can be placed in the document using the notation
// <hans-element name="element name here"></hans-element>
// to change the name of the element in the dom, change the 
// value in the quotation marks. 

customElements.define('hans-element', HansElement)
