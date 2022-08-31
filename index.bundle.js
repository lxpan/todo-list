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
___CSS_LOADER_EXPORT___.push([module.id, "/* list icon */\n/* forest icon */\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    font-size: 4rem;\n}\n\n:root {\n    --default-font: \"Montserrat\", sans-serif;\n    --header-bg-colour: #7bb2a3;\n    --navbar-bg-colour: #415d2e;\n    --content-bg-colour: #fff;\n    --project-sign-bg-colour: #a05824;\n\n    --header-height: 100px;\n    --header-width: 100vw;\n}\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: var(--header-width);\n    height: var(--header-height);\n    font-family: var(--default-font);\n    background-color: var(--header-bg-colour);\n}\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    width: 100vw;\n    height: calc(100vh - var(--header-height));\n}\n\n#content {\n    /* font-size: 2rem; */\n    font-family: arial;\n    background-color: var(--content-bg-colour);\n    /* max-width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.project--heading__container {\n    display: flex;\n    width: 100%;\n}\n\n.newProjectBtn, .newItemBtn {\n    /* background-color: greenyellow; */\n    margin: 0;\n    margin-bottom: 10px;\n    padding: 0;\n}\n\n.todoItem.active {\n    border: 1px solid black;\n}\n\n.todoItem input[type='text'] {\n    font-size: 1rem;\n    min-width: 60vw;\n    border: none;\n    border-bottom: 1px solid black;\n}\n\n/* Styling Form Inputs */\ninput[type='text']::placeholder {\n    color: grey;\n    opacity: 0.5;\n}\n\n.todoItem--priority__label {\n    position: fixed;\n    width: 60px;\n    text-align: left;\n    transform: translate(-60px, 2px);\n}\n\n.todoItem--priority__text {\n    opacity: 0.6;\n    color: black;\n}\n\n.high {\n    background-color: orange;\n}\n\n.medium {\n    background-color: yellow;\n}\n\n.low {\n    background-color: lightgreen;\n}\n\n.noneSelected {\n    display: none;\n}\n\n.priority--dropdown option {\n   color: red;\n   background-color: red;\n}\n\n.itemInfo {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    row-gap: 5px;\n}\n\n.itemInfo.contracted {\n    padding: 0;\n    row-gap: 0;\n}\n\n.expanded {\n    display: flex;\n}\n\n.hidden {\n    display: none;\n}\n\n.expanded {\n    animation: open 0.2s ease-out forwards;\n}\n\n.contracted {\n    animation: close 0.2s ease-in forwards;\n}\n\n@keyframes open {\n    0% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n    100% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n}\n\n@keyframes close {\n    0% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n    100% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n}\n\n/* Save Button and Message */\n\n.saveItemBtn {\n    width: 150px;\n}\n\n.saveBtnContainer,\n.messageContainer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.saveMessage {\n    color: green;\n    font-size: .8rem;\n}\n\n/* Navbar & Navbar Contents */\n\n.navbar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--navbar-bg-colour);\n}\n\n.navbar--action__button {\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    gap: 10px;\n}\n\n.navbar--action__button img {\n    width: 32px;\n}\n\n.navbar--action__button span {\n    font-family: \"Montserrat\";\n    font-size: .9rem;\n    color: white;\n}\n\n.navbar--actions__bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n.navbar--projects__links {\n    padding: 0;\n}\n\n.navbar--projects__links > li, a, button {\n    font-family: var(--default-font);\n    font-weight: 500;\n    font-size: 16px;\n    text-decoration: none;\n}\n\n.navbar--projects__title {\n    font-family: var(--default-font);\n    color: white;\n    opacity: 0.8;\n}\n\n.navbar li {\n    list-style-type: none;\n}\n\n.project--signpost a {\n    color: white;\n    font-weight: bolder;\n}\n\n.project--signpost {\n    width: 140px;\n    height: 40px;\n    position: relative;\n    background: var(--project-sign-bg-colour);\n    border: 1px solid black;\n    text-indent: 10%;\n    line-height: 35px;\n}\n\n.project--signpost:before {\n    content: \"\";\n    position: absolute;\n    right: -20px;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    border-left: 20px solid var(--project-sign-bg-colour);\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n}\n/* New Project Modal Form */\n.modalContainer {\n    background-color: rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    transition: opacity 0.3s ease;\n}\n\n.modal {\n    background-color: #fff;\n    padding: 30px 50px;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    width: 300px;\n    max-width: 100%;\n    text-align: left;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n\n.modalContainer.showModal {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.project-modal--heading {\n    text-align: left;\n    margin-bottom: 15px;\n}\n\n.project-modal--details {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-bottom: 10px;\n}\n\n.project--modal__buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project--modal__buttons button {\n    padding: 5px 15px;\n    border-radius: 8px;\n    border: none;\n    font-family: var(--default-font);\n}\n\n#submitModal {\n    background-color: var(--navbar-bg-colour);\n    color: white;\n    margin-left: 10px;\n}\n\n#submitModal:hover {\n    background-color: #344b24;\n}\n\n#closeModal {\n    background-color: lightgray;\n}\n\n#closeModal:hover {\n    background-color: rgb(171, 168, 168);\n}\n\n.today--title {\n}\n\n.today--title__heading {\n    font-size: 1.8rem;\n    font-weight: bolder;\n}\n\n.today--title__date {\n    font-size: 1rem;\n    opacity: 0.5;\n    margin-left: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');\n/* list icon */\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\n/* forest icon */\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    font-size: 4rem;\n}\n\n:root {\n    --default-font: \"Montserrat\", sans-serif;\n    --header-bg-colour: #7bb2a3;\n    --navbar-bg-colour: #415d2e;\n    --content-bg-colour: #fff;\n    --project-sign-bg-colour: #a05824;\n\n    --header-height: 100px;\n    --header-width: 100vw;\n}\n\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: var(--header-width);\n    height: var(--header-height);\n    font-family: var(--default-font);\n    background-color: var(--header-bg-colour);\n}\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    width: 100vw;\n    height: calc(100vh - var(--header-height));\n}\n\n#content {\n    /* font-size: 2rem; */\n    font-family: arial;\n    background-color: var(--content-bg-colour);\n    /* max-width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.project--heading__container {\n    display: flex;\n    width: 100%;\n}\n\n.newProjectBtn, .newItemBtn {\n    /* background-color: greenyellow; */\n    margin: 0;\n    margin-bottom: 10px;\n    padding: 0;\n}\n\n.todoItem.active {\n    border: 1px solid black;\n}\n\n.todoItem input[type='text'] {\n    font-size: 1rem;\n    min-width: 60vw;\n    border: none;\n    border-bottom: 1px solid black;\n}\n\n/* Styling Form Inputs */\ninput[type='text']::placeholder {\n    color: grey;\n    opacity: 0.5;\n}\n\n.todoItem--priority__label {\n    position: fixed;\n    width: 60px;\n    text-align: left;\n    transform: translate(-60px, 2px);\n}\n\n.todoItem--priority__text {\n    opacity: 0.6;\n    color: black;\n}\n\n.high {\n    background-color: orange;\n}\n\n.medium {\n    background-color: yellow;\n}\n\n.low {\n    background-color: lightgreen;\n}\n\n.noneSelected {\n    display: none;\n}\n\n.priority--dropdown option {\n   color: red;\n   background-color: red;\n}\n\n.itemInfo {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    row-gap: 5px;\n}\n\n.itemInfo.contracted {\n    padding: 0;\n    row-gap: 0;\n}\n\n.expanded {\n    display: flex;\n}\n\n.hidden {\n    display: none;\n}\n\n.expanded {\n    animation: open 0.2s ease-out forwards;\n}\n\n.contracted {\n    animation: close 0.2s ease-in forwards;\n}\n\n@keyframes open {\n    0% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n    100% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n}\n\n@keyframes close {\n    0% {\n        transform: scaleY(1);\n        max-height: 500px;\n    }\n    100% {\n        transform: scaleY(0);\n        max-height: 0px;\n    }\n}\n\n/* Save Button and Message */\n\n.saveItemBtn {\n    width: 150px;\n}\n\n.saveBtnContainer,\n.messageContainer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.saveMessage {\n    color: green;\n    font-size: .8rem;\n}\n\n/* Navbar & Navbar Contents */\n\n.navbar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--navbar-bg-colour);\n}\n\n.navbar--action__button {\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    gap: 10px;\n}\n\n.navbar--action__button img {\n    width: 32px;\n}\n\n.navbar--action__button span {\n    font-family: \"Montserrat\";\n    font-size: .9rem;\n    color: white;\n}\n\n.navbar--actions__bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n.navbar--projects__links {\n    padding: 0;\n}\n\n.navbar--projects__links > li, a, button {\n    font-family: var(--default-font);\n    font-weight: 500;\n    font-size: 16px;\n    text-decoration: none;\n}\n\n.navbar--projects__title {\n    font-family: var(--default-font);\n    color: white;\n    opacity: 0.8;\n}\n\n.navbar li {\n    list-style-type: none;\n}\n\n.project--signpost a {\n    color: white;\n    font-weight: bolder;\n}\n\n.project--signpost {\n    width: 140px;\n    height: 40px;\n    position: relative;\n    background: var(--project-sign-bg-colour);\n    border: 1px solid black;\n    text-indent: 10%;\n    line-height: 35px;\n}\n\n.project--signpost:before {\n    content: \"\";\n    position: absolute;\n    right: -20px;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    border-left: 20px solid var(--project-sign-bg-colour);\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n}\n/* New Project Modal Form */\n.modalContainer {\n    background-color: rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    transition: opacity 0.3s ease;\n}\n\n.modal {\n    background-color: #fff;\n    padding: 30px 50px;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    width: 300px;\n    max-width: 100%;\n    text-align: left;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n\n.modalContainer.showModal {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.project-modal--heading {\n    text-align: left;\n    margin-bottom: 15px;\n}\n\n.project-modal--details {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-bottom: 10px;\n}\n\n.project--modal__buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project--modal__buttons button {\n    padding: 5px 15px;\n    border-radius: 8px;\n    border: none;\n    font-family: var(--default-font);\n}\n\n#submitModal {\n    background-color: var(--navbar-bg-colour);\n    color: white;\n    margin-left: 10px;\n}\n\n#submitModal:hover {\n    background-color: #344b24;\n}\n\n#closeModal {\n    background-color: lightgray;\n}\n\n#closeModal:hover {\n    background-color: rgb(171, 168, 168);\n}\n\n.today--title {\n}\n\n.today--title__heading {\n    font-size: 1.8rem;\n    font-weight: bolder;\n}\n\n.today--title__date {\n    font-size: 1rem;\n    opacity: 0.5;\n    margin-left: 5px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVB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Q3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxlQUFlLG1FQUFTO0FBQ3hCLFNBQVMsK0RBQVM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUIwQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7QUFDQSwyQ0FBMkMsdURBQU07QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLG9EQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTLEtBQUssa0JBQWtCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsZ0RBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEtBQUs7QUFDcEQ7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUMsZUFBZTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVEQUFXO0FBQ1gsa0VBQXNCO0FBQ3RCLDBEQUFjOztBQUVkOztBQUVBLDBCQUEwQiw0REFBZ0I7QUFDMUMsb0VBQXdCOztBQUV4Qjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0B5YWlyZW8vdGFnaWZ5L2Rpc3QvdGFnaWZ5Lm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQHlhaXJlby90YWdpZnkvZGlzdC90YWdpZnkuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRZZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJZZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQHlhaXJlby90YWdpZnkvZGlzdC90YWdpZnkuY3NzP2FlNzAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRhZ2lmeSAodiA0LjE1LjMpIC0gdGFncyBpbnB1dCBjb21wb25lbnRcbiAqIEJ5IFlhaXIgRXZlbi1PclxuICogaHR0cHM6Ly9naXRodWIuY29tL3lhaXJFTy90YWdpZnlcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqIFxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICogXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogVEhFIFNPRlRXQVJFLlxyXG4gKiBcclxuICogVEhFIFNPRlRXQVJFIElTIE5PVCBQRVJNSVNTSUJMRSBUTyBCRSBTT0xELlxuICovXG5cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuVGFnaWZ5PWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsZSl7dmFyIGk9T2JqZWN0LmtleXModCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtlJiYocz1zLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKS5lbnVtZXJhYmxlfSkpKSxpLnB1c2guYXBwbHkoaSxzKX1yZXR1cm4gaX1mdW5jdGlvbiBlKGUpe2Zvcih2YXIgcz0xO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspe3ZhciBhPW51bGwhPWFyZ3VtZW50c1tzXT9hcmd1bWVudHNbc106e307cyUyP3QoT2JqZWN0KGEpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtpKGUsdCxhW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGEpKTp0KE9iamVjdChhKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIGkodCxlLGkpe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09aSx0fWNvbnN0IHM9KHQsZSxpLHMpPT4odD1cIlwiK3QsZT1cIlwiK2UscyYmKHQ9dC50cmltKCksZT1lLnRyaW0oKSksaT90PT1lOnQudG9Mb3dlckNhc2UoKT09ZS50b0xvd2VyQ2FzZSgpKSxhPSh0LGUpPT50JiZBcnJheS5pc0FycmF5KHQpJiZ0Lm1hcCgodD0+bih0LGUpKSk7ZnVuY3Rpb24gbih0LGUpe3ZhciBpLHM9e307Zm9yKGkgaW4gdCllLmluZGV4T2YoaSk8MCYmKHNbaV09dFtpXSk7cmV0dXJuIHN9ZnVuY3Rpb24gbyh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnJlcGxhY2UoL1xcJiM/WzAtOWEtel0rOy9naSwoZnVuY3Rpb24odCl7cmV0dXJuIGUuaW5uZXJIVE1MPXQsZS5pbm5lclRleHR9KSl9ZnVuY3Rpb24gcih0KXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQudHJpbSgpLFwidGV4dC9odG1sXCIpLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGR9ZnVuY3Rpb24gbCh0LGUpe2ZvcihlPWV8fFwicHJldmlvdXNcIjt0PXRbZStcIlNpYmxpbmdcIl07KWlmKDM9PXQubm9kZVR5cGUpcmV0dXJuIHR9ZnVuY3Rpb24gZCh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90LnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvPi9nLFwiJmd0O1wiKS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpLnJlcGxhY2UoL2B8Jy9nLFwiJiMwMzk7XCIpOnR9ZnVuY3Rpb24gaCh0KXt2YXIgZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc3BsaXQoXCIgXCIpWzFdLnNsaWNlKDAsLTEpO3JldHVybiB0PT09T2JqZWN0KHQpJiZcIkFycmF5XCIhPWUmJlwiRnVuY3Rpb25cIiE9ZSYmXCJSZWdFeHBcIiE9ZSYmXCJIVE1MVW5rbm93bkVsZW1lbnRcIiE9ZX1mdW5jdGlvbiBnKHQsZSxpKXtmdW5jdGlvbiBzKHQsZSl7Zm9yKHZhciBpIGluIGUpaWYoZS5oYXNPd25Qcm9wZXJ0eShpKSl7aWYoaChlW2ldKSl7aCh0W2ldKT9zKHRbaV0sZVtpXSk6dFtpXT1PYmplY3QuYXNzaWduKHt9LGVbaV0pO2NvbnRpbnVlfWlmKEFycmF5LmlzQXJyYXkoZVtpXSkpe3RbaV09T2JqZWN0LmFzc2lnbihbXSxlW2ldKTtjb250aW51ZX10W2ldPWVbaV19fXJldHVybiB0IGluc3RhbmNlb2YgT2JqZWN0fHwodD17fSkscyh0LGUpLGkmJnModCxpKSx0fWZ1bmN0aW9uIHAoKXtjb25zdCB0PVtdLGU9e307Zm9yKGxldCBpIG9mIGFyZ3VtZW50cylmb3IobGV0IHMgb2YgaSloKHMpP2Vbcy52YWx1ZV18fCh0LnB1c2gocyksZVtzLnZhbHVlXT0xKTp0LmluY2x1ZGVzKHMpfHx0LnB1c2gocyk7cmV0dXJuIHR9ZnVuY3Rpb24gYyh0KXtyZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5ub3JtYWxpemU/XCJzdHJpbmdcIj09dHlwZW9mIHQ/dC5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZyxcIlwiKTp2b2lkIDA6dH12YXIgdT0oKT0+Lyg/PS4qY2hyb21lKSg/PS4qYW5kcm9pZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2Z1bmN0aW9uIG0oKXtyZXR1cm4oWzFlN10rLTFlMystNGUzKy04ZTMrLTFlMTEpLnJlcGxhY2UoL1swMThdL2csKHQ9Pih0XmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdJjE1Pj50LzQpLnRvU3RyaW5nKDE2KSkpfWZ1bmN0aW9uIHYodCl7cmV0dXJuIHQmJnQuY2xhc3NMaXN0JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnKX12YXIgZj17ZGVsaW1pdGVyczpcIixcIixwYXR0ZXJuOm51bGwsdGFnVGV4dFByb3A6XCJ2YWx1ZVwiLG1heFRhZ3M6MS8wLGNhbGxiYWNrczp7fSxhZGRUYWdPbkJsdXI6ITAsb25DaGFuZ2VBZnRlckJsdXI6ITAsZHVwbGljYXRlczohMSx3aGl0ZWxpc3Q6W10sYmxhY2tsaXN0OltdLGVuZm9yY2VXaGl0ZWxpc3Q6ITEsdXNlcklucHV0OiEwLGtlZXBJbnZhbGlkVGFnczohMSxjcmVhdGVJbnZhbGlkVGFnczohMCxtaXhUYWdzQWxsb3dlZEFmdGVyOi8sfFxcLnxcXDp8XFxzLyxtaXhUYWdzSW50ZXJwb2xhdG9yOltcIltbXCIsXCJdXVwiXSxiYWNrc3BhY2U6ITAsc2tpcEludmFsaWQ6ITEscGFzdGVBc1RhZ3M6ITAsZWRpdFRhZ3M6e2NsaWNrczoyLGtlZXBJbnZhbGlkOiEwfSx0cmFuc2Zvcm1UYWc6KCk9Pnt9LHRyaW06ITAsYTExeTp7Zm9jdXNhYmxlVGFnczohMX0sbWl4TW9kZTp7aW5zZXJ0QWZ0ZXJUYWc6XCLCoFwifSxhdXRvQ29tcGxldGU6e2VuYWJsZWQ6ITAscmlnaHRLZXk6ITF9LGNsYXNzTmFtZXM6e25hbWVzcGFjZTpcInRhZ2lmeVwiLG1peE1vZGU6XCJ0YWdpZnktLW1peFwiLHNlbGVjdE1vZGU6XCJ0YWdpZnktLXNlbGVjdFwiLGlucHV0OlwidGFnaWZ5X19pbnB1dFwiLGZvY3VzOlwidGFnaWZ5LS1mb2N1c1wiLHRhZ05vQW5pbWF0aW9uOlwidGFnaWZ5LS1ub0FuaW1cIix0YWdJbnZhbGlkOlwidGFnaWZ5LS1pbnZhbGlkXCIsdGFnTm90QWxsb3dlZDpcInRhZ2lmeS0tbm90QWxsb3dlZFwiLHNjb3BlTG9hZGluZzpcInRhZ2lmeS0tbG9hZGluZ1wiLGhhc01heFRhZ3M6XCJ0YWdpZnktLWhhc01heFRhZ3NcIixoYXNOb1RhZ3M6XCJ0YWdpZnktLW5vVGFnc1wiLGVtcHR5OlwidGFnaWZ5LS1lbXB0eVwiLGlucHV0SW52YWxpZDpcInRhZ2lmeV9faW5wdXQtLWludmFsaWRcIixkcm9wZG93bjpcInRhZ2lmeV9fZHJvcGRvd25cIixkcm9wZG93bldyYXBwZXI6XCJ0YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVyXCIsZHJvcGRvd25IZWFkZXI6XCJ0YWdpZnlfX2Ryb3Bkb3duX19oZWFkZXJcIixkcm9wZG93bkZvb3RlcjpcInRhZ2lmeV9fZHJvcGRvd25fX2Zvb3RlclwiLGRyb3Bkb3duSXRlbTpcInRhZ2lmeV9fZHJvcGRvd25fX2l0ZW1cIixkcm9wZG93bkl0ZW1BY3RpdmU6XCJ0YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1hY3RpdmVcIixkcm9wZG93bkl0ZW1IaWRkZW46XCJ0YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1oaWRkZW5cIixkcm9wZG93bkluaXRhbDpcInRhZ2lmeV9fZHJvcGRvd24tLWluaXRpYWxcIix0YWc6XCJ0YWdpZnlfX3RhZ1wiLHRhZ1RleHQ6XCJ0YWdpZnlfX3RhZy10ZXh0XCIsdGFnWDpcInRhZ2lmeV9fdGFnX19yZW1vdmVCdG5cIix0YWdMb2FkaW5nOlwidGFnaWZ5X190YWctLWxvYWRpbmdcIix0YWdFZGl0aW5nOlwidGFnaWZ5X190YWctLWVkaXRhYmxlXCIsdGFnRmxhc2g6XCJ0YWdpZnlfX3RhZy0tZmxhc2hcIix0YWdIaWRlOlwidGFnaWZ5X190YWctLWhpZGVcIn0sZHJvcGRvd246e2NsYXNzbmFtZTpcIlwiLGVuYWJsZWQ6MixtYXhJdGVtczoxMCxzZWFyY2hLZXlzOltcInZhbHVlXCIsXCJzZWFyY2hCeVwiXSxmdXp6eVNlYXJjaDohMCxjYXNlU2Vuc2l0aXZlOiExLGFjY2VudGVkU2VhcmNoOiEwLGhpZ2hsaWdodEZpcnN0OiExLGNsb3NlT25TZWxlY3Q6ITAsY2xlYXJPblNlbGVjdDohMCxwb3NpdGlvbjpcImFsbFwiLGFwcGVuZFRhcmdldDpudWxsfSxob29rczp7YmVmb3JlUmVtb3ZlVGFnOigpPT5Qcm9taXNlLnJlc29sdmUoKSxiZWZvcmVQYXN0ZTooKT0+UHJvbWlzZS5yZXNvbHZlKCksc3VnZ2VzdGlvbkNsaWNrOigpPT5Qcm9taXNlLnJlc29sdmUoKX19O2Z1bmN0aW9uIFQoKXt0aGlzLmRyb3Bkb3duPXt9O2ZvcihsZXQgdCBpbiB0aGlzLl9kcm9wZG93bil0aGlzLmRyb3Bkb3duW3RdPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuX2Ryb3Bkb3duW3RdP3RoaXMuX2Ryb3Bkb3duW3RdLmJpbmQodGhpcyk6dGhpcy5fZHJvcGRvd25bdF07dGhpcy5kcm9wZG93bi5yZWZzKCl9dmFyIHc9e3JlZnMoKXt0aGlzLkRPTS5kcm9wZG93bj10aGlzLnBhcnNlVGVtcGxhdGUoXCJkcm9wZG93blwiLFt0aGlzLnNldHRpbmdzXSksdGhpcy5ET00uZHJvcGRvd24uY29udGVudD10aGlzLkRPTS5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VsZWN0b3I9J3RhZ2lmeS1zdWdnZXN0aW9ucy13cmFwcGVyJ11cIil9LGdldEhlYWRlclJlZigpe3JldHVybiB0aGlzLkRPTS5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VsZWN0b3I9J3RhZ2lmeS1zdWdnZXN0aW9ucy1oZWFkZXInXVwiKX0sZ2V0Rm9vdGVyUmVmKCl7cmV0dXJuIHRoaXMuRE9NLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZWxlY3Rvcj0ndGFnaWZ5LXN1Z2dlc3Rpb25zLWZvb3RlciddXCIpfSxnZXRBbGxTdWdnZXN0aW9uc1JlZnMoKXtyZXR1cm5bLi4udGhpcy5ET00uZHJvcGRvd24uY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1TZWxlY3RvcildfSxzaG93KHQpe3ZhciBlLGksYSxuPXRoaXMuc2V0dGluZ3Msbz1cIm1peFwiPT1uLm1vZGUmJiFuLmVuZm9yY2VXaGl0ZWxpc3Qscj0hbi53aGl0ZWxpc3R8fCFuLndoaXRlbGlzdC5sZW5ndGgsbD1cIm1hbnVhbFwiPT1uLmRyb3Bkb3duLnBvc2l0aW9uO2lmKHQ9dm9pZCAwPT09dD90aGlzLnN0YXRlLmlucHV0VGV4dDp0LCEociYmIW8mJiFuLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW1Ob01hdGNofHwhMT09PW4uZHJvcGRvd24uZW5hYmxlfHx0aGlzLnN0YXRlLmlzTG9hZGluZ3x8dGhpcy5zZXR0aW5ncy5yZWFkb25seSkpe2lmKGNsZWFyVGltZW91dCh0aGlzLmRyb3Bkb3duSGlkZV9fYmluZEV2ZW50c1RpbWVvdXQpLHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zPXRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zKHQpLHQmJiF0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5sZW5ndGgmJih0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpub01hdGNoXCIsdCksbi50ZW1wbGF0ZXMuZHJvcGRvd25JdGVtTm9NYXRjaCYmKGE9bi50ZW1wbGF0ZXMuZHJvcGRvd25JdGVtTm9NYXRjaC5jYWxsKHRoaXMse3ZhbHVlOnR9KSkpLCFhKXtpZih0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5sZW5ndGgpdCYmbyYmIXRoaXMuc3RhdGUuZWRpdGluZy5zY29wZSYmIXModGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXNbMF0udmFsdWUsdCkmJnRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLnVuc2hpZnQoe3ZhbHVlOnR9KTtlbHNle2lmKCF0fHwhb3x8dGhpcy5zdGF0ZS5lZGl0aW5nLnNjb3BlKXJldHVybiB0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyksdm9pZCB0aGlzLmRyb3Bkb3duLmhpZGUoKTt0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcz1be3ZhbHVlOnR9XX1pPVwiXCIrKGgoZT10aGlzLnN1Z2dlc3RlZExpc3RJdGVtc1swXSk/ZS52YWx1ZTplKSxuLmF1dG9Db21wbGV0ZSYmaSYmMD09aS5pbmRleE9mKHQpJiZ0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyxlKX10aGlzLmRyb3Bkb3duLmZpbGwoYSksbi5kcm9wZG93bi5oaWdobGlnaHRGaXJzdCYmdGhpcy5kcm9wZG93bi5oaWdobGlnaHRPcHRpb24odGhpcy5ET00uZHJvcGRvd24uY29udGVudC5jaGlsZHJlblswXSksdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlfHxzZXRUaW1lb3V0KHRoaXMuZHJvcGRvd24uZXZlbnRzLmJpbmRpbmcuYmluZCh0aGlzKSksdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlPXR8fCEwLHRoaXMuc3RhdGUuZHJvcGRvd24ucXVlcnk9dCx0aGlzLnNldFN0YXRlU2VsZWN0aW9uKCksbHx8c2V0VGltZW91dCgoKCk9Pnt0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKCksdGhpcy5kcm9wZG93bi5yZW5kZXIoKX0pKSxzZXRUaW1lb3V0KCgoKT0+e3RoaXMudHJpZ2dlcihcImRyb3Bkb3duOnNob3dcIix0aGlzLkRPTS5kcm9wZG93bil9KSl9fSxoaWRlKHQpe3ZhciBlPXRoaXMuRE9NLGk9ZS5zY29wZSxzPWUuZHJvcGRvd24sYT1cIm1hbnVhbFwiPT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLnBvc2l0aW9uJiYhdDtpZihzJiZkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHMpJiYhYSlyZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKSx0aGlzLmRyb3Bkb3duLmV2ZW50cy5iaW5kaW5nLmNhbGwodGhpcywhMSksaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsITEpLHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzKSxzZXRUaW1lb3V0KCgoKT0+e3RoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZT0hMX0pLDEwMCksdGhpcy5zdGF0ZS5kcm9wZG93bi5xdWVyeT10aGlzLnN0YXRlLmRkSXRlbURhdGE9dGhpcy5zdGF0ZS5kZEl0ZW1FbG09dGhpcy5zdGF0ZS5zZWxlY3Rpb249bnVsbCx0aGlzLnN0YXRlLnRhZyYmdGhpcy5zdGF0ZS50YWcudmFsdWUubGVuZ3RoJiYodGhpcy5zdGF0ZS5mbGFnZ2VkVGFnc1t0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0XT10aGlzLnN0YXRlLnRhZyksdGhpcy50cmlnZ2VyKFwiZHJvcGRvd246aGlkZVwiLHMpLHRoaXN9LHRvZ2dsZSh0KXt0aGlzLmRyb3Bkb3duW3RoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZSYmIXQ/XCJoaWRlXCI6XCJzaG93XCJdKCl9LHJlbmRlcigpe3ZhciB0LGUsaSxzPSh0PXRoaXMuRE9NLmRyb3Bkb3duLChpPXQuY2xvbmVOb2RlKCEwKSkuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmZpeGVkOyB0b3A6LTk5OTlweDsgb3BhY2l0eTowXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpKSxlPWkuY2xpZW50SGVpZ2h0LGkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKSxlKSxhPXRoaXMuc2V0dGluZ3M7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGEuZHJvcGRvd24uZW5hYmxlZCYmYS5kcm9wZG93bi5lbmFibGVkPj0wPyh0aGlzLkRPTS5zY29wZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsITApLGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5ET00uZHJvcGRvd24pfHwodGhpcy5ET00uZHJvcGRvd24uY2xhc3NMaXN0LmFkZChhLmNsYXNzTmFtZXMuZHJvcGRvd25Jbml0YWwpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24ocyksYS5kcm9wZG93bi5hcHBlbmRUYXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5ET00uZHJvcGRvd24pLHNldFRpbWVvdXQoKCgpPT50aGlzLkRPTS5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKGEuY2xhc3NOYW1lcy5kcm9wZG93bkluaXRhbCkpKSksdGhpcyk6dGhpc30sZmlsbCh0KXt0PVwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6dGhpcy5kcm9wZG93bi5jcmVhdGVMaXN0SFRNTCh0fHx0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcyk7dmFyIGUsaT10aGlzLnNldHRpbmdzLnRlbXBsYXRlcy5kcm9wZG93bkNvbnRlbnQuY2FsbCh0aGlzLHQpO3RoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQuaW5uZXJIVE1MPShlPWkpP2UucmVwbGFjZSgvXFw+W1xcclxcbiBdK1xcPC9nLFwiPjxcIikucmVwbGFjZSgvKDwuKj8+KXxcXHMrL2csKCh0LGUpPT5lfHxcIiBcIikpOlwiXCJ9LGZpbGxIZWFkZXJGb290ZXIoKXt0aGlzLnNldHRpbmdzLnRlbXBsYXRlczt2YXIgdD10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcyh0aGlzLnN0YXRlLmRyb3Bkb3duLnF1ZXJ5KSxlPXRoaXMucGFyc2VUZW1wbGF0ZShcImRyb3Bkb3duSGVhZGVyXCIsW3RdKSxpPXRoaXMucGFyc2VUZW1wbGF0ZShcImRyb3Bkb3duRm9vdGVyXCIsW3RdKSxzPXRoaXMuZHJvcGRvd24uZ2V0SGVhZGVyUmVmKCksYT10aGlzLmRyb3Bkb3duLmdldEZvb3RlclJlZigpO2UmJnM/LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGUscyksaSYmYT8ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaSxhKX0scmVmaWx0ZXIodCl7dD10fHx0aGlzLnN0YXRlLmRyb3Bkb3duLnF1ZXJ5fHxcIlwiLHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zPXRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zKHQpLHRoaXMuZHJvcGRvd24uZmlsbCgpLHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmxlbmd0aHx8dGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy50cmlnZ2VyKFwiZHJvcGRvd246dXBkYXRlZFwiLHRoaXMuRE9NLmRyb3Bkb3duKX0scG9zaXRpb24odCl7dmFyIGU9dGhpcy5zZXR0aW5ncy5kcm9wZG93bjtpZihcIm1hbnVhbFwiIT1lLnBvc2l0aW9uKXt2YXIgaSxzLGEsbixvLHIsbD10aGlzLkRPTS5kcm9wZG93bixkPWUucGxhY2VBYm92ZSxoPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZz1NYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh8fDAsd2luZG93LmlubmVyV2lkdGh8fDApPjQ4MD9lLnBvc2l0aW9uOlwiYWxsXCIscD10aGlzLkRPTVtcImlucHV0XCI9PWc/XCJpbnB1dFwiOlwic2NvcGVcIl07dD10fHxsLmNsaWVudEhlaWdodCx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJihcInRleHRcIj09Zz8oYT0oaT10aGlzLmdldENhcmV0R2xvYmFsUG9zaXRpb24oKSkuYm90dG9tLHM9aS50b3Asbj1pLmxlZnQsbz1cImF1dG9cIik6KHI9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsaT0wO3Q7KWUrPXQub2Zmc2V0TGVmdHx8MCxpKz10Lm9mZnNldFRvcHx8MCx0PXQucGFyZW50Tm9kZTtyZXR1cm57bGVmdDplLHRvcDppfX0odGhpcy5zZXR0aW5ncy5kcm9wZG93bi5hcHBlbmRUYXJnZXQpLHM9KGk9cC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkudG9wLXIudG9wLGE9aS5ib3R0b20tMS1yLnRvcCxuPWkubGVmdC1yLmxlZnQsbz1pLndpZHRoK1wicHhcIikscz1NYXRoLmZsb29yKHMpLGE9TWF0aC5jZWlsKGEpLGQ9dm9pZCAwPT09ZD9oLWkuYm90dG9tPHQ6ZCxsLnN0eWxlLmNzc1RleHQ9XCJsZWZ0OlwiKyhuK3dpbmRvdy5wYWdlWE9mZnNldCkrXCJweDsgd2lkdGg6XCIrbytcIjtcIisoZD9cInRvcDogXCIrKHMrd2luZG93LnBhZ2VZT2Zmc2V0KStcInB4XCI6XCJ0b3A6IFwiKyhhK3dpbmRvdy5wYWdlWU9mZnNldCkrXCJweFwiKSxsLnNldEF0dHJpYnV0ZShcInBsYWNlbWVudFwiLGQ/XCJ0b3BcIjpcImJvdHRvbVwiKSxsLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsZykpfX0sZXZlbnRzOntiaW5kaW5nKCl7bGV0IHQ9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXTt2YXIgZT10aGlzLmRyb3Bkb3duLmV2ZW50cy5jYWxsYmFja3MsaT10aGlzLmxpc3RlbmVycy5kcm9wZG93bj10aGlzLmxpc3RlbmVycy5kcm9wZG93bnx8e3Bvc2l0aW9uOnRoaXMuZHJvcGRvd24ucG9zaXRpb24uYmluZCh0aGlzKSxvbktleURvd246ZS5vbktleURvd24uYmluZCh0aGlzKSxvbk1vdXNlT3ZlcjplLm9uTW91c2VPdmVyLmJpbmQodGhpcyksb25Nb3VzZUxlYXZlOmUub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksb25DbGljazplLm9uQ2xpY2suYmluZCh0aGlzKSxvblNjcm9sbDplLm9uU2Nyb2xsLmJpbmQodGhpcyl9LHM9dD9cImFkZEV2ZW50TGlzdGVuZXJcIjpcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjtcIm1hbnVhbFwiIT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLnBvc2l0aW9uJiYod2luZG93W3NdKFwicmVzaXplXCIsaS5wb3NpdGlvbiksd2luZG93W3NdKFwia2V5ZG93blwiLGkub25LZXlEb3duKSksdGhpcy5ET00uZHJvcGRvd25bc10oXCJtb3VzZW92ZXJcIixpLm9uTW91c2VPdmVyKSx0aGlzLkRPTS5kcm9wZG93bltzXShcIm1vdXNlbGVhdmVcIixpLm9uTW91c2VMZWF2ZSksdGhpcy5ET00uZHJvcGRvd25bc10oXCJtb3VzZWRvd25cIixpLm9uQ2xpY2spLHRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnRbc10oXCJzY3JvbGxcIixpLm9uU2Nyb2xsKX0sY2FsbGJhY2tzOntvbktleURvd24odCl7aWYodGhpcy5zdGF0ZS5oYXNGb2N1cyl7dmFyIGU9dGhpcy5ET00uZHJvcGRvd24ucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtQWN0aXZlU2VsZWN0b3IpLGk9dGhpcy5kcm9wZG93bi5nZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZShlKTtzd2l0Y2godC5rZXkpe2Nhc2VcIkFycm93RG93blwiOmNhc2VcIkFycm93VXBcIjpjYXNlXCJEb3duXCI6Y2FzZVwiVXBcIjp0LnByZXZlbnREZWZhdWx0KCk7dmFyIHM9dGhpcy5kcm9wZG93bi5nZXRBbGxTdWdnZXN0aW9uc1JlZnMoKSxhPVwiQXJyb3dVcFwiPT10LmtleXx8XCJVcFwiPT10LmtleTtlJiYoZT10aGlzLmRyb3Bkb3duLmdldE5leHRPclByZXZPcHRpb24oZSwhYSkpLGUmJmUubWF0Y2hlcyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtU2VsZWN0b3IpfHwoZT1zW2E/cy5sZW5ndGgtMTowXSksaT10aGlzLmRyb3Bkb3duLmdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKGUpLHRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKGUsITApO2JyZWFrO2Nhc2VcIkVzY2FwZVwiOmNhc2VcIkVzY1wiOnRoaXMuZHJvcGRvd24uaGlkZSgpO2JyZWFrO2Nhc2VcIkFycm93UmlnaHRcIjppZih0aGlzLnN0YXRlLmFjdGlvbnMuQXJyb3dMZWZ0KXJldHVybjtjYXNlXCJUYWJcIjppZihcIm1peFwiIT10aGlzLnNldHRpbmdzLm1vZGUmJmUmJiF0aGlzLnNldHRpbmdzLmF1dG9Db21wbGV0ZS5yaWdodEtleSYmIXRoaXMuc3RhdGUuZWRpdGluZyl7dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBuPXRoaXMuZHJvcGRvd24uZ2V0TWFwcGVkVmFsdWUoaSk7cmV0dXJuIHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnNldC5jYWxsKHRoaXMsbiksITF9cmV0dXJuITA7Y2FzZVwiRW50ZXJcIjp0LnByZXZlbnREZWZhdWx0KCksdGhpcy5zZXR0aW5ncy5ob29rcy5zdWdnZXN0aW9uQ2xpY2sodCx7dGFnaWZ5OnRoaXMsdGFnRGF0YTppLHN1Z2dlc3Rpb25FbG06ZX0pLnRoZW4oKCgpPT57aWYoZSlyZXR1cm4gdGhpcy5kcm9wZG93bi5zZWxlY3RPcHRpb24oZSksZT10aGlzLmRyb3Bkb3duLmdldE5leHRPclByZXZPcHRpb24oZSwhYSksdm9pZCB0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbihlKTt0aGlzLmRyb3Bkb3duLmhpZGUoKSxcIm1peFwiIT10aGlzLnNldHRpbmdzLm1vZGUmJnRoaXMuYWRkVGFncyh0aGlzLnN0YXRlLmlucHV0VGV4dC50cmltKCksITApfSkpLmNhdGNoKCh0PT50KSk7YnJlYWs7Y2FzZVwiQmFja3NwYWNlXCI6e2lmKFwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZXx8dGhpcy5zdGF0ZS5lZGl0aW5nLnNjb3BlKXJldHVybjtjb25zdCB0PXRoaXMuaW5wdXQucmF3LmNhbGwodGhpcyk7XCJcIiE9dCYmODIwMyE9dC5jaGFyQ29kZUF0KDApfHwoITA9PT10aGlzLnNldHRpbmdzLmJhY2tzcGFjZT90aGlzLnJlbW92ZVRhZ3MoKTpcImVkaXRcIj09dGhpcy5zZXR0aW5ncy5iYWNrc3BhY2UmJnNldFRpbWVvdXQodGhpcy5lZGl0VGFnLmJpbmQodGhpcyksMCkpfX19fSxvbk1vdXNlT3Zlcih0KXt2YXIgZT10LnRhcmdldC5jbG9zZXN0KHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1TZWxlY3Rvcik7ZSYmdGhpcy5kcm9wZG93bi5oaWdobGlnaHRPcHRpb24oZSl9LG9uTW91c2VMZWF2ZSh0KXt0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbigpfSxvbkNsaWNrKHQpe2lmKDA9PXQuYnV0dG9uJiZ0LnRhcmdldCE9dGhpcy5ET00uZHJvcGRvd24mJnQudGFyZ2V0IT10aGlzLkRPTS5kcm9wZG93bi5jb250ZW50KXt2YXIgZT10LnRhcmdldC5jbG9zZXN0KHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1TZWxlY3RvciksaT10aGlzLmRyb3Bkb3duLmdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKGUpO3RoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb249ITAsc2V0VGltZW91dCgoKCk9PnRoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb249ITEpLDUwKSx0aGlzLnNldHRpbmdzLmhvb2tzLnN1Z2dlc3Rpb25DbGljayh0LHt0YWdpZnk6dGhpcyx0YWdEYXRhOmksc3VnZ2VzdGlvbkVsbTplfSkudGhlbigoKCk9PntlP3RoaXMuZHJvcGRvd24uc2VsZWN0T3B0aW9uKGUsdCk6dGhpcy5kcm9wZG93bi5oaWRlKCl9KSkuY2F0Y2goKHQ9PmNvbnNvbGUud2Fybih0KSkpfX0sb25TY3JvbGwodCl7dmFyIGU9dC50YXJnZXQsaT1lLnNjcm9sbFRvcC8oZS5zY3JvbGxIZWlnaHQtZS5wYXJlbnROb2RlLmNsaWVudEhlaWdodCkqMTAwO3RoaXMudHJpZ2dlcihcImRyb3Bkb3duOnNjcm9sbFwiLHtwZXJjZW50YWdlOk1hdGgucm91bmQoaSl9KX19fSxnZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZSh0KXt2YXIgZT10JiZ0LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybiB0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5maW5kKCh0PT50LnZhbHVlPT1lKSl8fG51bGx9LGdldE5leHRPclByZXZPcHRpb24odCl7bGV0IGU9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXTt2YXIgaT10aGlzLmRyb3Bkb3duLmdldEFsbFN1Z2dlc3Rpb25zUmVmcygpLHM9aS5maW5kSW5kZXgoKGU9PmU9PT10KSk7cmV0dXJuIGU/aVtzKzFdOmlbcy0xXX0saGlnaGxpZ2h0T3B0aW9uKHQsZSl7dmFyIGkscz10aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtQWN0aXZlO2lmKHRoaXMuc3RhdGUuZGRJdGVtRWxtJiYodGhpcy5zdGF0ZS5kZEl0ZW1FbG0uY2xhc3NMaXN0LnJlbW92ZShzKSx0aGlzLnN0YXRlLmRkSXRlbUVsbS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIpKSwhdClyZXR1cm4gdGhpcy5zdGF0ZS5kZEl0ZW1EYXRhPW51bGwsdGhpcy5zdGF0ZS5kZEl0ZW1FbG09bnVsbCx2b2lkIHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzKTtpPXRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zW3RoaXMuZ2V0Tm9kZUluZGV4KHQpXSx0aGlzLnN0YXRlLmRkSXRlbURhdGE9aSx0aGlzLnN0YXRlLmRkSXRlbUVsbT10LHQuY2xhc3NMaXN0LmFkZChzKSx0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwhMCksZSYmKHQucGFyZW50Tm9kZS5zY3JvbGxUb3A9dC5jbGllbnRIZWlnaHQrdC5vZmZzZXRUb3AtdC5wYXJlbnROb2RlLmNsaWVudEhlaWdodCksdGhpcy5zZXR0aW5ncy5hdXRvQ29tcGxldGUmJih0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyxpKSx0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKCkpfSxzZWxlY3RPcHRpb24odCxlKXt2YXIgaT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLHM9aS5jbGVhck9uU2VsZWN0LGE9aS5jbG9zZU9uU2VsZWN0O2lmKCF0KXJldHVybiB0aGlzLmFkZFRhZ3ModGhpcy5zdGF0ZS5pbnB1dFRleHQsITApLHZvaWQoYSYmdGhpcy5kcm9wZG93bi5oaWRlKCkpO2U9ZXx8e307dmFyIG49dC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSxvPVwibm9NYXRjaFwiPT1uLHI9dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMuZmluZCgodD0+KHQudmFsdWV8fHQpPT1uKSk7dGhpcy50cmlnZ2VyKFwiZHJvcGRvd246c2VsZWN0XCIse2RhdGE6cixlbG06dCxldmVudDplfSksbiYmKHJ8fG8pPyh0aGlzLnN0YXRlLmVkaXRpbmc/dGhpcy5vbkVkaXRUYWdEb25lKG51bGwsZyh7X19pc1ZhbGlkOiEwfSx0aGlzLm5vcm1hbGl6ZVRhZ3MoW3JdKVswXSkpOnRoaXNbXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP1wiYWRkTWl4VGFnc1wiOlwiYWRkVGFnc1wiXShbcnx8dGhpcy5pbnB1dC5yYXcuY2FsbCh0aGlzKV0scyksdGhpcy5ET00uaW5wdXQucGFyZW50Tm9kZSYmKHNldFRpbWVvdXQoKCgpPT57dGhpcy5ET00uaW5wdXQuZm9jdXMoKSx0aGlzLnRvZ2dsZUZvY3VzQ2xhc3MoITApfSkpLGEmJnNldFRpbWVvdXQodGhpcy5kcm9wZG93bi5oaWRlLmJpbmQodGhpcykpLHQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwoKCk9Pnt0aGlzLmRyb3Bkb3duLmZpbGxIZWFkZXJGb290ZXIoKSxzZXRUaW1lb3V0KCgoKT0+dC5yZW1vdmUoKSksMTAwKX0pLHtvbmNlOiEwfSksdC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1IaWRkZW4pKSk6YSYmc2V0VGltZW91dCh0aGlzLmRyb3Bkb3duLmhpZGUuYmluZCh0aGlzKSl9LHNlbGVjdEFsbCh0KXt0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5sZW5ndGg9MCx0aGlzLmRyb3Bkb3duLmhpZGUoKSx0aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcyhcIlwiKTt2YXIgZT10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcyhcIlwiKTtyZXR1cm4gdHx8KGU9dGhpcy5zdGF0ZS5kcm9wZG93bi5zdWdnZXN0aW9ucyksdGhpcy5hZGRUYWdzKGUsITApLHRoaXN9LGZpbHRlckxpc3RJdGVtcyh0LGUpe3ZhciBpLHMsYSxuLG8scj10aGlzLnNldHRpbmdzLGw9ci5kcm9wZG93bixkPShlPWV8fHt9LFtdKSxnPVtdLHA9ci53aGl0ZWxpc3QsdT1sLm1heEl0ZW1zPj0wP2wubWF4SXRlbXM6MS8wLG09bC5zZWFyY2hLZXlzLHY9MDtpZighKHQ9XCJzZWxlY3RcIj09ci5tb2RlJiZ0aGlzLnZhbHVlLmxlbmd0aCYmdGhpcy52YWx1ZVswXVtyLnRhZ1RleHRQcm9wXT09dD9cIlwiOnQpfHwhbS5sZW5ndGgpcmV0dXJuIGQ9ci5kdXBsaWNhdGVzP3A6cC5maWx0ZXIoKHQ9PiF0aGlzLmlzVGFnRHVwbGljYXRlKGgodCk/dC52YWx1ZTp0KSkpLHRoaXMuc3RhdGUuZHJvcGRvd24uc3VnZ2VzdGlvbnM9ZCxkLnNsaWNlKDAsdSk7ZnVuY3Rpb24gZih0LGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmV2ZXJ5KChlPT50LmluY2x1ZGVzKGUudG9Mb3dlckNhc2UoKSkpKX1mb3Iobz1sLmNhc2VTZW5zaXRpdmU/XCJcIit0OihcIlwiK3QpLnRvTG93ZXJDYXNlKCk7djxwLmxlbmd0aDt2Kyspe2xldCB0LHU7aT1wW3ZdaW5zdGFuY2VvZiBPYmplY3Q/cFt2XTp7dmFsdWU6cFt2XX07bGV0IFQ9IU9iamVjdC5rZXlzKGkpLnNvbWUoKHQ9Pm0uaW5jbHVkZXModCkpKT9bXCJ2YWx1ZVwiXTptO2wuZnV6enlTZWFyY2gmJiFlLmV4YWN0PyhhPVQucmVkdWNlKCgodCxlKT0+dCtcIiBcIisoaVtlXXx8XCJcIikpLFwiXCIpLnRvTG93ZXJDYXNlKCkudHJpbSgpLGwuYWNjZW50ZWRTZWFyY2gmJihhPWMoYSksbz1jKG8pKSx0PTA9PWEuaW5kZXhPZihvKSx1PWE9PT1vLHM9ZihhLG8pKToodD0hMCxzPVQuc29tZSgodD0+e3ZhciBzPVwiXCIrKGlbdF18fFwiXCIpO3JldHVybiBsLmFjY2VudGVkU2VhcmNoJiYocz1jKHMpLG89YyhvKSksbC5jYXNlU2Vuc2l0aXZlfHwocz1zLnRvTG93ZXJDYXNlKCkpLHU9cz09PW8sZS5leGFjdD9zPT09bzowPT1zLmluZGV4T2Yobyl9KSkpLG49IXIuZHVwbGljYXRlcyYmdGhpcy5pc1RhZ0R1cGxpY2F0ZShoKGkpP2kudmFsdWU6aSkscyYmIW4mJih1JiZ0P2cucHVzaChpKTpcInN0YXJ0c1dpdGhcIj09bC5zb3J0YnkmJnQ/ZC51bnNoaWZ0KGkpOmQucHVzaChpKSl9cmV0dXJuIHRoaXMuc3RhdGUuZHJvcGRvd24uc3VnZ2VzdGlvbnM9Zy5jb25jYXQoZCksXCJmdW5jdGlvblwiPT10eXBlb2YgbC5zb3J0Ynk/bC5zb3J0YnkoZy5jb25jYXQoZCksbyk6Zy5jb25jYXQoZCkuc2xpY2UoMCx1KX0sZ2V0TWFwcGVkVmFsdWUodCl7dmFyIGU9dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5tYXBWYWx1ZVRvO3JldHVybiBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZSh0KTp0W2VdfHx0LnZhbHVlOnQudmFsdWV9LGNyZWF0ZUxpc3RIVE1MKHQpe3JldHVybiBnKFtdLHQpLm1hcCgoKHQsaSk9PntcInN0cmluZ1wiIT10eXBlb2YgdCYmXCJudW1iZXJcIiE9dHlwZW9mIHR8fCh0PXt2YWx1ZTp0fSk7dmFyIHM9dGhpcy5kcm9wZG93bi5nZXRNYXBwZWRWYWx1ZSh0KTtyZXR1cm4gcz1cInN0cmluZ1wiPT10eXBlb2Ygcz9kKHMpOnMsdGhpcy5zZXR0aW5ncy50ZW1wbGF0ZXMuZHJvcGRvd25JdGVtLmFwcGx5KHRoaXMsW2UoZSh7fSx0KSx7fSx7bWFwcGVkVmFsdWU6c30pLHRoaXNdKX0pKS5qb2luKFwiXCIpfX07Y29uc3QgYj1cIkB5YWlyZW8vdGFnaWZ5L1wiO3ZhciB5LHg9e2VtcHR5OlwiZW1wdHlcIixleGNlZWQ6XCJudW1iZXIgb2YgdGFncyBleGNlZWRlZFwiLHBhdHRlcm46XCJwYXR0ZXJuIG1pc21hdGNoXCIsZHVwbGljYXRlOlwiYWxyZWFkeSBleGlzdHNcIixub3RBbGxvd2VkOlwibm90IGFsbG93ZWRcIn0sTz17d3JhcHBlcjoodCxlKT0+YDx0YWdzIGNsYXNzPVwiJHtlLmNsYXNzTmFtZXMubmFtZXNwYWNlfSAke2UubW9kZT9gJHtlLmNsYXNzTmFtZXNbZS5tb2RlK1wiTW9kZVwiXX1gOlwiXCJ9ICR7dC5jbGFzc05hbWV9XCJcXG4gICAgICAgICAgICAgICAgICAgICR7ZS5yZWFkb25seT9cInJlYWRvbmx5XCI6XCJcIn1cXG4gICAgICAgICAgICAgICAgICAgICR7ZS5kaXNhYmxlZD9cImRpc2FibGVkXCI6XCJcIn1cXG4gICAgICAgICAgICAgICAgICAgICR7ZS5yZXF1aXJlZD9cInJlcXVpcmVkXCI6XCJcIn1cXG4gICAgICAgICAgICAgICAgICAgICR7XCJzZWxlY3RcIj09PWUubW9kZT9cInNwZWxsY2hlY2s9J2ZhbHNlJ1wiOlwiXCJ9XFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCI+XFxuICAgICAgICAgICAgPHNwYW4gJHshZS5yZWFkb25seSYmZS51c2VySW5wdXQ/XCJjb250ZW50ZWRpdGFibGVcIjpcIlwifSB0YWJJbmRleD1cIjBcIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHtlLnBsYWNlaG9sZGVyfHxcIiYjODIwMztcIn1cIiBhcmlhLXBsYWNlaG9sZGVyPVwiJHtlLnBsYWNlaG9sZGVyfHxcIlwifVwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtlLmNsYXNzTmFtZXMuaW5wdXR9XCJcXG4gICAgICAgICAgICAgICAgcm9sZT1cInRleHRib3hcIlxcbiAgICAgICAgICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImJvdGhcIlxcbiAgICAgICAgICAgICAgICBhcmlhLW11bHRpbGluZT1cIiR7XCJtaXhcIj09ZS5tb2RlfVwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgJiM4MjAzO1xcbiAgICAgICAgPC90YWdzPmAsdGFnKHQsZSl7bGV0IGk9ZS5zZXR0aW5ncztyZXR1cm5gPHRhZyB0aXRsZT1cIiR7dC50aXRsZXx8dC52YWx1ZX1cIlxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudGVkaXRhYmxlPSdmYWxzZSdcXG4gICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9J2ZhbHNlJ1xcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIke2kuYTExeS5mb2N1c2FibGVUYWdzPzA6LTF9XCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtpLmNsYXNzTmFtZXMudGFnfSAke3QuY2xhc3N8fFwiXCJ9XCJcXG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRBdHRyaWJ1dGVzKHQpfT5cXG4gICAgICAgICAgICA8eCB0aXRsZT0nJyBjbGFzcz1cIiR7aS5jbGFzc05hbWVzLnRhZ1h9XCIgcm9sZT0nYnV0dG9uJyBhcmlhLWxhYmVsPSdyZW1vdmUgdGFnJz48L3g+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke2kuY2xhc3NOYW1lcy50YWdUZXh0fVwiPiR7dFtpLnRhZ1RleHRQcm9wXXx8dC52YWx1ZX08L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3RhZz5gfSxkcm9wZG93bih0KXt2YXIgZT10LmRyb3Bkb3duLGk9XCJtYW51YWxcIj09ZS5wb3NpdGlvbixzPWAke3QuY2xhc3NOYW1lcy5kcm9wZG93bn1gO3JldHVybmA8ZGl2IGNsYXNzPVwiJHtpP1wiXCI6c30gJHtlLmNsYXNzbmFtZX1cIiByb2xlPVwibGlzdGJveFwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc2VsZWN0b3I9J3RhZ2lmeS1zdWdnZXN0aW9ucy13cmFwcGVyJyBjbGFzcz1cIiR7dC5jbGFzc05hbWVzLmRyb3Bkb3duV3JhcHBlcn1cIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+YH0sZHJvcGRvd25Db250ZW50KHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT10aGlzLnN0YXRlLmRyb3Bkb3duLnN1Z2dlc3Rpb25zO3JldHVybmBcXG4gICAgICAgICAgICAke2UudGVtcGxhdGVzLmRyb3Bkb3duSGVhZGVyLmNhbGwodGhpcyxpKX1cXG4gICAgICAgICAgICAke3R9XFxuICAgICAgICAgICAgJHtlLnRlbXBsYXRlcy5kcm9wZG93bkZvb3Rlci5jYWxsKHRoaXMsaSl9XFxuICAgICAgICBgfSxkcm9wZG93bkl0ZW0odCl7cmV0dXJuYDxkaXYgJHt0aGlzLmdldEF0dHJpYnV0ZXModCl9XFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0nJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtfSAke3QuY2xhc3M/dC5jbGFzczpcIlwifSdcXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXFxuICAgICAgICAgICAgICAgICAgICByb2xlPVwib3B0aW9uXCI+JHt0Lm1hcHBlZFZhbHVlfHx0LnZhbHVlfTwvZGl2PmB9LGRyb3Bkb3duSGVhZGVyKHQpe3JldHVybmA8aGVhZGVyIGRhdGEtc2VsZWN0b3I9J3RhZ2lmeS1zdWdnZXN0aW9ucy1oZWFkZXInIGNsYXNzPVwiJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25IZWFkZXJ9XCI+PC9oZWFkZXI+YH0sZHJvcGRvd25Gb290ZXIodCl7dmFyIGU9dC5sZW5ndGgtdGhpcy5zZXR0aW5ncy5kcm9wZG93bi5tYXhJdGVtcztyZXR1cm4gZT4wP2A8Zm9vdGVyIGRhdGEtc2VsZWN0b3I9J3RhZ2lmeS1zdWdnZXN0aW9ucy1mb290ZXInIGNsYXNzPVwiJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25Gb290ZXJ9XCI+XFxuICAgICAgICAgICAgICAgICR7ZX0gbW9yZSBpdGVtcy4gUmVmaW5lIHlvdXIgc2VhcmNoLlxcbiAgICAgICAgICAgIDwvZm9vdGVyPmA6XCJcIn0sZHJvcGRvd25JdGVtTm9NYXRjaDpudWxsfTtmdW5jdGlvbiBEKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO2Z1bmN0aW9uIGkodCxpLHMpe3MmJmkuc3BsaXQoL1xccysvZykuZm9yRWFjaCgoaT0+ZVt0K1wiRXZlbnRMaXN0ZW5lclwiXS5jYWxsKGUsaSxzKSkpfXJldHVybntvZmYodCxlKXtyZXR1cm4gaShcInJlbW92ZVwiLHQsZSksdGhpc30sb24odCxlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmaShcImFkZFwiLHQsZSksdGhpc30sdHJpZ2dlcihpLHMsYSl7dmFyIG47aWYoYT1hfHx7Y2xvbmVEYXRhOiEwfSxpKWlmKHQuc2V0dGluZ3MuaXNKUXVlcnlQbHVnaW4pXCJyZW1vdmVcIj09aSYmKGk9XCJyZW1vdmVUYWdcIiksalF1ZXJ5KHQuRE9NLm9yaWdpbmFsSW5wdXQpLnRyaWdnZXJIYW5kbGVyKGksW3NdKTtlbHNle3RyeXt2YXIgbz1cIm9iamVjdFwiPT10eXBlb2Ygcz9zOnt2YWx1ZTpzfTtpZigobz1hLmNsb25lRGF0YT9nKHt9LG8pOm8pLnRhZ2lmeT10aGlzLHMuZXZlbnQmJihvLmV2ZW50PWZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybjtsZXQgZT1uZXcgRnVuY3Rpb247Zm9yKGxldCBpIGluIHQpe2xldCBzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxpKTtzJiYocy5nZXR8fHMuc2V0KT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHMpOmVbaV09dFtpXX1yZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCksZX0ocy5ldmVudCkpLHMgaW5zdGFuY2VvZiBPYmplY3QpZm9yKHZhciByIGluIHMpc1tyXWluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJihvW3JdPXNbcl0pO249bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDpvfSl9Y2F0Y2godCl7Y29uc29sZS53YXJuKHQpfWUuZGlzcGF0Y2hFdmVudChuKX19fX12YXIgTT17Y3VzdG9tQmluZGluZygpe3RoaXMuY3VzdG9tRXZlbnRzTGlzdC5mb3JFYWNoKCh0PT57dGhpcy5vbih0LHRoaXMuc2V0dGluZ3MuY2FsbGJhY2tzW3RdKX0pKX0sYmluZGluZygpe2xldCB0PSEoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0pfHxhcmd1bWVudHNbMF07dmFyIGUsaT10aGlzLmV2ZW50cy5jYWxsYmFja3Mscz10P1wiYWRkRXZlbnRMaXN0ZW5lclwiOlwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiO2lmKCF0aGlzLnN0YXRlLm1haW5FdmVudHN8fCF0KXtmb3IodmFyIGEgaW4gdGhpcy5zdGF0ZS5tYWluRXZlbnRzPXQsdCYmIXRoaXMubGlzdGVuZXJzLm1haW4mJih0aGlzLmV2ZW50cy5iaW5kR2xvYmFsLmNhbGwodGhpcyksdGhpcy5zZXR0aW5ncy5pc0pRdWVyeVBsdWdpbiYmalF1ZXJ5KHRoaXMuRE9NLm9yaWdpbmFsSW5wdXQpLm9uKFwidGFnaWZ5LnJlbW92ZUFsbFRhZ3NcIix0aGlzLnJlbW92ZUFsbFRhZ3MuYmluZCh0aGlzKSkpLGU9dGhpcy5saXN0ZW5lcnMubWFpbj10aGlzLmxpc3RlbmVycy5tYWlufHx7Zm9jdXM6W1wiaW5wdXRcIixpLm9uRm9jdXNCbHVyLmJpbmQodGhpcyldLGtleWRvd246W1wiaW5wdXRcIixpLm9uS2V5ZG93bi5iaW5kKHRoaXMpXSxjbGljazpbXCJzY29wZVwiLGkub25DbGlja1Njb3BlLmJpbmQodGhpcyldLGRibGNsaWNrOltcInNjb3BlXCIsaS5vbkRvdWJsZUNsaWNrU2NvcGUuYmluZCh0aGlzKV0scGFzdGU6W1wiaW5wdXRcIixpLm9uUGFzdGUuYmluZCh0aGlzKV0sZHJvcDpbXCJpbnB1dFwiLGkub25Ecm9wLmJpbmQodGhpcyldfSl0aGlzLkRPTVtlW2FdWzBdXVtzXShhLGVbYV1bMV0pO2NsZWFySW50ZXJ2YWwodGhpcy5saXN0ZW5lcnMubWFpbi5vcmlnaW5hbElucHV0VmFsdWVPYnNlcnZlckludGVydmFsKSx0aGlzLmxpc3RlbmVycy5tYWluLm9yaWdpbmFsSW5wdXRWYWx1ZU9ic2VydmVySW50ZXJ2YWw9c2V0SW50ZXJ2YWwoaS5vYnNlcnZlT3JpZ2luYWxJbnB1dFZhbHVlLmJpbmQodGhpcyksNTAwKTt2YXIgbj10aGlzLmxpc3RlbmVycy5tYWluLmlucHV0TXV0YXRpb25PYnNlcnZlcnx8bmV3IE11dGF0aW9uT2JzZXJ2ZXIoaS5vbklucHV0RE9NQ2hhbmdlLmJpbmQodGhpcykpO24mJm4uZGlzY29ubmVjdCgpLFwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZSYmbi5vYnNlcnZlKHRoaXMuRE9NLmlucHV0LHtjaGlsZExpc3Q6ITB9KX19LGJpbmRHbG9iYWwodCl7dmFyIGUsaT10aGlzLmV2ZW50cy5jYWxsYmFja3Mscz10P1wicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOlwiYWRkRXZlbnRMaXN0ZW5lclwiO2lmKHR8fCF0aGlzLmxpc3RlbmVycy5nbG9iYWwpZm9yKGUgb2YodGhpcy5saXN0ZW5lcnMuZ2xvYmFsPXRoaXMubGlzdGVuZXJzJiZ0aGlzLmxpc3RlbmVycy5nbG9iYWx8fFt7dHlwZTp0aGlzLmlzSUU/XCJrZXlkb3duXCI6XCJpbnB1dFwiLHRhcmdldDp0aGlzLkRPTS5pbnB1dCxjYjppW3RoaXMuaXNJRT9cIm9uSW5wdXRJRVwiOlwib25JbnB1dFwiXS5iaW5kKHRoaXMpfSx7dHlwZTpcImtleWRvd25cIix0YXJnZXQ6d2luZG93LGNiOmkub25XaW5kb3dLZXlEb3duLmJpbmQodGhpcyl9LHt0eXBlOlwiYmx1clwiLHRhcmdldDp0aGlzLkRPTS5pbnB1dCxjYjppLm9uRm9jdXNCbHVyLmJpbmQodGhpcyl9XSx0aGlzLmxpc3RlbmVycy5nbG9iYWwpKWUudGFyZ2V0W3NdKGUudHlwZSxlLmNiKX0sdW5iaW5kR2xvYmFsKCl7dGhpcy5ldmVudHMuYmluZEdsb2JhbC5jYWxsKHRoaXMsITApfSxjYWxsYmFja3M6e29uRm9jdXNCbHVyKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT10LnRhcmdldD90aGlzLnRyaW0odC50YXJnZXQudGV4dENvbnRlbnQpOlwiXCIscz10aGlzLnZhbHVlPy5bMF0/LltlLnRhZ1RleHRQcm9wXSxhPXQudHlwZSxuPWUuZHJvcGRvd24uZW5hYmxlZD49MCxvPXtyZWxhdGVkVGFyZ2V0OnQucmVsYXRlZFRhcmdldH0scj10aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uJiYobnx8IWUuZHJvcGRvd24uY2xvc2VPblNlbGVjdCksbD10aGlzLnN0YXRlLmFjdGlvbnMuYWRkTmV3JiZuLGQ9dC5yZWxhdGVkVGFyZ2V0JiZ2LmNhbGwodGhpcyx0LnJlbGF0ZWRUYXJnZXQpJiZ0aGlzLkRPTS5zY29wZS5jb250YWlucyh0LnJlbGF0ZWRUYXJnZXQpO2lmKFwiYmx1clwiPT1hKXtpZih0LnJlbGF0ZWRUYXJnZXQ9PT10aGlzLkRPTS5zY29wZSlyZXR1cm4gdGhpcy5kcm9wZG93bi5oaWRlKCksdm9pZCB0aGlzLkRPTS5pbnB1dC5mb2N1cygpO3RoaXMucG9zdFVwZGF0ZSgpLGUub25DaGFuZ2VBZnRlckJsdXImJnRoaXMudHJpZ2dlckNoYW5nZUV2ZW50KCl9aWYoIXImJiFsKWlmKHRoaXMuc3RhdGUuaGFzRm9jdXM9XCJmb2N1c1wiPT1hJiYrbmV3IERhdGUsdGhpcy50b2dnbGVGb2N1c0NsYXNzKHRoaXMuc3RhdGUuaGFzRm9jdXMpLFwibWl4XCIhPWUubW9kZSl7aWYoXCJmb2N1c1wiPT1hKXJldHVybiB0aGlzLnRyaWdnZXIoXCJmb2N1c1wiLG8pLHZvaWQoMCE9PWUuZHJvcGRvd24uZW5hYmxlZCYmZS51c2VySW5wdXR8fHRoaXMuZHJvcGRvd24uc2hvdyh0aGlzLnZhbHVlLmxlbmd0aD9cIlwiOnZvaWQgMCkpO1wiYmx1clwiPT1hJiYodGhpcy50cmlnZ2VyKFwiYmx1clwiLG8pLHRoaXMubG9hZGluZyghMSksXCJzZWxlY3RcIj09ZS5tb2RlJiYoZCYmKHRoaXMucmVtb3ZlVGFncygpLGk9XCJcIikscz09PWkmJihpPVwiXCIpKSxpJiYhdGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbiYmZS5hZGRUYWdPbkJsdXImJnRoaXMuYWRkVGFncyhpLCEwKSksdGhpcy5ET00uaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksdGhpcy5kcm9wZG93bi5oaWRlKCl9ZWxzZVwiZm9jdXNcIj09YT90aGlzLnRyaWdnZXIoXCJmb2N1c1wiLG8pOlwiYmx1clwiPT10LnR5cGUmJih0aGlzLnRyaWdnZXIoXCJibHVyXCIsbyksdGhpcy5sb2FkaW5nKCExKSx0aGlzLmRyb3Bkb3duLmhpZGUoKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGU9dm9pZCAwLHRoaXMuc2V0U3RhdGVTZWxlY3Rpb24oKSl9LG9uV2luZG93S2V5RG93bih0KXt2YXIgZSxpPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYodi5jYWxsKHRoaXMsaSkmJnRoaXMuRE9NLnNjb3BlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKXN3aXRjaChlPWkubmV4dEVsZW1lbnRTaWJsaW5nLHQua2V5KXtjYXNlXCJCYWNrc3BhY2VcIjp0aGlzLnNldHRpbmdzLnJlYWRvbmx5fHwodGhpcy5yZW1vdmVUYWdzKGkpLChlfHx0aGlzLkRPTS5pbnB1dCkuZm9jdXMoKSk7YnJlYWs7Y2FzZVwiRW50ZXJcIjpzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDAsaSl9fSxvbktleWRvd24odCl7dmFyIGU9dGhpcy5zZXR0aW5ncztcInNlbGVjdFwiPT1lLm1vZGUmJmUuZW5mb3JjZVdoaXRlbGlzdCYmdGhpcy52YWx1ZS5sZW5ndGgmJlwiVGFiXCIhPXQua2V5JiZ0LnByZXZlbnREZWZhdWx0KCk7dmFyIGk9dGhpcy50cmltKHQudGFyZ2V0LnRleHRDb250ZW50KTtpZih0aGlzLnRyaWdnZXIoXCJrZXlkb3duXCIse29yaWdpbmFsRXZlbnQ6dGhpcy5jbG9uZUV2ZW50KHQpfSksXCJtaXhcIj09ZS5tb2RlKXtzd2l0Y2godC5rZXkpe2Nhc2VcIkxlZnRcIjpjYXNlXCJBcnJvd0xlZnRcIjp0aGlzLnN0YXRlLmFjdGlvbnMuQXJyb3dMZWZ0PSEwO2JyZWFrO2Nhc2VcIkRlbGV0ZVwiOmNhc2VcIkJhY2tzcGFjZVwiOmlmKHRoaXMuc3RhdGUuZWRpdGluZylyZXR1cm47dmFyIHMsYSxuLHI9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCksZD1cIkRlbGV0ZVwiPT10LmtleSYmci5hbmNob3JPZmZzZXQ9PShyLmFuY2hvck5vZGUubGVuZ3RofHwwKSxoPXIuYW5jaG9yTm9kZS5wcmV2aW91c1NpYmxpbmcsZz0xPT1yLmFuY2hvck5vZGUubm9kZVR5cGV8fCFyLmFuY2hvck9mZnNldCYmaCYmMT09aC5ub2RlVHlwZSYmci5hbmNob3JOb2RlLnByZXZpb3VzU2libGluZyxwPW8odGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MKSxjPXRoaXMuZ2V0VGFnRWxtcygpO2lmKFwiZWRpdFwiPT1lLmJhY2tzcGFjZSYmZylyZXR1cm4gcz0xPT1yLmFuY2hvck5vZGUubm9kZVR5cGU/bnVsbDpyLmFuY2hvck5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyxzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDAscyksdm9pZCB0LnByZXZlbnREZWZhdWx0KCk7aWYodSgpJiZnKXJldHVybiBuPWwoZyksZy5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKXx8Zy5yZW1vdmUoKSx0aGlzLkRPTS5pbnB1dC5mb2N1cygpLHZvaWQgc2V0VGltZW91dCgoKCk9Pnt0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUobiksdGhpcy5ET00uaW5wdXQuY2xpY2soKX0pKTtpZihcIkJSXCI9PXIuYW5jaG9yTm9kZS5ub2RlTmFtZSlyZXR1cm47aWYoKGR8fGcpJiYxPT1yLmFuY2hvck5vZGUubm9kZVR5cGU/YT0wPT1yLmFuY2hvck9mZnNldD9kP2NbMF06bnVsbDpjW01hdGgubWluKGMubGVuZ3RoLHIuYW5jaG9yT2Zmc2V0KS0xXTpkP2E9ci5hbmNob3JOb2RlLm5leHRFbGVtZW50U2libGluZzpnJiYoYT1nKSwzPT1yLmFuY2hvck5vZGUubm9kZVR5cGUmJiFyLmFuY2hvck5vZGUubm9kZVZhbHVlJiZyLmFuY2hvck5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyYmdC5wcmV2ZW50RGVmYXVsdCgpLChnfHxkKSYmIWUuYmFja3NwYWNlKXJldHVybiB2b2lkIHQucHJldmVudERlZmF1bHQoKTtpZihcIlJhbmdlXCIhPXIudHlwZSYmIXIuYW5jaG9yT2Zmc2V0JiZyLmFuY2hvck5vZGU9PXRoaXMuRE9NLmlucHV0JiZcIkRlbGV0ZVwiIT10LmtleSlyZXR1cm4gdm9pZCB0LnByZXZlbnREZWZhdWx0KCk7aWYoXCJSYW5nZVwiIT1yLnR5cGUmJmEmJmEuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIikpcmV0dXJuIHZvaWQgdGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKGwoYSkpO2NsZWFyVGltZW91dCh5KSx5PXNldFRpbWVvdXQoKCgpPT57dmFyIHQ9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCksZT1vKHRoaXMuRE9NLmlucHV0LmlubmVySFRNTCksaT0hZCYmdC5hbmNob3JOb2RlLnByZXZpb3VzU2libGluZztpZihlLmxlbmd0aD49cC5sZW5ndGgmJmkpaWYodi5jYWxsKHRoaXMsaSkmJiFpLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpKXtpZih0aGlzLnJlbW92ZVRhZ3MoaSksdGhpcy5maXhGaXJlZm94TGFzdFRhZ05vQ2FyZXQoKSwyPT10aGlzLkRPTS5pbnB1dC5jaGlsZHJlbi5sZW5ndGgmJlwiQlJcIj09dGhpcy5ET00uaW5wdXQuY2hpbGRyZW5bMV0udGFnTmFtZSlyZXR1cm4gdGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MPVwiXCIsdGhpcy52YWx1ZS5sZW5ndGg9MCwhMH1lbHNlIGkucmVtb3ZlKCk7dGhpcy52YWx1ZT1bXS5tYXAuY2FsbChjLCgodCxlKT0+e3ZhciBpPXRoaXMudGFnRGF0YSh0KTtpZih0LnBhcmVudE5vZGV8fGkucmVhZG9ubHkpcmV0dXJuIGk7dGhpcy50cmlnZ2VyKFwicmVtb3ZlXCIse3RhZzp0LGluZGV4OmUsZGF0YTppfSl9KSkuZmlsdGVyKCh0PT50KSl9KSwyMCl9cmV0dXJuITB9c3dpdGNoKHQua2V5KXtjYXNlXCJCYWNrc3BhY2VcIjpcInNlbGVjdFwiPT1lLm1vZGUmJmUuZW5mb3JjZVdoaXRlbGlzdCYmdGhpcy52YWx1ZS5sZW5ndGg/dGhpcy5yZW1vdmVUYWdzKCk6dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiZcIm1hbnVhbFwiIT1lLmRyb3Bkb3duLnBvc2l0aW9ufHxcIlwiIT10LnRhcmdldC50ZXh0Q29udGVudCYmODIwMyE9aS5jaGFyQ29kZUF0KDApfHwoITA9PT1lLmJhY2tzcGFjZT90aGlzLnJlbW92ZVRhZ3MoKTpcImVkaXRcIj09ZS5iYWNrc3BhY2UmJnNldFRpbWVvdXQodGhpcy5lZGl0VGFnLmJpbmQodGhpcyksMCkpO2JyZWFrO2Nhc2VcIkVzY1wiOmNhc2VcIkVzY2FwZVwiOmlmKHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZSlyZXR1cm47dC50YXJnZXQuYmx1cigpO2JyZWFrO2Nhc2VcIkRvd25cIjpjYXNlXCJBcnJvd0Rvd25cIjp0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGV8fHRoaXMuZHJvcGRvd24uc2hvdygpO2JyZWFrO2Nhc2VcIkFycm93UmlnaHRcIjp7bGV0IHQ9dGhpcy5zdGF0ZS5pbnB1dFN1Z2dlc3Rpb258fHRoaXMuc3RhdGUuZGRJdGVtRGF0YTtpZih0JiZlLmF1dG9Db21wbGV0ZS5yaWdodEtleSlyZXR1cm4gdm9pZCB0aGlzLmFkZFRhZ3MoW3RdLCEwKTticmVha31jYXNlXCJUYWJcIjp7bGV0IHM9XCJzZWxlY3RcIj09ZS5tb2RlO2lmKCFpfHxzKXJldHVybiEwO3QucHJldmVudERlZmF1bHQoKX1jYXNlXCJFbnRlclwiOmlmKHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZXx8MjI5PT10LmtleUNvZGUpcmV0dXJuO3QucHJldmVudERlZmF1bHQoKSxzZXRUaW1lb3V0KCgoKT0+e3RoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb258fHRoaXMuYWRkVGFncyhpLCEwKX0pKX19LG9uSW5wdXQodCl7dGhpcy5wb3N0VXBkYXRlKCk7dmFyIGU9dGhpcy5zZXR0aW5ncztpZihcIm1peFwiPT1lLm1vZGUpcmV0dXJuIHRoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbk1peFRhZ3NJbnB1dC5jYWxsKHRoaXMsdCk7dmFyIGk9dGhpcy5pbnB1dC5ub3JtYWxpemUuY2FsbCh0aGlzKSxzPWkubGVuZ3RoPj1lLmRyb3Bkb3duLmVuYWJsZWQsYT17dmFsdWU6aSxpbnB1dEVsbTp0aGlzLkRPTS5pbnB1dH0sbj10aGlzLnZhbGlkYXRlVGFnKHt2YWx1ZTppfSk7XCJzZWxlY3RcIj09ZS5tb2RlJiZ0aGlzLnRvZ2dsZVNjb3BlVmFsaWRhdGlvbihuKSxhLmlzVmFsaWQ9bix0aGlzLnN0YXRlLmlucHV0VGV4dCE9aSYmKHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyxpLCExKSwtMSE9aS5zZWFyY2goZS5kZWxpbWl0ZXJzKT90aGlzLmFkZFRhZ3MoaSkmJnRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyk6ZS5kcm9wZG93bi5lbmFibGVkPj0wJiZ0aGlzLmRyb3Bkb3duW3M/XCJzaG93XCI6XCJoaWRlXCJdKGkpLHRoaXMudHJpZ2dlcihcImlucHV0XCIsYSkpfSxvbk1peFRhZ3NJbnB1dCh0KXt2YXIgZSxpLHMsYSxuLG8scixsLGQ9dGhpcy5zZXR0aW5ncyxoPXRoaXMudmFsdWUubGVuZ3RoLHA9dGhpcy5nZXRUYWdFbG1zKCksYz1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT13aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSx2PVtdLm1hcC5jYWxsKHAsKHQ9PnRoaXMudGFnRGF0YSh0KS52YWx1ZSkpO2lmKFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCI9PXQuaW5wdXRUeXBlJiZ1KCkmJnRoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbktleWRvd24uY2FsbCh0aGlzLHt0YXJnZXQ6dC50YXJnZXQsa2V5OlwiQmFja3NwYWNlXCJ9KSx0aGlzLnZhbHVlLnNsaWNlKCkuZm9yRWFjaCgodD0+e3QucmVhZG9ubHkmJiF2LmluY2x1ZGVzKHQudmFsdWUpJiZjLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFnRWxlbSh0KSl9KSksYy5jaGlsZE5vZGVzLmxlbmd0aCYmKG0uaW5zZXJ0Tm9kZShjKSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCghMSxjLmxhc3RDaGlsZCkpLHAubGVuZ3RoIT1oKXJldHVybiB0aGlzLnZhbHVlPVtdLm1hcC5jYWxsKHRoaXMuZ2V0VGFnRWxtcygpLCh0PT50aGlzLnRhZ0RhdGEodCkpKSx2b2lkIHRoaXMudXBkYXRlKHt3aXRob3V0Q2hhbmdlRXZlbnQ6ITB9KTtpZih0aGlzLmhhc01heFRhZ3MoKSlyZXR1cm4hMDtpZih3aW5kb3cuZ2V0U2VsZWN0aW9uJiYobz13aW5kb3cuZ2V0U2VsZWN0aW9uKCkpLnJhbmdlQ291bnQ+MCYmMz09by5hbmNob3JOb2RlLm5vZGVUeXBlKXtpZigobT1vLmdldFJhbmdlQXQoMCkuY2xvbmVSYW5nZSgpKS5jb2xsYXBzZSghMCksbS5zZXRTdGFydChvLmZvY3VzTm9kZSwwKSxzPShlPW0udG9TdHJpbmcoKS5zbGljZSgwLG0uZW5kT2Zmc2V0KSkuc3BsaXQoZC5wYXR0ZXJuKS5sZW5ndGgtMSwoaT1lLm1hdGNoKGQucGF0dGVybikpJiYoYT1lLnNsaWNlKGUubGFzdEluZGV4T2YoaVtpLmxlbmd0aC0xXSkpKSxhKXtpZih0aGlzLnN0YXRlLmFjdGlvbnMuQXJyb3dMZWZ0PSExLHRoaXMuc3RhdGUudGFnPXtwcmVmaXg6YS5tYXRjaChkLnBhdHRlcm4pWzBdLHZhbHVlOmEucmVwbGFjZShkLnBhdHRlcm4sXCJcIil9LHRoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXQ9by5iYXNlT2Zmc2V0LXRoaXMuc3RhdGUudGFnLnZhbHVlLmxlbmd0aCxsPXRoaXMuc3RhdGUudGFnLnZhbHVlLm1hdGNoKGQuZGVsaW1pdGVycykpcmV0dXJuIHRoaXMuc3RhdGUudGFnLnZhbHVlPXRoaXMuc3RhdGUudGFnLnZhbHVlLnJlcGxhY2UoZC5kZWxpbWl0ZXJzLFwiXCIpLHRoaXMuc3RhdGUudGFnLmRlbGltaXRlcnM9bFswXSx0aGlzLmFkZFRhZ3ModGhpcy5zdGF0ZS50YWcudmFsdWUsZC5kcm9wZG93bi5jbGVhck9uU2VsZWN0KSx2b2lkIHRoaXMuZHJvcGRvd24uaGlkZSgpO249dGhpcy5zdGF0ZS50YWcudmFsdWUubGVuZ3RoPj1kLmRyb3Bkb3duLmVuYWJsZWQ7dHJ5e3I9KHI9dGhpcy5zdGF0ZS5mbGFnZ2VkVGFnc1t0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0XSkucHJlZml4PT10aGlzLnN0YXRlLnRhZy5wcmVmaXgmJnIudmFsdWVbMF09PXRoaXMuc3RhdGUudGFnLnZhbHVlWzBdLHRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3NbdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldF0mJiF0aGlzLnN0YXRlLnRhZy52YWx1ZSYmZGVsZXRlIHRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3NbdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldF19Y2F0Y2godCl7fShyfHxzPHRoaXMuc3RhdGUubWl4TW9kZS5tYXRjaGVkUGF0dGVybkNvdW50KSYmKG49ITEpfWVsc2UgdGhpcy5zdGF0ZS5mbGFnZ2VkVGFncz17fTt0aGlzLnN0YXRlLm1peE1vZGUubWF0Y2hlZFBhdHRlcm5Db3VudD1zfXNldFRpbWVvdXQoKCgpPT57dGhpcy51cGRhdGUoe3dpdGhvdXRDaGFuZ2VFdmVudDohMH0pLHRoaXMudHJpZ2dlcihcImlucHV0XCIsZyh7fSx0aGlzLnN0YXRlLnRhZyx7dGV4dENvbnRlbnQ6dGhpcy5ET00uaW5wdXQudGV4dENvbnRlbnR9KSksdGhpcy5zdGF0ZS50YWcmJnRoaXMuZHJvcGRvd25bbj9cInNob3dcIjpcImhpZGVcIl0odGhpcy5zdGF0ZS50YWcudmFsdWUpfSksMTApfSxvbklucHV0SUUodCl7dmFyIGU9dGhpcztzZXRUaW1lb3V0KChmdW5jdGlvbigpe2UuZXZlbnRzLmNhbGxiYWNrcy5vbklucHV0LmNhbGwoZSx0KX0pKX0sb2JzZXJ2ZU9yaWdpbmFsSW5wdXRWYWx1ZSgpe3RoaXMuRE9NLm9yaWdpbmFsSW5wdXQucGFyZW50Tm9kZXx8dGhpcy5kZXN0cm95KCksdGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZSE9dGhpcy5ET00ub3JpZ2luYWxJbnB1dC50YWdpZnlWYWx1ZSYmdGhpcy5sb2FkT3JpZ2luYWxWYWx1ZXMoKX0sb25DbGlja1Njb3BlKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT10LnRhcmdldC5jbG9zZXN0KFwiLlwiK2UuY2xhc3NOYW1lcy50YWcpLHM9K25ldyBEYXRlLXRoaXMuc3RhdGUuaGFzRm9jdXM7aWYodC50YXJnZXQhPXRoaXMuRE9NLnNjb3BlKXtpZighdC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGUuY2xhc3NOYW1lcy50YWdYKSlyZXR1cm4gaT8odGhpcy50cmlnZ2VyKFwiY2xpY2tcIix7dGFnOmksaW5kZXg6dGhpcy5nZXROb2RlSW5kZXgoaSksZGF0YTp0aGlzLnRhZ0RhdGEoaSksb3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQodCl9KSx2b2lkKDEhPT1lLmVkaXRUYWdzJiYxIT09ZS5lZGl0VGFncy5jbGlja3N8fHRoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbkRvdWJsZUNsaWNrU2NvcGUuY2FsbCh0aGlzLHQpKSk6dm9pZCh0LnRhcmdldD09dGhpcy5ET00uaW5wdXQmJihcIm1peFwiPT1lLm1vZGUmJnRoaXMuZml4RmlyZWZveExhc3RUYWdOb0NhcmV0KCkscz41MDApP3RoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZT90aGlzLmRyb3Bkb3duLmhpZGUoKTowPT09ZS5kcm9wZG93bi5lbmFibGVkJiZcIm1peFwiIT1lLm1vZGUmJnRoaXMuZHJvcGRvd24uc2hvdyh0aGlzLnZhbHVlLmxlbmd0aD9cIlwiOnZvaWQgMCk6XCJzZWxlY3RcIj09ZS5tb2RlJiYhdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiZ0aGlzLmRyb3Bkb3duLnNob3coKSk7dGhpcy5yZW1vdmVUYWdzKHQudGFyZ2V0LnBhcmVudE5vZGUpfWVsc2UgdGhpcy5zdGF0ZS5oYXNGb2N1c3x8dGhpcy5ET00uaW5wdXQuZm9jdXMoKX0sb25QYXN0ZSh0KXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIGUsaSxzPXRoaXMuc2V0dGluZ3M7aWYoXCJzZWxlY3RcIj09cy5tb2RlJiZzLmVuZm9yY2VXaGl0ZWxpc3R8fCFzLnVzZXJJbnB1dClyZXR1cm4hMTtzLnJlYWRvbmx5fHwoZT10LmNsaXBib2FyZERhdGF8fHdpbmRvdy5jbGlwYm9hcmREYXRhLGk9ZS5nZXREYXRhKFwiVGV4dFwiKSxzLmhvb2tzLmJlZm9yZVBhc3RlKHQse3RhZ2lmeTp0aGlzLHBhc3RlZFRleHQ6aSxjbGlwYm9hcmREYXRhOmV9KS50aGVuKChlPT57dm9pZCAwPT09ZSYmKGU9aSksZSYmKHRoaXMuaW5qZWN0QXRDYXJldChlLHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApKSxcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uTWl4VGFnc0lucHV0LmNhbGwodGhpcyx0KTp0aGlzLnNldHRpbmdzLnBhc3RlQXNUYWdzP3RoaXMuYWRkVGFncyh0aGlzLnN0YXRlLmlucHV0VGV4dCtlLCEwKTp0aGlzLnN0YXRlLmlucHV0VGV4dD1lKX0pKS5jYXRjaCgodD0+dCkpKX0sb25Ecm9wKHQpe3QucHJldmVudERlZmF1bHQoKX0sb25FZGl0VGFnSW5wdXQodCxlKXt2YXIgaT10LmNsb3Nlc3QoXCIuXCIrdGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZykscz10aGlzLmdldE5vZGVJbmRleChpKSxhPXRoaXMudGFnRGF0YShpKSxuPXRoaXMuaW5wdXQubm9ybWFsaXplLmNhbGwodGhpcyx0KSxvPXtbdGhpcy5zZXR0aW5ncy50YWdUZXh0UHJvcF06bixfX3RhZ0lkOmEuX190YWdJZH0scj10aGlzLnZhbGlkYXRlVGFnKG8pO3RoaXMuZWRpdFRhZ0NoYW5nZURldGVjdGVkKGcoYSxvKSl8fCEwIT09dC5vcmlnaW5hbElzVmFsaWR8fChyPSEwKSxpLmNsYXNzTGlzdC50b2dnbGUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0ludmFsaWQsITAhPT1yKSxhLl9faXNWYWxpZD1yLGkudGl0bGU9ITA9PT1yP2EudGl0bGV8fGEudmFsdWU6cixuLmxlbmd0aD49dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5lbmFibGVkJiYodGhpcy5zdGF0ZS5lZGl0aW5nJiYodGhpcy5zdGF0ZS5lZGl0aW5nLnZhbHVlPW4pLHRoaXMuZHJvcGRvd24uc2hvdyhuKSksdGhpcy50cmlnZ2VyKFwiZWRpdDppbnB1dFwiLHt0YWc6aSxpbmRleDpzLGRhdGE6Zyh7fSx0aGlzLnZhbHVlW3NdLHtuZXdWYWx1ZTpufSksb3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQoZSl9KX0sb25FZGl0VGFnRm9jdXModCl7dGhpcy5zdGF0ZS5lZGl0aW5nPXtzY29wZTp0LGlucHV0OnQucXVlcnlTZWxlY3RvcihcIltjb250ZW50ZWRpdGFibGVdXCIpfX0sb25FZGl0VGFnQmx1cih0KXtpZih0aGlzLnN0YXRlLmhhc0ZvY3VzfHx0aGlzLnRvZ2dsZUZvY3VzQ2xhc3MoKSx0aGlzLkRPTS5zY29wZS5jb250YWlucyh0KSl7dmFyIGUsaSxzPXRoaXMuc2V0dGluZ3MsYT10LmNsb3Nlc3QoXCIuXCIrcy5jbGFzc05hbWVzLnRhZyksbj10aGlzLmlucHV0Lm5vcm1hbGl6ZS5jYWxsKHRoaXMsdCksbz10aGlzLnRhZ0RhdGEoYSkscj1vLl9fb3JpZ2luYWxEYXRhLGw9dGhpcy5lZGl0VGFnQ2hhbmdlRGV0ZWN0ZWQobyksZD10aGlzLnZhbGlkYXRlVGFnKHtbcy50YWdUZXh0UHJvcF06bixfX3RhZ0lkOm8uX190YWdJZH0pO2lmKG4paWYobCl7aWYoZT10aGlzLmhhc01heFRhZ3MoKSxpPWcoe30scix7W3MudGFnVGV4dFByb3BdOnRoaXMudHJpbShuKSxfX2lzVmFsaWQ6ZH0pLHMudHJhbnNmb3JtVGFnLmNhbGwodGhpcyxpLHIpLCEwIT09KGQ9KCFlfHwhMD09PXIuX19pc1ZhbGlkKSYmdGhpcy52YWxpZGF0ZVRhZyhpKSkpe2lmKHRoaXMudHJpZ2dlcihcImludmFsaWRcIix7ZGF0YTppLHRhZzphLG1lc3NhZ2U6ZH0pLHMuZWRpdFRhZ3Mua2VlcEludmFsaWQpcmV0dXJuO3Mua2VlcEludmFsaWRUYWdzP2kuX19pc1ZhbGlkPWQ6aT1yfWVsc2Ugcy5rZWVwSW52YWxpZFRhZ3MmJihkZWxldGUgaS50aXRsZSxkZWxldGUgaVtcImFyaWEtaW52YWxpZFwiXSxkZWxldGUgaS5jbGFzcyk7dGhpcy5vbkVkaXRUYWdEb25lKGEsaSl9ZWxzZSB0aGlzLm9uRWRpdFRhZ0RvbmUoYSxyKTtlbHNlIHRoaXMub25FZGl0VGFnRG9uZShhKX19LG9uRWRpdFRhZ2tleWRvd24odCxlKXtzd2l0Y2godGhpcy50cmlnZ2VyKFwiZWRpdDprZXlkb3duXCIse29yaWdpbmFsRXZlbnQ6dGhpcy5jbG9uZUV2ZW50KHQpfSksdC5rZXkpe2Nhc2VcIkVzY1wiOmNhc2VcIkVzY2FwZVwiOmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZS5fX3RhZ2lmeVRhZ0RhdGEuX19vcmlnaW5hbEhUTUwsZSksdGhpcy5zdGF0ZS5lZGl0aW5nPSExO2Nhc2VcIkVudGVyXCI6Y2FzZVwiVGFiXCI6dC5wcmV2ZW50RGVmYXVsdCgpLHQudGFyZ2V0LmJsdXIoKX19LG9uRG91YmxlQ2xpY2tTY29wZSh0KXt2YXIgZSxpLHM9dC50YXJnZXQuY2xvc2VzdChcIi5cIit0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnKSxhPXRoaXMudGFnRGF0YShzKSxuPXRoaXMuc2V0dGluZ3M7cyYmbi51c2VySW5wdXQmJiExIT09YS5lZGl0YWJsZSYmKGU9cy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0VkaXRpbmcpLGk9cy5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSxcInNlbGVjdFwiPT1uLm1vZGV8fG4ucmVhZG9ubHl8fGV8fGl8fCF0aGlzLnNldHRpbmdzLmVkaXRUYWdzfHx0aGlzLmVkaXRUYWcocyksdGhpcy50b2dnbGVGb2N1c0NsYXNzKCEwKSx0aGlzLnRyaWdnZXIoXCJkYmxjbGlja1wiLHt0YWc6cyxpbmRleDp0aGlzLmdldE5vZGVJbmRleChzKSxkYXRhOnRoaXMudGFnRGF0YShzKX0pKX0sb25JbnB1dERPTUNoYW5nZSh0KXt0LmZvckVhY2goKHQ9Pnt0LmFkZGVkTm9kZXMuZm9yRWFjaCgodD0+e2lmKFwiPGRpdj48YnI+PC9kaXY+XCI9PXQub3V0ZXJIVE1MKXQucmVwbGFjZVdpdGgoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtlbHNlIGlmKDE9PXQubm9kZVR5cGUmJnQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnU2VsZWN0b3IpKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTszPT10LmNoaWxkTm9kZXNbMF0ubm9kZVR5cGUmJlwiQlJcIiE9dC5wcmV2aW91c1NpYmxpbmcubm9kZU5hbWUmJihlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxuXCIpKSx0LnJlcGxhY2VXaXRoKGUsLi4uWy4uLnQuY2hpbGROb2Rlc10uc2xpY2UoMCwtMSkpLHRoaXMucGxhY2VDYXJldEFmdGVyTm9kZShlKX1lbHNlIGlmKHYuY2FsbCh0aGlzLHQpJiYoMyE9dC5wcmV2aW91c1NpYmxpbmc/Lm5vZGVUeXBlfHx0LnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudHx8dC5wcmV2aW91c1NpYmxpbmcucmVtb3ZlKCksdC5wcmV2aW91c1NpYmxpbmcmJlwiQlJcIj09dC5wcmV2aW91c1NpYmxpbmcubm9kZU5hbWUpKXt0LnByZXZpb3VzU2libGluZy5yZXBsYWNlV2l0aChcIlxcbuKAi1wiKTtsZXQgZT10Lm5leHRTaWJsaW5nLGk9XCJcIjtmb3IoO2U7KWkrPWUudGV4dENvbnRlbnQsZT1lLm5leHRTaWJsaW5nO2kudHJpbSgpJiZ0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUodC5wcmV2aW91c1NpYmxpbmcpfX0pKSx0LnJlbW92ZWROb2Rlcy5mb3JFYWNoKCh0PT57dCYmXCJCUlwiPT10Lm5vZGVOYW1lJiZ2LmNhbGwodGhpcyxlKSYmKHRoaXMucmVtb3ZlVGFncyhlKSx0aGlzLmZpeEZpcmVmb3hMYXN0VGFnTm9DYXJldCgpKX0pKX0pKTt2YXIgZT10aGlzLkRPTS5pbnB1dC5sYXN0Q2hpbGQ7ZSYmXCJcIj09ZS5ub2RlVmFsdWUmJmUucmVtb3ZlKCksZSYmXCJCUlwiPT1lLm5vZGVOYW1lfHx0aGlzLkRPTS5pbnB1dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpfX19O2Z1bmN0aW9uIEkodCxlKXtpZighdCl7Y29uc29sZS53YXJuKFwiVGFnaWZ5OlwiLFwiaW5wdXQgZWxlbWVudCBub3QgZm91bmRcIix0KTtjb25zdCBlPW5ldyBQcm94eSh0aGlzLHtnZXQ6KCk9PigpPT5lfSk7cmV0dXJuIGV9aWYodC5fX3RhZ2lmeSlyZXR1cm4gY29uc29sZS53YXJuKFwiVGFnaWZ5OiBcIixcImlucHV0IGVsZW1lbnQgaXMgYWxyZWFkeSBUYWdpZmllZCAtIFNhbWUgaW5zdGFuY2UgaXMgcmV0dXJuZWQuXCIsdCksdC5fX3RhZ2lmeTt2YXIgaTtnKHRoaXMsRCh0aGlzKSksdGhpcy5pc0ZpcmVmb3g9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEluc3RhbGxUcmlnZ2VyLHRoaXMuaXNJRT13aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRNb2RlLGU9ZXx8e30sdGhpcy5nZXRQZXJzaXN0ZWREYXRhPShpPWUuaWQsdD0+e2xldCBlLHM9XCIvXCIrdDtpZigxPT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShiK2krXCIvdlwiLDEpKXRyeXtlPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2IraStzXSl9Y2F0Y2godCl7fXJldHVybiBlfSksdGhpcy5zZXRQZXJzaXN0ZWREYXRhPSh0PT50Pyhsb2NhbFN0b3JhZ2Uuc2V0SXRlbShiK3QrXCIvdlwiLDEpLChlLGkpPT57bGV0IHM9XCIvXCIraSxhPUpTT04uc3RyaW5naWZ5KGUpO2UmJmkmJihsb2NhbFN0b3JhZ2Uuc2V0SXRlbShiK3QrcyxhKSxkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN0b3JhZ2VcIikpKX0pOigpPT57fSkoZS5pZCksdGhpcy5jbGVhclBlcnNpc3RlZERhdGE9KHQ9PmU9Pntjb25zdCBpPWIrXCIvXCIrdCtcIi9cIjtpZihlKWxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGkrZSk7ZWxzZSBmb3IobGV0IHQgaW4gbG9jYWxTdG9yYWdlKXQuaW5jbHVkZXMoaSkmJmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHQpfSkoZS5pZCksdGhpcy5hcHBseVNldHRpbmdzKHQsZSksdGhpcy5zdGF0ZT17aW5wdXRUZXh0OlwiXCIsZWRpdGluZzohMSxhY3Rpb25zOnt9LG1peE1vZGU6e30sZHJvcGRvd246e30sZmxhZ2dlZFRhZ3M6e319LHRoaXMudmFsdWU9W10sdGhpcy5saXN0ZW5lcnM9e30sdGhpcy5ET009e30sdGhpcy5idWlsZCh0KSxULmNhbGwodGhpcyksdGhpcy5nZXRDU1NWYXJzKCksdGhpcy5sb2FkT3JpZ2luYWxWYWx1ZXMoKSx0aGlzLmV2ZW50cy5jdXN0b21CaW5kaW5nLmNhbGwodGhpcyksdGhpcy5ldmVudHMuYmluZGluZy5jYWxsKHRoaXMpLHQuYXV0b2ZvY3VzJiZ0aGlzLkRPTS5pbnB1dC5mb2N1cygpLHQuX190YWdpZnk9dGhpc31yZXR1cm4gSS5wcm90b3R5cGU9e19kcm9wZG93bjp3LGhlbHBlcnM6e3NhbWVTdHI6cyxyZW1vdmVDb2xsZWN0aW9uUHJvcDphLG9taXQ6bixpc09iamVjdDpoLHBhcnNlSFRNTDpyLGVzY2FwZUhUTUw6ZCxleHRlbmQ6Zyxjb25jYXRXaXRob3V0RHVwczpwLGdldFVJRDptLGlzTm9kZVRhZzp2fSxjdXN0b21FdmVudHNMaXN0OltcImNoYW5nZVwiLFwiYWRkXCIsXCJyZW1vdmVcIixcImludmFsaWRcIixcImlucHV0XCIsXCJjbGlja1wiLFwia2V5ZG93blwiLFwiZm9jdXNcIixcImJsdXJcIixcImVkaXQ6aW5wdXRcIixcImVkaXQ6YmVmb3JlVXBkYXRlXCIsXCJlZGl0OnVwZGF0ZWRcIixcImVkaXQ6c3RhcnRcIixcImVkaXQ6a2V5ZG93blwiLFwiZHJvcGRvd246c2hvd1wiLFwiZHJvcGRvd246aGlkZVwiLFwiZHJvcGRvd246c2VsZWN0XCIsXCJkcm9wZG93bjp1cGRhdGVkXCIsXCJkcm9wZG93bjpub01hdGNoXCIsXCJkcm9wZG93bjpzY3JvbGxcIl0sZGF0YVByb3BzOltcIl9faXNWYWxpZFwiLFwiX19yZW1vdmVkXCIsXCJfX29yaWdpbmFsRGF0YVwiLFwiX19vcmlnaW5hbEhUTUxcIixcIl9fdGFnSWRcIl0sdHJpbSh0KXtyZXR1cm4gdGhpcy5zZXR0aW5ncy50cmltJiZ0JiZcInN0cmluZ1wiPT10eXBlb2YgdD90LnRyaW0oKTp0fSxwYXJzZUhUTUw6cix0ZW1wbGF0ZXM6TyxwYXJzZVRlbXBsYXRlKHQsZSl7cmV0dXJuIHQ9dGhpcy5zZXR0aW5ncy50ZW1wbGF0ZXNbdF18fHQsdGhpcy5wYXJzZUhUTUwodC5hcHBseSh0aGlzLGUpKX0sc2V0IHdoaXRlbGlzdCh0KXtjb25zdCBlPXQmJkFycmF5LmlzQXJyYXkodCk7dGhpcy5zZXR0aW5ncy53aGl0ZWxpc3Q9ZT90OltdLHRoaXMuc2V0UGVyc2lzdGVkRGF0YShlP3Q6W10sXCJ3aGl0ZWxpc3RcIil9LGdldCB3aGl0ZWxpc3QoKXtyZXR1cm4gdGhpcy5zZXR0aW5ncy53aGl0ZWxpc3R9LGdlbmVyYXRlQ2xhc3NTZWxlY3RvcnModCl7Zm9yKGxldCBlIGluIHQpe2xldCBpPWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaStcIlNlbGVjdG9yXCIse2dldCgpe3JldHVyblwiLlwiK3RoaXNbaV0uc3BsaXQoXCIgXCIpWzBdfX0pfX0sYXBwbHlTZXR0aW5ncyh0LGkpe2YudGVtcGxhdGVzPXRoaXMudGVtcGxhdGVzO3ZhciBzPXRoaXMuc2V0dGluZ3M9Zyh7fSxmLGkpO2lmKHMuZGlzYWJsZWQ9dC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSxzLnJlYWRvbmx5PXMucmVhZG9ubHl8fHQuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIikscy5wbGFjZWhvbGRlcj1kKHQuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIil8fHMucGxhY2Vob2xkZXJ8fFwiXCIpLHMucmVxdWlyZWQ9dC5oYXNBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSx0aGlzLmdlbmVyYXRlQ2xhc3NTZWxlY3RvcnMocy5jbGFzc05hbWVzKSx0aGlzLmlzSUUmJihzLmF1dG9Db21wbGV0ZT0hMSksW1wid2hpdGVsaXN0XCIsXCJibGFja2xpc3RcIl0uZm9yRWFjaCgoZT0+e3ZhciBpPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIitlKTtpJiYoaT1pLnNwbGl0KHMuZGVsaW1pdGVycykpaW5zdGFuY2VvZiBBcnJheSYmKHNbZV09aSl9KSksXCJhdXRvQ29tcGxldGVcImluIGkmJiFoKGkuYXV0b0NvbXBsZXRlKSYmKHMuYXV0b0NvbXBsZXRlPWYuYXV0b0NvbXBsZXRlLHMuYXV0b0NvbXBsZXRlLmVuYWJsZWQ9aS5hdXRvQ29tcGxldGUpLFwibWl4XCI9PXMubW9kZSYmKHMuYXV0b0NvbXBsZXRlLnJpZ2h0S2V5PSEwLHMuZGVsaW1pdGVycz1pLmRlbGltaXRlcnN8fG51bGwscy50YWdUZXh0UHJvcCYmIXMuZHJvcGRvd24uc2VhcmNoS2V5cy5pbmNsdWRlcyhzLnRhZ1RleHRQcm9wKSYmcy5kcm9wZG93bi5zZWFyY2hLZXlzLnB1c2gocy50YWdUZXh0UHJvcCkpLHQucGF0dGVybil0cnl7cy5wYXR0ZXJuPW5ldyBSZWdFeHAodC5wYXR0ZXJuKX1jYXRjaCh0KXt9aWYocy5kZWxpbWl0ZXJzKXtzLl9kZWxpbWl0ZXJzPXMuZGVsaW1pdGVyczt0cnl7cy5kZWxpbWl0ZXJzPW5ldyBSZWdFeHAodGhpcy5zZXR0aW5ncy5kZWxpbWl0ZXJzLFwiZ1wiKX1jYXRjaCh0KXt9fXMuZGlzYWJsZWQmJihzLnVzZXJJbnB1dD0hMSksdGhpcy5URVhUUz1lKGUoe30seCkscy50ZXh0c3x8e30pLFwic2VsZWN0XCIhPXMubW9kZSYmcy51c2VySW5wdXR8fChzLmRyb3Bkb3duLmVuYWJsZWQ9MCkscy5kcm9wZG93bi5hcHBlbmRUYXJnZXQ9aS5kcm9wZG93biYmaS5kcm9wZG93bi5hcHBlbmRUYXJnZXQ/aS5kcm9wZG93bi5hcHBlbmRUYXJnZXQ6ZG9jdW1lbnQuYm9keTtsZXQgYT10aGlzLmdldFBlcnNpc3RlZERhdGEoXCJ3aGl0ZWxpc3RcIik7QXJyYXkuaXNBcnJheShhKSYmKHRoaXMud2hpdGVsaXN0PUFycmF5LmlzQXJyYXkocy53aGl0ZWxpc3QpP3Aocy53aGl0ZWxpc3QsYSk6YSl9LGdldEF0dHJpYnV0ZXModCl7dmFyIGUsaT10aGlzLmdldEN1c3RvbUF0dHJpYnV0ZXModCkscz1cIlwiO2ZvcihlIGluIGkpcys9XCIgXCIrZSsodm9pZCAwIT09dFtlXT9gPVwiJHtpW2VdfVwiYDpcIlwiKTtyZXR1cm4gc30sZ2V0Q3VzdG9tQXR0cmlidXRlcyh0KXtpZighaCh0KSlyZXR1cm5cIlwiO3ZhciBlLGk9e307Zm9yKGUgaW4gdClcIl9fXCIhPWUuc2xpY2UoMCwyKSYmXCJjbGFzc1wiIT1lJiZ0Lmhhc093blByb3BlcnR5KGUpJiZ2b2lkIDAhPT10W2VdJiYoaVtlXT1kKHRbZV0pKTtyZXR1cm4gaX0sc2V0U3RhdGVTZWxlY3Rpb24oKXt2YXIgdD13aW5kb3cuZ2V0U2VsZWN0aW9uKCksZT17YW5jaG9yT2Zmc2V0OnQuYW5jaG9yT2Zmc2V0LGFuY2hvck5vZGU6dC5hbmNob3JOb2RlLHJhbmdlOnQuZ2V0UmFuZ2VBdCYmdC5yYW5nZUNvdW50JiZ0LmdldFJhbmdlQXQoMCl9O3JldHVybiB0aGlzLnN0YXRlLnNlbGVjdGlvbj1lLGV9LGdldENhcmV0R2xvYmFsUG9zaXRpb24oKXtjb25zdCB0PWRvY3VtZW50LmdldFNlbGVjdGlvbigpO2lmKHQucmFuZ2VDb3VudCl7Y29uc3QgZT10LmdldFJhbmdlQXQoMCksaT1lLnN0YXJ0Q29udGFpbmVyLHM9ZS5zdGFydE9mZnNldDtsZXQgYSxuO2lmKHM+MClyZXR1cm4gbj1kb2N1bWVudC5jcmVhdGVSYW5nZSgpLG4uc2V0U3RhcnQoaSxzLTEpLG4uc2V0RW5kKGkscyksYT1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHtsZWZ0OmEucmlnaHQsdG9wOmEudG9wLGJvdHRvbTphLmJvdHRvbX07aWYoaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpcmV0dXJuIGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9cmV0dXJue2xlZnQ6LTk5OTksdG9wOi05OTk5fX0sZ2V0Q1NTVmFycygpe3ZhciB0PWdldENvbXB1dGVkU3R5bGUodGhpcy5ET00uc2NvcGUsbnVsbCk7dmFyIGU7dGhpcy5DU1NWYXJzPXt0YWdIaWRlVHJhbnNpdGlvbjoodD0+e2xldCBlPXQudmFsdWU7cmV0dXJuXCJzXCI9PXQudW5pdD8xZTMqZTplfSkoZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJue307dmFyIGU9KHQ9dC50cmltKCkuc3BsaXQoXCIgXCIpWzBdKS5zcGxpdCgvXFxkKy9nKS5maWx0ZXIoKHQ9PnQpKS5wb3AoKS50cmltKCk7cmV0dXJue3ZhbHVlOit0LnNwbGl0KGUpLmZpbHRlcigodD0+dCkpWzBdLnRyaW0oKSx1bml0OmV9fSgoZT1cInRhZy1oaWRlLXRyYW5zaXRpb25cIix0LmdldFByb3BlcnR5VmFsdWUoXCItLVwiK2UpKSkpfX0sYnVpbGQodCl7dmFyIGU9dGhpcy5ET007dGhpcy5zZXR0aW5ncy5taXhNb2RlLmludGVncmF0ZWQ/KGUub3JpZ2luYWxJbnB1dD1udWxsLGUuc2NvcGU9dCxlLmlucHV0PXQpOihlLm9yaWdpbmFsSW5wdXQ9dCxlLm9yaWdpbmFsSW5wdXRfdGFiSW5kZXg9dC50YWJJbmRleCxlLnNjb3BlPXRoaXMucGFyc2VUZW1wbGF0ZShcIndyYXBwZXJcIixbdCx0aGlzLnNldHRpbmdzXSksZS5pbnB1dD1lLnNjb3BlLnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmlucHV0U2VsZWN0b3IpLHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZS5zY29wZSx0KSx0LnRhYkluZGV4PS0xKX0sZGVzdHJveSgpe3RoaXMuZXZlbnRzLnVuYmluZEdsb2JhbC5jYWxsKHRoaXMpLHRoaXMuRE9NLnNjb3BlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ET00uc2NvcGUpLHRoaXMuRE9NLm9yaWdpbmFsSW5wdXQudGFiSW5kZXg9dGhpcy5ET00ub3JpZ2luYWxJbnB1dF90YWJJbmRleCxkZWxldGUgdGhpcy5ET00ub3JpZ2luYWxJbnB1dC5fX3RhZ2lmeSx0aGlzLmRyb3Bkb3duLmhpZGUoITApLGNsZWFyVGltZW91dCh0aGlzLmRyb3Bkb3duSGlkZV9fYmluZEV2ZW50c1RpbWVvdXQpLGNsZWFySW50ZXJ2YWwodGhpcy5saXN0ZW5lcnMubWFpbi5vcmlnaW5hbElucHV0VmFsdWVPYnNlcnZlckludGVydmFsKX0sbG9hZE9yaWdpbmFsVmFsdWVzKHQpe3ZhciBlLGk9dGhpcy5zZXR0aW5ncztpZih0aGlzLnN0YXRlLmJsb2NrQ2hhbmdlRXZlbnQ9ITAsdm9pZCAwPT09dCl7Y29uc3QgZT10aGlzLmdldFBlcnNpc3RlZERhdGEoXCJ2YWx1ZVwiKTt0PWUmJiF0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlP2U6aS5taXhNb2RlLmludGVncmF0ZWQ/dGhpcy5ET00uaW5wdXQudGV4dENvbnRlbnQ6dGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZX1pZih0aGlzLnJlbW92ZUFsbFRhZ3MoKSx0KWlmKFwibWl4XCI9PWkubW9kZSl0aGlzLnBhcnNlTWl4VGFncyh0aGlzLnRyaW0odCkpLChlPXRoaXMuRE9NLmlucHV0Lmxhc3RDaGlsZCkmJlwiQlJcIj09ZS50YWdOYW1lfHx0aGlzLkRPTS5pbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixcIjxicj5cIik7ZWxzZXt0cnl7SlNPTi5wYXJzZSh0KWluc3RhbmNlb2YgQXJyYXkmJih0PUpTT04ucGFyc2UodCkpfWNhdGNoKHQpe310aGlzLmFkZFRhZ3ModCwhMCkuZm9yRWFjaCgodD0+dCYmdC5jbGFzc0xpc3QuYWRkKGkuY2xhc3NOYW1lcy50YWdOb0FuaW1hdGlvbikpKX1lbHNlIHRoaXMucG9zdFVwZGF0ZSgpO3RoaXMuc3RhdGUubGFzdE9yaWdpbmFsVmFsdWVSZXBvcnRlZD1pLm1peE1vZGUuaW50ZWdyYXRlZD9cIlwiOnRoaXMuRE9NLm9yaWdpbmFsSW5wdXQudmFsdWUsdGhpcy5zdGF0ZS5ibG9ja0NoYW5nZUV2ZW50PSExfSxjbG9uZUV2ZW50KHQpe3ZhciBlPXt9O2Zvcih2YXIgaSBpbiB0KWVbaV09dFtpXTtyZXR1cm4gZX0sbG9hZGluZyh0KXtyZXR1cm4gdGhpcy5zdGF0ZS5pc0xvYWRpbmc9dCx0aGlzLkRPTS5zY29wZS5jbGFzc0xpc3RbdD9cImFkZFwiOlwicmVtb3ZlXCJdKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5zY29wZUxvYWRpbmcpLHRoaXN9LHRhZ0xvYWRpbmcodCxlKXtyZXR1cm4gdCYmdC5jbGFzc0xpc3RbZT9cImFkZFwiOlwicmVtb3ZlXCJdKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdMb2FkaW5nKSx0aGlzfSx0b2dnbGVDbGFzcyh0LGUpe1wic3RyaW5nXCI9PXR5cGVvZiB0JiZ0aGlzLkRPTS5zY29wZS5jbGFzc0xpc3QudG9nZ2xlKHQsZSl9LHRvZ2dsZVNjb3BlVmFsaWRhdGlvbih0KXt2YXIgZT0hMD09PXR8fHZvaWQgMD09PXQ7IXRoaXMuc2V0dGluZ3MucmVxdWlyZWQmJnQmJnQ9PT10aGlzLlRFWFRTLmVtcHR5JiYoZT0hMCksdGhpcy50b2dnbGVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnSW52YWxpZCwhZSksdGhpcy5ET00uc2NvcGUudGl0bGU9ZT9cIlwiOnR9LHRvZ2dsZUZvY3VzQ2xhc3ModCl7dGhpcy50b2dnbGVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZm9jdXMsISF0KX0sdHJpZ2dlckNoYW5nZUV2ZW50OmZ1bmN0aW9uKCl7aWYoIXRoaXMuc2V0dGluZ3MubWl4TW9kZS5pbnRlZ3JhdGVkKXt2YXIgdD10aGlzLkRPTS5vcmlnaW5hbElucHV0LGU9dGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkIT09dC52YWx1ZSxpPW5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSk7ZSYmKHRoaXMuc3RhdGUubGFzdE9yaWdpbmFsVmFsdWVSZXBvcnRlZD10LnZhbHVlLGkuc2ltdWxhdGVkPSEwLHQuX3ZhbHVlVHJhY2tlciYmdC5fdmFsdWVUcmFja2VyLnNldFZhbHVlKE1hdGgucmFuZG9tKCkpLHQuZGlzcGF0Y2hFdmVudChpKSx0aGlzLnRyaWdnZXIoXCJjaGFuZ2VcIix0aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQpLHQudmFsdWU9dGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkKX19LGV2ZW50czpNLGZpeEZpcmVmb3hMYXN0VGFnTm9DYXJldCgpe30scGxhY2VDYXJldEFmdGVyTm9kZSh0KXtpZih0JiZ0LnBhcmVudE5vZGUpe3ZhciBlPXQsaT13aW5kb3cuZ2V0U2VsZWN0aW9uKCkscz1pLmdldFJhbmdlQXQoMCk7aS5yYW5nZUNvdW50JiYocy5zZXRTdGFydEFmdGVyKGV8fHQpLHMuY29sbGFwc2UoITApLGkucmVtb3ZlQWxsUmFuZ2VzKCksaS5hZGRSYW5nZShzKSl9fSxpbnNlcnRBZnRlclRhZyh0LGUpe2lmKGU9ZXx8dGhpcy5zZXR0aW5ncy5taXhNb2RlLmluc2VydEFmdGVyVGFnLHQmJnQucGFyZW50Tm9kZSYmZSlyZXR1cm4gZT1cInN0cmluZ1wiPT10eXBlb2YgZT9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKTplLHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0Lm5leHRTaWJsaW5nKSxlfSxlZGl0VGFnQ2hhbmdlRGV0ZWN0ZWQodCl7dmFyIGU9dC5fX29yaWdpbmFsRGF0YTtmb3IodmFyIGkgaW4gZSlpZighdGhpcy5kYXRhUHJvcHMuaW5jbHVkZXMoaSkmJnRbaV0hPWVbaV0pcmV0dXJuITA7cmV0dXJuITF9LGdldFRhZ1RleHROb2RlKHQpe3JldHVybiB0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ1RleHRTZWxlY3Rvcil9LHNldFRhZ1RleHROb2RlKHQsZSl7dGhpcy5nZXRUYWdUZXh0Tm9kZSh0KS5pbm5lckhUTUw9ZChlKX0sZWRpdFRhZyh0LGUpe3Q9dHx8dGhpcy5nZXRMYXN0VGFnKCksZT1lfHx7fSx0aGlzLmRyb3Bkb3duLmhpZGUoKTt2YXIgaT10aGlzLnNldHRpbmdzLHM9dGhpcy5nZXRUYWdUZXh0Tm9kZSh0KSxhPXRoaXMuZ2V0Tm9kZUluZGV4KHQpLG49dGhpcy50YWdEYXRhKHQpLG89dGhpcy5ldmVudHMuY2FsbGJhY2tzLHI9dGhpcyxsPSEwO2lmKHMpe2lmKCEobiBpbnN0YW5jZW9mIE9iamVjdCYmXCJlZGl0YWJsZVwiaW4gbil8fG4uZWRpdGFibGUpcmV0dXJuIG49dGhpcy50YWdEYXRhKHQse19fb3JpZ2luYWxEYXRhOmcoe30sbiksX19vcmlnaW5hbEhUTUw6dC5jbG9uZU5vZGUoITApfSksdGhpcy50YWdEYXRhKG4uX19vcmlnaW5hbEhUTUwsbi5fX29yaWdpbmFsRGF0YSkscy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwhMCksdC5jbGFzc0xpc3QuYWRkKGkuY2xhc3NOYW1lcy50YWdFZGl0aW5nKSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLG8ub25FZGl0VGFnRm9jdXMuYmluZCh0aGlzLHQpKSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKGZ1bmN0aW9uKCl7c2V0VGltZW91dCgoKCk9Pm8ub25FZGl0VGFnQmx1ci5jYWxsKHIsci5nZXRUYWdUZXh0Tm9kZSh0KSkpKX0pKSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLG8ub25FZGl0VGFnSW5wdXQuYmluZCh0aGlzLHMpKSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKGU9Pm8ub25FZGl0VGFna2V5ZG93bi5jYWxsKHRoaXMsZSx0KSkpLGUuc2tpcFZhbGlkYXRpb258fChsPXRoaXMuZWRpdFRhZ1RvZ2dsZVZhbGlkaXR5KHQpKSxzLm9yaWdpbmFsSXNWYWxpZD1sLHRoaXMudHJpZ2dlcihcImVkaXQ6c3RhcnRcIix7dGFnOnQsaW5kZXg6YSxkYXRhOm4saXNWYWxpZDpsfSkscy5mb2N1cygpLHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kKCExLHMpLHRoaXN9ZWxzZSBjb25zb2xlLndhcm4oXCJDYW5ub3QgZmluZCBlbGVtZW50IGluIFRhZyB0ZW1wbGF0ZTogLlwiLGkuY2xhc3NOYW1lcy50YWdUZXh0U2VsZWN0b3IpfSxlZGl0VGFnVG9nZ2xlVmFsaWRpdHkodCxlKXt2YXIgaTtpZihlPWV8fHRoaXMudGFnRGF0YSh0KSlyZXR1cm4oaT0hKFwiX19pc1ZhbGlkXCJpbiBlKXx8ITA9PT1lLl9faXNWYWxpZCl8fHRoaXMucmVtb3ZlVGFnc0Zyb21WYWx1ZSh0KSx0aGlzLnVwZGF0ZSgpLHQuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZCwhaSksZS5fX2lzVmFsaWQ7Y29uc29sZS53YXJuKFwidGFnIGhhcyBubyBkYXRhOiBcIix0LGUpfSxvbkVkaXRUYWdEb25lKHQsZSl7ZT1lfHx7fTt2YXIgaT17dGFnOnQ9dHx8dGhpcy5zdGF0ZS5lZGl0aW5nLnNjb3BlLGluZGV4OnRoaXMuZ2V0Tm9kZUluZGV4KHQpLHByZXZpb3VzRGF0YTp0aGlzLnRhZ0RhdGEodCksZGF0YTplfTt0aGlzLnRyaWdnZXIoXCJlZGl0OmJlZm9yZVVwZGF0ZVwiLGkse2Nsb25lRGF0YTohMX0pLHRoaXMuc3RhdGUuZWRpdGluZz0hMSxkZWxldGUgZS5fX29yaWdpbmFsRGF0YSxkZWxldGUgZS5fX29yaWdpbmFsSFRNTCx0JiZlW3RoaXMuc2V0dGluZ3MudGFnVGV4dFByb3BdPyh0PXRoaXMucmVwbGFjZVRhZyh0LGUpLHRoaXMuZWRpdFRhZ1RvZ2dsZVZhbGlkaXR5KHQsZSksdGhpcy5zZXR0aW5ncy5hMTF5LmZvY3VzYWJsZVRhZ3M/dC5mb2N1cygpOnRoaXMucGxhY2VDYXJldEFmdGVyTm9kZSh0KSk6dCYmdGhpcy5yZW1vdmVUYWdzKHQpLHRoaXMudHJpZ2dlcihcImVkaXQ6dXBkYXRlZFwiLGkpLHRoaXMuZHJvcGRvd24uaGlkZSgpLHRoaXMuc2V0dGluZ3Mua2VlcEludmFsaWRUYWdzJiZ0aGlzLnJlQ2hlY2tJbnZhbGlkVGFncygpfSxyZXBsYWNlVGFnKHQsZSl7ZSYmZS52YWx1ZXx8KGU9dC5fX3RhZ2lmeVRhZ0RhdGEpLGUuX19pc1ZhbGlkJiYxIT1lLl9faXNWYWxpZCYmZyhlLHRoaXMuZ2V0SW52YWxpZFRhZ0F0dHJzKGUsZS5fX2lzVmFsaWQpKTt2YXIgaT10aGlzLmNyZWF0ZVRhZ0VsZW0oZSk7cmV0dXJuIHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaSx0KSx0aGlzLnVwZGF0ZVZhbHVlQnlET01UYWdzKCksaX0sdXBkYXRlVmFsdWVCeURPTVRhZ3MoKXt0aGlzLnZhbHVlLmxlbmd0aD0wLFtdLmZvckVhY2guY2FsbCh0aGlzLmdldFRhZ0VsbXMoKSwodD0+e3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb3RBbGxvd2VkLnNwbGl0KFwiIFwiKVswXSl8fHRoaXMudmFsdWUucHVzaCh0aGlzLnRhZ0RhdGEodCkpfSkpLHRoaXMudXBkYXRlKCl9LHNldFJhbmdlQXRTdGFydEVuZCh0LGUpe3Q9XCJudW1iZXJcIj09dHlwZW9mIHQ/dDohIXQsZT0oZT1lfHx0aGlzLkRPTS5pbnB1dCkubGFzdENoaWxkfHxlO3ZhciBpPWRvY3VtZW50LmdldFNlbGVjdGlvbigpO3RyeXtpLnJhbmdlQ291bnQ+PTEmJltcIlN0YXJ0XCIsXCJFbmRcIl0uZm9yRWFjaCgocz0+aS5nZXRSYW5nZUF0KDApW1wic2V0XCIrc10oZSx0fHxlLmxlbmd0aCkpKX1jYXRjaCh0KXt9fSxpbmplY3RBdENhcmV0KHQsZSl7cmV0dXJuIShlPWV8fHRoaXMuc3RhdGUuc2VsZWN0aW9uPy5yYW5nZSkmJnQ/KHRoaXMuYXBwZW5kTWl4VGFncyh0KSx0aGlzKTooXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKSxlLmRlbGV0ZUNvbnRlbnRzKCksZS5pbnNlcnROb2RlKHQpLHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kKCExLHQpLHRoaXMudXBkYXRlVmFsdWVCeURPTVRhZ3MoKSx0aGlzLnVwZGF0ZSgpLHRoaXMpfSxpbnB1dDp7c2V0KCl7bGV0IHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiXCIsZT0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdO3ZhciBpPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24uY2xvc2VPblNlbGVjdDt0aGlzLnN0YXRlLmlucHV0VGV4dD10LGUmJih0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUw9ZChcIlwiK3QpKSwhdCYmaSYmdGhpcy5kcm9wZG93bi5oaWRlLmJpbmQodGhpcyksdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMpLHRoaXMuaW5wdXQudmFsaWRhdGUuY2FsbCh0aGlzKX0scmF3KCl7cmV0dXJuIHRoaXMuRE9NLmlucHV0LnRleHRDb250ZW50fSx2YWxpZGF0ZSgpe3ZhciB0PSF0aGlzLnN0YXRlLmlucHV0VGV4dHx8ITA9PT10aGlzLnZhbGlkYXRlVGFnKHt2YWx1ZTp0aGlzLnN0YXRlLmlucHV0VGV4dH0pO3JldHVybiB0aGlzLkRPTS5pbnB1dC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5pbnB1dEludmFsaWQsIXQpLHR9LG5vcm1hbGl6ZSh0KXt2YXIgZT10fHx0aGlzLkRPTS5pbnB1dCxpPVtdO2UuY2hpbGROb2Rlcy5mb3JFYWNoKCh0PT4zPT10Lm5vZGVUeXBlJiZpLnB1c2godC5ub2RlVmFsdWUpKSksaT1pLmpvaW4oXCJcXG5cIik7dHJ5e2k9aS5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZyx0aGlzLnNldHRpbmdzLmRlbGltaXRlcnMuc291cmNlLmNoYXJBdCgwKSl9Y2F0Y2godCl7fXJldHVybiBpPWkucmVwbGFjZSgvXFxzL2csXCIgXCIpLHRoaXMudHJpbShpKX0sYXV0b2NvbXBsZXRlOntzdWdnZXN0KHQpe2lmKHRoaXMuc2V0dGluZ3MuYXV0b0NvbXBsZXRlLmVuYWJsZWQpe1wic3RyaW5nXCI9PXR5cGVvZih0PXR8fHt9KSYmKHQ9e3ZhbHVlOnR9KTt2YXIgZT10LnZhbHVlP1wiXCIrdC52YWx1ZTpcIlwiLGk9ZS5zdWJzdHIoMCx0aGlzLnN0YXRlLmlucHV0VGV4dC5sZW5ndGgpLnRvTG93ZXJDYXNlKCkscz1lLnN1YnN0cmluZyh0aGlzLnN0YXRlLmlucHV0VGV4dC5sZW5ndGgpO2UmJnRoaXMuc3RhdGUuaW5wdXRUZXh0JiZpPT10aGlzLnN0YXRlLmlucHV0VGV4dC50b0xvd2VyQ2FzZSgpPyh0aGlzLkRPTS5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN1Z2dlc3RcIixzKSx0aGlzLnN0YXRlLmlucHV0U3VnZ2VzdGlvbj10KToodGhpcy5ET00uaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zdWdnZXN0XCIpLGRlbGV0ZSB0aGlzLnN0YXRlLmlucHV0U3VnZ2VzdGlvbil9fSxzZXQodCl7dmFyIGU9dGhpcy5ET00uaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdWdnZXN0XCIpLGk9dHx8KGU/dGhpcy5zdGF0ZS5pbnB1dFRleHQrZTpudWxsKTtyZXR1cm4hIWkmJihcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5yZXBsYWNlVGV4dFdpdGhOb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuc3RhdGUudGFnLnByZWZpeCtpKSk6KHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyxpKSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCgpKSx0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyksdGhpcy5kcm9wZG93bi5oaWRlKCksITApfX19LGdldFRhZ0lkeCh0KXtyZXR1cm4gdGhpcy52YWx1ZS5maW5kSW5kZXgoKGU9PmUuX190YWdJZD09KHR8fHt9KS5fX3RhZ0lkKSl9LGdldE5vZGVJbmRleCh0KXt2YXIgZT0wO2lmKHQpZm9yKDt0PXQucHJldmlvdXNFbGVtZW50U2libGluZzspZSsrO3JldHVybiBlfSxnZXRUYWdFbG1zKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksaT0wO2k8dDtpKyspZVtpXT1hcmd1bWVudHNbaV07dmFyIHM9XCIuXCIrWy4uLnRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWcuc3BsaXQoXCIgXCIpLC4uLmVdLmpvaW4oXCIuXCIpO3JldHVybltdLnNsaWNlLmNhbGwodGhpcy5ET00uc2NvcGUucXVlcnlTZWxlY3RvckFsbChzKSl9LGdldExhc3RUYWcoKXt2YXIgdD10aGlzLkRPTS5zY29wZS5xdWVyeVNlbGVjdG9yQWxsKGAke3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdTZWxlY3Rvcn06bm90KC4ke3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdIaWRlfSk6bm90KFtyZWFkb25seV0pYCk7cmV0dXJuIHRbdC5sZW5ndGgtMV19LHRhZ0RhdGE6KHQsZSxpKT0+dD8oZSYmKHQuX190YWdpZnlUYWdEYXRhPWk/ZTpnKHt9LHQuX190YWdpZnlUYWdEYXRhfHx7fSxlKSksdC5fX3RhZ2lmeVRhZ0RhdGEpOihjb25zb2xlLndhcm4oXCJ0YWcgZWxlbWVudCBkb2Vzbid0IGV4aXN0XCIsdCxlKSxlKSxpc1RhZ0R1cGxpY2F0ZSh0LGUsaSl7dmFyIGE9MDtpZihcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUpcmV0dXJuITE7Zm9yKGxldCBuIG9mIHRoaXMudmFsdWUpe3ModGhpcy50cmltKFwiXCIrdCksbi52YWx1ZSxlKSYmaSE9bi5fX3RhZ0lkJiZhKyt9cmV0dXJuIGF9LGdldFRhZ0luZGV4QnlWYWx1ZSh0KXt2YXIgZT1bXTtyZXR1cm4gdGhpcy5nZXRUYWdFbG1zKCkuZm9yRWFjaCgoKGksYSk9PntzKHRoaXMudHJpbShpLnRleHRDb250ZW50KSx0LHRoaXMuc2V0dGluZ3MuZHJvcGRvd24uY2FzZVNlbnNpdGl2ZSkmJmUucHVzaChhKX0pKSxlfSxnZXRUYWdFbG1CeVZhbHVlKHQpe3ZhciBlPXRoaXMuZ2V0VGFnSW5kZXhCeVZhbHVlKHQpWzBdO3JldHVybiB0aGlzLmdldFRhZ0VsbXMoKVtlXX0sZmxhc2hUYWcodCl7dCYmKHQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnRmxhc2gpLHNldFRpbWVvdXQoKCgpPT57dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdGbGFzaCl9KSwxMDApKX0saXNUYWdCbGFja2xpc3RlZCh0KXtyZXR1cm4gdD10aGlzLnRyaW0odC50b0xvd2VyQ2FzZSgpKSx0aGlzLnNldHRpbmdzLmJsYWNrbGlzdC5maWx0ZXIoKGU9PihcIlwiK2UpLnRvTG93ZXJDYXNlKCk9PXQpKS5sZW5ndGh9LGlzVGFnV2hpdGVsaXN0ZWQodCl7cmV0dXJuISF0aGlzLmdldFdoaXRlbGlzdEl0ZW0odCl9LGdldFdoaXRlbGlzdEl0ZW0odCxlLGkpe2U9ZXx8XCJ2YWx1ZVwiO3ZhciBhLG49dGhpcy5zZXR0aW5ncztyZXR1cm4oaT1pfHxuLndoaXRlbGlzdCkuc29tZSgoaT0+e3ZhciBvPVwic3RyaW5nXCI9PXR5cGVvZiBpP2k6aVtlXXx8aS52YWx1ZTtpZihzKG8sdCxuLmRyb3Bkb3duLmNhc2VTZW5zaXRpdmUsbi50cmltKSlyZXR1cm4gYT1cInN0cmluZ1wiPT10eXBlb2YgaT97dmFsdWU6aX06aSwhMH0pKSxhfHxcInZhbHVlXCIhPWV8fFwidmFsdWVcIj09bi50YWdUZXh0UHJvcHx8KGE9dGhpcy5nZXRXaGl0ZWxpc3RJdGVtKHQsbi50YWdUZXh0UHJvcCxpKSksYX0sdmFsaWRhdGVUYWcodCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPVwidmFsdWVcImluIHQ/XCJ2YWx1ZVwiOmUudGFnVGV4dFByb3Ascz10aGlzLnRyaW0odFtpXStcIlwiKTtyZXR1cm4odFtpXStcIlwiKS50cmltKCk/ZS5wYXR0ZXJuJiZlLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHAmJiFlLnBhdHRlcm4udGVzdChzKT90aGlzLlRFWFRTLnBhdHRlcm46IWUuZHVwbGljYXRlcyYmdGhpcy5pc1RhZ0R1cGxpY2F0ZShzLGUuZHJvcGRvd24uY2FzZVNlbnNpdGl2ZSx0Ll9fdGFnSWQpP3RoaXMuVEVYVFMuZHVwbGljYXRlOnRoaXMuaXNUYWdCbGFja2xpc3RlZChzKXx8ZS5lbmZvcmNlV2hpdGVsaXN0JiYhdGhpcy5pc1RhZ1doaXRlbGlzdGVkKHMpP3RoaXMuVEVYVFMubm90QWxsb3dlZDohZS52YWxpZGF0ZXx8ZS52YWxpZGF0ZSh0KTp0aGlzLlRFWFRTLmVtcHR5fSxnZXRJbnZhbGlkVGFnQXR0cnModCxlKXtyZXR1cm57XCJhcmlhLWludmFsaWRcIjohMCxjbGFzczpgJHt0LmNsYXNzfHxcIlwifSAke3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb3RBbGxvd2VkfWAudHJpbSgpLHRpdGxlOmV9fSxoYXNNYXhUYWdzKCl7cmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoPj10aGlzLnNldHRpbmdzLm1heFRhZ3MmJnRoaXMuVEVYVFMuZXhjZWVkfSxzZXRSZWFkb25seSh0LGUpe3ZhciBpPXRoaXMuc2V0dGluZ3M7ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCksaVtlfHxcInJlYWRvbmx5XCJdPXQsdGhpcy5ET00uc2NvcGVbKHQ/XCJzZXRcIjpcInJlbW92ZVwiKStcIkF0dHJpYnV0ZVwiXShlfHxcInJlYWRvbmx5XCIsITApLHRoaXMuc2V0Q29udGVudEVkaXRhYmxlKCF0KX0sc2V0Q29udGVudEVkaXRhYmxlKHQpe3RoaXMuRE9NLmlucHV0LmNvbnRlbnRFZGl0YWJsZT10LHRoaXMuRE9NLmlucHV0LnRhYkluZGV4PXQ/MDotMX0sc2V0RGlzYWJsZWQodCl7dGhpcy5zZXRSZWFkb25seSh0LFwiZGlzYWJsZWRcIil9LG5vcm1hbGl6ZVRhZ3ModCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPWUud2hpdGVsaXN0LHM9ZS5kZWxpbWl0ZXJzLGE9ZS5tb2RlLG49ZS50YWdUZXh0UHJvcDtlLmVuZm9yY2VXaGl0ZWxpc3Q7dmFyIG89W10scj0hIWkmJmlbMF1pbnN0YW5jZW9mIE9iamVjdCxsPUFycmF5LmlzQXJyYXkodCksZD1sJiZ0WzBdLnZhbHVlLGg9dD0+KHQrXCJcIikuc3BsaXQocykuZmlsdGVyKCh0PT50KSkubWFwKCh0PT4oe1tuXTp0aGlzLnRyaW0odCksdmFsdWU6dGhpcy50cmltKHQpfSkpKTtpZihcIm51bWJlclwiPT10eXBlb2YgdCYmKHQ9dC50b1N0cmluZygpKSxcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYoIXQudHJpbSgpKXJldHVybltdO3Q9aCh0KX1lbHNlIGwmJih0PVtdLmNvbmNhdCguLi50Lm1hcCgodD0+dC52YWx1ZT90OmgodCkpKSkpO3JldHVybiByJiYhZCYmKHQuZm9yRWFjaCgodD0+e3ZhciBlPW8ubWFwKCh0PT50LnZhbHVlKSksaT10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcy5jYWxsKHRoaXMsdFtuXSx7ZXhhY3Q6ITB9KTt0aGlzLnNldHRpbmdzLmR1cGxpY2F0ZXN8fChpPWkuZmlsdGVyKCh0PT4hZS5pbmNsdWRlcyh0LnZhbHVlKSkpKTt2YXIgcz1pLmxlbmd0aD4xP3RoaXMuZ2V0V2hpdGVsaXN0SXRlbSh0W25dLG4saSk6aVswXTtzJiZzIGluc3RhbmNlb2YgT2JqZWN0P28ucHVzaChzKTpcIm1peFwiIT1hJiYobnVsbD09dC52YWx1ZSYmKHQudmFsdWU9dFtuXSksby5wdXNoKHQpKX0pKSxvLmxlbmd0aCYmKHQ9bykpLHR9LHBhcnNlTWl4VGFncyh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9ZS5taXhUYWdzSW50ZXJwb2xhdG9yLHM9ZS5kdXBsaWNhdGVzLGE9ZS50cmFuc2Zvcm1UYWcsbj1lLmVuZm9yY2VXaGl0ZWxpc3Qsbz1lLm1heFRhZ3Mscj1lLnRhZ1RleHRQcm9wLGw9W107cmV0dXJuIHQ9dC5zcGxpdChpWzBdKS5tYXAoKCh0LGUpPT57dmFyIGQsaCxnLHA9dC5zcGxpdChpWzFdKSxjPXBbMF0sdT1sLmxlbmd0aD09bzt0cnl7aWYoYz09K2MpdGhyb3cgRXJyb3I7aD1KU09OLnBhcnNlKGMpfWNhdGNoKHQpe2g9dGhpcy5ub3JtYWxpemVUYWdzKGMpWzBdfHx7dmFsdWU6Y319aWYoYS5jYWxsKHRoaXMsaCksdXx8IShwLmxlbmd0aD4xKXx8biYmIXRoaXMuaXNUYWdXaGl0ZWxpc3RlZChoLnZhbHVlKXx8IXMmJnRoaXMuaXNUYWdEdXBsaWNhdGUoaC52YWx1ZSkpe2lmKHQpcmV0dXJuIGU/aVswXSt0OnR9ZWxzZSBoW2Q9aFtyXT9yOlwidmFsdWVcIl09dGhpcy50cmltKGhbZF0pLGc9dGhpcy5jcmVhdGVUYWdFbGVtKGgpLGwucHVzaChoKSxnLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vQW5pbWF0aW9uKSxwWzBdPWcub3V0ZXJIVE1MLHRoaXMudmFsdWUucHVzaChoKTtyZXR1cm4gcC5qb2luKFwiXCIpfSkpLmpvaW4oXCJcIiksdGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MPXQsdGhpcy5ET00uaW5wdXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpLHRoaXMuRE9NLmlucHV0Lm5vcm1hbGl6ZSgpLHRoaXMuZ2V0VGFnRWxtcygpLmZvckVhY2goKCh0LGUpPT50aGlzLnRhZ0RhdGEodCxsW2VdKSkpLHRoaXMudXBkYXRlKHt3aXRob3V0Q2hhbmdlRXZlbnQ6ITB9KSx0fSxyZXBsYWNlVGV4dFdpdGhOb2RlKHQsZSl7aWYodGhpcy5zdGF0ZS50YWd8fGUpe2U9ZXx8dGhpcy5zdGF0ZS50YWcucHJlZml4K3RoaXMuc3RhdGUudGFnLnZhbHVlO3ZhciBpLHMsYT10aGlzLnN0YXRlLnNlbGVjdGlvbnx8d2luZG93LmdldFNlbGVjdGlvbigpLG49YS5hbmNob3JOb2RlLG89dGhpcy5zdGF0ZS50YWcuZGVsaW1pdGVycz90aGlzLnN0YXRlLnRhZy5kZWxpbWl0ZXJzLmxlbmd0aDowO3JldHVybiBuLnNwbGl0VGV4dChhLmFuY2hvck9mZnNldC1vKSwtMT09KGk9bi5ub2RlVmFsdWUubGFzdEluZGV4T2YoZSkpPyEwOihzPW4uc3BsaXRUZXh0KGkpLHQmJm4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodCxzKSwhMCl9fSxzZWxlY3RUYWcodCxlKXt2YXIgaT10aGlzLnNldHRpbmdzO2lmKCFpLmVuZm9yY2VXaGl0ZWxpc3R8fHRoaXMuaXNUYWdXaGl0ZWxpc3RlZChlLnZhbHVlKSl7dGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzLGVbaS50YWdUZXh0UHJvcF18fGUudmFsdWUsITApLHRoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb24mJnNldFRpbWVvdXQodGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQuYmluZCh0aGlzKSk7dmFyIHM9dGhpcy5nZXRMYXN0VGFnKCk7cmV0dXJuIHM/dGhpcy5yZXBsYWNlVGFnKHMsZSk6dGhpcy5hcHBlbmRUYWcodCksdGhpcy52YWx1ZVswXT1lLHRoaXMudXBkYXRlKCksdGhpcy50cmlnZ2VyKFwiYWRkXCIse3RhZzp0LGRhdGE6ZX0pLFt0XX19LGFkZEVtcHR5VGFnKHQpe3ZhciBlPWcoe3ZhbHVlOlwiXCJ9LHR8fHt9KSxpPXRoaXMuY3JlYXRlVGFnRWxlbShlKTt0aGlzLnRhZ0RhdGEoaSxlKSx0aGlzLmFwcGVuZFRhZyhpKSx0aGlzLmVkaXRUYWcoaSx7c2tpcFZhbGlkYXRpb246ITB9KX0sYWRkVGFncyh0LGUsaSl7dmFyIHM9W10sYT10aGlzLnNldHRpbmdzLG49W10sbz1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYoaT1pfHxhLnNraXBJbnZhbGlkLCF0fHwwPT10Lmxlbmd0aClyZXR1cm4gcztzd2l0Y2godD10aGlzLm5vcm1hbGl6ZVRhZ3ModCksYS5tb2RlKXtjYXNlXCJtaXhcIjpyZXR1cm4gdGhpcy5hZGRNaXhUYWdzKHQpO2Nhc2VcInNlbGVjdFwiOmU9ITEsdGhpcy5yZW1vdmVBbGxUYWdzKCl9cmV0dXJuIHRoaXMuRE9NLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLHQuZm9yRWFjaCgodD0+e3ZhciBlLHI9e30sbD1PYmplY3QuYXNzaWduKHt9LHQse3ZhbHVlOnQudmFsdWUrXCJcIn0pO2lmKHQ9T2JqZWN0LmFzc2lnbih7fSxsKSxhLnRyYW5zZm9ybVRhZy5jYWxsKHRoaXMsdCksdC5fX2lzVmFsaWQ9dGhpcy5oYXNNYXhUYWdzKCl8fHRoaXMudmFsaWRhdGVUYWcodCksITAhPT10Ll9faXNWYWxpZCl7aWYoaSlyZXR1cm47aWYoZyhyLHRoaXMuZ2V0SW52YWxpZFRhZ0F0dHJzKHQsdC5fX2lzVmFsaWQpLHtfX3ByZUludmFsaWREYXRhOmx9KSx0Ll9faXNWYWxpZD09dGhpcy5URVhUUy5kdXBsaWNhdGUmJnRoaXMuZmxhc2hUYWcodGhpcy5nZXRUYWdFbG1CeVZhbHVlKHQudmFsdWUpKSwhYS5jcmVhdGVJbnZhbGlkVGFncylyZXR1cm4gdm9pZCBuLnB1c2godC52YWx1ZSl9aWYoXCJyZWFkb25seVwiaW4gdCYmKHQucmVhZG9ubHk/cltcImFyaWEtcmVhZG9ubHlcIl09ITA6ZGVsZXRlIHQucmVhZG9ubHkpLGU9dGhpcy5jcmVhdGVUYWdFbGVtKHQscikscy5wdXNoKGUpLFwic2VsZWN0XCI9PWEubW9kZSlyZXR1cm4gdGhpcy5zZWxlY3RUYWcoZSx0KTtvLmFwcGVuZENoaWxkKGUpLHQuX19pc1ZhbGlkJiYhMD09PXQuX19pc1ZhbGlkPyh0aGlzLnZhbHVlLnB1c2godCksdGhpcy50cmlnZ2VyKFwiYWRkXCIse3RhZzplLGluZGV4OnRoaXMudmFsdWUubGVuZ3RoLTEsZGF0YTp0fSkpOih0aGlzLnRyaWdnZXIoXCJpbnZhbGlkXCIse2RhdGE6dCxpbmRleDp0aGlzLnZhbHVlLmxlbmd0aCx0YWc6ZSxtZXNzYWdlOnQuX19pc1ZhbGlkfSksYS5rZWVwSW52YWxpZFRhZ3N8fHNldFRpbWVvdXQoKCgpPT50aGlzLnJlbW92ZVRhZ3MoZSwhMCkpLDFlMykpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24oKX0pKSx0aGlzLmFwcGVuZFRhZyhvKSx0aGlzLnVwZGF0ZSgpLHQubGVuZ3RoJiZlJiYodGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzLGEuY3JlYXRlSW52YWxpZFRhZ3M/XCJcIjpuLmpvaW4oYS5fZGVsaW1pdGVycykpLHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kKCkpLGEuZHJvcGRvd24uZW5hYmxlZCYmdGhpcy5kcm9wZG93bi5yZWZpbHRlcigpLHN9LGFkZE1peFRhZ3ModCl7aWYoKHQ9dGhpcy5ub3JtYWxpemVUYWdzKHQpKVswXS5wcmVmaXh8fHRoaXMuc3RhdGUudGFnKXJldHVybiB0aGlzLnByZWZpeGVkVGV4dFRvVGFnKHRbMF0pO1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1be3ZhbHVlOnR9XSksdGhpcy5zdGF0ZS5zZWxlY3Rpb247dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0LmZvckVhY2goKHQ9Pnt2YXIgaT10aGlzLmNyZWF0ZVRhZ0VsZW0odCk7ZS5hcHBlbmRDaGlsZChpKSx0aGlzLmluc2VydEFmdGVyVGFnKGkpfSkpLHRoaXMuYXBwZW5kTWl4VGFncyhlKSxlfSxhcHBlbmRNaXhUYWdzKHQpe3ZhciBlPSEhdGhpcy5zdGF0ZS5zZWxlY3Rpb247ZT90aGlzLmluamVjdEF0Q2FyZXQodCk6KHRoaXMuRE9NLmlucHV0LmZvY3VzKCksKGU9dGhpcy5zZXRTdGF0ZVNlbGVjdGlvbigpKS5yYW5nZS5zZXRTdGFydCh0aGlzLkRPTS5pbnB1dCxlLnJhbmdlLmVuZE9mZnNldCksZS5yYW5nZS5zZXRFbmQodGhpcy5ET00uaW5wdXQsZS5yYW5nZS5lbmRPZmZzZXQpLHRoaXMuRE9NLmlucHV0LmFwcGVuZENoaWxkKHQpLHRoaXMudXBkYXRlVmFsdWVCeURPTVRhZ3MoKSx0aGlzLnVwZGF0ZSgpKX0scHJlZml4ZWRUZXh0VG9UYWcodCl7dmFyIGUsaT10aGlzLnNldHRpbmdzLHM9dGhpcy5zdGF0ZS50YWcuZGVsaW1pdGVycztpZihpLnRyYW5zZm9ybVRhZy5jYWxsKHRoaXMsdCksdC5wcmVmaXg9dC5wcmVmaXh8fHRoaXMuc3RhdGUudGFnP3RoaXMuc3RhdGUudGFnLnByZWZpeDooaS5wYXR0ZXJuLnNvdXJjZXx8aS5wYXR0ZXJuKVswXSxlPXRoaXMuY3JlYXRlVGFnRWxlbSh0KSx0aGlzLnJlcGxhY2VUZXh0V2l0aE5vZGUoZSl8fHRoaXMuRE9NLmlucHV0LmFwcGVuZENoaWxkKGUpLHNldFRpbWVvdXQoKCgpPT5lLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vQW5pbWF0aW9uKSksMzAwKSx0aGlzLnZhbHVlLnB1c2godCksdGhpcy51cGRhdGUoKSwhcyl7dmFyIGE9dGhpcy5pbnNlcnRBZnRlclRhZyhlKXx8ZTt0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUoYSl9cmV0dXJuIHRoaXMuc3RhdGUudGFnPW51bGwsdGhpcy50cmlnZ2VyKFwiYWRkXCIsZyh7fSx7dGFnOmV9LHtkYXRhOnR9KSksZX0sYXBwZW5kVGFnKHQpe3ZhciBlPXRoaXMuRE9NLGk9ZS5pbnB1dDtpPT09ZS5pbnB1dD9lLnNjb3BlLmluc2VydEJlZm9yZSh0LGkpOmUuc2NvcGUuYXBwZW5kQ2hpbGQodCl9LGNyZWF0ZVRhZ0VsZW0odCxpKXt0Ll9fdGFnSWQ9bSgpO3ZhciBzLGE9Zyh7fSx0LGUoe3ZhbHVlOmQodC52YWx1ZStcIlwiKX0saSkpO3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIGUsaT1kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IodCxOb2RlRmlsdGVyLlNIT1dfVEVYVCxudWxsLCExKTtlPWkubmV4dE5vZGUoKTspZS50ZXh0Q29udGVudC50cmltKCl8fGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0ocz10aGlzLnBhcnNlVGVtcGxhdGUoXCJ0YWdcIixbYSx0aGlzXSkpLHRoaXMudGFnRGF0YShzLHQpLHN9LHJlQ2hlY2tJbnZhbGlkVGFncygpe3ZhciB0PXRoaXMuc2V0dGluZ3M7dGhpcy5nZXRUYWdFbG1zKHQuY2xhc3NOYW1lcy50YWdOb3RBbGxvd2VkKS5mb3JFYWNoKCgoZSxpKT0+e3ZhciBzPXRoaXMudGFnRGF0YShlKSxhPXRoaXMuaGFzTWF4VGFncygpLG49dGhpcy52YWxpZGF0ZVRhZyhzKSxvPSEwPT09biYmIWE7aWYoXCJzZWxlY3RcIj09dC5tb2RlJiZ0aGlzLnRvZ2dsZVNjb3BlVmFsaWRhdGlvbihuKSxvKXJldHVybiBzPXMuX19wcmVJbnZhbGlkRGF0YT9zLl9fcHJlSW52YWxpZERhdGE6e3ZhbHVlOnMudmFsdWV9LHRoaXMucmVwbGFjZVRhZyhlLHMpO2UudGl0bGU9YXx8bn0pKX0scmVtb3ZlVGFncyh0LGUsaSl7dmFyIHMsYT10aGlzLnNldHRpbmdzO2lmKHQ9dCYmdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P1t0XTp0IGluc3RhbmNlb2YgQXJyYXk/dDp0P1t0XTpbdGhpcy5nZXRMYXN0VGFnKCldLHM9dC5yZWR1Y2UoKCh0LGUpPT57ZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXRoaXMuZ2V0VGFnRWxtQnlWYWx1ZShlKSk7dmFyIGk9dGhpcy50YWdEYXRhKGUpO3JldHVybiBlJiZpJiYhaS5yZWFkb25seSYmdC5wdXNoKHtub2RlOmUsaWR4OnRoaXMuZ2V0VGFnSWR4KGkpLGRhdGE6dGhpcy50YWdEYXRhKGUse19fcmVtb3ZlZDohMH0pfSksdH0pLFtdKSxpPVwibnVtYmVyXCI9PXR5cGVvZiBpP2k6dGhpcy5DU1NWYXJzLnRhZ0hpZGVUcmFuc2l0aW9uLFwic2VsZWN0XCI9PWEubW9kZSYmKGk9MCx0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMpKSwxPT1zLmxlbmd0aCYmXCJzZWxlY3RcIiE9YS5tb2RlJiZzWzBdLm5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGEuY2xhc3NOYW1lcy50YWdOb3RBbGxvd2VkKSYmKGU9ITApLHMubGVuZ3RoKXJldHVybiBhLmhvb2tzLmJlZm9yZVJlbW92ZVRhZyhzLHt0YWdpZnk6dGhpc30pLnRoZW4oKCgpPT57ZnVuY3Rpb24gdCh0KXt0Lm5vZGUucGFyZW50Tm9kZSYmKHQubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQubm9kZSksZT9hLmtlZXBJbnZhbGlkVGFncyYmdGhpcy50cmlnZ2VyKFwicmVtb3ZlXCIse3RhZzp0Lm5vZGUsaW5kZXg6dC5pZHh9KToodGhpcy50cmlnZ2VyKFwicmVtb3ZlXCIse3RhZzp0Lm5vZGUsaW5kZXg6dC5pZHgsZGF0YTp0LmRhdGF9KSx0aGlzLmRyb3Bkb3duLnJlZmlsdGVyKCksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpLHRoaXMuRE9NLmlucHV0Lm5vcm1hbGl6ZSgpLGEua2VlcEludmFsaWRUYWdzJiZ0aGlzLnJlQ2hlY2tJbnZhbGlkVGFncygpKSl9aSYmaT4xMCYmMT09cy5sZW5ndGg/ZnVuY3Rpb24oZSl7ZS5ub2RlLnN0eWxlLndpZHRoPXBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZS5ub2RlKS53aWR0aCkrXCJweFwiLGRvY3VtZW50LmJvZHkuY2xpZW50VG9wLGUubm9kZS5jbGFzc0xpc3QuYWRkKGEuY2xhc3NOYW1lcy50YWdIaWRlKSxzZXRUaW1lb3V0KHQuYmluZCh0aGlzKSxpLGUpfS5jYWxsKHRoaXMsc1swXSk6cy5mb3JFYWNoKHQuYmluZCh0aGlzKSksZXx8KHRoaXMucmVtb3ZlVGFnc0Zyb21WYWx1ZShzLm1hcCgodD0+dC5ub2RlKSkpLHRoaXMudXBkYXRlKCksXCJzZWxlY3RcIj09YS5tb2RlJiZ0aGlzLnNldENvbnRlbnRFZGl0YWJsZSghMCkpfSkpLmNhdGNoKCh0PT57fSkpfSxyZW1vdmVUYWdzRnJvbURPTSgpe1tdLnNsaWNlLmNhbGwodGhpcy5nZXRUYWdFbG1zKCkpLmZvckVhY2goKHQ9PnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSkpfSxyZW1vdmVUYWdzRnJvbVZhbHVlKHQpeyh0PUFycmF5LmlzQXJyYXkodCk/dDpbdF0pLmZvckVhY2goKHQ9Pnt2YXIgZT10aGlzLnRhZ0RhdGEodCksaT10aGlzLmdldFRhZ0lkeChlKTtpPi0xJiZ0aGlzLnZhbHVlLnNwbGljZShpLDEpfSkpfSxyZW1vdmVBbGxUYWdzKHQpe3Q9dHx8e30sdGhpcy52YWx1ZT1bXSxcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MPVwiXCI6dGhpcy5yZW1vdmVUYWdzRnJvbURPTSgpLHRoaXMuZHJvcGRvd24ucmVmaWx0ZXIoKSx0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKCksdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiZzZXRUaW1lb3V0KCgoKT0+e3RoaXMuRE9NLmlucHV0LmZvY3VzKCl9KSksXCJzZWxlY3RcIj09dGhpcy5zZXR0aW5ncy5tb2RlJiYodGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzKSx0aGlzLnNldENvbnRlbnRFZGl0YWJsZSghMCkpLHRoaXMudXBkYXRlKHQpfSxwb3N0VXBkYXRlKCl7dmFyIHQ9dGhpcy5zZXR0aW5ncyxlPXQuY2xhc3NOYW1lcyxpPVwibWl4XCI9PXQubW9kZT90Lm1peE1vZGUuaW50ZWdyYXRlZD90aGlzLkRPTS5pbnB1dC50ZXh0Q29udGVudDp0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlLnRyaW0oKTp0aGlzLnZhbHVlLmxlbmd0aCt0aGlzLmlucHV0LnJhdy5jYWxsKHRoaXMpLmxlbmd0aDt0aGlzLnRvZ2dsZUNsYXNzKGUuaGFzTWF4VGFncyx0aGlzLnZhbHVlLmxlbmd0aD49dC5tYXhUYWdzKSx0aGlzLnRvZ2dsZUNsYXNzKGUuaGFzTm9UYWdzLCF0aGlzLnZhbHVlLmxlbmd0aCksdGhpcy50b2dnbGVDbGFzcyhlLmVtcHR5LCFpKSxcInNlbGVjdFwiPT10Lm1vZGUmJnRoaXMudG9nZ2xlU2NvcGVWYWxpZGF0aW9uKHRoaXMudmFsdWU/LlswXT8uX19pc1ZhbGlkKX0sc2V0T3JpZ2luYWxJbnB1dFZhbHVlKHQpe3ZhciBlPXRoaXMuRE9NLm9yaWdpbmFsSW5wdXQ7dGhpcy5zZXR0aW5ncy5taXhNb2RlLmludGVncmF0ZWR8fChlLnZhbHVlPXQsZS50YWdpZnlWYWx1ZT1lLnZhbHVlLHRoaXMuc2V0UGVyc2lzdGVkRGF0YSh0LFwidmFsdWVcIikpfSx1cGRhdGUodCl7dmFyIGU9dGhpcy5nZXRJbnB1dFZhbHVlKCk7dGhpcy5zZXRPcmlnaW5hbElucHV0VmFsdWUoZSksdGhpcy5wb3N0VXBkYXRlKCksdGhpcy5zZXR0aW5ncy5vbkNoYW5nZUFmdGVyQmx1ciYmKHR8fHt9KS53aXRob3V0Q2hhbmdlRXZlbnR8fHRoaXMuc3RhdGUuYmxvY2tDaGFuZ2VFdmVudHx8dGhpcy50cmlnZ2VyQ2hhbmdlRXZlbnQoKX0sZ2V0SW5wdXRWYWx1ZSgpe3ZhciB0PXRoaXMuZ2V0Q2xlYW5WYWx1ZSgpO3JldHVyblwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT90aGlzLmdldE1peGVkVGFnc0FzU3RyaW5nKHQpOnQubGVuZ3RoP3RoaXMuc2V0dGluZ3Mub3JpZ2luYWxJbnB1dFZhbHVlRm9ybWF0P3RoaXMuc2V0dGluZ3Mub3JpZ2luYWxJbnB1dFZhbHVlRm9ybWF0KHQpOkpTT04uc3RyaW5naWZ5KHQpOlwiXCJ9LGdldENsZWFuVmFsdWUodCl7cmV0dXJuIGEodHx8dGhpcy52YWx1ZSx0aGlzLmRhdGFQcm9wcyl9LGdldE1peGVkVGFnc0FzU3RyaW5nKCl7dmFyIHQ9XCJcIixlPXRoaXMsaT10aGlzLnNldHRpbmdzLHM9aS5vcmlnaW5hbElucHV0VmFsdWVGb3JtYXR8fEpTT04uc3RyaW5naWZ5LGE9aS5taXhUYWdzSW50ZXJwb2xhdG9yO3JldHVybiBmdW5jdGlvbiBpKG8pe28uY2hpbGROb2Rlcy5mb3JFYWNoKChvPT57aWYoMT09by5ub2RlVHlwZSl7Y29uc3Qgcj1lLnRhZ0RhdGEobyk7aWYoXCJCUlwiPT1vLnRhZ05hbWUmJih0Kz1cIlxcclxcblwiKSxyJiZ2LmNhbGwoZSxvKSl7aWYoci5fX3JlbW92ZWQpcmV0dXJuO3QrPWFbMF0rcyhuKHIsZS5kYXRhUHJvcHMpKSthWzFdfWVsc2Ugby5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKXx8W1wiQlwiLFwiSVwiLFwiVVwiXS5pbmNsdWRlcyhvLnRhZ05hbWUpP3QrPW8udGV4dENvbnRlbnQ6XCJESVZcIiE9by50YWdOYW1lJiZcIlBcIiE9by50YWdOYW1lfHwodCs9XCJcXHJcXG5cIixpKG8pKX1lbHNlIHQrPW8udGV4dENvbnRlbnR9KSl9KHRoaXMuRE9NLmlucHV0KSx0fX0sSS5wcm90b3R5cGUucmVtb3ZlVGFnPUkucHJvdG90eXBlLnJlbW92ZVRhZ3MsSX0pKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7OnJvb3R7LS10YWdpZnktZGQtY29sb3ItcHJpbWFyeTpyZ2IoNTMsMTQ5LDI0Nik7LS10YWdpZnktZGQtYmctY29sb3I6d2hpdGU7LS10YWdpZnktZGQtaXRlbS1wYWQ6LjNlbSAuNWVtfS50YWdpZnl7LS10YWdzLWRpc2FibGVkLWJnOiNGMUYxRjE7LS10YWdzLWJvcmRlci1jb2xvcjojREREOy0tdGFncy1ob3Zlci1ib3JkZXItY29sb3I6I0NDQzstLXRhZ3MtZm9jdXMtYm9yZGVyLWNvbG9yOiMzNTk1ZjY7LS10YWctYm9yZGVyLXJhZGl1czozcHg7LS10YWctYmc6I0U1RTVFNTstLXRhZy1ob3ZlcjojRDNFMkUyOy0tdGFnLXRleHQtY29sb3I6YmxhY2s7LS10YWctdGV4dC1jb2xvci0tZWRpdDpibGFjazstLXRhZy1wYWQ6MC4zZW0gMC41ZW07LS10YWctaW5zZXQtc2hhZG93LXNpemU6MS4xZW07LS10YWctaW52YWxpZC1jb2xvcjojRDM5NDk0Oy0tdGFnLWludmFsaWQtYmc6cmdiYSgyMTEsIDE0OCwgMTQ4LCAwLjUpOy0tdGFnLXJlbW92ZS1iZzpyZ2JhKDIxMSwgMTQ4LCAxNDgsIDAuMyk7LS10YWctcmVtb3ZlLWJ0bi1jb2xvcjpibGFjazstLXRhZy1yZW1vdmUtYnRuLWJnOm5vbmU7LS10YWctcmVtb3ZlLWJ0bi1iZy0taG92ZXI6I2M3Nzc3NzstLWlucHV0LWNvbG9yOmluaGVyaXQ7LS10YWctLW1pbi13aWR0aDoxY2g7LS10YWctLW1heC13aWR0aDphdXRvOy0tdGFnLWhpZGUtdHJhbnNpdGlvbjowLjNzOy0tcGxhY2Vob2xkZXItY29sb3I6cmdiYSgwLCAwLCAwLCAwLjQpOy0tcGxhY2Vob2xkZXItY29sb3ItZm9jdXM6cmdiYSgwLCAwLCAwLCAwLjI1KTstLWxvYWRlci1zaXplOi44ZW07LS1yZWFkb25seS1zdHJpcGVkOjE7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2ZsZXgtd3JhcDp3cmFwO2JvcmRlcjoxcHggc29saWQgdmFyKC0tdGFncy1ib3JkZXItY29sb3IpO3BhZGRpbmc6MDtsaW5lLWhlaWdodDowO2N1cnNvcjp0ZXh0O291dGxpbmU6MDtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7dHJhbnNpdGlvbjouMXN9QGtleWZyYW1lcyB0YWdzLS1idW1wezMwJXt0cmFuc2Zvcm06c2NhbGUoMS4yKX19QGtleWZyYW1lcyByb3RhdGVMb2FkZXJ7dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fS50YWdpZnk6aG92ZXI6bm90KC50YWdpZnktLWZvY3VzKTpub3QoLnRhZ2lmeS0taW52YWxpZCl7LS10YWdzLWJvcmRlci1jb2xvcjp2YXIoLS10YWdzLWhvdmVyLWJvcmRlci1jb2xvcil9LnRhZ2lmeVtkaXNhYmxlZF17YmFja2dyb3VuZDp2YXIoLS10YWdzLWRpc2FibGVkLWJnKTtmaWx0ZXI6c2F0dXJhdGUoMCk7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlbZGlzYWJsZWRdLnRhZ2lmeS0tc2VsZWN0LC50YWdpZnlbcmVhZG9ubHldLnRhZ2lmeS0tc2VsZWN0e3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCksLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCl7Y3Vyc29yOmRlZmF1bHR9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCk+LnRhZ2lmeV9faW5wdXQsLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCk+LnRhZ2lmeV9faW5wdXR7dmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MDttYXJnaW46NXB4IDB9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdiwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2e3BhZGRpbmc6dmFyKC0tdGFnLXBhZCl9LnRhZ2lmeVtkaXNhYmxlZF06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdjo6YmVmb3JlLC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXY6OmJlZm9yZXthbmltYXRpb246cmVhZG9ubHlTdHlsZXMgMXMgY2FsYygtMXMgKiAodmFyKC0tcmVhZG9ubHktc3RyaXBlZCkgLSAxKSkgcGF1c2VkfUBrZXlmcmFtZXMgcmVhZG9ubHlTdHlsZXN7MCV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tdGFnLWJnKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSx2YXIoLS10YWctYmcpIDUwJSx2YXIoLS10YWctYmcpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpIDAvNXB4IDVweDtib3gtc2hhZG93Om5vbmU7ZmlsdGVyOmJyaWdodG5lc3MoLjk1KX19LnRhZ2lmeVtkaXNhYmxlZF0gLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG4sLnRhZ2lmeVtyZWFkb25seV0gLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57ZGlzcGxheTpub25lfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ+YnI6bGFzdC1jaGlsZHtkaXNwbGF5Om5vbmV9LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle2NvbnRlbnQ6bm9uZX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0OjphZnRlcntjb250ZW50OlxcXCJcXFwiO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtvcGFjaXR5OjE7d2lkdGg6LjdlbTtoZWlnaHQ6LjdlbTt3aWR0aDp2YXIoLS1sb2FkZXItc2l6ZSk7aGVpZ2h0OnZhcigtLWxvYWRlci1zaXplKTttaW4td2lkdGg6MDtib3JkZXI6M3B4IHNvbGlkO2JvcmRlci1jb2xvcjojZWVlICNiYmIgIzg4OCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTthbmltYXRpb246cm90YXRlTG9hZGVyIC40cyBpbmZpbml0ZSBsaW5lYXI7Y29udGVudDpcXFwiXFxcIiFpbXBvcnRhbnQ7bWFyZ2luOi0ycHggMCAtMnB4IC41ZW19LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dDplbXB0eTo6YWZ0ZXJ7bWFyZ2luLWxlZnQ6MH0udGFnaWZ5K2lucHV0LC50YWdpZnkrdGV4dGFyZWF7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O2xlZnQ6LTk5OTllbSFpbXBvcnRhbnQ7dHJhbnNmb3JtOnNjYWxlKDApIWltcG9ydGFudH0udGFnaWZ5X190YWd7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjVweCAwIDVweCA1cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO291dGxpbmU6MDtsaW5lLWhlaWdodDpub3JtYWw7Y3Vyc29yOmRlZmF1bHQ7dHJhbnNpdGlvbjouMTNzIGVhc2Utb3V0fS50YWdpZnlfX3RhZz5kaXZ7dmVydGljYWwtYWxpZ246dG9wO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOnZhcigtLXRhZy1wYWQpO2NvbG9yOnZhcigtLXRhZy10ZXh0LWNvbG9yKTtsaW5lLWhlaWdodDppbmhlcml0O2JvcmRlci1yYWRpdXM6dmFyKC0tdGFnLWJvcmRlci1yYWRpdXMpO3doaXRlLXNwYWNlOm5vd3JhcDt0cmFuc2l0aW9uOi4xM3MgZWFzZS1vdXR9LnRhZ2lmeV9fdGFnPmRpdj4qe3doaXRlLXNwYWNlOnByZS13cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcDttaW4td2lkdGg6dmFyKC0tdGFnLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS10YWctLW1heC13aWR0aCk7dHJhbnNpdGlvbjouOHMgZWFzZSwuMXMgY29sb3J9LnRhZ2lmeV9fdGFnPmRpdj5bY29udGVudGVkaXRhYmxlXXtvdXRsaW5lOjA7LXdlYmtpdC11c2VyLXNlbGVjdDp0ZXh0O3VzZXItc2VsZWN0OnRleHQ7Y3Vyc29yOnRleHQ7bWFyZ2luOi0ycHg7cGFkZGluZzoycHg7bWF4LXdpZHRoOjM1MHB4fS50YWdpZnlfX3RhZz5kaXY6OmJlZm9yZXtjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6aW5oZXJpdDtpbnNldDp2YXIoLS10YWctYmctaW5zZXQsMCk7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246MTIwbXMgZWFzZTthbmltYXRpb246dGFncy0tYnVtcCAuM3MgZWFzZS1vdXQgMTtib3gtc2hhZG93OjAgMCAwIHZhcigtLXRhZy1pbnNldC1zaGFkb3ctc2l6ZSkgdmFyKC0tdGFnLWJnKSBpbnNldH0udGFnaWZ5X190YWc6Zm9jdXMgZGl2OjpiZWZvcmUsLnRhZ2lmeV9fdGFnOmhvdmVyOm5vdChbcmVhZG9ubHldKSBkaXY6OmJlZm9yZXstLXRhZy1iZy1pbnNldDotMi41cHg7LS10YWctYmc6dmFyKC0tdGFnLWhvdmVyKX0udGFnaWZ5X190YWctLWxvYWRpbmd7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5X190YWctLWxvYWRpbmcgLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57ZGlzcGxheTpub25lfS50YWdpZnlfX3RhZy0tbG9hZGluZzo6YWZ0ZXJ7LS1sb2FkZXItc2l6ZTouNGVtO2NvbnRlbnQ6XFxcIlxcXCI7dmVydGljYWwtYWxpZ246bWlkZGxlO29wYWNpdHk6MTt3aWR0aDouN2VtO2hlaWdodDouN2VtO3dpZHRoOnZhcigtLWxvYWRlci1zaXplKTtoZWlnaHQ6dmFyKC0tbG9hZGVyLXNpemUpO21pbi13aWR0aDowO2JvcmRlcjozcHggc29saWQ7Ym9yZGVyLWNvbG9yOiNlZWUgI2JiYiAjODg4IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpyb3RhdGVMb2FkZXIgLjRzIGluZmluaXRlIGxpbmVhcjttYXJnaW46MCAuNWVtIDAgLS4xZW19LnRhZ2lmeV9fdGFnLS1mbGFzaCBkaXY6OmJlZm9yZXthbmltYXRpb246bm9uZX0udGFnaWZ5X190YWctLWhpZGV7d2lkdGg6MCFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2l0aW9uOnZhcigtLXRhZy1oaWRlLXRyYW5zaXRpb24pO3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeV9fdGFnLS1oaWRlPmRpdj4qe3doaXRlLXNwYWNlOm5vd3JhcH0udGFnaWZ5X190YWcudGFnaWZ5LS1ub0FuaW0+ZGl2OjpiZWZvcmV7YW5pbWF0aW9uOm5vbmV9LnRhZ2lmeV9fdGFnLnRhZ2lmeS0tbm90QWxsb3dlZDpub3QoLnRhZ2lmeV9fdGFnLS1lZGl0YWJsZSkgZGl2PnNwYW57b3BhY2l0eTouNX0udGFnaWZ5X190YWcudGFnaWZ5LS1ub3RBbGxvd2VkOm5vdCgudGFnaWZ5X190YWctLWVkaXRhYmxlKSBkaXY6OmJlZm9yZXstLXRhZy1iZzp2YXIoLS10YWctaW52YWxpZC1iZyk7dHJhbnNpdGlvbjouMnN9LnRhZ2lmeV9fdGFnW3JlYWRvbmx5XSAudGFnaWZ5X190YWdfX3JlbW92ZUJ0bntkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fdGFnW3JlYWRvbmx5XT5kaXY6OmJlZm9yZXthbmltYXRpb246cmVhZG9ubHlTdHlsZXMgMXMgY2FsYygtMXMgKiAodmFyKC0tcmVhZG9ubHktc3RyaXBlZCkgLSAxKSkgcGF1c2VkfUBrZXlmcmFtZXMgcmVhZG9ubHlTdHlsZXN7MCV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tdGFnLWJnKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSx2YXIoLS10YWctYmcpIDUwJSx2YXIoLS10YWctYmcpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpIDAvNXB4IDVweDtib3gtc2hhZG93Om5vbmU7ZmlsdGVyOmJyaWdodG5lc3MoLjk1KX19LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT5kaXZ7Y29sb3I6dmFyKC0tdGFnLXRleHQtY29sb3ItLWVkaXQpfS50YWdpZnlfX3RhZy0tZWRpdGFibGU+ZGl2OjpiZWZvcmV7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tdGFnLWhvdmVyKSBpbnNldCFpbXBvcnRhbnR9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT4udGFnaWZ5X190YWdfX3JlbW92ZUJ0bntwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlfX3RhZy0tZWRpdGFibGU+LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46OmFmdGVye29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAlKSB0cmFuc2xhdGVYKDVweCl9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZS50YWdpZnktLWludmFsaWQ+ZGl2OjpiZWZvcmV7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tdGFnLWludmFsaWQtY29sb3IpIGluc2V0IWltcG9ydGFudH0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bntvcmRlcjo1O2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1MHB4O2N1cnNvcjpwb2ludGVyO2ZvbnQ6MTRweC8xIEFyaWFsO2JhY2tncm91bmQ6dmFyKC0tdGFnLXJlbW92ZS1idG4tYmcpO2NvbG9yOnZhcigtLXRhZy1yZW1vdmUtYnRuLWNvbG9yKTt3aWR0aDoxNHB4O2hlaWdodDoxNHB4O21hcmdpbi1yaWdodDo0LjY2NjY2NjY2NjdweDttYXJnaW4tbGVmdDphdXRvO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dH0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjo6YWZ0ZXJ7Y29udGVudDpcXFwiw5dcXFwiO3RyYW5zaXRpb246LjNzLGNvbG9yIDBzfS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZDp2YXIoLS10YWctcmVtb3ZlLWJ0bi1iZy0taG92ZXIpfS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOmhvdmVyK2Rpdj5zcGFue29wYWNpdHk6LjV9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46aG92ZXIrZGl2OjpiZWZvcmV7Ym94LXNoYWRvdzowIDAgMCB2YXIoLS10YWctaW5zZXQtc2hhZG93LXNpemUpIHZhcigtLXRhZy1yZW1vdmUtYmcscmdiYSgyMTEsMTQ4LDE0OCwuMykpIGluc2V0IWltcG9ydGFudDt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjJzfS50YWdpZnk6bm90KC50YWdpZnktLW1peCkgLnRhZ2lmeV9faW5wdXQgYnJ7ZGlzcGxheTpub25lfS50YWdpZnk6bm90KC50YWdpZnktLW1peCkgLnRhZ2lmeV9faW5wdXQgKntkaXNwbGF5OmlubGluZTt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhZ2lmeV9faW5wdXR7ZmxleC1ncm93OjE7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLXdpZHRoOjExMHB4O21hcmdpbjo1cHg7cGFkZGluZzp2YXIoLS10YWctcGFkKTtsaW5lLWhlaWdodDpub3JtYWw7cG9zaXRpb246cmVsYXRpdmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7Y29sb3I6dmFyKC0taW5wdXQtY29sb3IpO2JveC1zaXppbmc6aW5oZXJpdH0udGFnaWZ5X19pbnB1dDplbXB0eTo6YmVmb3Jle3Bvc2l0aW9uOnN0YXRpY30udGFnaWZ5X19pbnB1dDpmb2N1c3tvdXRsaW5lOjB9LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dDtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZXgoNnB4KX1Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0byl7LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6OmJlZm9yZXtkaXNwbGF5Om5vbmV9fS50YWdpZnlfX2lucHV0OmZvY3VzOmVtcHR5OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgZWFzZS1vdXQ7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lO2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvci1mb2N1cyl9QC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpey50YWdpZnlfX2lucHV0OmZvY3VzOmVtcHR5OjphZnRlcntkaXNwbGF5Om5vbmV9fS50YWdpZnlfX2lucHV0OjpiZWZvcmV7Y29udGVudDphdHRyKGRhdGEtcGxhY2Vob2xkZXIpO2hlaWdodDoxZW07bGluZS1oZWlnaHQ6MWVtO21hcmdpbjphdXRvIDA7ei1pbmRleDoxO2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTt3aGl0ZS1zcGFjZTpub3dyYXA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGV9LnRhZ2lmeV9faW5wdXQ6OmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXN1Z2dlc3QpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtwb3NpdGlvbjphYnNvbHV0ZTttaW4td2lkdGg6Y2FsYygxMDAlIC0gMS41ZW0pO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOnByZTtjb2xvcjp2YXIoLS10YWctdGV4dC1jb2xvcik7b3BhY2l0eTouMztwb2ludGVyLWV2ZW50czpub25lO21heC13aWR0aDoxMDBweH0udGFnaWZ5X19pbnB1dCAudGFnaWZ5X190YWd7bWFyZ2luOjAgMXB4fS50YWdpZnktLW1peHtkaXNwbGF5OmJsb2NrfS50YWdpZnktLW1peCAudGFnaWZ5X19pbnB1dHtwYWRkaW5nOjVweDttYXJnaW46MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xpbmUtaGVpZ2h0OjEuNTtkaXNwbGF5OmJsb2NrfS50YWdpZnktLW1peCAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle2hlaWdodDphdXRvO2Rpc3BsYXk6bm9uZTtsaW5lLWhlaWdodDppbmhlcml0fS50YWdpZnktLW1peCAudGFnaWZ5X19pbnB1dDo6YWZ0ZXJ7Y29udGVudDpub25lfS50YWdpZnktLXNlbGVjdDo6YWZ0ZXJ7Y29udGVudDpcXFwiPlxcXCI7b3BhY2l0eTouNTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7Ym90dG9tOjA7Zm9udDoxNnB4IG1vbm9zcGFjZTtsaW5lLWhlaWdodDo4cHg7aGVpZ2h0OjhweDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTE1MCUsLTUwJSkgc2NhbGVYKDEuMikgcm90YXRlKDkwZGVnKTt0cmFuc2l0aW9uOi4ycyBlYXNlLWluLW91dH0udGFnaWZ5LS1zZWxlY3RbYXJpYS1leHBhbmRlZD10cnVlXTo6YWZ0ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTUwJSwtNTAlKSByb3RhdGUoMjcwZGVnKSBzY2FsZVkoMS4yKX0udGFnaWZ5LS1zZWxlY3QgLnRhZ2lmeV9fdGFne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjEuOGVtO2JvdHRvbTowfS50YWdpZnktLXNlbGVjdCAudGFnaWZ5X190YWcgZGl2e2Rpc3BsYXk6bm9uZX0udGFnaWZ5LS1zZWxlY3QgLnRhZ2lmeV9faW5wdXR7d2lkdGg6MTAwJX0udGFnaWZ5LS1lbXB0eSAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGVhc2Utb3V0O29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDphdXRvfS50YWdpZnktLW1peCAudGFnaWZ5LS1lbXB0eSAudGFnaWZ5X19pbnB1dDo6YmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrfS50YWdpZnktLWZvY3Vzey0tdGFncy1ib3JkZXItY29sb3I6dmFyKC0tdGFncy1mb2N1cy1ib3JkZXItY29sb3IpO3RyYW5zaXRpb246MHN9LnRhZ2lmeS0taW52YWxpZHstLXRhZ3MtYm9yZGVyLWNvbG9yOiNEMzk0OTR9LnRhZ2lmeV9fZHJvcGRvd257cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5O3RyYW5zZm9ybTp0cmFuc2xhdGVZKDFweCk7b3ZlcmZsb3c6aGlkZGVufS50YWdpZnlfX2Ryb3Bkb3duW3BsYWNlbWVudD10b3Bde21hcmdpbi10b3A6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9LnRhZ2lmeV9fZHJvcGRvd25bcGxhY2VtZW50PXRvcF0gLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7Ym9yZGVyLXRvcC13aWR0aDoxLjFweDtib3JkZXItYm90dG9tLXdpZHRoOjB9LnRhZ2lmeV9fZHJvcGRvd25bcG9zaXRpb249dGV4dF17Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSh2YXIoLS10YWdpZnktZGQtY29sb3ItcHJpbWFyeSksLjEpO2ZvbnQtc2l6ZTouOWVtfS50YWdpZnlfX2Ryb3Bkb3duW3Bvc2l0aW9uPXRleHRdIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye2JvcmRlci13aWR0aDoxcHh9LnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7bWF4LWhlaWdodDozMDBweDtvdmVyZmxvdzphdXRvO292ZXJmbG93LXg6aGlkZGVuO2JhY2tncm91bmQ6dmFyKC0tdGFnaWZ5LWRkLWJnLWNvbG9yKTtib3JkZXI6MXB4IHNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS10YWdpZnktZGQtY29sb3ItcHJpbWFyeSk7Ym9yZGVyLWJvdHRvbS13aWR0aDoxLjVweDtib3JkZXItdG9wLXdpZHRoOjA7Ym94LXNoYWRvdzowIDJweCA0cHggLTJweCByZ2JhKDAsMCwwLC4yKTt0cmFuc2l0aW9uOi4yNXMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKX0udGFnaWZ5X19kcm9wZG93bl9faGVhZGVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0udGFnaWZ5X19kcm9wZG93bl9fZm9vdGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6LjVlbTtwYWRkaW5nOnZhcigtLXRhZ2lmeS1kZC1pdGVtLXBhZCk7Zm9udC1zaXplOi43ZW07Zm9udC1zdHlsZTppdGFsaWM7b3BhY2l0eTouNX0udGFnaWZ5X19kcm9wZG93bl9fZm9vdGVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0udGFnaWZ5X19kcm9wZG93bi0taW5pdGlhbCAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcnttYXgtaGVpZ2h0OjIwcHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFlbSl9LnRhZ2lmeV9fZHJvcGRvd24tLWluaXRpYWxbcGxhY2VtZW50PXRvcF0gLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMmVtKX0udGFnaWZ5X19kcm9wZG93bl9faXRlbXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzp2YXIoLS10YWdpZnktZGQtaXRlbS1wYWQpO21hcmdpbjoxcHg7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZTowO21heC1oZWlnaHQ6NjBweDttYXgtd2lkdGg6MTAwJX0udGFnaWZ5X19kcm9wZG93bl9faXRlbS0tYWN0aXZle2JhY2tncm91bmQ6dmFyKC0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnkpO2NvbG9yOiNmZmZ9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW06YWN0aXZle2ZpbHRlcjpicmlnaHRuZXNzKDEwNSUpfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1oaWRkZW57cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbjowIDFweDtwb2ludGVyLWV2ZW50czpub25lO292ZXJmbG93OmhpZGRlbjttYXgtaGVpZ2h0OjA7dHJhbnNpdGlvbjp2YXIoLS10YWdpZnktZGQtaXRlbS0taGlkZGVuLWR1cmF0aW9uLC4zcykhaW1wb3J0YW50fS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1oaWRkZW4+Knt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSk7b3BhY2l0eTowO3RyYW5zaXRpb246aW5oZXJpdH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQHlhaXJlby90YWdpZnkvZGlzdC90YWdpZnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQixDQUFDLE1BQU0seUNBQXlDLENBQUMsMEJBQTBCLENBQUMsOEJBQThCLENBQUMsUUFBUSwwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyw4QkFBOEIsQ0FBQyxpQ0FBaUMsQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsQ0FBQyxxQkFBcUIsQ0FB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MkIsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLG9DQUFvQyxDQUFDLGdCQUFnQixDQUFDLDJDQUEyQyxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLHdDQUF3QyxDQUFDLHNDQUFzQyxDQUFDLGdDQUFnQyxZQUFZLENBQUMsMEJBQTBCLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxpQ0FBaUMsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxZQUFZLENBQUMsc0RBQXNELGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxxRUFBcUUseUJBQXlCLENBQUMsd0JBQXdCLHFCQUFxQixDQUFDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0NBQWdDLHlDQUF5QyxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsdUJBQXVCLENBQUMsZ0NBQWdDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQywrREFBK0QsQ0FBQyxrQ0FBa0MsMkJBQTJCLENBQUMsU0FBUyxDQUFDLGtCQUFrQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiOzpyb290ey0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnk6cmdiKDUzLDE0OSwyNDYpOy0tdGFnaWZ5LWRkLWJnLWNvbG9yOndoaXRlOy0tdGFnaWZ5LWRkLWl0ZW0tcGFkOi4zZW0gLjVlbX0udGFnaWZ5ey0tdGFncy1kaXNhYmxlZC1iZzojRjFGMUYxOy0tdGFncy1ib3JkZXItY29sb3I6I0RERDstLXRhZ3MtaG92ZXItYm9yZGVyLWNvbG9yOiNDQ0M7LS10YWdzLWZvY3VzLWJvcmRlci1jb2xvcjojMzU5NWY2Oy0tdGFnLWJvcmRlci1yYWRpdXM6M3B4Oy0tdGFnLWJnOiNFNUU1RTU7LS10YWctaG92ZXI6I0QzRTJFMjstLXRhZy10ZXh0LWNvbG9yOmJsYWNrOy0tdGFnLXRleHQtY29sb3ItLWVkaXQ6YmxhY2s7LS10YWctcGFkOjAuM2VtIDAuNWVtOy0tdGFnLWluc2V0LXNoYWRvdy1zaXplOjEuMWVtOy0tdGFnLWludmFsaWQtY29sb3I6I0QzOTQ5NDstLXRhZy1pbnZhbGlkLWJnOnJnYmEoMjExLCAxNDgsIDE0OCwgMC41KTstLXRhZy1yZW1vdmUtYmc6cmdiYSgyMTEsIDE0OCwgMTQ4LCAwLjMpOy0tdGFnLXJlbW92ZS1idG4tY29sb3I6YmxhY2s7LS10YWctcmVtb3ZlLWJ0bi1iZzpub25lOy0tdGFnLXJlbW92ZS1idG4tYmctLWhvdmVyOiNjNzc3Nzc7LS1pbnB1dC1jb2xvcjppbmhlcml0Oy0tdGFnLS1taW4td2lkdGg6MWNoOy0tdGFnLS1tYXgtd2lkdGg6YXV0bzstLXRhZy1oaWRlLXRyYW5zaXRpb246MC4zczstLXBsYWNlaG9sZGVyLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC40KTstLXBsYWNlaG9sZGVyLWNvbG9yLWZvY3VzOnJnYmEoMCwgMCwgMCwgMC4yNSk7LS1sb2FkZXItc2l6ZTouOGVtOy0tcmVhZG9ubHktc3RyaXBlZDoxO2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtmbGV4LXdyYXA6d3JhcDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXRhZ3MtYm9yZGVyLWNvbG9yKTtwYWRkaW5nOjA7bGluZS1oZWlnaHQ6MDtjdXJzb3I6dGV4dDtvdXRsaW5lOjA7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246LjFzfUBrZXlmcmFtZXMgdGFncy0tYnVtcHszMCV7dHJhbnNmb3JtOnNjYWxlKDEuMil9fUBrZXlmcmFtZXMgcm90YXRlTG9hZGVye3Rve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX0udGFnaWZ5OmhvdmVyOm5vdCgudGFnaWZ5LS1mb2N1cyk6bm90KC50YWdpZnktLWludmFsaWQpey0tdGFncy1ib3JkZXItY29sb3I6dmFyKC0tdGFncy1ob3Zlci1ib3JkZXItY29sb3IpfS50YWdpZnlbZGlzYWJsZWRde2JhY2tncm91bmQ6dmFyKC0tdGFncy1kaXNhYmxlZC1iZyk7ZmlsdGVyOnNhdHVyYXRlKDApO29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5W2Rpc2FibGVkXS50YWdpZnktLXNlbGVjdCwudGFnaWZ5W3JlYWRvbmx5XS50YWdpZnktLXNlbGVjdHtwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpLC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3Qpe2N1cnNvcjpkZWZhdWx0fS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpPi50YWdpZnlfX2lucHV0LC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpPi50YWdpZnlfX2lucHV0e3Zpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjA7bWFyZ2luOjVweCAwfS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXYsLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdntwYWRkaW5nOnZhcigtLXRhZy1wYWQpfS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXY6OmJlZm9yZSwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2OjpiZWZvcmV7YW5pbWF0aW9uOnJlYWRvbmx5U3R5bGVzIDFzIGNhbGMoLTFzICogKHZhcigtLXJlYWRvbmx5LXN0cmlwZWQpIC0gMSkpIHBhdXNlZH1Aa2V5ZnJhbWVzIHJlYWRvbmx5U3R5bGVzezAle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHZhcigtLXRhZy1iZykgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUsdmFyKC0tdGFnLWJnKSA1MCUsdmFyKC0tdGFnLWJnKSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KSAwLzVweCA1cHg7Ym94LXNoYWRvdzpub25lO2ZpbHRlcjpicmlnaHRuZXNzKC45NSl9fS50YWdpZnlbZGlzYWJsZWRdIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuLC50YWdpZnlbcmVhZG9ubHldIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue2Rpc3BsYXk6bm9uZX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0PmJyOmxhc3QtY2hpbGR7ZGlzcGxheTpub25lfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtjb250ZW50Om5vbmV9LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dDo6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7b3BhY2l0eToxO3dpZHRoOi43ZW07aGVpZ2h0Oi43ZW07d2lkdGg6dmFyKC0tbG9hZGVyLXNpemUpO2hlaWdodDp2YXIoLS1sb2FkZXItc2l6ZSk7bWluLXdpZHRoOjA7Ym9yZGVyOjNweCBzb2xpZDtib3JkZXItY29sb3I6I2VlZSAjYmJiICM4ODggdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7YW5pbWF0aW9uOnJvdGF0ZUxvYWRlciAuNHMgaW5maW5pdGUgbGluZWFyO2NvbnRlbnQ6XFxcIlxcXCIhaW1wb3J0YW50O21hcmdpbjotMnB4IDAgLTJweCAuNWVtfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ6ZW1wdHk6OmFmdGVye21hcmdpbi1sZWZ0OjB9LnRhZ2lmeStpbnB1dCwudGFnaWZ5K3RleHRhcmVhe3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtsZWZ0Oi05OTk5ZW0haW1wb3J0YW50O3RyYW5zZm9ybTpzY2FsZSgwKSFpbXBvcnRhbnR9LnRhZ2lmeV9fdGFne2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjo1cHggMCA1cHggNXB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtvdXRsaW5lOjA7bGluZS1oZWlnaHQ6bm9ybWFsO2N1cnNvcjpkZWZhdWx0O3RyYW5zaXRpb246LjEzcyBlYXNlLW91dH0udGFnaWZ5X190YWc+ZGl2e3ZlcnRpY2FsLWFsaWduOnRvcDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzp2YXIoLS10YWctcGFkKTtjb2xvcjp2YXIoLS10YWctdGV4dC1jb2xvcik7bGluZS1oZWlnaHQ6aW5oZXJpdDtib3JkZXItcmFkaXVzOnZhcigtLXRhZy1ib3JkZXItcmFkaXVzKTt3aGl0ZS1zcGFjZTpub3dyYXA7dHJhbnNpdGlvbjouMTNzIGVhc2Utb3V0fS50YWdpZnlfX3RhZz5kaXY+Knt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWluLXdpZHRoOnZhcigtLXRhZy0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tdGFnLS1tYXgtd2lkdGgpO3RyYW5zaXRpb246LjhzIGVhc2UsLjFzIGNvbG9yfS50YWdpZnlfX3RhZz5kaXY+W2NvbnRlbnRlZGl0YWJsZV17b3V0bGluZTowOy13ZWJraXQtdXNlci1zZWxlY3Q6dGV4dDt1c2VyLXNlbGVjdDp0ZXh0O2N1cnNvcjp0ZXh0O21hcmdpbjotMnB4O3BhZGRpbmc6MnB4O21heC13aWR0aDozNTBweH0udGFnaWZ5X190YWc+ZGl2OjpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOmluaGVyaXQ7aW5zZXQ6dmFyKC0tdGFnLWJnLWluc2V0LDApO3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOjEyMG1zIGVhc2U7YW5pbWF0aW9uOnRhZ3MtLWJ1bXAgLjNzIGVhc2Utb3V0IDE7Ym94LXNoYWRvdzowIDAgMCB2YXIoLS10YWctaW5zZXQtc2hhZG93LXNpemUpIHZhcigtLXRhZy1iZykgaW5zZXR9LnRhZ2lmeV9fdGFnOmZvY3VzIGRpdjo6YmVmb3JlLC50YWdpZnlfX3RhZzpob3Zlcjpub3QoW3JlYWRvbmx5XSkgZGl2OjpiZWZvcmV7LS10YWctYmctaW5zZXQ6LTIuNXB4Oy0tdGFnLWJnOnZhcigtLXRhZy1ob3Zlcil9LnRhZ2lmeV9fdGFnLS1sb2FkaW5ne3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeV9fdGFnLS1sb2FkaW5nIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue2Rpc3BsYXk6bm9uZX0udGFnaWZ5X190YWctLWxvYWRpbmc6OmFmdGVyey0tbG9hZGVyLXNpemU6LjRlbTtjb250ZW50OlxcXCJcXFwiO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtvcGFjaXR5OjE7d2lkdGg6LjdlbTtoZWlnaHQ6LjdlbTt3aWR0aDp2YXIoLS1sb2FkZXItc2l6ZSk7aGVpZ2h0OnZhcigtLWxvYWRlci1zaXplKTttaW4td2lkdGg6MDtib3JkZXI6M3B4IHNvbGlkO2JvcmRlci1jb2xvcjojZWVlICNiYmIgIzg4OCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTthbmltYXRpb246cm90YXRlTG9hZGVyIC40cyBpbmZpbml0ZSBsaW5lYXI7bWFyZ2luOjAgLjVlbSAwIC0uMWVtfS50YWdpZnlfX3RhZy0tZmxhc2ggZGl2OjpiZWZvcmV7YW5pbWF0aW9uOm5vbmV9LnRhZ2lmeV9fdGFnLS1oaWRle3dpZHRoOjAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNpdGlvbjp2YXIoLS10YWctaGlkZS10cmFuc2l0aW9uKTtwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlfX3RhZy0taGlkZT5kaXY+Knt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhZ2lmeV9fdGFnLnRhZ2lmeS0tbm9BbmltPmRpdjo6YmVmb3Jle2FuaW1hdGlvbjpub25lfS50YWdpZnlfX3RhZy50YWdpZnktLW5vdEFsbG93ZWQ6bm90KC50YWdpZnlfX3RhZy0tZWRpdGFibGUpIGRpdj5zcGFue29wYWNpdHk6LjV9LnRhZ2lmeV9fdGFnLnRhZ2lmeS0tbm90QWxsb3dlZDpub3QoLnRhZ2lmeV9fdGFnLS1lZGl0YWJsZSkgZGl2OjpiZWZvcmV7LS10YWctYmc6dmFyKC0tdGFnLWludmFsaWQtYmcpO3RyYW5zaXRpb246LjJzfS50YWdpZnlfX3RhZ1tyZWFkb25seV0gLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57ZGlzcGxheTpub25lfS50YWdpZnlfX3RhZ1tyZWFkb25seV0+ZGl2OjpiZWZvcmV7YW5pbWF0aW9uOnJlYWRvbmx5U3R5bGVzIDFzIGNhbGMoLTFzICogKHZhcigtLXJlYWRvbmx5LXN0cmlwZWQpIC0gMSkpIHBhdXNlZH1Aa2V5ZnJhbWVzIHJlYWRvbmx5U3R5bGVzezAle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHZhcigtLXRhZy1iZykgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUsdmFyKC0tdGFnLWJnKSA1MCUsdmFyKC0tdGFnLWJnKSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KSAwLzVweCA1cHg7Ym94LXNoYWRvdzpub25lO2ZpbHRlcjpicmlnaHRuZXNzKC45NSl9fS50YWdpZnlfX3RhZy0tZWRpdGFibGU+ZGl2e2NvbG9yOnZhcigtLXRhZy10ZXh0LWNvbG9yLS1lZGl0KX0udGFnaWZ5X190YWctLWVkaXRhYmxlPmRpdjo6YmVmb3Jle2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLXRhZy1ob3ZlcikgaW5zZXQhaW1wb3J0YW50fS50YWdpZnlfX3RhZy0tZWRpdGFibGU+LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5X190YWctLWVkaXRhYmxlPi50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOjphZnRlcntvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSkgdHJhbnNsYXRlWCg1cHgpfS50YWdpZnlfX3RhZy0tZWRpdGFibGUudGFnaWZ5LS1pbnZhbGlkPmRpdjo6YmVmb3Jle2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLXRhZy1pbnZhbGlkLWNvbG9yKSBpbnNldCFpbXBvcnRhbnR9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57b3JkZXI6NTtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1yYWRpdXM6NTBweDtjdXJzb3I6cG9pbnRlcjtmb250OjE0cHgvMSBBcmlhbDtiYWNrZ3JvdW5kOnZhcigtLXRhZy1yZW1vdmUtYnRuLWJnKTtjb2xvcjp2YXIoLS10YWctcmVtb3ZlLWJ0bi1jb2xvcik7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDttYXJnaW4tcmlnaHQ6NC42NjY2NjY2NjY3cHg7bWFyZ2luLWxlZnQ6YXV0bztvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjouMnMgZWFzZS1vdXR9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46OmFmdGVye2NvbnRlbnQ6XFxcIsOXXFxcIjt0cmFuc2l0aW9uOi4zcyxjb2xvciAwc30udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQ6dmFyKC0tdGFnLXJlbW92ZS1idG4tYmctLWhvdmVyKX0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjpob3ZlcitkaXY+c3BhbntvcGFjaXR5Oi41fS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOmhvdmVyK2Rpdjo6YmVmb3Jle2JveC1zaGFkb3c6MCAwIDAgdmFyKC0tdGFnLWluc2V0LXNoYWRvdy1zaXplKSB2YXIoLS10YWctcmVtb3ZlLWJnLHJnYmEoMjExLDE0OCwxNDgsLjMpKSBpbnNldCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4yc30udGFnaWZ5Om5vdCgudGFnaWZ5LS1taXgpIC50YWdpZnlfX2lucHV0IGJye2Rpc3BsYXk6bm9uZX0udGFnaWZ5Om5vdCgudGFnaWZ5LS1taXgpIC50YWdpZnlfX2lucHV0ICp7ZGlzcGxheTppbmxpbmU7d2hpdGUtc3BhY2U6bm93cmFwfS50YWdpZnlfX2lucHV0e2ZsZXgtZ3JvdzoxO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDoxMTBweDttYXJnaW46NXB4O3BhZGRpbmc6dmFyKC0tdGFnLXBhZCk7bGluZS1oZWlnaHQ6bm9ybWFsO3Bvc2l0aW9uOnJlbGF0aXZlO3doaXRlLXNwYWNlOnByZS13cmFwO2NvbG9yOnZhcigtLWlucHV0LWNvbG9yKTtib3gtc2l6aW5nOmluaGVyaXR9LnRhZ2lmeV9faW5wdXQ6ZW1wdHk6OmJlZm9yZXtwb3NpdGlvbjpzdGF0aWN9LnRhZ2lmeV9faW5wdXQ6Zm9jdXN7b3V0bGluZTowfS50YWdpZnlfX2lucHV0OmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgZWFzZS1vdXQ7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGV4KDZweCl9QHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pey50YWdpZnlfX2lucHV0OmZvY3VzOjpiZWZvcmV7ZGlzcGxheTpub25lfX0udGFnaWZ5X19pbnB1dDpmb2N1czplbXB0eTo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGVhc2Utb3V0O29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZTtjb2xvcjpyZ2JhKDAsMCwwLC4yNSk7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3ItZm9jdXMpfUAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKXsudGFnaWZ5X19pbnB1dDpmb2N1czplbXB0eTo6YWZ0ZXJ7ZGlzcGxheTpub25lfX0udGFnaWZ5X19pbnB1dDo6YmVmb3Jle2NvbnRlbnQ6YXR0cihkYXRhLXBsYWNlaG9sZGVyKTtoZWlnaHQ6MWVtO2xpbmUtaGVpZ2h0OjFlbTttYXJnaW46YXV0byAwO3otaW5kZXg6MTtjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7d2hpdGUtc3BhY2U6bm93cmFwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlfS50YWdpZnlfX2lucHV0OjphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zdWdnZXN0KTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cG9zaXRpb246YWJzb2x1dGU7bWluLXdpZHRoOmNhbGMoMTAwJSAtIDEuNWVtKTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpwcmU7Y29sb3I6dmFyKC0tdGFnLXRleHQtY29sb3IpO29wYWNpdHk6LjM7cG9pbnRlci1ldmVudHM6bm9uZTttYXgtd2lkdGg6MTAwcHh9LnRhZ2lmeV9faW5wdXQgLnRhZ2lmeV9fdGFne21hcmdpbjowIDFweH0udGFnaWZ5LS1taXh7ZGlzcGxheTpibG9ja30udGFnaWZ5LS1taXggLnRhZ2lmeV9faW5wdXR7cGFkZGluZzo1cHg7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtsaW5lLWhlaWdodDoxLjU7ZGlzcGxheTpibG9ja30udGFnaWZ5LS1taXggLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtoZWlnaHQ6YXV0bztkaXNwbGF5Om5vbmU7bGluZS1oZWlnaHQ6aW5oZXJpdH0udGFnaWZ5LS1taXggLnRhZ2lmeV9faW5wdXQ6OmFmdGVye2NvbnRlbnQ6bm9uZX0udGFnaWZ5LS1zZWxlY3Q6OmFmdGVye2NvbnRlbnQ6XFxcIj5cXFwiO29wYWNpdHk6LjU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2JvdHRvbTowO2ZvbnQ6MTZweCBtb25vc3BhY2U7bGluZS1oZWlnaHQ6OHB4O2hlaWdodDo4cHg7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xNTAlLC01MCUpIHNjYWxlWCgxLjIpIHJvdGF0ZSg5MGRlZyk7dHJhbnNpdGlvbjouMnMgZWFzZS1pbi1vdXR9LnRhZ2lmeS0tc2VsZWN0W2FyaWEtZXhwYW5kZWQ9dHJ1ZV06OmFmdGVye3RyYW5zZm9ybTp0cmFuc2xhdGUoLTE1MCUsLTUwJSkgcm90YXRlKDI3MGRlZykgc2NhbGVZKDEuMil9LnRhZ2lmeS0tc2VsZWN0IC50YWdpZnlfX3RhZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDoxLjhlbTtib3R0b206MH0udGFnaWZ5LS1zZWxlY3QgLnRhZ2lmeV9fdGFnIGRpdntkaXNwbGF5Om5vbmV9LnRhZ2lmeS0tc2VsZWN0IC50YWdpZnlfX2lucHV0e3dpZHRoOjEwMCV9LnRhZ2lmeS0tZW1wdHkgLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dDtvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0b30udGFnaWZ5LS1taXggLnRhZ2lmeS0tZW1wdHkgLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9ja30udGFnaWZ5LS1mb2N1c3stLXRhZ3MtYm9yZGVyLWNvbG9yOnZhcigtLXRhZ3MtZm9jdXMtYm9yZGVyLWNvbG9yKTt0cmFuc2l0aW9uOjBzfS50YWdpZnktLWludmFsaWR7LS10YWdzLWJvcmRlci1jb2xvcjojRDM5NDk0fS50YWdpZnlfX2Ryb3Bkb3due3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTk5OTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxcHgpO292ZXJmbG93OmhpZGRlbn0udGFnaWZ5X19kcm9wZG93bltwbGFjZW1lbnQ9dG9wXXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpfS50YWdpZnlfX2Ryb3Bkb3duW3BsYWNlbWVudD10b3BdIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye2JvcmRlci10b3Atd2lkdGg6MS4xcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS50YWdpZnlfX2Ryb3Bkb3duW3Bvc2l0aW9uPXRleHRde2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEodmFyKC0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnkpLC4xKTtmb250LXNpemU6LjllbX0udGFnaWZ5X19kcm9wZG93bltwb3NpdGlvbj10ZXh0XSAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcntib3JkZXItd2lkdGg6MXB4fS50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye21heC1oZWlnaHQ6MzAwcHg7b3ZlcmZsb3c6YXV0bztvdmVyZmxvdy14OmhpZGRlbjtiYWNrZ3JvdW5kOnZhcigtLXRhZ2lmeS1kZC1iZy1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnkpO2JvcmRlci1ib3R0b20td2lkdGg6MS41cHg7Ym9yZGVyLXRvcC13aWR0aDowO2JveC1zaGFkb3c6MCAycHggNHB4IC0ycHggcmdiYSgwLDAsMCwuMik7dHJhbnNpdGlvbjouMjVzIGN1YmljLWJlemllcigwLDEsLjUsMSl9LnRhZ2lmeV9fZHJvcGRvd25fX2hlYWRlcjplbXB0eXtkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fZHJvcGRvd25fX2Zvb3RlcntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOi41ZW07cGFkZGluZzp2YXIoLS10YWdpZnktZGQtaXRlbS1wYWQpO2ZvbnQtc2l6ZTouN2VtO2ZvbnQtc3R5bGU6aXRhbGljO29wYWNpdHk6LjV9LnRhZ2lmeV9fZHJvcGRvd25fX2Zvb3RlcjplbXB0eXtkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fZHJvcGRvd24tLWluaXRpYWwgLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7bWF4LWhlaWdodDoyMHB4O3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xZW0pfS50YWdpZnlfX2Ryb3Bkb3duLS1pbml0aWFsW3BsYWNlbWVudD10b3BdIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye3RyYW5zZm9ybTp0cmFuc2xhdGVZKDJlbSl9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW17Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6dmFyKC0tdGFnaWZ5LWRkLWl0ZW0tcGFkKTttYXJnaW46MXB4O2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6MDttYXgtaGVpZ2h0OjYwcHg7bWF4LXdpZHRoOjEwMCV9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5KTtjb2xvcjojZmZmfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtOmFjdGl2ZXtmaWx0ZXI6YnJpZ2h0bmVzcygxMDUlKX0udGFnaWZ5X19kcm9wZG93bl9faXRlbS0taGlkZGVue3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW46MCAxcHg7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzpoaWRkZW47bWF4LWhlaWdodDowO3RyYW5zaXRpb246dmFyKC0tdGFnaWZ5LWRkLWl0ZW0tLWhpZGRlbi1kdXJhdGlvbiwuM3MpIWltcG9ydGFudH0udGFnaWZ5X19kcm9wZG93bl9faXRlbS0taGlkZGVuPip7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO29wYWNpdHk6MDt0cmFuc2l0aW9uOmluaGVyaXR9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBsaXN0IGljb24gKi9cXG4vKiBmb3Jlc3QgaWNvbiAqL1xcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0ODtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0taGVhZGVyLWJnLWNvbG91cjogIzdiYjJhMztcXG4gICAgLS1uYXZiYXItYmctY29sb3VyOiAjNDE1ZDJlO1xcbiAgICAtLWNvbnRlbnQtYmctY29sb3VyOiAjZmZmO1xcbiAgICAtLXByb2plY3Qtc2lnbi1iZy1jb2xvdXI6ICNhMDU4MjQ7XFxuXFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0taGVhZGVyLXdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IHZhcigtLWhlYWRlci13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3VyKTtcXG59XFxuXFxuLmdyaWRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgLyogZm9udC1zaXplOiAycmVtOyAqL1xcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmctY29sb3VyKTtcXG4gICAgLyogbWF4LXdpZHRoOiA4MCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LS1oZWFkaW5nX19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5ld1Byb2plY3RCdG4sIC5uZXdJdGVtQnRuIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRvZG9JdGVtLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kb0l0ZW0gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtaW4td2lkdGg6IDYwdnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiBTdHlsaW5nIEZvcm0gSW5wdXRzICovXFxuaW5wdXRbdHlwZT0ndGV4dCddOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50b2RvSXRlbS0tcHJpb3JpdHlfX2xhYmVsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTYwcHgsIDJweCk7XFxufVxcblxcbi50b2RvSXRlbS0tcHJpb3JpdHlfX3RleHQge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ubm9uZVNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LS1kcm9wZG93biBvcHRpb24ge1xcbiAgIGNvbG9yOiByZWQ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaXRlbUluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICByb3ctZ2FwOiA1cHg7XFxufVxcblxcbi5pdGVtSW5mby5jb250cmFjdGVkIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcm93LWdhcDogMDtcXG59XFxuXFxuLmV4cGFuZGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHBhbmRlZCB7XFxuICAgIGFuaW1hdGlvbjogb3BlbiAwLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4uY29udHJhY3RlZCB7XFxuICAgIGFuaW1hdGlvbjogY2xvc2UgMC4ycyBlYXNlLWluIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wZW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDBweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjbG9zZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDBweDtcXG4gICAgfVxcbn1cXG5cXG4vKiBTYXZlIEJ1dHRvbiBhbmQgTWVzc2FnZSAqL1xcblxcbi5zYXZlSXRlbUJ0biB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnNhdmVCdG5Db250YWluZXIsXFxuLm1lc3NhZ2VDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2F2ZU1lc3NhZ2Uge1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbi8qIE5hdmJhciAmIE5hdmJhciBDb250ZW50cyAqL1xcblxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItYmctY29sb3VyKTtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uX19idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbl9fYnV0dG9uIGltZyB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4ubmF2YmFyLS1hY3Rpb25fX2J1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2YmFyLS1hY3Rpb25zX19ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4ubmF2YmFyLS1wcm9qZWN0c19fbGlua3Mge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmF2YmFyLS1wcm9qZWN0c19fbGlua3MgPiBsaSwgYSwgYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubmF2YmFyLS1wcm9qZWN0c19fdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5uYXZiYXIgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LS1zaWducG9zdCBhIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucHJvamVjdC0tc2lnbnBvc3Qge1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcm9qZWN0LXNpZ24tYmctY29sb3VyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHRleHQtaW5kZW50OiAxMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ucHJvamVjdC0tc2lnbnBvc3Q6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHZhcigtLXByb2plY3Qtc2lnbi1iZy1jb2xvdXIpO1xcbiAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4vKiBOZXcgUHJvamVjdCBNb2RhbCBGb3JtICovXFxuLm1vZGFsQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4ubW9kYWxDb250YWluZXIuc2hvd01vZGFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLS1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwtLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3QtLW1vZGFsX19idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LS1tb2RhbF9fYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbn1cXG5cXG4jc3VibWl0TW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItYmctY29sb3VyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuI3N1Ym1pdE1vZGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NGIyNDtcXG59XFxuXFxuI2Nsb3NlTW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbiNjbG9zZU1vZGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MSwgMTY4LCAxNjgpO1xcbn1cXG5cXG4udG9kYXktLXRpdGxlIHtcXG59XFxuXFxuLnRvZGF5LS10aXRsZV9faGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4udG9kYXktLXRpdGxlX19kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0EsY0FBYztBQUVkLGdCQUFnQjs7QUFHaEI7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJOzs7O2lCQUlhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QywyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQ0FBaUM7O0lBRWpDLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ks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QUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogbGlzdCBpY29uICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXFxcIik7XFxuLyogZm9yZXN0IGljb24gKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcXFwiKTtcXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRlZmF1bHQtZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWhlYWRlci1iZy1jb2xvdXI6ICM3YmIyYTM7XFxuICAgIC0tbmF2YmFyLWJnLWNvbG91cjogIzQxNWQyZTtcXG4gICAgLS1jb250ZW50LWJnLWNvbG91cjogI2ZmZjtcXG4gICAgLS1wcm9qZWN0LXNpZ24tYmctY29sb3VyOiAjYTA1ODI0O1xcblxcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWhlYWRlci13aWR0aDogMTAwdnc7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiB2YXIoLS1oZWFkZXItd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG91cik7XFxufVxcblxcbi5ncmlkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnLWNvbG91cik7XFxuICAgIC8qIG1heC13aWR0aDogODAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC0taGVhZGluZ19fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXdQcm9qZWN0QnRuLCAubmV3SXRlbUJ0biB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvSXRlbS5hY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG9JdGVtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWluLXdpZHRoOiA2MHZ3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogU3R5bGluZyBGb3JtIElucHV0cyAqL1xcbmlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG9kb0l0ZW0tLXByaW9yaXR5X19sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MHB4LCAycHgpO1xcbn1cXG5cXG4udG9kb0l0ZW0tLXByaW9yaXR5X190ZXh0IHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLm5vbmVTZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS0tZHJvcGRvd24gb3B0aW9uIHtcXG4gICBjb2xvcjogcmVkO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLml0ZW1JbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4uaXRlbUluZm8uY29udHJhY3RlZCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi5leHBhbmRlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBhbmltYXRpb246IG9wZW4gMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmNvbnRyYWN0ZWQge1xcbiAgICBhbmltYXRpb246IGNsb3NlIDAuMnMgZWFzZS1pbiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2xvc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIH1cXG59XFxuXFxuLyogU2F2ZSBCdXR0b24gYW5kIE1lc3NhZ2UgKi9cXG5cXG4uc2F2ZUl0ZW1CdG4ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5zYXZlQnRuQ29udGFpbmVyLFxcbi5tZXNzYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNhdmVNZXNzYWdlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4vKiBOYXZiYXIgJiBOYXZiYXIgQ29udGVudHMgKi9cXG5cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWJnLWNvbG91cik7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbl9fYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2YmFyLS1hY3Rpb25fX2J1dHRvbiBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uX19idXR0b24gc3BhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uc19fYm90dG9tIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX2xpbmtzIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX2xpbmtzID4gbGksIGEsIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubmF2YmFyIGxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC0tc2lnbnBvc3QgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0IHtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJvamVjdC1zaWduLWJnLWNvbG91cik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0ZXh0LWluZGVudDogMTAlO1xcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMjBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB2YXIoLS1wcm9qZWN0LXNpZ24tYmctY29sb3VyKTtcXG4gICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogTmV3IFByb2plY3QgTW9kYWwgRm9ybSAqL1xcbi5tb2RhbENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuLm1vZGFsQ29udGFpbmVyLnNob3dNb2RhbCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC0taGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLS1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LS1tb2RhbF9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC0tbW9kYWxfX2J1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG59XFxuXFxuI3N1Ym1pdE1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWJnLWNvbG91cik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNzdWJtaXRNb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRiMjQ7XFxufVxcblxcbiNjbG9zZU1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jY2xvc2VNb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzEsIDE2OCwgMTY4KTtcXG59XFxuXFxuLnRvZGF5LS10aXRsZSB7XFxufVxcblxcbi50b2RheS0tdGl0bGVfX2hlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnRvZGF5LS10aXRsZV9fZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiAocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgbW9udGhzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTsgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcblxuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRZZWFyc1xuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHllYXJzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHllYXJzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB5ZWFycyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSB5ZWFycyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkWWVhcnMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBTZXAgMDEgMjAxOSAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFllYXJzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTW9udGhzKGRpcnR5RGF0ZSwgYW1vdW50ICogMTIpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRZZWFycyBmcm9tIFwiLi4vYWRkWWVhcnMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1YlllYXJzXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB5ZWFycyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgeWVhcnMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB5ZWFycyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDUgeWVhcnMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3ViWWVhcnMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFR1ZSBTZXAgMDEgMjAwOSAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1YlllYXJzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkWWVhcnMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWdpZnkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhZ2lmeS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdG9kb0l0ZW1GYWN0b3J5IGZyb20gJy4vdG9kby5qcyc7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIG5vdGVzO1xuICAgIHRvZG9JdGVtcyA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG9kb0l0ZW0gT2JqZWN0cyB0byBKU09OXG4gICAgc2VsZWN0SXRlbVByb3BlcnRpZXMoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ09iamVjdHMgPSBPYmplY3QudmFsdWVzKHRoaXMudG9kb0l0ZW1zKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE9iaiA9IHt9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFByb3BlcnRpZXMgPSAoXG4gICAgICAgICAgICAgICAgKHsgdGl0bGUsIG5vdGVzLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkYXRlLCBkdWVEYXRlLCBfdGFncywgY29tcGxldGlvbiB9KSA9PlxuICAgICAgICAgICAgICAgICh7IHRpdGxlLCBub3RlcywgcHJpb3JpdHksIGNoZWNrbGlzdCwgZGF0ZSwgZHVlRGF0ZSwgX3RhZ3MsIGNvbXBsZXRpb24gfSlcbiAgICAgICAgICAgICkoaXRlbSk7XG5cbiAgICAgICAgICAgIGZpbmFsT2JqW2l0ZW0udXVpZF0gPSBzZWxlY3RlZFByb3BlcnRpZXM7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxPYmo7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RyaW5nT2JqZWN0cztcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgLyogXG4gICAgICAgIEtleXM6IHRoaXMubmFtZVxuICAgICAgICBWYWx1ZXM6IHRvZG9JdGVtcyBvYmplY3RcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgb2JqZWN0TWVyZ2UgPSB7fVxuICAgICAgICBjb25zdCBhcnJheU9mT2JqZWN0cyA9IHRoaXMuc2VsZWN0SXRlbVByb3BlcnRpZXMoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG8gb2YgYXJyYXlPZk9iamVjdHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob2JqZWN0TWVyZ2UsIG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeShvYmplY3RNZXJnZSkpO1xuICAgIH1cblxuICAgIF9yZWNvbnN0cnVjdFRvZG9JdGVtT2JqZWN0cyhfcGFyc2UpIHtcbiAgICAgICAgLy8gY2xlYXIgY3VycmVudCB0b2RvIGl0ZW1zIGluIHByb2plY3RcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoX3BhcnNlKSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRvZG9JdGVtRmFjdG9yeSh2YWx1ZS50aXRsZSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSByZW1haW5pbmcgZmllbGRzIHVzaW5nIHNldHRlcnNcbiAgICAgICAgICAgIGl0ZW0uc2V0Tm90ZXModmFsdWUubm90ZXMpO1xuICAgICAgICAgICAgaXRlbS5zZXRQcmlvcml0eSh2YWx1ZS5wcmlvcml0eSk7XG4gICAgICAgICAgICBpdGVtLnNldENoZWNrbGlzdCh2YWx1ZS5jaGVja2xpc3QpO1xuICAgICAgICAgICAgaXRlbS5zZXREYXRlKHZhbHVlLmRhdGUpO1xuICAgICAgICAgICAgaXRlbS5zZXREdWVEYXRlKHZhbHVlLmR1ZURhdGUpO1xuICAgICAgICAgICAgaXRlbS5zZXRUYWdzKHZhbHVlLl90YWdzKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0Q29tcGxldGlvbih2YWx1ZS5jb21wbGV0aW9uKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0VVVJRChrZXkpO1xuICAgICAgICAgICAgLy8gYXNzaWduIHJlY29uc3RydWN0ZWQgb2JqZWN0IGJhY2sgdG8gaW5zdGFuY2UgcHJvcGVydHlcbiAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zW2tleV0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG9kb0l0ZW1zKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3QgcGFyc2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJzZSk7XG4gICAgICAgIHRoaXMuX3JlY29uc3RydWN0VG9kb0l0ZW1PYmplY3RzKHBhcnNlKTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0b2RvSXRlbUZhY3RvcnkodGl0bGUpO1xuICAgICAgICAvLyB0aGlzLnRvZG9JdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnRvZG9JdGVtc1tpdGVtLnV1aWRdID0gaXRlbTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKHV1aWQpIHtcbiAgICAgICAgaWYodGhpcy50b2RvSXRlbXNbdXVpZF0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRvZG9JdGVtc1t1dWlkXTtcblxuICAgICAgICAgICAgbGV0IHN0b3JlZEl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZWRJdGVtc1t1dWlkXTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkSXRlbXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJdGVtOiAke3V1aWR9IGRvZXMgbm90IGV4aXN0IWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRvZG9JdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9JdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgICAqL1xuICAgIHNldCBub3Rlcyh0ZXh0KSB7XG4gICAgICAgIHRoaXMuX25vdGVzID0gdGV4dDtcbiAgICB9XG5cbiAgICBnZXRVbmlxdWVUYWdzKCkge1xuICAgICAgICBjb25zdCB0YWdzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnRvZG9JdGVtcylcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnRhZ3MpXG4gICAgICAgICAgICAuZmxhdCgpO1xuXG4gICAgICAgIGNvbnN0IHVuaXF1ZUFycmF5ID0gQXJyYXkuZnJvbShuZXcgU2V0KHRhZ3MpKTtcbiAgICAgICAgcmV0dXJuIHVuaXF1ZUFycmF5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgcmV0dXJuIHA7XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuY29uc3QgdGFnTWl4aW4gPSB7XG4gICAgZ2V0VGFncyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWdzO1xuICAgIH0sXG5cbiAgICB1cGRhdGVUYWdzICgpIHtcbiAgICAgICAgaWYodGhpcy50YWdpZnkudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhZ3MgPSB0aGlzLnRhZ2lmeS52YWx1ZS5tYXAoeCA9PiB4LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRUYWdpZnlUYWcgKHQpIHtcbiAgICAgICAgdGhpcy50YWdpZnkuYWRkVGFncyh0KTtcbiAgICB9LFxuXG4gICAgLy8gVXNlZCBvbmx5IHRvIGxvYWQgdGFncyBmb3IgbW9jayB0b2RvSXRlbXMgaW4gcHJvamVjdC5qc1xuICAgIF9hcHBlbmRUYWcgKCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtfLCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZih2YWwpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFncy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTm9uLXN0cmluZyBhcmd1bWVudCBkZXRlY3RlZDogJHt2YWx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5jb25zdCBjaGVja2xpc3RNaXhpbiA9IHtcbiAgICBwcmludENoZWNrbGlzdCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tsaXN0KTtcbiAgICB9LFxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuY29uc3Qgc2V0dGVyTWl4aW4gPSB7XG4gICAgc2V0VGl0bGUgKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9LFxuXG4gICAgc2V0Tm90ZXMgKG5vdGVzKSB7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB9LFxuXG4gICAgc2V0Q2hlY2tsaXN0IChjaGVja2xpc3QpIHtcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgfSxcblxuICAgIHNldERhdGUgKGRhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9LFxuXG4gICAgc2V0RHVlRGF0ZSAoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH0sXG5cbiAgICBzZXRUYWdzICh0YWdzKSB7XG4gICAgICAgIHRoaXMuX3RhZ3MgPSB0YWdzO1xuICAgIH0sXG5cbiAgICBzZXRDb21wbGV0aW9uIChjb21wbGV0aW9uKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGlvbiA9IGNvbXBsZXRpb247XG4gICAgfSxcblxuICAgIHNldFVVSUQgKGlkKSB7XG4gICAgICAgIHRoaXMudXVpZCA9IGlkO1xuICAgIH0sXG5cbiAgICBzZXRQcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb25zIHVzZWQgdG8gbG9nZ2luZyBhbmQgZGVidWdnaW5nIHB1cnBvc2VzXG5jb25zdCBkZWJ1Z01peGluID0ge1xuICAgIHByaW50U3VtbWFyeUluT2JqZWN0ICgpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIFRpdGxlOiAke3RoaXMudGl0bGV9LFxuICAgICAgICAgICAgRGF0ZTogJHt0aGlzLmRhdGV9LFxuICAgICAgICAgICAgRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfSxcbiAgICAgICAgICAgIFRhZ3M6ICR7dGhpcy5fdGFnc30sXG4gICAgICAgICAgICBOb3RlczogJHt0aGlzLm5vdGVzfSxcbiAgICAgICAgICAgIENoZWNrbGlzdDogJHt0aGlzLl9jaGVja2xpc3R9LFxuICAgICAgICAgICAgQ29tcGxldGlvbjogJHt0aGlzLmNvbXBsZXRpb259LFxuICAgICAgICAgICAgVVVJRDogJHt0aGlzLnV1aWR9XG4gICAgICAgIGA7XG4gICAgfVxufVxuXG4vLyB1c2luZyBhIGNsb3N1cmUgdG8gZW5zdXJlIGEgbmV3IGl0ZW1UYWdzIEFycmF5IGlzIGNyZWF0ZWQgZXZlcnkgdGltZSB0aGlzIGlzIGNhbGxlZFxuY29uc3QgZ2V0RGVmYXVsdEFyZ3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpdGVtRGF0ZTogbnVsbCwgXG4gICAgICAgIGl0ZW1EdWVEYXRlOiBudWxsLCBcbiAgICAgICAgaXRlbVRhZ3M6IG5ldyBBcnJheSgpLFxuICAgICAgICBpdGVtVGFnaWZ5OiBudWxsLFxuICAgICAgICBpdGVtTm90ZXM6IG51bGwsXG4gICAgICAgIGl0ZW1Qcmlvcml0eTogbnVsbCxcbiAgICAgICAgaXRlbUNoZWNrbGlzdDogbmV3IEFycmF5KCksXG4gICAgICAgIGl0ZW1Db21wbGV0aW9uOiBmYWxzZSxcbiAgICB9XG59XG5cbi8vIFJlc3BvbnNpYmlsaXR5OiByZXR1cm4vY29uc3RydWN0IGEgdG9kb0l0ZW0gb2JqZWN0LCB3aGljaCByZXByZXNlbnRzIGEgc2luZ2xlIHRvZG8gaXRlbVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0l0ZW1GYWN0b3J5KGl0ZW1UaXRsZSwgey4uLmRlZn0gPSBnZXREZWZhdWx0QXJncygpKSB7XG4gICAgY29uc3QgdGl0bGUgPSBpdGVtVGl0bGU7XG4gICAgY29uc3QgZGF0ZSA9IGRlZi5pdGVtRGF0ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZGVmLml0ZW1EdWVEYXRlO1xuICAgIGNvbnN0IHRhZ3MgPSBkZWYuaXRlbVRhZ3M7XG4gICAgY29uc3QgdGFnaWZ5ID0gZGVmLml0ZW1UYWdpZnk7XG4gICAgY29uc3Qgbm90ZXMgPSBkZWYuaXRlbU5vdGVzO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZGVmLml0ZW1Qcmlvcml0eTtcbiAgICBjb25zdCBfY2hlY2tsaXN0ID0gZGVmLml0ZW1DaGVja2xpc3Q7XG4gICAgbGV0IGNvbXBsZXRpb24gPSBkZWYuaXRlbUNvbXBsZXRpb247XG5cbiAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XG5cbiAgICBjb25zdCBwcmludFN1bW1hcnkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICBUaXRsZTogJHt0aXRsZX0sXG4gICAgICAgICAgICBEYXRlOiAke2RhdGV9LFxuICAgICAgICAgICAgRHVlIERhdGU6ICR7ZHVlRGF0ZX0sXG4gICAgICAgICAgICBUYWdzOiAke3RhZ3N9LFxuICAgICAgICAgICAgTm90ZXM6ICR7bm90ZXN9LFxuICAgICAgICAgICAgQ2hlY2tsaXN0OiAke19jaGVja2xpc3R9LFxuICAgICAgICAgICAgQ29tcGxldGlvbjogJHtjb21wbGV0aW9ufSxcbiAgICAgICAgICAgIFVVSUQ6ICR7dXVpZH1cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuY29tcGxldGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmFjdG9yeU1ldGhvZHMgPSB7XG4gICAgICAgIHByaW50U3VtbWFyeSxcbiAgICAgICAgdG9nZ2xlQ29tcGxldGlvblxuICAgIH1cblxuICAgIC8vIGNvcGllcyBcInRhZ1wiIHByb3BlcnRpZXMgaW50byBcIml0ZW1cIiBwcm9wZXJ0aWVzXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmFzc2lnbih0YWdNaXhpbiwgY2hlY2tsaXN0TWl4aW4sIHNldHRlck1peGluLCBkZWJ1Z01peGluKTsgIC8vICh0YXJnZXRPYmosIHNvdXJjZU9iailcbiAgICBcbiAgICAvLyBjcmVhdGVzIGEgbmV3IG9iamVjdCwgdXNpbmcgYW4gZXhpc3Rpbmcgb2JqZWN0IGFzIGl0cyBwcm90b3R5cGUgb2YgbmV3bHkgY3JlYXRlZCBvYmplY3RcbiAgICBsZXQgdG9kb0l0ZW1PYmogPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICBcbiAgICAvLyBcIm1peC1pblwiIG1ldGhvZHMgZGVmaW5lZCBpbiBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgdG9kb0l0ZW1PYmogPSBPYmplY3QuYXNzaWduKHRvZG9JdGVtT2JqLCBmYWN0b3J5TWV0aG9kcyk7XG5cbiAgICB0b2RvSXRlbU9iai50aXRsZSA9IHRpdGxlO1xuICAgIHRvZG9JdGVtT2JqLmRhdGUgPSBkYXRlO1xuICAgIHRvZG9JdGVtT2JqLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRvZG9JdGVtT2JqLl90YWdzID0gdGFncztcbiAgICB0b2RvSXRlbU9iai50YWdpZnkgPSB0YWdpZnk7XG4gICAgdG9kb0l0ZW1PYmouY2hlY2tsaXN0ID0gX2NoZWNrbGlzdDtcbiAgICB0b2RvSXRlbU9iai5jb21wbGV0aW9uID0gY29tcGxldGlvbjtcbiAgICB0b2RvSXRlbU9iai51dWlkID0gdXVpZDtcbiAgICB0b2RvSXRlbU9iai5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHRvZG9JdGVtT2JqO1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0LCBhZGRZZWFycywgc3ViWWVhcnMsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuLy8gSW1wb3J0IFRhZ2lmeVxuaW1wb3J0IFRhZ2lmeSBmcm9tICdAeWFpcmVvL3RhZ2lmeSc7XG5pbXBvcnQgJ0B5YWlyZW8vdGFnaWZ5L2Rpc3QvdGFnaWZ5LmNzcyc7XG5cbi8vIEltYWdlc1xuaW1wb3J0IHBsYW50SW1nIGZyb20gJy4vaW1hZ2VzL3BsYW50LnBuZyc7XG5pbXBvcnQgZm9yZXN0SW1nIGZyb20gJy4vaW1hZ2VzL2ZvcmVzdC5wbmcnO1xuaW1wb3J0IGJlYXZlckltZyBmcm9tICcuL2ltYWdlcy9iZWF2ZXIucG5nJztcbmltcG9ydCBsdW1iZXJqYWNrSW1nIGZyb20gJy4vaW1hZ2VzL2x1bWJlcmphY2tpbmcucG5nJztcbmltcG9ydCBzdW5yaXNlSW1nIGZyb20gJy4vaW1hZ2VzL3N1bnJpc2UucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHZpZXcoKSB7XG4gICAgbGV0IGVsZW1lbnRJRCA9IDA7XG4gICAgbGV0IGNvbmZpZyA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBiaW5kQ29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSwgY2xhc3NOYW1lPW51bGwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgICAgICBcbiAgICAgICAgaWYoY2xhc3NOYW1lKSB7ICAgIFxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5hdkFjdGlvbihzcmMsIHRleHQsIGxpc3RlbmVyRnVuYykge1xuICAgICAgICBjb25zdCBhY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IGFjdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgYWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBhY3Rpb25JY29uLnNyYyA9IHNyYztcbiAgICAgICAgYWN0aW9uVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgYWN0aW9uRGl2LmNsYXNzTmFtZSA9ICduYXZiYXItLWFjdGlvbl9fYnV0dG9uIG5ld0l0ZW1CdG4nO1xuICAgICAgICBhY3Rpb25EaXYuaHJlZiA9ICcjJztcbiAgICAgICAgYWN0aW9uRGl2LmFwcGVuZChhY3Rpb25JY29uLCBhY3Rpb25UZXh0KTtcbiAgICAgICAgYWN0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXJGdW5jKTtcblxuICAgICAgICByZXR1cm4gYWN0aW9uRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUltYWdlQnV0dG9uKHNyYywgY2xhc3NOYW1lLCBsaXN0ZW5lckZ1bmMpIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5ld0l0ZW1CdG4udHlwZSA9ICdpbWFnZSc7XG4gICAgICAgIG5ld0l0ZW1CdG4uc3JjID0gc3JjXG4gICAgICAgIG5ld0l0ZW1CdG4ubmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgbmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyRnVuYyk7XG4gICAgICAgIG5ld0l0ZW1CdG4uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gbmV3SXRlbUJ0bjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRlSW5wdXQobGFiZWxOYW1lLCBmaWVsZE5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBhZGRZZWFycyhjdXJyZW50RGF0ZSwgMSk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBzdWJZZWFycyhjdXJyZW50RGF0ZSwgMSk7XG4gICAgICAgIFxuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbE5hbWU7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlSW5wdXQubmFtZSA9IGZpZWxkTmFtZTtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICBkYXRlSW5wdXQubWluID0gZm9ybWF0KG1pbkRhdGUsICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIGRhdGVJbnB1dC5tYXggPSBmb3JtYXQobWF4RGF0ZSwgJ3l5eXktTU0tZGQnKTtcblxuICAgICAgICBkYXRlRGl2LmFwcGVuZChkYXRlTGFiZWwsIGRhdGVJbnB1dClcbiAgICAgICAgcmV0dXJuIGRhdGVEaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0UHJvamVjdEhlYWRpbmcocXVlcnksIHByb2plY3ROYW1lLCByZXBsYWNlPWZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgICAgICBjb25zdCBoZWFkaW5nRmxleENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LS1oZWFkaW5nX19jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBwcm9qZWN0SGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG4gICAgICAgIGhlYWRpbmdGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50SGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LS1oZWFkaW5nX19jb250YWluZXInKTtcblxuICAgICAgICBpZihyZXBsYWNlICYmIGN1cnJlbnRIZWFkaW5nQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0YXJnZXREaXYucmVwbGFjZUNoaWxkKGhlYWRpbmdGbGV4Q29udGFpbmVyLCBjdXJyZW50SGVhZGluZ0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXREaXYuYXBwZW5kQ2hpbGQoaGVhZGluZ0ZsZXhDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0UHJvamVjdEl0ZW1Gb3JtKHF1ZXJ5LCBpdGVtKSB7XG4gICAgICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgJ3RvZG8nIGNoZWNrYm94XG4gICAgICAgIGNvbnN0IHRvZ2dsZUl0ZW1Db21wbGV0aW9uT25DbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY29uZmlnLmN1cnJlbnRQcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLnV1aWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcblxuICAgICAgICAgICAgaXRlbS50b2dnbGVDb21wbGV0aW9uKCk7XG4gICAgICAgICAgICBwcm9qZWN0U3RvcmVbaXRlbUlkXS5jb21wbGV0aW9uID0gaXRlbS5jb21wbGV0aW9uO1xuICAgICAgICAgICAgLy8gdXBkYXRlIHN0b3JlZCBkYXRhIHdpdGggbmV3IGNvbXBsZXRpb24gc3RhdHVzXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3RvcmUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gJ2l0ZW1Db21wbGV0aW9uJztcbiAgICAgICAgICAgIGlucHV0LmlkID0gZWxlbWVudElEOyAvLyBsaW5rIFwiaWRcIiBhbmQgXCJmb3JcIlxuXG4gICAgICAgICAgICBpZihpdGVtLmNvbXBsZXRpb24pIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlSXRlbUNvbXBsZXRpb25PbkNsaWNrKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBpbnB1dFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0RXhjbHVzaXZlU2libGluZ05vZGVzID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCBzaWJsaW5ncyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SUQgPSBub2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgICAgICAgICBjb25zdCBvdGhlclRvZG9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC50b2RvSXRlbVtpZF06bm90KFtpZD1cIiR7Y3VycmVudElEfVwiXSlgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQXJyYXkuZnJvbShvdGhlclRvZG9JdGVtcykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSW5mbyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLml0ZW1JbmZvJyk7XG4gICAgICAgICAgICAgICAgc2libGluZ3MucHVzaChpdGVtSW5mbylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2libGluZ3M7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYWtlVG9kb0l0ZW1FeHBhbmQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ0luZm9EaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtSW5mbycpO1xuXG4gICAgICAgICAgICBpZihzaWJsaW5nSW5mb0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ0luZm9EaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWJsaW5nSW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdjb250cmFjdGVkJyk7XG4gICAgICAgICAgICBzaWJsaW5nSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHBhcmVudCBub2RlIGFjdGl2ZSBzbyB0aGF0IGl0IGNhbiBhY3RpdmF0ZSBib3JkZXJzXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlSXRlbVRpdGxlID0gKHRpdGxlVHlwZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRpdGxlRWxlbWVudDtcbiAgICAgICAgICAgIGlmKHRpdGxlVHlwZSA9PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuZGVmYXVsdFZhbHVlID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQubmFtZSA9ICdpdGVtVGl0bGUnO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pZCA9ICdpdGVtVGl0bGUnO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wbGFjZWhvbGRlciA9ICdUb2RvIEl0ZW0nO1xuICAgICAgICAgICAgICAgIHRpdGxlRWxlbWVudCA9IGlucHV0RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGl0bGVUeXBlID09ICdsYWJlbCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgdGl0bGVFbGVtZW50ID0gbGFiZWxFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUxhYmVsID0gKF90aXRsZVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlSXRlbVRpdGxlKF90aXRsZVR5cGUpO1xuICAgICAgICAgICAgLyogTkI6IFdlIGRvbid0IGxpbmsgdGhlICdpZCcgYW5kICdmb3InIGVsZW1lbnRzIGJlY2F1c2UgdXNlcnMnIGNsaWNraW5nIG9uIHRoZSBsYWJlbCBzaG91bGRuJ3QgdG9nZ2xlIHRoZSBjaGVja2JveC5cbiAgICAgICAgICAgIC8vIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZWxlbWVudElEKTsgKi9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYWRkIGNhbGxiYWNrIHRvIGV4cGFuZCBpdGVtIG9uIGNsaWNrXG4gICAgICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgaGlkZSBvdGhlciBpdGVtc1xuICAgICAgICAgICAgICAgIGNvbnN0IG90aGVySXRlbUluZm8gPSBnZXRFeGNsdXNpdmVTaWJsaW5nTm9kZXMoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIG90aGVySXRlbUluZm8uZm9yRWFjaChpbmZvRGl2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5mb0Rpdi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnY29udHJhY3RlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gbWFrZSBjdXJyZW50IGl0ZW0gZXhwYW5kXG4gICAgICAgICAgICAgICAgbWFrZVRvZG9JdGVtRXhwYW5kKGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlSXRlbUluZm9FeHBhbmRhYmxlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm90ZXNJbnB1dCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIG5vdGVzLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgbm90ZXMubmFtZSA9ICdpdGVtTm90ZXMnO1xuICAgICAgICAgICAgICAgIG5vdGVzLnBsYWNlaG9sZGVyID0gJ05vdGVzJztcbiAgICAgICAgICAgICAgICBub3Rlcy5kZWZhdWx0VmFsdWUgPSAoaXRlbS5ub3RlcykgPyBpdGVtLm5vdGVzIDogJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdGVzO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbVRhc2tMaXN0RGl2ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpdGVtLmNoZWNrbGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gdGFzaztcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0TGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrbGlzdERpdjtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGVzRGl2ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gY3JlYXRlRGF0ZUlucHV0KCdEYXRlOiAnLCAnaXRlbURhdGUnLCAoaXRlbS5kYXRlKSA/IGl0ZW0uZGF0ZSA6IG51bGwpO1xuICAgICAgICAgICAgICAgIC8vICdGaWd1cmUgU3BhY2UnIHVzZWQgaW4gZHVlRGF0ZSBsYWJlbCB0byBhbGlnbiB0aGUgZGF0ZSBwaWNrZXJzIChzZWU6IGh0dHBzOi8vcXdlcnR5LmRldi93aGl0ZXNwYWNlLylcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlRGF0ZUlucHV0KCdEdWU64oCHJywgJ2l0ZW1EdWVEYXRlJywgKGl0ZW0uZHVlRGF0ZSkgPyBpdGVtLmR1ZURhdGUgOiBudWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkYXRlRWxlbWVudHMuYXBwZW5kKGRhdGUsIGR1ZURhdGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlRWxlbWVudHM7XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICBjb25zdCB0YWdzRGl2ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICd0YWdzSW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSAnVGFncyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0RWxlbWVudDtcblxuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgLy8gVHVybnMgdGV4dCBpbnB1dCBpbnRvIGEgVGFnaWZ5IGlucHV0LCBlbmFibGluZyB0YWcgYWRkb25cbiAgICAgICAgICAgIGNvbnN0IHRhZ2lmeUlucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFnaWZ5SW5zdGFuY2UgPSBuZXcgVGFnaWZ5KGlucHV0KTtcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0YWdpZnlFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBUYWdpZnkgb2JqZWN0IGFzIGEgdG9kb0l0ZW0gcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpdGVtLnRhZ2lmeSA9IHRhZ2lmeUluc3RhbmNlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0YWdpZnlFdmVudExpc3RlbmVyIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlVGFncygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncHJpb3JpdHlEcm9wZG93bicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbJ1NlbGVjdCBQcmlvcml0eScsICdMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICAgICAgICAgICAgICAgIGRyb3Bkb3duLm5hbWUgPSAnaXRlbVByaW9yaXR5JztcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdGllcy5mb3JFYWNoKHByaW9yaXR5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBBcnJheS5mcm9tKGRyb3Bkb3duKS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PSBpdGVtLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoZmlsdGVyLmxlbmd0aCA9PSAxKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eURpdi5hcHBlbmQobGFiZWwsIGRyb3Bkb3duKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJpb3JpdHlEaXY7XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICBjb25zdCBzYXZlQnRuID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzYXZlRm9ybURhdGFUb01lbW9yeSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvSXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSB7fVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlRm9ybWF0dGVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihrZXkuaW5jbHVkZXMoJ0RhdGUnKSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXR0ZWQgPSBmb3JtYXQobmV3IERhdGUodmFsdWUpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWFkIGZvcm1EYXRhIChpdGVyYXRvcikgdmFsdWVzIGludG8gYW4gb2JqZWN0LCBmb3JtYXR0aW5nIHdoZXJlIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IGZyb20gSVNPIHRvICd5eXl5LU1NLWRkJyBmb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpdGVtRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1PYmpba2V5XSA9IGRhdGVGb3JtYXR0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW1EdWVEYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybU9ialtrZXldID0gZGF0ZUZvcm1hdHRlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybU9ialtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRUaXRsZShmb3JtT2JqLml0ZW1UaXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0Tm90ZXMoZm9ybU9iai5pdGVtTm90ZXMpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldFByaW9yaXR5KGZvcm1PYmouaXRlbVByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXREYXRlKGZvcm1PYmouaXRlbURhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldER1ZURhdGUoZm9ybU9iai5pdGVtRHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0Q29tcGxldGlvbiggKGZvcm1PYmouaXRlbUNvbXBsZXRpb24pID8gdHJ1ZSA6IGZhbHNlICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1PYmopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnc2F2ZUl0ZW1CdG4nO1xuICAgICAgICAgICAgICAgIGJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICAgICAgYnRuLnZhbHVlID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZUZvcm1EYXRhVG9NZW1vcnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBidG47XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvSXRlbScpLmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY3VycmVudFByb2plY3QuZGVsZXRlSXRlbShpdGVtSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5UT0RPX0NPTlRBSU5FUik7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgY2x1bXN5IC0gaXMgdGhlcmUgYSBiZXR0ZXIgc29sdXRpb24/XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wcm9qZWN0c1tjb25maWcuY3VycmVudFByb2plY3QubmFtZV0ucnVuKCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcmVmcmVzaCBwcm9qZWN0IG51bUl0ZW1zIG9uIGNyZWF0ZSBvciBkZWxldGVcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVCdXR0b24oJ0RlbGV0ZSBJdGVtJywgJ2RlbGV0ZUl0ZW1CdG4nLCBkZWxldGVJdGVtKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVQcm9qZWN0TGlzdCgpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGVCdG47XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25Hcm91cCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpdGVtQnV0dG9uR3JvdXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwLmFwcGVuZChkZWxldGVCdG4sIHNhdmVCdG4pO1xuXG4gICAgICAgICAgICAvLyBjb250ZW50IHRoYXQgd2lsbCBzaG93IChleHBhbmQpIHdoZW4gaXRlbSB0aXRsZSBpcyBjbGlja2VkXG4gICAgICAgICAgICBjb25zdCBleHBhbmRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBleHBhbmRhYmxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1JbmZvJywgJ2NvbnRyYWN0ZWQnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICBleHBhbmRhYmxlLmFwcGVuZChub3Rlc0lucHV0LCBwcmlvcml0eURyb3Bkb3duLCBpdGVtVGFza0xpc3REaXYsIGRhdGVzRGl2LCB0YWdzRGl2LCBidXR0b25Hcm91cCk7XG5cbiAgICAgICAgICAgIHRhZ2lmeUlucHV0KGV4cGFuZGFibGUucXVlcnlTZWxlY3RvcignLnRhZ3NJbnB1dCcpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCB0YWdzIGlmIHRoZXkgZXhpc3RcbiAgICAgICAgICAgIGlmIChpdGVtLl90YWdzICYmIGl0ZW0udGFnaWZ5KSB7XG4gICAgICAgICAgICAgICAgaXRlbS50YWdpZnkuYWRkVGFncyhpdGVtLl90YWdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGV4cGFuZGFibGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtSW5mb0Zvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywgJ3RvZG9JdGVtJyk7XG4gICAgICAgIGl0ZW1JbmZvRm9ybS5pZCA9IGl0ZW0udXVpZDtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KCk7XG5cbiAgICAgICAgbGV0IF90aXRsZVR5cGUgPSAnaW5wdXQnO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICd0b2RvSXRlbS0tcHJpb3JpdHlfX2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAndG9kb0l0ZW0tLXByaW9yaXR5X190ZXh0Jyk7XG4gICAgICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKGl0ZW0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0hpZ2gnOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ25vbmVTZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmQocHJpb3JpdHlUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IGNyZWF0ZUxhYmVsKF90aXRsZVR5cGUpO1xuICAgICAgICBpdGVtSW5mb0Zvcm0uc2V0QXR0cmlidXRlKCd0aXRsZVR5cGUnLCBfdGl0bGVUeXBlKTtcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgICAgIFxuICAgICAgICBpdGVtSW5mb0Zvcm0uYXBwZW5kKGNoZWNrYm94LCBpdGVtTGFiZWwsIHByaW9yaXR5TGFiZWwsIGNyZWF0ZUl0ZW1JbmZvRXhwYW5kYWJsZSgpKTtcbiAgICAgICAgdGFyZ2V0RGl2LmFwcGVuZENoaWxkKGl0ZW1JbmZvRm9ybSk7XG5cbiAgICAgICAgLy8gZW5zdXJlIGVhY2ggaW5wdXQtbGFiZWwgcGFpciBoYXMgYSB1bmlxdWUgaW50ZWdlciBpZGVudGlmaWVyXG4gICAgICAgIGVsZW1lbnRJRCsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydEl0ZW1DaGFuZ2VMaXN0ZW5lcihpZCwgcHJvamVjdCkge1xuICAgICAgICBjb25zdCBzaG93SXRlbVNhdmVkTWVzc2FnZU9uRm9ybUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVTYXZlU3BhbiA9IChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVzc2FnZUNvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU3Bhbik7XG4gICAgXG4gICAgICAgICAgICAgICAgbWVzc2FnZVNwYW4udGV4dENvbnRlbnQgPSBtc2c7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVNwYW4uY2xhc3NOYW1lID0gJ3NhdmVNZXNzYWdlJztcblxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlQ29udGFpbmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBlbmRzIGlmIG1zZyBlbGVtZW50IGRvZXMgbm90IGV4aXN0LCBvdGhlcndpc2UgcmVwbGFjZXMgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHNtYXJ0QXBwZW5kTWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICBpZihleGlzdGluZ1NhdmVNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBjaGlsZCBvZiAubWVzc2FnZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1NhdmVNc2cucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY3JlYXRlU2F2ZVNwYW4obXNnKSwgZXhpc3RpbmdTYXZlTXNnKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZvUGFyZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNhdmVTcGFuKG1zZykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdC5wb3B1bGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZvUGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLml0ZW1JbmZvJyk7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1NhdmVNc2cgPSBpbmZvUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlTWVzc2FnZScpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihmb3JtQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHNtYXJ0QXBwZW5kTWVzc2FnZSgnQ2hhbmdlcyBTYXZlZCcpO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJJdGVtTGlzdFJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICBmb3JtQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzbWFydEFwcGVuZE1lc3NhZ2UoJ05vIENoYW5nZWQgRGV0ZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyaWdnZXJJdGVtTGlzdFJlZnJlc2ggPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0l0ZW0nKTtcblxuICAgICAgICAgICAgY3VycmVudEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBpbnNlcnQgdG9kbyBpdGVtcyBhZ2FpblxuICAgICAgICAgICAgY29uZmlnLnByb2plY3RzW2NvbmZpZy5jdXJyZW50UHJvamVjdC5uYW1lXS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGZvcm1DaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBjb25zdCBzYXZlQnRuID0gaXRlbUZvcm0ucXVlcnlTZWxlY3RvcignLnNhdmVJdGVtQnRuJyk7XG4gICAgICAgIFxuICAgICAgICBpdGVtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBmb3JtQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgW3Nob3dJdGVtU2F2ZWRNZXNzYWdlT25Gb3JtQ2hhbmdlXS5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gKGJ1dHRvblRleHQsIGJ1dHRvbkNsYXNzLCBldmVudENhbGxiYWNrKSA9PiB7XG4gICAgICAgIC8vIFwiQ3JlYXRlIE5ldyBJdGVtXCIgYnV0dG9uXG4gICAgICAgIGNvbnN0IG5ld0J0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGJ1dHRvbkNsYXNzKTtcbiAgICAgICAgbmV3QnRuLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRDYWxsYmFjayk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3QnRuO1xuICAgIH1cblxuICAgIGNvbnN0IGxvcmVtSXBzdW0gPSAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUhlYWRpbmdzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC0taGVhZGluZ19fY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgIHByb2plY3RIZWFkaW5ncy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG9kYXlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS0tdGl0bGUnKTtcbiAgICAgICAgdG9kYXlUaXRsZS5yZW1vdmUoKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFByb2plY3QoZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2xpY2tlZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gICAgICAgIGNvbnN0IHByb2plY3RPbkRpc3BsYXkgPSBjb25maWcuY3VycmVudFByb2plY3Q7XG5cbiAgICAgICAgaWYgKHByb2plY3RPbkRpc3BsYXkubmFtZSAhPSBwcm9qZWN0Q2xpY2tlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoY29uZmlnLmN1cnJlbnRQcm9qZWN0ID09ICdfX3RvZGF5Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmUgaGVhZGluZ3MhJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSGVhZGluZ3MoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3dpdGNoIGdsb2JhbCBmb2N1cyB0byBjbGlja2VkIHByb2plY3RcbiAgICAgICAgICAgIGNvbmZpZy5jdXJyZW50UHJvamVjdCA9IGNvbmZpZy5wcm9qZWN0c1twcm9qZWN0Q2xpY2tlZF0ubmV3UHJvamVjdDtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIHRvZG9JdGVtc1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9JdGVtJyk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcnVuIHRoaXMgcHJvamVjdCAocG9wdWxhdGUgdG9kbyBpdGVtcylcbiAgICAgICAgICAgIGNvbmZpZy5wcm9qZWN0c1twcm9qZWN0Q2xpY2tlZF0ucnVuKCk7XG4gICAgICAgICAgICAvLyBhc3NpZ24gY3VycmVudFByb2plY3QgdG8gY2xpY2tlZCBwcm9qZWN0XG4gICAgICAgICAgICBjb25maWcuY3VycmVudFByb2plY3QgPSBjb25maWcucHJvamVjdHNbcHJvamVjdENsaWNrZWRdLm5ld1Byb2plY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3QgaXMgYWxyZWFkeSBkaXNwbGF5ZWQhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgbGlzdE9mUHJvamVjdHMgPSBjcmVhdGVFbGVtZW50KCd1bCcsICdwcm9qZWN0TGlzdCcpO1xuICAgICAgICBsaXN0T2ZQcm9qZWN0cy5jbGFzc05hbWUgPSAnbmF2YmFyLS1wcm9qZWN0c19fbGlua3MnO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICduYXZiYXItLXByb2plY3RzX190aXRsZScpO1xuICAgICAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgICAgICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluc2VydCBsaXN0IG9mIHByb2plY3RzIGludG8gRE9NXG4gICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZy5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmlkID0gcHJvamVjdDtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmNsYXNzTmFtZSA9ICdwcm9qZWN0LS1zaWducG9zdCc7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJdGVtU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KVxuICAgICAgICAgICAgY29uc3QgbnVtSXRlbXNJblByb2plY3QgPSAocHJvamVjdEl0ZW1TdG9yZSkgPyBPYmplY3Qua2V5cyhKU09OLnBhcnNlKHByb2plY3RJdGVtU3RvcmUpKS5sZW5ndGggOiAwO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke3Byb2plY3R9IDo6ICR7bnVtSXRlbXNJblByb2plY3R9YDtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hQcm9qZWN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXN0T2ZQcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci0tcHJvamVjdHNfX2xpbmtzJyk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0TGlzdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZWZyZXNoUHJvamVjdHNMaXN0KCksIGN1cnJlbnRQcm9qZWN0TGlzdCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNyZWF0ZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGVNb2RhbEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgICAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXRhaWxzJztcblxuICAgICAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ05hbWUnO1xuICAgICAgICAgICAgbmFtZUlucHV0Lm5hbWUgPSAncHJvamVjdE5hbWUnO1xuICAgICAgICAgICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG5cbiAgICAgICAgICAgIG5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuICAgICAgICAgICAgbm90ZXNJbnB1dC5uYW1lID0gJ3Byb2plY3ROb3Rlcyc7XG4gICAgICAgICAgICBub3Rlc0lucHV0LnR5cGUgPSAndGV4dCc7XG5cbiAgICAgICAgICAgIGZpZWxkc2V0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LW1vZGFsLS1kZXRhaWxzJztcbiAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChsZWdlbmQsIG5hbWVMYWJlbCwgbmFtZUlucHV0LCBub3Rlc0xhYmVsLCBub3Rlc0lucHV0KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmb3JtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTW9kYWxDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtb2RhbENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21vZGFsJyk7XG4gICAgICAgICAgICBjb25zdCBtb2RhbEhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncHJvamVjdC1tb2RhbC0taGVhZGluZycpO1xuICAgICAgICAgICAgY29uc3QgbW9kYWxGb3JtID0gY3JlYXRlTW9kYWxGb3JtKCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b25Hcm91cCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LS1tb2RhbF9fYnV0dG9ucycpO1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0TW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5pZCA9ICdtb2RhbENvbnRhaW5lcic7XG4gICAgICAgICAgICBtb2RhbEZvcm0uaWQgPSAncHJvamVjdC1tb2RhbC1mb3JtJztcbiAgICAgICAgICAgIHN1Ym1pdE1vZGFsQnRuLmlkID0gJ3N1Ym1pdE1vZGFsJztcbiAgICAgICAgICAgIGNsb3NlTW9kYWxCdG4uaWQgPSAnY2xvc2VNb2RhbCc7XG4gICAgXG4gICAgICAgICAgICBtb2RhbEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIFxuICAgICAgICAgICAgc3VibWl0TW9kYWxCdG4udGV4dENvbnRlbnQgPSAnQWNjZXB0JztcbiAgICAgICAgICAgIHN1Ym1pdE1vZGFsQnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIHN1Ym1pdE1vZGFsQnRuLnNldEF0dHJpYnV0ZSgnZm9ybScsICdwcm9qZWN0LW1vZGFsLWZvcm0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xvc2VNb2RhbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICAgICAgYnV0dG9uR3JvdXAuYXBwZW5kKGNsb3NlTW9kYWxCdG4sIHN1Ym1pdE1vZGFsQnRuKTtcbiAgICBcbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZChtb2RhbEhlYWRpbmcsIG1vZGFsRm9ybSwgYnV0dG9uR3JvdXApO1xuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyOyAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVNb2RhbENvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RGcm9tTW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1tb2RhbC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0RnVuYyA9IGUuY3VycmVudFRhcmdldC5jYWxsYmFja0Z1bmM7XG5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZm9ybURhdGEuZ2V0KCdwcm9qZWN0TmFtZScpO1xuICAgICAgICBsZXQgcHJvamVjdE5vdGVzID0gZm9ybURhdGEuZ2V0KCdwcm9qZWN0Tm90ZXMnKTtcblxuICAgICAgICBjcmVhdGVQcm9qZWN0RnVuYyhwcm9qZWN0TmFtZSwgcHJvamVjdE5vdGVzKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdExpc3QoKTtcblxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcjbW9kYWxDb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93TW9kYWwnKTtcblxuICAgICAgICAvLyBzd2l0Y2ggdG8gbmV3IHByb2plY3Qgd2l0aCBkZWZhdWx0IGVtcHR5IGl0ZW1cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0TmFtZX0gPiBhYCk7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbUJ0bicpO1xuICAgICAgICBuZXdQcm9qZWN0TGluay5jbGljaygpO1xuICAgICAgICBuZXdJdGVtQnRuLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzaWduTW9kYWxMaXN0ZW5lcihhZGRQcm9qZWN0Q2FsbGJhY2ssIHByb2plY3RzTGlzdCkge1xuICAgICAgICBjb25zdCBvcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5Nb2RhbCcpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TW9kYWwnKTtcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRhaW5lcicpO1xuXG4gICAgICAgIG9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaG93TW9kYWwnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdEZyb21Nb2RhbCwgZmFsc2UpO1xuICAgICAgICBzdWJtaXQuY2FsbGJhY2tGdW5jID0gYWRkUHJvamVjdENhbGxiYWNrO1xuICAgICAgICBzdWJtaXQucHJvamVjdHMgPSBwcm9qZWN0c0xpc3Q7XG5cbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93TW9kYWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJpb3JpdHlUb0ludGVnZXIocHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3Qgd2VpZ2h0cyA9IHtcbiAgICAgICAgICAgICdIaWdoJzogMyxcbiAgICAgICAgICAgICdNZWRpdW0nOiAyLFxuICAgICAgICAgICAgJ0xvdyc6IDEsXG4gICAgICAgICAgICAnU2VsZWN0IFByaW9yaXR5JzogMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdlaWdodHNbcHJpb3JpdHldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwSFRNTCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gY29uZmlnLmN1cnJlbnRQcm9qZWN0O1xuICAgIFxuICAgICAgICBjb25zdCBjbGlja0xhc3RUb2RvSXRlbSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9JdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxhc3RFbGVtZW50Q2xpY2thYmxlID1cbiAgICAgICAgICAgICAgICAobGFzdC5nZXRBdHRyaWJ1dGUoJ3RpdGxlVHlwZScpID09ICdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgID8gbGFzdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpXG4gICAgICAgICAgICAgICAgICAgIDogbGFzdC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsYXN0RWxlbWVudENsaWNrYWJsZS5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kYXkgZGF0ZSBoYXJkY29kZWQgdG8gJzIwMjItMDgtMzAnXG4gICAgICAgIGNvbnN0IHNldHVwU2hvd1RvZGF5QnRuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdFRvZGF5SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSAnMjAyMi0wOC0zMSc7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlJdGVtcyA9IHt9XG5cbiAgICAgICAgICAgICAgICAvKiBuYW1lOiBwcm9qZWN0IG5hbWVcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvamVjdFJ1bm5lciBvYmplY3QgcHJvcGVydGllcyAobmFtZSwgcnVuKCksIGV0YykgKi9cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5wcm9qZWN0cykpIHsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gT2JqZWN0LnZhbHVlcyh2YWx1ZS5uZXdQcm9qZWN0LnRvZG9JdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGYgPSB0b2RvLmZpbHRlcihpdGVtID0+IGl0ZW0uZGF0ZSA9PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zRmlsdGVyZWQgPSB7fVxuICAgICAgICAgICAgICAgICAgICBmLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0ZpbHRlcmVkW2l0ZW0udXVpZF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaXRlbXNGaWx0ZXJlZCkubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5SXRlbXNbbmFtZV0gPSBpdGVtc0ZpbHRlcmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheUl0ZW1zKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JdGVtQ29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RvZGF5LS10aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5SGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAndG9kYXktLXRpdGxlX19oZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlEYXRlID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICd0b2RheS0tdGl0bGVfX2RhdGUnKTtcbiAgICAgICAgICAgICAgICB0b2RheUhlYWRpbmcudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgICAgICAgICAgICAgIHRvZGF5RGF0ZS50ZXh0Q29udGVudCA9ICdXZWQgQXVnIDMxJztcbiAgICAgICAgICAgICAgICB0b2RheURpdi5hcHBlbmQodG9kYXlIZWFkaW5nLCB0b2RheURhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kYXlEaXYpO1xuXG4gICAgICAgICAgICAgICAgLy8gdmFsdWUgPSBvYmplY3QgY29udGFpbmluZyBwcm9qZWN0J3MgdG9kb0l0ZW1zXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW25hbWUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0b2RheUl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRQcm9qZWN0SGVhZGluZyhgI3RvZG9JdGVtQ29udGFpbmVyYCwgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBbaWQsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UHJvamVjdEl0ZW1Gb3JtKGAjdG9kb0l0ZW1Db250YWluZXJgLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEl0ZW1DaGFuZ2VMaXN0ZW5lcihpZCwgY29uZmlnLnByb2plY3RzW25hbWVdLm5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbmZpZy5jdXJyZW50UHJvamVjdCA9ICdfX3RvZGF5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTmF2QWN0aW9uKHN1bnJpc2VJbWcsICdUb2RheScsIGxpc3RUb2RheUl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2V0TmV3SXRlbUJ0biA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkZE5ld0l0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY29uZmlnLmN1cnJlbnRQcm9qZWN0ID09ICdfX3RvZGF5Jykge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnSXRlbSBjcmVhdGlvbiBkaXNhYmxlZCBpbiBUb2RheSBzZWN0aW9uLiBQbGVhc2UgbmF2aWdhdGUgdG8gdGhlIGluZGl2aWR1YWwgcHJvamVjdHMuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGNvbmZpZy5jdXJyZW50UHJvamVjdDtcbiAgICAgICAgICAgICAgICAvLyBhZGQgbmV3IGl0ZW0gdG8gcHJvamVjdFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZEl0ZW0oJycpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBjdXJyZW50IGl0ZW1zIGFuZCByZXNldCBkaXZcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLlRPRE9fQ09OVEFJTkVSKTtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBpbnNlcnRQcm9qZWN0SGVhZGluZyhjb25maWcuVE9ET19DT05UQUlORVIsIGN1cnJlbnRQcm9qZWN0Lm5hbWUpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyByZXBvcHVsYXRlIGxpc3QgaXRlbXMgZnJvbSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFByb2plY3RJdGVtRm9ybShjb25maWcuVE9ET19DT05UQUlORVIsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRJdGVtQ2hhbmdlTGlzdGVuZXIoaXRlbS51dWlkLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNsaWNrTGFzdFRvZG9JdGVtKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVOYXZBY3Rpb24ocGxhbnRJbWcsICdHcm93IFRvZG8gSXRlbScsIGFkZE5ld0l0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZXR1cERlYnVnQnRuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9nSXRlbXNJbk9iamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcywgWyd0aXRsZScsICdub3RlcycsICdkYXRlJywgJ2R1ZURhdGUnLCAnY2hlY2tsaXN0JywgJ190YWdzJywgJ2NvbXBsZXRpb24nLCAndGFnaWZ5J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsb2dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb25maWcucHJvamVjdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb2dEZWZhdWx0UHJvamVjdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZy5jdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5hdkFjdGlvbihiZWF2ZXJJbWcsICdMb2cgSlNPTicsIGxvZ1Byb2plY3RzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNldHVwRGVsZXRlUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjb25maWcuY3VycmVudFByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uVGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHByb2plY3QgJHtjdXJyZW50fT8gRGVsZXRpb24gaXMgZmluYWwuYDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKGNvbmZpcm1hdGlvblRleHQpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2VyIGluaXRpYXRlZCBkZWxldGlvbiBvZiAke2N1cnJlbnR9LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQcm9qZWN0IFwiJHtjdXJyZW50fVwiIGV4aXN0cyBpbiBsb2NhbHN0b3JhZ2UhYCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBjYW5jZWxsZWQgZGVsZXRpb24hJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBcIiR7Y3VycmVudH1cIiBub3QgZm91bmQhYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTmF2QWN0aW9uKGx1bWJlcmphY2tJbWcsICdEZWxldGUgUHJvamVjdCcsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZXR1cEhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICAgICAgY29uc3QgYXBwSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ2FwcC0taGVhZGluZycpO1xuICAgICAgICAgICAgY29uc3QgaWNvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIGFwcEhlYWRpbmcudGV4dENvbnRlbnQgPSAnRm9yZXN0cyAtIGEgdG9kbyBhcHAnO1xuICAgICAgICAgICAgaWNvblNwYW4uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI7XG4gICAgICAgICAgICBpY29uU3Bhbi50ZXh0Q29udGVudCA9ICdmb3Jlc3QnO1xuICAgICAgICBcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmQoaWNvblNwYW4sIGFwcEhlYWRpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBuYXZiYXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYXZDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbmF2YmFyJyk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhY3Rpb24gYnV0dG9uc1xuICAgICAgICAgICAgY29uc3QgbmF2YmFyQWN0aW9uQ29udGFpbmVyX19Ub3AgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbmF2YmFyLS1hY3Rpb25zX190b3AnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hdkJhckFjdGlvbkNvbnRhaW5lcl9fQm90dG9tID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ25hdmJhci0tYWN0aW9uc19fYm90dG9tJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBjcmVhdGVOYXZBY3Rpb24oZm9yZXN0SW1nLCAnUGxhbnQgUHJvamVjdCcsIG51bGwpO1xuICAgICAgICAgICAgbmV3UHJvamVjdEJ0bi5pZCA9ICdvcGVuTW9kYWwnO1xuXG4gICAgICAgICAgICBuYXZiYXJBY3Rpb25Db250YWluZXJfX1RvcC5hcHBlbmQoc2V0dXBTaG93VG9kYXlCdG4oKSwgc2V0TmV3SXRlbUJ0bigpLCBuZXdQcm9qZWN0QnRuLCBzZXR1cERlYnVnQnRuKCkpO1xuICAgICAgICAgICAgbmF2QmFyQWN0aW9uQ29udGFpbmVyX19Cb3R0b20uYXBwZW5kQ2hpbGQoc2V0dXBEZWxldGVQcm9qZWN0QnRuKCkpO1xuICAgIFxuICAgICAgICAgICAgLy8gdG9kbzogc3R5bGUgYW5kIHBvc2l0aW9uIG5ldyBwcm9qZWN0IGJ1dHRvblxuICAgICAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZChuYXZiYXJBY3Rpb25Db250YWluZXJfX1RvcCwgcmVmcmVzaFByb2plY3RzTGlzdCgpLCBuYXZCYXJBY3Rpb25Db250YWluZXJfX0JvdHRvbSk7XG4gICAgICAgICAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBncmlkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dyaWRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50LmlkID0gY29uZmlnLkNPTlRFTlRfRElWX0lEO1xuXG4gICAgICAgIGNvbnN0IHRvZG9JdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9JdGVtQ29udGFpbmVyLmlkID0gJ3RvZG9JdGVtQ29udGFpbmVyJztcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kKG5hdmJhcigpLCBjb250ZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc2V0dXBIZWFkZXIoKSwgZ3JpZENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5zZXJ0UHJvamVjdEhlYWRpbmcsXG4gICAgICAgIGluc2VydFByb2plY3RJdGVtRm9ybSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCxcbiAgICAgICAgY3JlYXRlQnV0dG9uLFxuICAgICAgICBpbnNlcnRJdGVtQ2hhbmdlTGlzdGVuZXIsXG4gICAgICAgIGNyZWF0ZU1vZGFsLFxuICAgICAgICBhc3NpZ25Nb2RhbExpc3RlbmVyLFxuICAgICAgICBzZXR1cEhUTUwsXG4gICAgICAgIGJpbmRDb25maWd1cmF0aW9uXG4gICAgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGJ1aWxkUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGFba2V5XSlcbiAgICB9KVxufVxuXG5jb25zdCBzYXZlZExvY2FsU3RvcmFnZURhdGEgPSB7XG4gICAgXCJEYWlseVwiOiBcIntcXFwiMDY1MmNiZjItYzcxNi00MjM2LWExM2UtMDVmMDQ3MTc4NTFkXFxcIjp7XFxcInRpdGxlXFxcIjpcXFwiRG8gdGhlIGRpc2hlc1xcXCIsXFxcIm5vdGVzXFxcIjpcXFwiXFxcIixcXFwicHJpb3JpdHlcXFwiOlxcXCJMb3dcXFwiLFxcXCJjaGVja2xpc3RcXFwiOltdLFxcXCJkYXRlXFxcIjpcXFwiMjAyMi0wOC0zMVxcXCIsXFxcIl90YWdzXFxcIjpbXFxcIkNsZWFuaW5nXFxcIl0sXFxcImNvbXBsZXRpb25cXFwiOmZhbHNlfSxcXFwiZWIzYTgwNDUtMzgyYS00NzhjLTg4NmYtMWU4M2YwY2Q3NmUwXFxcIjp7XFxcInRpdGxlXFxcIjpcXFwiU2hvcCBmb3IgZ3JvY2VyaWVzXFxcIixcXFwibm90ZXNcXFwiOlxcXCJXb29sd29ydGhzIC0tIHJlbWVtYmVyIHNwZWNpYWxzXFxcIixcXFwicHJpb3JpdHlcXFwiOlxcXCJNZWRpdW1cXFwiLFxcXCJjaGVja2xpc3RcXFwiOltdLFxcXCJkYXRlXFxcIjpcXFwiMjAyMi0wOC0zMVxcXCIsXFxcIl90YWdzXFxcIjpbXFxcIkVycmFuZHNcXFwiXSxcXFwiY29tcGxldGlvblxcXCI6ZmFsc2V9LFxcXCIxZTBhNGU4Ny02NzYxLTQ5YjktOTQzMC05ZmM3ZDk1ZjkzM2VcXFwiOntcXFwidGl0bGVcXFwiOlxcXCJQYXkgdGhlIGJpbGxzXFxcIixcXFwibm90ZXNcXFwiOlxcXCJCaWxscyBhcmUgb3ZlcmR1ZVxcXCIsXFxcInByaW9yaXR5XFxcIjpcXFwiSGlnaFxcXCIsXFxcImNoZWNrbGlzdFxcXCI6W10sXFxcIl90YWdzXFxcIjpbXSxcXFwiY29tcGxldGlvblxcXCI6ZmFsc2V9fVwiLFxuICAgIFwiTWluaW5nXCI6IFwie1xcXCJmMjYyMTM2OS01ZTNmLTRjNmEtOTVmYS0yYzUxNmFkOTg4NzBcXFwiOntcXFwidGl0bGVcXFwiOlxcXCJPcGVuIHRoZSBtaW5lXFxcIixcXFwibm90ZXNcXFwiOlxcXCJcXFwiLFxcXCJwcmlvcml0eVxcXCI6XFxcIkhpZ2hcXFwiLFxcXCJjaGVja2xpc3RcXFwiOltdLFxcXCJkYXRlXFxcIjpcXFwiMjAyMi0wOC0zMVxcXCIsXFxcIl90YWdzXFxcIjpbXFxcIk1pbmluZ1xcXCJdLFxcXCJjb21wbGV0aW9uXFxcIjpmYWxzZX0sXFxcImFjOTU4NTRhLTY2YzctNGE0ZS1hZmUyLTEzOGZiZjYyNjg5YlxcXCI6e1xcXCJ0aXRsZVxcXCI6XFxcIkRpZyB0dW5uZWxcXFwiLFxcXCJub3Rlc1xcXCI6XFxcIlxcXCIsXFxcInByaW9yaXR5XFxcIjpcXFwiTWVkaXVtXFxcIixcXFwiY2hlY2tsaXN0XFxcIjpbXSxcXFwiX3RhZ3NcXFwiOltcXFwiTWluaW5nXFxcIl0sXFxcImNvbXBsZXRpb25cXFwiOmZhbHNlfX1cIixcbiAgICBcIkV4ZXJjaXNlXCI6IFwie1xcXCI1OWM2NTYxYy0xYzZiLTQ3Y2UtOTAwMi1hNTQ1YmIyYzBkNDdcXFwiOntcXFwidGl0bGVcXFwiOlxcXCJMaWZ0IHdlaWdodHNcXFwiLFxcXCJub3Rlc1xcXCI6XFxcIkdldCBtb3JlIHN3b2xlXFxcIixcXFwicHJpb3JpdHlcXFwiOlxcXCJIaWdoXFxcIixcXFwiY2hlY2tsaXN0XFxcIjpbXSxcXFwiX3RhZ3NcXFwiOltdLFxcXCJjb21wbGV0aW9uXFxcIjpmYWxzZX0sXFxcIjU0YTlmOWRiLTQ4YzUtNDc4NC1hN2FiLTBhNzE1ZmU0MTQwM1xcXCI6e1xcXCJ0aXRsZVxcXCI6XFxcIlJ1biBhcm91bmQgdGhlIGJsb2NrXFxcIixcXFwibm90ZXNcXFwiOlxcXCJcXFwiLFxcXCJwcmlvcml0eVxcXCI6XFxcIk1lZGl1bVxcXCIsXFxcImNoZWNrbGlzdFxcXCI6W10sXFxcIl90YWdzXFxcIjpbXFxcIkNhcmRpb1xcXCJdLFxcXCJjb21wbGV0aW9uXFxcIjpmYWxzZX19XCJcbn1cblxuXG4vLyBpbnN0YW50aWF0ZSBwcm9qZWN0IGFuZCBsb2FkIG1vY2sgaXRlbXNcbmZ1bmN0aW9uIHByb2plY3RSdW5uZXIocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGJ1aWxkUHJvamVjdChuYW1lKTtcblxuICAgIGZ1bmN0aW9uIGFkZE1vY2tUYWdzKGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHRvZG9JdGVtcyA9IE9iamVjdC52YWx1ZXMoaXRlbXMpO1xuICAgICAgICB0b2RvSXRlbXNbMF0uYWRkVGFnaWZ5VGFnKCdFcnJhbmRzJyk7XG4gICAgICAgIHRvZG9JdGVtc1sxXS5hZGRUYWdpZnlUYWcoJ0VycmFuZHMnKTtcbiAgICAgICAgdG9kb0l0ZW1zWzJdLmFkZFRhZ2lmeVRhZygnRml0bmVzcycpO1xuICAgICAgICB0b2RvSXRlbXNbM10uYWRkVGFnaWZ5VGFnKFsnRml0bmVzcycsICdTdHVkeSddKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0dXBNb2NrUHJvamVjdCgpIHtcbiAgICAgICAgbmV3UHJvamVjdC5ub3RlcyA9ICdFdmVyeWRheSB0YXNrcy4nO1xuICAgIFxuICAgICAgICBuZXdQcm9qZWN0LmFkZEl0ZW0oJ01haWwgcGFyY2VsIHRvIE11bScpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEl0ZW0oJ1BheSB0aGUgYmlsbHMnKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRJdGVtKCdSdW4gZm9yIDEwIG1pbnV0ZXMnKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRJdGVtKCdTdHVkeSBvbiB0aGUgZXhlcmNpc2UgYmlrZScpO1xuICAgIFxuICAgICAgICBjb25zdCBpdGVtVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhuZXdQcm9qZWN0LnRvZG9JdGVtcyk7XG4gICAgXG4gICAgICAgIGl0ZW1WYWx1ZXNbMF0ubm90ZXMgPSAnTmVlZHMgdG8gYmUgZG9uZSBhdCB0aGUgcG9zdCBvZmZpY2UuJ1xuICAgICAgICBpdGVtVmFsdWVzWzBdLmFkZFRhc2soJ0ZpbmQgaXRlbS4nKTtcbiAgICAgICAgaXRlbVZhbHVlc1swXS5hZGRUYXNrKCdQYWNrIHBhcmNlbC4nKTtcbiAgICAgICAgaXRlbVZhbHVlc1swXS5hZGRUYXNrKCdNYWlsIHBhcmNlbC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkTW9ja0l0ZW1zSW50b0RPTSA9ICgpID0+IHtcbiAgICAgICAgLy8gb25seSBsb2FkIGZyb20gc3RvcmFnZSBpZiBrZXkgZXhpc3RzXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5ld1Byb2plY3QubmFtZSkpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QucmV0cmlldmVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXcuaW5zZXJ0UHJvamVjdEhlYWRpbmcoYCN0b2RvSXRlbUNvbnRhaW5lcmAsIERPTV9DT05GSUcuY3VycmVudFByb2plY3QubmFtZSwgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBlbnVtZXJhdGUgaXRlbXMgaW4gZGVmYXVsdCBwcm9qZWN0XG4gICAgICAgIE9iamVjdC52YWx1ZXMobmV3UHJvamVjdC50b2RvSXRlbXMpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2aWV3Lmluc2VydFByb2plY3RJdGVtRm9ybShgI3RvZG9JdGVtQ29udGFpbmVyYCwgaXRlbSk7XG4gICAgICAgICAgICB2aWV3Lmluc2VydEl0ZW1DaGFuZ2VMaXN0ZW5lcihpdGVtLnV1aWQsIG5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuZXdQcm9qZWN0Lm5hbWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc3RvcmVkIGRhdGEgZGV0ZWN0ZWQhJyk7XG4gICAgICAgICAgICBsb2FkTW9ja0l0ZW1zSW50b0RPTSgpO1xuICAgICAgICAgICAgLy8gc2V0dXBNb2NrUHJvamVjdCgpO1xuICAgICAgICAgICAgLy8gbG9hZE1vY2tJdGVtc0ludG9ET00oKTtcbiAgICAgICAgICAgIC8vIGFkZE1vY2tUYWdzKG5ld1Byb2plY3QudG9kb0l0ZW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgZGF0YSBkZXRlY3RlZCEnKTtcbiAgICAgICAgICAgIGxvYWRNb2NrSXRlbXNJbnRvRE9NKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBydW4sXG4gICAgICAgIG5ld1Byb2plY3RcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdG9yZWRQcm9qZWN0cyAoKSB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RSdW5uZXIobmFtZSk7XG4gICAgICAgIHByb2plY3QubmV3UHJvamVjdC5yZXRyaWV2ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXByb2plY3RzW25hbWVdKSB7XG4gICAgICAgICAgICBwcm9qZWN0c1tuYW1lXSA9IHByb2plY3Q7XG4gICAgXG4gICAgICAgICAgICAvLyBpZihub3Rlcykge1xuICAgICAgICAgICAgLy8gICAgIHByb2plY3RzW25hbWVdLm5ld1Byb2plY3Qubm90ZXMgPSBub3RlcztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBBIHByb2plY3QgbmFtZWQgXCIke25hbWV9XCIgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSB0cnkgYW5vdGhlciBuYW1lLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICB9XG5cblxuXG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QobmFtZSwgbm90ZXM9bnVsbCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0UnVubmVyKG5hbWUpO1xuICAgIFxuICAgIGlmKCFwcm9qZWN0c1tuYW1lXSkge1xuICAgICAgICBwcm9qZWN0c1tuZXdQcm9qZWN0Lm5hbWVdID0gbmV3UHJvamVjdDtcblxuICAgICAgICBpZihub3Rlcykge1xuICAgICAgICAgICAgcHJvamVjdHNbbmV3UHJvamVjdC5uYW1lXS5uZXdQcm9qZWN0Lm5vdGVzID0gbm90ZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgQSBwcm9qZWN0IG5hbWVkIFwiJHtuYW1lfVwiIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgdHJ5IGFub3RoZXIgbmFtZS5gKTtcbiAgICB9XG59XG5cbmxldCBwcm9qZWN0cyA9IHt9XG5cbmNvbnN0IENPTlRFTlRfRElWX0lEID0gJ2NvbnRlbnQnO1xuY29uc3QgQ09OVEVOVF9ESVZfU0VMRUNUT1IgPSBgIyR7Q09OVEVOVF9ESVZfSUR9YDtcblxuY29uc3QgRE9NX0NPTkZJRyA9IHtcbiAgICAncHJvamVjdHMnOiBwcm9qZWN0cyxcbiAgICAnVE9ET19DT05UQUlORVInOiAnI3RvZG9JdGVtQ29udGFpbmVyJ1xufVxuXG5sb2FkU3RvcmVkUHJvamVjdHMoKTtcblxuYWRkTmV3UHJvamVjdCgnRGFpbHknKTtcbi8vIGFkZE5ld1Byb2plY3QoJ0VtcHR5Jyk7XG4vLyBhZGROZXdQcm9qZWN0KCdJbnZlc3RpZ2F0aW9ucycpO1xuXG5ET01fQ09ORklHWydjdXJyZW50UHJvamVjdCddID0gRE9NX0NPTkZJRy5wcm9qZWN0c1snRGFpbHknXS5uZXdQcm9qZWN0O1xuXG52aWV3LmNvbmZpZyA9IERPTV9DT05GSUc7XG52aWV3LmJpbmRDb25maWd1cmF0aW9uKCk7XG52aWV3LnNldHVwSFRNTCgpO1xuXG5wcm9qZWN0c1snRGFpbHknXS5ydW4oKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3LmNyZWF0ZU1vZGFsKCkpO1xudmlldy5hc3NpZ25Nb2RhbExpc3RlbmVyKGFkZE5ld1Byb2plY3QsIHByb2plY3RzKTtcblxubG9hZFN0b3JlZFByb2plY3RzKCk7XG5cbi8vIHdyaXRlIG1vY2sgcHJvamVjdHMgaW50byBsb2NhbFN0b3JhZ2UgZm9yIHVzZSBieSBhcHBcbndyaXRlTG9jYWxTdG9yYWdlKHNhdmVkTG9jYWxTdG9yYWdlRGF0YSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=