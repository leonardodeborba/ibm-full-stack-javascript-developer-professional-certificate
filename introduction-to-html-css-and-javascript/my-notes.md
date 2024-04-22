# Module 1: HTML Overview

## XHTML vs HTML

| XHTML                                          | HTML                                                     |
|------------------------------------------------|----------------------------------------------------------|
| Lowercase tags                                 | Case used does not matter                                |
| Code well-formed, correct syntax               | Unmatched quotation, non-terminated elements are allowed |
| XML parser stops where there's syntax problems | Syntax is less rigorous than XHTML syntax                |


## Scripting


- As scripting can be disabled, it's recommended to use scripting but not to rely on it
- HTML5 sandboxes enable you to manage <code>iframe</code> mash-ups
- HTML documents loaded into a browser page become document objects that can be accessed through scripts

### Sandboxing
- A Sandboxing flag set is a set of zero or more of the following flags, which are used to restrict the abilities that potentially untrusted resources have
- Use the **sandbox** attribute on any tag that contains an embedded object like <code>iframe</code>

## HTML5 Browser Support

- Caniuse.com provides support tables for HTML5 and CSS3

# Module 2: CSS Overview & HTML5 Elements

 ## Structural Elements

- article:
  block of code that can logically stand alone; user comments, blog entries, etc
- section:
  logical separation in a document like chapters of a book; accompanied with a heading
- header:
  header information; section table of contents; wrap nav links or logos
- footer:
  defines the text/area at the bottom of the page; copyright info; contact links, etc

## Elements for grouping contents

- aside:
  additional information related to the main; extracts and displays further content or navigates to additional resources without detracting from the main discussion; cautions, notes, wrap nav links; often a siderbar
- figure:
  self-contained element referred to from the main content;
  embeds graphics, photographs, code segments; can be moved to an appendix without affecting the flow of the document
- figcaption:
  defines the caption for the contents of the figure element

## CSS: Styling HTML

### CSS References Priority (highest to lowest):

1. Inline
2. Internal
3. External

## CSS Frameworks

- Plain/Vanilla CSS
  - Writes style for all components
  - Provides complete freedom when styling
  - Requires time and effort

- Utility-first framework
  - Provides utility classes scoped to a single css property
  - Simplifies references to CSS properties
  - Provides some freedom when styling components - limited to provided classes
  - Example: text-align: center --> text-center
  - Makes HTML verbose by mixing styles with content

- Component framework
  - Provides pre-styled components and templates
  - Little knowledge of CSS
  - Assist in keeping consistent styles
  - Limits freedom when styling; limits you to only the components existent and available by the framework

# Module 3: JavaScript Programming for Web Applications

## Nature of JavaScript

- Derived from the ECMAScript standard
- Core feature of Asynchronous JavaScript and XML (Ajax)
  - One of the ways that server programming and browser script work together

## JavaScript Primitives

Primitives are values and have no properties or methods:
- number: integer, floating point
- string
- boolean
- null
- undefined: no data type assigned or variable does not exist

## Wrapper Objects

- Allow objects of primitive data types to be created

- Some of the primitive data types have corresponding wrapper ojects

- Allows an object of the related data type to be created

- Stores a primitive value and offers methods with which to process it

- Wrapper Objects have the same name as the primitive type but begin with a capital letter

## Array Objects

### Array literal
Initializes the elements in the array;
myArray = [0, 1, 2, 3];
### Array constructor
Defines elements as parameters;
myArray = new array(0, 1, 2, 3)

## Error Objects
- Created when an exception is thrown
- Made of: properties, message and name
- Can create custom error by invoking constructors (<code>new</code>)

## Custom Objects

Using the keyword <code>this</code> can differentiate whether the reference is to the global or local instance of a variable

## Prototype

- Defines properties and methods for all instances of the object
- Exists for all JavaScript objects that can be constructed with the <code>new</code> keyword
- Can add new properties/methods to objects through the prototype property: <code>Car.prototype.color = "Red";</code> 

## Self-executing or auto-invocation functions

- Start running immediately after they have been declared
- Functions and variables are isolated from the rest of the script
- Can be an anonymous (unnamed) function
- Example:
<pre>
  <code>
  (function () {
    statements
  })();
  </code>
</pre>

## JavaScript APIs

- API = Application Programming Interface
- API is a way for two applications to communicate with each other; it delivers your request to another device/local and returns the response
- JavaScript APIs use JavaScript scripting to dinamically access and modify content

