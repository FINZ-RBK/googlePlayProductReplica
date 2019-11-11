webpackJsonp([0],{

/***/ 127:
/* no static exports found */
/* all exports used */
/*!*********************************************************************!*\
  !*** ./~/details-element-polyfill/dist/details-element-polyfill.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

eval("/*\nDetails Element Polyfill 2.4.0\nCopyright © 2019 Javan Makhmali\n */\n(function() {\n  \"use strict\";\n  var element = document.createElement(\"details\");\n  var elementIsNative = typeof HTMLDetailsElement != \"undefined\" && element instanceof HTMLDetailsElement;\n  var support = {\n    open: \"open\" in element || elementIsNative,\n    toggle: \"ontoggle\" in element\n  };\n  var styles = '\\ndetails, summary {\\n  display: block;\\n}\\ndetails:not([open]) > *:not(summary) {\\n  display: none;\\n}\\nsummary::before {\\n  content: \"►\";\\n  padding-right: 0.3rem;\\n  font-size: 0.6rem;\\n  cursor: default;\\n}\\n[open] > summary::before {\\n  content: \"▼\";\\n}\\n';\n  var _ref = [], forEach = _ref.forEach, slice = _ref.slice;\n  if (!support.open) {\n    polyfillStyles();\n    polyfillProperties();\n    polyfillToggle();\n    polyfillAccessibility();\n  }\n  if (support.open && !support.toggle) {\n    polyfillToggleEvent();\n  }\n  function polyfillStyles() {\n    document.head.insertAdjacentHTML(\"afterbegin\", \"<style>\" + styles + \"</style>\");\n  }\n  function polyfillProperties() {\n    var prototype = document.createElement(\"details\").constructor.prototype;\n    var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute;\n    var open = Object.getOwnPropertyDescriptor(prototype, \"open\");\n    Object.defineProperties(prototype, {\n      open: {\n        get: function get() {\n          if (this.tagName == \"DETAILS\") {\n            return this.hasAttribute(\"open\");\n          } else {\n            if (open && open.get) {\n              return open.get.call(this);\n            }\n          }\n        },\n        set: function set(value) {\n          if (this.tagName == \"DETAILS\") {\n            return value ? this.setAttribute(\"open\", \"\") : this.removeAttribute(\"open\");\n          } else {\n            if (open && open.set) {\n              return open.set.call(this, value);\n            }\n          }\n        }\n      },\n      setAttribute: {\n        value: function value(name, _value) {\n          var _this = this;\n          var call = function call() {\n            return setAttribute.call(_this, name, _value);\n          };\n          if (name == \"open\" && this.tagName == \"DETAILS\") {\n            var wasOpen = this.hasAttribute(\"open\");\n            var result = call();\n            if (!wasOpen) {\n              var summary = this.querySelector(\"summary\");\n              if (summary) summary.setAttribute(\"aria-expanded\", true);\n              triggerToggle(this);\n            }\n            return result;\n          }\n          return call();\n        }\n      },\n      removeAttribute: {\n        value: function value(name) {\n          var _this2 = this;\n          var call = function call() {\n            return removeAttribute.call(_this2, name);\n          };\n          if (name == \"open\" && this.tagName == \"DETAILS\") {\n            var wasOpen = this.hasAttribute(\"open\");\n            var result = call();\n            if (wasOpen) {\n              var summary = this.querySelector(\"summary\");\n              if (summary) summary.setAttribute(\"aria-expanded\", false);\n              triggerToggle(this);\n            }\n            return result;\n          }\n          return call();\n        }\n      }\n    });\n  }\n  function polyfillToggle() {\n    onTogglingTrigger(function(element) {\n      element.hasAttribute(\"open\") ? element.removeAttribute(\"open\") : element.setAttribute(\"open\", \"\");\n    });\n  }\n  function polyfillToggleEvent() {\n    if (window.MutationObserver) {\n      new MutationObserver(function(mutations) {\n        forEach.call(mutations, function(mutation) {\n          var target = mutation.target, attributeName = mutation.attributeName;\n          if (target.tagName == \"DETAILS\" && attributeName == \"open\") {\n            triggerToggle(target);\n          }\n        });\n      }).observe(document.documentElement, {\n        attributes: true,\n        subtree: true\n      });\n    } else {\n      onTogglingTrigger(function(element) {\n        var wasOpen = element.getAttribute(\"open\");\n        setTimeout(function() {\n          var isOpen = element.getAttribute(\"open\");\n          if (wasOpen != isOpen) {\n            triggerToggle(element);\n          }\n        }, 1);\n      });\n    }\n  }\n  function polyfillAccessibility() {\n    setAccessibilityAttributes(document);\n    if (window.MutationObserver) {\n      new MutationObserver(function(mutations) {\n        forEach.call(mutations, function(mutation) {\n          forEach.call(mutation.addedNodes, setAccessibilityAttributes);\n        });\n      }).observe(document.documentElement, {\n        subtree: true,\n        childList: true\n      });\n    } else {\n      document.addEventListener(\"DOMNodeInserted\", function(event) {\n        setAccessibilityAttributes(event.target);\n      });\n    }\n  }\n  function setAccessibilityAttributes(root) {\n    findElementsWithTagName(root, \"SUMMARY\").forEach(function(summary) {\n      var details = findClosestElementWithTagName(summary, \"DETAILS\");\n      summary.setAttribute(\"aria-expanded\", details.hasAttribute(\"open\"));\n      if (!summary.hasAttribute(\"tabindex\")) summary.setAttribute(\"tabindex\", \"0\");\n      if (!summary.hasAttribute(\"role\")) summary.setAttribute(\"role\", \"button\");\n    });\n  }\n  function eventIsSignificant(event) {\n    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);\n  }\n  function onTogglingTrigger(callback) {\n    addEventListener(\"click\", function(event) {\n      if (eventIsSignificant(event)) {\n        if (event.which <= 1) {\n          var element = findClosestElementWithTagName(event.target, \"SUMMARY\");\n          if (element && element.parentNode && element.parentNode.tagName == \"DETAILS\") {\n            callback(element.parentNode);\n          }\n        }\n      }\n    }, false);\n    addEventListener(\"keydown\", function(event) {\n      if (eventIsSignificant(event)) {\n        if (event.keyCode == 13 || event.keyCode == 32) {\n          var element = findClosestElementWithTagName(event.target, \"SUMMARY\");\n          if (element && element.parentNode && element.parentNode.tagName == \"DETAILS\") {\n            callback(element.parentNode);\n            event.preventDefault();\n          }\n        }\n      }\n    }, false);\n  }\n  function triggerToggle(element) {\n    var event = document.createEvent(\"Event\");\n    event.initEvent(\"toggle\", false, false);\n    element.dispatchEvent(event);\n  }\n  function findElementsWithTagName(root, tagName) {\n    return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == \"function\" ? slice.call(root.getElementsByTagName(tagName)) : []);\n  }\n  function findClosestElementWithTagName(element, tagName) {\n    if (typeof element.closest == \"function\") {\n      return element.closest(tagName);\n    } else {\n      while (element) {\n        if (element.tagName == tagName) {\n          return element;\n        } else {\n          element = element.parentNode;\n        }\n      }\n    }\n  }\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9kZXRhaWxzLWVsZW1lbnQtcG9seWZpbGwvZGlzdC9kZXRhaWxzLWVsZW1lbnQtcG9seWZpbGwuanM/ZTk2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuRGV0YWlscyBFbGVtZW50IFBvbHlmaWxsIDIuNC4wXG5Db3B5cmlnaHQgwqkgMjAxOSBKYXZhbiBNYWtobWFsaVxuICovXG4oZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkZXRhaWxzXCIpO1xuICB2YXIgZWxlbWVudElzTmF0aXZlID0gdHlwZW9mIEhUTUxEZXRhaWxzRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRGV0YWlsc0VsZW1lbnQ7XG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIG9wZW46IFwib3BlblwiIGluIGVsZW1lbnQgfHwgZWxlbWVudElzTmF0aXZlLFxuICAgIHRvZ2dsZTogXCJvbnRvZ2dsZVwiIGluIGVsZW1lbnRcbiAgfTtcbiAgdmFyIHN0eWxlcyA9ICdcXG5kZXRhaWxzLCBzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5kZXRhaWxzOm5vdChbb3Blbl0pID4gKjpub3Qoc3VtbWFyeSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuc3VtbWFyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFwi4pa6XCI7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW07XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuW29wZW5dID4gc3VtbWFyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFwi4pa8XCI7XFxufVxcbic7XG4gIHZhciBfcmVmID0gW10sIGZvckVhY2ggPSBfcmVmLmZvckVhY2gsIHNsaWNlID0gX3JlZi5zbGljZTtcbiAgaWYgKCFzdXBwb3J0Lm9wZW4pIHtcbiAgICBwb2x5ZmlsbFN0eWxlcygpO1xuICAgIHBvbHlmaWxsUHJvcGVydGllcygpO1xuICAgIHBvbHlmaWxsVG9nZ2xlKCk7XG4gICAgcG9seWZpbGxBY2Nlc3NpYmlsaXR5KCk7XG4gIH1cbiAgaWYgKHN1cHBvcnQub3BlbiAmJiAhc3VwcG9ydC50b2dnbGUpIHtcbiAgICBwb2x5ZmlsbFRvZ2dsZUV2ZW50KCk7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxTdHlsZXMoKSB7XG4gICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFwiPHN0eWxlPlwiICsgc3R5bGVzICsgXCI8L3N0eWxlPlwiKTtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbFByb3BlcnRpZXMoKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkZXRhaWxzXCIpLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB2YXIgc2V0QXR0cmlidXRlID0gcHJvdG90eXBlLnNldEF0dHJpYnV0ZSwgcmVtb3ZlQXR0cmlidXRlID0gcHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZTtcbiAgICB2YXIgb3BlbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBcIm9wZW5cIik7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocHJvdG90eXBlLCB7XG4gICAgICBvcGVuOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIGlmICh0aGlzLnRhZ05hbWUgPT0gXCJERVRBSUxTXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcIm9wZW5cIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcGVuICYmIG9wZW4uZ2V0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvcGVuLmdldC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy50YWdOYW1lID09IFwiREVUQUlMU1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyB0aGlzLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJcIikgOiB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcIm9wZW5cIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcGVuICYmIG9wZW4uc2V0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvcGVuLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRBdHRyaWJ1dGU6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKG5hbWUsIF92YWx1ZSkge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiBjYWxsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZS5jYWxsKF90aGlzLCBuYW1lLCBfdmFsdWUpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG5hbWUgPT0gXCJvcGVuXCIgJiYgdGhpcy50YWdOYW1lID09IFwiREVUQUlMU1wiKSB7XG4gICAgICAgICAgICB2YXIgd2FzT3BlbiA9IHRoaXMuaGFzQXR0cmlidXRlKFwib3BlblwiKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsKCk7XG4gICAgICAgICAgICBpZiAoIXdhc09wZW4pIHtcbiAgICAgICAgICAgICAgdmFyIHN1bW1hcnkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJzdW1tYXJ5XCIpO1xuICAgICAgICAgICAgICBpZiAoc3VtbWFyeSkgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICB0cmlnZ2VyVG9nZ2xlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNhbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZToge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobmFtZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgICAgIHZhciBjYWxsID0gZnVuY3Rpb24gY2FsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVBdHRyaWJ1dGUuY2FsbChfdGhpczIsIG5hbWUpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG5hbWUgPT0gXCJvcGVuXCIgJiYgdGhpcy50YWdOYW1lID09IFwiREVUQUlMU1wiKSB7XG4gICAgICAgICAgICB2YXIgd2FzT3BlbiA9IHRoaXMuaGFzQXR0cmlidXRlKFwib3BlblwiKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsKCk7XG4gICAgICAgICAgICBpZiAod2FzT3Blbikge1xuICAgICAgICAgICAgICB2YXIgc3VtbWFyeSA9IHRoaXMucXVlcnlTZWxlY3RvcihcInN1bW1hcnlcIik7XG4gICAgICAgICAgICAgIGlmIChzdW1tYXJ5KSBzdW1tYXJ5LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICB0cmlnZ2VyVG9nZ2xlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNhbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsVG9nZ2xlKCkge1xuICAgIG9uVG9nZ2xpbmdUcmlnZ2VyKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwib3BlblwiKSA/IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKSA6IGVsZW1lbnQuc2V0QXR0cmlidXRlKFwib3BlblwiLCBcIlwiKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbFRvZ2dsZUV2ZW50KCkge1xuICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICAgIGZvckVhY2guY2FsbChtdXRhdGlvbnMsIGZ1bmN0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IG11dGF0aW9uLnRhcmdldCwgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09IFwiREVUQUlMU1wiICYmIGF0dHJpYnV0ZU5hbWUgPT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJUb2dnbGUodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSkub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uVG9nZ2xpbmdUcmlnZ2VyKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHdhc09wZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIm9wZW5cIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGlzT3BlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwib3BlblwiKTtcbiAgICAgICAgICBpZiAod2FzT3BlbiAhPSBpc09wZW4pIHtcbiAgICAgICAgICAgIHRyaWdnZXJUb2dnbGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbEFjY2Vzc2liaWxpdHkoKSB7XG4gICAgc2V0QWNjZXNzaWJpbGl0eUF0dHJpYnV0ZXMoZG9jdW1lbnQpO1xuICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICAgIGZvckVhY2guY2FsbChtdXRhdGlvbnMsIGZ1bmN0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgICAgZm9yRWFjaC5jYWxsKG11dGF0aW9uLmFkZGVkTm9kZXMsIHNldEFjY2Vzc2liaWxpdHlBdHRyaWJ1dGVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NTm9kZUluc2VydGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHNldEFjY2Vzc2liaWxpdHlBdHRyaWJ1dGVzKGV2ZW50LnRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0QWNjZXNzaWJpbGl0eUF0dHJpYnV0ZXMocm9vdCkge1xuICAgIGZpbmRFbGVtZW50c1dpdGhUYWdOYW1lKHJvb3QsIFwiU1VNTUFSWVwiKS5mb3JFYWNoKGZ1bmN0aW9uKHN1bW1hcnkpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gZmluZENsb3Nlc3RFbGVtZW50V2l0aFRhZ05hbWUoc3VtbWFyeSwgXCJERVRBSUxTXCIpO1xuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGRldGFpbHMuaGFzQXR0cmlidXRlKFwib3BlblwiKSk7XG4gICAgICBpZiAoIXN1bW1hcnkuaGFzQXR0cmlidXRlKFwidGFiaW5kZXhcIikpIHN1bW1hcnkuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgaWYgKCFzdW1tYXJ5Lmhhc0F0dHJpYnV0ZShcInJvbGVcIikpIHN1bW1hcnkuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBldmVudElzU2lnbmlmaWNhbnQoZXZlbnQpIHtcbiAgICByZXR1cm4gIShldmVudC5kZWZhdWx0UHJldmVudGVkIHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC50YXJnZXQuaXNDb250ZW50RWRpdGFibGUpO1xuICB9XG4gIGZ1bmN0aW9uIG9uVG9nZ2xpbmdUcmlnZ2VyKGNhbGxiYWNrKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnRJc1NpZ25pZmljYW50KGV2ZW50KSkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPD0gMSkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZmluZENsb3Nlc3RFbGVtZW50V2l0aFRhZ05hbWUoZXZlbnQudGFyZ2V0LCBcIlNVTU1BUllcIik7XG4gICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS50YWdOYW1lID09IFwiREVUQUlMU1wiKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50SXNTaWduaWZpY2FudChldmVudCkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZmluZENsb3Nlc3RFbGVtZW50V2l0aFRhZ05hbWUoZXZlbnQudGFyZ2V0LCBcIlNVTU1BUllcIik7XG4gICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS50YWdOYW1lID09IFwiREVUQUlMU1wiKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gdHJpZ2dlclRvZ2dsZShlbGVtZW50KSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBldmVudC5pbml0RXZlbnQoXCJ0b2dnbGVcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRFbGVtZW50c1dpdGhUYWdOYW1lKHJvb3QsIHRhZ05hbWUpIHtcbiAgICByZXR1cm4gKHJvb3QudGFnTmFtZSA9PSB0YWdOYW1lID8gWyByb290IF0gOiBbXSkuY29uY2F0KHR5cGVvZiByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lID09IFwiZnVuY3Rpb25cIiA/IHNsaWNlLmNhbGwocm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSkgOiBbXSk7XG4gIH1cbiAgZnVuY3Rpb24gZmluZENsb3Nlc3RFbGVtZW50V2l0aFRhZ05hbWUoZWxlbWVudCwgdGFnTmFtZSkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudC5jbG9zZXN0ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCh0YWdOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PSB0YWdOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZXRhaWxzLWVsZW1lbnQtcG9seWZpbGwvZGlzdC9kZXRhaWxzLWVsZW1lbnQtcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///127\n");

/***/ })

});