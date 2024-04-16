# Module 1: HTML Overview

## XHTML vs HTML

| XHTML                                          | HTML                                                     |
|------------------------------------------------|----------------------------------------------------------|
| Lowercase tags                                 | Case used does not matter                                |
| Code well-formed, correct syntax               | Unmatched quotation, non-terminated elements are allowed |
| XML parser stops where there's syntax problems | Syntax is less rigorous than XHTML syntax                |


## Scripting


- As scripting can be disabled, it's recommended to use scripting but not to rely on it
- HTML5 sandboxes enable you to manage iframe mash-ups
- HTML documents loaded into a browser page become document objects that can be accessed through scripts

### Sandboxing
- A Sandboxing flag set is a set of zero or more of the following flags, which are used to restrict the abilities that potentially untrusted resources have.
- Use the **sandbox** attribute on any tag that contains an embedded object like iframe.

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