## REST Architecture

Most JavaScript APIs follow the Representational State Transfer (REST) architectural style. These are referred to as RESTful APIs, and follow the CRUD (Create, Read, Update and Delete) paradigm:
- Create = POST
- Read = GET
- Update = PUT
- Delete = DELETE

## Document Object Model (DOM) API

- One of the most basic JavaScript APIs
- Connects web pages to scripts by representing the structure of a document (e.g. an HTML web page) in memory, making it accessible for modification as required

## XMLHttpRequest (XHR)

- Popular JavaScript API
- Allows you to retrieve data without refreshing the entire page
- Important when updating only a part of the page without disrupting what a user is currently doing on the page
- Used heavily in Asynchronous JavaScript and XML (AJAX) programming

## Scripts in HTML

### Client-side script

- Accompanies an HTML document or may be embedded directly in it
- Runs when the document loads, a link is activated or a button is clicked

### When scripting is not available

- <code>noscript</code> tag is used to handle situations where scripts have been disabled or the browser doesnt support them
- The unsupported browser runs the section of code within the <code>noscript</code> tag and it can be used show another way for a user to do something

### Scripts and Events

- Scripts can be bound to events so that they can run automatically everytime such event happens
- **Event binding:** calling a function when an event occurs:
<pre>
  <code>onload = script</code>
  <code>onclick = script</code>
</pre>


## Client-Side JavaScript: with DOM

Each DOM level provides a detailed set of features
 
Our focus: DOM Level 1 Core and DOM Level 1 HTML APIs to access HTML elements

## Basic DOM model for browsers

**(Objects)**:

<pre>
Window - Controls the environment that contains the document
|-- History - Details of recent pages in the browser; allows you to simulate clicking the back or forward buttons
|-- Location - Info about the URL of a page
|-- Navigator - Object representation of the client internet browser or user agent; no standards, property values not consistent across browsers
|-- Screen - Info about user screen; useful for determining the screen size of the browser
|-- Document - HTML documents loaded into a window become Document Objects
</pre>

## HTML Document Object

- Tree structure
- Two types of nodes: element node and text node
- Element node: The HTML elements
- Text node: The content/actual text between the opening and closing tags


## DOM HTML-related node types

| NODE TYPE      | INTEGETER VALUE | NODE NAME        | NODE VALUE       | DESCRIPTION
|----------------|-----------------|------------------|------------------|-------------------------------|
| Element        | 1               | Tag name         | null             | Any HTML tag                  |
| Attribute      | 2               | Attribute name   | Attribute value  | A name-value pair             |
| Text           | 3               | #text            | Text content     | Text contained in the element |
| Comment        | 8               | #comment         | Text comment     | HTML comment                  |
| Document       | 9               | #document        | null             | Document object               |
| Document Type  | 10              | DOCTYPE          | null             | DTD Specification             |
| Fragment       | 11              | #documentfragment| null             | Nodes outside of the document |


# Glossary

**Ajax** - Programming concept; represents a series of techniques that provide richer, interactive web applications through HTML, JavaScript, CSS, and modifying the web page through the DOM

**Anonymous Functions** - Function that has no name; often  used as parameter of another function; common way to execute a function immediately after its declaration

**IIFE** - Immediately Invoked Function Expression; runs immediately after it is defined; self-invoking function

**Self-Executing Functions** - Often used to initialize data or declare DOM elements; can be anonymous

**Array** - Data structure to storage and retrieve data by indexed keys; can be literal or created with a constructor

**Classes** - Blueprint or template for building objects with similar characteristics (properties) and behaviours (methods); encapsulates data (properties) and functions (methods) on that data

**Extend** - To create a class that is a child of another class

**Prototype** - Let you easily define and add properties to an object or class; exists for all objects that can be defined with the <code>new</code> keyword (constructor)

<code>this</code> - Refers to the current instance of the object; the value of <code>this</code> can vary depending on how the object is called

**Client-Side Script** - Script that accompanies an HTML doc or embedded in HTML; use <code>noscript</code> for browsers that dont support it

**DOM (Document Object Model)** - Programming Interface (API) between HTML and JavaScript

**Element Nodes** - All HTML elements

**Element Object** - Base class for all elements in the DOM

**Text Nodes** - Nodes that contain actual text that go between an opening and closing HTML tag

**Event binding** - Telling the browser that a function should be called when some event occurs

**Event handler** - The function that is binded to the event




