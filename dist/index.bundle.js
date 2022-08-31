/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@yaireo/tagify/dist/tagify.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@yaireo/tagify/dist/tagify.min.js ***!
  \********************************************************/
/***/ (function(module) {

/**
 * Tagify (v 4.15.3) - tags input component
 * By Yair Even-Or
 * https://github.com/yairEO/tagify
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * THE SOFTWARE IS NOT PERMISSIBLE TO BE SOLD.
 */

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function e(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?t(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const s=(t,e,i,s)=>(t=""+t,e=""+e,s&&(t=t.trim(),e=e.trim()),i?t==e:t.toLowerCase()==e.toLowerCase()),a=(t,e)=>t&&Array.isArray(t)&&t.map((t=>n(t,e)));function n(t,e){var i,s={};for(i in t)e.indexOf(i)<0&&(s[i]=t[i]);return s}function o(t){var e=document.createElement("div");return t.replace(/\&#?[0-9a-z]+;/gi,(function(t){return e.innerHTML=t,e.innerText}))}function r(t){return(new DOMParser).parseFromString(t.trim(),"text/html").body.firstElementChild}function l(t,e){for(e=e||"previous";t=t[e+"Sibling"];)if(3==t.nodeType)return t}function d(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/`|'/g,"&#039;"):t}function h(t){var e=Object.prototype.toString.call(t).split(" ")[1].slice(0,-1);return t===Object(t)&&"Array"!=e&&"Function"!=e&&"RegExp"!=e&&"HTMLUnknownElement"!=e}function g(t,e,i){function s(t,e){for(var i in e)if(e.hasOwnProperty(i)){if(h(e[i])){h(t[i])?s(t[i],e[i]):t[i]=Object.assign({},e[i]);continue}if(Array.isArray(e[i])){t[i]=Object.assign([],e[i]);continue}t[i]=e[i]}}return t instanceof Object||(t={}),s(t,e),i&&s(t,i),t}function p(){const t=[],e={};for(let i of arguments)for(let s of i)h(s)?e[s.value]||(t.push(s),e[s.value]=1):t.includes(s)||t.push(s);return t}function c(t){return String.prototype.normalize?"string"==typeof t?t.normalize("NFD").replace(/[\u0300-\u036f]/g,""):void 0:t}var u=()=>/(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);function m(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))}function v(t){return t&&t.classList&&t.classList.contains(this.settings.classNames.tag)}var f={delimiters:",",pattern:null,tagTextProp:"value",maxTags:1/0,callbacks:{},addTagOnBlur:!0,onChangeAfterBlur:!0,duplicates:!1,whitelist:[],blacklist:[],enforceWhitelist:!1,userInput:!0,keepInvalidTags:!1,createInvalidTags:!0,mixTagsAllowedAfter:/,|\.|\:|\s/,mixTagsInterpolator:["[[","]]"],backspace:!0,skipInvalid:!1,pasteAsTags:!0,editTags:{clicks:2,keepInvalid:!0},transformTag:()=>{},trim:!0,a11y:{focusableTags:!1},mixMode:{insertAfterTag:" "},autoComplete:{enabled:!0,rightKey:!1},classNames:{namespace:"tagify",mixMode:"tagify--mix",selectMode:"tagify--select",input:"tagify__input",focus:"tagify--focus",tagNoAnimation:"tagify--noAnim",tagInvalid:"tagify--invalid",tagNotAllowed:"tagify--notAllowed",scopeLoading:"tagify--loading",hasMaxTags:"tagify--hasMaxTags",hasNoTags:"tagify--noTags",empty:"tagify--empty",inputInvalid:"tagify__input--invalid",dropdown:"tagify__dropdown",dropdownWrapper:"tagify__dropdown__wrapper",dropdownHeader:"tagify__dropdown__header",dropdownFooter:"tagify__dropdown__footer",dropdownItem:"tagify__dropdown__item",dropdownItemActive:"tagify__dropdown__item--active",dropdownItemHidden:"tagify__dropdown__item--hidden",dropdownInital:"tagify__dropdown--initial",tag:"tagify__tag",tagText:"tagify__tag-text",tagX:"tagify__tag__removeBtn",tagLoading:"tagify__tag--loading",tagEditing:"tagify__tag--editable",tagFlash:"tagify__tag--flash",tagHide:"tagify__tag--hide"},dropdown:{classname:"",enabled:2,maxItems:10,searchKeys:["value","searchBy"],fuzzySearch:!0,caseSensitive:!1,accentedSearch:!0,highlightFirst:!1,closeOnSelect:!0,clearOnSelect:!0,position:"all",appendTarget:null},hooks:{beforeRemoveTag:()=>Promise.resolve(),beforePaste:()=>Promise.resolve(),suggestionClick:()=>Promise.resolve()}};function T(){this.dropdown={};for(let t in this._dropdown)this.dropdown[t]="function"==typeof this._dropdown[t]?this._dropdown[t].bind(this):this._dropdown[t];this.dropdown.refs()}var w={refs(){this.DOM.dropdown=this.parseTemplate("dropdown",[this.settings]),this.DOM.dropdown.content=this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-wrapper']")},getHeaderRef(){return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-header']")},getFooterRef(){return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-footer']")},getAllSuggestionsRefs(){return[...this.DOM.dropdown.content.querySelectorAll(this.settings.classNames.dropdownItemSelector)]},show(t){var e,i,a,n=this.settings,o="mix"==n.mode&&!n.enforceWhitelist,r=!n.whitelist||!n.whitelist.length,l="manual"==n.dropdown.position;if(t=void 0===t?this.state.inputText:t,!(r&&!o&&!n.templates.dropdownItemNoMatch||!1===n.dropdown.enable||this.state.isLoading||this.settings.readonly)){if(clearTimeout(this.dropdownHide__bindEventsTimeout),this.suggestedListItems=this.dropdown.filterListItems(t),t&&!this.suggestedListItems.length&&(this.trigger("dropdown:noMatch",t),n.templates.dropdownItemNoMatch&&(a=n.templates.dropdownItemNoMatch.call(this,{value:t}))),!a){if(this.suggestedListItems.length)t&&o&&!this.state.editing.scope&&!s(this.suggestedListItems[0].value,t)&&this.suggestedListItems.unshift({value:t});else{if(!t||!o||this.state.editing.scope)return this.input.autocomplete.suggest.call(this),void this.dropdown.hide();this.suggestedListItems=[{value:t}]}i=""+(h(e=this.suggestedListItems[0])?e.value:e),n.autoComplete&&i&&0==i.indexOf(t)&&this.input.autocomplete.suggest.call(this,e)}this.dropdown.fill(a),n.dropdown.highlightFirst&&this.dropdown.highlightOption(this.DOM.dropdown.content.children[0]),this.state.dropdown.visible||setTimeout(this.dropdown.events.binding.bind(this)),this.state.dropdown.visible=t||!0,this.state.dropdown.query=t,this.setStateSelection(),l||setTimeout((()=>{this.dropdown.position(),this.dropdown.render()})),setTimeout((()=>{this.trigger("dropdown:show",this.DOM.dropdown)}))}},hide(t){var e=this.DOM,i=e.scope,s=e.dropdown,a="manual"==this.settings.dropdown.position&&!t;if(s&&document.body.contains(s)&&!a)return window.removeEventListener("resize",this.dropdown.position),this.dropdown.events.binding.call(this,!1),i.setAttribute("aria-expanded",!1),s.parentNode.removeChild(s),setTimeout((()=>{this.state.dropdown.visible=!1}),100),this.state.dropdown.query=this.state.ddItemData=this.state.ddItemElm=this.state.selection=null,this.state.tag&&this.state.tag.value.length&&(this.state.flaggedTags[this.state.tag.baseOffset]=this.state.tag),this.trigger("dropdown:hide",s),this},toggle(t){this.dropdown[this.state.dropdown.visible&&!t?"hide":"show"]()},render(){var t,e,i,s=(t=this.DOM.dropdown,(i=t.cloneNode(!0)).style.cssText="position:fixed; top:-9999px; opacity:0",document.body.appendChild(i),e=i.clientHeight,i.parentNode.removeChild(i),e),a=this.settings;return"number"==typeof a.dropdown.enabled&&a.dropdown.enabled>=0?(this.DOM.scope.setAttribute("aria-expanded",!0),document.body.contains(this.DOM.dropdown)||(this.DOM.dropdown.classList.add(a.classNames.dropdownInital),this.dropdown.position(s),a.dropdown.appendTarget.appendChild(this.DOM.dropdown),setTimeout((()=>this.DOM.dropdown.classList.remove(a.classNames.dropdownInital)))),this):this},fill(t){t="string"==typeof t?t:this.dropdown.createListHTML(t||this.suggestedListItems);var e,i=this.settings.templates.dropdownContent.call(this,t);this.DOM.dropdown.content.innerHTML=(e=i)?e.replace(/\>[\r\n ]+\</g,"><").replace(/(<.*?>)|\s+/g,((t,e)=>e||" ")):""},fillHeaderFooter(){this.settings.templates;var t=this.dropdown.filterListItems(this.state.dropdown.query),e=this.parseTemplate("dropdownHeader",[t]),i=this.parseTemplate("dropdownFooter",[t]),s=this.dropdown.getHeaderRef(),a=this.dropdown.getFooterRef();e&&s?.parentNode.replaceChild(e,s),i&&a?.parentNode.replaceChild(i,a)},refilter(t){t=t||this.state.dropdown.query||"",this.suggestedListItems=this.dropdown.filterListItems(t),this.dropdown.fill(),this.suggestedListItems.length||this.dropdown.hide(),this.trigger("dropdown:updated",this.DOM.dropdown)},position(t){var e=this.settings.dropdown;if("manual"!=e.position){var i,s,a,n,o,r,l=this.DOM.dropdown,d=e.placeAbove,h=document.documentElement.clientHeight,g=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)>480?e.position:"all",p=this.DOM["input"==g?"input":"scope"];t=t||l.clientHeight,this.state.dropdown.visible&&("text"==g?(a=(i=this.getCaretGlobalPosition()).bottom,s=i.top,n=i.left,o="auto"):(r=function(t){for(var e=0,i=0;t;)e+=t.offsetLeft||0,i+=t.offsetTop||0,t=t.parentNode;return{left:e,top:i}}(this.settings.dropdown.appendTarget),s=(i=p.getBoundingClientRect()).top-r.top,a=i.bottom-1-r.top,n=i.left-r.left,o=i.width+"px"),s=Math.floor(s),a=Math.ceil(a),d=void 0===d?h-i.bottom<t:d,l.style.cssText="left:"+(n+window.pageXOffset)+"px; width:"+o+";"+(d?"top: "+(s+window.pageYOffset)+"px":"top: "+(a+window.pageYOffset)+"px"),l.setAttribute("placement",d?"top":"bottom"),l.setAttribute("position",g))}},events:{binding(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e=this.dropdown.events.callbacks,i=this.listeners.dropdown=this.listeners.dropdown||{position:this.dropdown.position.bind(this),onKeyDown:e.onKeyDown.bind(this),onMouseOver:e.onMouseOver.bind(this),onMouseLeave:e.onMouseLeave.bind(this),onClick:e.onClick.bind(this),onScroll:e.onScroll.bind(this)},s=t?"addEventListener":"removeEventListener";"manual"!=this.settings.dropdown.position&&(window[s]("resize",i.position),window[s]("keydown",i.onKeyDown)),this.DOM.dropdown[s]("mouseover",i.onMouseOver),this.DOM.dropdown[s]("mouseleave",i.onMouseLeave),this.DOM.dropdown[s]("mousedown",i.onClick),this.DOM.dropdown.content[s]("scroll",i.onScroll)},callbacks:{onKeyDown(t){if(this.state.hasFocus){var e=this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector),i=this.dropdown.getSuggestionDataByNode(e);switch(t.key){case"ArrowDown":case"ArrowUp":case"Down":case"Up":t.preventDefault();var s=this.dropdown.getAllSuggestionsRefs(),a="ArrowUp"==t.key||"Up"==t.key;e&&(e=this.dropdown.getNextOrPrevOption(e,!a)),e&&e.matches(this.settings.classNames.dropdownItemSelector)||(e=s[a?s.length-1:0]),i=this.dropdown.getSuggestionDataByNode(e),this.dropdown.highlightOption(e,!0);break;case"Escape":case"Esc":this.dropdown.hide();break;case"ArrowRight":if(this.state.actions.ArrowLeft)return;case"Tab":if("mix"!=this.settings.mode&&e&&!this.settings.autoComplete.rightKey&&!this.state.editing){t.preventDefault();var n=this.dropdown.getMappedValue(i);return this.input.autocomplete.set.call(this,n),!1}return!0;case"Enter":t.preventDefault(),this.settings.hooks.suggestionClick(t,{tagify:this,tagData:i,suggestionElm:e}).then((()=>{if(e)return this.dropdown.selectOption(e),e=this.dropdown.getNextOrPrevOption(e,!a),void this.dropdown.highlightOption(e);this.dropdown.hide(),"mix"!=this.settings.mode&&this.addTags(this.state.inputText.trim(),!0)})).catch((t=>t));break;case"Backspace":{if("mix"==this.settings.mode||this.state.editing.scope)return;const t=this.input.raw.call(this);""!=t&&8203!=t.charCodeAt(0)||(!0===this.settings.backspace?this.removeTags():"edit"==this.settings.backspace&&setTimeout(this.editTag.bind(this),0))}}}},onMouseOver(t){var e=t.target.closest(this.settings.classNames.dropdownItemSelector);e&&this.dropdown.highlightOption(e)},onMouseLeave(t){this.dropdown.highlightOption()},onClick(t){if(0==t.button&&t.target!=this.DOM.dropdown&&t.target!=this.DOM.dropdown.content){var e=t.target.closest(this.settings.classNames.dropdownItemSelector),i=this.dropdown.getSuggestionDataByNode(e);this.state.actions.selectOption=!0,setTimeout((()=>this.state.actions.selectOption=!1),50),this.settings.hooks.suggestionClick(t,{tagify:this,tagData:i,suggestionElm:e}).then((()=>{e?this.dropdown.selectOption(e,t):this.dropdown.hide()})).catch((t=>console.warn(t)))}},onScroll(t){var e=t.target,i=e.scrollTop/(e.scrollHeight-e.parentNode.clientHeight)*100;this.trigger("dropdown:scroll",{percentage:Math.round(i)})}}},getSuggestionDataByNode(t){var e=t&&t.getAttribute("value");return this.suggestedListItems.find((t=>t.value==e))||null},getNextOrPrevOption(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i=this.dropdown.getAllSuggestionsRefs(),s=i.findIndex((e=>e===t));return e?i[s+1]:i[s-1]},highlightOption(t,e){var i,s=this.settings.classNames.dropdownItemActive;if(this.state.ddItemElm&&(this.state.ddItemElm.classList.remove(s),this.state.ddItemElm.removeAttribute("aria-selected")),!t)return this.state.ddItemData=null,this.state.ddItemElm=null,void this.input.autocomplete.suggest.call(this);i=this.suggestedListItems[this.getNodeIndex(t)],this.state.ddItemData=i,this.state.ddItemElm=t,t.classList.add(s),t.setAttribute("aria-selected",!0),e&&(t.parentNode.scrollTop=t.clientHeight+t.offsetTop-t.parentNode.clientHeight),this.settings.autoComplete&&(this.input.autocomplete.suggest.call(this,i),this.dropdown.position())},selectOption(t,e){var i=this.settings.dropdown,s=i.clearOnSelect,a=i.closeOnSelect;if(!t)return this.addTags(this.state.inputText,!0),void(a&&this.dropdown.hide());e=e||{};var n=t.getAttribute("value"),o="noMatch"==n,r=this.suggestedListItems.find((t=>(t.value||t)==n));this.trigger("dropdown:select",{data:r,elm:t,event:e}),n&&(r||o)?(this.state.editing?this.onEditTagDone(null,g({__isValid:!0},this.normalizeTags([r])[0])):this["mix"==this.settings.mode?"addMixTags":"addTags"]([r||this.input.raw.call(this)],s),this.DOM.input.parentNode&&(setTimeout((()=>{this.DOM.input.focus(),this.toggleFocusClass(!0)})),a&&setTimeout(this.dropdown.hide.bind(this)),t.addEventListener("transitionend",(()=>{this.dropdown.fillHeaderFooter(),setTimeout((()=>t.remove()),100)}),{once:!0}),t.classList.add(this.settings.classNames.dropdownItemHidden))):a&&setTimeout(this.dropdown.hide.bind(this))},selectAll(t){this.suggestedListItems.length=0,this.dropdown.hide(),this.dropdown.filterListItems("");var e=this.dropdown.filterListItems("");return t||(e=this.state.dropdown.suggestions),this.addTags(e,!0),this},filterListItems(t,e){var i,s,a,n,o,r=this.settings,l=r.dropdown,d=(e=e||{},[]),g=[],p=r.whitelist,u=l.maxItems>=0?l.maxItems:1/0,m=l.searchKeys,v=0;if(!(t="select"==r.mode&&this.value.length&&this.value[0][r.tagTextProp]==t?"":t)||!m.length)return d=r.duplicates?p:p.filter((t=>!this.isTagDuplicate(h(t)?t.value:t))),this.state.dropdown.suggestions=d,d.slice(0,u);function f(t,e){return e.toLowerCase().split(" ").every((e=>t.includes(e.toLowerCase())))}for(o=l.caseSensitive?""+t:(""+t).toLowerCase();v<p.length;v++){let t,u;i=p[v]instanceof Object?p[v]:{value:p[v]};let T=!Object.keys(i).some((t=>m.includes(t)))?["value"]:m;l.fuzzySearch&&!e.exact?(a=T.reduce(((t,e)=>t+" "+(i[e]||"")),"").toLowerCase().trim(),l.accentedSearch&&(a=c(a),o=c(o)),t=0==a.indexOf(o),u=a===o,s=f(a,o)):(t=!0,s=T.some((t=>{var s=""+(i[t]||"");return l.accentedSearch&&(s=c(s),o=c(o)),l.caseSensitive||(s=s.toLowerCase()),u=s===o,e.exact?s===o:0==s.indexOf(o)}))),n=!r.duplicates&&this.isTagDuplicate(h(i)?i.value:i),s&&!n&&(u&&t?g.push(i):"startsWith"==l.sortby&&t?d.unshift(i):d.push(i))}return this.state.dropdown.suggestions=g.concat(d),"function"==typeof l.sortby?l.sortby(g.concat(d),o):g.concat(d).slice(0,u)},getMappedValue(t){var e=this.settings.dropdown.mapValueTo;return e?"function"==typeof e?e(t):t[e]||t.value:t.value},createListHTML(t){return g([],t).map(((t,i)=>{"string"!=typeof t&&"number"!=typeof t||(t={value:t});var s=this.dropdown.getMappedValue(t);return s="string"==typeof s?d(s):s,this.settings.templates.dropdownItem.apply(this,[e(e({},t),{},{mappedValue:s}),this])})).join("")}};const b="@yaireo/tagify/";var y,x={empty:"empty",exceed:"number of tags exceeded",pattern:"pattern mismatch",duplicate:"already exists",notAllowed:"not allowed"},O={wrapper:(t,e)=>`<tags class="${e.classNames.namespace} ${e.mode?`${e.classNames[e.mode+"Mode"]}`:""} ${t.className}"\n                    ${e.readonly?"readonly":""}\n                    ${e.disabled?"disabled":""}\n                    ${e.required?"required":""}\n                    ${"select"===e.mode?"spellcheck='false'":""}\n                    tabIndex="-1">\n            <span ${!e.readonly&&e.userInput?"contenteditable":""} tabIndex="0" data-placeholder="${e.placeholder||"&#8203;"}" aria-placeholder="${e.placeholder||""}"\n                class="${e.classNames.input}"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${"mix"==e.mode}"></span>\n                &#8203;\n        </tags>`,tag(t,e){let i=e.settings;return`<tag title="${t.title||t.value}"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${i.a11y.focusableTags?0:-1}"\n                    class="${i.classNames.tag} ${t.class||""}"\n                    ${this.getAttributes(t)}>\n            <x title='' class="${i.classNames.tagX}" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${i.classNames.tagText}">${t[i.tagTextProp]||t.value}</span>\n            </div>\n        </tag>`},dropdown(t){var e=t.dropdown,i="manual"==e.position,s=`${t.classNames.dropdown}`;return`<div class="${i?"":s} ${e.classname}" role="listbox" aria-labelledby="dropdown">\n                    <div data-selector='tagify-suggestions-wrapper' class="${t.classNames.dropdownWrapper}"></div>\n                </div>`},dropdownContent(t){var e=this.settings,i=this.state.dropdown.suggestions;return`\n            ${e.templates.dropdownHeader.call(this,i)}\n            ${t}\n            ${e.templates.dropdownFooter.call(this,i)}\n        `},dropdownItem(t){return`<div ${this.getAttributes(t)}\n                    class='${this.settings.classNames.dropdownItem} ${t.class?t.class:""}'\n                    tabindex="0"\n                    role="option">${t.mappedValue||t.value}</div>`},dropdownHeader(t){return`<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`},dropdownFooter(t){var e=t.length-this.settings.dropdown.maxItems;return e>0?`<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${e} more items. Refine your search.\n            </footer>`:""},dropdownItemNoMatch:null};function D(t){var e=document.createTextNode("");function i(t,i,s){s&&i.split(/\s+/g).forEach((i=>e[t+"EventListener"].call(e,i,s)))}return{off(t,e){return i("remove",t,e),this},on(t,e){return e&&"function"==typeof e&&i("add",t,e),this},trigger(i,s,a){var n;if(a=a||{cloneData:!0},i)if(t.settings.isJQueryPlugin)"remove"==i&&(i="removeTag"),jQuery(t.DOM.originalInput).triggerHandler(i,[s]);else{try{var o="object"==typeof s?s:{value:s};if((o=a.cloneData?g({},o):o).tagify=this,s.event&&(o.event=function(t){if(!t)return;let e=new Function;for(let i in t){let s=Object.getOwnPropertyDescriptor(t,i);s&&(s.get||s.set)?Object.defineProperty(e,i,s):e[i]=t[i]}return Object.setPrototypeOf(e,t),e}(s.event)),s instanceof Object)for(var r in s)s[r]instanceof HTMLElement&&(o[r]=s[r]);n=new CustomEvent(i,{detail:o})}catch(t){console.warn(t)}e.dispatchEvent(n)}}}}var M={customBinding(){this.customEventsList.forEach((t=>{this.on(t,this.settings.callbacks[t])}))},binding(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e,i=this.events.callbacks,s=t?"addEventListener":"removeEventListener";if(!this.state.mainEvents||!t){for(var a in this.state.mainEvents=t,t&&!this.listeners.main&&(this.events.bindGlobal.call(this),this.settings.isJQueryPlugin&&jQuery(this.DOM.originalInput).on("tagify.removeAllTags",this.removeAllTags.bind(this))),e=this.listeners.main=this.listeners.main||{focus:["input",i.onFocusBlur.bind(this)],keydown:["input",i.onKeydown.bind(this)],click:["scope",i.onClickScope.bind(this)],dblclick:["scope",i.onDoubleClickScope.bind(this)],paste:["input",i.onPaste.bind(this)],drop:["input",i.onDrop.bind(this)]})this.DOM[e[a][0]][s](a,e[a][1]);clearInterval(this.listeners.main.originalInputValueObserverInterval),this.listeners.main.originalInputValueObserverInterval=setInterval(i.observeOriginalInputValue.bind(this),500);var n=this.listeners.main.inputMutationObserver||new MutationObserver(i.onInputDOMChange.bind(this));n&&n.disconnect(),"mix"==this.settings.mode&&n.observe(this.DOM.input,{childList:!0})}},bindGlobal(t){var e,i=this.events.callbacks,s=t?"removeEventListener":"addEventListener";if(t||!this.listeners.global)for(e of(this.listeners.global=this.listeners&&this.listeners.global||[{type:this.isIE?"keydown":"input",target:this.DOM.input,cb:i[this.isIE?"onInputIE":"onInput"].bind(this)},{type:"keydown",target:window,cb:i.onWindowKeyDown.bind(this)},{type:"blur",target:this.DOM.input,cb:i.onFocusBlur.bind(this)}],this.listeners.global))e.target[s](e.type,e.cb)},unbindGlobal(){this.events.bindGlobal.call(this,!0)},callbacks:{onFocusBlur(t){var e=this.settings,i=t.target?this.trim(t.target.textContent):"",s=this.value?.[0]?.[e.tagTextProp],a=t.type,n=e.dropdown.enabled>=0,o={relatedTarget:t.relatedTarget},r=this.state.actions.selectOption&&(n||!e.dropdown.closeOnSelect),l=this.state.actions.addNew&&n,d=t.relatedTarget&&v.call(this,t.relatedTarget)&&this.DOM.scope.contains(t.relatedTarget);if("blur"==a){if(t.relatedTarget===this.DOM.scope)return this.dropdown.hide(),void this.DOM.input.focus();this.postUpdate(),e.onChangeAfterBlur&&this.triggerChangeEvent()}if(!r&&!l)if(this.state.hasFocus="focus"==a&&+new Date,this.toggleFocusClass(this.state.hasFocus),"mix"!=e.mode){if("focus"==a)return this.trigger("focus",o),void(0!==e.dropdown.enabled&&e.userInput||this.dropdown.show(this.value.length?"":void 0));"blur"==a&&(this.trigger("blur",o),this.loading(!1),"select"==e.mode&&(d&&(this.removeTags(),i=""),s===i&&(i="")),i&&!this.state.actions.selectOption&&e.addTagOnBlur&&this.addTags(i,!0)),this.DOM.input.removeAttribute("style"),this.dropdown.hide()}else"focus"==a?this.trigger("focus",o):"blur"==t.type&&(this.trigger("blur",o),this.loading(!1),this.dropdown.hide(),this.state.dropdown.visible=void 0,this.setStateSelection())},onWindowKeyDown(t){var e,i=document.activeElement;if(v.call(this,i)&&this.DOM.scope.contains(document.activeElement))switch(e=i.nextElementSibling,t.key){case"Backspace":this.settings.readonly||(this.removeTags(i),(e||this.DOM.input).focus());break;case"Enter":setTimeout(this.editTag.bind(this),0,i)}},onKeydown(t){var e=this.settings;"select"==e.mode&&e.enforceWhitelist&&this.value.length&&"Tab"!=t.key&&t.preventDefault();var i=this.trim(t.target.textContent);if(this.trigger("keydown",{originalEvent:this.cloneEvent(t)}),"mix"==e.mode){switch(t.key){case"Left":case"ArrowLeft":this.state.actions.ArrowLeft=!0;break;case"Delete":case"Backspace":if(this.state.editing)return;var s,a,n,r=document.getSelection(),d="Delete"==t.key&&r.anchorOffset==(r.anchorNode.length||0),h=r.anchorNode.previousSibling,g=1==r.anchorNode.nodeType||!r.anchorOffset&&h&&1==h.nodeType&&r.anchorNode.previousSibling,p=o(this.DOM.input.innerHTML),c=this.getTagElms();if("edit"==e.backspace&&g)return s=1==r.anchorNode.nodeType?null:r.anchorNode.previousElementSibling,setTimeout(this.editTag.bind(this),0,s),void t.preventDefault();if(u()&&g)return n=l(g),g.hasAttribute("readonly")||g.remove(),this.DOM.input.focus(),void setTimeout((()=>{this.placeCaretAfterNode(n),this.DOM.input.click()}));if("BR"==r.anchorNode.nodeName)return;if((d||g)&&1==r.anchorNode.nodeType?a=0==r.anchorOffset?d?c[0]:null:c[Math.min(c.length,r.anchorOffset)-1]:d?a=r.anchorNode.nextElementSibling:g&&(a=g),3==r.anchorNode.nodeType&&!r.anchorNode.nodeValue&&r.anchorNode.previousElementSibling&&t.preventDefault(),(g||d)&&!e.backspace)return void t.preventDefault();if("Range"!=r.type&&!r.anchorOffset&&r.anchorNode==this.DOM.input&&"Delete"!=t.key)return void t.preventDefault();if("Range"!=r.type&&a&&a.hasAttribute("readonly"))return void this.placeCaretAfterNode(l(a));clearTimeout(y),y=setTimeout((()=>{var t=document.getSelection(),e=o(this.DOM.input.innerHTML),i=!d&&t.anchorNode.previousSibling;if(e.length>=p.length&&i)if(v.call(this,i)&&!i.hasAttribute("readonly")){if(this.removeTags(i),this.fixFirefoxLastTagNoCaret(),2==this.DOM.input.children.length&&"BR"==this.DOM.input.children[1].tagName)return this.DOM.input.innerHTML="",this.value.length=0,!0}else i.remove();this.value=[].map.call(c,((t,e)=>{var i=this.tagData(t);if(t.parentNode||i.readonly)return i;this.trigger("remove",{tag:t,index:e,data:i})})).filter((t=>t))}),20)}return!0}switch(t.key){case"Backspace":"select"==e.mode&&e.enforceWhitelist&&this.value.length?this.removeTags():this.state.dropdown.visible&&"manual"!=e.dropdown.position||""!=t.target.textContent&&8203!=i.charCodeAt(0)||(!0===e.backspace?this.removeTags():"edit"==e.backspace&&setTimeout(this.editTag.bind(this),0));break;case"Esc":case"Escape":if(this.state.dropdown.visible)return;t.target.blur();break;case"Down":case"ArrowDown":this.state.dropdown.visible||this.dropdown.show();break;case"ArrowRight":{let t=this.state.inputSuggestion||this.state.ddItemData;if(t&&e.autoComplete.rightKey)return void this.addTags([t],!0);break}case"Tab":{let s="select"==e.mode;if(!i||s)return!0;t.preventDefault()}case"Enter":if(this.state.dropdown.visible||229==t.keyCode)return;t.preventDefault(),setTimeout((()=>{this.state.actions.selectOption||this.addTags(i,!0)}))}},onInput(t){this.postUpdate();var e=this.settings;if("mix"==e.mode)return this.events.callbacks.onMixTagsInput.call(this,t);var i=this.input.normalize.call(this),s=i.length>=e.dropdown.enabled,a={value:i,inputElm:this.DOM.input},n=this.validateTag({value:i});"select"==e.mode&&this.toggleScopeValidation(n),a.isValid=n,this.state.inputText!=i&&(this.input.set.call(this,i,!1),-1!=i.search(e.delimiters)?this.addTags(i)&&this.input.set.call(this):e.dropdown.enabled>=0&&this.dropdown[s?"show":"hide"](i),this.trigger("input",a))},onMixTagsInput(t){var e,i,s,a,n,o,r,l,d=this.settings,h=this.value.length,p=this.getTagElms(),c=document.createDocumentFragment(),m=window.getSelection().getRangeAt(0),v=[].map.call(p,(t=>this.tagData(t).value));if("deleteContentBackward"==t.inputType&&u()&&this.events.callbacks.onKeydown.call(this,{target:t.target,key:"Backspace"}),this.value.slice().forEach((t=>{t.readonly&&!v.includes(t.value)&&c.appendChild(this.createTagElem(t))})),c.childNodes.length&&(m.insertNode(c),this.setRangeAtStartEnd(!1,c.lastChild)),p.length!=h)return this.value=[].map.call(this.getTagElms(),(t=>this.tagData(t))),void this.update({withoutChangeEvent:!0});if(this.hasMaxTags())return!0;if(window.getSelection&&(o=window.getSelection()).rangeCount>0&&3==o.anchorNode.nodeType){if((m=o.getRangeAt(0).cloneRange()).collapse(!0),m.setStart(o.focusNode,0),s=(e=m.toString().slice(0,m.endOffset)).split(d.pattern).length-1,(i=e.match(d.pattern))&&(a=e.slice(e.lastIndexOf(i[i.length-1]))),a){if(this.state.actions.ArrowLeft=!1,this.state.tag={prefix:a.match(d.pattern)[0],value:a.replace(d.pattern,"")},this.state.tag.baseOffset=o.baseOffset-this.state.tag.value.length,l=this.state.tag.value.match(d.delimiters))return this.state.tag.value=this.state.tag.value.replace(d.delimiters,""),this.state.tag.delimiters=l[0],this.addTags(this.state.tag.value,d.dropdown.clearOnSelect),void this.dropdown.hide();n=this.state.tag.value.length>=d.dropdown.enabled;try{r=(r=this.state.flaggedTags[this.state.tag.baseOffset]).prefix==this.state.tag.prefix&&r.value[0]==this.state.tag.value[0],this.state.flaggedTags[this.state.tag.baseOffset]&&!this.state.tag.value&&delete this.state.flaggedTags[this.state.tag.baseOffset]}catch(t){}(r||s<this.state.mixMode.matchedPatternCount)&&(n=!1)}else this.state.flaggedTags={};this.state.mixMode.matchedPatternCount=s}setTimeout((()=>{this.update({withoutChangeEvent:!0}),this.trigger("input",g({},this.state.tag,{textContent:this.DOM.input.textContent})),this.state.tag&&this.dropdown[n?"show":"hide"](this.state.tag.value)}),10)},onInputIE(t){var e=this;setTimeout((function(){e.events.callbacks.onInput.call(e,t)}))},observeOriginalInputValue(){this.DOM.originalInput.parentNode||this.destroy(),this.DOM.originalInput.value!=this.DOM.originalInput.tagifyValue&&this.loadOriginalValues()},onClickScope(t){var e=this.settings,i=t.target.closest("."+e.classNames.tag),s=+new Date-this.state.hasFocus;if(t.target!=this.DOM.scope){if(!t.target.classList.contains(e.classNames.tagX))return i?(this.trigger("click",{tag:i,index:this.getNodeIndex(i),data:this.tagData(i),originalEvent:this.cloneEvent(t)}),void(1!==e.editTags&&1!==e.editTags.clicks||this.events.callbacks.onDoubleClickScope.call(this,t))):void(t.target==this.DOM.input&&("mix"==e.mode&&this.fixFirefoxLastTagNoCaret(),s>500)?this.state.dropdown.visible?this.dropdown.hide():0===e.dropdown.enabled&&"mix"!=e.mode&&this.dropdown.show(this.value.length?"":void 0):"select"==e.mode&&!this.state.dropdown.visible&&this.dropdown.show());this.removeTags(t.target.parentNode)}else this.state.hasFocus||this.DOM.input.focus()},onPaste(t){t.preventDefault();var e,i,s=this.settings;if("select"==s.mode&&s.enforceWhitelist||!s.userInput)return!1;s.readonly||(e=t.clipboardData||window.clipboardData,i=e.getData("Text"),s.hooks.beforePaste(t,{tagify:this,pastedText:i,clipboardData:e}).then((e=>{void 0===e&&(e=i),e&&(this.injectAtCaret(e,window.getSelection().getRangeAt(0)),"mix"==this.settings.mode?this.events.callbacks.onMixTagsInput.call(this,t):this.settings.pasteAsTags?this.addTags(this.state.inputText+e,!0):this.state.inputText=e)})).catch((t=>t)))},onDrop(t){t.preventDefault()},onEditTagInput(t,e){var i=t.closest("."+this.settings.classNames.tag),s=this.getNodeIndex(i),a=this.tagData(i),n=this.input.normalize.call(this,t),o={[this.settings.tagTextProp]:n,__tagId:a.__tagId},r=this.validateTag(o);this.editTagChangeDetected(g(a,o))||!0!==t.originalIsValid||(r=!0),i.classList.toggle(this.settings.classNames.tagInvalid,!0!==r),a.__isValid=r,i.title=!0===r?a.title||a.value:r,n.length>=this.settings.dropdown.enabled&&(this.state.editing&&(this.state.editing.value=n),this.dropdown.show(n)),this.trigger("edit:input",{tag:i,index:s,data:g({},this.value[s],{newValue:n}),originalEvent:this.cloneEvent(e)})},onEditTagFocus(t){this.state.editing={scope:t,input:t.querySelector("[contenteditable]")}},onEditTagBlur(t){if(this.state.hasFocus||this.toggleFocusClass(),this.DOM.scope.contains(t)){var e,i,s=this.settings,a=t.closest("."+s.classNames.tag),n=this.input.normalize.call(this,t),o=this.tagData(a),r=o.__originalData,l=this.editTagChangeDetected(o),d=this.validateTag({[s.tagTextProp]:n,__tagId:o.__tagId});if(n)if(l){if(e=this.hasMaxTags(),i=g({},r,{[s.tagTextProp]:this.trim(n),__isValid:d}),s.transformTag.call(this,i,r),!0!==(d=(!e||!0===r.__isValid)&&this.validateTag(i))){if(this.trigger("invalid",{data:i,tag:a,message:d}),s.editTags.keepInvalid)return;s.keepInvalidTags?i.__isValid=d:i=r}else s.keepInvalidTags&&(delete i.title,delete i["aria-invalid"],delete i.class);this.onEditTagDone(a,i)}else this.onEditTagDone(a,r);else this.onEditTagDone(a)}},onEditTagkeydown(t,e){switch(this.trigger("edit:keydown",{originalEvent:this.cloneEvent(t)}),t.key){case"Esc":case"Escape":e.parentNode.replaceChild(e.__tagifyTagData.__originalHTML,e),this.state.editing=!1;case"Enter":case"Tab":t.preventDefault(),t.target.blur()}},onDoubleClickScope(t){var e,i,s=t.target.closest("."+this.settings.classNames.tag),a=this.tagData(s),n=this.settings;s&&n.userInput&&!1!==a.editable&&(e=s.classList.contains(this.settings.classNames.tagEditing),i=s.hasAttribute("readonly"),"select"==n.mode||n.readonly||e||i||!this.settings.editTags||this.editTag(s),this.toggleFocusClass(!0),this.trigger("dblclick",{tag:s,index:this.getNodeIndex(s),data:this.tagData(s)}))},onInputDOMChange(t){t.forEach((t=>{t.addedNodes.forEach((t=>{if("<div><br></div>"==t.outerHTML)t.replaceWith(document.createElement("br"));else if(1==t.nodeType&&t.querySelector(this.settings.classNames.tagSelector)){let e=document.createTextNode("");3==t.childNodes[0].nodeType&&"BR"!=t.previousSibling.nodeName&&(e=document.createTextNode("\n")),t.replaceWith(e,...[...t.childNodes].slice(0,-1)),this.placeCaretAfterNode(e)}else if(v.call(this,t)&&(3!=t.previousSibling?.nodeType||t.previousSibling.textContent||t.previousSibling.remove(),t.previousSibling&&"BR"==t.previousSibling.nodeName)){t.previousSibling.replaceWith("\n​");let e=t.nextSibling,i="";for(;e;)i+=e.textContent,e=e.nextSibling;i.trim()&&this.placeCaretAfterNode(t.previousSibling)}})),t.removedNodes.forEach((t=>{t&&"BR"==t.nodeName&&v.call(this,e)&&(this.removeTags(e),this.fixFirefoxLastTagNoCaret())}))}));var e=this.DOM.input.lastChild;e&&""==e.nodeValue&&e.remove(),e&&"BR"==e.nodeName||this.DOM.input.appendChild(document.createElement("br"))}}};function I(t,e){if(!t){console.warn("Tagify:","input element not found",t);const e=new Proxy(this,{get:()=>()=>e});return e}if(t.__tagify)return console.warn("Tagify: ","input element is already Tagified - Same instance is returned.",t),t.__tagify;var i;g(this,D(this)),this.isFirefox="undefined"!=typeof InstallTrigger,this.isIE=window.document.documentMode,e=e||{},this.getPersistedData=(i=e.id,t=>{let e,s="/"+t;if(1==localStorage.getItem(b+i+"/v",1))try{e=JSON.parse(localStorage[b+i+s])}catch(t){}return e}),this.setPersistedData=(t=>t?(localStorage.setItem(b+t+"/v",1),(e,i)=>{let s="/"+i,a=JSON.stringify(e);e&&i&&(localStorage.setItem(b+t+s,a),dispatchEvent(new Event("storage")))}):()=>{})(e.id),this.clearPersistedData=(t=>e=>{const i=b+"/"+t+"/";if(e)localStorage.removeItem(i+e);else for(let t in localStorage)t.includes(i)&&localStorage.removeItem(t)})(e.id),this.applySettings(t,e),this.state={inputText:"",editing:!1,actions:{},mixMode:{},dropdown:{},flaggedTags:{}},this.value=[],this.listeners={},this.DOM={},this.build(t),T.call(this),this.getCSSVars(),this.loadOriginalValues(),this.events.customBinding.call(this),this.events.binding.call(this),t.autofocus&&this.DOM.input.focus(),t.__tagify=this}return I.prototype={_dropdown:w,helpers:{sameStr:s,removeCollectionProp:a,omit:n,isObject:h,parseHTML:r,escapeHTML:d,extend:g,concatWithoutDups:p,getUID:m,isNodeTag:v},customEventsList:["change","add","remove","invalid","input","click","keydown","focus","blur","edit:input","edit:beforeUpdate","edit:updated","edit:start","edit:keydown","dropdown:show","dropdown:hide","dropdown:select","dropdown:updated","dropdown:noMatch","dropdown:scroll"],dataProps:["__isValid","__removed","__originalData","__originalHTML","__tagId"],trim(t){return this.settings.trim&&t&&"string"==typeof t?t.trim():t},parseHTML:r,templates:O,parseTemplate(t,e){return t=this.settings.templates[t]||t,this.parseHTML(t.apply(this,e))},set whitelist(t){const e=t&&Array.isArray(t);this.settings.whitelist=e?t:[],this.setPersistedData(e?t:[],"whitelist")},get whitelist(){return this.settings.whitelist},generateClassSelectors(t){for(let e in t){let i=e;Object.defineProperty(t,i+"Selector",{get(){return"."+this[i].split(" ")[0]}})}},applySettings(t,i){f.templates=this.templates;var s=this.settings=g({},f,i);if(s.disabled=t.hasAttribute("disabled"),s.readonly=s.readonly||t.hasAttribute("readonly"),s.placeholder=d(t.getAttribute("placeholder")||s.placeholder||""),s.required=t.hasAttribute("required"),this.generateClassSelectors(s.classNames),this.isIE&&(s.autoComplete=!1),["whitelist","blacklist"].forEach((e=>{var i=t.getAttribute("data-"+e);i&&(i=i.split(s.delimiters))instanceof Array&&(s[e]=i)})),"autoComplete"in i&&!h(i.autoComplete)&&(s.autoComplete=f.autoComplete,s.autoComplete.enabled=i.autoComplete),"mix"==s.mode&&(s.autoComplete.rightKey=!0,s.delimiters=i.delimiters||null,s.tagTextProp&&!s.dropdown.searchKeys.includes(s.tagTextProp)&&s.dropdown.searchKeys.push(s.tagTextProp)),t.pattern)try{s.pattern=new RegExp(t.pattern)}catch(t){}if(s.delimiters){s._delimiters=s.delimiters;try{s.delimiters=new RegExp(this.settings.delimiters,"g")}catch(t){}}s.disabled&&(s.userInput=!1),this.TEXTS=e(e({},x),s.texts||{}),"select"!=s.mode&&s.userInput||(s.dropdown.enabled=0),s.dropdown.appendTarget=i.dropdown&&i.dropdown.appendTarget?i.dropdown.appendTarget:document.body;let a=this.getPersistedData("whitelist");Array.isArray(a)&&(this.whitelist=Array.isArray(s.whitelist)?p(s.whitelist,a):a)},getAttributes(t){var e,i=this.getCustomAttributes(t),s="";for(e in i)s+=" "+e+(void 0!==t[e]?`="${i[e]}"`:"");return s},getCustomAttributes(t){if(!h(t))return"";var e,i={};for(e in t)"__"!=e.slice(0,2)&&"class"!=e&&t.hasOwnProperty(e)&&void 0!==t[e]&&(i[e]=d(t[e]));return i},setStateSelection(){var t=window.getSelection(),e={anchorOffset:t.anchorOffset,anchorNode:t.anchorNode,range:t.getRangeAt&&t.rangeCount&&t.getRangeAt(0)};return this.state.selection=e,e},getCaretGlobalPosition(){const t=document.getSelection();if(t.rangeCount){const e=t.getRangeAt(0),i=e.startContainer,s=e.startOffset;let a,n;if(s>0)return n=document.createRange(),n.setStart(i,s-1),n.setEnd(i,s),a=n.getBoundingClientRect(),{left:a.right,top:a.top,bottom:a.bottom};if(i.getBoundingClientRect)return i.getBoundingClientRect()}return{left:-9999,top:-9999}},getCSSVars(){var t=getComputedStyle(this.DOM.scope,null);var e;this.CSSVars={tagHideTransition:(t=>{let e=t.value;return"s"==t.unit?1e3*e:e})(function(t){if(!t)return{};var e=(t=t.trim().split(" ")[0]).split(/\d+/g).filter((t=>t)).pop().trim();return{value:+t.split(e).filter((t=>t))[0].trim(),unit:e}}((e="tag-hide-transition",t.getPropertyValue("--"+e))))}},build(t){var e=this.DOM;this.settings.mixMode.integrated?(e.originalInput=null,e.scope=t,e.input=t):(e.originalInput=t,e.originalInput_tabIndex=t.tabIndex,e.scope=this.parseTemplate("wrapper",[t,this.settings]),e.input=e.scope.querySelector(this.settings.classNames.inputSelector),t.parentNode.insertBefore(e.scope,t),t.tabIndex=-1)},destroy(){this.events.unbindGlobal.call(this),this.DOM.scope.parentNode.removeChild(this.DOM.scope),this.DOM.originalInput.tabIndex=this.DOM.originalInput_tabIndex,delete this.DOM.originalInput.__tagify,this.dropdown.hide(!0),clearTimeout(this.dropdownHide__bindEventsTimeout),clearInterval(this.listeners.main.originalInputValueObserverInterval)},loadOriginalValues(t){var e,i=this.settings;if(this.state.blockChangeEvent=!0,void 0===t){const e=this.getPersistedData("value");t=e&&!this.DOM.originalInput.value?e:i.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value}if(this.removeAllTags(),t)if("mix"==i.mode)this.parseMixTags(this.trim(t)),(e=this.DOM.input.lastChild)&&"BR"==e.tagName||this.DOM.input.insertAdjacentHTML("beforeend","<br>");else{try{JSON.parse(t)instanceof Array&&(t=JSON.parse(t))}catch(t){}this.addTags(t,!0).forEach((t=>t&&t.classList.add(i.classNames.tagNoAnimation)))}else this.postUpdate();this.state.lastOriginalValueReported=i.mixMode.integrated?"":this.DOM.originalInput.value,this.state.blockChangeEvent=!1},cloneEvent(t){var e={};for(var i in t)e[i]=t[i];return e},loading(t){return this.state.isLoading=t,this.DOM.scope.classList[t?"add":"remove"](this.settings.classNames.scopeLoading),this},tagLoading(t,e){return t&&t.classList[e?"add":"remove"](this.settings.classNames.tagLoading),this},toggleClass(t,e){"string"==typeof t&&this.DOM.scope.classList.toggle(t,e)},toggleScopeValidation(t){var e=!0===t||void 0===t;!this.settings.required&&t&&t===this.TEXTS.empty&&(e=!0),this.toggleClass(this.settings.classNames.tagInvalid,!e),this.DOM.scope.title=e?"":t},toggleFocusClass(t){this.toggleClass(this.settings.classNames.focus,!!t)},triggerChangeEvent:function(){if(!this.settings.mixMode.integrated){var t=this.DOM.originalInput,e=this.state.lastOriginalValueReported!==t.value,i=new CustomEvent("change",{bubbles:!0});e&&(this.state.lastOriginalValueReported=t.value,i.simulated=!0,t._valueTracker&&t._valueTracker.setValue(Math.random()),t.dispatchEvent(i),this.trigger("change",this.state.lastOriginalValueReported),t.value=this.state.lastOriginalValueReported)}},events:M,fixFirefoxLastTagNoCaret(){},placeCaretAfterNode(t){if(t&&t.parentNode){var e=t,i=window.getSelection(),s=i.getRangeAt(0);i.rangeCount&&(s.setStartAfter(e||t),s.collapse(!0),i.removeAllRanges(),i.addRange(s))}},insertAfterTag(t,e){if(e=e||this.settings.mixMode.insertAfterTag,t&&t.parentNode&&e)return e="string"==typeof e?document.createTextNode(e):e,t.parentNode.insertBefore(e,t.nextSibling),e},editTagChangeDetected(t){var e=t.__originalData;for(var i in e)if(!this.dataProps.includes(i)&&t[i]!=e[i])return!0;return!1},getTagTextNode(t){return t.querySelector(this.settings.classNames.tagTextSelector)},setTagTextNode(t,e){this.getTagTextNode(t).innerHTML=d(e)},editTag(t,e){t=t||this.getLastTag(),e=e||{},this.dropdown.hide();var i=this.settings,s=this.getTagTextNode(t),a=this.getNodeIndex(t),n=this.tagData(t),o=this.events.callbacks,r=this,l=!0;if(s){if(!(n instanceof Object&&"editable"in n)||n.editable)return n=this.tagData(t,{__originalData:g({},n),__originalHTML:t.cloneNode(!0)}),this.tagData(n.__originalHTML,n.__originalData),s.setAttribute("contenteditable",!0),t.classList.add(i.classNames.tagEditing),s.addEventListener("focus",o.onEditTagFocus.bind(this,t)),s.addEventListener("blur",(function(){setTimeout((()=>o.onEditTagBlur.call(r,r.getTagTextNode(t))))})),s.addEventListener("input",o.onEditTagInput.bind(this,s)),s.addEventListener("keydown",(e=>o.onEditTagkeydown.call(this,e,t))),e.skipValidation||(l=this.editTagToggleValidity(t)),s.originalIsValid=l,this.trigger("edit:start",{tag:t,index:a,data:n,isValid:l}),s.focus(),this.setRangeAtStartEnd(!1,s),this}else console.warn("Cannot find element in Tag template: .",i.classNames.tagTextSelector)},editTagToggleValidity(t,e){var i;if(e=e||this.tagData(t))return(i=!("__isValid"in e)||!0===e.__isValid)||this.removeTagsFromValue(t),this.update(),t.classList.toggle(this.settings.classNames.tagNotAllowed,!i),e.__isValid;console.warn("tag has no data: ",t,e)},onEditTagDone(t,e){e=e||{};var i={tag:t=t||this.state.editing.scope,index:this.getNodeIndex(t),previousData:this.tagData(t),data:e};this.trigger("edit:beforeUpdate",i,{cloneData:!1}),this.state.editing=!1,delete e.__originalData,delete e.__originalHTML,t&&e[this.settings.tagTextProp]?(t=this.replaceTag(t,e),this.editTagToggleValidity(t,e),this.settings.a11y.focusableTags?t.focus():this.placeCaretAfterNode(t)):t&&this.removeTags(t),this.trigger("edit:updated",i),this.dropdown.hide(),this.settings.keepInvalidTags&&this.reCheckInvalidTags()},replaceTag(t,e){e&&e.value||(e=t.__tagifyTagData),e.__isValid&&1!=e.__isValid&&g(e,this.getInvalidTagAttrs(e,e.__isValid));var i=this.createTagElem(e);return t.parentNode.replaceChild(i,t),this.updateValueByDOMTags(),i},updateValueByDOMTags(){this.value.length=0,[].forEach.call(this.getTagElms(),(t=>{t.classList.contains(this.settings.classNames.tagNotAllowed.split(" ")[0])||this.value.push(this.tagData(t))})),this.update()},setRangeAtStartEnd(t,e){t="number"==typeof t?t:!!t,e=(e=e||this.DOM.input).lastChild||e;var i=document.getSelection();try{i.rangeCount>=1&&["Start","End"].forEach((s=>i.getRangeAt(0)["set"+s](e,t||e.length)))}catch(t){}},injectAtCaret(t,e){return!(e=e||this.state.selection?.range)&&t?(this.appendMixTags(t),this):("string"==typeof t&&(t=document.createTextNode(t)),e.deleteContents(),e.insertNode(t),this.setRangeAtStartEnd(!1,t),this.updateValueByDOMTags(),this.update(),this)},input:{set(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i=this.settings.dropdown.closeOnSelect;this.state.inputText=t,e&&(this.DOM.input.innerHTML=d(""+t)),!t&&i&&this.dropdown.hide.bind(this),this.input.autocomplete.suggest.call(this),this.input.validate.call(this)},raw(){return this.DOM.input.textContent},validate(){var t=!this.state.inputText||!0===this.validateTag({value:this.state.inputText});return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid,!t),t},normalize(t){var e=t||this.DOM.input,i=[];e.childNodes.forEach((t=>3==t.nodeType&&i.push(t.nodeValue))),i=i.join("\n");try{i=i.replace(/(?:\r\n|\r|\n)/g,this.settings.delimiters.source.charAt(0))}catch(t){}return i=i.replace(/\s/g," "),this.trim(i)},autocomplete:{suggest(t){if(this.settings.autoComplete.enabled){"string"==typeof(t=t||{})&&(t={value:t});var e=t.value?""+t.value:"",i=e.substr(0,this.state.inputText.length).toLowerCase(),s=e.substring(this.state.inputText.length);e&&this.state.inputText&&i==this.state.inputText.toLowerCase()?(this.DOM.input.setAttribute("data-suggest",s),this.state.inputSuggestion=t):(this.DOM.input.removeAttribute("data-suggest"),delete this.state.inputSuggestion)}},set(t){var e=this.DOM.input.getAttribute("data-suggest"),i=t||(e?this.state.inputText+e:null);return!!i&&("mix"==this.settings.mode?this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix+i)):(this.input.set.call(this,i),this.setRangeAtStartEnd()),this.input.autocomplete.suggest.call(this),this.dropdown.hide(),!0)}}},getTagIdx(t){return this.value.findIndex((e=>e.__tagId==(t||{}).__tagId))},getNodeIndex(t){var e=0;if(t)for(;t=t.previousElementSibling;)e++;return e},getTagElms(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var s="."+[...this.settings.classNames.tag.split(" "),...e].join(".");return[].slice.call(this.DOM.scope.querySelectorAll(s))},getLastTag(){var t=this.DOM.scope.querySelectorAll(`${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`);return t[t.length-1]},tagData:(t,e,i)=>t?(e&&(t.__tagifyTagData=i?e:g({},t.__tagifyTagData||{},e)),t.__tagifyTagData):(console.warn("tag element doesn't exist",t,e),e),isTagDuplicate(t,e,i){var a=0;if("select"==this.settings.mode)return!1;for(let n of this.value){s(this.trim(""+t),n.value,e)&&i!=n.__tagId&&a++}return a},getTagIndexByValue(t){var e=[];return this.getTagElms().forEach(((i,a)=>{s(this.trim(i.textContent),t,this.settings.dropdown.caseSensitive)&&e.push(a)})),e},getTagElmByValue(t){var e=this.getTagIndexByValue(t)[0];return this.getTagElms()[e]},flashTag(t){t&&(t.classList.add(this.settings.classNames.tagFlash),setTimeout((()=>{t.classList.remove(this.settings.classNames.tagFlash)}),100))},isTagBlacklisted(t){return t=this.trim(t.toLowerCase()),this.settings.blacklist.filter((e=>(""+e).toLowerCase()==t)).length},isTagWhitelisted(t){return!!this.getWhitelistItem(t)},getWhitelistItem(t,e,i){e=e||"value";var a,n=this.settings;return(i=i||n.whitelist).some((i=>{var o="string"==typeof i?i:i[e]||i.value;if(s(o,t,n.dropdown.caseSensitive,n.trim))return a="string"==typeof i?{value:i}:i,!0})),a||"value"!=e||"value"==n.tagTextProp||(a=this.getWhitelistItem(t,n.tagTextProp,i)),a},validateTag(t){var e=this.settings,i="value"in t?"value":e.tagTextProp,s=this.trim(t[i]+"");return(t[i]+"").trim()?e.pattern&&e.pattern instanceof RegExp&&!e.pattern.test(s)?this.TEXTS.pattern:!e.duplicates&&this.isTagDuplicate(s,e.dropdown.caseSensitive,t.__tagId)?this.TEXTS.duplicate:this.isTagBlacklisted(s)||e.enforceWhitelist&&!this.isTagWhitelisted(s)?this.TEXTS.notAllowed:!e.validate||e.validate(t):this.TEXTS.empty},getInvalidTagAttrs(t,e){return{"aria-invalid":!0,class:`${t.class||""} ${this.settings.classNames.tagNotAllowed}`.trim(),title:e}},hasMaxTags(){return this.value.length>=this.settings.maxTags&&this.TEXTS.exceed},setReadonly(t,e){var i=this.settings;document.activeElement.blur(),i[e||"readonly"]=t,this.DOM.scope[(t?"set":"remove")+"Attribute"](e||"readonly",!0),this.setContentEditable(!t)},setContentEditable(t){this.DOM.input.contentEditable=t,this.DOM.input.tabIndex=t?0:-1},setDisabled(t){this.setReadonly(t,"disabled")},normalizeTags(t){var e=this.settings,i=e.whitelist,s=e.delimiters,a=e.mode,n=e.tagTextProp;e.enforceWhitelist;var o=[],r=!!i&&i[0]instanceof Object,l=Array.isArray(t),d=l&&t[0].value,h=t=>(t+"").split(s).filter((t=>t)).map((t=>({[n]:this.trim(t),value:this.trim(t)})));if("number"==typeof t&&(t=t.toString()),"string"==typeof t){if(!t.trim())return[];t=h(t)}else l&&(t=[].concat(...t.map((t=>t.value?t:h(t)))));return r&&!d&&(t.forEach((t=>{var e=o.map((t=>t.value)),i=this.dropdown.filterListItems.call(this,t[n],{exact:!0});this.settings.duplicates||(i=i.filter((t=>!e.includes(t.value))));var s=i.length>1?this.getWhitelistItem(t[n],n,i):i[0];s&&s instanceof Object?o.push(s):"mix"!=a&&(null==t.value&&(t.value=t[n]),o.push(t))})),o.length&&(t=o)),t},parseMixTags(t){var e=this.settings,i=e.mixTagsInterpolator,s=e.duplicates,a=e.transformTag,n=e.enforceWhitelist,o=e.maxTags,r=e.tagTextProp,l=[];return t=t.split(i[0]).map(((t,e)=>{var d,h,g,p=t.split(i[1]),c=p[0],u=l.length==o;try{if(c==+c)throw Error;h=JSON.parse(c)}catch(t){h=this.normalizeTags(c)[0]||{value:c}}if(a.call(this,h),u||!(p.length>1)||n&&!this.isTagWhitelisted(h.value)||!s&&this.isTagDuplicate(h.value)){if(t)return e?i[0]+t:t}else h[d=h[r]?r:"value"]=this.trim(h[d]),g=this.createTagElem(h),l.push(h),g.classList.add(this.settings.classNames.tagNoAnimation),p[0]=g.outerHTML,this.value.push(h);return p.join("")})).join(""),this.DOM.input.innerHTML=t,this.DOM.input.appendChild(document.createTextNode("")),this.DOM.input.normalize(),this.getTagElms().forEach(((t,e)=>this.tagData(t,l[e]))),this.update({withoutChangeEvent:!0}),t},replaceTextWithNode(t,e){if(this.state.tag||e){e=e||this.state.tag.prefix+this.state.tag.value;var i,s,a=this.state.selection||window.getSelection(),n=a.anchorNode,o=this.state.tag.delimiters?this.state.tag.delimiters.length:0;return n.splitText(a.anchorOffset-o),-1==(i=n.nodeValue.lastIndexOf(e))?!0:(s=n.splitText(i),t&&n.parentNode.replaceChild(t,s),!0)}},selectTag(t,e){var i=this.settings;if(!i.enforceWhitelist||this.isTagWhitelisted(e.value)){this.input.set.call(this,e[i.tagTextProp]||e.value,!0),this.state.actions.selectOption&&setTimeout(this.setRangeAtStartEnd.bind(this));var s=this.getLastTag();return s?this.replaceTag(s,e):this.appendTag(t),this.value[0]=e,this.update(),this.trigger("add",{tag:t,data:e}),[t]}},addEmptyTag(t){var e=g({value:""},t||{}),i=this.createTagElem(e);this.tagData(i,e),this.appendTag(i),this.editTag(i,{skipValidation:!0})},addTags(t,e,i){var s=[],a=this.settings,n=[],o=document.createDocumentFragment();if(i=i||a.skipInvalid,!t||0==t.length)return s;switch(t=this.normalizeTags(t),a.mode){case"mix":return this.addMixTags(t);case"select":e=!1,this.removeAllTags()}return this.DOM.input.removeAttribute("style"),t.forEach((t=>{var e,r={},l=Object.assign({},t,{value:t.value+""});if(t=Object.assign({},l),a.transformTag.call(this,t),t.__isValid=this.hasMaxTags()||this.validateTag(t),!0!==t.__isValid){if(i)return;if(g(r,this.getInvalidTagAttrs(t,t.__isValid),{__preInvalidData:l}),t.__isValid==this.TEXTS.duplicate&&this.flashTag(this.getTagElmByValue(t.value)),!a.createInvalidTags)return void n.push(t.value)}if("readonly"in t&&(t.readonly?r["aria-readonly"]=!0:delete t.readonly),e=this.createTagElem(t,r),s.push(e),"select"==a.mode)return this.selectTag(e,t);o.appendChild(e),t.__isValid&&!0===t.__isValid?(this.value.push(t),this.trigger("add",{tag:e,index:this.value.length-1,data:t})):(this.trigger("invalid",{data:t,index:this.value.length,tag:e,message:t.__isValid}),a.keepInvalidTags||setTimeout((()=>this.removeTags(e,!0)),1e3)),this.dropdown.position()})),this.appendTag(o),this.update(),t.length&&e&&(this.input.set.call(this,a.createInvalidTags?"":n.join(a._delimiters)),this.setRangeAtStartEnd()),a.dropdown.enabled&&this.dropdown.refilter(),s},addMixTags(t){if((t=this.normalizeTags(t))[0].prefix||this.state.tag)return this.prefixedTextToTag(t[0]);"string"==typeof t&&(t=[{value:t}]),this.state.selection;var e=document.createDocumentFragment();return t.forEach((t=>{var i=this.createTagElem(t);e.appendChild(i),this.insertAfterTag(i)})),this.appendMixTags(e),e},appendMixTags(t){var e=!!this.state.selection;e?this.injectAtCaret(t):(this.DOM.input.focus(),(e=this.setStateSelection()).range.setStart(this.DOM.input,e.range.endOffset),e.range.setEnd(this.DOM.input,e.range.endOffset),this.DOM.input.appendChild(t),this.updateValueByDOMTags(),this.update())},prefixedTextToTag(t){var e,i=this.settings,s=this.state.tag.delimiters;if(i.transformTag.call(this,t),t.prefix=t.prefix||this.state.tag?this.state.tag.prefix:(i.pattern.source||i.pattern)[0],e=this.createTagElem(t),this.replaceTextWithNode(e)||this.DOM.input.appendChild(e),setTimeout((()=>e.classList.add(this.settings.classNames.tagNoAnimation)),300),this.value.push(t),this.update(),!s){var a=this.insertAfterTag(e)||e;this.placeCaretAfterNode(a)}return this.state.tag=null,this.trigger("add",g({},{tag:e},{data:t})),e},appendTag(t){var e=this.DOM,i=e.input;i===e.input?e.scope.insertBefore(t,i):e.scope.appendChild(t)},createTagElem(t,i){t.__tagId=m();var s,a=g({},t,e({value:d(t.value+"")},i));return function(t){for(var e,i=document.createNodeIterator(t,NodeFilter.SHOW_TEXT,null,!1);e=i.nextNode();)e.textContent.trim()||e.parentNode.removeChild(e)}(s=this.parseTemplate("tag",[a,this])),this.tagData(s,t),s},reCheckInvalidTags(){var t=this.settings;this.getTagElms(t.classNames.tagNotAllowed).forEach(((e,i)=>{var s=this.tagData(e),a=this.hasMaxTags(),n=this.validateTag(s),o=!0===n&&!a;if("select"==t.mode&&this.toggleScopeValidation(n),o)return s=s.__preInvalidData?s.__preInvalidData:{value:s.value},this.replaceTag(e,s);e.title=a||n}))},removeTags(t,e,i){var s,a=this.settings;if(t=t&&t instanceof HTMLElement?[t]:t instanceof Array?t:t?[t]:[this.getLastTag()],s=t.reduce(((t,e)=>{e&&"string"==typeof e&&(e=this.getTagElmByValue(e));var i=this.tagData(e);return e&&i&&!i.readonly&&t.push({node:e,idx:this.getTagIdx(i),data:this.tagData(e,{__removed:!0})}),t}),[]),i="number"==typeof i?i:this.CSSVars.tagHideTransition,"select"==a.mode&&(i=0,this.input.set.call(this)),1==s.length&&"select"!=a.mode&&s[0].node.classList.contains(a.classNames.tagNotAllowed)&&(e=!0),s.length)return a.hooks.beforeRemoveTag(s,{tagify:this}).then((()=>{function t(t){t.node.parentNode&&(t.node.parentNode.removeChild(t.node),e?a.keepInvalidTags&&this.trigger("remove",{tag:t.node,index:t.idx}):(this.trigger("remove",{tag:t.node,index:t.idx,data:t.data}),this.dropdown.refilter(),this.dropdown.position(),this.DOM.input.normalize(),a.keepInvalidTags&&this.reCheckInvalidTags()))}i&&i>10&&1==s.length?function(e){e.node.style.width=parseFloat(window.getComputedStyle(e.node).width)+"px",document.body.clientTop,e.node.classList.add(a.classNames.tagHide),setTimeout(t.bind(this),i,e)}.call(this,s[0]):s.forEach(t.bind(this)),e||(this.removeTagsFromValue(s.map((t=>t.node))),this.update(),"select"==a.mode&&this.setContentEditable(!0))})).catch((t=>{}))},removeTagsFromDOM(){[].slice.call(this.getTagElms()).forEach((t=>t.parentNode.removeChild(t)))},removeTagsFromValue(t){(t=Array.isArray(t)?t:[t]).forEach((t=>{var e=this.tagData(t),i=this.getTagIdx(e);i>-1&&this.value.splice(i,1)}))},removeAllTags(t){t=t||{},this.value=[],"mix"==this.settings.mode?this.DOM.input.innerHTML="":this.removeTagsFromDOM(),this.dropdown.refilter(),this.dropdown.position(),this.state.dropdown.visible&&setTimeout((()=>{this.DOM.input.focus()})),"select"==this.settings.mode&&(this.input.set.call(this),this.setContentEditable(!0)),this.update(t)},postUpdate(){var t=this.settings,e=t.classNames,i="mix"==t.mode?t.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value.trim():this.value.length+this.input.raw.call(this).length;this.toggleClass(e.hasMaxTags,this.value.length>=t.maxTags),this.toggleClass(e.hasNoTags,!this.value.length),this.toggleClass(e.empty,!i),"select"==t.mode&&this.toggleScopeValidation(this.value?.[0]?.__isValid)},setOriginalInputValue(t){var e=this.DOM.originalInput;this.settings.mixMode.integrated||(e.value=t,e.tagifyValue=e.value,this.setPersistedData(t,"value"))},update(t){var e=this.getInputValue();this.setOriginalInputValue(e),this.postUpdate(),this.settings.onChangeAfterBlur&&(t||{}).withoutChangeEvent||this.state.blockChangeEvent||this.triggerChangeEvent()},getInputValue(){var t=this.getCleanValue();return"mix"==this.settings.mode?this.getMixedTagsAsString(t):t.length?this.settings.originalInputValueFormat?this.settings.originalInputValueFormat(t):JSON.stringify(t):""},getCleanValue(t){return a(t||this.value,this.dataProps)},getMixedTagsAsString(){var t="",e=this,i=this.settings,s=i.originalInputValueFormat||JSON.stringify,a=i.mixTagsInterpolator;return function i(o){o.childNodes.forEach((o=>{if(1==o.nodeType){const r=e.tagData(o);if("BR"==o.tagName&&(t+="\r\n"),r&&v.call(e,o)){if(r.__removed)return;t+=a[0]+s(n(r,e.dataProps))+a[1]}else o.getAttribute("style")||["B","I","U"].includes(o.tagName)?t+=o.textContent:"DIV"!=o.tagName&&"P"!=o.tagName||(t+="\r\n",i(o))}else t+=o.textContent}))}(this.DOM.input),t}},I.prototype.removeTag=I.prototype.removeTags,I}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@yaireo/tagify/dist/tagify.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@yaireo/tagify/dist/tagify.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";:root{--tagify-dd-color-primary:rgb(53,149,246);--tagify-dd-bg-color:white;--tagify-dd-item-pad:.3em .5em}.tagify{--tags-disabled-bg:#F1F1F1;--tags-border-color:#DDD;--tags-hover-border-color:#CCC;--tags-focus-border-color:#3595f6;--tag-border-radius:3px;--tag-bg:#E5E5E5;--tag-hover:#D3E2E2;--tag-text-color:black;--tag-text-color--edit:black;--tag-pad:0.3em 0.5em;--tag-inset-shadow-size:1.1em;--tag-invalid-color:#D39494;--tag-invalid-bg:rgba(211, 148, 148, 0.5);--tag-remove-bg:rgba(211, 148, 148, 0.3);--tag-remove-btn-color:black;--tag-remove-btn-bg:none;--tag-remove-btn-bg--hover:#c77777;--input-color:inherit;--tag--min-width:1ch;--tag--max-width:auto;--tag-hide-transition:0.3s;--placeholder-color:rgba(0, 0, 0, 0.4);--placeholder-color-focus:rgba(0, 0, 0, 0.25);--loader-size:.8em;--readonly-striped:1;display:inline-flex;align-items:flex-start;flex-wrap:wrap;border:1px solid var(--tags-border-color);padding:0;line-height:0;cursor:text;outline:0;position:relative;box-sizing:border-box;transition:.1s}@keyframes tags--bump{30%{transform:scale(1.2)}}@keyframes rotateLoader{to{transform:rotate(1turn)}}.tagify:hover:not(.tagify--focus):not(.tagify--invalid){--tags-border-color:var(--tags-hover-border-color)}.tagify[disabled]{background:var(--tags-disabled-bg);filter:saturate(0);opacity:.5;pointer-events:none}.tagify[disabled].tagify--select,.tagify[readonly].tagify--select{pointer-events:none}.tagify[disabled]:not(.tagify--mix):not(.tagify--select),.tagify[readonly]:not(.tagify--mix):not(.tagify--select){cursor:default}.tagify[disabled]:not(.tagify--mix):not(.tagify--select)>.tagify__input,.tagify[readonly]:not(.tagify--mix):not(.tagify--select)>.tagify__input{visibility:hidden;width:0;margin:5px 0}.tagify[disabled]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div,.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div{padding:var(--tag-pad)}.tagify[disabled]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div::before,.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div::before{animation:readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused}@keyframes readonlyStyles{0%{background:linear-gradient(45deg,var(--tag-bg) 25%,transparent 25%,transparent 50%,var(--tag-bg) 50%,var(--tag-bg) 75%,transparent 75%,transparent) 0/5px 5px;box-shadow:none;filter:brightness(.95)}}.tagify[disabled] .tagify__tag__removeBtn,.tagify[readonly] .tagify__tag__removeBtn{display:none}.tagify--loading .tagify__input>br:last-child{display:none}.tagify--loading .tagify__input::before{content:none}.tagify--loading .tagify__input::after{content:\"\";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);min-width:0;border:3px solid;border-color:#eee #bbb #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;content:\"\"!important;margin:-2px 0 -2px .5em}.tagify--loading .tagify__input:empty::after{margin-left:0}.tagify+input,.tagify+textarea{position:absolute!important;left:-9999em!important;transform:scale(0)!important}.tagify__tag{display:inline-flex;align-items:center;margin:5px 0 5px 5px;position:relative;z-index:1;outline:0;line-height:normal;cursor:default;transition:.13s ease-out}.tagify__tag>div{vertical-align:top;box-sizing:border-box;max-width:100%;padding:var(--tag-pad);color:var(--tag-text-color);line-height:inherit;border-radius:var(--tag-border-radius);white-space:nowrap;transition:.13s ease-out}.tagify__tag>div>*{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:top;min-width:var(--tag--min-width);max-width:var(--tag--max-width);transition:.8s ease,.1s color}.tagify__tag>div>[contenteditable]{outline:0;-webkit-user-select:text;user-select:text;cursor:text;margin:-2px;padding:2px;max-width:350px}.tagify__tag>div::before{content:\"\";position:absolute;border-radius:inherit;inset:var(--tag-bg-inset,0);z-index:-1;pointer-events:none;transition:120ms ease;animation:tags--bump .3s ease-out 1;box-shadow:0 0 0 var(--tag-inset-shadow-size) var(--tag-bg) inset}.tagify__tag:focus div::before,.tagify__tag:hover:not([readonly]) div::before{--tag-bg-inset:-2.5px;--tag-bg:var(--tag-hover)}.tagify__tag--loading{pointer-events:none}.tagify__tag--loading .tagify__tag__removeBtn{display:none}.tagify__tag--loading::after{--loader-size:.4em;content:\"\";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);min-width:0;border:3px solid;border-color:#eee #bbb #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;margin:0 .5em 0 -.1em}.tagify__tag--flash div::before{animation:none}.tagify__tag--hide{width:0!important;padding-left:0;padding-right:0;margin-left:0;margin-right:0;opacity:0;transform:scale(0);transition:var(--tag-hide-transition);pointer-events:none}.tagify__tag--hide>div>*{white-space:nowrap}.tagify__tag.tagify--noAnim>div::before{animation:none}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div>span{opacity:.5}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div::before{--tag-bg:var(--tag-invalid-bg);transition:.2s}.tagify__tag[readonly] .tagify__tag__removeBtn{display:none}.tagify__tag[readonly]>div::before{animation:readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused}@keyframes readonlyStyles{0%{background:linear-gradient(45deg,var(--tag-bg) 25%,transparent 25%,transparent 50%,var(--tag-bg) 50%,var(--tag-bg) 75%,transparent 75%,transparent) 0/5px 5px;box-shadow:none;filter:brightness(.95)}}.tagify__tag--editable>div{color:var(--tag-text-color--edit)}.tagify__tag--editable>div::before{box-shadow:0 0 0 2px var(--tag-hover) inset!important}.tagify__tag--editable>.tagify__tag__removeBtn{pointer-events:none}.tagify__tag--editable>.tagify__tag__removeBtn::after{opacity:0;transform:translateX(100%) translateX(5px)}.tagify__tag--editable.tagify--invalid>div::before{box-shadow:0 0 0 2px var(--tag-invalid-color) inset!important}.tagify__tag__removeBtn{order:5;display:inline-flex;align-items:center;justify-content:center;border-radius:50px;cursor:pointer;font:14px/1 Arial;background:var(--tag-remove-btn-bg);color:var(--tag-remove-btn-color);width:14px;height:14px;margin-right:4.6666666667px;margin-left:auto;overflow:hidden;transition:.2s ease-out}.tagify__tag__removeBtn::after{content:\"×\";transition:.3s,color 0s}.tagify__tag__removeBtn:hover{color:#fff;background:var(--tag-remove-btn-bg--hover)}.tagify__tag__removeBtn:hover+div>span{opacity:.5}.tagify__tag__removeBtn:hover+div::before{box-shadow:0 0 0 var(--tag-inset-shadow-size) var(--tag-remove-bg,rgba(211,148,148,.3)) inset!important;transition:box-shadow .2s}.tagify:not(.tagify--mix) .tagify__input br{display:none}.tagify:not(.tagify--mix) .tagify__input *{display:inline;white-space:nowrap}.tagify__input{flex-grow:1;display:inline-block;min-width:110px;margin:5px;padding:var(--tag-pad);line-height:normal;position:relative;white-space:pre-wrap;color:var(--input-color);box-sizing:inherit}.tagify__input:empty::before{position:static}.tagify__input:focus{outline:0}.tagify__input:focus::before{transition:.2s ease-out;opacity:0;transform:translatex(6px)}@supports (-ms-ime-align:auto){.tagify__input:focus::before{display:none}}.tagify__input:focus:empty::before{transition:.2s ease-out;opacity:1;transform:none;color:rgba(0,0,0,.25);color:var(--placeholder-color-focus)}@-moz-document url-prefix(){.tagify__input:focus:empty::after{display:none}}.tagify__input::before{content:attr(data-placeholder);height:1em;line-height:1em;margin:auto 0;z-index:1;color:var(--placeholder-color);white-space:nowrap;pointer-events:none;opacity:0;position:absolute}.tagify__input::after{content:attr(data-suggest);display:inline-block;vertical-align:middle;position:absolute;min-width:calc(100% - 1.5em);text-overflow:ellipsis;overflow:hidden;white-space:pre;color:var(--tag-text-color);opacity:.3;pointer-events:none;max-width:100px}.tagify__input .tagify__tag{margin:0 1px}.tagify--mix{display:block}.tagify--mix .tagify__input{padding:5px;margin:0;width:100%;height:100%;line-height:1.5;display:block}.tagify--mix .tagify__input::before{height:auto;display:none;line-height:inherit}.tagify--mix .tagify__input::after{content:none}.tagify--select::after{content:\">\";opacity:.5;position:absolute;top:50%;right:0;bottom:0;font:16px monospace;line-height:8px;height:8px;pointer-events:none;transform:translate(-150%,-50%) scaleX(1.2) rotate(90deg);transition:.2s ease-in-out}.tagify--select[aria-expanded=true]::after{transform:translate(-150%,-50%) rotate(270deg) scaleY(1.2)}.tagify--select .tagify__tag{position:absolute;top:0;right:1.8em;bottom:0}.tagify--select .tagify__tag div{display:none}.tagify--select .tagify__input{width:100%}.tagify--empty .tagify__input::before{transition:.2s ease-out;opacity:1;transform:none;display:inline-block;width:auto}.tagify--mix .tagify--empty .tagify__input::before{display:inline-block}.tagify--focus{--tags-border-color:var(--tags-focus-border-color);transition:0s}.tagify--invalid{--tags-border-color:#D39494}.tagify__dropdown{position:absolute;z-index:9999;transform:translateY(1px);overflow:hidden}.tagify__dropdown[placement=top]{margin-top:0;transform:translateY(-100%)}.tagify__dropdown[placement=top] .tagify__dropdown__wrapper{border-top-width:1.1px;border-bottom-width:0}.tagify__dropdown[position=text]{box-shadow:0 0 0 3px rgba(var(--tagify-dd-color-primary),.1);font-size:.9em}.tagify__dropdown[position=text] .tagify__dropdown__wrapper{border-width:1px}.tagify__dropdown__wrapper{max-height:300px;overflow:auto;overflow-x:hidden;background:var(--tagify-dd-bg-color);border:1px solid;border-color:var(--tagify-dd-color-primary);border-bottom-width:1.5px;border-top-width:0;box-shadow:0 2px 4px -2px rgba(0,0,0,.2);transition:.25s cubic-bezier(0,1,.5,1)}.tagify__dropdown__header:empty{display:none}.tagify__dropdown__footer{display:inline-block;margin-top:.5em;padding:var(--tagify-dd-item-pad);font-size:.7em;font-style:italic;opacity:.5}.tagify__dropdown__footer:empty{display:none}.tagify__dropdown--initial .tagify__dropdown__wrapper{max-height:20px;transform:translateY(-1em)}.tagify__dropdown--initial[placement=top] .tagify__dropdown__wrapper{transform:translateY(2em)}.tagify__dropdown__item{box-sizing:border-box;padding:var(--tagify-dd-item-pad);margin:1px;cursor:pointer;border-radius:2px;position:relative;outline:0;max-height:60px;max-width:100%}.tagify__dropdown__item--active{background:var(--tagify-dd-color-primary);color:#fff}.tagify__dropdown__item:active{filter:brightness(105%)}.tagify__dropdown__item--hidden{padding-top:0;padding-bottom:0;margin:0 1px;pointer-events:none;overflow:hidden;max-height:0;transition:var(--tagify-dd-item--hidden-duration,.3s)!important}.tagify__dropdown__item--hidden>*{transform:translateY(-100%);opacity:0;transition:inherit}", "",{"version":3,"sources":["webpack://./node_modules/@yaireo/tagify/dist/tagify.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";:root{--tagify-dd-color-primary:rgb(53,149,246);--tagify-dd-bg-color:white;--tagify-dd-item-pad:.3em .5em}.tagify{--tags-disabled-bg:#F1F1F1;--tags-border-color:#DDD;--tags-hover-border-color:#CCC;--tags-focus-border-color:#3595f6;--tag-border-radius:3px;--tag-bg:#E5E5E5;--tag-hover:#D3E2E2;--tag-text-color:black;--tag-text-color--edit:black;--tag-pad:0.3em 0.5em;--tag-inset-shadow-size:1.1em;--tag-invalid-color:#D39494;--tag-invalid-bg:rgba(211, 148, 148, 0.5);--tag-remove-bg:rgba(211, 148, 148, 0.3);--tag-remove-btn-color:black;--tag-remove-btn-bg:none;--tag-remove-btn-bg--hover:#c77777;--input-color:inherit;--tag--min-width:1ch;--tag--max-width:auto;--tag-hide-transition:0.3s;--placeholder-color:rgba(0, 0, 0, 0.4);--placeholder-color-focus:rgba(0, 0, 0, 0.25);--loader-size:.8em;--readonly-striped:1;display:inline-flex;align-items:flex-start;flex-wrap:wrap;border:1px solid var(--tags-border-color);padding:0;line-height:0;cursor:text;outline:0;position:relative;box-sizing:border-box;transition:.1s}@keyframes tags--bump{30%{transform:scale(1.2)}}@keyframes rotateLoader{to{transform:rotate(1turn)}}.tagify:hover:not(.tagify--focus):not(.tagify--invalid){--tags-border-color:var(--tags-hover-border-color)}.tagify[disabled]{background:var(--tags-disabled-bg);filter:saturate(0);opacity:.5;pointer-events:none}.tagify[disabled].tagify--select,.tagify[readonly].tagify--select{pointer-events:none}.tagify[disabled]:not(.tagify--mix):not(.tagify--select),.tagify[readonly]:not(.tagify--mix):not(.tagify--select){cursor:default}.tagify[disabled]:not(.tagify--mix):not(.tagify--select)>.tagify__input,.tagify[readonly]:not(.tagify--mix):not(.tagify--select)>.tagify__input{visibility:hidden;width:0;margin:5px 0}.tagify[disabled]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div,.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div{padding:var(--tag-pad)}.tagify[disabled]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div::before,.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div::before{animation:readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused}@keyframes readonlyStyles{0%{background:linear-gradient(45deg,var(--tag-bg) 25%,transparent 25%,transparent 50%,var(--tag-bg) 50%,var(--tag-bg) 75%,transparent 75%,transparent) 0/5px 5px;box-shadow:none;filter:brightness(.95)}}.tagify[disabled] .tagify__tag__removeBtn,.tagify[readonly] .tagify__tag__removeBtn{display:none}.tagify--loading .tagify__input>br:last-child{display:none}.tagify--loading .tagify__input::before{content:none}.tagify--loading .tagify__input::after{content:\"\";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);min-width:0;border:3px solid;border-color:#eee #bbb #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;content:\"\"!important;margin:-2px 0 -2px .5em}.tagify--loading .tagify__input:empty::after{margin-left:0}.tagify+input,.tagify+textarea{position:absolute!important;left:-9999em!important;transform:scale(0)!important}.tagify__tag{display:inline-flex;align-items:center;margin:5px 0 5px 5px;position:relative;z-index:1;outline:0;line-height:normal;cursor:default;transition:.13s ease-out}.tagify__tag>div{vertical-align:top;box-sizing:border-box;max-width:100%;padding:var(--tag-pad);color:var(--tag-text-color);line-height:inherit;border-radius:var(--tag-border-radius);white-space:nowrap;transition:.13s ease-out}.tagify__tag>div>*{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:top;min-width:var(--tag--min-width);max-width:var(--tag--max-width);transition:.8s ease,.1s color}.tagify__tag>div>[contenteditable]{outline:0;-webkit-user-select:text;user-select:text;cursor:text;margin:-2px;padding:2px;max-width:350px}.tagify__tag>div::before{content:\"\";position:absolute;border-radius:inherit;inset:var(--tag-bg-inset,0);z-index:-1;pointer-events:none;transition:120ms ease;animation:tags--bump .3s ease-out 1;box-shadow:0 0 0 var(--tag-inset-shadow-size) var(--tag-bg) inset}.tagify__tag:focus div::before,.tagify__tag:hover:not([readonly]) div::before{--tag-bg-inset:-2.5px;--tag-bg:var(--tag-hover)}.tagify__tag--loading{pointer-events:none}.tagify__tag--loading .tagify__tag__removeBtn{display:none}.tagify__tag--loading::after{--loader-size:.4em;content:\"\";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);min-width:0;border:3px solid;border-color:#eee #bbb #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;margin:0 .5em 0 -.1em}.tagify__tag--flash div::before{animation:none}.tagify__tag--hide{width:0!important;padding-left:0;padding-right:0;margin-left:0;margin-right:0;opacity:0;transform:scale(0);transition:var(--tag-hide-transition);pointer-events:none}.tagify__tag--hide>div>*{white-space:nowrap}.tagify__tag.tagify--noAnim>div::before{animation:none}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div>span{opacity:.5}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div::before{--tag-bg:var(--tag-invalid-bg);transition:.2s}.tagify__tag[readonly] .tagify__tag__removeBtn{display:none}.tagify__tag[readonly]>div::before{animation:readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused}@keyframes readonlyStyles{0%{background:linear-gradient(45deg,var(--tag-bg) 25%,transparent 25%,transparent 50%,var(--tag-bg) 50%,var(--tag-bg) 75%,transparent 75%,transparent) 0/5px 5px;box-shadow:none;filter:brightness(.95)}}.tagify__tag--editable>div{color:var(--tag-text-color--edit)}.tagify__tag--editable>div::before{box-shadow:0 0 0 2px var(--tag-hover) inset!important}.tagify__tag--editable>.tagify__tag__removeBtn{pointer-events:none}.tagify__tag--editable>.tagify__tag__removeBtn::after{opacity:0;transform:translateX(100%) translateX(5px)}.tagify__tag--editable.tagify--invalid>div::before{box-shadow:0 0 0 2px var(--tag-invalid-color) inset!important}.tagify__tag__removeBtn{order:5;display:inline-flex;align-items:center;justify-content:center;border-radius:50px;cursor:pointer;font:14px/1 Arial;background:var(--tag-remove-btn-bg);color:var(--tag-remove-btn-color);width:14px;height:14px;margin-right:4.6666666667px;margin-left:auto;overflow:hidden;transition:.2s ease-out}.tagify__tag__removeBtn::after{content:\"×\";transition:.3s,color 0s}.tagify__tag__removeBtn:hover{color:#fff;background:var(--tag-remove-btn-bg--hover)}.tagify__tag__removeBtn:hover+div>span{opacity:.5}.tagify__tag__removeBtn:hover+div::before{box-shadow:0 0 0 var(--tag-inset-shadow-size) var(--tag-remove-bg,rgba(211,148,148,.3)) inset!important;transition:box-shadow .2s}.tagify:not(.tagify--mix) .tagify__input br{display:none}.tagify:not(.tagify--mix) .tagify__input *{display:inline;white-space:nowrap}.tagify__input{flex-grow:1;display:inline-block;min-width:110px;margin:5px;padding:var(--tag-pad);line-height:normal;position:relative;white-space:pre-wrap;color:var(--input-color);box-sizing:inherit}.tagify__input:empty::before{position:static}.tagify__input:focus{outline:0}.tagify__input:focus::before{transition:.2s ease-out;opacity:0;transform:translatex(6px)}@supports (-ms-ime-align:auto){.tagify__input:focus::before{display:none}}.tagify__input:focus:empty::before{transition:.2s ease-out;opacity:1;transform:none;color:rgba(0,0,0,.25);color:var(--placeholder-color-focus)}@-moz-document url-prefix(){.tagify__input:focus:empty::after{display:none}}.tagify__input::before{content:attr(data-placeholder);height:1em;line-height:1em;margin:auto 0;z-index:1;color:var(--placeholder-color);white-space:nowrap;pointer-events:none;opacity:0;position:absolute}.tagify__input::after{content:attr(data-suggest);display:inline-block;vertical-align:middle;position:absolute;min-width:calc(100% - 1.5em);text-overflow:ellipsis;overflow:hidden;white-space:pre;color:var(--tag-text-color);opacity:.3;pointer-events:none;max-width:100px}.tagify__input .tagify__tag{margin:0 1px}.tagify--mix{display:block}.tagify--mix .tagify__input{padding:5px;margin:0;width:100%;height:100%;line-height:1.5;display:block}.tagify--mix .tagify__input::before{height:auto;display:none;line-height:inherit}.tagify--mix .tagify__input::after{content:none}.tagify--select::after{content:\">\";opacity:.5;position:absolute;top:50%;right:0;bottom:0;font:16px monospace;line-height:8px;height:8px;pointer-events:none;transform:translate(-150%,-50%) scaleX(1.2) rotate(90deg);transition:.2s ease-in-out}.tagify--select[aria-expanded=true]::after{transform:translate(-150%,-50%) rotate(270deg) scaleY(1.2)}.tagify--select .tagify__tag{position:absolute;top:0;right:1.8em;bottom:0}.tagify--select .tagify__tag div{display:none}.tagify--select .tagify__input{width:100%}.tagify--empty .tagify__input::before{transition:.2s ease-out;opacity:1;transform:none;display:inline-block;width:auto}.tagify--mix .tagify--empty .tagify__input::before{display:inline-block}.tagify--focus{--tags-border-color:var(--tags-focus-border-color);transition:0s}.tagify--invalid{--tags-border-color:#D39494}.tagify__dropdown{position:absolute;z-index:9999;transform:translateY(1px);overflow:hidden}.tagify__dropdown[placement=top]{margin-top:0;transform:translateY(-100%)}.tagify__dropdown[placement=top] .tagify__dropdown__wrapper{border-top-width:1.1px;border-bottom-width:0}.tagify__dropdown[position=text]{box-shadow:0 0 0 3px rgba(var(--tagify-dd-color-primary),.1);font-size:.9em}.tagify__dropdown[position=text] .tagify__dropdown__wrapper{border-width:1px}.tagify__dropdown__wrapper{max-height:300px;overflow:auto;overflow-x:hidden;background:var(--tagify-dd-bg-color);border:1px solid;border-color:var(--tagify-dd-color-primary);border-bottom-width:1.5px;border-top-width:0;box-shadow:0 2px 4px -2px rgba(0,0,0,.2);transition:.25s cubic-bezier(0,1,.5,1)}.tagify__dropdown__header:empty{display:none}.tagify__dropdown__footer{display:inline-block;margin-top:.5em;padding:var(--tagify-dd-item-pad);font-size:.7em;font-style:italic;opacity:.5}.tagify__dropdown__footer:empty{display:none}.tagify__dropdown--initial .tagify__dropdown__wrapper{max-height:20px;transform:translateY(-1em)}.tagify__dropdown--initial[placement=top] .tagify__dropdown__wrapper{transform:translateY(2em)}.tagify__dropdown__item{box-sizing:border-box;padding:var(--tagify-dd-item-pad);margin:1px;cursor:pointer;border-radius:2px;position:relative;outline:0;max-height:60px;max-width:100%}.tagify__dropdown__item--active{background:var(--tagify-dd-color-primary);color:#fff}.tagify__dropdown__item:active{filter:brightness(105%)}.tagify__dropdown__item--hidden{padding-top:0;padding-bottom:0;margin:0 1px;pointer-events:none;overflow:hidden;max-height:0;transition:var(--tagify-dd-item--hidden-duration,.3s)!important}.tagify__dropdown__item--hidden>*{transform:translateY(-100%);opacity:0;transition:inherit}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* list icon */\n/* forest icon */\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    font-family: \"Montserrat\", sans-serif;\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    font-size: 4rem;\n}\n\n:root {\n    --default-font: \"Montserrat\", sans-serif;\n    --header-bg-colour: #7bb2a3;\n    --navbar-bg-colour: #415d2e;\n    --content-bg-colour: #fff;\n    --project-sign-bg-colour: #a05824;\n\n    --header-height: 100px;\n    --header-width: 100vw;\n}\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: var(--header-width);\n    height: var(--header-height);\n    font-family: var(--default-font);\n    background-color: var(--header-bg-colour);\n}\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    width: 100vw;\n    height: calc(100vh - var(--header-height));\n}\n\n#todoItemContainer {\n    background-color: var(--content-bg-colour);\n    /* max-width: 80%; */\n    display: flex;\n    flex-direction: column;\n    margin-left: 20px;\n}\n\n.today--title__heading {\n    font-size: 1.8rem;\n    font-weight: bolder;\n}\n\n.today--title__date {\n    font-size: 1rem;\n    opacity: 0.5;\n    margin-left: 5px;\n}\n\n.project--heading__container {\n    display: flex;\n    width: 100%;\n}\n\n.newProjectBtn, .newItemBtn {\n    /* background-color: greenyellow; */\n    margin: 0;\n    margin-bottom: 10px;\n    padding: 0;\n}\n\n.todoItem.active {\n    border: 1px solid black;\n}\n\n.todoItem input[type='text'] {\n    font-size: 1rem;\n    min-width: 60vw;\n    border: none;\n    border-bottom: 1px solid black;\n}\n\n/* Styling Form Inputs */\ninput[type='text']::placeholder {\n    color: grey;\n    opacity: 0.5;\n}\n\n.todoItem--priority__label {\n    position: fixed;\n    width: 60px;\n    text-align: left;\n    transform: translate(-60px, 2px);\n}\n\n.todoItem--priority__text {\n    opacity: 0.6;\n    color: black;\n}\n\n.high {\n    background-color: orange;\n}\n\n.medium {\n    background-color: yellow;\n}\n\n.low {\n    background-color: lightgreen;\n}\n\n.noneSelected {\n    display: none;\n}\n\n.priority--dropdown option {\n   color: red;\n   background-color: red;\n}\n\n.itemInfo {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    row-gap: 5px;\n}\n\n.itemInfo.contracted {\n    padding: 0;\n    row-gap: 0;\n}\n\n.expanded {\n    display: flex;\n}\n\n.hidden {\n    display: none;\n}\n\n.expanded {\n    animation: open 0.2s ease-out forwards;\n}\n\n.contracted {\n    animation: close 0.2s ease-in forwards;\n}\n\n@keyframes open {\n    0% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n    100% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n}\n\n@keyframes close {\n    0% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n    100% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n}\n\n/* Save Button and Message */\n\n.saveItemBtn {\n    width: 150px;\n}\n\n.saveBtnContainer,\n.messageContainer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.saveMessage {\n    color: green;\n    font-size: .8rem;\n}\n\n/* Navbar & Navbar Contents */\n\n.navbar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--navbar-bg-colour);\n}\n\n.navbar--action__button {\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    gap: 10px;\n}\n\n.navbar--action__button img {\n    width: 32px;\n}\n\n.navbar--action__button span {\n    font-family: \"Montserrat\";\n    font-size: .9rem;\n    color: white;\n}\n\n.navbar--actions__bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n.navbar--projects__links {\n    padding: 0;\n}\n\n.navbar--projects__links > li, a, button {\n    font-family: var(--default-font);\n    font-weight: 500;\n    font-size: 16px;\n    text-decoration: none;\n}\n\n.navbar--projects__title {\n    font-family: var(--default-font);\n    color: white;\n    opacity: 0.8;\n}\n\n.navbar li {\n    list-style-type: none;\n}\n\n.project--signpost a {\n    color: white;\n    font-weight: bolder;\n}\n\n.project--signpost {\n    width: 140px;\n    height: 40px;\n    position: relative;\n    background: var(--project-sign-bg-colour);\n    border: 1px solid black;\n    text-indent: 10%;\n    line-height: 35px;\n}\n\n.project--signpost:before {\n    content: \"\";\n    position: absolute;\n    right: -20px;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    border-left: 20px solid var(--project-sign-bg-colour);\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n}\n/* New Project Modal Form */\n.modalContainer {\n    background-color: rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    transition: opacity 0.3s ease;\n}\n\n.modal {\n    background-color: #fff;\n    padding: 30px 50px;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    width: 300px;\n    max-width: 100%;\n    text-align: left;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n\n.modalContainer.showModal {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.project-modal--heading {\n    text-align: left;\n    margin-bottom: 15px;\n}\n\n.project-modal--details {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-bottom: 10px;\n}\n\n.project--modal__buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project--modal__buttons button {\n    padding: 5px 15px;\n    border-radius: 8px;\n    border: none;\n    font-family: var(--default-font);\n}\n\n#submitModal {\n    background-color: var(--navbar-bg-colour);\n    color: white;\n    margin-left: 10px;\n}\n\n#submitModal:hover {\n    background-color: #344b24;\n}\n\n#closeModal {\n    background-color: lightgray;\n}\n\n#closeModal:hover {\n    background-color: rgb(171, 168, 168);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');\n/* list icon */\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\n/* forest icon */\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    font-family: \"Montserrat\", sans-serif;\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    font-size: 4rem;\n}\n\n:root {\n    --default-font: \"Montserrat\", sans-serif;\n    --header-bg-colour: #7bb2a3;\n    --navbar-bg-colour: #415d2e;\n    --content-bg-colour: #fff;\n    --project-sign-bg-colour: #a05824;\n\n    --header-height: 100px;\n    --header-width: 100vw;\n}\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: var(--header-width);\n    height: var(--header-height);\n    font-family: var(--default-font);\n    background-color: var(--header-bg-colour);\n}\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    width: 100vw;\n    height: calc(100vh - var(--header-height));\n}\n\n#todoItemContainer {\n    background-color: var(--content-bg-colour);\n    /* max-width: 80%; */\n    display: flex;\n    flex-direction: column;\n    margin-left: 20px;\n}\n\n.today--title__heading {\n    font-size: 1.8rem;\n    font-weight: bolder;\n}\n\n.today--title__date {\n    font-size: 1rem;\n    opacity: 0.5;\n    margin-left: 5px;\n}\n\n.project--heading__container {\n    display: flex;\n    width: 100%;\n}\n\n.newProjectBtn, .newItemBtn {\n    /* background-color: greenyellow; */\n    margin: 0;\n    margin-bottom: 10px;\n    padding: 0;\n}\n\n.todoItem.active {\n    border: 1px solid black;\n}\n\n.todoItem input[type='text'] {\n    font-size: 1rem;\n    min-width: 60vw;\n    border: none;\n    border-bottom: 1px solid black;\n}\n\n/* Styling Form Inputs */\ninput[type='text']::placeholder {\n    color: grey;\n    opacity: 0.5;\n}\n\n.todoItem--priority__label {\n    position: fixed;\n    width: 60px;\n    text-align: left;\n    transform: translate(-60px, 2px);\n}\n\n.todoItem--priority__text {\n    opacity: 0.6;\n    color: black;\n}\n\n.high {\n    background-color: orange;\n}\n\n.medium {\n    background-color: yellow;\n}\n\n.low {\n    background-color: lightgreen;\n}\n\n.noneSelected {\n    display: none;\n}\n\n.priority--dropdown option {\n   color: red;\n   background-color: red;\n}\n\n.itemInfo {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    row-gap: 5px;\n}\n\n.itemInfo.contracted {\n    padding: 0;\n    row-gap: 0;\n}\n\n.expanded {\n    display: flex;\n}\n\n.hidden {\n    display: none;\n}\n\n.expanded {\n    animation: open 0.2s ease-out forwards;\n}\n\n.contracted {\n    animation: close 0.2s ease-in forwards;\n}\n\n@keyframes open {\n    0% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n    100% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n}\n\n@keyframes close {\n    0% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n    100% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n}\n\n/* Save Button and Message */\n\n.saveItemBtn {\n    width: 150px;\n}\n\n.saveBtnContainer,\n.messageContainer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.saveMessage {\n    color: green;\n    font-size: .8rem;\n}\n\n/* Navbar & Navbar Contents */\n\n.navbar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--navbar-bg-colour);\n}\n\n.navbar--action__button {\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    gap: 10px;\n}\n\n.navbar--action__button img {\n    width: 32px;\n}\n\n.navbar--action__button span {\n    font-family: \"Montserrat\";\n    font-size: .9rem;\n    color: white;\n}\n\n.navbar--actions__bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n.navbar--projects__links {\n    padding: 0;\n}\n\n.navbar--projects__links > li, a, button {\n    font-family: var(--default-font);\n    font-weight: 500;\n    font-size: 16px;\n    text-decoration: none;\n}\n\n.navbar--projects__title {\n    font-family: var(--default-font);\n    color: white;\n    opacity: 0.8;\n}\n\n.navbar li {\n    list-style-type: none;\n}\n\n.project--signpost a {\n    color: white;\n    font-weight: bolder;\n}\n\n.project--signpost {\n    width: 140px;\n    height: 40px;\n    position: relative;\n    background: var(--project-sign-bg-colour);\n    border: 1px solid black;\n    text-indent: 10%;\n    line-height: 35px;\n}\n\n.project--signpost:before {\n    content: \"\";\n    position: absolute;\n    right: -20px;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    border-left: 20px solid var(--project-sign-bg-colour);\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n}\n/* New Project Modal Form */\n.modalContainer {\n    background-color: rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    transition: opacity 0.3s ease;\n}\n\n.modal {\n    background-color: #fff;\n    padding: 30px 50px;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    width: 300px;\n    max-width: 100%;\n    text-align: left;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n\n.modalContainer.showModal {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.project-modal--heading {\n    text-align: left;\n    margin-bottom: 15px;\n}\n\n.project-modal--details {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-bottom: 10px;\n}\n\n.project--modal__buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project--modal__buttons button {\n    padding: 5px 15px;\n    border-radius: 8px;\n    border: none;\n    font-family: var(--default-font);\n}\n\n#submitModal {\n    background-color: var(--navbar-bg-colour);\n    color: white;\n    margin-left: 10px;\n}\n\n#submitModal:hover {\n    background-color: #344b24;\n}\n\n#closeModal {\n    background-color: lightgray;\n}\n\n#closeModal:hover {\n    background-color: rgb(171, 168, 168);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function (pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addYears/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addYears/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addYears)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * 12);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subYears/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subYears/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subYears)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addYears_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addYears/index.js */ "./node_modules/date-fns/esm/addYears/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addYears_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/@yaireo/tagify/dist/tagify.css":
/*!*****************************************************!*\
  !*** ./node_modules/@yaireo/tagify/dist/tagify.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_tagify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js!./tagify.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@yaireo/tagify/dist/tagify.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_tagify_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_tagify_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_tagify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_tagify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildProject)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


class Project {
    notes;
    todoItems = {};

    constructor(name) {
        this.name = name;
    }

    // Convert todoItem Objects to JSON
    selectItemProperties() {
        const stringObjects = Object.values(this.todoItems).map(item => {
            const finalObj = {};
            
            const selectedProperties = (
                ({ title, notes, priority, checklist, date, dueDate, _tags, completion }) =>
                ({ title, notes, priority, checklist, date, dueDate, _tags, completion })
            )(item);

            finalObj[item.uuid] = selectedProperties;
            return finalObj;
        });
        return stringObjects;
    }

    populateLocalStorage() {
        /* 
        Keys: this.name
        Values: todoItems object
        */
        const objectMerge = {}
        const arrayOfObjects = this.selectItemProperties();

        for (const o of arrayOfObjects) {
            Object.assign(objectMerge, o);
        }

        localStorage.setItem(this.name, JSON.stringify(objectMerge));
    }

    _reconstructTodoItemObjects(_parse) {
        // clear current todo items in project
        this.todoItems = {};
        for (const [key, value] of Object.entries(_parse)) {
            const item = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.title);

            // update remaining fields using setters
            item.setNotes(value.notes);
            item.setPriority(value.priority);
            item.setChecklist(value.checklist);
            item.setDate(value.date);
            item.setDueDate(value.dueDate);
            item.setTags(value._tags);
            item.setCompletion(value.completion);
            item.setUUID(key);
            // assign reconstructed object back to instance property
            this.todoItems[key] = item;
        }
        // console.log(this.todoItems);
    }

    retrieveLocalStorage() {
        const parse = JSON.parse(localStorage.getItem(this.name));
        // console.log(parse);
        this._reconstructTodoItemObjects(parse);
    }

    addItem(title) {
        const item = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title);
        // this.todoItems.push(item);
        this.todoItems[item.uuid] = item;
    }

    deleteItem(uuid) {
        if(this.todoItems[uuid]) {
            delete this.todoItems[uuid];

            let storedItems = JSON.parse(localStorage.getItem(this.name));
            delete storedItems[uuid];
            localStorage.setItem(this.name, JSON.stringify(storedItems));
        } else {
            console.log(`Item: ${uuid} does not exist!`);
        }
    }

    get todoItems() {
        return this._todoItems;
    }

    /**
     * @param {string} text
     */
    set notes(text) {
        this._notes = text;
    }

    getUniqueTags() {
        const tags = Object.values(this.todoItems)
            .map(item => item.tags)
            .flat();

        const uniqueArray = Array.from(new Set(tags));
        return uniqueArray;
    }
}

function buildProject(name) {
    const p = new Project(name);
    return p;
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoItemFactory)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const tagMixin = {
    getTags () {
        return this._tags;
    },

    updateTags () {
        if(this.tagify.value) {
            this._tags = this.tagify.value.map(x => x.value);
        }
    },

    addTagifyTag (t) {
        this.tagify.addTags(t);
    },

    // Used only to load tags for mock todoItems in project.js
    _appendTag () {
        for (const [_, val] of Object.entries(arguments)) {
            if(typeof(val) == 'string') {
                this._tags.push(val);
            }
            else {
                console.log(`Non-string argument detected: ${val}`);
            }
        }
    },
}

const checklistMixin = {
    printChecklist () {
        console.log(this.checklist);
    },
    addTask(task) {
        this.checklist.push(task);
    }
}

const setterMixin = {
    setTitle (title) {
        this.title = title;
    },

    setNotes (notes) {
        this.notes = notes;
    },

    setChecklist (checklist) {
        this.checklist = checklist;
    },

    setDate (date) {
        this.date = date;
    },

    setDueDate (dueDate) {
        this.dueDate = dueDate;
    },

    setTags (tags) {
        this._tags = tags;
    },

    setCompletion (completion) {
        this.completion = completion;
    },

    setUUID (id) {
        this.uuid = id;
    },

    setPriority (priority) {
        this.priority = priority;
    }
}

// functions used to logging and debugging purposes
const debugMixin = {
    printSummaryInObject () {
        return `
            Title: ${this.title},
            Date: ${this.date},
            Due Date: ${this.dueDate},
            Tags: ${this._tags},
            Notes: ${this.notes},
            Checklist: ${this._checklist},
            Completion: ${this.completion},
            UUID: ${this.uuid}
        `;
    }
}

// using a closure to ensure a new itemTags Array is created every time this is called
const getDefaultArgs = function() {
    return {
        itemDate: null, 
        itemDueDate: null, 
        itemTags: new Array(),
        itemTagify: null,
        itemNotes: null,
        itemPriority: null,
        itemChecklist: new Array(),
        itemCompletion: false,
    }
}

// Responsibility: return/construct a todoItem object, which represents a single todo item
function todoItemFactory(itemTitle, {...def} = getDefaultArgs()) {
    const title = itemTitle;
    const date = def.itemDate;
    const dueDate = def.itemDueDate;
    const tags = def.itemTags;
    const tagify = def.itemTagify;
    const notes = def.itemNotes;
    const priority = def.itemPriority;
    const _checklist = def.itemChecklist;
    let completion = def.itemCompletion;

    const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const printSummary = () => {
        return `
            Title: ${title},
            Date: ${date},
            Due Date: ${dueDate},
            Tags: ${tags},
            Notes: ${notes},
            Checklist: ${_checklist},
            Completion: ${completion},
            UUID: ${uuid}
        `;
    }

    const toggleCompletion = function() {
        if(this.completion) {
            this.completion = false;
        } else {
            this.completion = true;
        }
    }

    const factoryMethods = {
        printSummary,
        toggleCompletion
    }

    // copies "tag" properties into "item" properties
    let proto = Object.assign(tagMixin, checklistMixin, setterMixin, debugMixin);  // (targetObj, sourceObj)
    
    // creates a new object, using an existing object as its prototype of newly created object
    let todoItemObj = Object.create(proto);
    
    // "mix-in" methods defined in factory function
    todoItemObj = Object.assign(todoItemObj, factoryMethods);

    todoItemObj.title = title;
    todoItemObj.date = date;
    todoItemObj.dueDate = dueDate;
    todoItemObj._tags = tags;
    todoItemObj.tagify = tagify;
    todoItemObj.checklist = _checklist;
    todoItemObj.completion = completion;
    todoItemObj.uuid = uuid;
    todoItemObj.priority = priority;

    return todoItemObj;
}


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addYears/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subYears/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yaireo/tagify */ "./node_modules/@yaireo/tagify/dist/tagify.min.js");
/* harmony import */ var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yaireo_tagify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yaireo_tagify_dist_tagify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yaireo/tagify/dist/tagify.css */ "./node_modules/@yaireo/tagify/dist/tagify.css");
/* harmony import */ var _images_plant_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/plant.png */ "./src/images/plant.png");
/* harmony import */ var _images_forest_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/forest.png */ "./src/images/forest.png");
/* harmony import */ var _images_beaver_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/beaver.png */ "./src/images/beaver.png");
/* harmony import */ var _images_lumberjacking_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/lumberjacking.png */ "./src/images/lumberjacking.png");
/* harmony import */ var _images_sunrise_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sunrise.png */ "./src/images/sunrise.png");

// Import Tagify



// Images






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function view() {
    let elementID = 0;
    let config = null;

    function bindConfiguration() {
        config = this.config;
        // console.log(config);
    }

    function createElement(elementName, className=null) {
        const element = document.createElement(elementName);
        
        if(className) {    
            element.className = className;
            return element;
        }
        else {
            return document.createElement(elementName);
        }
    }

    function createNavAction(src, text, listenerFunc) {
        const actionDiv = document.createElement('a');
        const actionIcon = new Image();
        const actionText = document.createElement('span');

        actionIcon.src = src;
        actionText.textContent = text;

        actionDiv.className = 'navbar--action__button newItemBtn';
        actionDiv.href = '#';
        actionDiv.append(actionIcon, actionText);
        actionDiv.addEventListener('click', listenerFunc);

        return actionDiv;
    }

    function createImageButton(src, className, listenerFunc) {
        const newItemBtn = document.createElement('input');
        newItemBtn.type = 'image';
        newItemBtn.src = src
        newItemBtn.name = className;
        newItemBtn.addEventListener('click', listenerFunc);
        newItemBtn.className = className;
        return newItemBtn;
    }

    function createDateInput(labelName, fieldName, defaultValue) {
        const dateDiv = document.createElement('div');
        const dateLabel = document.createElement('label');
        const dateInput = document.createElement('input');
        
        const currentDate = new Date();
        const maxDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(currentDate, 1);
        const minDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDate, 1);
        
        dateLabel.textContent = labelName;
        dateInput.type = 'date';
        dateInput.name = fieldName;
        dateInput.value = defaultValue;
        dateInput.min = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(minDate, 'yyyy-MM-dd');
        dateInput.max = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(maxDate, 'yyyy-MM-dd');

        dateDiv.append(dateLabel, dateInput)
        return dateDiv;
    }

    function insertProjectHeading(query, projectName, replace=false) {
        const targetDiv = document.querySelector(query);
        const headingFlexContainer = createElement('div', 'project--heading__container');
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;

        headingFlexContainer.appendChild(projectHeading);

        const currentHeadingContainer = document.querySelector('.project--heading__container');

        if(replace && currentHeadingContainer) {
            targetDiv.replaceChild(headingFlexContainer, currentHeadingContainer);
        } else {
            targetDiv.appendChild(headingFlexContainer);
        }
    }

    function insertProjectItemForm(query, item) {
        // callback function for the 'todo' checkbox
        const toggleItemCompletionOnClick = (e) => {
            const project = config.currentProject.name;
            const itemId = item.uuid;
            const projectStore = JSON.parse(localStorage.getItem(project));

            item.toggleCompletion();
            projectStore[itemId].completion = item.completion;
            // update stored data with new completion status
            localStorage.setItem(project, JSON.stringify(projectStore));
        }

        const createCheckbox = () => {
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'itemCompletion';
            input.id = elementID; // link "id" and "for"

            if(item.completion) {
                input.checked = true;
            }
            input.addEventListener('click', toggleItemCompletionOnClick);            
            return input
        }

        const getExclusiveSiblingNodes = (node) => {
            let siblings = [];

            const currentID = node.parentNode.id;
            const otherTodoItems = document.querySelectorAll(`.todoItem[id]:not([id="${currentID}"])`);
            
            Array.from(otherTodoItems).forEach(item => {
                const itemInfo = item.querySelector('.itemInfo');
                siblings.push(itemInfo)
            });

            return siblings;
        }

        const makeTodoItemExpand = (e) => {
            const siblingInfoDiv = e.target.parentNode.querySelector('.itemInfo');

            if(siblingInfoDiv.classList.contains('hidden')) {
                siblingInfoDiv.classList.remove('hidden');
            }
            siblingInfoDiv.classList.remove('contracted');
            siblingInfoDiv.classList.add('expanded');

            // make parent node active so that it can activate borders
            e.target.parentNode.classList.add('active');
        }

        const createItemTitle = (titleType) => {
            let titleElement;
            if(titleType == 'input') {
                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.defaultValue = item.title;
                inputElement.name = 'itemTitle';
                inputElement.id = 'itemTitle';
                inputElement.placeholder = 'Todo Item';
                titleElement = inputElement;
            }
            else if(titleType == 'label') {
                const labelElement = document.createElement('label');
                labelElement.textContent = item.title;
                titleElement = labelElement;
            }
            return titleElement;
        }

        const createLabel = (_titleType) => {
            const label = createItemTitle(_titleType);
            /* NB: We don't link the 'id' and 'for' elements because users' clicking on the label shouldn't toggle the checkbox.
            // label.setAttribute('for', elementID); */
            
            // add callback to expand item on click
            label.addEventListener('click', (e) => {
                // first hide other items
                const otherItemInfo = getExclusiveSiblingNodes(e.target);
                otherItemInfo.forEach(infoDiv => {
                    infoDiv.parentNode.classList.remove('active');
                    infoDiv.classList.remove('expanded');
                    infoDiv.classList.add('contracted');
                });
                
                // then make current item expand
                makeTodoItemExpand(e);
            })

            return label;
        }

        const createItemInfoExpandable = () => {
            const notesInput = (() => {
                const notes = document.createElement('input');
                notes.type = 'text';
                notes.name = 'itemNotes';
                notes.placeholder = 'Notes';
                notes.defaultValue = (item.notes) ? item.notes : '';
                return notes;
            })();

            const itemTaskListDiv = (() => {
                const checklistDiv = document.createElement('div');
                const checklistList = document.createElement('ul');
                
                item.checklist.forEach(task => {
                    const listItem = document.createElement('li');
                    listItem.textContent = task;
                    checklistList.appendChild(listItem);
                })
                
                checklistDiv.appendChild(checklistList);
                return checklistDiv;
            })();

            const datesDiv = (() => {
                const dateElements = document.createElement('div');
                const date = createDateInput('Date: ', 'itemDate', (item.date) ? item.date : null);
                // 'Figure Space' used in dueDate label to align the date pickers (see: https://qwerty.dev/whitespace/)
                const dueDate = createDateInput('Due: ', 'itemDueDate', (item.dueDate) ? item.dueDate : null);
                
                dateElements.append(date, dueDate);
                return dateElements;
            })();

            const tagsDiv = (() => {
                const inputElement = createElement('input', 'tagsInput');
                inputElement.placeholder = 'Tags';
                return inputElement;

            })();

            // Turns text input into a Tagify input, enabling tag addon
            const tagifyInput = (input) => {
                const tagifyInstance = new (_yaireo_tagify__WEBPACK_IMPORTED_MODULE_0___default())(input);
                input.addEventListener('change', tagifyEventListener)
                
                // Assign Tagify object as a todoItem property
                item.tagify = tagifyInstance;
        
                function tagifyEventListener (e) {
                    item.updateTags();
                }
            }

            const priorityDropdown = (() => {
                const priorityDiv = createElement('div', 'priorityDropdown');
                const label = document.createElement('label');
                const dropdown = document.createElement('select');
                const priorities = ['Select Priority', 'Low', 'Medium', 'High'];

                dropdown.name = 'itemPriority';
                label.setAttribute('for', 'priority');
                label.textContent = 'Priority: ';

                priorities.forEach(priority => {
                    const option = document.createElement('option');
                    option.value = priority;
                    option.textContent = priority;
                    dropdown.appendChild(option);
                });

                if (item.priority) {
                    let filter = Array.from(dropdown).filter(option => option.value == item.priority);
                    console.assert(filter.length == 1);
                    filter[0].selected = true;
                }

                priorityDiv.append(label, dropdown);
                return priorityDiv;
            })();

            const saveBtn = (() => {
                const saveFormDataToMemory = (e) => {
                    e.preventDefault();

                    const formElement = e.target.closest('.todoItem');
                    const formData = new FormData(formElement);
                    const formObj = {}

                    for (let [key, value] of formData.entries()) {
                        let dateFormatted;

                        if(key.includes('Date') && value) {
                            dateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(value), 'yyyy-MM-dd');
                        }
                        
                        // read formData (iterator) values into an object, formatting where necessary
                        switch (key) {
                            // convert from ISO to 'yyyy-MM-dd' format
                            case 'itemDate':
                                formObj[key] = dateFormatted;
                                break;
                            case 'itemDueDate':
                                formObj[key] = dateFormatted;
                                break;
                            default:
                                formObj[key] = value;
                        }
                    }
                    item.setTitle(formObj.itemTitle);
                    item.setNotes(formObj.itemNotes);
                    item.setPriority(formObj.itemPriority);
                    item.setDate(formObj.itemDate);
                    item.setDueDate(formObj.itemDueDate);
                    item.setCompletion( (formObj.itemCompletion) ? true : false );
                    console.log(formObj);
                }

                const btn = document.createElement('button');
                btn.className = 'saveItemBtn';
                btn.type = 'submit';
                btn.value = 'Save Changes';
                btn.textContent = 'Save Changes';
                
                btn.addEventListener('click', saveFormDataToMemory);
                return btn;
            })();

            const deleteBtn = (() => {
                const deleteItem = (e) => {
                    e.preventDefault();
                    const itemId = e.target.closest('.todoItem').id;
                    config.currentProject.deleteItem(itemId);

                    const todoContainer = document.querySelector(config.TODO_CONTAINER);
                    todoContainer.innerHTML = '';
                    // this is clumsy - is there a better solution?
                    config.projects[config.currentProject.name].run();

                }
                // refresh project numItems on create or delete
                const deleteBtn = createButton('Delete Item', 'deleteItemBtn', deleteItem);
                deleteBtn.addEventListener('click', updateProjectList());

                return deleteBtn;
            })();

            const buttonGroup = createElement('div', 'itemButtonGroup');
            buttonGroup.append(deleteBtn, saveBtn);

            // content that will show (expand) when item title is clicked
            const expandable = document.createElement('div');
            expandable.classList.add('itemInfo', 'contracted', 'hidden');
            expandable.append(notesInput, priorityDropdown, itemTaskListDiv, datesDiv, tagsDiv, buttonGroup);

            tagifyInput(expandable.querySelector('.tagsInput'));
            
            // Load saved tags if they exist
            if (item._tags && item.tagify) {
                item.tagify.addTags(item._tags);
            }
            
            return expandable;
        }

        const itemInfoForm = createElement('form', 'todoItem');
        itemInfoForm.id = item.uuid;

        const checkbox = createCheckbox();

        let _titleType = 'input';
        const priorityLabel = createElement('span', 'todoItem--priority__label');
        const priorityText = createElement('span', 'todoItem--priority__text');
        priorityText.textContent = item.priority;
        
        switch (item.priority) {
            case 'High':
                priorityLabel.classList.add('high');
                break;
            case 'Medium':
                priorityLabel.classList.add('medium');
                break;
            case 'Low':
                priorityLabel.classList.add('low');
                break;
            default:
                priorityLabel.classList.add('noneSelected');
                break;
        }

        priorityLabel.append(priorityText);
        
        const itemLabel = createLabel(_titleType);
        itemInfoForm.setAttribute('titleType', _titleType);
        

        const targetDiv = document.querySelector(query);
        
        itemInfoForm.append(checkbox, itemLabel, priorityLabel, createItemInfoExpandable());
        targetDiv.appendChild(itemInfoForm);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    function insertItemChangeListener(id, project) {
        const showItemSavedMessageOnFormChange = (e) => {
            const createSaveSpan = (msg) => {
                const messageContainer = document.createElement('div');
                const messageSpan = document.createElement('span');
                
                messageContainer.className = 'messageContainer';
                messageContainer.appendChild(messageSpan);
    
                messageSpan.textContent = msg;
                messageSpan.className = 'saveMessage';

                return messageContainer;
            }

            // Appends if msg element does not exist, otherwise replaces the element
            const smartAppendMessage = (msg) => {
                if(existingSaveMsg) {
                    // replace child of .messageContainer
                    existingSaveMsg.parentNode.replaceChild(createSaveSpan(msg), existingSaveMsg);
                } 
                else {
                    infoParent.appendChild(createSaveSpan(msg));
                }
            }

            project.populateLocalStorage();

            const infoParent = e.target.closest('.itemInfo');
            const existingSaveMsg = infoParent.querySelector('.saveMessage');            
            
            if(formChanged) {
                smartAppendMessage('Changes Saved');
                triggerItemListRefresh();
                formChanged = false;
            } else {
                smartAppendMessage('No Changed Detected');
            }

            updateProjectList();
        }

        const triggerItemListRefresh = () => {
            const currentItems = document.querySelectorAll('.todoItem');

            currentItems.forEach(item => {
                item.remove();
            });

            // insert todo items again
            config.projects[config.currentProject.name].run();
        }
        
        let formChanged = false;
        const itemForm = document.getElementById(id);
        const saveBtn = itemForm.querySelector('.saveItemBtn');
        
        itemForm.addEventListener('change', () => {
            formChanged = true;
        });
        
        [showItemSavedMessageOnFormChange].forEach(listener => {
            saveBtn.addEventListener('click', listener);
        })
    }

    const createButton = (buttonText, buttonClass, eventCallback) => {
        // "Create New Item" button
        const newBtn = createElement('button', buttonClass);
        newBtn.textContent = buttonText;
        newBtn.addEventListener('click', eventCallback);
        
        return newBtn;
    }

    const loremIpsum = (() => {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    })();

    function removeHeadings() {
        const projectHeadings = document.querySelectorAll('.project--heading__container');
    
        projectHeadings.forEach(node => {
            node.remove();
        });

        const todayTitle = document.querySelector('.today--title');
        todayTitle.remove();

    }

    function switchProject(e) {
        const projectClicked = e.target.parentNode.id;
        const projectOnDisplay = config.currentProject;

        if (projectOnDisplay.name != projectClicked) {
            console.log(config.currentProject);
            
            if(config.currentProject == '__today') {
                console.log('Remove headings!');
                removeHeadings();
            }

            // switch global focus to clicked project
            config.currentProject = config.projects[projectClicked].newProject;

            // remove existing todoItems
            const currentItems = document.querySelectorAll('.todoItem');

            currentItems.forEach(item => {
                item.remove();
            });
            
            // run this project (populate todo items)
            config.projects[projectClicked].run();
            // assign currentProject to clicked project
            config.currentProject = config.projects[projectClicked].newProject;
        } else {
            console.log("Project is already displayed!");
        }
    }

    function refreshProjectsList() {
        const listOfProjects = createElement('ul', 'projectList');
        listOfProjects.className = 'navbar--projects__links';

        const projectsTitle = createElement('h2', 'navbar--projects__title');
        projectsTitle.textContent = 'Projects';

        listOfProjects.appendChild(projectsTitle);
        
        // Insert list of projects into DOM
        Object.keys(config.projects).forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.id = project;
            projectItem.className = 'project--signpost';

            const projectItemStore = localStorage.getItem(project)
            const numItemsInProject = (projectItemStore) ? Object.keys(JSON.parse(projectItemStore)).length : 0;

            const link = document.createElement('a');
            link.textContent = `${project} :: ${numItemsInProject}`;
            link.href = '#';
            link.addEventListener('click', switchProject);
            
            projectItem.appendChild(link);
            listOfProjects.appendChild(projectItem);
        });

        return listOfProjects;
    }

    const updateProjectList = () => {
        const currentProjectList = document.querySelector('.navbar--projects__links');
        currentProjectList.parentNode.replaceChild(refreshProjectsList(), currentProjectList);
    }
    
    const createModal = () => {
        const createModalForm = () => {
            const form = document.createElement('form');

            const fieldset = document.createElement('fieldset');
            const legend = document.createElement('legend');

            const nameLabel = document.createElement('label');
            const nameInput = document.createElement('input');
            const notesLabel = document.createElement('label');
            const notesInput = document.createElement('input');

            legend.textContent = 'Project Details';

            nameLabel.textContent = 'Name';
            nameInput.name = 'projectName';
            nameInput.type = 'text';

            notesLabel.textContent = 'Notes';
            notesInput.name = 'projectNotes';
            notesInput.type = 'text';

            fieldset.className = 'project-modal--details';
            fieldset.append(legend, nameLabel, nameInput, notesLabel, notesInput);
            form.appendChild(fieldset);
        
            return form;
        }

        const createModalContainer = () => {
            const modalContainer = createElement('div', 'modalContainer');
        
            const modal = createElement('div', 'modal');
            const modalHeading = createElement('div', 'project-modal--heading');
            const modalForm = createModalForm();
            const buttonGroup = createElement('div', 'project--modal__buttons');
            const submitModalBtn = document.createElement('button');
            const closeModalBtn = document.createElement('button');
            
            
            modalContainer.id = 'modalContainer';
            modalForm.id = 'project-modal-form';
            submitModalBtn.id = 'submitModal';
            closeModalBtn.id = 'closeModal';
    
            modalHeading.textContent = 'Add Project';
    
            submitModalBtn.textContent = 'Accept';
            submitModalBtn.type = 'submit';
            submitModalBtn.setAttribute('form', 'project-modal-form');
            
            closeModalBtn.textContent = 'Cancel';
            buttonGroup.append(closeModalBtn, submitModalBtn);
    
            modal.append(modalHeading, modalForm, buttonGroup);
            modalContainer.appendChild(modal);
            return modalContainer;    
        }

        return createModalContainer();
    }

    const addProjectFromModal = (e) => {
        e.preventDefault();
        const form = document.getElementById('project-modal-form');
        const formData = new FormData(form);
        const createProjectFunc = e.currentTarget.callbackFunc;

        let projectName = formData.get('projectName');
        let projectNotes = formData.get('projectNotes');

        createProjectFunc(projectName, projectNotes);
        updateProjectList();

        e.target.closest('#modalContainer').classList.remove('showModal');

        // switch to new project with default empty item
        const newProjectLink = document.querySelector(`#${projectName} > a`);
        const newItemBtn = document.querySelector('.newItemBtn');
        newProjectLink.click();
        newItemBtn.click();
    }

    function assignModalListener(addProjectCallback, projectsList) {
        const open = document.getElementById('openModal');
        const submit = document.getElementById('submitModal');
        const close = document.getElementById('closeModal');
        const modalContainer = document.getElementById('modalContainer');

        open.addEventListener('click', () => {
            modalContainer.classList.add('showModal');
        });

        submit.addEventListener('click', addProjectFromModal, false);
        submit.callbackFunc = addProjectCallback;
        submit.projects = projectsList;

        close.addEventListener('click', () => {
            modalContainer.classList.remove('showModal');
        });
    }

    function priorityToInteger(priority) {
        const weights = {
            'High': 3,
            'Medium': 2,
            'Low': 1,
            'Select Priority': 0
        }

        return weights[priority];
    }

    function setupHTML() {
        let currentProject = config.currentProject;
    
        const clickLastTodoItem = () => {
            const items = document.querySelectorAll('.todoItem');
            const last = items[items.length - 1];
            
            const lastElementClickable =
                (last.getAttribute('titleType') == 'input')
                    ? last.querySelector("input[type='text']")
                    : last.querySelector('label');
            
            lastElementClickable.click();
        }

        // today date hardcoded to '2022-08-30'
        const setupShowTodayBtn = () => {
            const listTodayItems = () => {
                const currentDate = '2022-08-31';
                const todayItems = {}

                /* name: project name
                value: projectRunner object properties (name, run(), etc) */
                for (let [name, value] of Object.entries(config.projects)) {                    
                    const todo = Object.values(value.newProject.todoItems);
                    const f = todo.filter(item => item.date == currentDate);
                    const itemsFiltered = {}
                    f.forEach(item => {
                        itemsFiltered[item.uuid] = item;
                    });
                    if (Object.values(itemsFiltered).length > 0 ) {
                        todayItems[name] = itemsFiltered
                    }
                }

                console.log(todayItems);
                
                const content = document.getElementById('todoItemContainer');
                content.innerHTML = '';

                const todayDiv = createElement('div', 'today--title');
                const todayHeading = createElement('span', 'today--title__heading');
                const todayDate = createElement('span', 'today--title__date');
                todayHeading.textContent = 'Today';
                todayDate.textContent = 'Wed Aug 31';
                todayDiv.append(todayHeading, todayDate);
                content.appendChild(todayDiv);

                // value = object containing project's todoItems
                for (let [name, value] of Object.entries(todayItems)) {
                    insertProjectHeading(`#todoItemContainer`, name);
                    
                    for (let [id, item] of Object.entries(value)) {
                        insertProjectItemForm(`#todoItemContainer`, item);
                        insertItemChangeListener(id, config.projects[name].newProject);
                    }
                }
                
                config.currentProject = '__today';
            }
            

            return createNavAction(_images_sunrise_png__WEBPACK_IMPORTED_MODULE_6__, 'Today', listTodayItems);
        }
        
        const setNewItemBtn = () => {
            const addNewItem = () => {
                if(config.currentProject == '__today') {
                    alert('Item creation disabled in Today section. Please navigate to the individual projects.');
                    return;
                }

                const currentProject = config.currentProject;
                // add new item to project
                currentProject.addItem('');
        
                // clear current items and reset div
                const todoItemContainer = document.querySelector(config.TODO_CONTAINER);
                todoItemContainer.innerHTML = '';
                insertProjectHeading(config.TODO_CONTAINER, currentProject.name);
        
                // repopulate list items from project
                Object.values(currentProject.todoItems).forEach(item => {
                    insertProjectItemForm(config.TODO_CONTAINER, item);
                    insertItemChangeListener(item.uuid, currentProject);
                });
        
                clickLastTodoItem();
            }

            return createNavAction(_images_plant_png__WEBPACK_IMPORTED_MODULE_2__, 'Grow Todo Item', addNewItem);
        }
        
        const setupDebugBtn = () => {
            const logItemsInObject = () => {
                console.table(currentProject.todoItems, ['title', 'notes', 'date', 'dueDate', 'checklist', '_tags', 'completion', 'tagify']);
            }
            
            const logProjects = () => {
                console.log(config.projects);
            }

            const logDefaultProjectItems = () => {
                console.log(config.currentProject.todoItems);
            }
    
            return createNavAction(_images_beaver_png__WEBPACK_IMPORTED_MODULE_4__, 'Log JSON', logProjects);
        }

        const setupDeleteProjectBtn = () => {
            const deleteProject = (e) => {
                const current = config.currentProject.name;
                if (localStorage.getItem(current)) {
                    const confirmationText = `Are you sure you want to delete project ${current}? Deletion is final.`;
                    
                    if (confirm(confirmationText) == true) {
                        console.log(`User initiated deletion of ${current}.`);
                        localStorage.removeItem(current);
                        location.reload();
                        // console.log(`Project "${current}" exists in localstorage!`);
                    } else {
                        console.log('User cancelled deletion!');
                    }
                } else {
                    console.log(`Project "${current}" not found!`);
                }
            }

            return createNavAction(_images_lumberjacking_png__WEBPACK_IMPORTED_MODULE_5__, 'Delete Project', deleteProject);
        }
        
        const setupHeader = () => {
            const header = document.createElement('header');
            const appHeading = createElement('h1', 'app--heading');
            const iconSpan = document.createElement('span');

            appHeading.textContent = 'Forests - a todo app';
            iconSpan.className = "material-symbols-outlined";
            iconSpan.textContent = 'forest';
        
            header.append(iconSpan, appHeading);
            return header;
        }
    
        const navbar = () => {
            const navContainer = createElement('div', 'navbar');

            // create action buttons
            const navbarActionContainer__Top = createElement('div', 'navbar--actions__top');
            const navBarActionContainer__Bottom = createElement('div', 'navbar--actions__bottom');
            
            const newProjectBtn = createNavAction(_images_forest_png__WEBPACK_IMPORTED_MODULE_3__, 'Plant Project', null);
            newProjectBtn.id = 'openModal';

            navbarActionContainer__Top.append(setupShowTodayBtn(), setNewItemBtn(), newProjectBtn, setupDebugBtn());
            navBarActionContainer__Bottom.appendChild(setupDeleteProjectBtn());
    
            // todo: style and position new project button
            navContainer.append(navbarActionContainer__Top, refreshProjectsList(), navBarActionContainer__Bottom);
            return navContainer;
        }
        
        const gridContainer = createElement('div', 'gridContainer');
        const content = document.createElement('div');
        content.id = config.CONTENT_DIV_ID;

        const todoItemContainer = document.createElement('div');
        todoItemContainer.id = 'todoItemContainer';

        content.appendChild(todoItemContainer);
        
        gridContainer.append(navbar(), content);
        document.body.append(setupHeader(), gridContainer);
    }

    return {
        insertProjectHeading,
        insertProjectItemForm,
        createElement,
        createButton,
        insertItemChangeListener,
        createModal,
        assignModalListener,
        setupHTML,
        bindConfiguration
    };
})());


/***/ }),

/***/ "./src/images/beaver.png":
/*!*******************************!*\
  !*** ./src/images/beaver.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c7d79eb9d2eb45c6388.png";

/***/ }),

/***/ "./src/images/forest.png":
/*!*******************************!*\
  !*** ./src/images/forest.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3013ba40dd213dff8a64.png";

/***/ }),

/***/ "./src/images/lumberjacking.png":
/*!**************************************!*\
  !*** ./src/images/lumberjacking.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e7d007ca9a3823feae8b.png";

/***/ }),

/***/ "./src/images/plant.png":
/*!******************************!*\
  !*** ./src/images/plant.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e49ddfb6706b612fa63a.png";

/***/ }),

/***/ "./src/images/sunrise.png":
/*!********************************!*\
  !*** ./src/images/sunrise.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "922cb999da8804d315dd.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function getLocalStorage() {
    return JSON.stringify(localStorage);
}

function writeLocalStorage(data) {
    Object.keys(data).forEach( function(key) {
        localStorage.setItem(key, data[key])
    })
}

const savedLocalStorageData = {
    "Daily": "{\"0652cbf2-c716-4236-a13e-05f04717851d\":{\"title\":\"Do the dishes\",\"notes\":\"\",\"priority\":\"Low\",\"checklist\":[],\"date\":\"2022-08-31\",\"_tags\":[\"Cleaning\"],\"completion\":false},\"eb3a8045-382a-478c-886f-1e83f0cd76e0\":{\"title\":\"Shop for groceries\",\"notes\":\"Woolworths -- remember specials\",\"priority\":\"Medium\",\"checklist\":[],\"date\":\"2022-08-31\",\"_tags\":[\"Errands\"],\"completion\":false},\"1e0a4e87-6761-49b9-9430-9fc7d95f933e\":{\"title\":\"Pay the bills\",\"notes\":\"Bills are overdue\",\"priority\":\"High\",\"checklist\":[],\"_tags\":[],\"completion\":false}}",
    "Mining": "{\"f2621369-5e3f-4c6a-95fa-2c516ad98870\":{\"title\":\"Open the mine\",\"notes\":\"\",\"priority\":\"High\",\"checklist\":[],\"date\":\"2022-08-31\",\"_tags\":[\"Mining\"],\"completion\":false},\"ac95854a-66c7-4a4e-afe2-138fbf62689b\":{\"title\":\"Dig tunnel\",\"notes\":\"\",\"priority\":\"Medium\",\"checklist\":[],\"_tags\":[\"Mining\"],\"completion\":false}}",
    "Exercise": "{\"59c6561c-1c6b-47ce-9002-a545bb2c0d47\":{\"title\":\"Lift weights\",\"notes\":\"Get more swole\",\"priority\":\"High\",\"checklist\":[],\"_tags\":[],\"completion\":false},\"54a9f9db-48c5-4784-a7ab-0a715fe41403\":{\"title\":\"Run around the block\",\"notes\":\"\",\"priority\":\"Medium\",\"checklist\":[],\"_tags\":[\"Cardio\"],\"completion\":false}}"
}


// instantiate project and load mock items
function projectRunner(projectName) {
    const name = projectName;
    const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

    function addMockTags(items) {
        const todoItems = Object.values(items);
        todoItems[0].addTagifyTag('Errands');
        todoItems[1].addTagifyTag('Errands');
        todoItems[2].addTagifyTag('Fitness');
        todoItems[3].addTagifyTag(['Fitness', 'Study']);
    }
    
    function setupMockProject() {
        newProject.notes = 'Everyday tasks.';
    
        newProject.addItem('Mail parcel to Mum');
        newProject.addItem('Pay the bills');
        newProject.addItem('Run for 10 minutes');
        newProject.addItem('Study on the exercise bike');
    
        const itemValues = Object.values(newProject.todoItems);
    
        itemValues[0].notes = 'Needs to be done at the post office.'
        itemValues[0].addTask('Find item.');
        itemValues[0].addTask('Pack parcel.');
        itemValues[0].addTask('Mail parcel.');
    }

    const loadMockItemsIntoDOM = () => {
        // only load from storage if key exists
        if(localStorage.getItem(newProject.name)) {
            newProject.retrieveLocalStorage();
        }

        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].insertProjectHeading(`#todoItemContainer`, DOM_CONFIG.currentProject.name, true);
        
        // enumerate items in default project
        Object.values(newProject.todoItems).forEach(item => {
            _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].insertProjectItemForm(`#todoItemContainer`, item);
            _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].insertItemChangeListener(item.uuid, newProject);
        });

        
    }

    const run = () => {
        if(!localStorage.getItem(newProject.name)) {
            console.log('No stored data detected!');
            loadMockItemsIntoDOM();
            // setupMockProject();
            // loadMockItemsIntoDOM();
            // addMockTags(newProject.todoItems);
        } else {
            console.log('Stored data detected!');
            loadMockItemsIntoDOM();
        }
    }

    return {
        name,
        run,
        newProject
    }
}

function loadStoredProjects () {
    for (const [name, value] of Object.entries(localStorage)) {
        const project = projectRunner(name);
        project.newProject.retrieveLocalStorage();
        
        if(!projects[name]) {
            projects[name] = project;
    
            // if(notes) {
            //     projects[name].newProject.notes = notes;
            // }
        }
        else {
            // console.log(`A project named "${name}" already exists. Please try another name.`);
        }

        

    }



}

function addNewProject(name, notes=null) {
    const newProject = projectRunner(name);
    
    if(!projects[name]) {
        projects[newProject.name] = newProject;

        if(notes) {
            projects[newProject.name].newProject.notes = notes;
        }
        
    }
    else {
        console.log(`A project named "${name}" already exists. Please try another name.`);
    }
}

let projects = {}

const CONTENT_DIV_ID = 'content';
const CONTENT_DIV_SELECTOR = `#${CONTENT_DIV_ID}`;

const DOM_CONFIG = {
    'projects': projects,
    'TODO_CONTAINER': '#todoItemContainer'
}

loadStoredProjects();

addNewProject('Daily');
// addNewProject('Empty');
// addNewProject('Investigations');

DOM_CONFIG['currentProject'] = DOM_CONFIG.projects['Daily'].newProject;

_view_js__WEBPACK_IMPORTED_MODULE_1__["default"].config = DOM_CONFIG;
_view_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindConfiguration();
_view_js__WEBPACK_IMPORTED_MODULE_1__["default"].setupHTML();

projects['Daily'].run();

document.body.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_1__["default"].createModal());
_view_js__WEBPACK_IMPORTED_MODULE_1__["default"].assignModalListener(addNewProject, projects);

loadStoredProjects();

// write mock projects into localStorage for use by app
writeLocalStorage(savedLocalStorageData);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLGFBQWEsTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFX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QUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUVBQWU7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFFQUFlO0FBQzdCLGdCQUFnQixxRUFBZTtBQUMvQjtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqMkJvQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUVBQWU7QUFDOUQsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLG1DQUFtQyxNQUFNLDBEQUEwRCxNQUFNO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDL0Y3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDUztBQUNwRDtBQUNlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMkM7QUFDbUI7QUFDUTtBQUNsQjtBQUNwRDtBQUNlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsYUFBYSx1RUFBaUIsbUJBQW1CLDJFQUFxQixrQkFBa0I7QUFDeEY7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMkM7QUFDUztBQUNVO0FBQy9DO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBaUI7O0FBRXpDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIyQztBQUNhO0FBQ1E7QUFDWjtBQUNwRDtBQUNlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsYUFBYSxvRUFBYyw0QkFBNEIsd0VBQWtCLDJCQUEyQjtBQUNwRztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjJDO0FBQ1M7QUFDSTtBQUNWO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQSx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUywrNEJBQSs0Qjs7QUFFdDdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjOztBQUV0QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQSx5SUFBeUk7QUFDekksSUFBSTtBQUNKLHFJQUFxSTtBQUNySSxJQUFJO0FBQ0osK0lBQStJO0FBQy9JLElBQUk7QUFDSixpSkFBaUo7QUFDako7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjJDO0FBQ1M7QUFDckM7QUFDZixFQUFFLGtFQUFZO0FBQ2Q7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDhEO0FBQ0E7QUFDVjtBQUNyQztBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDJDO0FBQ1M7QUFDTjtBQUNpQjtBQUNoRDtBQUNmOztBQUVBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLHFCQUFxQiwrREFBUywyMkJBQTIyQjs7QUFFejRCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQndEO0FBQ0o7QUFDSTtBQUNWO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLHVCQUF1QiwyRUFBaUI7QUFDeEMsOEJBQThCLCtEQUFTO0FBQ3ZDLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBYztBQUMzQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ptRDtBQUNYO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGtCQUFrQiw0REFBTTtBQUN4QixlQUFlLG1FQUFTO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCbUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGVBQWUsbUVBQVM7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFbUQ7QUFDTDtBQUNXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGVBQWUsbUVBQVM7QUFDeEIsU0FBUywrREFBUztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjBDO0FBQ2dCO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLDJDQUEyQyx1REFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsb0RBQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVMsS0FBSyxrQkFBa0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxnREFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FB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QUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQyxlQUFlOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdURBQVc7QUFDWCxrRUFBc0I7QUFDdEIsMERBQWM7O0FBRWQ7O0FBRUEsMEJBQTBCLDREQUFnQjtBQUMxQyxvRUFBd0I7O0FBRXhCOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQHlhaXJlby90YWdpZnkvZGlzdC90YWdpZnkubWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AeWFpcmVvL3RhZ2lmeS9kaXN0L3RhZ2lmeS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZFllYXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1YlllYXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AeWFpcmVvL3RhZ2lmeS9kaXN0L3RhZ2lmeS5jc3M/YWU3MCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGFnaWZ5ICh2IDQuMTUuMykgLSB0YWdzIGlucHV0IGNvbXBvbmVudFxuICogQnkgWWFpciBFdmVuLU9yXG4gKiBodHRwczovL2dpdGh1Yi5jb20veWFpckVPL3RhZ2lmeVxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICogXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKiBcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gKiBUSEUgU09GVFdBUkUuXHJcbiAqIFxyXG4gKiBUSEUgU09GVFdBUkUgSVMgTk9UIFBFUk1JU1NJQkxFIFRPIEJFIFNPTEQuXG4gKi9cblxuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5UYWdpZnk9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlKXt2YXIgaT1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihzPXMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLGkucHVzaC5hcHBseShpLHMpfXJldHVybiBpfWZ1bmN0aW9uIGUoZSl7Zm9yKHZhciBzPTE7czxhcmd1bWVudHMubGVuZ3RoO3MrKyl7dmFyIGE9bnVsbCE9YXJndW1lbnRzW3NdP2FyZ3VtZW50c1tzXTp7fTtzJTI/dChPYmplY3QoYSksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe2koZSx0LGFbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYSkpOnQoT2JqZWN0KGEpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSx0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gaSh0LGUsaSl7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1pLHR9Y29uc3Qgcz0odCxlLGkscyk9Pih0PVwiXCIrdCxlPVwiXCIrZSxzJiYodD10LnRyaW0oKSxlPWUudHJpbSgpKSxpP3Q9PWU6dC50b0xvd2VyQ2FzZSgpPT1lLnRvTG93ZXJDYXNlKCkpLGE9KHQsZSk9PnQmJkFycmF5LmlzQXJyYXkodCkmJnQubWFwKCh0PT5uKHQsZSkpKTtmdW5jdGlvbiBuKHQsZSl7dmFyIGkscz17fTtmb3IoaSBpbiB0KWUuaW5kZXhPZihpKTwwJiYoc1tpXT10W2ldKTtyZXR1cm4gc31mdW5jdGlvbiBvKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQucmVwbGFjZSgvXFwmIz9bMC05YS16XSs7L2dpLChmdW5jdGlvbih0KXtyZXR1cm4gZS5pbm5lckhUTUw9dCxlLmlubmVyVGV4dH0pKX1mdW5jdGlvbiByKHQpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodC50cmltKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5maXJzdEVsZW1lbnRDaGlsZH1mdW5jdGlvbiBsKHQsZSl7Zm9yKGU9ZXx8XCJwcmV2aW91c1wiO3Q9dFtlK1wiU2libGluZ1wiXTspaWYoMz09dC5ub2RlVHlwZSlyZXR1cm4gdH1mdW5jdGlvbiBkKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3QucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIikucmVwbGFjZSgvYHwnL2csXCImIzAzOTtcIik6dH1mdW5jdGlvbiBoKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zcGxpdChcIiBcIilbMV0uc2xpY2UoMCwtMSk7cmV0dXJuIHQ9PT1PYmplY3QodCkmJlwiQXJyYXlcIiE9ZSYmXCJGdW5jdGlvblwiIT1lJiZcIlJlZ0V4cFwiIT1lJiZcIkhUTUxVbmtub3duRWxlbWVudFwiIT1lfWZ1bmN0aW9uIGcodCxlLGkpe2Z1bmN0aW9uIHModCxlKXtmb3IodmFyIGkgaW4gZSlpZihlLmhhc093blByb3BlcnR5KGkpKXtpZihoKGVbaV0pKXtoKHRbaV0pP3ModFtpXSxlW2ldKTp0W2ldPU9iamVjdC5hc3NpZ24oe30sZVtpXSk7Y29udGludWV9aWYoQXJyYXkuaXNBcnJheShlW2ldKSl7dFtpXT1PYmplY3QuYXNzaWduKFtdLGVbaV0pO2NvbnRpbnVlfXRbaV09ZVtpXX19cmV0dXJuIHQgaW5zdGFuY2VvZiBPYmplY3R8fCh0PXt9KSxzKHQsZSksaSYmcyh0LGkpLHR9ZnVuY3Rpb24gcCgpe2NvbnN0IHQ9W10sZT17fTtmb3IobGV0IGkgb2YgYXJndW1lbnRzKWZvcihsZXQgcyBvZiBpKWgocyk/ZVtzLnZhbHVlXXx8KHQucHVzaChzKSxlW3MudmFsdWVdPTEpOnQuaW5jbHVkZXMocyl8fHQucHVzaChzKTtyZXR1cm4gdH1mdW5jdGlvbiBjKHQpe3JldHVybiBTdHJpbmcucHJvdG90eXBlLm5vcm1hbGl6ZT9cInN0cmluZ1wiPT10eXBlb2YgdD90Lm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLFwiXCIpOnZvaWQgMDp0fXZhciB1PSgpPT4vKD89LipjaHJvbWUpKD89LiphbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7ZnVuY3Rpb24gbSgpe3JldHVybihbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywodD0+KHReY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0mMTU+PnQvNCkudG9TdHJpbmcoMTYpKSl9ZnVuY3Rpb24gdih0KXtyZXR1cm4gdCYmdC5jbGFzc0xpc3QmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWcpfXZhciBmPXtkZWxpbWl0ZXJzOlwiLFwiLHBhdHRlcm46bnVsbCx0YWdUZXh0UHJvcDpcInZhbHVlXCIsbWF4VGFnczoxLzAsY2FsbGJhY2tzOnt9LGFkZFRhZ09uQmx1cjohMCxvbkNoYW5nZUFmdGVyQmx1cjohMCxkdXBsaWNhdGVzOiExLHdoaXRlbGlzdDpbXSxibGFja2xpc3Q6W10sZW5mb3JjZVdoaXRlbGlzdDohMSx1c2VySW5wdXQ6ITAsa2VlcEludmFsaWRUYWdzOiExLGNyZWF0ZUludmFsaWRUYWdzOiEwLG1peFRhZ3NBbGxvd2VkQWZ0ZXI6Lyx8XFwufFxcOnxcXHMvLG1peFRhZ3NJbnRlcnBvbGF0b3I6W1wiW1tcIixcIl1dXCJdLGJhY2tzcGFjZTohMCxza2lwSW52YWxpZDohMSxwYXN0ZUFzVGFnczohMCxlZGl0VGFnczp7Y2xpY2tzOjIsa2VlcEludmFsaWQ6ITB9LHRyYW5zZm9ybVRhZzooKT0+e30sdHJpbTohMCxhMTF5Ontmb2N1c2FibGVUYWdzOiExfSxtaXhNb2RlOntpbnNlcnRBZnRlclRhZzpcIsKgXCJ9LGF1dG9Db21wbGV0ZTp7ZW5hYmxlZDohMCxyaWdodEtleTohMX0sY2xhc3NOYW1lczp7bmFtZXNwYWNlOlwidGFnaWZ5XCIsbWl4TW9kZTpcInRhZ2lmeS0tbWl4XCIsc2VsZWN0TW9kZTpcInRhZ2lmeS0tc2VsZWN0XCIsaW5wdXQ6XCJ0YWdpZnlfX2lucHV0XCIsZm9jdXM6XCJ0YWdpZnktLWZvY3VzXCIsdGFnTm9BbmltYXRpb246XCJ0YWdpZnktLW5vQW5pbVwiLHRhZ0ludmFsaWQ6XCJ0YWdpZnktLWludmFsaWRcIix0YWdOb3RBbGxvd2VkOlwidGFnaWZ5LS1ub3RBbGxvd2VkXCIsc2NvcGVMb2FkaW5nOlwidGFnaWZ5LS1sb2FkaW5nXCIsaGFzTWF4VGFnczpcInRhZ2lmeS0taGFzTWF4VGFnc1wiLGhhc05vVGFnczpcInRhZ2lmeS0tbm9UYWdzXCIsZW1wdHk6XCJ0YWdpZnktLWVtcHR5XCIsaW5wdXRJbnZhbGlkOlwidGFnaWZ5X19pbnB1dC0taW52YWxpZFwiLGRyb3Bkb3duOlwidGFnaWZ5X19kcm9wZG93blwiLGRyb3Bkb3duV3JhcHBlcjpcInRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJcIixkcm9wZG93bkhlYWRlcjpcInRhZ2lmeV9fZHJvcGRvd25fX2hlYWRlclwiLGRyb3Bkb3duRm9vdGVyOlwidGFnaWZ5X19kcm9wZG93bl9fZm9vdGVyXCIsZHJvcGRvd25JdGVtOlwidGFnaWZ5X19kcm9wZG93bl9faXRlbVwiLGRyb3Bkb3duSXRlbUFjdGl2ZTpcInRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWFjdGl2ZVwiLGRyb3Bkb3duSXRlbUhpZGRlbjpcInRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWhpZGRlblwiLGRyb3Bkb3duSW5pdGFsOlwidGFnaWZ5X19kcm9wZG93bi0taW5pdGlhbFwiLHRhZzpcInRhZ2lmeV9fdGFnXCIsdGFnVGV4dDpcInRhZ2lmeV9fdGFnLXRleHRcIix0YWdYOlwidGFnaWZ5X190YWdfX3JlbW92ZUJ0blwiLHRhZ0xvYWRpbmc6XCJ0YWdpZnlfX3RhZy0tbG9hZGluZ1wiLHRhZ0VkaXRpbmc6XCJ0YWdpZnlfX3RhZy0tZWRpdGFibGVcIix0YWdGbGFzaDpcInRhZ2lmeV9fdGFnLS1mbGFzaFwiLHRhZ0hpZGU6XCJ0YWdpZnlfX3RhZy0taGlkZVwifSxkcm9wZG93bjp7Y2xhc3NuYW1lOlwiXCIsZW5hYmxlZDoyLG1heEl0ZW1zOjEwLHNlYXJjaEtleXM6W1widmFsdWVcIixcInNlYXJjaEJ5XCJdLGZ1enp5U2VhcmNoOiEwLGNhc2VTZW5zaXRpdmU6ITEsYWNjZW50ZWRTZWFyY2g6ITAsaGlnaGxpZ2h0Rmlyc3Q6ITEsY2xvc2VPblNlbGVjdDohMCxjbGVhck9uU2VsZWN0OiEwLHBvc2l0aW9uOlwiYWxsXCIsYXBwZW5kVGFyZ2V0Om51bGx9LGhvb2tzOntiZWZvcmVSZW1vdmVUYWc6KCk9PlByb21pc2UucmVzb2x2ZSgpLGJlZm9yZVBhc3RlOigpPT5Qcm9taXNlLnJlc29sdmUoKSxzdWdnZXN0aW9uQ2xpY2s6KCk9PlByb21pc2UucmVzb2x2ZSgpfX07ZnVuY3Rpb24gVCgpe3RoaXMuZHJvcGRvd249e307Zm9yKGxldCB0IGluIHRoaXMuX2Ryb3Bkb3duKXRoaXMuZHJvcGRvd25bdF09XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fZHJvcGRvd25bdF0/dGhpcy5fZHJvcGRvd25bdF0uYmluZCh0aGlzKTp0aGlzLl9kcm9wZG93blt0XTt0aGlzLmRyb3Bkb3duLnJlZnMoKX12YXIgdz17cmVmcygpe3RoaXMuRE9NLmRyb3Bkb3duPXRoaXMucGFyc2VUZW1wbGF0ZShcImRyb3Bkb3duXCIsW3RoaXMuc2V0dGluZ3NdKSx0aGlzLkRPTS5kcm9wZG93bi5jb250ZW50PXRoaXMuRE9NLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZWxlY3Rvcj0ndGFnaWZ5LXN1Z2dlc3Rpb25zLXdyYXBwZXInXVwiKX0sZ2V0SGVhZGVyUmVmKCl7cmV0dXJuIHRoaXMuRE9NLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZWxlY3Rvcj0ndGFnaWZ5LXN1Z2dlc3Rpb25zLWhlYWRlciddXCIpfSxnZXRGb290ZXJSZWYoKXtyZXR1cm4gdGhpcy5ET00uZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIltkYXRhLXNlbGVjdG9yPSd0YWdpZnktc3VnZ2VzdGlvbnMtZm9vdGVyJ11cIil9LGdldEFsbFN1Z2dlc3Rpb25zUmVmcygpe3JldHVyblsuLi50aGlzLkRPTS5kcm9wZG93bi5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbVNlbGVjdG9yKV19LHNob3codCl7dmFyIGUsaSxhLG49dGhpcy5zZXR0aW5ncyxvPVwibWl4XCI9PW4ubW9kZSYmIW4uZW5mb3JjZVdoaXRlbGlzdCxyPSFuLndoaXRlbGlzdHx8IW4ud2hpdGVsaXN0Lmxlbmd0aCxsPVwibWFudWFsXCI9PW4uZHJvcGRvd24ucG9zaXRpb247aWYodD12b2lkIDA9PT10P3RoaXMuc3RhdGUuaW5wdXRUZXh0OnQsIShyJiYhbyYmIW4udGVtcGxhdGVzLmRyb3Bkb3duSXRlbU5vTWF0Y2h8fCExPT09bi5kcm9wZG93bi5lbmFibGV8fHRoaXMuc3RhdGUuaXNMb2FkaW5nfHx0aGlzLnNldHRpbmdzLnJlYWRvbmx5KSl7aWYoY2xlYXJUaW1lb3V0KHRoaXMuZHJvcGRvd25IaWRlX19iaW5kRXZlbnRzVGltZW91dCksdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXM9dGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXModCksdCYmIXRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmxlbmd0aCYmKHRoaXMudHJpZ2dlcihcImRyb3Bkb3duOm5vTWF0Y2hcIix0KSxuLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW1Ob01hdGNoJiYoYT1uLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW1Ob01hdGNoLmNhbGwodGhpcyx7dmFsdWU6dH0pKSksIWEpe2lmKHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmxlbmd0aCl0JiZvJiYhdGhpcy5zdGF0ZS5lZGl0aW5nLnNjb3BlJiYhcyh0aGlzLnN1Z2dlc3RlZExpc3RJdGVtc1swXS52YWx1ZSx0KSYmdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMudW5zaGlmdCh7dmFsdWU6dH0pO2Vsc2V7aWYoIXR8fCFvfHx0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUpcmV0dXJuIHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzKSx2b2lkIHRoaXMuZHJvcGRvd24uaGlkZSgpO3RoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zPVt7dmFsdWU6dH1dfWk9XCJcIisoaChlPXRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zWzBdKT9lLnZhbHVlOmUpLG4uYXV0b0NvbXBsZXRlJiZpJiYwPT1pLmluZGV4T2YodCkmJnRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzLGUpfXRoaXMuZHJvcGRvd24uZmlsbChhKSxuLmRyb3Bkb3duLmhpZ2hsaWdodEZpcnN0JiZ0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbih0aGlzLkRPTS5kcm9wZG93bi5jb250ZW50LmNoaWxkcmVuWzBdKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGV8fHNldFRpbWVvdXQodGhpcy5kcm9wZG93bi5ldmVudHMuYmluZGluZy5iaW5kKHRoaXMpKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGU9dHx8ITAsdGhpcy5zdGF0ZS5kcm9wZG93bi5xdWVyeT10LHRoaXMuc2V0U3RhdGVTZWxlY3Rpb24oKSxsfHxzZXRUaW1lb3V0KCgoKT0+e3RoaXMuZHJvcGRvd24ucG9zaXRpb24oKSx0aGlzLmRyb3Bkb3duLnJlbmRlcigpfSkpLHNldFRpbWVvdXQoKCgpPT57dGhpcy50cmlnZ2VyKFwiZHJvcGRvd246c2hvd1wiLHRoaXMuRE9NLmRyb3Bkb3duKX0pKX19LGhpZGUodCl7dmFyIGU9dGhpcy5ET00saT1lLnNjb3BlLHM9ZS5kcm9wZG93bixhPVwibWFudWFsXCI9PXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ucG9zaXRpb24mJiF0O2lmKHMmJmRvY3VtZW50LmJvZHkuY29udGFpbnMocykmJiFhKXJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuZHJvcGRvd24ucG9zaXRpb24pLHRoaXMuZHJvcGRvd24uZXZlbnRzLmJpbmRpbmcuY2FsbCh0aGlzLCExKSxpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhMSkscy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHMpLHNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlPSExfSksMTAwKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnF1ZXJ5PXRoaXMuc3RhdGUuZGRJdGVtRGF0YT10aGlzLnN0YXRlLmRkSXRlbUVsbT10aGlzLnN0YXRlLnNlbGVjdGlvbj1udWxsLHRoaXMuc3RhdGUudGFnJiZ0aGlzLnN0YXRlLnRhZy52YWx1ZS5sZW5ndGgmJih0aGlzLnN0YXRlLmZsYWdnZWRUYWdzW3RoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXRdPXRoaXMuc3RhdGUudGFnKSx0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpoaWRlXCIscyksdGhpc30sdG9nZ2xlKHQpe3RoaXMuZHJvcGRvd25bdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiYhdD9cImhpZGVcIjpcInNob3dcIl0oKX0scmVuZGVyKCl7dmFyIHQsZSxpLHM9KHQ9dGhpcy5ET00uZHJvcGRvd24sKGk9dC5jbG9uZU5vZGUoITApKS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246Zml4ZWQ7IHRvcDotOTk5OXB4OyBvcGFjaXR5OjBcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGkpLGU9aS5jbGllbnRIZWlnaHQsaS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpLGUpLGE9dGhpcy5zZXR0aW5ncztyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYS5kcm9wZG93bi5lbmFibGVkJiZhLmRyb3Bkb3duLmVuYWJsZWQ+PTA/KHRoaXMuRE9NLnNjb3BlLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhMCksZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLkRPTS5kcm9wZG93bil8fCh0aGlzLkRPTS5kcm9wZG93bi5jbGFzc0xpc3QuYWRkKGEuY2xhc3NOYW1lcy5kcm9wZG93bkluaXRhbCksdGhpcy5kcm9wZG93bi5wb3NpdGlvbihzKSxhLmRyb3Bkb3duLmFwcGVuZFRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLkRPTS5kcm9wZG93biksc2V0VGltZW91dCgoKCk9PnRoaXMuRE9NLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoYS5jbGFzc05hbWVzLmRyb3Bkb3duSW5pdGFsKSkpKSx0aGlzKTp0aGlzfSxmaWxsKHQpe3Q9XCJzdHJpbmdcIj09dHlwZW9mIHQ/dDp0aGlzLmRyb3Bkb3duLmNyZWF0ZUxpc3RIVE1MKHR8fHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zKTt2YXIgZSxpPXRoaXMuc2V0dGluZ3MudGVtcGxhdGVzLmRyb3Bkb3duQ29udGVudC5jYWxsKHRoaXMsdCk7dGhpcy5ET00uZHJvcGRvd24uY29udGVudC5pbm5lckhUTUw9KGU9aSk/ZS5yZXBsYWNlKC9cXD5bXFxyXFxuIF0rXFw8L2csXCI+PFwiKS5yZXBsYWNlKC8oPC4qPz4pfFxccysvZywoKHQsZSk9PmV8fFwiIFwiKSk6XCJcIn0sZmlsbEhlYWRlckZvb3Rlcigpe3RoaXMuc2V0dGluZ3MudGVtcGxhdGVzO3ZhciB0PXRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zKHRoaXMuc3RhdGUuZHJvcGRvd24ucXVlcnkpLGU9dGhpcy5wYXJzZVRlbXBsYXRlKFwiZHJvcGRvd25IZWFkZXJcIixbdF0pLGk9dGhpcy5wYXJzZVRlbXBsYXRlKFwiZHJvcGRvd25Gb290ZXJcIixbdF0pLHM9dGhpcy5kcm9wZG93bi5nZXRIZWFkZXJSZWYoKSxhPXRoaXMuZHJvcGRvd24uZ2V0Rm9vdGVyUmVmKCk7ZSYmcz8ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZSxzKSxpJiZhPy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpLGEpfSxyZWZpbHRlcih0KXt0PXR8fHRoaXMuc3RhdGUuZHJvcGRvd24ucXVlcnl8fFwiXCIsdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXM9dGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXModCksdGhpcy5kcm9wZG93bi5maWxsKCksdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMubGVuZ3RofHx0aGlzLmRyb3Bkb3duLmhpZGUoKSx0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjp1cGRhdGVkXCIsdGhpcy5ET00uZHJvcGRvd24pfSxwb3NpdGlvbih0KXt2YXIgZT10aGlzLnNldHRpbmdzLmRyb3Bkb3duO2lmKFwibWFudWFsXCIhPWUucG9zaXRpb24pe3ZhciBpLHMsYSxuLG8scixsPXRoaXMuRE9NLmRyb3Bkb3duLGQ9ZS5wbGFjZUFib3ZlLGg9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxnPU1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8MCx3aW5kb3cuaW5uZXJXaWR0aHx8MCk+NDgwP2UucG9zaXRpb246XCJhbGxcIixwPXRoaXMuRE9NW1wiaW5wdXRcIj09Zz9cImlucHV0XCI6XCJzY29wZVwiXTt0PXR8fGwuY2xpZW50SGVpZ2h0LHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZSYmKFwidGV4dFwiPT1nPyhhPShpPXRoaXMuZ2V0Q2FyZXRHbG9iYWxQb3NpdGlvbigpKS5ib3R0b20scz1pLnRvcCxuPWkubGVmdCxvPVwiYXV0b1wiKToocj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MCxpPTA7dDspZSs9dC5vZmZzZXRMZWZ0fHwwLGkrPXQub2Zmc2V0VG9wfHwwLHQ9dC5wYXJlbnROb2RlO3JldHVybntsZWZ0OmUsdG9wOml9fSh0aGlzLnNldHRpbmdzLmRyb3Bkb3duLmFwcGVuZFRhcmdldCkscz0oaT1wLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS50b3Atci50b3AsYT1pLmJvdHRvbS0xLXIudG9wLG49aS5sZWZ0LXIubGVmdCxvPWkud2lkdGgrXCJweFwiKSxzPU1hdGguZmxvb3IocyksYT1NYXRoLmNlaWwoYSksZD12b2lkIDA9PT1kP2gtaS5ib3R0b208dDpkLGwuc3R5bGUuY3NzVGV4dD1cImxlZnQ6XCIrKG4rd2luZG93LnBhZ2VYT2Zmc2V0KStcInB4OyB3aWR0aDpcIitvK1wiO1wiKyhkP1widG9wOiBcIisocyt3aW5kb3cucGFnZVlPZmZzZXQpK1wicHhcIjpcInRvcDogXCIrKGErd2luZG93LnBhZ2VZT2Zmc2V0KStcInB4XCIpLGwuc2V0QXR0cmlidXRlKFwicGxhY2VtZW50XCIsZD9cInRvcFwiOlwiYm90dG9tXCIpLGwuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIixnKSl9fSxldmVudHM6e2JpbmRpbmcoKXtsZXQgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdKXx8YXJndW1lbnRzWzBdO3ZhciBlPXRoaXMuZHJvcGRvd24uZXZlbnRzLmNhbGxiYWNrcyxpPXRoaXMubGlzdGVuZXJzLmRyb3Bkb3duPXRoaXMubGlzdGVuZXJzLmRyb3Bkb3dufHx7cG9zaXRpb246dGhpcy5kcm9wZG93bi5wb3NpdGlvbi5iaW5kKHRoaXMpLG9uS2V5RG93bjplLm9uS2V5RG93bi5iaW5kKHRoaXMpLG9uTW91c2VPdmVyOmUub25Nb3VzZU92ZXIuYmluZCh0aGlzKSxvbk1vdXNlTGVhdmU6ZS5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKSxvbkNsaWNrOmUub25DbGljay5iaW5kKHRoaXMpLG9uU2Nyb2xsOmUub25TY3JvbGwuYmluZCh0aGlzKX0scz10P1wiYWRkRXZlbnRMaXN0ZW5lclwiOlwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiO1wibWFudWFsXCIhPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ucG9zaXRpb24mJih3aW5kb3dbc10oXCJyZXNpemVcIixpLnBvc2l0aW9uKSx3aW5kb3dbc10oXCJrZXlkb3duXCIsaS5vbktleURvd24pKSx0aGlzLkRPTS5kcm9wZG93bltzXShcIm1vdXNlb3ZlclwiLGkub25Nb3VzZU92ZXIpLHRoaXMuRE9NLmRyb3Bkb3duW3NdKFwibW91c2VsZWF2ZVwiLGkub25Nb3VzZUxlYXZlKSx0aGlzLkRPTS5kcm9wZG93bltzXShcIm1vdXNlZG93blwiLGkub25DbGljayksdGhpcy5ET00uZHJvcGRvd24uY29udGVudFtzXShcInNjcm9sbFwiLGkub25TY3JvbGwpfSxjYWxsYmFja3M6e29uS2V5RG93bih0KXtpZih0aGlzLnN0YXRlLmhhc0ZvY3VzKXt2YXIgZT10aGlzLkRPTS5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1BY3RpdmVTZWxlY3RvciksaT10aGlzLmRyb3Bkb3duLmdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKGUpO3N3aXRjaCh0LmtleSl7Y2FzZVwiQXJyb3dEb3duXCI6Y2FzZVwiQXJyb3dVcFwiOmNhc2VcIkRvd25cIjpjYXNlXCJVcFwiOnQucHJldmVudERlZmF1bHQoKTt2YXIgcz10aGlzLmRyb3Bkb3duLmdldEFsbFN1Z2dlc3Rpb25zUmVmcygpLGE9XCJBcnJvd1VwXCI9PXQua2V5fHxcIlVwXCI9PXQua2V5O2UmJihlPXRoaXMuZHJvcGRvd24uZ2V0TmV4dE9yUHJldk9wdGlvbihlLCFhKSksZSYmZS5tYXRjaGVzKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1TZWxlY3Rvcil8fChlPXNbYT9zLmxlbmd0aC0xOjBdKSxpPXRoaXMuZHJvcGRvd24uZ2V0U3VnZ2VzdGlvbkRhdGFCeU5vZGUoZSksdGhpcy5kcm9wZG93bi5oaWdobGlnaHRPcHRpb24oZSwhMCk7YnJlYWs7Y2FzZVwiRXNjYXBlXCI6Y2FzZVwiRXNjXCI6dGhpcy5kcm9wZG93bi5oaWRlKCk7YnJlYWs7Y2FzZVwiQXJyb3dSaWdodFwiOmlmKHRoaXMuc3RhdGUuYWN0aW9ucy5BcnJvd0xlZnQpcmV0dXJuO2Nhc2VcIlRhYlwiOmlmKFwibWl4XCIhPXRoaXMuc2V0dGluZ3MubW9kZSYmZSYmIXRoaXMuc2V0dGluZ3MuYXV0b0NvbXBsZXRlLnJpZ2h0S2V5JiYhdGhpcy5zdGF0ZS5lZGl0aW5nKXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIG49dGhpcy5kcm9wZG93bi5nZXRNYXBwZWRWYWx1ZShpKTtyZXR1cm4gdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc2V0LmNhbGwodGhpcyxuKSwhMX1yZXR1cm4hMDtjYXNlXCJFbnRlclwiOnQucHJldmVudERlZmF1bHQoKSx0aGlzLnNldHRpbmdzLmhvb2tzLnN1Z2dlc3Rpb25DbGljayh0LHt0YWdpZnk6dGhpcyx0YWdEYXRhOmksc3VnZ2VzdGlvbkVsbTplfSkudGhlbigoKCk9PntpZihlKXJldHVybiB0aGlzLmRyb3Bkb3duLnNlbGVjdE9wdGlvbihlKSxlPXRoaXMuZHJvcGRvd24uZ2V0TmV4dE9yUHJldk9wdGlvbihlLCFhKSx2b2lkIHRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKGUpO3RoaXMuZHJvcGRvd24uaGlkZSgpLFwibWl4XCIhPXRoaXMuc2V0dGluZ3MubW9kZSYmdGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUuaW5wdXRUZXh0LnRyaW0oKSwhMCl9KSkuY2F0Y2goKHQ9PnQpKTticmVhaztjYXNlXCJCYWNrc3BhY2VcIjp7aWYoXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlfHx0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUpcmV0dXJuO2NvbnN0IHQ9dGhpcy5pbnB1dC5yYXcuY2FsbCh0aGlzKTtcIlwiIT10JiY4MjAzIT10LmNoYXJDb2RlQXQoMCl8fCghMD09PXRoaXMuc2V0dGluZ3MuYmFja3NwYWNlP3RoaXMucmVtb3ZlVGFncygpOlwiZWRpdFwiPT10aGlzLnNldHRpbmdzLmJhY2tzcGFjZSYmc2V0VGltZW91dCh0aGlzLmVkaXRUYWcuYmluZCh0aGlzKSwwKSl9fX19LG9uTW91c2VPdmVyKHQpe3ZhciBlPXQudGFyZ2V0LmNsb3Nlc3QodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbVNlbGVjdG9yKTtlJiZ0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbihlKX0sb25Nb3VzZUxlYXZlKHQpe3RoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKCl9LG9uQ2xpY2sodCl7aWYoMD09dC5idXR0b24mJnQudGFyZ2V0IT10aGlzLkRPTS5kcm9wZG93biYmdC50YXJnZXQhPXRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQpe3ZhciBlPXQudGFyZ2V0LmNsb3Nlc3QodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbVNlbGVjdG9yKSxpPXRoaXMuZHJvcGRvd24uZ2V0U3VnZ2VzdGlvbkRhdGFCeU5vZGUoZSk7dGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbj0hMCxzZXRUaW1lb3V0KCgoKT0+dGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbj0hMSksNTApLHRoaXMuc2V0dGluZ3MuaG9va3Muc3VnZ2VzdGlvbkNsaWNrKHQse3RhZ2lmeTp0aGlzLHRhZ0RhdGE6aSxzdWdnZXN0aW9uRWxtOmV9KS50aGVuKCgoKT0+e2U/dGhpcy5kcm9wZG93bi5zZWxlY3RPcHRpb24oZSx0KTp0aGlzLmRyb3Bkb3duLmhpZGUoKX0pKS5jYXRjaCgodD0+Y29uc29sZS53YXJuKHQpKSl9fSxvblNjcm9sbCh0KXt2YXIgZT10LnRhcmdldCxpPWUuc2Nyb2xsVG9wLyhlLnNjcm9sbEhlaWdodC1lLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KSoxMDA7dGhpcy50cmlnZ2VyKFwiZHJvcGRvd246c2Nyb2xsXCIse3BlcmNlbnRhZ2U6TWF0aC5yb3VuZChpKX0pfX19LGdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKHQpe3ZhciBlPXQmJnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJuIHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmZpbmQoKHQ9PnQudmFsdWU9PWUpKXx8bnVsbH0sZ2V0TmV4dE9yUHJldk9wdGlvbih0KXtsZXQgZT0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdO3ZhciBpPXRoaXMuZHJvcGRvd24uZ2V0QWxsU3VnZ2VzdGlvbnNSZWZzKCkscz1pLmZpbmRJbmRleCgoZT0+ZT09PXQpKTtyZXR1cm4gZT9pW3MrMV06aVtzLTFdfSxoaWdobGlnaHRPcHRpb24odCxlKXt2YXIgaSxzPXRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1BY3RpdmU7aWYodGhpcy5zdGF0ZS5kZEl0ZW1FbG0mJih0aGlzLnN0YXRlLmRkSXRlbUVsbS5jbGFzc0xpc3QucmVtb3ZlKHMpLHRoaXMuc3RhdGUuZGRJdGVtRWxtLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIikpLCF0KXJldHVybiB0aGlzLnN0YXRlLmRkSXRlbURhdGE9bnVsbCx0aGlzLnN0YXRlLmRkSXRlbUVsbT1udWxsLHZvaWQgdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMpO2k9dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXNbdGhpcy5nZXROb2RlSW5kZXgodCldLHRoaXMuc3RhdGUuZGRJdGVtRGF0YT1pLHRoaXMuc3RhdGUuZGRJdGVtRWxtPXQsdC5jbGFzc0xpc3QuYWRkKHMpLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCEwKSxlJiYodC5wYXJlbnROb2RlLnNjcm9sbFRvcD10LmNsaWVudEhlaWdodCt0Lm9mZnNldFRvcC10LnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KSx0aGlzLnNldHRpbmdzLmF1dG9Db21wbGV0ZSYmKHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzLGkpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24oKSl9LHNlbGVjdE9wdGlvbih0LGUpe3ZhciBpPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24scz1pLmNsZWFyT25TZWxlY3QsYT1pLmNsb3NlT25TZWxlY3Q7aWYoIXQpcmV0dXJuIHRoaXMuYWRkVGFncyh0aGlzLnN0YXRlLmlucHV0VGV4dCwhMCksdm9pZChhJiZ0aGlzLmRyb3Bkb3duLmhpZGUoKSk7ZT1lfHx7fTt2YXIgbj10LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpLG89XCJub01hdGNoXCI9PW4scj10aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5maW5kKCh0PT4odC52YWx1ZXx8dCk9PW4pKTt0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpzZWxlY3RcIix7ZGF0YTpyLGVsbTp0LGV2ZW50OmV9KSxuJiYocnx8byk/KHRoaXMuc3RhdGUuZWRpdGluZz90aGlzLm9uRWRpdFRhZ0RvbmUobnVsbCxnKHtfX2lzVmFsaWQ6ITB9LHRoaXMubm9ybWFsaXplVGFncyhbcl0pWzBdKSk6dGhpc1tcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/XCJhZGRNaXhUYWdzXCI6XCJhZGRUYWdzXCJdKFtyfHx0aGlzLmlucHV0LnJhdy5jYWxsKHRoaXMpXSxzKSx0aGlzLkRPTS5pbnB1dC5wYXJlbnROb2RlJiYoc2V0VGltZW91dCgoKCk9Pnt0aGlzLkRPTS5pbnB1dC5mb2N1cygpLHRoaXMudG9nZ2xlRm9jdXNDbGFzcyghMCl9KSksYSYmc2V0VGltZW91dCh0aGlzLmRyb3Bkb3duLmhpZGUuYmluZCh0aGlzKSksdC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCgoKT0+e3RoaXMuZHJvcGRvd24uZmlsbEhlYWRlckZvb3RlcigpLHNldFRpbWVvdXQoKCgpPT50LnJlbW92ZSgpKSwxMDApfSkse29uY2U6ITB9KSx0LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbUhpZGRlbikpKTphJiZzZXRUaW1lb3V0KHRoaXMuZHJvcGRvd24uaGlkZS5iaW5kKHRoaXMpKX0sc2VsZWN0QWxsKHQpe3RoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmxlbmd0aD0wLHRoaXMuZHJvcGRvd24uaGlkZSgpLHRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zKFwiXCIpO3ZhciBlPXRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zKFwiXCIpO3JldHVybiB0fHwoZT10aGlzLnN0YXRlLmRyb3Bkb3duLnN1Z2dlc3Rpb25zKSx0aGlzLmFkZFRhZ3MoZSwhMCksdGhpc30sZmlsdGVyTGlzdEl0ZW1zKHQsZSl7dmFyIGkscyxhLG4sbyxyPXRoaXMuc2V0dGluZ3MsbD1yLmRyb3Bkb3duLGQ9KGU9ZXx8e30sW10pLGc9W10scD1yLndoaXRlbGlzdCx1PWwubWF4SXRlbXM+PTA/bC5tYXhJdGVtczoxLzAsbT1sLnNlYXJjaEtleXMsdj0wO2lmKCEodD1cInNlbGVjdFwiPT1yLm1vZGUmJnRoaXMudmFsdWUubGVuZ3RoJiZ0aGlzLnZhbHVlWzBdW3IudGFnVGV4dFByb3BdPT10P1wiXCI6dCl8fCFtLmxlbmd0aClyZXR1cm4gZD1yLmR1cGxpY2F0ZXM/cDpwLmZpbHRlcigodD0+IXRoaXMuaXNUYWdEdXBsaWNhdGUoaCh0KT90LnZhbHVlOnQpKSksdGhpcy5zdGF0ZS5kcm9wZG93bi5zdWdnZXN0aW9ucz1kLGQuc2xpY2UoMCx1KTtmdW5jdGlvbiBmKHQsZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuZXZlcnkoKGU9PnQuaW5jbHVkZXMoZS50b0xvd2VyQ2FzZSgpKSkpfWZvcihvPWwuY2FzZVNlbnNpdGl2ZT9cIlwiK3Q6KFwiXCIrdCkudG9Mb3dlckNhc2UoKTt2PHAubGVuZ3RoO3YrKyl7bGV0IHQsdTtpPXBbdl1pbnN0YW5jZW9mIE9iamVjdD9wW3ZdOnt2YWx1ZTpwW3ZdfTtsZXQgVD0hT2JqZWN0LmtleXMoaSkuc29tZSgodD0+bS5pbmNsdWRlcyh0KSkpP1tcInZhbHVlXCJdOm07bC5mdXp6eVNlYXJjaCYmIWUuZXhhY3Q/KGE9VC5yZWR1Y2UoKCh0LGUpPT50K1wiIFwiKyhpW2VdfHxcIlwiKSksXCJcIikudG9Mb3dlckNhc2UoKS50cmltKCksbC5hY2NlbnRlZFNlYXJjaCYmKGE9YyhhKSxvPWMobykpLHQ9MD09YS5pbmRleE9mKG8pLHU9YT09PW8scz1mKGEsbykpOih0PSEwLHM9VC5zb21lKCh0PT57dmFyIHM9XCJcIisoaVt0XXx8XCJcIik7cmV0dXJuIGwuYWNjZW50ZWRTZWFyY2gmJihzPWMocyksbz1jKG8pKSxsLmNhc2VTZW5zaXRpdmV8fChzPXMudG9Mb3dlckNhc2UoKSksdT1zPT09byxlLmV4YWN0P3M9PT1vOjA9PXMuaW5kZXhPZihvKX0pKSksbj0hci5kdXBsaWNhdGVzJiZ0aGlzLmlzVGFnRHVwbGljYXRlKGgoaSk/aS52YWx1ZTppKSxzJiYhbiYmKHUmJnQ/Zy5wdXNoKGkpOlwic3RhcnRzV2l0aFwiPT1sLnNvcnRieSYmdD9kLnVuc2hpZnQoaSk6ZC5wdXNoKGkpKX1yZXR1cm4gdGhpcy5zdGF0ZS5kcm9wZG93bi5zdWdnZXN0aW9ucz1nLmNvbmNhdChkKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnNvcnRieT9sLnNvcnRieShnLmNvbmNhdChkKSxvKTpnLmNvbmNhdChkKS5zbGljZSgwLHUpfSxnZXRNYXBwZWRWYWx1ZSh0KXt2YXIgZT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLm1hcFZhbHVlVG87cmV0dXJuIGU/XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lKHQpOnRbZV18fHQudmFsdWU6dC52YWx1ZX0sY3JlYXRlTGlzdEhUTUwodCl7cmV0dXJuIGcoW10sdCkubWFwKCgodCxpKT0+e1wic3RyaW5nXCIhPXR5cGVvZiB0JiZcIm51bWJlclwiIT10eXBlb2YgdHx8KHQ9e3ZhbHVlOnR9KTt2YXIgcz10aGlzLmRyb3Bkb3duLmdldE1hcHBlZFZhbHVlKHQpO3JldHVybiBzPVwic3RyaW5nXCI9PXR5cGVvZiBzP2Qocyk6cyx0aGlzLnNldHRpbmdzLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW0uYXBwbHkodGhpcyxbZShlKHt9LHQpLHt9LHttYXBwZWRWYWx1ZTpzfSksdGhpc10pfSkpLmpvaW4oXCJcIil9fTtjb25zdCBiPVwiQHlhaXJlby90YWdpZnkvXCI7dmFyIHkseD17ZW1wdHk6XCJlbXB0eVwiLGV4Y2VlZDpcIm51bWJlciBvZiB0YWdzIGV4Y2VlZGVkXCIscGF0dGVybjpcInBhdHRlcm4gbWlzbWF0Y2hcIixkdXBsaWNhdGU6XCJhbHJlYWR5IGV4aXN0c1wiLG5vdEFsbG93ZWQ6XCJub3QgYWxsb3dlZFwifSxPPXt3cmFwcGVyOih0LGUpPT5gPHRhZ3MgY2xhc3M9XCIke2UuY2xhc3NOYW1lcy5uYW1lc3BhY2V9ICR7ZS5tb2RlP2Ake2UuY2xhc3NOYW1lc1tlLm1vZGUrXCJNb2RlXCJdfWA6XCJcIn0gJHt0LmNsYXNzTmFtZX1cIlxcbiAgICAgICAgICAgICAgICAgICAgJHtlLnJlYWRvbmx5P1wicmVhZG9ubHlcIjpcIlwifVxcbiAgICAgICAgICAgICAgICAgICAgJHtlLmRpc2FibGVkP1wiZGlzYWJsZWRcIjpcIlwifVxcbiAgICAgICAgICAgICAgICAgICAgJHtlLnJlcXVpcmVkP1wicmVxdWlyZWRcIjpcIlwifVxcbiAgICAgICAgICAgICAgICAgICAgJHtcInNlbGVjdFwiPT09ZS5tb2RlP1wic3BlbGxjaGVjaz0nZmFsc2UnXCI6XCJcIn1cXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIj5cXG4gICAgICAgICAgICA8c3BhbiAkeyFlLnJlYWRvbmx5JiZlLnVzZXJJbnB1dD9cImNvbnRlbnRlZGl0YWJsZVwiOlwiXCJ9IHRhYkluZGV4PVwiMFwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke2UucGxhY2Vob2xkZXJ8fFwiJiM4MjAzO1wifVwiIGFyaWEtcGxhY2Vob2xkZXI9XCIke2UucGxhY2Vob2xkZXJ8fFwiXCJ9XCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke2UuY2xhc3NOYW1lcy5pbnB1dH1cIlxcbiAgICAgICAgICAgICAgICByb2xlPVwidGV4dGJveFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtYXV0b2NvbXBsZXRlPVwiYm90aFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtbXVsdGlsaW5lPVwiJHtcIm1peFwiPT1lLm1vZGV9XCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAmIzgyMDM7XFxuICAgICAgICA8L3RhZ3M+YCx0YWcodCxlKXtsZXQgaT1lLnNldHRpbmdzO3JldHVybmA8dGFnIHRpdGxlPVwiJHt0LnRpdGxlfHx0LnZhbHVlfVwiXFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ZWRpdGFibGU9J2ZhbHNlJ1xcbiAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjaz0nZmFsc2UnXFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIiR7aS5hMTF5LmZvY3VzYWJsZVRhZ3M/MDotMX1cIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke2kuY2xhc3NOYW1lcy50YWd9ICR7dC5jbGFzc3x8XCJcIn1cIlxcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldEF0dHJpYnV0ZXModCl9PlxcbiAgICAgICAgICAgIDx4IHRpdGxlPScnIGNsYXNzPVwiJHtpLmNsYXNzTmFtZXMudGFnWH1cIiByb2xlPSdidXR0b24nIGFyaWEtbGFiZWw9J3JlbW92ZSB0YWcnPjwveD5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7aS5jbGFzc05hbWVzLnRhZ1RleHR9XCI+JHt0W2kudGFnVGV4dFByb3BdfHx0LnZhbHVlfTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvdGFnPmB9LGRyb3Bkb3duKHQpe3ZhciBlPXQuZHJvcGRvd24saT1cIm1hbnVhbFwiPT1lLnBvc2l0aW9uLHM9YCR7dC5jbGFzc05hbWVzLmRyb3Bkb3dufWA7cmV0dXJuYDxkaXYgY2xhc3M9XCIke2k/XCJcIjpzfSAke2UuY2xhc3NuYW1lfVwiIHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zZWxlY3Rvcj0ndGFnaWZ5LXN1Z2dlc3Rpb25zLXdyYXBwZXInIGNsYXNzPVwiJHt0LmNsYXNzTmFtZXMuZHJvcGRvd25XcmFwcGVyfVwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5gfSxkcm9wZG93bkNvbnRlbnQodCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPXRoaXMuc3RhdGUuZHJvcGRvd24uc3VnZ2VzdGlvbnM7cmV0dXJuYFxcbiAgICAgICAgICAgICR7ZS50ZW1wbGF0ZXMuZHJvcGRvd25IZWFkZXIuY2FsbCh0aGlzLGkpfVxcbiAgICAgICAgICAgICR7dH1cXG4gICAgICAgICAgICAke2UudGVtcGxhdGVzLmRyb3Bkb3duRm9vdGVyLmNhbGwodGhpcyxpKX1cXG4gICAgICAgIGB9LGRyb3Bkb3duSXRlbSh0KXtyZXR1cm5gPGRpdiAke3RoaXMuZ2V0QXR0cmlidXRlcyh0KX1cXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPScke3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW19ICR7dC5jbGFzcz90LmNsYXNzOlwiXCJ9J1xcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJvcHRpb25cIj4ke3QubWFwcGVkVmFsdWV8fHQudmFsdWV9PC9kaXY+YH0sZHJvcGRvd25IZWFkZXIodCl7cmV0dXJuYDxoZWFkZXIgZGF0YS1zZWxlY3Rvcj0ndGFnaWZ5LXN1Z2dlc3Rpb25zLWhlYWRlcicgY2xhc3M9XCIke3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkhlYWRlcn1cIj48L2hlYWRlcj5gfSxkcm9wZG93bkZvb3Rlcih0KXt2YXIgZT10Lmxlbmd0aC10aGlzLnNldHRpbmdzLmRyb3Bkb3duLm1heEl0ZW1zO3JldHVybiBlPjA/YDxmb290ZXIgZGF0YS1zZWxlY3Rvcj0ndGFnaWZ5LXN1Z2dlc3Rpb25zLWZvb3RlcicgY2xhc3M9XCIke3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkZvb3Rlcn1cIj5cXG4gICAgICAgICAgICAgICAgJHtlfSBtb3JlIGl0ZW1zLiBSZWZpbmUgeW91ciBzZWFyY2guXFxuICAgICAgICAgICAgPC9mb290ZXI+YDpcIlwifSxkcm9wZG93bkl0ZW1Ob01hdGNoOm51bGx9O2Z1bmN0aW9uIEQodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7ZnVuY3Rpb24gaSh0LGkscyl7cyYmaS5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKChpPT5lW3QrXCJFdmVudExpc3RlbmVyXCJdLmNhbGwoZSxpLHMpKSl9cmV0dXJue29mZih0LGUpe3JldHVybiBpKFwicmVtb3ZlXCIsdCxlKSx0aGlzfSxvbih0LGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZpKFwiYWRkXCIsdCxlKSx0aGlzfSx0cmlnZ2VyKGkscyxhKXt2YXIgbjtpZihhPWF8fHtjbG9uZURhdGE6ITB9LGkpaWYodC5zZXR0aW5ncy5pc0pRdWVyeVBsdWdpbilcInJlbW92ZVwiPT1pJiYoaT1cInJlbW92ZVRhZ1wiKSxqUXVlcnkodC5ET00ub3JpZ2luYWxJbnB1dCkudHJpZ2dlckhhbmRsZXIoaSxbc10pO2Vsc2V7dHJ5e3ZhciBvPVwib2JqZWN0XCI9PXR5cGVvZiBzP3M6e3ZhbHVlOnN9O2lmKChvPWEuY2xvbmVEYXRhP2coe30sbyk6bykudGFnaWZ5PXRoaXMscy5ldmVudCYmKG8uZXZlbnQ9ZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuO2xldCBlPW5ldyBGdW5jdGlvbjtmb3IobGV0IGkgaW4gdCl7bGV0IHM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGkpO3MmJihzLmdldHx8cy5zZXQpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkscyk6ZVtpXT10W2ldfXJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KSxlfShzLmV2ZW50KSkscyBpbnN0YW5jZW9mIE9iamVjdClmb3IodmFyIHIgaW4gcylzW3JdaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmKG9bcl09c1tyXSk7bj1uZXcgQ3VzdG9tRXZlbnQoaSx7ZGV0YWlsOm99KX1jYXRjaCh0KXtjb25zb2xlLndhcm4odCl9ZS5kaXNwYXRjaEV2ZW50KG4pfX19fXZhciBNPXtjdXN0b21CaW5kaW5nKCl7dGhpcy5jdXN0b21FdmVudHNMaXN0LmZvckVhY2goKHQ9Pnt0aGlzLm9uKHQsdGhpcy5zZXR0aW5ncy5jYWxsYmFja3NbdF0pfSkpfSxiaW5kaW5nKCl7bGV0IHQ9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXTt2YXIgZSxpPXRoaXMuZXZlbnRzLmNhbGxiYWNrcyxzPXQ/XCJhZGRFdmVudExpc3RlbmVyXCI6XCJyZW1vdmVFdmVudExpc3RlbmVyXCI7aWYoIXRoaXMuc3RhdGUubWFpbkV2ZW50c3x8IXQpe2Zvcih2YXIgYSBpbiB0aGlzLnN0YXRlLm1haW5FdmVudHM9dCx0JiYhdGhpcy5saXN0ZW5lcnMubWFpbiYmKHRoaXMuZXZlbnRzLmJpbmRHbG9iYWwuY2FsbCh0aGlzKSx0aGlzLnNldHRpbmdzLmlzSlF1ZXJ5UGx1Z2luJiZqUXVlcnkodGhpcy5ET00ub3JpZ2luYWxJbnB1dCkub24oXCJ0YWdpZnkucmVtb3ZlQWxsVGFnc1wiLHRoaXMucmVtb3ZlQWxsVGFncy5iaW5kKHRoaXMpKSksZT10aGlzLmxpc3RlbmVycy5tYWluPXRoaXMubGlzdGVuZXJzLm1haW58fHtmb2N1czpbXCJpbnB1dFwiLGkub25Gb2N1c0JsdXIuYmluZCh0aGlzKV0sa2V5ZG93bjpbXCJpbnB1dFwiLGkub25LZXlkb3duLmJpbmQodGhpcyldLGNsaWNrOltcInNjb3BlXCIsaS5vbkNsaWNrU2NvcGUuYmluZCh0aGlzKV0sZGJsY2xpY2s6W1wic2NvcGVcIixpLm9uRG91YmxlQ2xpY2tTY29wZS5iaW5kKHRoaXMpXSxwYXN0ZTpbXCJpbnB1dFwiLGkub25QYXN0ZS5iaW5kKHRoaXMpXSxkcm9wOltcImlucHV0XCIsaS5vbkRyb3AuYmluZCh0aGlzKV19KXRoaXMuRE9NW2VbYV1bMF1dW3NdKGEsZVthXVsxXSk7Y2xlYXJJbnRlcnZhbCh0aGlzLmxpc3RlbmVycy5tYWluLm9yaWdpbmFsSW5wdXRWYWx1ZU9ic2VydmVySW50ZXJ2YWwpLHRoaXMubGlzdGVuZXJzLm1haW4ub3JpZ2luYWxJbnB1dFZhbHVlT2JzZXJ2ZXJJbnRlcnZhbD1zZXRJbnRlcnZhbChpLm9ic2VydmVPcmlnaW5hbElucHV0VmFsdWUuYmluZCh0aGlzKSw1MDApO3ZhciBuPXRoaXMubGlzdGVuZXJzLm1haW4uaW5wdXRNdXRhdGlvbk9ic2VydmVyfHxuZXcgTXV0YXRpb25PYnNlcnZlcihpLm9uSW5wdXRET01DaGFuZ2UuYmluZCh0aGlzKSk7biYmbi5kaXNjb25uZWN0KCksXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlJiZuLm9ic2VydmUodGhpcy5ET00uaW5wdXQse2NoaWxkTGlzdDohMH0pfX0sYmluZEdsb2JhbCh0KXt2YXIgZSxpPXRoaXMuZXZlbnRzLmNhbGxiYWNrcyxzPXQ/XCJyZW1vdmVFdmVudExpc3RlbmVyXCI6XCJhZGRFdmVudExpc3RlbmVyXCI7aWYodHx8IXRoaXMubGlzdGVuZXJzLmdsb2JhbClmb3IoZSBvZih0aGlzLmxpc3RlbmVycy5nbG9iYWw9dGhpcy5saXN0ZW5lcnMmJnRoaXMubGlzdGVuZXJzLmdsb2JhbHx8W3t0eXBlOnRoaXMuaXNJRT9cImtleWRvd25cIjpcImlucHV0XCIsdGFyZ2V0OnRoaXMuRE9NLmlucHV0LGNiOmlbdGhpcy5pc0lFP1wib25JbnB1dElFXCI6XCJvbklucHV0XCJdLmJpbmQodGhpcyl9LHt0eXBlOlwia2V5ZG93blwiLHRhcmdldDp3aW5kb3csY2I6aS5vbldpbmRvd0tleURvd24uYmluZCh0aGlzKX0se3R5cGU6XCJibHVyXCIsdGFyZ2V0OnRoaXMuRE9NLmlucHV0LGNiOmkub25Gb2N1c0JsdXIuYmluZCh0aGlzKX1dLHRoaXMubGlzdGVuZXJzLmdsb2JhbCkpZS50YXJnZXRbc10oZS50eXBlLGUuY2IpfSx1bmJpbmRHbG9iYWwoKXt0aGlzLmV2ZW50cy5iaW5kR2xvYmFsLmNhbGwodGhpcywhMCl9LGNhbGxiYWNrczp7b25Gb2N1c0JsdXIodCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPXQudGFyZ2V0P3RoaXMudHJpbSh0LnRhcmdldC50ZXh0Q29udGVudCk6XCJcIixzPXRoaXMudmFsdWU/LlswXT8uW2UudGFnVGV4dFByb3BdLGE9dC50eXBlLG49ZS5kcm9wZG93bi5lbmFibGVkPj0wLG89e3JlbGF0ZWRUYXJnZXQ6dC5yZWxhdGVkVGFyZ2V0fSxyPXRoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb24mJihufHwhZS5kcm9wZG93bi5jbG9zZU9uU2VsZWN0KSxsPXRoaXMuc3RhdGUuYWN0aW9ucy5hZGROZXcmJm4sZD10LnJlbGF0ZWRUYXJnZXQmJnYuY2FsbCh0aGlzLHQucmVsYXRlZFRhcmdldCkmJnRoaXMuRE9NLnNjb3BlLmNvbnRhaW5zKHQucmVsYXRlZFRhcmdldCk7aWYoXCJibHVyXCI9PWEpe2lmKHQucmVsYXRlZFRhcmdldD09PXRoaXMuRE9NLnNjb3BlKXJldHVybiB0aGlzLmRyb3Bkb3duLmhpZGUoKSx2b2lkIHRoaXMuRE9NLmlucHV0LmZvY3VzKCk7dGhpcy5wb3N0VXBkYXRlKCksZS5vbkNoYW5nZUFmdGVyQmx1ciYmdGhpcy50cmlnZ2VyQ2hhbmdlRXZlbnQoKX1pZighciYmIWwpaWYodGhpcy5zdGF0ZS5oYXNGb2N1cz1cImZvY3VzXCI9PWEmJituZXcgRGF0ZSx0aGlzLnRvZ2dsZUZvY3VzQ2xhc3ModGhpcy5zdGF0ZS5oYXNGb2N1cyksXCJtaXhcIiE9ZS5tb2RlKXtpZihcImZvY3VzXCI9PWEpcmV0dXJuIHRoaXMudHJpZ2dlcihcImZvY3VzXCIsbyksdm9pZCgwIT09ZS5kcm9wZG93bi5lbmFibGVkJiZlLnVzZXJJbnB1dHx8dGhpcy5kcm9wZG93bi5zaG93KHRoaXMudmFsdWUubGVuZ3RoP1wiXCI6dm9pZCAwKSk7XCJibHVyXCI9PWEmJih0aGlzLnRyaWdnZXIoXCJibHVyXCIsbyksdGhpcy5sb2FkaW5nKCExKSxcInNlbGVjdFwiPT1lLm1vZGUmJihkJiYodGhpcy5yZW1vdmVUYWdzKCksaT1cIlwiKSxzPT09aSYmKGk9XCJcIikpLGkmJiF0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uJiZlLmFkZFRhZ09uQmx1ciYmdGhpcy5hZGRUYWdzKGksITApKSx0aGlzLkRPTS5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKSx0aGlzLmRyb3Bkb3duLmhpZGUoKX1lbHNlXCJmb2N1c1wiPT1hP3RoaXMudHJpZ2dlcihcImZvY3VzXCIsbyk6XCJibHVyXCI9PXQudHlwZSYmKHRoaXMudHJpZ2dlcihcImJsdXJcIixvKSx0aGlzLmxvYWRpbmcoITEpLHRoaXMuZHJvcGRvd24uaGlkZSgpLHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZT12b2lkIDAsdGhpcy5zZXRTdGF0ZVNlbGVjdGlvbigpKX0sb25XaW5kb3dLZXlEb3duKHQpe3ZhciBlLGk9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtpZih2LmNhbGwodGhpcyxpKSYmdGhpcy5ET00uc2NvcGUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpc3dpdGNoKGU9aS5uZXh0RWxlbWVudFNpYmxpbmcsdC5rZXkpe2Nhc2VcIkJhY2tzcGFjZVwiOnRoaXMuc2V0dGluZ3MucmVhZG9ubHl8fCh0aGlzLnJlbW92ZVRhZ3MoaSksKGV8fHRoaXMuRE9NLmlucHV0KS5mb2N1cygpKTticmVhaztjYXNlXCJFbnRlclwiOnNldFRpbWVvdXQodGhpcy5lZGl0VGFnLmJpbmQodGhpcyksMCxpKX19LG9uS2V5ZG93bih0KXt2YXIgZT10aGlzLnNldHRpbmdzO1wic2VsZWN0XCI9PWUubW9kZSYmZS5lbmZvcmNlV2hpdGVsaXN0JiZ0aGlzLnZhbHVlLmxlbmd0aCYmXCJUYWJcIiE9dC5rZXkmJnQucHJldmVudERlZmF1bHQoKTt2YXIgaT10aGlzLnRyaW0odC50YXJnZXQudGV4dENvbnRlbnQpO2lmKHRoaXMudHJpZ2dlcihcImtleWRvd25cIix7b3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQodCl9KSxcIm1peFwiPT1lLm1vZGUpe3N3aXRjaCh0LmtleSl7Y2FzZVwiTGVmdFwiOmNhc2VcIkFycm93TGVmdFwiOnRoaXMuc3RhdGUuYWN0aW9ucy5BcnJvd0xlZnQ9ITA7YnJlYWs7Y2FzZVwiRGVsZXRlXCI6Y2FzZVwiQmFja3NwYWNlXCI6aWYodGhpcy5zdGF0ZS5lZGl0aW5nKXJldHVybjt2YXIgcyxhLG4scj1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKSxkPVwiRGVsZXRlXCI9PXQua2V5JiZyLmFuY2hvck9mZnNldD09KHIuYW5jaG9yTm9kZS5sZW5ndGh8fDApLGg9ci5hbmNob3JOb2RlLnByZXZpb3VzU2libGluZyxnPTE9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZXx8IXIuYW5jaG9yT2Zmc2V0JiZoJiYxPT1oLm5vZGVUeXBlJiZyLmFuY2hvck5vZGUucHJldmlvdXNTaWJsaW5nLHA9byh0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUwpLGM9dGhpcy5nZXRUYWdFbG1zKCk7aWYoXCJlZGl0XCI9PWUuYmFja3NwYWNlJiZnKXJldHVybiBzPTE9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZT9udWxsOnIuYW5jaG9yTm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLHNldFRpbWVvdXQodGhpcy5lZGl0VGFnLmJpbmQodGhpcyksMCxzKSx2b2lkIHQucHJldmVudERlZmF1bHQoKTtpZih1KCkmJmcpcmV0dXJuIG49bChnKSxnLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpfHxnLnJlbW92ZSgpLHRoaXMuRE9NLmlucHV0LmZvY3VzKCksdm9pZCBzZXRUaW1lb3V0KCgoKT0+e3RoaXMucGxhY2VDYXJldEFmdGVyTm9kZShuKSx0aGlzLkRPTS5pbnB1dC5jbGljaygpfSkpO2lmKFwiQlJcIj09ci5hbmNob3JOb2RlLm5vZGVOYW1lKXJldHVybjtpZigoZHx8ZykmJjE9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZT9hPTA9PXIuYW5jaG9yT2Zmc2V0P2Q/Y1swXTpudWxsOmNbTWF0aC5taW4oYy5sZW5ndGgsci5hbmNob3JPZmZzZXQpLTFdOmQ/YT1yLmFuY2hvck5vZGUubmV4dEVsZW1lbnRTaWJsaW5nOmcmJihhPWcpLDM9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZSYmIXIuYW5jaG9yTm9kZS5ub2RlVmFsdWUmJnIuYW5jaG9yTm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nJiZ0LnByZXZlbnREZWZhdWx0KCksKGd8fGQpJiYhZS5iYWNrc3BhY2UpcmV0dXJuIHZvaWQgdC5wcmV2ZW50RGVmYXVsdCgpO2lmKFwiUmFuZ2VcIiE9ci50eXBlJiYhci5hbmNob3JPZmZzZXQmJnIuYW5jaG9yTm9kZT09dGhpcy5ET00uaW5wdXQmJlwiRGVsZXRlXCIhPXQua2V5KXJldHVybiB2b2lkIHQucHJldmVudERlZmF1bHQoKTtpZihcIlJhbmdlXCIhPXIudHlwZSYmYSYmYS5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSlyZXR1cm4gdm9pZCB0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUobChhKSk7Y2xlYXJUaW1lb3V0KHkpLHk9c2V0VGltZW91dCgoKCk9Pnt2YXIgdD1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKSxlPW8odGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MKSxpPSFkJiZ0LmFuY2hvck5vZGUucHJldmlvdXNTaWJsaW5nO2lmKGUubGVuZ3RoPj1wLmxlbmd0aCYmaSlpZih2LmNhbGwodGhpcyxpKSYmIWkuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIikpe2lmKHRoaXMucmVtb3ZlVGFncyhpKSx0aGlzLmZpeEZpcmVmb3hMYXN0VGFnTm9DYXJldCgpLDI9PXRoaXMuRE9NLmlucHV0LmNoaWxkcmVuLmxlbmd0aCYmXCJCUlwiPT10aGlzLkRPTS5pbnB1dC5jaGlsZHJlblsxXS50YWdOYW1lKXJldHVybiB0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUw9XCJcIix0aGlzLnZhbHVlLmxlbmd0aD0wLCEwfWVsc2UgaS5yZW1vdmUoKTt0aGlzLnZhbHVlPVtdLm1hcC5jYWxsKGMsKCh0LGUpPT57dmFyIGk9dGhpcy50YWdEYXRhKHQpO2lmKHQucGFyZW50Tm9kZXx8aS5yZWFkb25seSlyZXR1cm4gaTt0aGlzLnRyaWdnZXIoXCJyZW1vdmVcIix7dGFnOnQsaW5kZXg6ZSxkYXRhOml9KX0pKS5maWx0ZXIoKHQ9PnQpKX0pLDIwKX1yZXR1cm4hMH1zd2l0Y2godC5rZXkpe2Nhc2VcIkJhY2tzcGFjZVwiOlwic2VsZWN0XCI9PWUubW9kZSYmZS5lbmZvcmNlV2hpdGVsaXN0JiZ0aGlzLnZhbHVlLmxlbmd0aD90aGlzLnJlbW92ZVRhZ3MoKTp0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJlwibWFudWFsXCIhPWUuZHJvcGRvd24ucG9zaXRpb258fFwiXCIhPXQudGFyZ2V0LnRleHRDb250ZW50JiY4MjAzIT1pLmNoYXJDb2RlQXQoMCl8fCghMD09PWUuYmFja3NwYWNlP3RoaXMucmVtb3ZlVGFncygpOlwiZWRpdFwiPT1lLmJhY2tzcGFjZSYmc2V0VGltZW91dCh0aGlzLmVkaXRUYWcuYmluZCh0aGlzKSwwKSk7YnJlYWs7Y2FzZVwiRXNjXCI6Y2FzZVwiRXNjYXBlXCI6aWYodGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlKXJldHVybjt0LnRhcmdldC5ibHVyKCk7YnJlYWs7Y2FzZVwiRG93blwiOmNhc2VcIkFycm93RG93blwiOnRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZXx8dGhpcy5kcm9wZG93bi5zaG93KCk7YnJlYWs7Y2FzZVwiQXJyb3dSaWdodFwiOntsZXQgdD10aGlzLnN0YXRlLmlucHV0U3VnZ2VzdGlvbnx8dGhpcy5zdGF0ZS5kZEl0ZW1EYXRhO2lmKHQmJmUuYXV0b0NvbXBsZXRlLnJpZ2h0S2V5KXJldHVybiB2b2lkIHRoaXMuYWRkVGFncyhbdF0sITApO2JyZWFrfWNhc2VcIlRhYlwiOntsZXQgcz1cInNlbGVjdFwiPT1lLm1vZGU7aWYoIWl8fHMpcmV0dXJuITA7dC5wcmV2ZW50RGVmYXVsdCgpfWNhc2VcIkVudGVyXCI6aWYodGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlfHwyMjk9PXQua2V5Q29kZSlyZXR1cm47dC5wcmV2ZW50RGVmYXVsdCgpLHNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbnx8dGhpcy5hZGRUYWdzKGksITApfSkpfX0sb25JbnB1dCh0KXt0aGlzLnBvc3RVcGRhdGUoKTt2YXIgZT10aGlzLnNldHRpbmdzO2lmKFwibWl4XCI9PWUubW9kZSlyZXR1cm4gdGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uTWl4VGFnc0lucHV0LmNhbGwodGhpcyx0KTt2YXIgaT10aGlzLmlucHV0Lm5vcm1hbGl6ZS5jYWxsKHRoaXMpLHM9aS5sZW5ndGg+PWUuZHJvcGRvd24uZW5hYmxlZCxhPXt2YWx1ZTppLGlucHV0RWxtOnRoaXMuRE9NLmlucHV0fSxuPXRoaXMudmFsaWRhdGVUYWcoe3ZhbHVlOml9KTtcInNlbGVjdFwiPT1lLm1vZGUmJnRoaXMudG9nZ2xlU2NvcGVWYWxpZGF0aW9uKG4pLGEuaXNWYWxpZD1uLHRoaXMuc3RhdGUuaW5wdXRUZXh0IT1pJiYodGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzLGksITEpLC0xIT1pLnNlYXJjaChlLmRlbGltaXRlcnMpP3RoaXMuYWRkVGFncyhpKSYmdGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzKTplLmRyb3Bkb3duLmVuYWJsZWQ+PTAmJnRoaXMuZHJvcGRvd25bcz9cInNob3dcIjpcImhpZGVcIl0oaSksdGhpcy50cmlnZ2VyKFwiaW5wdXRcIixhKSl9LG9uTWl4VGFnc0lucHV0KHQpe3ZhciBlLGkscyxhLG4sbyxyLGwsZD10aGlzLnNldHRpbmdzLGg9dGhpcy52YWx1ZS5sZW5ndGgscD10aGlzLmdldFRhZ0VsbXMoKSxjPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLHY9W10ubWFwLmNhbGwocCwodD0+dGhpcy50YWdEYXRhKHQpLnZhbHVlKSk7aWYoXCJkZWxldGVDb250ZW50QmFja3dhcmRcIj09dC5pbnB1dFR5cGUmJnUoKSYmdGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uS2V5ZG93bi5jYWxsKHRoaXMse3RhcmdldDp0LnRhcmdldCxrZXk6XCJCYWNrc3BhY2VcIn0pLHRoaXMudmFsdWUuc2xpY2UoKS5mb3JFYWNoKCh0PT57dC5yZWFkb25seSYmIXYuaW5jbHVkZXModC52YWx1ZSkmJmMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYWdFbGVtKHQpKX0pKSxjLmNoaWxkTm9kZXMubGVuZ3RoJiYobS5pbnNlcnROb2RlKGMpLHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kKCExLGMubGFzdENoaWxkKSkscC5sZW5ndGghPWgpcmV0dXJuIHRoaXMudmFsdWU9W10ubWFwLmNhbGwodGhpcy5nZXRUYWdFbG1zKCksKHQ9PnRoaXMudGFnRGF0YSh0KSkpLHZvaWQgdGhpcy51cGRhdGUoe3dpdGhvdXRDaGFuZ2VFdmVudDohMH0pO2lmKHRoaXMuaGFzTWF4VGFncygpKXJldHVybiEwO2lmKHdpbmRvdy5nZXRTZWxlY3Rpb24mJihvPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSkucmFuZ2VDb3VudD4wJiYzPT1vLmFuY2hvck5vZGUubm9kZVR5cGUpe2lmKChtPW8uZ2V0UmFuZ2VBdCgwKS5jbG9uZVJhbmdlKCkpLmNvbGxhcHNlKCEwKSxtLnNldFN0YXJ0KG8uZm9jdXNOb2RlLDApLHM9KGU9bS50b1N0cmluZygpLnNsaWNlKDAsbS5lbmRPZmZzZXQpKS5zcGxpdChkLnBhdHRlcm4pLmxlbmd0aC0xLChpPWUubWF0Y2goZC5wYXR0ZXJuKSkmJihhPWUuc2xpY2UoZS5sYXN0SW5kZXhPZihpW2kubGVuZ3RoLTFdKSkpLGEpe2lmKHRoaXMuc3RhdGUuYWN0aW9ucy5BcnJvd0xlZnQ9ITEsdGhpcy5zdGF0ZS50YWc9e3ByZWZpeDphLm1hdGNoKGQucGF0dGVybilbMF0sdmFsdWU6YS5yZXBsYWNlKGQucGF0dGVybixcIlwiKX0sdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldD1vLmJhc2VPZmZzZXQtdGhpcy5zdGF0ZS50YWcudmFsdWUubGVuZ3RoLGw9dGhpcy5zdGF0ZS50YWcudmFsdWUubWF0Y2goZC5kZWxpbWl0ZXJzKSlyZXR1cm4gdGhpcy5zdGF0ZS50YWcudmFsdWU9dGhpcy5zdGF0ZS50YWcudmFsdWUucmVwbGFjZShkLmRlbGltaXRlcnMsXCJcIiksdGhpcy5zdGF0ZS50YWcuZGVsaW1pdGVycz1sWzBdLHRoaXMuYWRkVGFncyh0aGlzLnN0YXRlLnRhZy52YWx1ZSxkLmRyb3Bkb3duLmNsZWFyT25TZWxlY3QpLHZvaWQgdGhpcy5kcm9wZG93bi5oaWRlKCk7bj10aGlzLnN0YXRlLnRhZy52YWx1ZS5sZW5ndGg+PWQuZHJvcGRvd24uZW5hYmxlZDt0cnl7cj0ocj10aGlzLnN0YXRlLmZsYWdnZWRUYWdzW3RoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXRdKS5wcmVmaXg9PXRoaXMuc3RhdGUudGFnLnByZWZpeCYmci52YWx1ZVswXT09dGhpcy5zdGF0ZS50YWcudmFsdWVbMF0sdGhpcy5zdGF0ZS5mbGFnZ2VkVGFnc1t0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0XSYmIXRoaXMuc3RhdGUudGFnLnZhbHVlJiZkZWxldGUgdGhpcy5zdGF0ZS5mbGFnZ2VkVGFnc1t0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0XX1jYXRjaCh0KXt9KHJ8fHM8dGhpcy5zdGF0ZS5taXhNb2RlLm1hdGNoZWRQYXR0ZXJuQ291bnQpJiYobj0hMSl9ZWxzZSB0aGlzLnN0YXRlLmZsYWdnZWRUYWdzPXt9O3RoaXMuc3RhdGUubWl4TW9kZS5tYXRjaGVkUGF0dGVybkNvdW50PXN9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnVwZGF0ZSh7d2l0aG91dENoYW5nZUV2ZW50OiEwfSksdGhpcy50cmlnZ2VyKFwiaW5wdXRcIixnKHt9LHRoaXMuc3RhdGUudGFnLHt0ZXh0Q29udGVudDp0aGlzLkRPTS5pbnB1dC50ZXh0Q29udGVudH0pKSx0aGlzLnN0YXRlLnRhZyYmdGhpcy5kcm9wZG93bltuP1wic2hvd1wiOlwiaGlkZVwiXSh0aGlzLnN0YXRlLnRhZy52YWx1ZSl9KSwxMCl9LG9uSW5wdXRJRSh0KXt2YXIgZT10aGlzO3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5ldmVudHMuY2FsbGJhY2tzLm9uSW5wdXQuY2FsbChlLHQpfSkpfSxvYnNlcnZlT3JpZ2luYWxJbnB1dFZhbHVlKCl7dGhpcy5ET00ub3JpZ2luYWxJbnB1dC5wYXJlbnROb2RlfHx0aGlzLmRlc3Ryb3koKSx0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlIT10aGlzLkRPTS5vcmlnaW5hbElucHV0LnRhZ2lmeVZhbHVlJiZ0aGlzLmxvYWRPcmlnaW5hbFZhbHVlcygpfSxvbkNsaWNrU2NvcGUodCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPXQudGFyZ2V0LmNsb3Nlc3QoXCIuXCIrZS5jbGFzc05hbWVzLnRhZykscz0rbmV3IERhdGUtdGhpcy5zdGF0ZS5oYXNGb2N1cztpZih0LnRhcmdldCE9dGhpcy5ET00uc2NvcGUpe2lmKCF0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoZS5jbGFzc05hbWVzLnRhZ1gpKXJldHVybiBpPyh0aGlzLnRyaWdnZXIoXCJjbGlja1wiLHt0YWc6aSxpbmRleDp0aGlzLmdldE5vZGVJbmRleChpKSxkYXRhOnRoaXMudGFnRGF0YShpKSxvcmlnaW5hbEV2ZW50OnRoaXMuY2xvbmVFdmVudCh0KX0pLHZvaWQoMSE9PWUuZWRpdFRhZ3MmJjEhPT1lLmVkaXRUYWdzLmNsaWNrc3x8dGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uRG91YmxlQ2xpY2tTY29wZS5jYWxsKHRoaXMsdCkpKTp2b2lkKHQudGFyZ2V0PT10aGlzLkRPTS5pbnB1dCYmKFwibWl4XCI9PWUubW9kZSYmdGhpcy5maXhGaXJlZm94TGFzdFRhZ05vQ2FyZXQoKSxzPjUwMCk/dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlP3RoaXMuZHJvcGRvd24uaGlkZSgpOjA9PT1lLmRyb3Bkb3duLmVuYWJsZWQmJlwibWl4XCIhPWUubW9kZSYmdGhpcy5kcm9wZG93bi5zaG93KHRoaXMudmFsdWUubGVuZ3RoP1wiXCI6dm9pZCAwKTpcInNlbGVjdFwiPT1lLm1vZGUmJiF0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJnRoaXMuZHJvcGRvd24uc2hvdygpKTt0aGlzLnJlbW92ZVRhZ3ModC50YXJnZXQucGFyZW50Tm9kZSl9ZWxzZSB0aGlzLnN0YXRlLmhhc0ZvY3VzfHx0aGlzLkRPTS5pbnB1dC5mb2N1cygpfSxvblBhc3RlKHQpe3QucHJldmVudERlZmF1bHQoKTt2YXIgZSxpLHM9dGhpcy5zZXR0aW5ncztpZihcInNlbGVjdFwiPT1zLm1vZGUmJnMuZW5mb3JjZVdoaXRlbGlzdHx8IXMudXNlcklucHV0KXJldHVybiExO3MucmVhZG9ubHl8fChlPXQuY2xpcGJvYXJkRGF0YXx8d2luZG93LmNsaXBib2FyZERhdGEsaT1lLmdldERhdGEoXCJUZXh0XCIpLHMuaG9va3MuYmVmb3JlUGFzdGUodCx7dGFnaWZ5OnRoaXMscGFzdGVkVGV4dDppLGNsaXBib2FyZERhdGE6ZX0pLnRoZW4oKGU9Pnt2b2lkIDA9PT1lJiYoZT1pKSxlJiYodGhpcy5pbmplY3RBdENhcmV0KGUsd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkpLFwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT90aGlzLmV2ZW50cy5jYWxsYmFja3Mub25NaXhUYWdzSW5wdXQuY2FsbCh0aGlzLHQpOnRoaXMuc2V0dGluZ3MucGFzdGVBc1RhZ3M/dGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUuaW5wdXRUZXh0K2UsITApOnRoaXMuc3RhdGUuaW5wdXRUZXh0PWUpfSkpLmNhdGNoKCh0PT50KSkpfSxvbkRyb3AodCl7dC5wcmV2ZW50RGVmYXVsdCgpfSxvbkVkaXRUYWdJbnB1dCh0LGUpe3ZhciBpPXQuY2xvc2VzdChcIi5cIit0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnKSxzPXRoaXMuZ2V0Tm9kZUluZGV4KGkpLGE9dGhpcy50YWdEYXRhKGkpLG49dGhpcy5pbnB1dC5ub3JtYWxpemUuY2FsbCh0aGlzLHQpLG89e1t0aGlzLnNldHRpbmdzLnRhZ1RleHRQcm9wXTpuLF9fdGFnSWQ6YS5fX3RhZ0lkfSxyPXRoaXMudmFsaWRhdGVUYWcobyk7dGhpcy5lZGl0VGFnQ2hhbmdlRGV0ZWN0ZWQoZyhhLG8pKXx8ITAhPT10Lm9yaWdpbmFsSXNWYWxpZHx8KHI9ITApLGkuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnSW52YWxpZCwhMCE9PXIpLGEuX19pc1ZhbGlkPXIsaS50aXRsZT0hMD09PXI/YS50aXRsZXx8YS52YWx1ZTpyLG4ubGVuZ3RoPj10aGlzLnNldHRpbmdzLmRyb3Bkb3duLmVuYWJsZWQmJih0aGlzLnN0YXRlLmVkaXRpbmcmJih0aGlzLnN0YXRlLmVkaXRpbmcudmFsdWU9biksdGhpcy5kcm9wZG93bi5zaG93KG4pKSx0aGlzLnRyaWdnZXIoXCJlZGl0OmlucHV0XCIse3RhZzppLGluZGV4OnMsZGF0YTpnKHt9LHRoaXMudmFsdWVbc10se25ld1ZhbHVlOm59KSxvcmlnaW5hbEV2ZW50OnRoaXMuY2xvbmVFdmVudChlKX0pfSxvbkVkaXRUYWdGb2N1cyh0KXt0aGlzLnN0YXRlLmVkaXRpbmc9e3Njb3BlOnQsaW5wdXQ6dC5xdWVyeVNlbGVjdG9yKFwiW2NvbnRlbnRlZGl0YWJsZV1cIil9fSxvbkVkaXRUYWdCbHVyKHQpe2lmKHRoaXMuc3RhdGUuaGFzRm9jdXN8fHRoaXMudG9nZ2xlRm9jdXNDbGFzcygpLHRoaXMuRE9NLnNjb3BlLmNvbnRhaW5zKHQpKXt2YXIgZSxpLHM9dGhpcy5zZXR0aW5ncyxhPXQuY2xvc2VzdChcIi5cIitzLmNsYXNzTmFtZXMudGFnKSxuPXRoaXMuaW5wdXQubm9ybWFsaXplLmNhbGwodGhpcyx0KSxvPXRoaXMudGFnRGF0YShhKSxyPW8uX19vcmlnaW5hbERhdGEsbD10aGlzLmVkaXRUYWdDaGFuZ2VEZXRlY3RlZChvKSxkPXRoaXMudmFsaWRhdGVUYWcoe1tzLnRhZ1RleHRQcm9wXTpuLF9fdGFnSWQ6by5fX3RhZ0lkfSk7aWYobilpZihsKXtpZihlPXRoaXMuaGFzTWF4VGFncygpLGk9Zyh7fSxyLHtbcy50YWdUZXh0UHJvcF06dGhpcy50cmltKG4pLF9faXNWYWxpZDpkfSkscy50cmFuc2Zvcm1UYWcuY2FsbCh0aGlzLGksciksITAhPT0oZD0oIWV8fCEwPT09ci5fX2lzVmFsaWQpJiZ0aGlzLnZhbGlkYXRlVGFnKGkpKSl7aWYodGhpcy50cmlnZ2VyKFwiaW52YWxpZFwiLHtkYXRhOmksdGFnOmEsbWVzc2FnZTpkfSkscy5lZGl0VGFncy5rZWVwSW52YWxpZClyZXR1cm47cy5rZWVwSW52YWxpZFRhZ3M/aS5fX2lzVmFsaWQ9ZDppPXJ9ZWxzZSBzLmtlZXBJbnZhbGlkVGFncyYmKGRlbGV0ZSBpLnRpdGxlLGRlbGV0ZSBpW1wiYXJpYS1pbnZhbGlkXCJdLGRlbGV0ZSBpLmNsYXNzKTt0aGlzLm9uRWRpdFRhZ0RvbmUoYSxpKX1lbHNlIHRoaXMub25FZGl0VGFnRG9uZShhLHIpO2Vsc2UgdGhpcy5vbkVkaXRUYWdEb25lKGEpfX0sb25FZGl0VGFna2V5ZG93bih0LGUpe3N3aXRjaCh0aGlzLnRyaWdnZXIoXCJlZGl0OmtleWRvd25cIix7b3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQodCl9KSx0LmtleSl7Y2FzZVwiRXNjXCI6Y2FzZVwiRXNjYXBlXCI6ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlLl9fdGFnaWZ5VGFnRGF0YS5fX29yaWdpbmFsSFRNTCxlKSx0aGlzLnN0YXRlLmVkaXRpbmc9ITE7Y2FzZVwiRW50ZXJcIjpjYXNlXCJUYWJcIjp0LnByZXZlbnREZWZhdWx0KCksdC50YXJnZXQuYmx1cigpfX0sb25Eb3VibGVDbGlja1Njb3BlKHQpe3ZhciBlLGkscz10LnRhcmdldC5jbG9zZXN0KFwiLlwiK3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWcpLGE9dGhpcy50YWdEYXRhKHMpLG49dGhpcy5zZXR0aW5ncztzJiZuLnVzZXJJbnB1dCYmITEhPT1hLmVkaXRhYmxlJiYoZT1zLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnRWRpdGluZyksaT1zLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpLFwic2VsZWN0XCI9PW4ubW9kZXx8bi5yZWFkb25seXx8ZXx8aXx8IXRoaXMuc2V0dGluZ3MuZWRpdFRhZ3N8fHRoaXMuZWRpdFRhZyhzKSx0aGlzLnRvZ2dsZUZvY3VzQ2xhc3MoITApLHRoaXMudHJpZ2dlcihcImRibGNsaWNrXCIse3RhZzpzLGluZGV4OnRoaXMuZ2V0Tm9kZUluZGV4KHMpLGRhdGE6dGhpcy50YWdEYXRhKHMpfSkpfSxvbklucHV0RE9NQ2hhbmdlKHQpe3QuZm9yRWFjaCgodD0+e3QuYWRkZWROb2Rlcy5mb3JFYWNoKCh0PT57aWYoXCI8ZGl2Pjxicj48L2Rpdj5cIj09dC5vdXRlckhUTUwpdC5yZXBsYWNlV2l0aChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO2Vsc2UgaWYoMT09dC5ub2RlVHlwZSYmdC5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdTZWxlY3Rvcikpe2xldCBlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpOzM9PXQuY2hpbGROb2Rlc1swXS5ub2RlVHlwZSYmXCJCUlwiIT10LnByZXZpb3VzU2libGluZy5ub2RlTmFtZSYmKGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXG5cIikpLHQucmVwbGFjZVdpdGgoZSwuLi5bLi4udC5jaGlsZE5vZGVzXS5zbGljZSgwLC0xKSksdGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKGUpfWVsc2UgaWYodi5jYWxsKHRoaXMsdCkmJigzIT10LnByZXZpb3VzU2libGluZz8ubm9kZVR5cGV8fHQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50fHx0LnByZXZpb3VzU2libGluZy5yZW1vdmUoKSx0LnByZXZpb3VzU2libGluZyYmXCJCUlwiPT10LnByZXZpb3VzU2libGluZy5ub2RlTmFtZSkpe3QucHJldmlvdXNTaWJsaW5nLnJlcGxhY2VXaXRoKFwiXFxu4oCLXCIpO2xldCBlPXQubmV4dFNpYmxpbmcsaT1cIlwiO2Zvcig7ZTspaSs9ZS50ZXh0Q29udGVudCxlPWUubmV4dFNpYmxpbmc7aS50cmltKCkmJnRoaXMucGxhY2VDYXJldEFmdGVyTm9kZSh0LnByZXZpb3VzU2libGluZyl9fSkpLHQucmVtb3ZlZE5vZGVzLmZvckVhY2goKHQ9Pnt0JiZcIkJSXCI9PXQubm9kZU5hbWUmJnYuY2FsbCh0aGlzLGUpJiYodGhpcy5yZW1vdmVUYWdzKGUpLHRoaXMuZml4RmlyZWZveExhc3RUYWdOb0NhcmV0KCkpfSkpfSkpO3ZhciBlPXRoaXMuRE9NLmlucHV0Lmxhc3RDaGlsZDtlJiZcIlwiPT1lLm5vZGVWYWx1ZSYmZS5yZW1vdmUoKSxlJiZcIkJSXCI9PWUubm9kZU5hbWV8fHRoaXMuRE9NLmlucHV0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSl9fX07ZnVuY3Rpb24gSSh0LGUpe2lmKCF0KXtjb25zb2xlLndhcm4oXCJUYWdpZnk6XCIsXCJpbnB1dCBlbGVtZW50IG5vdCBmb3VuZFwiLHQpO2NvbnN0IGU9bmV3IFByb3h5KHRoaXMse2dldDooKT0+KCk9PmV9KTtyZXR1cm4gZX1pZih0Ll9fdGFnaWZ5KXJldHVybiBjb25zb2xlLndhcm4oXCJUYWdpZnk6IFwiLFwiaW5wdXQgZWxlbWVudCBpcyBhbHJlYWR5IFRhZ2lmaWVkIC0gU2FtZSBpbnN0YW5jZSBpcyByZXR1cm5lZC5cIix0KSx0Ll9fdGFnaWZ5O3ZhciBpO2codGhpcyxEKHRoaXMpKSx0aGlzLmlzRmlyZWZveD1cInVuZGVmaW5lZFwiIT10eXBlb2YgSW5zdGFsbFRyaWdnZXIsdGhpcy5pc0lFPXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudE1vZGUsZT1lfHx7fSx0aGlzLmdldFBlcnNpc3RlZERhdGE9KGk9ZS5pZCx0PT57bGV0IGUscz1cIi9cIit0O2lmKDE9PWxvY2FsU3RvcmFnZS5nZXRJdGVtKGIraStcIi92XCIsMSkpdHJ5e2U9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbYitpK3NdKX1jYXRjaCh0KXt9cmV0dXJuIGV9KSx0aGlzLnNldFBlcnNpc3RlZERhdGE9KHQ9PnQ/KGxvY2FsU3RvcmFnZS5zZXRJdGVtKGIrdCtcIi92XCIsMSksKGUsaSk9PntsZXQgcz1cIi9cIitpLGE9SlNPTi5zdHJpbmdpZnkoZSk7ZSYmaSYmKGxvY2FsU3RvcmFnZS5zZXRJdGVtKGIrdCtzLGEpLGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3RvcmFnZVwiKSkpfSk6KCk9Pnt9KShlLmlkKSx0aGlzLmNsZWFyUGVyc2lzdGVkRGF0YT0odD0+ZT0+e2NvbnN0IGk9YitcIi9cIit0K1wiL1wiO2lmKGUpbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaStlKTtlbHNlIGZvcihsZXQgdCBpbiBsb2NhbFN0b3JhZ2UpdC5pbmNsdWRlcyhpKSYmbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odCl9KShlLmlkKSx0aGlzLmFwcGx5U2V0dGluZ3ModCxlKSx0aGlzLnN0YXRlPXtpbnB1dFRleHQ6XCJcIixlZGl0aW5nOiExLGFjdGlvbnM6e30sbWl4TW9kZTp7fSxkcm9wZG93bjp7fSxmbGFnZ2VkVGFnczp7fX0sdGhpcy52YWx1ZT1bXSx0aGlzLmxpc3RlbmVycz17fSx0aGlzLkRPTT17fSx0aGlzLmJ1aWxkKHQpLFQuY2FsbCh0aGlzKSx0aGlzLmdldENTU1ZhcnMoKSx0aGlzLmxvYWRPcmlnaW5hbFZhbHVlcygpLHRoaXMuZXZlbnRzLmN1c3RvbUJpbmRpbmcuY2FsbCh0aGlzKSx0aGlzLmV2ZW50cy5iaW5kaW5nLmNhbGwodGhpcyksdC5hdXRvZm9jdXMmJnRoaXMuRE9NLmlucHV0LmZvY3VzKCksdC5fX3RhZ2lmeT10aGlzfXJldHVybiBJLnByb3RvdHlwZT17X2Ryb3Bkb3duOncsaGVscGVyczp7c2FtZVN0cjpzLHJlbW92ZUNvbGxlY3Rpb25Qcm9wOmEsb21pdDpuLGlzT2JqZWN0OmgscGFyc2VIVE1MOnIsZXNjYXBlSFRNTDpkLGV4dGVuZDpnLGNvbmNhdFdpdGhvdXREdXBzOnAsZ2V0VUlEOm0saXNOb2RlVGFnOnZ9LGN1c3RvbUV2ZW50c0xpc3Q6W1wiY2hhbmdlXCIsXCJhZGRcIixcInJlbW92ZVwiLFwiaW52YWxpZFwiLFwiaW5wdXRcIixcImNsaWNrXCIsXCJrZXlkb3duXCIsXCJmb2N1c1wiLFwiYmx1clwiLFwiZWRpdDppbnB1dFwiLFwiZWRpdDpiZWZvcmVVcGRhdGVcIixcImVkaXQ6dXBkYXRlZFwiLFwiZWRpdDpzdGFydFwiLFwiZWRpdDprZXlkb3duXCIsXCJkcm9wZG93bjpzaG93XCIsXCJkcm9wZG93bjpoaWRlXCIsXCJkcm9wZG93bjpzZWxlY3RcIixcImRyb3Bkb3duOnVwZGF0ZWRcIixcImRyb3Bkb3duOm5vTWF0Y2hcIixcImRyb3Bkb3duOnNjcm9sbFwiXSxkYXRhUHJvcHM6W1wiX19pc1ZhbGlkXCIsXCJfX3JlbW92ZWRcIixcIl9fb3JpZ2luYWxEYXRhXCIsXCJfX29yaWdpbmFsSFRNTFwiLFwiX190YWdJZFwiXSx0cmltKHQpe3JldHVybiB0aGlzLnNldHRpbmdzLnRyaW0mJnQmJlwic3RyaW5nXCI9PXR5cGVvZiB0P3QudHJpbSgpOnR9LHBhcnNlSFRNTDpyLHRlbXBsYXRlczpPLHBhcnNlVGVtcGxhdGUodCxlKXtyZXR1cm4gdD10aGlzLnNldHRpbmdzLnRlbXBsYXRlc1t0XXx8dCx0aGlzLnBhcnNlSFRNTCh0LmFwcGx5KHRoaXMsZSkpfSxzZXQgd2hpdGVsaXN0KHQpe2NvbnN0IGU9dCYmQXJyYXkuaXNBcnJheSh0KTt0aGlzLnNldHRpbmdzLndoaXRlbGlzdD1lP3Q6W10sdGhpcy5zZXRQZXJzaXN0ZWREYXRhKGU/dDpbXSxcIndoaXRlbGlzdFwiKX0sZ2V0IHdoaXRlbGlzdCgpe3JldHVybiB0aGlzLnNldHRpbmdzLndoaXRlbGlzdH0sZ2VuZXJhdGVDbGFzc1NlbGVjdG9ycyh0KXtmb3IobGV0IGUgaW4gdCl7bGV0IGk9ZTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxpK1wiU2VsZWN0b3JcIix7Z2V0KCl7cmV0dXJuXCIuXCIrdGhpc1tpXS5zcGxpdChcIiBcIilbMF19fSl9fSxhcHBseVNldHRpbmdzKHQsaSl7Zi50ZW1wbGF0ZXM9dGhpcy50ZW1wbGF0ZXM7dmFyIHM9dGhpcy5zZXR0aW5ncz1nKHt9LGYsaSk7aWYocy5kaXNhYmxlZD10Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpLHMucmVhZG9ubHk9cy5yZWFkb25seXx8dC5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSxzLnBsYWNlaG9sZGVyPWQodC5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKXx8cy5wbGFjZWhvbGRlcnx8XCJcIikscy5yZXF1aXJlZD10Lmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpLHRoaXMuZ2VuZXJhdGVDbGFzc1NlbGVjdG9ycyhzLmNsYXNzTmFtZXMpLHRoaXMuaXNJRSYmKHMuYXV0b0NvbXBsZXRlPSExKSxbXCJ3aGl0ZWxpc3RcIixcImJsYWNrbGlzdFwiXS5mb3JFYWNoKChlPT57dmFyIGk9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2UpO2kmJihpPWkuc3BsaXQocy5kZWxpbWl0ZXJzKSlpbnN0YW5jZW9mIEFycmF5JiYoc1tlXT1pKX0pKSxcImF1dG9Db21wbGV0ZVwiaW4gaSYmIWgoaS5hdXRvQ29tcGxldGUpJiYocy5hdXRvQ29tcGxldGU9Zi5hdXRvQ29tcGxldGUscy5hdXRvQ29tcGxldGUuZW5hYmxlZD1pLmF1dG9Db21wbGV0ZSksXCJtaXhcIj09cy5tb2RlJiYocy5hdXRvQ29tcGxldGUucmlnaHRLZXk9ITAscy5kZWxpbWl0ZXJzPWkuZGVsaW1pdGVyc3x8bnVsbCxzLnRhZ1RleHRQcm9wJiYhcy5kcm9wZG93bi5zZWFyY2hLZXlzLmluY2x1ZGVzKHMudGFnVGV4dFByb3ApJiZzLmRyb3Bkb3duLnNlYXJjaEtleXMucHVzaChzLnRhZ1RleHRQcm9wKSksdC5wYXR0ZXJuKXRyeXtzLnBhdHRlcm49bmV3IFJlZ0V4cCh0LnBhdHRlcm4pfWNhdGNoKHQpe31pZihzLmRlbGltaXRlcnMpe3MuX2RlbGltaXRlcnM9cy5kZWxpbWl0ZXJzO3RyeXtzLmRlbGltaXRlcnM9bmV3IFJlZ0V4cCh0aGlzLnNldHRpbmdzLmRlbGltaXRlcnMsXCJnXCIpfWNhdGNoKHQpe319cy5kaXNhYmxlZCYmKHMudXNlcklucHV0PSExKSx0aGlzLlRFWFRTPWUoZSh7fSx4KSxzLnRleHRzfHx7fSksXCJzZWxlY3RcIiE9cy5tb2RlJiZzLnVzZXJJbnB1dHx8KHMuZHJvcGRvd24uZW5hYmxlZD0wKSxzLmRyb3Bkb3duLmFwcGVuZFRhcmdldD1pLmRyb3Bkb3duJiZpLmRyb3Bkb3duLmFwcGVuZFRhcmdldD9pLmRyb3Bkb3duLmFwcGVuZFRhcmdldDpkb2N1bWVudC5ib2R5O2xldCBhPXRoaXMuZ2V0UGVyc2lzdGVkRGF0YShcIndoaXRlbGlzdFwiKTtBcnJheS5pc0FycmF5KGEpJiYodGhpcy53aGl0ZWxpc3Q9QXJyYXkuaXNBcnJheShzLndoaXRlbGlzdCk/cChzLndoaXRlbGlzdCxhKTphKX0sZ2V0QXR0cmlidXRlcyh0KXt2YXIgZSxpPXRoaXMuZ2V0Q3VzdG9tQXR0cmlidXRlcyh0KSxzPVwiXCI7Zm9yKGUgaW4gaSlzKz1cIiBcIitlKyh2b2lkIDAhPT10W2VdP2A9XCIke2lbZV19XCJgOlwiXCIpO3JldHVybiBzfSxnZXRDdXN0b21BdHRyaWJ1dGVzKHQpe2lmKCFoKHQpKXJldHVyblwiXCI7dmFyIGUsaT17fTtmb3IoZSBpbiB0KVwiX19cIiE9ZS5zbGljZSgwLDIpJiZcImNsYXNzXCIhPWUmJnQuaGFzT3duUHJvcGVydHkoZSkmJnZvaWQgMCE9PXRbZV0mJihpW2VdPWQodFtlXSkpO3JldHVybiBpfSxzZXRTdGF0ZVNlbGVjdGlvbigpe3ZhciB0PXdpbmRvdy5nZXRTZWxlY3Rpb24oKSxlPXthbmNob3JPZmZzZXQ6dC5hbmNob3JPZmZzZXQsYW5jaG9yTm9kZTp0LmFuY2hvck5vZGUscmFuZ2U6dC5nZXRSYW5nZUF0JiZ0LnJhbmdlQ291bnQmJnQuZ2V0UmFuZ2VBdCgwKX07cmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0aW9uPWUsZX0sZ2V0Q2FyZXRHbG9iYWxQb3NpdGlvbigpe2NvbnN0IHQ9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7aWYodC5yYW5nZUNvdW50KXtjb25zdCBlPXQuZ2V0UmFuZ2VBdCgwKSxpPWUuc3RhcnRDb250YWluZXIscz1lLnN0YXJ0T2Zmc2V0O2xldCBhLG47aWYocz4wKXJldHVybiBuPWRvY3VtZW50LmNyZWF0ZVJhbmdlKCksbi5zZXRTdGFydChpLHMtMSksbi5zZXRFbmQoaSxzKSxhPW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkse2xlZnQ6YS5yaWdodCx0b3A6YS50b3AsYm90dG9tOmEuYm90dG9tfTtpZihpLmdldEJvdW5kaW5nQ2xpZW50UmVjdClyZXR1cm4gaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX1yZXR1cm57bGVmdDotOTk5OSx0b3A6LTk5OTl9fSxnZXRDU1NWYXJzKCl7dmFyIHQ9Z2V0Q29tcHV0ZWRTdHlsZSh0aGlzLkRPTS5zY29wZSxudWxsKTt2YXIgZTt0aGlzLkNTU1ZhcnM9e3RhZ0hpZGVUcmFuc2l0aW9uOih0PT57bGV0IGU9dC52YWx1ZTtyZXR1cm5cInNcIj09dC51bml0PzFlMyplOmV9KShmdW5jdGlvbih0KXtpZighdClyZXR1cm57fTt2YXIgZT0odD10LnRyaW0oKS5zcGxpdChcIiBcIilbMF0pLnNwbGl0KC9cXGQrL2cpLmZpbHRlcigodD0+dCkpLnBvcCgpLnRyaW0oKTtyZXR1cm57dmFsdWU6K3Quc3BsaXQoZSkuZmlsdGVyKCh0PT50KSlbMF0udHJpbSgpLHVuaXQ6ZX19KChlPVwidGFnLWhpZGUtdHJhbnNpdGlvblwiLHQuZ2V0UHJvcGVydHlWYWx1ZShcIi0tXCIrZSkpKSl9fSxidWlsZCh0KXt2YXIgZT10aGlzLkRPTTt0aGlzLnNldHRpbmdzLm1peE1vZGUuaW50ZWdyYXRlZD8oZS5vcmlnaW5hbElucHV0PW51bGwsZS5zY29wZT10LGUuaW5wdXQ9dCk6KGUub3JpZ2luYWxJbnB1dD10LGUub3JpZ2luYWxJbnB1dF90YWJJbmRleD10LnRhYkluZGV4LGUuc2NvcGU9dGhpcy5wYXJzZVRlbXBsYXRlKFwid3JhcHBlclwiLFt0LHRoaXMuc2V0dGluZ3NdKSxlLmlucHV0PWUuc2NvcGUucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuaW5wdXRTZWxlY3RvciksdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLnNjb3BlLHQpLHQudGFiSW5kZXg9LTEpfSxkZXN0cm95KCl7dGhpcy5ldmVudHMudW5iaW5kR2xvYmFsLmNhbGwodGhpcyksdGhpcy5ET00uc2NvcGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLkRPTS5zY29wZSksdGhpcy5ET00ub3JpZ2luYWxJbnB1dC50YWJJbmRleD10aGlzLkRPTS5vcmlnaW5hbElucHV0X3RhYkluZGV4LGRlbGV0ZSB0aGlzLkRPTS5vcmlnaW5hbElucHV0Ll9fdGFnaWZ5LHRoaXMuZHJvcGRvd24uaGlkZSghMCksY2xlYXJUaW1lb3V0KHRoaXMuZHJvcGRvd25IaWRlX19iaW5kRXZlbnRzVGltZW91dCksY2xlYXJJbnRlcnZhbCh0aGlzLmxpc3RlbmVycy5tYWluLm9yaWdpbmFsSW5wdXRWYWx1ZU9ic2VydmVySW50ZXJ2YWwpfSxsb2FkT3JpZ2luYWxWYWx1ZXModCl7dmFyIGUsaT10aGlzLnNldHRpbmdzO2lmKHRoaXMuc3RhdGUuYmxvY2tDaGFuZ2VFdmVudD0hMCx2b2lkIDA9PT10KXtjb25zdCBlPXRoaXMuZ2V0UGVyc2lzdGVkRGF0YShcInZhbHVlXCIpO3Q9ZSYmIXRoaXMuRE9NLm9yaWdpbmFsSW5wdXQudmFsdWU/ZTppLm1peE1vZGUuaW50ZWdyYXRlZD90aGlzLkRPTS5pbnB1dC50ZXh0Q29udGVudDp0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlfWlmKHRoaXMucmVtb3ZlQWxsVGFncygpLHQpaWYoXCJtaXhcIj09aS5tb2RlKXRoaXMucGFyc2VNaXhUYWdzKHRoaXMudHJpbSh0KSksKGU9dGhpcy5ET00uaW5wdXQubGFzdENoaWxkKSYmXCJCUlwiPT1lLnRhZ05hbWV8fHRoaXMuRE9NLmlucHV0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFwiPGJyPlwiKTtlbHNle3RyeXtKU09OLnBhcnNlKHQpaW5zdGFuY2VvZiBBcnJheSYmKHQ9SlNPTi5wYXJzZSh0KSl9Y2F0Y2godCl7fXRoaXMuYWRkVGFncyh0LCEwKS5mb3JFYWNoKCh0PT50JiZ0LmNsYXNzTGlzdC5hZGQoaS5jbGFzc05hbWVzLnRhZ05vQW5pbWF0aW9uKSkpfWVsc2UgdGhpcy5wb3N0VXBkYXRlKCk7dGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkPWkubWl4TW9kZS5pbnRlZ3JhdGVkP1wiXCI6dGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZSx0aGlzLnN0YXRlLmJsb2NrQ2hhbmdlRXZlbnQ9ITF9LGNsb25lRXZlbnQodCl7dmFyIGU9e307Zm9yKHZhciBpIGluIHQpZVtpXT10W2ldO3JldHVybiBlfSxsb2FkaW5nKHQpe3JldHVybiB0aGlzLnN0YXRlLmlzTG9hZGluZz10LHRoaXMuRE9NLnNjb3BlLmNsYXNzTGlzdFt0P1wiYWRkXCI6XCJyZW1vdmVcIl0odGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnNjb3BlTG9hZGluZyksdGhpc30sdGFnTG9hZGluZyh0LGUpe3JldHVybiB0JiZ0LmNsYXNzTGlzdFtlP1wiYWRkXCI6XCJyZW1vdmVcIl0odGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0xvYWRpbmcpLHRoaXN9LHRvZ2dsZUNsYXNzKHQsZSl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJnRoaXMuRE9NLnNjb3BlLmNsYXNzTGlzdC50b2dnbGUodCxlKX0sdG9nZ2xlU2NvcGVWYWxpZGF0aW9uKHQpe3ZhciBlPSEwPT09dHx8dm9pZCAwPT09dDshdGhpcy5zZXR0aW5ncy5yZXF1aXJlZCYmdCYmdD09PXRoaXMuVEVYVFMuZW1wdHkmJihlPSEwKSx0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdJbnZhbGlkLCFlKSx0aGlzLkRPTS5zY29wZS50aXRsZT1lP1wiXCI6dH0sdG9nZ2xlRm9jdXNDbGFzcyh0KXt0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5mb2N1cywhIXQpfSx0cmlnZ2VyQ2hhbmdlRXZlbnQ6ZnVuY3Rpb24oKXtpZighdGhpcy5zZXR0aW5ncy5taXhNb2RlLmludGVncmF0ZWQpe3ZhciB0PXRoaXMuRE9NLm9yaWdpbmFsSW5wdXQsZT10aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQhPT10LnZhbHVlLGk9bmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KTtlJiYodGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkPXQudmFsdWUsaS5zaW11bGF0ZWQ9ITAsdC5fdmFsdWVUcmFja2VyJiZ0Ll92YWx1ZVRyYWNrZXIuc2V0VmFsdWUoTWF0aC5yYW5kb20oKSksdC5kaXNwYXRjaEV2ZW50KGkpLHRoaXMudHJpZ2dlcihcImNoYW5nZVwiLHRoaXMuc3RhdGUubGFzdE9yaWdpbmFsVmFsdWVSZXBvcnRlZCksdC52YWx1ZT10aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQpfX0sZXZlbnRzOk0sZml4RmlyZWZveExhc3RUYWdOb0NhcmV0KCl7fSxwbGFjZUNhcmV0QWZ0ZXJOb2RlKHQpe2lmKHQmJnQucGFyZW50Tm9kZSl7dmFyIGU9dCxpPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSxzPWkuZ2V0UmFuZ2VBdCgwKTtpLnJhbmdlQ291bnQmJihzLnNldFN0YXJ0QWZ0ZXIoZXx8dCkscy5jb2xsYXBzZSghMCksaS5yZW1vdmVBbGxSYW5nZXMoKSxpLmFkZFJhbmdlKHMpKX19LGluc2VydEFmdGVyVGFnKHQsZSl7aWYoZT1lfHx0aGlzLnNldHRpbmdzLm1peE1vZGUuaW5zZXJ0QWZ0ZXJUYWcsdCYmdC5wYXJlbnROb2RlJiZlKXJldHVybiBlPVwic3RyaW5nXCI9PXR5cGVvZiBlP2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpOmUsdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHQubmV4dFNpYmxpbmcpLGV9LGVkaXRUYWdDaGFuZ2VEZXRlY3RlZCh0KXt2YXIgZT10Ll9fb3JpZ2luYWxEYXRhO2Zvcih2YXIgaSBpbiBlKWlmKCF0aGlzLmRhdGFQcm9wcy5pbmNsdWRlcyhpKSYmdFtpXSE9ZVtpXSlyZXR1cm4hMDtyZXR1cm4hMX0sZ2V0VGFnVGV4dE5vZGUodCl7cmV0dXJuIHQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnVGV4dFNlbGVjdG9yKX0sc2V0VGFnVGV4dE5vZGUodCxlKXt0aGlzLmdldFRhZ1RleHROb2RlKHQpLmlubmVySFRNTD1kKGUpfSxlZGl0VGFnKHQsZSl7dD10fHx0aGlzLmdldExhc3RUYWcoKSxlPWV8fHt9LHRoaXMuZHJvcGRvd24uaGlkZSgpO3ZhciBpPXRoaXMuc2V0dGluZ3Mscz10aGlzLmdldFRhZ1RleHROb2RlKHQpLGE9dGhpcy5nZXROb2RlSW5kZXgodCksbj10aGlzLnRhZ0RhdGEodCksbz10aGlzLmV2ZW50cy5jYWxsYmFja3Mscj10aGlzLGw9ITA7aWYocyl7aWYoIShuIGluc3RhbmNlb2YgT2JqZWN0JiZcImVkaXRhYmxlXCJpbiBuKXx8bi5lZGl0YWJsZSlyZXR1cm4gbj10aGlzLnRhZ0RhdGEodCx7X19vcmlnaW5hbERhdGE6Zyh7fSxuKSxfX29yaWdpbmFsSFRNTDp0LmNsb25lTm9kZSghMCl9KSx0aGlzLnRhZ0RhdGEobi5fX29yaWdpbmFsSFRNTCxuLl9fb3JpZ2luYWxEYXRhKSxzLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCEwKSx0LmNsYXNzTGlzdC5hZGQoaS5jbGFzc05hbWVzLnRhZ0VkaXRpbmcpLHMuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsby5vbkVkaXRUYWdGb2N1cy5iaW5kKHRoaXMsdCkpLHMuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCgoKT0+by5vbkVkaXRUYWdCbHVyLmNhbGwocixyLmdldFRhZ1RleHROb2RlKHQpKSkpfSkpLHMuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsby5vbkVkaXRUYWdJbnB1dC5iaW5kKHRoaXMscykpLHMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZT0+by5vbkVkaXRUYWdrZXlkb3duLmNhbGwodGhpcyxlLHQpKSksZS5za2lwVmFsaWRhdGlvbnx8KGw9dGhpcy5lZGl0VGFnVG9nZ2xlVmFsaWRpdHkodCkpLHMub3JpZ2luYWxJc1ZhbGlkPWwsdGhpcy50cmlnZ2VyKFwiZWRpdDpzdGFydFwiLHt0YWc6dCxpbmRleDphLGRhdGE6bixpc1ZhbGlkOmx9KSxzLmZvY3VzKCksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoITEscyksdGhpc31lbHNlIGNvbnNvbGUud2FybihcIkNhbm5vdCBmaW5kIGVsZW1lbnQgaW4gVGFnIHRlbXBsYXRlOiAuXCIsaS5jbGFzc05hbWVzLnRhZ1RleHRTZWxlY3Rvcil9LGVkaXRUYWdUb2dnbGVWYWxpZGl0eSh0LGUpe3ZhciBpO2lmKGU9ZXx8dGhpcy50YWdEYXRhKHQpKXJldHVybihpPSEoXCJfX2lzVmFsaWRcImluIGUpfHwhMD09PWUuX19pc1ZhbGlkKXx8dGhpcy5yZW1vdmVUYWdzRnJvbVZhbHVlKHQpLHRoaXMudXBkYXRlKCksdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb3RBbGxvd2VkLCFpKSxlLl9faXNWYWxpZDtjb25zb2xlLndhcm4oXCJ0YWcgaGFzIG5vIGRhdGE6IFwiLHQsZSl9LG9uRWRpdFRhZ0RvbmUodCxlKXtlPWV8fHt9O3ZhciBpPXt0YWc6dD10fHx0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUsaW5kZXg6dGhpcy5nZXROb2RlSW5kZXgodCkscHJldmlvdXNEYXRhOnRoaXMudGFnRGF0YSh0KSxkYXRhOmV9O3RoaXMudHJpZ2dlcihcImVkaXQ6YmVmb3JlVXBkYXRlXCIsaSx7Y2xvbmVEYXRhOiExfSksdGhpcy5zdGF0ZS5lZGl0aW5nPSExLGRlbGV0ZSBlLl9fb3JpZ2luYWxEYXRhLGRlbGV0ZSBlLl9fb3JpZ2luYWxIVE1MLHQmJmVbdGhpcy5zZXR0aW5ncy50YWdUZXh0UHJvcF0/KHQ9dGhpcy5yZXBsYWNlVGFnKHQsZSksdGhpcy5lZGl0VGFnVG9nZ2xlVmFsaWRpdHkodCxlKSx0aGlzLnNldHRpbmdzLmExMXkuZm9jdXNhYmxlVGFncz90LmZvY3VzKCk6dGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKHQpKTp0JiZ0aGlzLnJlbW92ZVRhZ3ModCksdGhpcy50cmlnZ2VyKFwiZWRpdDp1cGRhdGVkXCIsaSksdGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy5zZXR0aW5ncy5rZWVwSW52YWxpZFRhZ3MmJnRoaXMucmVDaGVja0ludmFsaWRUYWdzKCl9LHJlcGxhY2VUYWcodCxlKXtlJiZlLnZhbHVlfHwoZT10Ll9fdGFnaWZ5VGFnRGF0YSksZS5fX2lzVmFsaWQmJjEhPWUuX19pc1ZhbGlkJiZnKGUsdGhpcy5nZXRJbnZhbGlkVGFnQXR0cnMoZSxlLl9faXNWYWxpZCkpO3ZhciBpPXRoaXMuY3JlYXRlVGFnRWxlbShlKTtyZXR1cm4gdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpLHQpLHRoaXMudXBkYXRlVmFsdWVCeURPTVRhZ3MoKSxpfSx1cGRhdGVWYWx1ZUJ5RE9NVGFncygpe3RoaXMudmFsdWUubGVuZ3RoPTAsW10uZm9yRWFjaC5jYWxsKHRoaXMuZ2V0VGFnRWxtcygpLCh0PT57dC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQuc3BsaXQoXCIgXCIpWzBdKXx8dGhpcy52YWx1ZS5wdXNoKHRoaXMudGFnRGF0YSh0KSl9KSksdGhpcy51cGRhdGUoKX0sc2V0UmFuZ2VBdFN0YXJ0RW5kKHQsZSl7dD1cIm51bWJlclwiPT10eXBlb2YgdD90OiEhdCxlPShlPWV8fHRoaXMuRE9NLmlucHV0KS5sYXN0Q2hpbGR8fGU7dmFyIGk9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7dHJ5e2kucmFuZ2VDb3VudD49MSYmW1wiU3RhcnRcIixcIkVuZFwiXS5mb3JFYWNoKChzPT5pLmdldFJhbmdlQXQoMClbXCJzZXRcIitzXShlLHR8fGUubGVuZ3RoKSkpfWNhdGNoKHQpe319LGluamVjdEF0Q2FyZXQodCxlKXtyZXR1cm4hKGU9ZXx8dGhpcy5zdGF0ZS5zZWxlY3Rpb24/LnJhbmdlKSYmdD8odGhpcy5hcHBlbmRNaXhUYWdzKHQpLHRoaXMpOihcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpLGUuZGVsZXRlQ29udGVudHMoKSxlLmluc2VydE5vZGUodCksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoITEsdCksdGhpcy51cGRhdGVWYWx1ZUJ5RE9NVGFncygpLHRoaXMudXBkYXRlKCksdGhpcyl9LGlucHV0OntzZXQoKXtsZXQgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJcIixlPSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07dmFyIGk9dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5jbG9zZU9uU2VsZWN0O3RoaXMuc3RhdGUuaW5wdXRUZXh0PXQsZSYmKHRoaXMuRE9NLmlucHV0LmlubmVySFRNTD1kKFwiXCIrdCkpLCF0JiZpJiZ0aGlzLmRyb3Bkb3duLmhpZGUuYmluZCh0aGlzKSx0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyksdGhpcy5pbnB1dC52YWxpZGF0ZS5jYWxsKHRoaXMpfSxyYXcoKXtyZXR1cm4gdGhpcy5ET00uaW5wdXQudGV4dENvbnRlbnR9LHZhbGlkYXRlKCl7dmFyIHQ9IXRoaXMuc3RhdGUuaW5wdXRUZXh0fHwhMD09PXRoaXMudmFsaWRhdGVUYWcoe3ZhbHVlOnRoaXMuc3RhdGUuaW5wdXRUZXh0fSk7cmV0dXJuIHRoaXMuRE9NLmlucHV0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmlucHV0SW52YWxpZCwhdCksdH0sbm9ybWFsaXplKHQpe3ZhciBlPXR8fHRoaXMuRE9NLmlucHV0LGk9W107ZS5jaGlsZE5vZGVzLmZvckVhY2goKHQ9PjM9PXQubm9kZVR5cGUmJmkucHVzaCh0Lm5vZGVWYWx1ZSkpKSxpPWkuam9pbihcIlxcblwiKTt0cnl7aT1pLnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVycy5zb3VyY2UuY2hhckF0KDApKX1jYXRjaCh0KXt9cmV0dXJuIGk9aS5yZXBsYWNlKC9cXHMvZyxcIiBcIiksdGhpcy50cmltKGkpfSxhdXRvY29tcGxldGU6e3N1Z2dlc3QodCl7aWYodGhpcy5zZXR0aW5ncy5hdXRvQ29tcGxldGUuZW5hYmxlZCl7XCJzdHJpbmdcIj09dHlwZW9mKHQ9dHx8e30pJiYodD17dmFsdWU6dH0pO3ZhciBlPXQudmFsdWU/XCJcIit0LnZhbHVlOlwiXCIsaT1lLnN1YnN0cigwLHRoaXMuc3RhdGUuaW5wdXRUZXh0Lmxlbmd0aCkudG9Mb3dlckNhc2UoKSxzPWUuc3Vic3RyaW5nKHRoaXMuc3RhdGUuaW5wdXRUZXh0Lmxlbmd0aCk7ZSYmdGhpcy5zdGF0ZS5pbnB1dFRleHQmJmk9PXRoaXMuc3RhdGUuaW5wdXRUZXh0LnRvTG93ZXJDYXNlKCk/KHRoaXMuRE9NLmlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtc3VnZ2VzdFwiLHMpLHRoaXMuc3RhdGUuaW5wdXRTdWdnZXN0aW9uPXQpOih0aGlzLkRPTS5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXN1Z2dlc3RcIiksZGVsZXRlIHRoaXMuc3RhdGUuaW5wdXRTdWdnZXN0aW9uKX19LHNldCh0KXt2YXIgZT10aGlzLkRPTS5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN1Z2dlc3RcIiksaT10fHwoZT90aGlzLnN0YXRlLmlucHV0VGV4dCtlOm51bGwpO3JldHVybiEhaSYmKFwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT90aGlzLnJlcGxhY2VUZXh0V2l0aE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5zdGF0ZS50YWcucHJlZml4K2kpKToodGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzLGkpLHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kKCkpLHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzKSx0aGlzLmRyb3Bkb3duLmhpZGUoKSwhMCl9fX0sZ2V0VGFnSWR4KHQpe3JldHVybiB0aGlzLnZhbHVlLmZpbmRJbmRleCgoZT0+ZS5fX3RhZ0lkPT0odHx8e30pLl9fdGFnSWQpKX0sZ2V0Tm9kZUluZGV4KHQpe3ZhciBlPTA7aWYodClmb3IoO3Q9dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyllKys7cmV0dXJuIGV9LGdldFRhZ0VsbXMoKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxpPTA7aTx0O2krKyllW2ldPWFyZ3VtZW50c1tpXTt2YXIgcz1cIi5cIitbLi4udGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZy5zcGxpdChcIiBcIiksLi4uZV0uam9pbihcIi5cIik7cmV0dXJuW10uc2xpY2UuY2FsbCh0aGlzLkRPTS5zY29wZS5xdWVyeVNlbGVjdG9yQWxsKHMpKX0sZ2V0TGFzdFRhZygpe3ZhciB0PXRoaXMuRE9NLnNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ1NlbGVjdG9yfTpub3QoLiR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0hpZGV9KTpub3QoW3JlYWRvbmx5XSlgKTtyZXR1cm4gdFt0Lmxlbmd0aC0xXX0sdGFnRGF0YToodCxlLGkpPT50PyhlJiYodC5fX3RhZ2lmeVRhZ0RhdGE9aT9lOmcoe30sdC5fX3RhZ2lmeVRhZ0RhdGF8fHt9LGUpKSx0Ll9fdGFnaWZ5VGFnRGF0YSk6KGNvbnNvbGUud2FybihcInRhZyBlbGVtZW50IGRvZXNuJ3QgZXhpc3RcIix0LGUpLGUpLGlzVGFnRHVwbGljYXRlKHQsZSxpKXt2YXIgYT0wO2lmKFwic2VsZWN0XCI9PXRoaXMuc2V0dGluZ3MubW9kZSlyZXR1cm4hMTtmb3IobGV0IG4gb2YgdGhpcy52YWx1ZSl7cyh0aGlzLnRyaW0oXCJcIit0KSxuLnZhbHVlLGUpJiZpIT1uLl9fdGFnSWQmJmErK31yZXR1cm4gYX0sZ2V0VGFnSW5kZXhCeVZhbHVlKHQpe3ZhciBlPVtdO3JldHVybiB0aGlzLmdldFRhZ0VsbXMoKS5mb3JFYWNoKCgoaSxhKT0+e3ModGhpcy50cmltKGkudGV4dENvbnRlbnQpLHQsdGhpcy5zZXR0aW5ncy5kcm9wZG93bi5jYXNlU2Vuc2l0aXZlKSYmZS5wdXNoKGEpfSkpLGV9LGdldFRhZ0VsbUJ5VmFsdWUodCl7dmFyIGU9dGhpcy5nZXRUYWdJbmRleEJ5VmFsdWUodClbMF07cmV0dXJuIHRoaXMuZ2V0VGFnRWxtcygpW2VdfSxmbGFzaFRhZyh0KXt0JiYodC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdGbGFzaCksc2V0VGltZW91dCgoKCk9Pnt0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0ZsYXNoKX0pLDEwMCkpfSxpc1RhZ0JsYWNrbGlzdGVkKHQpe3JldHVybiB0PXRoaXMudHJpbSh0LnRvTG93ZXJDYXNlKCkpLHRoaXMuc2V0dGluZ3MuYmxhY2tsaXN0LmZpbHRlcigoZT0+KFwiXCIrZSkudG9Mb3dlckNhc2UoKT09dCkpLmxlbmd0aH0saXNUYWdXaGl0ZWxpc3RlZCh0KXtyZXR1cm4hIXRoaXMuZ2V0V2hpdGVsaXN0SXRlbSh0KX0sZ2V0V2hpdGVsaXN0SXRlbSh0LGUsaSl7ZT1lfHxcInZhbHVlXCI7dmFyIGEsbj10aGlzLnNldHRpbmdzO3JldHVybihpPWl8fG4ud2hpdGVsaXN0KS5zb21lKChpPT57dmFyIG89XCJzdHJpbmdcIj09dHlwZW9mIGk/aTppW2VdfHxpLnZhbHVlO2lmKHMobyx0LG4uZHJvcGRvd24uY2FzZVNlbnNpdGl2ZSxuLnRyaW0pKXJldHVybiBhPVwic3RyaW5nXCI9PXR5cGVvZiBpP3t2YWx1ZTppfTppLCEwfSkpLGF8fFwidmFsdWVcIiE9ZXx8XCJ2YWx1ZVwiPT1uLnRhZ1RleHRQcm9wfHwoYT10aGlzLmdldFdoaXRlbGlzdEl0ZW0odCxuLnRhZ1RleHRQcm9wLGkpKSxhfSx2YWxpZGF0ZVRhZyh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9XCJ2YWx1ZVwiaW4gdD9cInZhbHVlXCI6ZS50YWdUZXh0UHJvcCxzPXRoaXMudHJpbSh0W2ldK1wiXCIpO3JldHVybih0W2ldK1wiXCIpLnRyaW0oKT9lLnBhdHRlcm4mJmUucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCYmIWUucGF0dGVybi50ZXN0KHMpP3RoaXMuVEVYVFMucGF0dGVybjohZS5kdXBsaWNhdGVzJiZ0aGlzLmlzVGFnRHVwbGljYXRlKHMsZS5kcm9wZG93bi5jYXNlU2Vuc2l0aXZlLHQuX190YWdJZCk/dGhpcy5URVhUUy5kdXBsaWNhdGU6dGhpcy5pc1RhZ0JsYWNrbGlzdGVkKHMpfHxlLmVuZm9yY2VXaGl0ZWxpc3QmJiF0aGlzLmlzVGFnV2hpdGVsaXN0ZWQocyk/dGhpcy5URVhUUy5ub3RBbGxvd2VkOiFlLnZhbGlkYXRlfHxlLnZhbGlkYXRlKHQpOnRoaXMuVEVYVFMuZW1wdHl9LGdldEludmFsaWRUYWdBdHRycyh0LGUpe3JldHVybntcImFyaWEtaW52YWxpZFwiOiEwLGNsYXNzOmAke3QuY2xhc3N8fFwiXCJ9ICR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWR9YC50cmltKCksdGl0bGU6ZX19LGhhc01heFRhZ3MoKXtyZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg+PXRoaXMuc2V0dGluZ3MubWF4VGFncyYmdGhpcy5URVhUUy5leGNlZWR9LHNldFJlYWRvbmx5KHQsZSl7dmFyIGk9dGhpcy5zZXR0aW5ncztkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKSxpW2V8fFwicmVhZG9ubHlcIl09dCx0aGlzLkRPTS5zY29wZVsodD9cInNldFwiOlwicmVtb3ZlXCIpK1wiQXR0cmlidXRlXCJdKGV8fFwicmVhZG9ubHlcIiwhMCksdGhpcy5zZXRDb250ZW50RWRpdGFibGUoIXQpfSxzZXRDb250ZW50RWRpdGFibGUodCl7dGhpcy5ET00uaW5wdXQuY29udGVudEVkaXRhYmxlPXQsdGhpcy5ET00uaW5wdXQudGFiSW5kZXg9dD8wOi0xfSxzZXREaXNhYmxlZCh0KXt0aGlzLnNldFJlYWRvbmx5KHQsXCJkaXNhYmxlZFwiKX0sbm9ybWFsaXplVGFncyh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9ZS53aGl0ZWxpc3Qscz1lLmRlbGltaXRlcnMsYT1lLm1vZGUsbj1lLnRhZ1RleHRQcm9wO2UuZW5mb3JjZVdoaXRlbGlzdDt2YXIgbz1bXSxyPSEhaSYmaVswXWluc3RhbmNlb2YgT2JqZWN0LGw9QXJyYXkuaXNBcnJheSh0KSxkPWwmJnRbMF0udmFsdWUsaD10PT4odCtcIlwiKS5zcGxpdChzKS5maWx0ZXIoKHQ9PnQpKS5tYXAoKHQ9Pih7W25dOnRoaXMudHJpbSh0KSx2YWx1ZTp0aGlzLnRyaW0odCl9KSkpO2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0JiYodD10LnRvU3RyaW5nKCkpLFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZighdC50cmltKCkpcmV0dXJuW107dD1oKHQpfWVsc2UgbCYmKHQ9W10uY29uY2F0KC4uLnQubWFwKCh0PT50LnZhbHVlP3Q6aCh0KSkpKSk7cmV0dXJuIHImJiFkJiYodC5mb3JFYWNoKCh0PT57dmFyIGU9by5tYXAoKHQ9PnQudmFsdWUpKSxpPXRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zLmNhbGwodGhpcyx0W25dLHtleGFjdDohMH0pO3RoaXMuc2V0dGluZ3MuZHVwbGljYXRlc3x8KGk9aS5maWx0ZXIoKHQ9PiFlLmluY2x1ZGVzKHQudmFsdWUpKSkpO3ZhciBzPWkubGVuZ3RoPjE/dGhpcy5nZXRXaGl0ZWxpc3RJdGVtKHRbbl0sbixpKTppWzBdO3MmJnMgaW5zdGFuY2VvZiBPYmplY3Q/by5wdXNoKHMpOlwibWl4XCIhPWEmJihudWxsPT10LnZhbHVlJiYodC52YWx1ZT10W25dKSxvLnB1c2godCkpfSkpLG8ubGVuZ3RoJiYodD1vKSksdH0scGFyc2VNaXhUYWdzKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT1lLm1peFRhZ3NJbnRlcnBvbGF0b3Iscz1lLmR1cGxpY2F0ZXMsYT1lLnRyYW5zZm9ybVRhZyxuPWUuZW5mb3JjZVdoaXRlbGlzdCxvPWUubWF4VGFncyxyPWUudGFnVGV4dFByb3AsbD1bXTtyZXR1cm4gdD10LnNwbGl0KGlbMF0pLm1hcCgoKHQsZSk9Pnt2YXIgZCxoLGcscD10LnNwbGl0KGlbMV0pLGM9cFswXSx1PWwubGVuZ3RoPT1vO3RyeXtpZihjPT0rYyl0aHJvdyBFcnJvcjtoPUpTT04ucGFyc2UoYyl9Y2F0Y2godCl7aD10aGlzLm5vcm1hbGl6ZVRhZ3MoYylbMF18fHt2YWx1ZTpjfX1pZihhLmNhbGwodGhpcyxoKSx1fHwhKHAubGVuZ3RoPjEpfHxuJiYhdGhpcy5pc1RhZ1doaXRlbGlzdGVkKGgudmFsdWUpfHwhcyYmdGhpcy5pc1RhZ0R1cGxpY2F0ZShoLnZhbHVlKSl7aWYodClyZXR1cm4gZT9pWzBdK3Q6dH1lbHNlIGhbZD1oW3JdP3I6XCJ2YWx1ZVwiXT10aGlzLnRyaW0oaFtkXSksZz10aGlzLmNyZWF0ZVRhZ0VsZW0oaCksbC5wdXNoKGgpLGcuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm9BbmltYXRpb24pLHBbMF09Zy5vdXRlckhUTUwsdGhpcy52YWx1ZS5wdXNoKGgpO3JldHVybiBwLmpvaW4oXCJcIil9KSkuam9pbihcIlwiKSx0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUw9dCx0aGlzLkRPTS5pbnB1dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5ET00uaW5wdXQubm9ybWFsaXplKCksdGhpcy5nZXRUYWdFbG1zKCkuZm9yRWFjaCgoKHQsZSk9PnRoaXMudGFnRGF0YSh0LGxbZV0pKSksdGhpcy51cGRhdGUoe3dpdGhvdXRDaGFuZ2VFdmVudDohMH0pLHR9LHJlcGxhY2VUZXh0V2l0aE5vZGUodCxlKXtpZih0aGlzLnN0YXRlLnRhZ3x8ZSl7ZT1lfHx0aGlzLnN0YXRlLnRhZy5wcmVmaXgrdGhpcy5zdGF0ZS50YWcudmFsdWU7dmFyIGkscyxhPXRoaXMuc3RhdGUuc2VsZWN0aW9ufHx3aW5kb3cuZ2V0U2VsZWN0aW9uKCksbj1hLmFuY2hvck5vZGUsbz10aGlzLnN0YXRlLnRhZy5kZWxpbWl0ZXJzP3RoaXMuc3RhdGUudGFnLmRlbGltaXRlcnMubGVuZ3RoOjA7cmV0dXJuIG4uc3BsaXRUZXh0KGEuYW5jaG9yT2Zmc2V0LW8pLC0xPT0oaT1uLm5vZGVWYWx1ZS5sYXN0SW5kZXhPZihlKSk/ITA6KHM9bi5zcGxpdFRleHQoaSksdCYmbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0LHMpLCEwKX19LHNlbGVjdFRhZyh0LGUpe3ZhciBpPXRoaXMuc2V0dGluZ3M7aWYoIWkuZW5mb3JjZVdoaXRlbGlzdHx8dGhpcy5pc1RhZ1doaXRlbGlzdGVkKGUudmFsdWUpKXt0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMsZVtpLnRhZ1RleHRQcm9wXXx8ZS52YWx1ZSwhMCksdGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbiYmc2V0VGltZW91dCh0aGlzLnNldFJhbmdlQXRTdGFydEVuZC5iaW5kKHRoaXMpKTt2YXIgcz10aGlzLmdldExhc3RUYWcoKTtyZXR1cm4gcz90aGlzLnJlcGxhY2VUYWcocyxlKTp0aGlzLmFwcGVuZFRhZyh0KSx0aGlzLnZhbHVlWzBdPWUsdGhpcy51cGRhdGUoKSx0aGlzLnRyaWdnZXIoXCJhZGRcIix7dGFnOnQsZGF0YTplfSksW3RdfX0sYWRkRW1wdHlUYWcodCl7dmFyIGU9Zyh7dmFsdWU6XCJcIn0sdHx8e30pLGk9dGhpcy5jcmVhdGVUYWdFbGVtKGUpO3RoaXMudGFnRGF0YShpLGUpLHRoaXMuYXBwZW5kVGFnKGkpLHRoaXMuZWRpdFRhZyhpLHtza2lwVmFsaWRhdGlvbjohMH0pfSxhZGRUYWdzKHQsZSxpKXt2YXIgcz1bXSxhPXRoaXMuc2V0dGluZ3Msbj1bXSxvPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZihpPWl8fGEuc2tpcEludmFsaWQsIXR8fDA9PXQubGVuZ3RoKXJldHVybiBzO3N3aXRjaCh0PXRoaXMubm9ybWFsaXplVGFncyh0KSxhLm1vZGUpe2Nhc2VcIm1peFwiOnJldHVybiB0aGlzLmFkZE1peFRhZ3ModCk7Y2FzZVwic2VsZWN0XCI6ZT0hMSx0aGlzLnJlbW92ZUFsbFRhZ3MoKX1yZXR1cm4gdGhpcy5ET00uaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksdC5mb3JFYWNoKCh0PT57dmFyIGUscj17fSxsPU9iamVjdC5hc3NpZ24oe30sdCx7dmFsdWU6dC52YWx1ZStcIlwifSk7aWYodD1PYmplY3QuYXNzaWduKHt9LGwpLGEudHJhbnNmb3JtVGFnLmNhbGwodGhpcyx0KSx0Ll9faXNWYWxpZD10aGlzLmhhc01heFRhZ3MoKXx8dGhpcy52YWxpZGF0ZVRhZyh0KSwhMCE9PXQuX19pc1ZhbGlkKXtpZihpKXJldHVybjtpZihnKHIsdGhpcy5nZXRJbnZhbGlkVGFnQXR0cnModCx0Ll9faXNWYWxpZCkse19fcHJlSW52YWxpZERhdGE6bH0pLHQuX19pc1ZhbGlkPT10aGlzLlRFWFRTLmR1cGxpY2F0ZSYmdGhpcy5mbGFzaFRhZyh0aGlzLmdldFRhZ0VsbUJ5VmFsdWUodC52YWx1ZSkpLCFhLmNyZWF0ZUludmFsaWRUYWdzKXJldHVybiB2b2lkIG4ucHVzaCh0LnZhbHVlKX1pZihcInJlYWRvbmx5XCJpbiB0JiYodC5yZWFkb25seT9yW1wiYXJpYS1yZWFkb25seVwiXT0hMDpkZWxldGUgdC5yZWFkb25seSksZT10aGlzLmNyZWF0ZVRhZ0VsZW0odCxyKSxzLnB1c2goZSksXCJzZWxlY3RcIj09YS5tb2RlKXJldHVybiB0aGlzLnNlbGVjdFRhZyhlLHQpO28uYXBwZW5kQ2hpbGQoZSksdC5fX2lzVmFsaWQmJiEwPT09dC5fX2lzVmFsaWQ/KHRoaXMudmFsdWUucHVzaCh0KSx0aGlzLnRyaWdnZXIoXCJhZGRcIix7dGFnOmUsaW5kZXg6dGhpcy52YWx1ZS5sZW5ndGgtMSxkYXRhOnR9KSk6KHRoaXMudHJpZ2dlcihcImludmFsaWRcIix7ZGF0YTp0LGluZGV4OnRoaXMudmFsdWUubGVuZ3RoLHRhZzplLG1lc3NhZ2U6dC5fX2lzVmFsaWR9KSxhLmtlZXBJbnZhbGlkVGFnc3x8c2V0VGltZW91dCgoKCk9PnRoaXMucmVtb3ZlVGFncyhlLCEwKSksMWUzKSksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpfSkpLHRoaXMuYXBwZW5kVGFnKG8pLHRoaXMudXBkYXRlKCksdC5sZW5ndGgmJmUmJih0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMsYS5jcmVhdGVJbnZhbGlkVGFncz9cIlwiOm4uam9pbihhLl9kZWxpbWl0ZXJzKSksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoKSksYS5kcm9wZG93bi5lbmFibGVkJiZ0aGlzLmRyb3Bkb3duLnJlZmlsdGVyKCksc30sYWRkTWl4VGFncyh0KXtpZigodD10aGlzLm5vcm1hbGl6ZVRhZ3ModCkpWzBdLnByZWZpeHx8dGhpcy5zdGF0ZS50YWcpcmV0dXJuIHRoaXMucHJlZml4ZWRUZXh0VG9UYWcodFswXSk7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVt7dmFsdWU6dH1dKSx0aGlzLnN0YXRlLnNlbGVjdGlvbjt2YXIgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7cmV0dXJuIHQuZm9yRWFjaCgodD0+e3ZhciBpPXRoaXMuY3JlYXRlVGFnRWxlbSh0KTtlLmFwcGVuZENoaWxkKGkpLHRoaXMuaW5zZXJ0QWZ0ZXJUYWcoaSl9KSksdGhpcy5hcHBlbmRNaXhUYWdzKGUpLGV9LGFwcGVuZE1peFRhZ3ModCl7dmFyIGU9ISF0aGlzLnN0YXRlLnNlbGVjdGlvbjtlP3RoaXMuaW5qZWN0QXRDYXJldCh0KToodGhpcy5ET00uaW5wdXQuZm9jdXMoKSwoZT10aGlzLnNldFN0YXRlU2VsZWN0aW9uKCkpLnJhbmdlLnNldFN0YXJ0KHRoaXMuRE9NLmlucHV0LGUucmFuZ2UuZW5kT2Zmc2V0KSxlLnJhbmdlLnNldEVuZCh0aGlzLkRPTS5pbnB1dCxlLnJhbmdlLmVuZE9mZnNldCksdGhpcy5ET00uaW5wdXQuYXBwZW5kQ2hpbGQodCksdGhpcy51cGRhdGVWYWx1ZUJ5RE9NVGFncygpLHRoaXMudXBkYXRlKCkpfSxwcmVmaXhlZFRleHRUb1RhZyh0KXt2YXIgZSxpPXRoaXMuc2V0dGluZ3Mscz10aGlzLnN0YXRlLnRhZy5kZWxpbWl0ZXJzO2lmKGkudHJhbnNmb3JtVGFnLmNhbGwodGhpcyx0KSx0LnByZWZpeD10LnByZWZpeHx8dGhpcy5zdGF0ZS50YWc/dGhpcy5zdGF0ZS50YWcucHJlZml4OihpLnBhdHRlcm4uc291cmNlfHxpLnBhdHRlcm4pWzBdLGU9dGhpcy5jcmVhdGVUYWdFbGVtKHQpLHRoaXMucmVwbGFjZVRleHRXaXRoTm9kZShlKXx8dGhpcy5ET00uaW5wdXQuYXBwZW5kQ2hpbGQoZSksc2V0VGltZW91dCgoKCk9PmUuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm9BbmltYXRpb24pKSwzMDApLHRoaXMudmFsdWUucHVzaCh0KSx0aGlzLnVwZGF0ZSgpLCFzKXt2YXIgYT10aGlzLmluc2VydEFmdGVyVGFnKGUpfHxlO3RoaXMucGxhY2VDYXJldEFmdGVyTm9kZShhKX1yZXR1cm4gdGhpcy5zdGF0ZS50YWc9bnVsbCx0aGlzLnRyaWdnZXIoXCJhZGRcIixnKHt9LHt0YWc6ZX0se2RhdGE6dH0pKSxlfSxhcHBlbmRUYWcodCl7dmFyIGU9dGhpcy5ET00saT1lLmlucHV0O2k9PT1lLmlucHV0P2Uuc2NvcGUuaW5zZXJ0QmVmb3JlKHQsaSk6ZS5zY29wZS5hcHBlbmRDaGlsZCh0KX0sY3JlYXRlVGFnRWxlbSh0LGkpe3QuX190YWdJZD1tKCk7dmFyIHMsYT1nKHt9LHQsZSh7dmFsdWU6ZCh0LnZhbHVlK1wiXCIpfSxpKSk7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxpPWRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcih0LE5vZGVGaWx0ZXIuU0hPV19URVhULG51bGwsITEpO2U9aS5uZXh0Tm9kZSgpOyllLnRleHRDb250ZW50LnRyaW0oKXx8ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfShzPXRoaXMucGFyc2VUZW1wbGF0ZShcInRhZ1wiLFthLHRoaXNdKSksdGhpcy50YWdEYXRhKHMsdCksc30scmVDaGVja0ludmFsaWRUYWdzKCl7dmFyIHQ9dGhpcy5zZXR0aW5nczt0aGlzLmdldFRhZ0VsbXModC5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQpLmZvckVhY2goKChlLGkpPT57dmFyIHM9dGhpcy50YWdEYXRhKGUpLGE9dGhpcy5oYXNNYXhUYWdzKCksbj10aGlzLnZhbGlkYXRlVGFnKHMpLG89ITA9PT1uJiYhYTtpZihcInNlbGVjdFwiPT10Lm1vZGUmJnRoaXMudG9nZ2xlU2NvcGVWYWxpZGF0aW9uKG4pLG8pcmV0dXJuIHM9cy5fX3ByZUludmFsaWREYXRhP3MuX19wcmVJbnZhbGlkRGF0YTp7dmFsdWU6cy52YWx1ZX0sdGhpcy5yZXBsYWNlVGFnKGUscyk7ZS50aXRsZT1hfHxufSkpfSxyZW1vdmVUYWdzKHQsZSxpKXt2YXIgcyxhPXRoaXMuc2V0dGluZ3M7aWYodD10JiZ0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/W3RdOnQgaW5zdGFuY2VvZiBBcnJheT90OnQ/W3RdOlt0aGlzLmdldExhc3RUYWcoKV0scz10LnJlZHVjZSgoKHQsZSk9PntlJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9dGhpcy5nZXRUYWdFbG1CeVZhbHVlKGUpKTt2YXIgaT10aGlzLnRhZ0RhdGEoZSk7cmV0dXJuIGUmJmkmJiFpLnJlYWRvbmx5JiZ0LnB1c2goe25vZGU6ZSxpZHg6dGhpcy5nZXRUYWdJZHgoaSksZGF0YTp0aGlzLnRhZ0RhdGEoZSx7X19yZW1vdmVkOiEwfSl9KSx0fSksW10pLGk9XCJudW1iZXJcIj09dHlwZW9mIGk/aTp0aGlzLkNTU1ZhcnMudGFnSGlkZVRyYW5zaXRpb24sXCJzZWxlY3RcIj09YS5tb2RlJiYoaT0wLHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcykpLDE9PXMubGVuZ3RoJiZcInNlbGVjdFwiIT1hLm1vZGUmJnNbMF0ubm9kZS5jbGFzc0xpc3QuY29udGFpbnMoYS5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQpJiYoZT0hMCkscy5sZW5ndGgpcmV0dXJuIGEuaG9va3MuYmVmb3JlUmVtb3ZlVGFnKHMse3RhZ2lmeTp0aGlzfSkudGhlbigoKCk9PntmdW5jdGlvbiB0KHQpe3Qubm9kZS5wYXJlbnROb2RlJiYodC5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5ub2RlKSxlP2Eua2VlcEludmFsaWRUYWdzJiZ0aGlzLnRyaWdnZXIoXCJyZW1vdmVcIix7dGFnOnQubm9kZSxpbmRleDp0LmlkeH0pOih0aGlzLnRyaWdnZXIoXCJyZW1vdmVcIix7dGFnOnQubm9kZSxpbmRleDp0LmlkeCxkYXRhOnQuZGF0YX0pLHRoaXMuZHJvcGRvd24ucmVmaWx0ZXIoKSx0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKCksdGhpcy5ET00uaW5wdXQubm9ybWFsaXplKCksYS5rZWVwSW52YWxpZFRhZ3MmJnRoaXMucmVDaGVja0ludmFsaWRUYWdzKCkpKX1pJiZpPjEwJiYxPT1zLmxlbmd0aD9mdW5jdGlvbihlKXtlLm5vZGUuc3R5bGUud2lkdGg9cGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLm5vZGUpLndpZHRoKStcInB4XCIsZG9jdW1lbnQuYm9keS5jbGllbnRUb3AsZS5ub2RlLmNsYXNzTGlzdC5hZGQoYS5jbGFzc05hbWVzLnRhZ0hpZGUpLHNldFRpbWVvdXQodC5iaW5kKHRoaXMpLGksZSl9LmNhbGwodGhpcyxzWzBdKTpzLmZvckVhY2godC5iaW5kKHRoaXMpKSxlfHwodGhpcy5yZW1vdmVUYWdzRnJvbVZhbHVlKHMubWFwKCh0PT50Lm5vZGUpKSksdGhpcy51cGRhdGUoKSxcInNlbGVjdFwiPT1hLm1vZGUmJnRoaXMuc2V0Q29udGVudEVkaXRhYmxlKCEwKSl9KSkuY2F0Y2goKHQ9Pnt9KSl9LHJlbW92ZVRhZ3NGcm9tRE9NKCl7W10uc2xpY2UuY2FsbCh0aGlzLmdldFRhZ0VsbXMoKSkuZm9yRWFjaCgodD0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpKSl9LHJlbW92ZVRhZ3NGcm9tVmFsdWUodCl7KHQ9QXJyYXkuaXNBcnJheSh0KT90Olt0XSkuZm9yRWFjaCgodD0+e3ZhciBlPXRoaXMudGFnRGF0YSh0KSxpPXRoaXMuZ2V0VGFnSWR4KGUpO2k+LTEmJnRoaXMudmFsdWUuc3BsaWNlKGksMSl9KSl9LHJlbW92ZUFsbFRhZ3ModCl7dD10fHx7fSx0aGlzLnZhbHVlPVtdLFwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT90aGlzLkRPTS5pbnB1dC5pbm5lckhUTUw9XCJcIjp0aGlzLnJlbW92ZVRhZ3NGcm9tRE9NKCksdGhpcy5kcm9wZG93bi5yZWZpbHRlcigpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24oKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJnNldFRpbWVvdXQoKCgpPT57dGhpcy5ET00uaW5wdXQuZm9jdXMoKX0pKSxcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJih0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMpLHRoaXMuc2V0Q29udGVudEVkaXRhYmxlKCEwKSksdGhpcy51cGRhdGUodCl9LHBvc3RVcGRhdGUoKXt2YXIgdD10aGlzLnNldHRpbmdzLGU9dC5jbGFzc05hbWVzLGk9XCJtaXhcIj09dC5tb2RlP3QubWl4TW9kZS5pbnRlZ3JhdGVkP3RoaXMuRE9NLmlucHV0LnRleHRDb250ZW50OnRoaXMuRE9NLm9yaWdpbmFsSW5wdXQudmFsdWUudHJpbSgpOnRoaXMudmFsdWUubGVuZ3RoK3RoaXMuaW5wdXQucmF3LmNhbGwodGhpcykubGVuZ3RoO3RoaXMudG9nZ2xlQ2xhc3MoZS5oYXNNYXhUYWdzLHRoaXMudmFsdWUubGVuZ3RoPj10Lm1heFRhZ3MpLHRoaXMudG9nZ2xlQ2xhc3MoZS5oYXNOb1RhZ3MsIXRoaXMudmFsdWUubGVuZ3RoKSx0aGlzLnRvZ2dsZUNsYXNzKGUuZW1wdHksIWkpLFwic2VsZWN0XCI9PXQubW9kZSYmdGhpcy50b2dnbGVTY29wZVZhbGlkYXRpb24odGhpcy52YWx1ZT8uWzBdPy5fX2lzVmFsaWQpfSxzZXRPcmlnaW5hbElucHV0VmFsdWUodCl7dmFyIGU9dGhpcy5ET00ub3JpZ2luYWxJbnB1dDt0aGlzLnNldHRpbmdzLm1peE1vZGUuaW50ZWdyYXRlZHx8KGUudmFsdWU9dCxlLnRhZ2lmeVZhbHVlPWUudmFsdWUsdGhpcy5zZXRQZXJzaXN0ZWREYXRhKHQsXCJ2YWx1ZVwiKSl9LHVwZGF0ZSh0KXt2YXIgZT10aGlzLmdldElucHV0VmFsdWUoKTt0aGlzLnNldE9yaWdpbmFsSW5wdXRWYWx1ZShlKSx0aGlzLnBvc3RVcGRhdGUoKSx0aGlzLnNldHRpbmdzLm9uQ2hhbmdlQWZ0ZXJCbHVyJiYodHx8e30pLndpdGhvdXRDaGFuZ2VFdmVudHx8dGhpcy5zdGF0ZS5ibG9ja0NoYW5nZUV2ZW50fHx0aGlzLnRyaWdnZXJDaGFuZ2VFdmVudCgpfSxnZXRJbnB1dFZhbHVlKCl7dmFyIHQ9dGhpcy5nZXRDbGVhblZhbHVlKCk7cmV0dXJuXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP3RoaXMuZ2V0TWl4ZWRUYWdzQXNTdHJpbmcodCk6dC5sZW5ndGg/dGhpcy5zZXR0aW5ncy5vcmlnaW5hbElucHV0VmFsdWVGb3JtYXQ/dGhpcy5zZXR0aW5ncy5vcmlnaW5hbElucHV0VmFsdWVGb3JtYXQodCk6SlNPTi5zdHJpbmdpZnkodCk6XCJcIn0sZ2V0Q2xlYW5WYWx1ZSh0KXtyZXR1cm4gYSh0fHx0aGlzLnZhbHVlLHRoaXMuZGF0YVByb3BzKX0sZ2V0TWl4ZWRUYWdzQXNTdHJpbmcoKXt2YXIgdD1cIlwiLGU9dGhpcyxpPXRoaXMuc2V0dGluZ3Mscz1pLm9yaWdpbmFsSW5wdXRWYWx1ZUZvcm1hdHx8SlNPTi5zdHJpbmdpZnksYT1pLm1peFRhZ3NJbnRlcnBvbGF0b3I7cmV0dXJuIGZ1bmN0aW9uIGkobyl7by5jaGlsZE5vZGVzLmZvckVhY2goKG89PntpZigxPT1vLm5vZGVUeXBlKXtjb25zdCByPWUudGFnRGF0YShvKTtpZihcIkJSXCI9PW8udGFnTmFtZSYmKHQrPVwiXFxyXFxuXCIpLHImJnYuY2FsbChlLG8pKXtpZihyLl9fcmVtb3ZlZClyZXR1cm47dCs9YVswXStzKG4ocixlLmRhdGFQcm9wcykpK2FbMV19ZWxzZSBvLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpfHxbXCJCXCIsXCJJXCIsXCJVXCJdLmluY2x1ZGVzKG8udGFnTmFtZSk/dCs9by50ZXh0Q29udGVudDpcIkRJVlwiIT1vLnRhZ05hbWUmJlwiUFwiIT1vLnRhZ05hbWV8fCh0Kz1cIlxcclxcblwiLGkobykpfWVsc2UgdCs9by50ZXh0Q29udGVudH0pKX0odGhpcy5ET00uaW5wdXQpLHR9fSxJLnByb3RvdHlwZS5yZW1vdmVUYWc9SS5wcm90b3R5cGUucmVtb3ZlVGFncyxJfSkpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjs6cm9vdHstLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5OnJnYig1MywxNDksMjQ2KTstLXRhZ2lmeS1kZC1iZy1jb2xvcjp3aGl0ZTstLXRhZ2lmeS1kZC1pdGVtLXBhZDouM2VtIC41ZW19LnRhZ2lmeXstLXRhZ3MtZGlzYWJsZWQtYmc6I0YxRjFGMTstLXRhZ3MtYm9yZGVyLWNvbG9yOiNEREQ7LS10YWdzLWhvdmVyLWJvcmRlci1jb2xvcjojQ0NDOy0tdGFncy1mb2N1cy1ib3JkZXItY29sb3I6IzM1OTVmNjstLXRhZy1ib3JkZXItcmFkaXVzOjNweDstLXRhZy1iZzojRTVFNUU1Oy0tdGFnLWhvdmVyOiNEM0UyRTI7LS10YWctdGV4dC1jb2xvcjpibGFjazstLXRhZy10ZXh0LWNvbG9yLS1lZGl0OmJsYWNrOy0tdGFnLXBhZDowLjNlbSAwLjVlbTstLXRhZy1pbnNldC1zaGFkb3ctc2l6ZToxLjFlbTstLXRhZy1pbnZhbGlkLWNvbG9yOiNEMzk0OTQ7LS10YWctaW52YWxpZC1iZzpyZ2JhKDIxMSwgMTQ4LCAxNDgsIDAuNSk7LS10YWctcmVtb3ZlLWJnOnJnYmEoMjExLCAxNDgsIDE0OCwgMC4zKTstLXRhZy1yZW1vdmUtYnRuLWNvbG9yOmJsYWNrOy0tdGFnLXJlbW92ZS1idG4tYmc6bm9uZTstLXRhZy1yZW1vdmUtYnRuLWJnLS1ob3ZlcjojYzc3Nzc3Oy0taW5wdXQtY29sb3I6aW5oZXJpdDstLXRhZy0tbWluLXdpZHRoOjFjaDstLXRhZy0tbWF4LXdpZHRoOmF1dG87LS10YWctaGlkZS10cmFuc2l0aW9uOjAuM3M7LS1wbGFjZWhvbGRlci1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNCk7LS1wbGFjZWhvbGRlci1jb2xvci1mb2N1czpyZ2JhKDAsIDAsIDAsIDAuMjUpOy0tbG9hZGVyLXNpemU6LjhlbTstLXJlYWRvbmx5LXN0cmlwZWQ6MTtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZmxleC13cmFwOndyYXA7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS10YWdzLWJvcmRlci1jb2xvcik7cGFkZGluZzowO2xpbmUtaGVpZ2h0OjA7Y3Vyc29yOnRleHQ7b3V0bGluZTowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOi4xc31Aa2V5ZnJhbWVzIHRhZ3MtLWJ1bXB7MzAle3RyYW5zZm9ybTpzY2FsZSgxLjIpfX1Aa2V5ZnJhbWVzIHJvdGF0ZUxvYWRlcnt0b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19LnRhZ2lmeTpob3Zlcjpub3QoLnRhZ2lmeS0tZm9jdXMpOm5vdCgudGFnaWZ5LS1pbnZhbGlkKXstLXRhZ3MtYm9yZGVyLWNvbG9yOnZhcigtLXRhZ3MtaG92ZXItYm9yZGVyLWNvbG9yKX0udGFnaWZ5W2Rpc2FibGVkXXtiYWNrZ3JvdW5kOnZhcigtLXRhZ3MtZGlzYWJsZWQtYmcpO2ZpbHRlcjpzYXR1cmF0ZSgwKTtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeVtkaXNhYmxlZF0udGFnaWZ5LS1zZWxlY3QsLnRhZ2lmeVtyZWFkb25seV0udGFnaWZ5LS1zZWxlY3R7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KXtjdXJzb3I6ZGVmYXVsdH0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KT4udGFnaWZ5X19pbnB1dCwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KT4udGFnaWZ5X19pbnB1dHt2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDowO21hcmdpbjo1cHggMH0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2LC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXZ7cGFkZGluZzp2YXIoLS10YWctcGFkKX0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2OjpiZWZvcmUsLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdjo6YmVmb3Jle2FuaW1hdGlvbjpyZWFkb25seVN0eWxlcyAxcyBjYWxjKC0xcyAqICh2YXIoLS1yZWFkb25seS1zdHJpcGVkKSAtIDEpKSBwYXVzZWR9QGtleWZyYW1lcyByZWFkb25seVN0eWxlc3swJXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS10YWctYmcpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHZhcigtLXRhZy1iZykgNTAlLHZhcigtLXRhZy1iZykgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCkgMC81cHggNXB4O2JveC1zaGFkb3c6bm9uZTtmaWx0ZXI6YnJpZ2h0bmVzcyguOTUpfX0udGFnaWZ5W2Rpc2FibGVkXSAudGFnaWZ5X190YWdfX3JlbW92ZUJ0biwudGFnaWZ5W3JlYWRvbmx5XSAudGFnaWZ5X190YWdfX3JlbW92ZUJ0bntkaXNwbGF5Om5vbmV9LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dD5icjpsYXN0LWNoaWxke2Rpc3BsYXk6bm9uZX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0OjpiZWZvcmV7Y29udGVudDpub25lfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ6OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7dmVydGljYWwtYWxpZ246bWlkZGxlO29wYWNpdHk6MTt3aWR0aDouN2VtO2hlaWdodDouN2VtO3dpZHRoOnZhcigtLWxvYWRlci1zaXplKTtoZWlnaHQ6dmFyKC0tbG9hZGVyLXNpemUpO21pbi13aWR0aDowO2JvcmRlcjozcHggc29saWQ7Ym9yZGVyLWNvbG9yOiNlZWUgI2JiYiAjODg4IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpyb3RhdGVMb2FkZXIgLjRzIGluZmluaXRlIGxpbmVhcjtjb250ZW50OlxcXCJcXFwiIWltcG9ydGFudDttYXJnaW46LTJweCAwIC0ycHggLjVlbX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0OmVtcHR5OjphZnRlcnttYXJnaW4tbGVmdDowfS50YWdpZnkraW5wdXQsLnRhZ2lmeSt0ZXh0YXJlYXtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7bGVmdDotOTk5OWVtIWltcG9ydGFudDt0cmFuc2Zvcm06c2NhbGUoMCkhaW1wb3J0YW50fS50YWdpZnlfX3RhZ3tkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46NXB4IDAgNXB4IDVweDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7b3V0bGluZTowO2xpbmUtaGVpZ2h0Om5vcm1hbDtjdXJzb3I6ZGVmYXVsdDt0cmFuc2l0aW9uOi4xM3MgZWFzZS1vdXR9LnRhZ2lmeV9fdGFnPmRpdnt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym94LXNpemluZzpib3JkZXItYm94O21heC13aWR0aDoxMDAlO3BhZGRpbmc6dmFyKC0tdGFnLXBhZCk7Y29sb3I6dmFyKC0tdGFnLXRleHQtY29sb3IpO2xpbmUtaGVpZ2h0OmluaGVyaXQ7Ym9yZGVyLXJhZGl1czp2YXIoLS10YWctYm9yZGVyLXJhZGl1cyk7d2hpdGUtc3BhY2U6bm93cmFwO3RyYW5zaXRpb246LjEzcyBlYXNlLW91dH0udGFnaWZ5X190YWc+ZGl2Pip7d2hpdGUtc3BhY2U6cHJlLXdyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wO21pbi13aWR0aDp2YXIoLS10YWctLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLXRhZy0tbWF4LXdpZHRoKTt0cmFuc2l0aW9uOi44cyBlYXNlLC4xcyBjb2xvcn0udGFnaWZ5X190YWc+ZGl2Pltjb250ZW50ZWRpdGFibGVde291dGxpbmU6MDstd2Via2l0LXVzZXItc2VsZWN0OnRleHQ7dXNlci1zZWxlY3Q6dGV4dDtjdXJzb3I6dGV4dDttYXJnaW46LTJweDtwYWRkaW5nOjJweDttYXgtd2lkdGg6MzUwcHh9LnRhZ2lmeV9fdGFnPmRpdjo6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czppbmhlcml0O2luc2V0OnZhcigtLXRhZy1iZy1pbnNldCwwKTt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjoxMjBtcyBlYXNlO2FuaW1hdGlvbjp0YWdzLS1idW1wIC4zcyBlYXNlLW91dCAxO2JveC1zaGFkb3c6MCAwIDAgdmFyKC0tdGFnLWluc2V0LXNoYWRvdy1zaXplKSB2YXIoLS10YWctYmcpIGluc2V0fS50YWdpZnlfX3RhZzpmb2N1cyBkaXY6OmJlZm9yZSwudGFnaWZ5X190YWc6aG92ZXI6bm90KFtyZWFkb25seV0pIGRpdjo6YmVmb3Jley0tdGFnLWJnLWluc2V0Oi0yLjVweDstLXRhZy1iZzp2YXIoLS10YWctaG92ZXIpfS50YWdpZnlfX3RhZy0tbG9hZGluZ3twb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlfX3RhZy0tbG9hZGluZyAudGFnaWZ5X190YWdfX3JlbW92ZUJ0bntkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fdGFnLS1sb2FkaW5nOjphZnRlcnstLWxvYWRlci1zaXplOi40ZW07Y29udGVudDpcXFwiXFxcIjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7b3BhY2l0eToxO3dpZHRoOi43ZW07aGVpZ2h0Oi43ZW07d2lkdGg6dmFyKC0tbG9hZGVyLXNpemUpO2hlaWdodDp2YXIoLS1sb2FkZXItc2l6ZSk7bWluLXdpZHRoOjA7Ym9yZGVyOjNweCBzb2xpZDtib3JkZXItY29sb3I6I2VlZSAjYmJiICM4ODggdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7YW5pbWF0aW9uOnJvdGF0ZUxvYWRlciAuNHMgaW5maW5pdGUgbGluZWFyO21hcmdpbjowIC41ZW0gMCAtLjFlbX0udGFnaWZ5X190YWctLWZsYXNoIGRpdjo6YmVmb3Jle2FuaW1hdGlvbjpub25lfS50YWdpZnlfX3RhZy0taGlkZXt3aWR0aDowIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb246dmFyKC0tdGFnLWhpZGUtdHJhbnNpdGlvbik7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5X190YWctLWhpZGU+ZGl2Pip7d2hpdGUtc3BhY2U6bm93cmFwfS50YWdpZnlfX3RhZy50YWdpZnktLW5vQW5pbT5kaXY6OmJlZm9yZXthbmltYXRpb246bm9uZX0udGFnaWZ5X190YWcudGFnaWZ5LS1ub3RBbGxvd2VkOm5vdCgudGFnaWZ5X190YWctLWVkaXRhYmxlKSBkaXY+c3BhbntvcGFjaXR5Oi41fS50YWdpZnlfX3RhZy50YWdpZnktLW5vdEFsbG93ZWQ6bm90KC50YWdpZnlfX3RhZy0tZWRpdGFibGUpIGRpdjo6YmVmb3Jley0tdGFnLWJnOnZhcigtLXRhZy1pbnZhbGlkLWJnKTt0cmFuc2l0aW9uOi4yc30udGFnaWZ5X190YWdbcmVhZG9ubHldIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue2Rpc3BsYXk6bm9uZX0udGFnaWZ5X190YWdbcmVhZG9ubHldPmRpdjo6YmVmb3Jle2FuaW1hdGlvbjpyZWFkb25seVN0eWxlcyAxcyBjYWxjKC0xcyAqICh2YXIoLS1yZWFkb25seS1zdHJpcGVkKSAtIDEpKSBwYXVzZWR9QGtleWZyYW1lcyByZWFkb25seVN0eWxlc3swJXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS10YWctYmcpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHZhcigtLXRhZy1iZykgNTAlLHZhcigtLXRhZy1iZykgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCkgMC81cHggNXB4O2JveC1zaGFkb3c6bm9uZTtmaWx0ZXI6YnJpZ2h0bmVzcyguOTUpfX0udGFnaWZ5X190YWctLWVkaXRhYmxlPmRpdntjb2xvcjp2YXIoLS10YWctdGV4dC1jb2xvci0tZWRpdCl9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT5kaXY6OmJlZm9yZXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS10YWctaG92ZXIpIGluc2V0IWltcG9ydGFudH0udGFnaWZ5X190YWctLWVkaXRhYmxlPi50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT4udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjo6YWZ0ZXJ7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpIHRyYW5zbGF0ZVgoNXB4KX0udGFnaWZ5X190YWctLWVkaXRhYmxlLnRhZ2lmeS0taW52YWxpZD5kaXY6OmJlZm9yZXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS10YWctaW52YWxpZC1jb2xvcikgaW5zZXQhaW1wb3J0YW50fS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue29yZGVyOjU7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItcmFkaXVzOjUwcHg7Y3Vyc29yOnBvaW50ZXI7Zm9udDoxNHB4LzEgQXJpYWw7YmFja2dyb3VuZDp2YXIoLS10YWctcmVtb3ZlLWJ0bi1iZyk7Y29sb3I6dmFyKC0tdGFnLXJlbW92ZS1idG4tY29sb3IpO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7bWFyZ2luLXJpZ2h0OjQuNjY2NjY2NjY2N3B4O21hcmdpbi1sZWZ0OmF1dG87b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246LjJzIGVhc2Utb3V0fS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOjphZnRlcntjb250ZW50OlxcXCLDl1xcXCI7dHJhbnNpdGlvbjouM3MsY29sb3IgMHN9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnZhcigtLXRhZy1yZW1vdmUtYnRuLWJnLS1ob3Zlcil9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46aG92ZXIrZGl2PnNwYW57b3BhY2l0eTouNX0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjpob3ZlcitkaXY6OmJlZm9yZXtib3gtc2hhZG93OjAgMCAwIHZhcigtLXRhZy1pbnNldC1zaGFkb3ctc2l6ZSkgdmFyKC0tdGFnLXJlbW92ZS1iZyxyZ2JhKDIxMSwxNDgsMTQ4LC4zKSkgaW5zZXQhaW1wb3J0YW50O3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMnN9LnRhZ2lmeTpub3QoLnRhZ2lmeS0tbWl4KSAudGFnaWZ5X19pbnB1dCBicntkaXNwbGF5Om5vbmV9LnRhZ2lmeTpub3QoLnRhZ2lmeS0tbWl4KSAudGFnaWZ5X19pbnB1dCAqe2Rpc3BsYXk6aW5saW5lO3doaXRlLXNwYWNlOm5vd3JhcH0udGFnaWZ5X19pbnB1dHtmbGV4LWdyb3c6MTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MTEwcHg7bWFyZ2luOjVweDtwYWRkaW5nOnZhcigtLXRhZy1wYWQpO2xpbmUtaGVpZ2h0Om5vcm1hbDtwb3NpdGlvbjpyZWxhdGl2ZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtjb2xvcjp2YXIoLS1pbnB1dC1jb2xvcik7Ym94LXNpemluZzppbmhlcml0fS50YWdpZnlfX2lucHV0OmVtcHR5OjpiZWZvcmV7cG9zaXRpb246c3RhdGljfS50YWdpZnlfX2lucHV0OmZvY3Vze291dGxpbmU6MH0udGFnaWZ5X19pbnB1dDpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGVhc2Utb3V0O29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRleCg2cHgpfUBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKXsudGFnaWZ5X19pbnB1dDpmb2N1czo6YmVmb3Jle2Rpc3BsYXk6bm9uZX19LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6ZW1wdHk6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dDtvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmU7Y29sb3I6cmdiYSgwLDAsMCwuMjUpO2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yLWZvY3VzKX1ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCl7LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6ZW1wdHk6OmFmdGVye2Rpc3BsYXk6bm9uZX19LnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtjb250ZW50OmF0dHIoZGF0YS1wbGFjZWhvbGRlcik7aGVpZ2h0OjFlbTtsaW5lLWhlaWdodDoxZW07bWFyZ2luOmF1dG8gMDt6LWluZGV4OjE7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO3doaXRlLXNwYWNlOm5vd3JhcDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZX0udGFnaWZ5X19pbnB1dDo6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc3VnZ2VzdCk7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOmFic29sdXRlO21pbi13aWR0aDpjYWxjKDEwMCUgLSAxLjVlbSk7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6cHJlO2NvbG9yOnZhcigtLXRhZy10ZXh0LWNvbG9yKTtvcGFjaXR5Oi4zO3BvaW50ZXItZXZlbnRzOm5vbmU7bWF4LXdpZHRoOjEwMHB4fS50YWdpZnlfX2lucHV0IC50YWdpZnlfX3RhZ3ttYXJnaW46MCAxcHh9LnRhZ2lmeS0tbWl4e2Rpc3BsYXk6YmxvY2t9LnRhZ2lmeS0tbWl4IC50YWdpZnlfX2lucHV0e3BhZGRpbmc6NXB4O21hcmdpbjowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGluZS1oZWlnaHQ6MS41O2Rpc3BsYXk6YmxvY2t9LnRhZ2lmeS0tbWl4IC50YWdpZnlfX2lucHV0OjpiZWZvcmV7aGVpZ2h0OmF1dG87ZGlzcGxheTpub25lO2xpbmUtaGVpZ2h0OmluaGVyaXR9LnRhZ2lmeS0tbWl4IC50YWdpZnlfX2lucHV0OjphZnRlcntjb250ZW50Om5vbmV9LnRhZ2lmeS0tc2VsZWN0OjphZnRlcntjb250ZW50OlxcXCI+XFxcIjtvcGFjaXR5Oi41O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtib3R0b206MDtmb250OjE2cHggbW9ub3NwYWNlO2xpbmUtaGVpZ2h0OjhweDtoZWlnaHQ6OHB4O3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTUwJSwtNTAlKSBzY2FsZVgoMS4yKSByb3RhdGUoOTBkZWcpO3RyYW5zaXRpb246LjJzIGVhc2UtaW4tb3V0fS50YWdpZnktLXNlbGVjdFthcmlhLWV4cGFuZGVkPXRydWVdOjphZnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xNTAlLC01MCUpIHJvdGF0ZSgyNzBkZWcpIHNjYWxlWSgxLjIpfS50YWdpZnktLXNlbGVjdCAudGFnaWZ5X190YWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MS44ZW07Ym90dG9tOjB9LnRhZ2lmeS0tc2VsZWN0IC50YWdpZnlfX3RhZyBkaXZ7ZGlzcGxheTpub25lfS50YWdpZnktLXNlbGVjdCAudGFnaWZ5X19pbnB1dHt3aWR0aDoxMDAlfS50YWdpZnktLWVtcHR5IC50YWdpZnlfX2lucHV0OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgZWFzZS1vdXQ7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG99LnRhZ2lmeS0tbWl4IC50YWdpZnktLWVtcHR5IC50YWdpZnlfX2lucHV0OjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnRhZ2lmeS0tZm9jdXN7LS10YWdzLWJvcmRlci1jb2xvcjp2YXIoLS10YWdzLWZvY3VzLWJvcmRlci1jb2xvcik7dHJhbnNpdGlvbjowc30udGFnaWZ5LS1pbnZhbGlkey0tdGFncy1ib3JkZXItY29sb3I6I0QzOTQ5NH0udGFnaWZ5X19kcm9wZG93bntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMXB4KTtvdmVyZmxvdzpoaWRkZW59LnRhZ2lmeV9fZHJvcGRvd25bcGxhY2VtZW50PXRvcF17bWFyZ2luLXRvcDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKX0udGFnaWZ5X19kcm9wZG93bltwbGFjZW1lbnQ9dG9wXSAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcntib3JkZXItdG9wLXdpZHRoOjEuMXB4O2JvcmRlci1ib3R0b20td2lkdGg6MH0udGFnaWZ5X19kcm9wZG93bltwb3NpdGlvbj10ZXh0XXtib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKHZhcigtLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5KSwuMSk7Zm9udC1zaXplOi45ZW19LnRhZ2lmeV9fZHJvcGRvd25bcG9zaXRpb249dGV4dF0gLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7Ym9yZGVyLXdpZHRoOjFweH0udGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcnttYXgtaGVpZ2h0OjMwMHB4O292ZXJmbG93OmF1dG87b3ZlcmZsb3cteDpoaWRkZW47YmFja2dyb3VuZDp2YXIoLS10YWdpZnktZGQtYmctY29sb3IpO2JvcmRlcjoxcHggc29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5KTtib3JkZXItYm90dG9tLXdpZHRoOjEuNXB4O2JvcmRlci10b3Atd2lkdGg6MDtib3gtc2hhZG93OjAgMnB4IDRweCAtMnB4IHJnYmEoMCwwLDAsLjIpO3RyYW5zaXRpb246LjI1cyBjdWJpYy1iZXppZXIoMCwxLC41LDEpfS50YWdpZnlfX2Ryb3Bkb3duX19oZWFkZXI6ZW1wdHl7ZGlzcGxheTpub25lfS50YWdpZnlfX2Ryb3Bkb3duX19mb290ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDouNWVtO3BhZGRpbmc6dmFyKC0tdGFnaWZ5LWRkLWl0ZW0tcGFkKTtmb250LXNpemU6LjdlbTtmb250LXN0eWxlOml0YWxpYztvcGFjaXR5Oi41fS50YWdpZnlfX2Ryb3Bkb3duX19mb290ZXI6ZW1wdHl7ZGlzcGxheTpub25lfS50YWdpZnlfX2Ryb3Bkb3duLS1pbml0aWFsIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye21heC1oZWlnaHQ6MjBweDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMWVtKX0udGFnaWZ5X19kcm9wZG93bi0taW5pdGlhbFtwbGFjZW1lbnQ9dG9wXSAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyZW0pfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVte2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOnZhcigtLXRhZ2lmeS1kZC1pdGVtLXBhZCk7bWFyZ2luOjFweDtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOjA7bWF4LWhlaWdodDo2MHB4O21heC13aWR0aDoxMDAlfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS10YWdpZnktZGQtY29sb3ItcHJpbWFyeSk7Y29sb3I6I2ZmZn0udGFnaWZ5X19kcm9wZG93bl9faXRlbTphY3RpdmV7ZmlsdGVyOmJyaWdodG5lc3MoMTA1JSl9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWhpZGRlbntwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luOjAgMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO21heC1oZWlnaHQ6MDt0cmFuc2l0aW9uOnZhcigtLXRhZ2lmeS1kZC1pdGVtLS1oaWRkZW4tZHVyYXRpb24sLjNzKSFpbXBvcnRhbnR9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWhpZGRlbj4qe3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjppbmhlcml0fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AeWFpcmVvL3RhZ2lmeS9kaXN0L3RhZ2lmeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCLENBQUMsTUFBTSx5Q0FBeUMsQ0FBQywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLDBCQUEwQixDQUFDLHdCQUF3QixDQUFDLDhCQUE4QixDQUFDLGlDQUFpQyxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixDQUFDLHFCQUFxQixDQUFDLDZCQUE2QixDQUFDLDJCQUEyQixDQUFDLHlDQUF5QyxDQUFDLHdDQUF3QyxDQUFD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Z0JBQWdCLENBQUMsMkNBQTJDLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQUMsd0NBQXdDLENBQUMsc0NBQXNDLENBQUMsZ0NBQWdDLFlBQVksQ0FBQywwQkFBMEIsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLFlBQVksQ0FBQyxzREFBc0QsZUFBZSxDQUFDLDBCQUEwQixDQUFDLHFFQUFxRSx5QkFBeUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnQ0FBZ0MseUNBQXlDLENBQUMsVUFBVSxDQUFDLCtCQUErQix1QkFBdUIsQ0FBQyxnQ0FBZ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLCtEQUErRCxDQUFDLGtDQUFrQywyQkFBMkIsQ0FBQyxTQUFTLENBQUMsa0JBQWtCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7OnJvb3R7LS10YWdpZnktZGQtY29sb3ItcHJpbWFyeTpyZ2IoNTMsMTQ5LDI0Nik7LS10YWdpZnktZGQtYmctY29sb3I6d2hpdGU7LS10YWdpZnktZGQtaXRlbS1wYWQ6LjNlbSAuNWVtfS50YWdpZnl7LS10YWdzLWRpc2FibGVkLWJnOiNGMUYxRjE7LS10YWdzLWJvcmRlci1jb2xvcjojREREOy0tdGFncy1ob3Zlci1ib3JkZXItY29sb3I6I0NDQzstLXRhZ3MtZm9jdXMtYm9yZGVyLWNvbG9yOiMzNTk1ZjY7LS10YWctYm9yZGVyLXJhZGl1czozcHg7LS10YWctYmc6I0U1RTVFNTstLXRhZy1ob3ZlcjojRDNFMkUyOy0tdGFnLXRleHQtY29sb3I6YmxhY2s7LS10YWctdGV4dC1jb2xvci0tZWRpdDpibGFjazstLXRhZy1wYWQ6MC4zZW0gMC41ZW07LS10YWctaW5zZXQtc2hhZG93LXNpemU6MS4xZW07LS10YWctaW52YWxpZC1jb2xvcjojRDM5NDk0Oy0tdGFnLWludmFsaWQtYmc6cmdiYSgyMTEsIDE0OCwgMTQ4LCAwLjUpOy0tdGFnLXJlbW92ZS1iZzpyZ2JhKDIxMSwgMTQ4LCAxNDgsIDAuMyk7LS10YWctcmVtb3ZlLWJ0bi1jb2xvcjpibGFjazstLXRhZy1yZW1vdmUtYnRuLWJnOm5vbmU7LS10YWctcmVtb3ZlLWJ0bi1iZy0taG92ZXI6I2M3Nzc3NzstLWlucHV0LWNvbG9yOmluaGVyaXQ7LS10YWctLW1pbi13aWR0aDoxY2g7LS10YWctLW1heC13aWR0aDphdXRvOy0tdGFnLWhpZGUtdHJhbnNpdGlvbjowLjNzOy0tcGxhY2Vob2xkZXItY29sb3I6cmdiYSgwLCAwLCAwLCAwLjQpOy0tcGxhY2Vob2xkZXItY29sb3ItZm9jdXM6cmdiYSgwLCAwLCAwLCAwLjI1KTstLWxvYWRlci1zaXplOi44ZW07LS1yZWFkb25seS1zdHJpcGVkOjE7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2ZsZXgtd3JhcDp3cmFwO2JvcmRlcjoxcHggc29saWQgdmFyKC0tdGFncy1ib3JkZXItY29sb3IpO3BhZGRpbmc6MDtsaW5lLWhlaWdodDowO2N1cnNvcjp0ZXh0O291dGxpbmU6MDtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7dHJhbnNpdGlvbjouMXN9QGtleWZyYW1lcyB0YWdzLS1idW1wezMwJXt0cmFuc2Zvcm06c2NhbGUoMS4yKX19QGtleWZyYW1lcyByb3RhdGVMb2FkZXJ7dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fS50YWdpZnk6aG92ZXI6bm90KC50YWdpZnktLWZvY3VzKTpub3QoLnRhZ2lmeS0taW52YWxpZCl7LS10YWdzLWJvcmRlci1jb2xvcjp2YXIoLS10YWdzLWhvdmVyLWJvcmRlci1jb2xvcil9LnRhZ2lmeVtkaXNhYmxlZF17YmFja2dyb3VuZDp2YXIoLS10YWdzLWRpc2FibGVkLWJnKTtmaWx0ZXI6c2F0dXJhdGUoMCk7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlbZGlzYWJsZWRdLnRhZ2lmeS0tc2VsZWN0LC50YWdpZnlbcmVhZG9ubHldLnRhZ2lmeS0tc2VsZWN0e3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCksLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCl7Y3Vyc29yOmRlZmF1bHR9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCk+LnRhZ2lmeV9faW5wdXQsLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCk+LnRhZ2lmeV9faW5wdXR7dmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MDttYXJnaW46NXB4IDB9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdiwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2e3BhZGRpbmc6dmFyKC0tdGFnLXBhZCl9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdjo6YmVmb3JlLC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXY6OmJlZm9yZXthbmltYXRpb246cmVhZG9ubHlTdHlsZXMgMXMgY2FsYygtMXMgKiAodmFyKC0tcmVhZG9ubHktc3RyaXBlZCkgLSAxKSkgcGF1c2VkfUBrZXlmcmFtZXMgcmVhZG9ubHlTdHlsZXN7MCV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tdGFnLWJnKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSx2YXIoLS10YWctYmcpIDUwJSx2YXIoLS10YWctYmcpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpIDAvNXB4IDVweDtib3gtc2hhZG93Om5vbmU7ZmlsdGVyOmJyaWdodG5lc3MoLjk1KX19LnRhZ2lmeVtkaXNhYmxlZF0gLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG4sLnRhZ2lmeVtyZWFkb25seV0gLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57ZGlzcGxheTpub25lfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ+YnI6bGFzdC1jaGlsZHtkaXNwbGF5Om5vbmV9LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle2NvbnRlbnQ6bm9uZX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0OjphZnRlcntjb250ZW50OlxcXCJcXFwiO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtvcGFjaXR5OjE7d2lkdGg6LjdlbTtoZWlnaHQ6LjdlbTt3aWR0aDp2YXIoLS1sb2FkZXItc2l6ZSk7aGVpZ2h0OnZhcigtLWxvYWRlci1zaXplKTttaW4td2lkdGg6MDtib3JkZXI6M3B4IHNvbGlkO2JvcmRlci1jb2xvcjojZWVlICNiYmIgIzg4OCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTthbmltYXRpb246cm90YXRlTG9hZGVyIC40cyBpbmZpbml0ZSBsaW5lYXI7Y29udGVudDpcXFwiXFxcIiFpbXBvcnRhbnQ7bWFyZ2luOi0ycHggMCAtMnB4IC41ZW19LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dDplbXB0eTo6YWZ0ZXJ7bWFyZ2luLWxlZnQ6MH0udGFnaWZ5K2lucHV0LC50YWdpZnkrdGV4dGFyZWF7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O2xlZnQ6LTk5OTllbSFpbXBvcnRhbnQ7dHJhbnNmb3JtOnNjYWxlKDApIWltcG9ydGFudH0udGFnaWZ5X190YWd7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjVweCAwIDVweCA1cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO291dGxpbmU6MDtsaW5lLWhlaWdodDpub3JtYWw7Y3Vyc29yOmRlZmF1bHQ7dHJhbnNpdGlvbjouMTNzIGVhc2Utb3V0fS50YWdpZnlfX3RhZz5kaXZ7dmVydGljYWwtYWxpZ246dG9wO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOnZhcigtLXRhZy1wYWQpO2NvbG9yOnZhcigtLXRhZy10ZXh0LWNvbG9yKTtsaW5lLWhlaWdodDppbmhlcml0O2JvcmRlci1yYWRpdXM6dmFyKC0tdGFnLWJvcmRlci1yYWRpdXMpO3doaXRlLXNwYWNlOm5vd3JhcDt0cmFuc2l0aW9uOi4xM3MgZWFzZS1vdXR9LnRhZ2lmeV9fdGFnPmRpdj4qe3doaXRlLXNwYWNlOnByZS13cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcDttaW4td2lkdGg6dmFyKC0tdGFnLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS10YWctLW1heC13aWR0aCk7dHJhbnNpdGlvbjouOHMgZWFzZSwuMXMgY29sb3J9LnRhZ2lmeV9fdGFnPmRpdj5bY29udGVudGVkaXRhYmxlXXtvdXRsaW5lOjA7LXdlYmtpdC11c2VyLXNlbGVjdDp0ZXh0O3VzZXItc2VsZWN0OnRleHQ7Y3Vyc29yOnRleHQ7bWFyZ2luOi0ycHg7cGFkZGluZzoycHg7bWF4LXdpZHRoOjM1MHB4fS50YWdpZnlfX3RhZz5kaXY6OmJlZm9yZXtjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6aW5oZXJpdDtpbnNldDp2YXIoLS10YWctYmctaW5zZXQsMCk7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246MTIwbXMgZWFzZTthbmltYXRpb246dGFncy0tYnVtcCAuM3MgZWFzZS1vdXQgMTtib3gtc2hhZG93OjAgMCAwIHZhcigtLXRhZy1pbnNldC1zaGFkb3ctc2l6ZSkgdmFyKC0tdGFnLWJnKSBpbnNldH0udGFnaWZ5X190YWc6Zm9jdXMgZGl2OjpiZWZvcmUsLnRhZ2lmeV9fdGFnOmhvdmVyOm5vdChbcmVhZG9ubHldKSBkaXY6OmJlZm9yZXstLXRhZy1iZy1pbnNldDotMi41cHg7LS10YWctYmc6dmFyKC0tdGFnLWhvdmVyKX0udGFnaWZ5X190YWctLWxvYWRpbmd7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5X190YWctLWxvYWRpbmcgLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57ZGlzcGxheTpub25lfS50YWdpZnlfX3RhZy0tbG9hZGluZzo6YWZ0ZXJ7LS1sb2FkZXItc2l6ZTouNGVtO2NvbnRlbnQ6XFxcIlxcXCI7dmVydGljYWwtYWxpZ246bWlkZGxlO29wYWNpdHk6MTt3aWR0aDouN2VtO2hlaWdodDouN2VtO3dpZHRoOnZhcigtLWxvYWRlci1zaXplKTtoZWlnaHQ6dmFyKC0tbG9hZGVyLXNpemUpO21pbi13aWR0aDowO2JvcmRlcjozcHggc29saWQ7Ym9yZGVyLWNvbG9yOiNlZWUgI2JiYiAjODg4IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpyb3RhdGVMb2FkZXIgLjRzIGluZmluaXRlIGxpbmVhcjttYXJnaW46MCAuNWVtIDAgLS4xZW19LnRhZ2lmeV9fdGFnLS1mbGFzaCBkaXY6OmJlZm9yZXthbmltYXRpb246bm9uZX0udGFnaWZ5X190YWctLWhpZGV7d2lkdGg6MCFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2l0aW9uOnZhcigtLXRhZy1oaWRlLXRyYW5zaXRpb24pO3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeV9fdGFnLS1oaWRlPmRpdj4qe3doaXRlLXNwYWNlOm5vd3JhcH0udGFnaWZ5X190YWcudGFnaWZ5LS1ub0FuaW0+ZGl2OjpiZWZvcmV7YW5pbWF0aW9uOm5vbmV9LnRhZ2lmeV9fdGFnLnRhZ2lmeS0tbm90QWxsb3dlZDpub3QoLnRhZ2lmeV9fdGFnLS1lZGl0YWJsZSkgZGl2PnNwYW57b3BhY2l0eTouNX0udGFnaWZ5X190YWcudGFnaWZ5LS1ub3RBbGxvd2VkOm5vdCgudGFnaWZ5X190YWctLWVkaXRhYmxlKSBkaXY6OmJlZm9yZXstLXRhZy1iZzp2YXIoLS10YWctaW52YWxpZC1iZyk7dHJhbnNpdGlvbjouMnN9LnRhZ2lmeV9fdGFnW3JlYWRvbmx5XSAudGFnaWZ5X190YWdfX3JlbW92ZUJ0bntkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fdGFnW3JlYWRvbmx5XT5kaXY6OmJlZm9yZXthbmltYXRpb246cmVhZG9ubHlTdHlsZXMgMXMgY2FsYygtMXMgKiAodmFyKC0tcmVhZG9ubHktc3RyaXBlZCkgLSAxKSkgcGF1c2VkfUBrZXlmcmFtZXMgcmVhZG9ubHlTdHlsZXN7MCV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tdGFnLWJnKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSx2YXIoLS10YWctYmcpIDUwJSx2YXIoLS10YWctYmcpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpIDAvNXB4IDVweDtib3gtc2hhZG93Om5vbmU7ZmlsdGVyOmJyaWdodG5lc3MoLjk1KX19LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT5kaXZ7Y29sb3I6dmFyKC0tdGFnLXRleHQtY29sb3ItLWVkaXQpfS50YWdpZnlfX3RhZy0tZWRpdGFibGU+ZGl2OjpiZWZvcmV7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tdGFnLWhvdmVyKSBpbnNldCFpbXBvcnRhbnR9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT4udGFnaWZ5X190YWdfX3JlbW92ZUJ0bntwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlfX3RhZy0tZWRpdGFibGU+LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46OmFmdGVye29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAlKSB0cmFuc2xhdGVYKDVweCl9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZS50YWdpZnktLWludmFsaWQ+ZGl2OjpiZWZvcmV7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tdGFnLWludmFsaWQtY29sb3IpIGluc2V0IWltcG9ydGFudH0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bntvcmRlcjo1O2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1MHB4O2N1cnNvcjpwb2ludGVyO2ZvbnQ6MTRweC8xIEFyaWFsO2JhY2tncm91bmQ6dmFyKC0tdGFnLXJlbW92ZS1idG4tYmcpO2NvbG9yOnZhcigtLXRhZy1yZW1vdmUtYnRuLWNvbG9yKTt3aWR0aDoxNHB4O2hlaWdodDoxNHB4O21hcmdpbi1yaWdodDo0LjY2NjY2NjY2NjdweDttYXJnaW4tbGVmdDphdXRvO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dH0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjo6YWZ0ZXJ7Y29udGVudDpcXFwiw5dcXFwiO3RyYW5zaXRpb246LjNzLGNvbG9yIDBzfS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZDp2YXIoLS10YWctcmVtb3ZlLWJ0bi1iZy0taG92ZXIpfS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOmhvdmVyK2Rpdj5zcGFue29wYWNpdHk6LjV9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46aG92ZXIrZGl2OjpiZWZvcmV7Ym94LXNoYWRvdzowIDAgMCB2YXIoLS10YWctaW5zZXQtc2hhZG93LXNpemUpIHZhcigtLXRhZy1yZW1vdmUtYmcscmdiYSgyMTEsMTQ4LDE0OCwuMykpIGluc2V0IWltcG9ydGFudDt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjJzfS50YWdpZnk6bm90KC50YWdpZnktLW1peCkgLnRhZ2lmeV9faW5wdXQgYnJ7ZGlzcGxheTpub25lfS50YWdpZnk6bm90KC50YWdpZnktLW1peCkgLnRhZ2lmeV9faW5wdXQgKntkaXNwbGF5OmlubGluZTt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhZ2lmeV9faW5wdXR7ZmxleC1ncm93OjE7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLXdpZHRoOjExMHB4O21hcmdpbjo1cHg7cGFkZGluZzp2YXIoLS10YWctcGFkKTtsaW5lLWhlaWdodDpub3JtYWw7cG9zaXRpb246cmVsYXRpdmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7Y29sb3I6dmFyKC0taW5wdXQtY29sb3IpO2JveC1zaXppbmc6aW5oZXJpdH0udGFnaWZ5X19pbnB1dDplbXB0eTo6YmVmb3Jle3Bvc2l0aW9uOnN0YXRpY30udGFnaWZ5X19pbnB1dDpmb2N1c3tvdXRsaW5lOjB9LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dDtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZXgoNnB4KX1Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0byl7LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6OmJlZm9yZXtkaXNwbGF5Om5vbmV9fS50YWdpZnlfX2lucHV0OmZvY3VzOmVtcHR5OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgZWFzZS1vdXQ7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lO2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvci1mb2N1cyl9QC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpey50YWdpZnlfX2lucHV0OmZvY3VzOmVtcHR5OjphZnRlcntkaXNwbGF5Om5vbmV9fS50YWdpZnlfX2lucHV0OjpiZWZvcmV7Y29udGVudDphdHRyKGRhdGEtcGxhY2Vob2xkZXIpO2hlaWdodDoxZW07bGluZS1oZWlnaHQ6MWVtO21hcmdpbjphdXRvIDA7ei1pbmRleDoxO2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTt3aGl0ZS1zcGFjZTpub3dyYXA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGV9LnRhZ2lmeV9faW5wdXQ6OmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXN1Z2dlc3QpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtwb3NpdGlvbjphYnNvbHV0ZTttaW4td2lkdGg6Y2FsYygxMDAlIC0gMS41ZW0pO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOnByZTtjb2xvcjp2YXIoLS10YWctdGV4dC1jb2xvcik7b3BhY2l0eTouMztwb2ludGVyLWV2ZW50czpub25lO21heC13aWR0aDoxMDBweH0udGFnaWZ5X19pbnB1dCAudGFnaWZ5X190YWd7bWFyZ2luOjAgMXB4fS50YWdpZnktLW1peHtkaXNwbGF5OmJsb2NrfS50YWdpZnktLW1peCAudGFnaWZ5X19pbnB1dHtwYWRkaW5nOjVweDttYXJnaW46MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xpbmUtaGVpZ2h0OjEuNTtkaXNwbGF5OmJsb2NrfS50YWdpZnktLW1peCAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle2hlaWdodDphdXRvO2Rpc3BsYXk6bm9uZTtsaW5lLWhlaWdodDppbmhlcml0fS50YWdpZnktLW1peCAudGFnaWZ5X19pbnB1dDo6YWZ0ZXJ7Y29udGVudDpub25lfS50YWdpZnktLXNlbGVjdDo6YWZ0ZXJ7Y29udGVudDpcXFwiPlxcXCI7b3BhY2l0eTouNTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7Ym90dG9tOjA7Zm9udDoxNnB4IG1vbm9zcGFjZTtsaW5lLWhlaWdodDo4cHg7aGVpZ2h0OjhweDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTE1MCUsLTUwJSkgc2NhbGVYKDEuMikgcm90YXRlKDkwZGVnKTt0cmFuc2l0aW9uOi4ycyBlYXNlLWluLW91dH0udGFnaWZ5LS1zZWxlY3RbYXJpYS1leHBhbmRlZD10cnVlXTo6YWZ0ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTUwJSwtNTAlKSByb3RhdGUoMjcwZGVnKSBzY2FsZVkoMS4yKX0udGFnaWZ5LS1zZWxlY3QgLnRhZ2lmeV9fdGFne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjEuOGVtO2JvdHRvbTowfS50YWdpZnktLXNlbGVjdCAudGFnaWZ5X190YWcgZGl2e2Rpc3BsYXk6bm9uZX0udGFnaWZ5LS1zZWxlY3QgLnRhZ2lmeV9faW5wdXR7d2lkdGg6MTAwJX0udGFnaWZ5LS1lbXB0eSAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGVhc2Utb3V0O29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDphdXRvfS50YWdpZnktLW1peCAudGFnaWZ5LS1lbXB0eSAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrfS50YWdpZnktLWZvY3Vzey0tdGFncy1ib3JkZXItY29sb3I6dmFyKC0tdGFncy1mb2N1cy1ib3JkZXItY29sb3IpO3RyYW5zaXRpb246MHN9LnRhZ2lmeS0taW52YWxpZHstLXRhZ3MtYm9yZGVyLWNvbG9yOiNEMzk0OTR9LnRhZ2lmeV9fZHJvcGRvd257cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5O3RyYW5zZm9ybTp0cmFuc2xhdGVZKDFweCk7b3ZlcmZsb3c6aGlkZGVufS50YWdpZnlfX2Ryb3Bkb3duW3BsYWNlbWVudD10b3Bde21hcmdpbi10b3A6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9LnRhZ2lmeV9fZHJvcGRvd25bcGxhY2VtZW50PXRvcF0gLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7Ym9yZGVyLXRvcC13aWR0aDoxLjFweDtib3JkZXItYm90dG9tLXdpZHRoOjB9LnRhZ2lmeV9fZHJvcGRvd25bcG9zaXRpb249dGV4dF17Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSh2YXIoLS10YWdpZnktZGQtY29sb3ItcHJpbWFyeSksLjEpO2ZvbnQtc2l6ZTouOWVtfS50YWdpZnlfX2Ryb3Bkb3duW3Bvc2l0aW9uPXRleHRdIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye2JvcmRlci13aWR0aDoxcHh9LnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7bWF4LWhlaWdodDozMDBweDtvdmVyZmxvdzphdXRvO292ZXJmbG93LXg6aGlkZGVuO2JhY2tncm91bmQ6dmFyKC0tdGFnaWZ5LWRkLWJnLWNvbG9yKTtib3JkZXI6MXB4IHNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS10YWdpZnktZGQtY29sb3ItcHJpbWFyeSk7Ym9yZGVyLWJvdHRvbS13aWR0aDoxLjVweDtib3JkZXItdG9wLXdpZHRoOjA7Ym94LXNoYWRvdzowIDJweCA0cHggLTJweCByZ2JhKDAsMCwwLC4yKTt0cmFuc2l0aW9uOi4yNXMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKX0udGFnaWZ5X19kcm9wZG93bl9faGVhZGVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0udGFnaWZ5X19kcm9wZG93bl9fZm9vdGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6LjVlbTtwYWRkaW5nOnZhcigtLXRhZ2lmeS1kZC1pdGVtLXBhZCk7Zm9udC1zaXplOi43ZW07Zm9udC1zdHlsZTppdGFsaWM7b3BhY2l0eTouNX0udGFnaWZ5X19kcm9wZG93bl9fZm9vdGVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0udGFnaWZ5X19kcm9wZG93bi0taW5pdGlhbCAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcnttYXgtaGVpZ2h0OjIwcHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFlbSl9LnRhZ2lmeV9fZHJvcGRvd24tLWluaXRpYWxbcGxhY2VtZW50PXRvcF0gLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMmVtKX0udGFnaWZ5X19kcm9wZG93bl9faXRlbXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzp2YXIoLS10YWdpZnktZGQtaXRlbS1wYWQpO21hcmdpbjoxcHg7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZTowO21heC1oZWlnaHQ6NjBweDttYXgtd2lkdGg6MTAwJX0udGFnaWZ5X19kcm9wZG93bl9faXRlbS0tYWN0aXZle2JhY2tncm91bmQ6dmFyKC0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnkpO2NvbG9yOiNmZmZ9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW06YWN0aXZle2ZpbHRlcjpicmlnaHRuZXNzKDEwNSUpfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1oaWRkZW57cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbjowIDFweDtwb2ludGVyLWV2ZW50czpub25lO292ZXJmbG93OmhpZGRlbjttYXgtaGVpZ2h0OjA7dHJhbnNpdGlvbjp2YXIoLS10YWdpZnktZGQtaXRlbS0taGlkZGVuLWR1cmF0aW9uLC4zcykhaW1wb3J0YW50fS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1oaWRkZW4+Knt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSk7b3BhY2l0eTowO3RyYW5zaXRpb246aW5oZXJpdH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGxpc3QgaWNvbiAqL1xcbi8qIGZvcmVzdCBpY29uICovXFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1oZWFkZXItYmctY29sb3VyOiAjN2JiMmEzO1xcbiAgICAtLW5hdmJhci1iZy1jb2xvdXI6ICM0MTVkMmU7XFxuICAgIC0tY29udGVudC1iZy1jb2xvdXI6ICNmZmY7XFxuICAgIC0tcHJvamVjdC1zaWduLWJnLWNvbG91cjogI2EwNTgyNDtcXG5cXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1oZWFkZXItd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogdmFyKC0taGVhZGVyLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvdXIpO1xcbn1cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG59XFxuXFxuI3RvZG9JdGVtQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvdXIpO1xcbiAgICAvKiBtYXgtd2lkdGg6IDgwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50b2RheS0tdGl0bGVfX2hlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnRvZGF5LS10aXRsZV9fZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC0taGVhZGluZ19fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXdQcm9qZWN0QnRuLCAubmV3SXRlbUJ0biB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvSXRlbS5hY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG9JdGVtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWluLXdpZHRoOiA2MHZ3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogU3R5bGluZyBGb3JtIElucHV0cyAqL1xcbmlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG9kb0l0ZW0tLXByaW9yaXR5X19sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MHB4LCAycHgpO1xcbn1cXG5cXG4udG9kb0l0ZW0tLXByaW9yaXR5X190ZXh0IHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLm5vbmVTZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS0tZHJvcGRvd24gb3B0aW9uIHtcXG4gICBjb2xvcjogcmVkO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLml0ZW1JbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4uaXRlbUluZm8uY29udHJhY3RlZCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi5leHBhbmRlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBhbmltYXRpb246IG9wZW4gMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmNvbnRyYWN0ZWQge1xcbiAgICBhbmltYXRpb246IGNsb3NlIDAuMnMgZWFzZS1pbiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2xvc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIH1cXG59XFxuXFxuLyogU2F2ZSBCdXR0b24gYW5kIE1lc3NhZ2UgKi9cXG5cXG4uc2F2ZUl0ZW1CdG4ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5zYXZlQnRuQ29udGFpbmVyLFxcbi5tZXNzYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNhdmVNZXNzYWdlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4vKiBOYXZiYXIgJiBOYXZiYXIgQ29udGVudHMgKi9cXG5cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWJnLWNvbG91cik7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbl9fYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2YmFyLS1hY3Rpb25fX2J1dHRvbiBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uX19idXR0b24gc3BhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uc19fYm90dG9tIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX2xpbmtzIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX2xpbmtzID4gbGksIGEsIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubmF2YmFyIGxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC0tc2lnbnBvc3QgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0IHtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJvamVjdC1zaWduLWJnLWNvbG91cik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0ZXh0LWluZGVudDogMTAlO1xcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMjBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB2YXIoLS1wcm9qZWN0LXNpZ24tYmctY29sb3VyKTtcXG4gICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogTmV3IFByb2plY3QgTW9kYWwgRm9ybSAqL1xcbi5tb2RhbENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuLm1vZGFsQ29udGFpbmVyLnNob3dNb2RhbCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC0taGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLS1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LS1tb2RhbF9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC0tbW9kYWxfX2J1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG59XFxuXFxuI3N1Ym1pdE1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWJnLWNvbG91cik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNzdWJtaXRNb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRiMjQ7XFxufVxcblxcbiNjbG9zZU1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jY2xvc2VNb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzEsIDE2OCwgMTY4KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxjQUFjO0FBRWQsZ0JBQWdCOztBQUdoQjs7O0lBR0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJOzs7O2lCQUlhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QywyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQ0FBaUM7O0lBRWpDLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJ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QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG4vKiBsaXN0IGljb24gKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcXFwiKTtcXG4vKiBmb3Jlc3QgaWNvbiAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFxcXCIpO1xcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0ODtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0taGVhZGVyLWJnLWNvbG91cjogIzdiYjJhMztcXG4gICAgLS1uYXZiYXItYmctY29sb3VyOiAjNDE1ZDJlO1xcbiAgICAtLWNvbnRlbnQtYmctY29sb3VyOiAjZmZmO1xcbiAgICAtLXByb2plY3Qtc2lnbi1iZy1jb2xvdXI6ICNhMDU4MjQ7XFxuXFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0taGVhZGVyLXdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IHZhcigtLWhlYWRlci13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3VyKTtcXG59XFxuXFxuLmdyaWRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxufVxcblxcbiN0b2RvSXRlbUNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmctY29sb3VyKTtcXG4gICAgLyogbWF4LXdpZHRoOiA4MCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4udG9kYXktLXRpdGxlX19oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi50b2RheS0tdGl0bGVfX2RhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnByb2plY3QtLWhlYWRpbmdfX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmV3UHJvamVjdEJ0biwgLm5ld0l0ZW1CdG4ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdzsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kb0l0ZW0uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvSXRlbSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi13aWR0aDogNjB2dztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIFN0eWxpbmcgRm9ybSBJbnB1dHMgKi9cXG5pbnB1dFt0eXBlPSd0ZXh0J106OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRvZG9JdGVtLS1wcmlvcml0eV9fbGFiZWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjBweCwgMnB4KTtcXG59XFxuXFxuLnRvZG9JdGVtLS1wcmlvcml0eV9fdGV4dCB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ub25lU2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktLWRyb3Bkb3duIG9wdGlvbiB7XFxuICAgY29sb3I6IHJlZDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5pdGVtSW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuLml0ZW1JbmZvLmNvbnRyYWN0ZWQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmV4cGFuZGVkIHtcXG4gICAgYW5pbWF0aW9uOiBvcGVuIDAuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5jb250cmFjdGVkIHtcXG4gICAgYW5pbWF0aW9uOiBjbG9zZSAwLjJzIGVhc2UtaW4gZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgbWF4LWhlaWdodDogMHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNsb3NlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgbWF4LWhlaWdodDogMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIFNhdmUgQnV0dG9uIGFuZCBNZXNzYWdlICovXFxuXFxuLnNhdmVJdGVtQnRuIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uc2F2ZUJ0bkNvbnRhaW5lcixcXG4ubWVzc2FnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zYXZlTWVzc2FnZSB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuLyogTmF2YmFyICYgTmF2YmFyIENvbnRlbnRzICovXFxuXFxuLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1iZy1jb2xvdXIpO1xcbn1cXG5cXG4ubmF2YmFyLS1hY3Rpb25fX2J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uX19idXR0b24gaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbl9fYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbnNfX2JvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxufVxcblxcbi5uYXZiYXItLXByb2plY3RzX19saW5rcyB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5uYXZiYXItLXByb2plY3RzX19saW5rcyA+IGxpLCBhLCBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5uYXZiYXItLXByb2plY3RzX190aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm5hdmJhciBsaSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0IGEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5wcm9qZWN0LS1zaWducG9zdCB7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByb2plY3Qtc2lnbi1iZy1jb2xvdXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgdGV4dC1pbmRlbnQ6IDEwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5wcm9qZWN0LS1zaWducG9zdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTIwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdmFyKC0tcHJvamVjdC1zaWduLWJnLWNvbG91cik7XFxuICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi8qIE5ldyBQcm9qZWN0IE1vZGFsIEZvcm0gKi9cXG4ubW9kYWxDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbi5tb2RhbENvbnRhaW5lci5zaG93TW9kYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnByb2plY3QtbW9kYWwtLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC0tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC0tbW9kYWxfX2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtLW1vZGFsX19idXR0b25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxufVxcblxcbiNzdWJtaXRNb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1iZy1jb2xvdXIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jc3VibWl0TW9kYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0YjI0O1xcbn1cXG5cXG4jY2xvc2VNb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuI2Nsb3NlTW9kYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcxLCAxNjgsIDE2OCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNb250aHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBtb250aHMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICB2YXIgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyBUaGUgSlMgRGF0ZSBvYmplY3Qgc3VwcG9ydHMgZGF0ZSBtYXRoIGJ5IGFjY2VwdGluZyBvdXQtb2YtYm91bmRzIHZhbHVlcyBmb3JcbiAgLy8gbW9udGgsIGRheSwgZXRjLiBGb3IgZXhhbXBsZSwgbmV3IERhdGUoMjAyMCwgMCwgMCkgcmV0dXJucyAzMSBEZWMgMjAxOSBhbmRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDEpIHJldHVybnMgMSBGZWIgMjAyMS4gIFRoaXMgaXMgKmFsbW9zdCogdGhlIGJlaGF2aW9yIHdlXG4gIC8vIHdhbnQgZXhjZXB0IHRoYXQgZGF0ZXMgd2lsbCB3cmFwIGFyb3VuZCB0aGUgZW5kIG9mIGEgbW9udGgsIG1lYW5pbmcgdGhhdFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMzEpIHdpbGwgcmV0dXJuIDMgTWFyIDIwMjEgbm90IDI4IEZlYiAyMDIxIGFzIGRlc2lyZWQuIFNvXG4gIC8vIHdlJ2xsIGRlZmF1bHQgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZCBtb250aCBieSBhZGRpbmcgMSB0byB0aGUgZGVzaXJlZFxuICAvLyBtb250aCBhbmQgdXNpbmcgYSBkYXRlIG9mIDAgdG8gYmFjayB1cCBvbmUgZGF5IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWRcbiAgLy8gbW9udGguXG5cbiAgdmFyIGVuZE9mRGVzaXJlZE1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICBlbmRPZkRlc2lyZWRNb250aC5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBhbW91bnQgKyAxLCAwKTtcbiAgdmFyIGRheXNJbk1vbnRoID0gZW5kT2ZEZXNpcmVkTW9udGguZ2V0RGF0ZSgpO1xuXG4gIGlmIChkYXlPZk1vbnRoID49IGRheXNJbk1vbnRoKSB7XG4gICAgLy8gSWYgd2UncmUgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBtb250aCwgdGhlbiB0aGlzIGlzIHRoZSBjb3JyZWN0IGRhdGVcbiAgICAvLyBhbmQgd2UncmUgZG9uZS5cbiAgICByZXR1cm4gZW5kT2ZEZXNpcmVkTW9udGg7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBub3cga25vdyB0aGF0IHNldHRpbmcgdGhlIG9yaWdpbmFsIGRheS1vZi1tb250aCB2YWx1ZSB3b24ndFxuICAgIC8vIGNhdXNlIGFuIG92ZXJmbG93LCBzbyBzZXQgdGhlIGRlc2lyZWQgZGF5LW9mLW1vbnRoLiBOb3RlIHRoYXQgd2UgY2FuJ3RcbiAgICAvLyBqdXN0IHNldCB0aGUgZGF0ZSBvZiBgZW5kT2ZEZXNpcmVkTW9udGhgIGJlY2F1c2UgdGhhdCBvYmplY3QgbWF5IGhhdmUgaGFkXG4gICAgLy8gaXRzIHRpbWUgY2hhbmdlZCBpbiB0aGUgdW51c3VhbCBjYXNlIHdoZXJlIHdoZXJlIGEgRFNUIHRyYW5zaXRpb24gd2FzIG9uXG4gICAgLy8gdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aCBhbmQgaXRzIGxvY2FsIHRpbWUgd2FzIGluIHRoZSBob3VyIHNraXBwZWQgb3JcbiAgICAvLyByZXBlYXRlZCBuZXh0IHRvIGEgRFNUIHRyYW5zaXRpb24uICBTbyB3ZSB1c2UgYGRhdGVgIGluc3RlYWQgd2hpY2ggaXNcbiAgICAvLyBndWFyYW50ZWVkIHRvIHN0aWxsIGhhdmUgdGhlIG9yaWdpbmFsIHRpbWUuXG4gICAgZGF0ZS5zZXRGdWxsWWVhcihlbmRPZkRlc2lyZWRNb250aC5nZXRGdWxsWWVhcigpLCBlbmRPZkRlc2lyZWRNb250aC5nZXRNb250aCgpLCBkYXlPZk1vbnRoKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCIuLi9hZGRNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZFllYXJzXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIHllYXJzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHllYXJzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IHllYXJzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRZZWFycyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIFNlcCAwMSAyMDE5IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkWWVhcnMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNb250aHMoZGlydHlEYXRlLCBhbW91bnQgKiAxMik7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZFllYXJzIGZyb20gXCIuLi9hZGRZZWFycy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViWWVhcnNcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHllYXJzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB5ZWFycyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB5ZWFycyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHllYXJzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNSB5ZWFycyBmcm9tIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJZZWFycyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gVHVlIFNlcCAwMSAyMDA5IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViWWVhcnMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRZZWFycyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhZ2lmeS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFnaWZ5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB0b2RvSXRlbUZhY3RvcnkgZnJvbSAnLi90b2RvLmpzJztcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgbm90ZXM7XG4gICAgdG9kb0l0ZW1zID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0b2RvSXRlbSBPYmplY3RzIHRvIEpTT05cbiAgICBzZWxlY3RJdGVtUHJvcGVydGllcygpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nT2JqZWN0cyA9IE9iamVjdC52YWx1ZXModGhpcy50b2RvSXRlbXMpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsT2JqID0ge307XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvcGVydGllcyA9IChcbiAgICAgICAgICAgICAgICAoeyB0aXRsZSwgbm90ZXMsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRhdGUsIGR1ZURhdGUsIF90YWdzLCBjb21wbGV0aW9uIH0pID0+XG4gICAgICAgICAgICAgICAgKHsgdGl0bGUsIG5vdGVzLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkYXRlLCBkdWVEYXRlLCBfdGFncywgY29tcGxldGlvbiB9KVxuICAgICAgICAgICAgKShpdGVtKTtcblxuICAgICAgICAgICAgZmluYWxPYmpbaXRlbS51dWlkXSA9IHNlbGVjdGVkUHJvcGVydGllcztcbiAgICAgICAgICAgIHJldHVybiBmaW5hbE9iajtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHJpbmdPYmplY3RzO1xuICAgIH1cblxuICAgIHBvcHVsYXRlTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICAvKiBcbiAgICAgICAgS2V5czogdGhpcy5uYW1lXG4gICAgICAgIFZhbHVlczogdG9kb0l0ZW1zIG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBvYmplY3RNZXJnZSA9IHt9XG4gICAgICAgIGNvbnN0IGFycmF5T2ZPYmplY3RzID0gdGhpcy5zZWxlY3RJdGVtUHJvcGVydGllcygpO1xuXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiBhcnJheU9mT2JqZWN0cykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvYmplY3RNZXJnZSwgbyk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9iamVjdE1lcmdlKSk7XG4gICAgfVxuXG4gICAgX3JlY29uc3RydWN0VG9kb0l0ZW1PYmplY3RzKF9wYXJzZSkge1xuICAgICAgICAvLyBjbGVhciBjdXJyZW50IHRvZG8gaXRlbXMgaW4gcHJvamVjdFxuICAgICAgICB0aGlzLnRvZG9JdGVtcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhfcGFyc2UpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdG9kb0l0ZW1GYWN0b3J5KHZhbHVlLnRpdGxlKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHJlbWFpbmluZyBmaWVsZHMgdXNpbmcgc2V0dGVyc1xuICAgICAgICAgICAgaXRlbS5zZXROb3Rlcyh2YWx1ZS5ub3Rlcyk7XG4gICAgICAgICAgICBpdGVtLnNldFByaW9yaXR5KHZhbHVlLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGl0ZW0uc2V0Q2hlY2tsaXN0KHZhbHVlLmNoZWNrbGlzdCk7XG4gICAgICAgICAgICBpdGVtLnNldERhdGUodmFsdWUuZGF0ZSk7XG4gICAgICAgICAgICBpdGVtLnNldER1ZURhdGUodmFsdWUuZHVlRGF0ZSk7XG4gICAgICAgICAgICBpdGVtLnNldFRhZ3ModmFsdWUuX3RhZ3MpO1xuICAgICAgICAgICAgaXRlbS5zZXRDb21wbGV0aW9uKHZhbHVlLmNvbXBsZXRpb24pO1xuICAgICAgICAgICAgaXRlbS5zZXRVVUlEKGtleSk7XG4gICAgICAgICAgICAvLyBhc3NpZ24gcmVjb25zdHJ1Y3RlZCBvYmplY3QgYmFjayB0byBpbnN0YW5jZSBwcm9wZXJ0eVxuICAgICAgICAgICAgdGhpcy50b2RvSXRlbXNba2V5XSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b2RvSXRlbXMpO1xuICAgIH1cblxuICAgIHJldHJpZXZlTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBjb25zdCBwYXJzZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlKTtcbiAgICAgICAgdGhpcy5fcmVjb25zdHJ1Y3RUb2RvSXRlbU9iamVjdHMocGFyc2UpO1xuICAgIH1cblxuICAgIGFkZEl0ZW0odGl0bGUpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRvZG9JdGVtRmFjdG9yeSh0aXRsZSk7XG4gICAgICAgIC8vIHRoaXMudG9kb0l0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zW2l0ZW0udXVpZF0gPSBpdGVtO1xuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0odXVpZCkge1xuICAgICAgICBpZih0aGlzLnRvZG9JdGVtc1t1dWlkXSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMudG9kb0l0ZW1zW3V1aWRdO1xuXG4gICAgICAgICAgICBsZXQgc3RvcmVkSXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JlZEl0ZW1zW3V1aWRdO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeShzdG9yZWRJdGVtcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEl0ZW06ICR7dXVpZH0gZG9lcyBub3QgZXhpc3QhYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdG9kb0l0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0l0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAgICovXG4gICAgc2V0IG5vdGVzKHRleHQpIHtcbiAgICAgICAgdGhpcy5fbm90ZXMgPSB0ZXh0O1xuICAgIH1cblxuICAgIGdldFVuaXF1ZVRhZ3MoKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBPYmplY3QudmFsdWVzKHRoaXMudG9kb0l0ZW1zKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0udGFncylcbiAgICAgICAgICAgIC5mbGF0KCk7XG5cbiAgICAgICAgY29uc3QgdW5pcXVlQXJyYXkgPSBBcnJheS5mcm9tKG5ldyBTZXQodGFncykpO1xuICAgICAgICByZXR1cm4gdW5pcXVlQXJyYXk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICByZXR1cm4gcDtcbn1cbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5jb25zdCB0YWdNaXhpbiA9IHtcbiAgICBnZXRUYWdzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gICAgfSxcblxuICAgIHVwZGF0ZVRhZ3MgKCkge1xuICAgICAgICBpZih0aGlzLnRhZ2lmeS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGFncyA9IHRoaXMudGFnaWZ5LnZhbHVlLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFkZFRhZ2lmeVRhZyAodCkge1xuICAgICAgICB0aGlzLnRhZ2lmeS5hZGRUYWdzKHQpO1xuICAgIH0sXG5cbiAgICAvLyBVc2VkIG9ubHkgdG8gbG9hZCB0YWdzIGZvciBtb2NrIHRvZG9JdGVtcyBpbiBwcm9qZWN0LmpzXG4gICAgX2FwcGVuZFRhZyAoKSB7XG4gICAgICAgIGZvciAoY29uc3QgW18sIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgaWYodHlwZW9mKHZhbCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWdzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb24tc3RyaW5nIGFyZ3VtZW50IGRldGVjdGVkOiAke3ZhbH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG59XG5cbmNvbnN0IGNoZWNrbGlzdE1peGluID0ge1xuICAgIHByaW50Q2hlY2tsaXN0ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGVja2xpc3QpO1xuICAgIH0sXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0LnB1c2godGFzayk7XG4gICAgfVxufVxuXG5jb25zdCBzZXR0ZXJNaXhpbiA9IHtcbiAgICBzZXRUaXRsZSAodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH0sXG5cbiAgICBzZXROb3RlcyAobm90ZXMpIHtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIH0sXG5cbiAgICBzZXRDaGVja2xpc3QgKGNoZWNrbGlzdCkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICB9LFxuXG4gICAgc2V0RGF0ZSAoZGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH0sXG5cbiAgICBzZXREdWVEYXRlIChkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfSxcblxuICAgIHNldFRhZ3MgKHRhZ3MpIHtcbiAgICAgICAgdGhpcy5fdGFncyA9IHRhZ3M7XG4gICAgfSxcblxuICAgIHNldENvbXBsZXRpb24gKGNvbXBsZXRpb24pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uID0gY29tcGxldGlvbjtcbiAgICB9LFxuXG4gICAgc2V0VVVJRCAoaWQpIHtcbiAgICAgICAgdGhpcy51dWlkID0gaWQ7XG4gICAgfSxcblxuICAgIHNldFByaW9yaXR5IChwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbnMgdXNlZCB0byBsb2dnaW5nIGFuZCBkZWJ1Z2dpbmcgcHVycG9zZXNcbmNvbnN0IGRlYnVnTWl4aW4gPSB7XG4gICAgcHJpbnRTdW1tYXJ5SW5PYmplY3QgKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgVGl0bGU6ICR7dGhpcy50aXRsZX0sXG4gICAgICAgICAgICBEYXRlOiAke3RoaXMuZGF0ZX0sXG4gICAgICAgICAgICBEdWUgRGF0ZTogJHt0aGlzLmR1ZURhdGV9LFxuICAgICAgICAgICAgVGFnczogJHt0aGlzLl90YWdzfSxcbiAgICAgICAgICAgIE5vdGVzOiAke3RoaXMubm90ZXN9LFxuICAgICAgICAgICAgQ2hlY2tsaXN0OiAke3RoaXMuX2NoZWNrbGlzdH0sXG4gICAgICAgICAgICBDb21wbGV0aW9uOiAke3RoaXMuY29tcGxldGlvbn0sXG4gICAgICAgICAgICBVVUlEOiAke3RoaXMudXVpZH1cbiAgICAgICAgYDtcbiAgICB9XG59XG5cbi8vIHVzaW5nIGEgY2xvc3VyZSB0byBlbnN1cmUgYSBuZXcgaXRlbVRhZ3MgQXJyYXkgaXMgY3JlYXRlZCBldmVyeSB0aW1lIHRoaXMgaXMgY2FsbGVkXG5jb25zdCBnZXREZWZhdWx0QXJncyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1EYXRlOiBudWxsLCBcbiAgICAgICAgaXRlbUR1ZURhdGU6IG51bGwsIFxuICAgICAgICBpdGVtVGFnczogbmV3IEFycmF5KCksXG4gICAgICAgIGl0ZW1UYWdpZnk6IG51bGwsXG4gICAgICAgIGl0ZW1Ob3RlczogbnVsbCxcbiAgICAgICAgaXRlbVByaW9yaXR5OiBudWxsLFxuICAgICAgICBpdGVtQ2hlY2tsaXN0OiBuZXcgQXJyYXkoKSxcbiAgICAgICAgaXRlbUNvbXBsZXRpb246IGZhbHNlLFxuICAgIH1cbn1cblxuLy8gUmVzcG9uc2liaWxpdHk6IHJldHVybi9jb25zdHJ1Y3QgYSB0b2RvSXRlbSBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgYSBzaW5nbGUgdG9kbyBpdGVtXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvSXRlbUZhY3RvcnkoaXRlbVRpdGxlLCB7Li4uZGVmfSA9IGdldERlZmF1bHRBcmdzKCkpIHtcbiAgICBjb25zdCB0aXRsZSA9IGl0ZW1UaXRsZTtcbiAgICBjb25zdCBkYXRlID0gZGVmLml0ZW1EYXRlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkZWYuaXRlbUR1ZURhdGU7XG4gICAgY29uc3QgdGFncyA9IGRlZi5pdGVtVGFncztcbiAgICBjb25zdCB0YWdpZnkgPSBkZWYuaXRlbVRhZ2lmeTtcbiAgICBjb25zdCBub3RlcyA9IGRlZi5pdGVtTm90ZXM7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkZWYuaXRlbVByaW9yaXR5O1xuICAgIGNvbnN0IF9jaGVja2xpc3QgPSBkZWYuaXRlbUNoZWNrbGlzdDtcbiAgICBsZXQgY29tcGxldGlvbiA9IGRlZi5pdGVtQ29tcGxldGlvbjtcblxuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcblxuICAgIGNvbnN0IHByaW50U3VtbWFyeSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIFRpdGxlOiAke3RpdGxlfSxcbiAgICAgICAgICAgIERhdGU6ICR7ZGF0ZX0sXG4gICAgICAgICAgICBEdWUgRGF0ZTogJHtkdWVEYXRlfSxcbiAgICAgICAgICAgIFRhZ3M6ICR7dGFnc30sXG4gICAgICAgICAgICBOb3RlczogJHtub3Rlc30sXG4gICAgICAgICAgICBDaGVja2xpc3Q6ICR7X2NoZWNrbGlzdH0sXG4gICAgICAgICAgICBDb21wbGV0aW9uOiAke2NvbXBsZXRpb259LFxuICAgICAgICAgICAgVVVJRDogJHt1dWlkfVxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5jb21wbGV0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRpb24gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmYWN0b3J5TWV0aG9kcyA9IHtcbiAgICAgICAgcHJpbnRTdW1tYXJ5LFxuICAgICAgICB0b2dnbGVDb21wbGV0aW9uXG4gICAgfVxuXG4gICAgLy8gY29waWVzIFwidGFnXCIgcHJvcGVydGllcyBpbnRvIFwiaXRlbVwiIHByb3BlcnRpZXNcbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuYXNzaWduKHRhZ01peGluLCBjaGVja2xpc3RNaXhpbiwgc2V0dGVyTWl4aW4sIGRlYnVnTWl4aW4pOyAgLy8gKHRhcmdldE9iaiwgc291cmNlT2JqKVxuICAgIFxuICAgIC8vIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCB1c2luZyBhbiBleGlzdGluZyBvYmplY3QgYXMgaXRzIHByb3RvdHlwZSBvZiBuZXdseSBjcmVhdGVkIG9iamVjdFxuICAgIGxldCB0b2RvSXRlbU9iaiA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgIFxuICAgIC8vIFwibWl4LWluXCIgbWV0aG9kcyBkZWZpbmVkIGluIGZhY3RvcnkgZnVuY3Rpb25cbiAgICB0b2RvSXRlbU9iaiA9IE9iamVjdC5hc3NpZ24odG9kb0l0ZW1PYmosIGZhY3RvcnlNZXRob2RzKTtcblxuICAgIHRvZG9JdGVtT2JqLnRpdGxlID0gdGl0bGU7XG4gICAgdG9kb0l0ZW1PYmouZGF0ZSA9IGRhdGU7XG4gICAgdG9kb0l0ZW1PYmouZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdG9kb0l0ZW1PYmouX3RhZ3MgPSB0YWdzO1xuICAgIHRvZG9JdGVtT2JqLnRhZ2lmeSA9IHRhZ2lmeTtcbiAgICB0b2RvSXRlbU9iai5jaGVja2xpc3QgPSBfY2hlY2tsaXN0O1xuICAgIHRvZG9JdGVtT2JqLmNvbXBsZXRpb24gPSBjb21wbGV0aW9uO1xuICAgIHRvZG9JdGVtT2JqLnV1aWQgPSB1dWlkO1xuICAgIHRvZG9JdGVtT2JqLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICByZXR1cm4gdG9kb0l0ZW1PYmo7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXQsIGFkZFllYXJzLCBzdWJZZWFycywgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG4vLyBJbXBvcnQgVGFnaWZ5XG5pbXBvcnQgVGFnaWZ5IGZyb20gJ0B5YWlyZW8vdGFnaWZ5JztcbmltcG9ydCAnQHlhaXJlby90YWdpZnkvZGlzdC90YWdpZnkuY3NzJztcblxuLy8gSW1hZ2VzXG5pbXBvcnQgcGxhbnRJbWcgZnJvbSAnLi9pbWFnZXMvcGxhbnQucG5nJztcbmltcG9ydCBmb3Jlc3RJbWcgZnJvbSAnLi9pbWFnZXMvZm9yZXN0LnBuZyc7XG5pbXBvcnQgYmVhdmVySW1nIGZyb20gJy4vaW1hZ2VzL2JlYXZlci5wbmcnO1xuaW1wb3J0IGx1bWJlcmphY2tJbWcgZnJvbSAnLi9pbWFnZXMvbHVtYmVyamFja2luZy5wbmcnO1xuaW1wb3J0IHN1bnJpc2VJbWcgZnJvbSAnLi9pbWFnZXMvc3VucmlzZS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gdmlldygpIHtcbiAgICBsZXQgZWxlbWVudElEID0gMDtcbiAgICBsZXQgY29uZmlnID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGJpbmRDb25maWd1cmF0aW9uKCkge1xuICAgICAgICBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lLCBjbGFzc05hbWU9bnVsbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZihjbGFzc05hbWUpIHsgICAgXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2QWN0aW9uKHNyYywgdGV4dCwgbGlzdGVuZXJGdW5jKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29uc3QgYWN0aW9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb25zdCBhY3Rpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGFjdGlvbkljb24uc3JjID0gc3JjO1xuICAgICAgICBhY3Rpb25UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgICAgICBhY3Rpb25EaXYuY2xhc3NOYW1lID0gJ25hdmJhci0tYWN0aW9uX19idXR0b24gbmV3SXRlbUJ0bic7XG4gICAgICAgIGFjdGlvbkRpdi5ocmVmID0gJyMnO1xuICAgICAgICBhY3Rpb25EaXYuYXBwZW5kKGFjdGlvbkljb24sIGFjdGlvblRleHQpO1xuICAgICAgICBhY3Rpb25EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lckZ1bmMpO1xuXG4gICAgICAgIHJldHVybiBhY3Rpb25EaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW1hZ2VCdXR0b24oc3JjLCBjbGFzc05hbWUsIGxpc3RlbmVyRnVuYykge1xuICAgICAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmV3SXRlbUJ0bi50eXBlID0gJ2ltYWdlJztcbiAgICAgICAgbmV3SXRlbUJ0bi5zcmMgPSBzcmNcbiAgICAgICAgbmV3SXRlbUJ0bi5uYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICBuZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXJGdW5jKTtcbiAgICAgICAgbmV3SXRlbUJ0bi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIHJldHVybiBuZXdJdGVtQnRuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhdGVJbnB1dChsYWJlbE5hbWUsIGZpZWxkTmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IGFkZFllYXJzKGN1cnJlbnREYXRlLCAxKTtcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IHN1YlllYXJzKGN1cnJlbnREYXRlLCAxKTtcbiAgICAgICAgXG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsTmFtZTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dC5uYW1lID0gZmllbGROYW1lO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIGRhdGVJbnB1dC5taW4gPSBmb3JtYXQobWluRGF0ZSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgZGF0ZUlucHV0Lm1heCA9IGZvcm1hdChtYXhEYXRlLCAneXl5eS1NTS1kZCcpO1xuXG4gICAgICAgIGRhdGVEaXYuYXBwZW5kKGRhdGVMYWJlbCwgZGF0ZUlucHV0KVxuICAgICAgICByZXR1cm4gZGF0ZURpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRQcm9qZWN0SGVhZGluZyhxdWVyeSwgcHJvamVjdE5hbWUsIHJlcGxhY2U9ZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdGbGV4Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtLWhlYWRpbmdfX2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICAgICAgaGVhZGluZ0ZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtLWhlYWRpbmdfX2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmKHJlcGxhY2UgJiYgY3VycmVudEhlYWRpbmdDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRhcmdldERpdi5yZXBsYWNlQ2hpbGQoaGVhZGluZ0ZsZXhDb250YWluZXIsIGN1cnJlbnRIZWFkaW5nQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldERpdi5hcHBlbmRDaGlsZChoZWFkaW5nRmxleENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRQcm9qZWN0SXRlbUZvcm0ocXVlcnksIGl0ZW0pIHtcbiAgICAgICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSAndG9kbycgY2hlY2tib3hcbiAgICAgICAgY29uc3QgdG9nZ2xlSXRlbUNvbXBsZXRpb25PbkNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjb25maWcuY3VycmVudFByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0udXVpZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RTdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdCkpO1xuXG4gICAgICAgICAgICBpdGVtLnRvZ2dsZUNvbXBsZXRpb24oKTtcbiAgICAgICAgICAgIHByb2plY3RTdG9yZVtpdGVtSWRdLmNvbXBsZXRpb24gPSBpdGVtLmNvbXBsZXRpb247XG4gICAgICAgICAgICAvLyB1cGRhdGUgc3RvcmVkIGRhdGEgd2l0aCBuZXcgY29tcGxldGlvbiBzdGF0dXNcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2plY3RTdG9yZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAnaXRlbUNvbXBsZXRpb24nO1xuICAgICAgICAgICAgaW5wdXQuaWQgPSBlbGVtZW50SUQ7IC8vIGxpbmsgXCJpZFwiIGFuZCBcImZvclwiXG5cbiAgICAgICAgICAgIGlmKGl0ZW0uY29tcGxldGlvbikge1xuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVJdGVtQ29tcGxldGlvbk9uQ2xpY2spOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGlucHV0XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXRFeGNsdXNpdmVTaWJsaW5nTm9kZXMgPSAobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpYmxpbmdzID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJRCA9IG5vZGUucGFyZW50Tm9kZS5pZDtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnRvZG9JdGVtW2lkXTpub3QoW2lkPVwiJHtjdXJyZW50SUR9XCJdKWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBBcnJheS5mcm9tKG90aGVyVG9kb0l0ZW1zKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JbmZvID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaXRlbUluZm8nKTtcbiAgICAgICAgICAgICAgICBzaWJsaW5ncy5wdXNoKGl0ZW1JbmZvKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaWJsaW5ncztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ha2VUb2RvSXRlbUV4cGFuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nSW5mb0RpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLml0ZW1JbmZvJyk7XG5cbiAgICAgICAgICAgIGlmKHNpYmxpbmdJbmZvRGl2LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5nSW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpYmxpbmdJbmZvRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRyYWN0ZWQnKTtcbiAgICAgICAgICAgIHNpYmxpbmdJbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG5cbiAgICAgICAgICAgIC8vIG1ha2UgcGFyZW50IG5vZGUgYWN0aXZlIHNvIHRoYXQgaXQgY2FuIGFjdGl2YXRlIGJvcmRlcnNcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVJdGVtVGl0bGUgPSAodGl0bGVUeXBlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGl0bGVFbGVtZW50O1xuICAgICAgICAgICAgaWYodGl0bGVUeXBlID09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5kZWZhdWx0VmFsdWUgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5uYW1lID0gJ2l0ZW1UaXRsZSc7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmlkID0gJ2l0ZW1UaXRsZSc7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBsYWNlaG9sZGVyID0gJ1RvZG8gSXRlbSc7XG4gICAgICAgICAgICAgICAgdGl0bGVFbGVtZW50ID0gaW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aXRsZVR5cGUgPT0gJ2xhYmVsJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICB0aXRsZUVsZW1lbnQgPSBsYWJlbEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGl0bGVFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTGFiZWwgPSAoX3RpdGxlVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVJdGVtVGl0bGUoX3RpdGxlVHlwZSk7XG4gICAgICAgICAgICAvKiBOQjogV2UgZG9uJ3QgbGluayB0aGUgJ2lkJyBhbmQgJ2ZvcicgZWxlbWVudHMgYmVjYXVzZSB1c2VycycgY2xpY2tpbmcgb24gdGhlIGxhYmVsIHNob3VsZG4ndCB0b2dnbGUgdGhlIGNoZWNrYm94LlxuICAgICAgICAgICAgLy8gbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBlbGVtZW50SUQpOyAqL1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZGQgY2FsbGJhY2sgdG8gZXhwYW5kIGl0ZW0gb24gY2xpY2tcbiAgICAgICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBoaWRlIG90aGVyIGl0ZW1zXG4gICAgICAgICAgICAgICAgY29uc3Qgb3RoZXJJdGVtSW5mbyA9IGdldEV4Y2x1c2l2ZVNpYmxpbmdOb2RlcyhlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgb3RoZXJJdGVtSW5mby5mb3JFYWNoKGluZm9EaXYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbmZvRGl2LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9EaXYuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250cmFjdGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBtYWtlIGN1cnJlbnQgaXRlbSBleHBhbmRcbiAgICAgICAgICAgICAgICBtYWtlVG9kb0l0ZW1FeHBhbmQoZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVJdGVtSW5mb0V4cGFuZGFibGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3Rlc0lucHV0ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgbm90ZXMudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICBub3Rlcy5uYW1lID0gJ2l0ZW1Ob3Rlcyc7XG4gICAgICAgICAgICAgICAgbm90ZXMucGxhY2Vob2xkZXIgPSAnTm90ZXMnO1xuICAgICAgICAgICAgICAgIG5vdGVzLmRlZmF1bHRWYWx1ZSA9IChpdGVtLm5vdGVzKSA/IGl0ZW0ubm90ZXMgOiAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gbm90ZXM7XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtVGFza0xpc3REaXYgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tsaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSB0YXNrO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChjaGVja2xpc3RMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tsaXN0RGl2O1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0ZXNEaXYgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVFbGVtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVEYXRlSW5wdXQoJ0RhdGU6ICcsICdpdGVtRGF0ZScsIChpdGVtLmRhdGUpID8gaXRlbS5kYXRlIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgLy8gJ0ZpZ3VyZSBTcGFjZScgdXNlZCBpbiBkdWVEYXRlIGxhYmVsIHRvIGFsaWduIHRoZSBkYXRlIHBpY2tlcnMgKHNlZTogaHR0cHM6Ly9xd2VydHkuZGV2L3doaXRlc3BhY2UvKVxuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVEYXRlSW5wdXQoJ0R1ZTrigIcnLCAnaXRlbUR1ZURhdGUnLCAoaXRlbS5kdWVEYXRlKSA/IGl0ZW0uZHVlRGF0ZSA6IG51bGwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRhdGVFbGVtZW50cy5hcHBlbmQoZGF0ZSwgZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVFbGVtZW50cztcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhZ3NEaXYgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3RhZ3NJbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wbGFjZWhvbGRlciA9ICdUYWdzJztcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRFbGVtZW50O1xuXG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICAvLyBUdXJucyB0ZXh0IGlucHV0IGludG8gYSBUYWdpZnkgaW5wdXQsIGVuYWJsaW5nIHRhZyBhZGRvblxuICAgICAgICAgICAgY29uc3QgdGFnaWZ5SW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdpZnlJbnN0YW5jZSA9IG5ldyBUYWdpZnkoaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRhZ2lmeUV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIFRhZ2lmeSBvYmplY3QgYXMgYSB0b2RvSXRlbSBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIGl0ZW0udGFnaWZ5ID0gdGFnaWZ5SW5zdGFuY2U7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRhZ2lmeUV2ZW50TGlzdGVuZXIgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVUYWdzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwcmlvcml0eURyb3Bkb3duJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IFsnU2VsZWN0IFByaW9yaXR5JywgJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gICAgICAgICAgICAgICAgZHJvcGRvd24ubmFtZSA9ICdpdGVtUHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0aWVzLmZvckVhY2gocHJpb3JpdHkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IEFycmF5LmZyb20oZHJvcGRvd24pLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09IGl0ZW0ucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChmaWx0ZXIubGVuZ3RoID09IDEpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZChsYWJlbCwgZHJvcGRvd24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmlvcml0eURpdjtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNhdmVCdG4gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVGb3JtRGF0YVRvTWVtb3J5ID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG9JdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IHt9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVGb3JtYXR0ZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGtleS5pbmNsdWRlcygnRGF0ZScpICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdHRlZCA9IGZvcm1hdChuZXcgRGF0ZSh2YWx1ZSksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlYWQgZm9ybURhdGEgKGl0ZXJhdG9yKSB2YWx1ZXMgaW50byBhbiBvYmplY3QsIGZvcm1hdHRpbmcgd2hlcmUgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgZnJvbSBJU08gdG8gJ3l5eXktTU0tZGQnIGZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW1EYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybU9ialtrZXldID0gZGF0ZUZvcm1hdHRlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXRlbUR1ZURhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtT2JqW2tleV0gPSBkYXRlRm9ybWF0dGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldFRpdGxlKGZvcm1PYmouaXRlbVRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXROb3Rlcyhmb3JtT2JqLml0ZW1Ob3Rlcyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0UHJpb3JpdHkoZm9ybU9iai5pdGVtUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldERhdGUoZm9ybU9iai5pdGVtRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0RHVlRGF0ZShmb3JtT2JqLml0ZW1EdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRDb21wbGV0aW9uKCAoZm9ybU9iai5pdGVtQ29tcGxldGlvbikgPyB0cnVlIDogZmFsc2UgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybU9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSA9ICdzYXZlSXRlbUJ0bic7XG4gICAgICAgICAgICAgICAgYnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgICAgICBidG4udmFsdWUgPSAnU2F2ZSBDaGFuZ2VzJztcbiAgICAgICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDaGFuZ2VzJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlRm9ybURhdGFUb01lbW9yeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSXRlbSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG9JdGVtJykuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jdXJyZW50UHJvamVjdC5kZWxldGVJdGVtKGl0ZW1JZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLlRPRE9fQ09OVEFJTkVSKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBjbHVtc3kgLSBpcyB0aGVyZSBhIGJldHRlciBzb2x1dGlvbj9cbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnByb2plY3RzW2NvbmZpZy5jdXJyZW50UHJvamVjdC5uYW1lXS5ydW4oKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHByb2plY3QgbnVtSXRlbXMgb24gY3JlYXRlIG9yIGRlbGV0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUJ1dHRvbignRGVsZXRlIEl0ZW0nLCAnZGVsZXRlSXRlbUJ0bicsIGRlbGV0ZUl0ZW0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVByb2plY3RMaXN0KCkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2l0ZW1CdXR0b25Hcm91cCcpO1xuICAgICAgICAgICAgYnV0dG9uR3JvdXAuYXBwZW5kKGRlbGV0ZUJ0biwgc2F2ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIGNvbnRlbnQgdGhhdCB3aWxsIHNob3cgKGV4cGFuZCkgd2hlbiBpdGVtIHRpdGxlIGlzIGNsaWNrZWRcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGV4cGFuZGFibGUuY2xhc3NMaXN0LmFkZCgnaXRlbUluZm8nLCAnY29udHJhY3RlZCcsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIGV4cGFuZGFibGUuYXBwZW5kKG5vdGVzSW5wdXQsIHByaW9yaXR5RHJvcGRvd24sIGl0ZW1UYXNrTGlzdERpdiwgZGF0ZXNEaXYsIHRhZ3NEaXYsIGJ1dHRvbkdyb3VwKTtcblxuICAgICAgICAgICAgdGFnaWZ5SW5wdXQoZXhwYW5kYWJsZS5xdWVyeVNlbGVjdG9yKCcudGFnc0lucHV0JykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBMb2FkIHNhdmVkIHRhZ3MgaWYgdGhleSBleGlzdFxuICAgICAgICAgICAgaWYgKGl0ZW0uX3RhZ3MgJiYgaXRlbS50YWdpZnkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnRhZ2lmeS5hZGRUYWdzKGl0ZW0uX3RhZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZXhwYW5kYWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW1JbmZvRm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCAndG9kb0l0ZW0nKTtcbiAgICAgICAgaXRlbUluZm9Gb3JtLmlkID0gaXRlbS51dWlkO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3goKTtcblxuICAgICAgICBsZXQgX3RpdGxlVHlwZSA9ICdpbnB1dCc7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ3RvZG9JdGVtLS1wcmlvcml0eV9fbGFiZWwnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICd0b2RvSXRlbS0tcHJpb3JpdHlfX3RleHQnKTtcbiAgICAgICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gaXRlbS5wcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAoaXRlbS5wcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbm9uZVNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZChwcmlvcml0eVRleHQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXRlbUxhYmVsID0gY3JlYXRlTGFiZWwoX3RpdGxlVHlwZSk7XG4gICAgICAgIGl0ZW1JbmZvRm9ybS5zZXRBdHRyaWJ1dGUoJ3RpdGxlVHlwZScsIF90aXRsZVR5cGUpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCB0YXJnZXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1JbmZvRm9ybS5hcHBlbmQoY2hlY2tib3gsIGl0ZW1MYWJlbCwgcHJpb3JpdHlMYWJlbCwgY3JlYXRlSXRlbUluZm9FeHBhbmRhYmxlKCkpO1xuICAgICAgICB0YXJnZXREaXYuYXBwZW5kQ2hpbGQoaXRlbUluZm9Gb3JtKTtcblxuICAgICAgICAvLyBlbnN1cmUgZWFjaCBpbnB1dC1sYWJlbCBwYWlyIGhhcyBhIHVuaXF1ZSBpbnRlZ2VyIGlkZW50aWZpZXJcbiAgICAgICAgZWxlbWVudElEKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0SXRlbUNoYW5nZUxpc3RlbmVyKGlkLCBwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHNob3dJdGVtU2F2ZWRNZXNzYWdlT25Gb3JtQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVNhdmVTcGFuID0gKG1zZykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZXNzYWdlQ29udGFpbmVyJztcbiAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VTcGFuKTtcbiAgICBcbiAgICAgICAgICAgICAgICBtZXNzYWdlU3Bhbi50ZXh0Q29udGVudCA9IG1zZztcbiAgICAgICAgICAgICAgICBtZXNzYWdlU3Bhbi5jbGFzc05hbWUgPSAnc2F2ZU1lc3NhZ2UnO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VDb250YWluZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZHMgaWYgbXNnIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QsIG90aGVyd2lzZSByZXBsYWNlcyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgY29uc3Qgc21hcnRBcHBlbmRNZXNzYWdlID0gKG1zZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV4aXN0aW5nU2F2ZU1zZykge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlIGNoaWxkIG9mIC5tZXNzYWdlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nU2F2ZU1zZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjcmVhdGVTYXZlU3Bhbihtc2cpLCBleGlzdGluZ1NhdmVNc2cpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm9QYXJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2F2ZVNwYW4obXNnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9qZWN0LnBvcHVsYXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZm9QYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcuaXRlbUluZm8nKTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nU2F2ZU1zZyA9IGluZm9QYXJlbnQucXVlcnlTZWxlY3RvcignLnNhdmVNZXNzYWdlJyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGZvcm1DaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgc21hcnRBcHBlbmRNZXNzYWdlKCdDaGFuZ2VzIFNhdmVkJyk7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckl0ZW1MaXN0UmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIGZvcm1DaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNtYXJ0QXBwZW5kTWVzc2FnZSgnTm8gQ2hhbmdlZCBEZXRlY3RlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJpZ2dlckl0ZW1MaXN0UmVmcmVzaCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvSXRlbScpO1xuXG4gICAgICAgICAgICBjdXJyZW50SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGluc2VydCB0b2RvIGl0ZW1zIGFnYWluXG4gICAgICAgICAgICBjb25maWcucHJvamVjdHNbY29uZmlnLmN1cnJlbnRQcm9qZWN0Lm5hbWVdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBpdGVtRm9ybS5xdWVyeVNlbGVjdG9yKCcuc2F2ZUl0ZW1CdG4nKTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGZvcm1DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBbc2hvd0l0ZW1TYXZlZE1lc3NhZ2VPbkZvcm1DaGFuZ2VdLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSAoYnV0dG9uVGV4dCwgYnV0dG9uQ2xhc3MsIGV2ZW50Q2FsbGJhY2spID0+IHtcbiAgICAgICAgLy8gXCJDcmVhdGUgTmV3IEl0ZW1cIiBidXR0b25cbiAgICAgICAgY29uc3QgbmV3QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgYnV0dG9uQ2xhc3MpO1xuICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuICAgICAgICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudENhbGxiYWNrKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdCdG47XG4gICAgfVxuXG4gICAgY29uc3QgbG9yZW1JcHN1bSA9ICgoKSA9PiB7XG4gICAgICAgIHJldHVybiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIjtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGVhZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LS1oZWFkaW5nX19jb250YWluZXInKTtcbiAgICBcbiAgICAgICAgcHJvamVjdEhlYWRpbmdzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0b2RheVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LS10aXRsZScpO1xuICAgICAgICB0b2RheVRpdGxlLnJlbW92ZSgpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUHJvamVjdChlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDbGlja2VkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgICAgICAgY29uc3QgcHJvamVjdE9uRGlzcGxheSA9IGNvbmZpZy5jdXJyZW50UHJvamVjdDtcblxuICAgICAgICBpZiAocHJvamVjdE9uRGlzcGxheS5uYW1lICE9IHByb2plY3RDbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb25maWcuY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihjb25maWcuY3VycmVudFByb2plY3QgPT0gJ19fdG9kYXknKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZSBoZWFkaW5ncyEnKTtcbiAgICAgICAgICAgICAgICByZW1vdmVIZWFkaW5ncygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggZ2xvYmFsIGZvY3VzIHRvIGNsaWNrZWQgcHJvamVjdFxuICAgICAgICAgICAgY29uZmlnLmN1cnJlbnRQcm9qZWN0ID0gY29uZmlnLnByb2plY3RzW3Byb2plY3RDbGlja2VkXS5uZXdQcm9qZWN0O1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgZXhpc3RpbmcgdG9kb0l0ZW1zXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0l0ZW0nKTtcblxuICAgICAgICAgICAgY3VycmVudEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBydW4gdGhpcyBwcm9qZWN0IChwb3B1bGF0ZSB0b2RvIGl0ZW1zKVxuICAgICAgICAgICAgY29uZmlnLnByb2plY3RzW3Byb2plY3RDbGlja2VkXS5ydW4oKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBjdXJyZW50UHJvamVjdCB0byBjbGlja2VkIHByb2plY3RcbiAgICAgICAgICAgIGNvbmZpZy5jdXJyZW50UHJvamVjdCA9IGNvbmZpZy5wcm9qZWN0c1twcm9qZWN0Q2xpY2tlZF0ubmV3UHJvamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdCBpcyBhbHJlYWR5IGRpc3BsYXllZCFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoUHJvamVjdHNMaXN0KCkge1xuICAgICAgICBjb25zdCBsaXN0T2ZQcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJ3Byb2plY3RMaXN0Jyk7XG4gICAgICAgIGxpc3RPZlByb2plY3RzLmNsYXNzTmFtZSA9ICduYXZiYXItLXByb2plY3RzX19saW5rcyc7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ25hdmJhci0tcHJvamVjdHNfX3RpdGxlJyk7XG4gICAgICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gSW5zZXJ0IGxpc3Qgb2YgcHJvamVjdHMgaW50byBET01cbiAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW0uaWQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NOYW1lID0gJ3Byb2plY3QtLXNpZ25wb3N0JztcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1TdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpXG4gICAgICAgICAgICBjb25zdCBudW1JdGVtc0luUHJvamVjdCA9IChwcm9qZWN0SXRlbVN0b3JlKSA/IE9iamVjdC5rZXlzKEpTT04ucGFyc2UocHJvamVjdEl0ZW1TdG9yZSkpLmxlbmd0aCA6IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7cHJvamVjdH0gOjogJHtudW1JdGVtc0luUHJvamVjdH1gO1xuICAgICAgICAgICAgbGluay5ocmVmID0gJyMnO1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFByb2plY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3RPZlByb2plY3RzO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLS1wcm9qZWN0c19fbGlua3MnKTtcbiAgICAgICAgY3VycmVudFByb2plY3RMaXN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlZnJlc2hQcm9qZWN0c0xpc3QoKSwgY3VycmVudFByb2plY3RMaXN0KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3JlYXRlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZU1vZGFsRm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IERldGFpbHMnO1xuXG4gICAgICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgICAgICAgICBuYW1lSW5wdXQubmFtZSA9ICdwcm9qZWN0TmFtZSc7XG4gICAgICAgICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgICAgICAgICAgbm90ZXNMYWJlbC50ZXh0Q29udGVudCA9ICdOb3Rlcyc7XG4gICAgICAgICAgICBub3Rlc0lucHV0Lm5hbWUgPSAncHJvamVjdE5vdGVzJztcbiAgICAgICAgICAgIG5vdGVzSW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgICAgICAgICAgZmllbGRzZXQuY2xhc3NOYW1lID0gJ3Byb2plY3QtbW9kYWwtLWRldGFpbHMnO1xuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGxlZ2VuZCwgbmFtZUxhYmVsLCBuYW1lSW5wdXQsIG5vdGVzTGFiZWwsIG5vdGVzSW5wdXQpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVNb2RhbENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21vZGFsQ29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9kYWwnKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LW1vZGFsLS1oZWFkaW5nJyk7XG4gICAgICAgICAgICBjb25zdCBtb2RhbEZvcm0gPSBjcmVhdGVNb2RhbEZvcm0oKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtLW1vZGFsX19idXR0b25zJyk7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLmlkID0gJ21vZGFsQ29udGFpbmVyJztcbiAgICAgICAgICAgIG1vZGFsRm9ybS5pZCA9ICdwcm9qZWN0LW1vZGFsLWZvcm0nO1xuICAgICAgICAgICAgc3VibWl0TW9kYWxCdG4uaWQgPSAnc3VibWl0TW9kYWwnO1xuICAgICAgICAgICAgY2xvc2VNb2RhbEJ0bi5pZCA9ICdjbG9zZU1vZGFsJztcbiAgICBcbiAgICAgICAgICAgIG1vZGFsSGVhZGluZy50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgXG4gICAgICAgICAgICBzdWJtaXRNb2RhbEJ0bi50ZXh0Q29udGVudCA9ICdBY2NlcHQnO1xuICAgICAgICAgICAgc3VibWl0TW9kYWxCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgc3VibWl0TW9kYWxCdG4uc2V0QXR0cmlidXRlKCdmb3JtJywgJ3Byb2plY3QtbW9kYWwtZm9ybScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZU1vZGFsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICBidXR0b25Hcm91cC5hcHBlbmQoY2xvc2VNb2RhbEJ0biwgc3VibWl0TW9kYWxCdG4pO1xuICAgIFxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kKG1vZGFsSGVhZGluZywgbW9kYWxGb3JtLCBidXR0b25Hcm91cCk7XG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kYWxDb250YWluZXI7ICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZU1vZGFsQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdEZyb21Nb2RhbCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsLWZvcm0nKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RGdW5jID0gZS5jdXJyZW50VGFyZ2V0LmNhbGxiYWNrRnVuYztcblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBmb3JtRGF0YS5nZXQoJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgIGxldCBwcm9qZWN0Tm90ZXMgPSBmb3JtRGF0YS5nZXQoJ3Byb2plY3ROb3RlcycpO1xuXG4gICAgICAgIGNyZWF0ZVByb2plY3RGdW5jKHByb2plY3ROYW1lLCBwcm9qZWN0Tm90ZXMpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJyNtb2RhbENvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dNb2RhbCcpO1xuXG4gICAgICAgIC8vIHN3aXRjaCB0byBuZXcgcHJvamVjdCB3aXRoIGRlZmF1bHQgZW1wdHkgaXRlbVxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3ROYW1lfSA+IGFgKTtcbiAgICAgICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtQnRuJyk7XG4gICAgICAgIG5ld1Byb2plY3RMaW5rLmNsaWNrKCk7XG4gICAgICAgIG5ld0l0ZW1CdG4uY2xpY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhc3NpZ25Nb2RhbExpc3RlbmVyKGFkZFByb2plY3RDYWxsYmFjaywgcHJvamVjdHNMaXN0KSB7XG4gICAgICAgIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbk1vZGFsJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRNb2RhbCcpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJyk7XG5cbiAgICAgICAgb3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3dNb2RhbCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0RnJvbU1vZGFsLCBmYWxzZSk7XG4gICAgICAgIHN1Ym1pdC5jYWxsYmFja0Z1bmMgPSBhZGRQcm9qZWN0Q2FsbGJhY2s7XG4gICAgICAgIHN1Ym1pdC5wcm9qZWN0cyA9IHByb2plY3RzTGlzdDtcblxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dNb2RhbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmlvcml0eVRvSW50ZWdlcihwcmlvcml0eSkge1xuICAgICAgICBjb25zdCB3ZWlnaHRzID0ge1xuICAgICAgICAgICAgJ0hpZ2gnOiAzLFxuICAgICAgICAgICAgJ01lZGl1bSc6IDIsXG4gICAgICAgICAgICAnTG93JzogMSxcbiAgICAgICAgICAgICdTZWxlY3QgUHJpb3JpdHknOiAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2VpZ2h0c1twcmlvcml0eV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBIVE1MKCkge1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBjb25maWcuY3VycmVudFByb2plY3Q7XG4gICAgXG4gICAgICAgIGNvbnN0IGNsaWNrTGFzdFRvZG9JdGVtID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0l0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbGFzdEVsZW1lbnRDbGlja2FibGUgPVxuICAgICAgICAgICAgICAgIChsYXN0LmdldEF0dHJpYnV0ZSgndGl0bGVUeXBlJykgPT0gJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgPyBsYXN0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIilcbiAgICAgICAgICAgICAgICAgICAgOiBsYXN0LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxhc3RFbGVtZW50Q2xpY2thYmxlLmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RheSBkYXRlIGhhcmRjb2RlZCB0byAnMjAyMi0wOC0zMCdcbiAgICAgICAgY29uc3Qgc2V0dXBTaG93VG9kYXlCdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0VG9kYXlJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9ICcyMDIyLTA4LTMxJztcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheUl0ZW1zID0ge31cblxuICAgICAgICAgICAgICAgIC8qIG5hbWU6IHByb2plY3QgbmFtZVxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9qZWN0UnVubmVyIG9iamVjdCBwcm9wZXJ0aWVzIChuYW1lLCBydW4oKSwgZXRjKSAqL1xuICAgICAgICAgICAgICAgIGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLnByb2plY3RzKSkgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBPYmplY3QudmFsdWVzKHZhbHVlLm5ld1Byb2plY3QudG9kb0l0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZiA9IHRvZG8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5kYXRlID09IGN1cnJlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXNGaWx0ZXJlZCA9IHt9XG4gICAgICAgICAgICAgICAgICAgIGYuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zRmlsdGVyZWRbaXRlbS51dWlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhpdGVtc0ZpbHRlcmVkKS5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXlJdGVtc1tuYW1lXSA9IGl0ZW1zRmlsdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZGF5SXRlbXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0l0ZW1Db250YWluZXInKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndG9kYXktLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlIZWFkaW5nID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICd0b2RheS0tdGl0bGVfX2hlYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheURhdGUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ3RvZGF5LS10aXRsZV9fZGF0ZScpO1xuICAgICAgICAgICAgICAgIHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgICAgICAgICAgICAgdG9kYXlEYXRlLnRleHRDb250ZW50ID0gJ1dlZCBBdWcgMzEnO1xuICAgICAgICAgICAgICAgIHRvZGF5RGl2LmFwcGVuZCh0b2RheUhlYWRpbmcsIHRvZGF5RGF0ZSk7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RheURpdik7XG5cbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSA9IG9iamVjdCBjb250YWluaW5nIHByb2plY3QncyB0b2RvSXRlbXNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRvZGF5SXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFByb2plY3RIZWFkaW5nKGAjdG9kb0l0ZW1Db250YWluZXJgLCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQcm9qZWN0SXRlbUZvcm0oYCN0b2RvSXRlbUNvbnRhaW5lcmAsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0SXRlbUNoYW5nZUxpc3RlbmVyKGlkLCBjb25maWcucHJvamVjdHNbbmFtZV0ubmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uZmlnLmN1cnJlbnRQcm9qZWN0ID0gJ19fdG9kYXknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVOYXZBY3Rpb24oc3VucmlzZUltZywgJ1RvZGF5JywgbGlzdFRvZGF5SXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZXROZXdJdGVtQnRuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkTmV3SXRlbSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb25maWcuY3VycmVudFByb2plY3QgPT0gJ19fdG9kYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdJdGVtIGNyZWF0aW9uIGRpc2FibGVkIGluIFRvZGF5IHNlY3Rpb24uIFBsZWFzZSBuYXZpZ2F0ZSB0byB0aGUgaW5kaXZpZHVhbCBwcm9qZWN0cy4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY29uZmlnLmN1cnJlbnRQcm9qZWN0O1xuICAgICAgICAgICAgICAgIC8vIGFkZCBuZXcgaXRlbSB0byBwcm9qZWN0XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QuYWRkSXRlbSgnJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGN1cnJlbnQgaXRlbXMgYW5kIHJlc2V0IGRpdlxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuVE9ET19DT05UQUlORVIpO1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGluc2VydFByb2plY3RIZWFkaW5nKGNvbmZpZy5UT0RPX0NPTlRBSU5FUiwgY3VycmVudFByb2plY3QubmFtZSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHJlcG9wdWxhdGUgbGlzdCBpdGVtcyBmcm9tIHByb2plY3RcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UHJvamVjdEl0ZW1Gb3JtKGNvbmZpZy5UT0RPX0NPTlRBSU5FUiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydEl0ZW1DaGFuZ2VMaXN0ZW5lcihpdGVtLnV1aWQsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY2xpY2tMYXN0VG9kb0l0ZW0oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5hdkFjdGlvbihwbGFudEltZywgJ0dyb3cgVG9kbyBJdGVtJywgYWRkTmV3SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldHVwRGVidWdCdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2dJdGVtc0luT2JqZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoY3VycmVudFByb2plY3QudG9kb0l0ZW1zLCBbJ3RpdGxlJywgJ25vdGVzJywgJ2RhdGUnLCAnZHVlRGF0ZScsICdjaGVja2xpc3QnLCAnX3RhZ3MnLCAnY29tcGxldGlvbicsICd0YWdpZnknXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxvZ1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZy5wcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ0RlZmF1bHRQcm9qZWN0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnLmN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTmF2QWN0aW9uKGJlYXZlckltZywgJ0xvZyBKU09OJywgbG9nUHJvamVjdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2V0dXBEZWxldGVQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGNvbmZpZy5jdXJyZW50UHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtYXRpb25UZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgcHJvamVjdCAke2N1cnJlbnR9PyBEZWxldGlvbiBpcyBmaW5hbC5gO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oY29uZmlybWF0aW9uVGV4dCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgaW5pdGlhdGVkIGRlbGV0aW9uIG9mICR7Y3VycmVudH0uYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFByb2plY3QgXCIke2N1cnJlbnR9XCIgZXhpc3RzIGluIGxvY2Fsc3RvcmFnZSFgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGNhbmNlbGxlZCBkZWxldGlvbiEnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IFwiJHtjdXJyZW50fVwiIG5vdCBmb3VuZCFgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVOYXZBY3Rpb24obHVtYmVyamFja0ltZywgJ0RlbGV0ZSBQcm9qZWN0JywgZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldHVwSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgICAgICBjb25zdCBhcHBIZWFkaW5nID0gY3JlYXRlRWxlbWVudCgnaDEnLCAnYXBwLS1oZWFkaW5nJyk7XG4gICAgICAgICAgICBjb25zdCBpY29uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgYXBwSGVhZGluZy50ZXh0Q29udGVudCA9ICdGb3Jlc3RzIC0gYSB0b2RvIGFwcCc7XG4gICAgICAgICAgICBpY29uU3Bhbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIjtcbiAgICAgICAgICAgIGljb25TcGFuLnRleHRDb250ZW50ID0gJ2ZvcmVzdCc7XG4gICAgICAgIFxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZChpY29uU3BhbiwgYXBwSGVhZGluZyk7XG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICduYXZiYXInKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGFjdGlvbiBidXR0b25zXG4gICAgICAgICAgICBjb25zdCBuYXZiYXJBY3Rpb25Db250YWluZXJfX1RvcCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICduYXZiYXItLWFjdGlvbnNfX3RvcCcpO1xuICAgICAgICAgICAgY29uc3QgbmF2QmFyQWN0aW9uQ29udGFpbmVyX19Cb3R0b20gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbmF2YmFyLS1hY3Rpb25zX19ib3R0b20nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGNyZWF0ZU5hdkFjdGlvbihmb3Jlc3RJbWcsICdQbGFudCBQcm9qZWN0JywgbnVsbCk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0QnRuLmlkID0gJ29wZW5Nb2RhbCc7XG5cbiAgICAgICAgICAgIG5hdmJhckFjdGlvbkNvbnRhaW5lcl9fVG9wLmFwcGVuZChzZXR1cFNob3dUb2RheUJ0bigpLCBzZXROZXdJdGVtQnRuKCksIG5ld1Byb2plY3RCdG4sIHNldHVwRGVidWdCdG4oKSk7XG4gICAgICAgICAgICBuYXZCYXJBY3Rpb25Db250YWluZXJfX0JvdHRvbS5hcHBlbmRDaGlsZChzZXR1cERlbGV0ZVByb2plY3RCdG4oKSk7XG4gICAgXG4gICAgICAgICAgICAvLyB0b2RvOiBzdHlsZSBhbmQgcG9zaXRpb24gbmV3IHByb2plY3QgYnV0dG9uXG4gICAgICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kKG5hdmJhckFjdGlvbkNvbnRhaW5lcl9fVG9wLCByZWZyZXNoUHJvamVjdHNMaXN0KCksIG5hdkJhckFjdGlvbkNvbnRhaW5lcl9fQm90dG9tKTtcbiAgICAgICAgICAgIHJldHVybiBuYXZDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZ3JpZENvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnQuaWQgPSBjb25maWcuQ09OVEVOVF9ESVZfSUQ7XG5cbiAgICAgICAgY29uc3QgdG9kb0l0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0l0ZW1Db250YWluZXIuaWQgPSAndG9kb0l0ZW1Db250YWluZXInO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1Db250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmQobmF2YmFyKCksIGNvbnRlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzZXR1cEhlYWRlcigpLCBncmlkQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbnNlcnRQcm9qZWN0SGVhZGluZyxcbiAgICAgICAgaW5zZXJ0UHJvamVjdEl0ZW1Gb3JtLFxuICAgICAgICBjcmVhdGVFbGVtZW50LFxuICAgICAgICBjcmVhdGVCdXR0b24sXG4gICAgICAgIGluc2VydEl0ZW1DaGFuZ2VMaXN0ZW5lcixcbiAgICAgICAgY3JlYXRlTW9kYWwsXG4gICAgICAgIGFzc2lnbk1vZGFsTGlzdGVuZXIsXG4gICAgICAgIHNldHVwSFRNTCxcbiAgICAgICAgYmluZENvbmZpZ3VyYXRpb25cbiAgICB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgYnVpbGRQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgdmlldyBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiB3cml0ZUxvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCggZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YVtrZXldKVxuICAgIH0pXG59XG5cbmNvbnN0IHNhdmVkTG9jYWxTdG9yYWdlRGF0YSA9IHtcbiAgICBcIkRhaWx5XCI6IFwie1xcXCIwNjUyY2JmMi1jNzE2LTQyMzYtYTEzZS0wNWYwNDcxNzg1MWRcXFwiOntcXFwidGl0bGVcXFwiOlxcXCJEbyB0aGUgZGlzaGVzXFxcIixcXFwibm90ZXNcXFwiOlxcXCJcXFwiLFxcXCJwcmlvcml0eVxcXCI6XFxcIkxvd1xcXCIsXFxcImNoZWNrbGlzdFxcXCI6W10sXFxcImRhdGVcXFwiOlxcXCIyMDIyLTA4LTMxXFxcIixcXFwiX3RhZ3NcXFwiOltcXFwiQ2xlYW5pbmdcXFwiXSxcXFwiY29tcGxldGlvblxcXCI6ZmFsc2V9LFxcXCJlYjNhODA0NS0zODJhLTQ3OGMtODg2Zi0xZTgzZjBjZDc2ZTBcXFwiOntcXFwidGl0bGVcXFwiOlxcXCJTaG9wIGZvciBncm9jZXJpZXNcXFwiLFxcXCJub3Rlc1xcXCI6XFxcIldvb2x3b3J0aHMgLS0gcmVtZW1iZXIgc3BlY2lhbHNcXFwiLFxcXCJwcmlvcml0eVxcXCI6XFxcIk1lZGl1bVxcXCIsXFxcImNoZWNrbGlzdFxcXCI6W10sXFxcImRhdGVcXFwiOlxcXCIyMDIyLTA4LTMxXFxcIixcXFwiX3RhZ3NcXFwiOltcXFwiRXJyYW5kc1xcXCJdLFxcXCJjb21wbGV0aW9uXFxcIjpmYWxzZX0sXFxcIjFlMGE0ZTg3LTY3NjEtNDliOS05NDMwLTlmYzdkOTVmOTMzZVxcXCI6e1xcXCJ0aXRsZVxcXCI6XFxcIlBheSB0aGUgYmlsbHNcXFwiLFxcXCJub3Rlc1xcXCI6XFxcIkJpbGxzIGFyZSBvdmVyZHVlXFxcIixcXFwicHJpb3JpdHlcXFwiOlxcXCJIaWdoXFxcIixcXFwiY2hlY2tsaXN0XFxcIjpbXSxcXFwiX3RhZ3NcXFwiOltdLFxcXCJjb21wbGV0aW9uXFxcIjpmYWxzZX19XCIsXG4gICAgXCJNaW5pbmdcIjogXCJ7XFxcImYyNjIxMzY5LTVlM2YtNGM2YS05NWZhLTJjNTE2YWQ5ODg3MFxcXCI6e1xcXCJ0aXRsZVxcXCI6XFxcIk9wZW4gdGhlIG1pbmVcXFwiLFxcXCJub3Rlc1xcXCI6XFxcIlxcXCIsXFxcInByaW9yaXR5XFxcIjpcXFwiSGlnaFxcXCIsXFxcImNoZWNrbGlzdFxcXCI6W10sXFxcImRhdGVcXFwiOlxcXCIyMDIyLTA4LTMxXFxcIixcXFwiX3RhZ3NcXFwiOltcXFwiTWluaW5nXFxcIl0sXFxcImNvbXBsZXRpb25cXFwiOmZhbHNlfSxcXFwiYWM5NTg1NGEtNjZjNy00YTRlLWFmZTItMTM4ZmJmNjI2ODliXFxcIjp7XFxcInRpdGxlXFxcIjpcXFwiRGlnIHR1bm5lbFxcXCIsXFxcIm5vdGVzXFxcIjpcXFwiXFxcIixcXFwicHJpb3JpdHlcXFwiOlxcXCJNZWRpdW1cXFwiLFxcXCJjaGVja2xpc3RcXFwiOltdLFxcXCJfdGFnc1xcXCI6W1xcXCJNaW5pbmdcXFwiXSxcXFwiY29tcGxldGlvblxcXCI6ZmFsc2V9fVwiLFxuICAgIFwiRXhlcmNpc2VcIjogXCJ7XFxcIjU5YzY1NjFjLTFjNmItNDdjZS05MDAyLWE1NDViYjJjMGQ0N1xcXCI6e1xcXCJ0aXRsZVxcXCI6XFxcIkxpZnQgd2VpZ2h0c1xcXCIsXFxcIm5vdGVzXFxcIjpcXFwiR2V0IG1vcmUgc3dvbGVcXFwiLFxcXCJwcmlvcml0eVxcXCI6XFxcIkhpZ2hcXFwiLFxcXCJjaGVja2xpc3RcXFwiOltdLFxcXCJfdGFnc1xcXCI6W10sXFxcImNvbXBsZXRpb25cXFwiOmZhbHNlfSxcXFwiNTRhOWY5ZGItNDhjNS00Nzg0LWE3YWItMGE3MTVmZTQxNDAzXFxcIjp7XFxcInRpdGxlXFxcIjpcXFwiUnVuIGFyb3VuZCB0aGUgYmxvY2tcXFwiLFxcXCJub3Rlc1xcXCI6XFxcIlxcXCIsXFxcInByaW9yaXR5XFxcIjpcXFwiTWVkaXVtXFxcIixcXFwiY2hlY2tsaXN0XFxcIjpbXSxcXFwiX3RhZ3NcXFwiOltcXFwiQ2FyZGlvXFxcIl0sXFxcImNvbXBsZXRpb25cXFwiOmZhbHNlfX1cIlxufVxuXG5cbi8vIGluc3RhbnRpYXRlIHByb2plY3QgYW5kIGxvYWQgbW9jayBpdGVtc1xuZnVuY3Rpb24gcHJvamVjdFJ1bm5lcihwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gYnVpbGRQcm9qZWN0KG5hbWUpO1xuXG4gICAgZnVuY3Rpb24gYWRkTW9ja1RhZ3MoaXRlbXMpIHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1zID0gT2JqZWN0LnZhbHVlcyhpdGVtcyk7XG4gICAgICAgIHRvZG9JdGVtc1swXS5hZGRUYWdpZnlUYWcoJ0VycmFuZHMnKTtcbiAgICAgICAgdG9kb0l0ZW1zWzFdLmFkZFRhZ2lmeVRhZygnRXJyYW5kcycpO1xuICAgICAgICB0b2RvSXRlbXNbMl0uYWRkVGFnaWZ5VGFnKCdGaXRuZXNzJyk7XG4gICAgICAgIHRvZG9JdGVtc1szXS5hZGRUYWdpZnlUYWcoWydGaXRuZXNzJywgJ1N0dWR5J10pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXR1cE1vY2tQcm9qZWN0KCkge1xuICAgICAgICBuZXdQcm9qZWN0Lm5vdGVzID0gJ0V2ZXJ5ZGF5IHRhc2tzLic7XG4gICAgXG4gICAgICAgIG5ld1Byb2plY3QuYWRkSXRlbSgnTWFpbCBwYXJjZWwgdG8gTXVtJyk7XG4gICAgICAgIG5ld1Byb2plY3QuYWRkSXRlbSgnUGF5IHRoZSBiaWxscycpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEl0ZW0oJ1J1biBmb3IgMTAgbWludXRlcycpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEl0ZW0oJ1N0dWR5IG9uIHRoZSBleGVyY2lzZSBiaWtlJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZXMgPSBPYmplY3QudmFsdWVzKG5ld1Byb2plY3QudG9kb0l0ZW1zKTtcbiAgICBcbiAgICAgICAgaXRlbVZhbHVlc1swXS5ub3RlcyA9ICdOZWVkcyB0byBiZSBkb25lIGF0IHRoZSBwb3N0IG9mZmljZS4nXG4gICAgICAgIGl0ZW1WYWx1ZXNbMF0uYWRkVGFzaygnRmluZCBpdGVtLicpO1xuICAgICAgICBpdGVtVmFsdWVzWzBdLmFkZFRhc2soJ1BhY2sgcGFyY2VsLicpO1xuICAgICAgICBpdGVtVmFsdWVzWzBdLmFkZFRhc2soJ01haWwgcGFyY2VsLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRNb2NrSXRlbXNJbnRvRE9NID0gKCkgPT4ge1xuICAgICAgICAvLyBvbmx5IGxvYWQgZnJvbSBzdG9yYWdlIGlmIGtleSBleGlzdHNcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0obmV3UHJvamVjdC5uYW1lKSkge1xuICAgICAgICAgICAgbmV3UHJvamVjdC5yZXRyaWV2ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlldy5pbnNlcnRQcm9qZWN0SGVhZGluZyhgI3RvZG9JdGVtQ29udGFpbmVyYCwgRE9NX0NPTkZJRy5jdXJyZW50UHJvamVjdC5uYW1lLCB0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGVudW1lcmF0ZSBpdGVtcyBpbiBkZWZhdWx0IHByb2plY3RcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhuZXdQcm9qZWN0LnRvZG9JdGVtcykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHZpZXcuaW5zZXJ0UHJvamVjdEl0ZW1Gb3JtKGAjdG9kb0l0ZW1Db250YWluZXJgLCBpdGVtKTtcbiAgICAgICAgICAgIHZpZXcuaW5zZXJ0SXRlbUNoYW5nZUxpc3RlbmVyKGl0ZW0udXVpZCwgbmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKG5ld1Byb2plY3QubmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzdG9yZWQgZGF0YSBkZXRlY3RlZCEnKTtcbiAgICAgICAgICAgIGxvYWRNb2NrSXRlbXNJbnRvRE9NKCk7XG4gICAgICAgICAgICAvLyBzZXR1cE1vY2tQcm9qZWN0KCk7XG4gICAgICAgICAgICAvLyBsb2FkTW9ja0l0ZW1zSW50b0RPTSgpO1xuICAgICAgICAgICAgLy8gYWRkTW9ja1RhZ3MobmV3UHJvamVjdC50b2RvSXRlbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3JlZCBkYXRhIGRldGVjdGVkIScpO1xuICAgICAgICAgICAgbG9hZE1vY2tJdGVtc0ludG9ET00oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHJ1bixcbiAgICAgICAgbmV3UHJvamVjdFxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZFN0b3JlZFByb2plY3RzICgpIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdFJ1bm5lcihuYW1lKTtcbiAgICAgICAgcHJvamVjdC5uZXdQcm9qZWN0LnJldHJpZXZlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIFxuICAgICAgICBpZighcHJvamVjdHNbbmFtZV0pIHtcbiAgICAgICAgICAgIHByb2plY3RzW25hbWVdID0gcHJvamVjdDtcbiAgICBcbiAgICAgICAgICAgIC8vIGlmKG5vdGVzKSB7XG4gICAgICAgICAgICAvLyAgICAgcHJvamVjdHNbbmFtZV0ubmV3UHJvamVjdC5ub3RlcyA9IG5vdGVzO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEEgcHJvamVjdCBuYW1lZCBcIiR7bmFtZX1cIiBhbHJlYWR5IGV4aXN0cy4gUGxlYXNlIHRyeSBhbm90aGVyIG5hbWUuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgIH1cblxuXG5cbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChuYW1lLCBub3Rlcz1udWxsKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RSdW5uZXIobmFtZSk7XG4gICAgXG4gICAgaWYoIXByb2plY3RzW25hbWVdKSB7XG4gICAgICAgIHByb2plY3RzW25ld1Byb2plY3QubmFtZV0gPSBuZXdQcm9qZWN0O1xuXG4gICAgICAgIGlmKG5vdGVzKSB7XG4gICAgICAgICAgICBwcm9qZWN0c1tuZXdQcm9qZWN0Lm5hbWVdLm5ld1Byb2plY3Qubm90ZXMgPSBub3RlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBIHByb2plY3QgbmFtZWQgXCIke25hbWV9XCIgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSB0cnkgYW5vdGhlciBuYW1lLmApO1xuICAgIH1cbn1cblxubGV0IHByb2plY3RzID0ge31cblxuY29uc3QgQ09OVEVOVF9ESVZfSUQgPSAnY29udGVudCc7XG5jb25zdCBDT05URU5UX0RJVl9TRUxFQ1RPUiA9IGAjJHtDT05URU5UX0RJVl9JRH1gO1xuXG5jb25zdCBET01fQ09ORklHID0ge1xuICAgICdwcm9qZWN0cyc6IHByb2plY3RzLFxuICAgICdUT0RPX0NPTlRBSU5FUic6ICcjdG9kb0l0ZW1Db250YWluZXInXG59XG5cbmxvYWRTdG9yZWRQcm9qZWN0cygpO1xuXG5hZGROZXdQcm9qZWN0KCdEYWlseScpO1xuLy8gYWRkTmV3UHJvamVjdCgnRW1wdHknKTtcbi8vIGFkZE5ld1Byb2plY3QoJ0ludmVzdGlnYXRpb25zJyk7XG5cbkRPTV9DT05GSUdbJ2N1cnJlbnRQcm9qZWN0J10gPSBET01fQ09ORklHLnByb2plY3RzWydEYWlseSddLm5ld1Byb2plY3Q7XG5cbnZpZXcuY29uZmlnID0gRE9NX0NPTkZJRztcbnZpZXcuYmluZENvbmZpZ3VyYXRpb24oKTtcbnZpZXcuc2V0dXBIVE1MKCk7XG5cbnByb2plY3RzWydEYWlseSddLnJ1bigpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXcuY3JlYXRlTW9kYWwoKSk7XG52aWV3LmFzc2lnbk1vZGFsTGlzdGVuZXIoYWRkTmV3UHJvamVjdCwgcHJvamVjdHMpO1xuXG5sb2FkU3RvcmVkUHJvamVjdHMoKTtcblxuLy8gd3JpdGUgbW9jayBwcm9qZWN0cyBpbnRvIGxvY2FsU3RvcmFnZSBmb3IgdXNlIGJ5IGFwcFxud3JpdGVMb2NhbFN0b3JhZ2Uoc2F2ZWRMb2NhbFN0b3JhZ2VEYXRhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==