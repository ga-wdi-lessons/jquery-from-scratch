# jQuery from Scratch

## Learning Objectives

- use an IIFE to avoid polluting the global namespace
- identify common DOM methods used in jQuery methods
- Practice DOM manipulation w/ vanilla js

## Hello, jQuery

```
var $ = function(selector){
  return document.querySelector(selector)
}
```

## IIFE

Immediately invoked function expressions allow us to keep many variables
and function names private to a particular file.

```js
var $ = (function(){
  var jakeWeary = function(selector){
    return document.querySelector(selector)
  }
  return jakeWeary
})()
```

## Events

```js
var $ = (function(){
  var jakeWeary = function(selector){
    var el = document.querySelector(selector)
    el.on = function(eventName, callback){
      el.addEventListener(eventName, callback)
    }
    return el
  }
  return jakeWeary
})()
```

### You do: Multiple elements

Currently, the on method only handles one element.

Replace `document.querySelector` with `document.querySelectorAll`

Inside the `on` method, loop through each of the elements to add
the event listener

## CSS

```js
els.css = function(props){
  for(var i = 0; i < els.length; i ++){
    for(var key in props){
      els[i].style[key] = props[key]
    }
  }
}
```

### You do

Update the `.css` method to allow the alternate css syntax:

```js
$(".box").css('background','red')
```

1. Add a second argument to method
2. check the `typeof` the first argument
3. if It's a `string`, update the value
4. otherwise, use the existing code

## Combining the above two doesn't work... yet

```js
$(".box").on("click", function(){
  $(this).css({'background':'red'})
})
```

- `this` is already a DOM element, not a selector

```js
var jakeWeary = function(selector){
  var els = selector.nodeName ? [selector] : document.querySelectorAll(selector)
  ...
```

## HTML

```js
els.html = function(){
  for(var i = 0; i < els.length; i++){
    return els[i].innerHTML 
  }
}
```

### You do: Allow updating the HTML

1. Add a new argument to HTML method
1. Update the `innerHTML` with the argument's value


### You do: Get / Set value `.val()`
