"use strict"

function addEvent(evnt, elem, func) {
  if (elem.addEventListener)  // W3C DOM
    elem.addEventListener(evnt,func,false);
  else if (elem.attachEvent) { // IE DOM
    elem.attachEvent("on"+evnt, func);
  }
  else { // No much to do
    elem[evnt] = func;
  }
}

function handleDrop(callback, event) {
  event.stopPropagation()
  event.preventDefault()
  callback(Array.prototype.slice.call(event.dataTransfer.files))
}

function killEvent(e) {
  e.stopPropagation()
  e.preventDefault()
  return false
}

function addDragDropListener(element, callback) {
  addEvent("dragenter", element, killEvent, false)
  addEvent("dragover", element, killEvent, false)
  addEvent("drop", element, handleDrop.bind(undefined, callback), false)
}

module.exports = addDragDropListener