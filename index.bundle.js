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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksbUhBQW1ILHlKQUF5SiwySkFBMkosNEJBQTRCLDZCQUE2QixHQUFHLGdDQUFnQyw2R0FBNkcsc0JBQXNCLEdBQUcsV0FBVyxpREFBaUQsa0NBQWtDLGtDQUFrQyxnQ0FBZ0Msd0NBQXdDLCtCQUErQiw0QkFBNEIsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEdBQUcsWUFBWSxvQkFBb0Isa0NBQWtDLDBCQUEwQixpQ0FBaUMsbUNBQW1DLHVDQUF1QyxnREFBZ0QsR0FBRyxvQkFBb0Isb0JBQW9CLHVDQUF1QyxtQkFBbUIsaURBQWlELEdBQUcsY0FBYywwQkFBMEIsMkJBQTJCLGlEQUFpRCx5QkFBeUIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsR0FBRyxrQ0FBa0Msb0JBQW9CLGtCQUFrQixHQUFHLGlDQUFpQyx3Q0FBd0Msa0JBQWtCLDBCQUEwQixpQkFBaUIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsa0NBQWtDLHNCQUFzQixzQkFBc0IsbUJBQW1CLHFDQUFxQyxHQUFHLGdFQUFnRSxrQkFBa0IsbUJBQW1CLEdBQUcsZ0NBQWdDLHNCQUFzQixrQkFBa0IsdUJBQXVCLHVDQUF1QyxHQUFHLCtCQUErQixtQkFBbUIsbUJBQW1CLEdBQUcsV0FBVywrQkFBK0IsR0FBRyxhQUFhLCtCQUErQixHQUFHLFVBQVUsbUNBQW1DLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLGdDQUFnQyxnQkFBZ0IsMkJBQTJCLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLG9CQUFvQixtQkFBbUIsR0FBRywwQkFBMEIsaUJBQWlCLGlCQUFpQixHQUFHLGVBQWUsb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxlQUFlLDZDQUE2QyxHQUFHLGlCQUFpQiw2Q0FBNkMsR0FBRyxxQkFBcUIsVUFBVSwrQkFBK0IsMEJBQTBCLE9BQU8sWUFBWSwrQkFBK0IsNEJBQTRCLE9BQU8sR0FBRyxzQkFBc0IsVUFBVSwrQkFBK0IsNEJBQTRCLE9BQU8sWUFBWSwrQkFBK0IsMEJBQTBCLE9BQU8sR0FBRyxtREFBbUQsbUJBQW1CLEdBQUcsMkNBQTJDLG9CQUFvQixnQ0FBZ0MsR0FBRyxrQkFBa0IsbUJBQW1CLHVCQUF1QixHQUFHLCtDQUErQyxvQkFBb0IsNkJBQTZCLDBCQUEwQixnREFBZ0QsR0FBRyw2QkFBNkIsb0JBQW9CLDBCQUEwQix1QkFBdUIsZ0JBQWdCLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLGtDQUFrQyxrQ0FBa0MsdUJBQXVCLG1CQUFtQixHQUFHLDhCQUE4Qix5QkFBeUIsa0JBQWtCLEdBQUcsOEJBQThCLGlCQUFpQixHQUFHLDhDQUE4Qyx1Q0FBdUMsdUJBQXVCLHNCQUFzQiw0QkFBNEIsR0FBRyw4QkFBOEIsdUNBQXVDLG1CQUFtQixtQkFBbUIsR0FBRyxnQkFBZ0IsNEJBQTRCLEdBQUcsMEJBQTBCLG1CQUFtQiwwQkFBMEIsR0FBRyx3QkFBd0IsbUJBQW1CLG1CQUFtQix5QkFBeUIsZ0RBQWdELDhCQUE4Qix1QkFBdUIsd0JBQXdCLEdBQUcsK0JBQStCLG9CQUFvQix5QkFBeUIsbUJBQW1CLGdCQUFnQixlQUFlLGdCQUFnQiw0REFBNEQseUNBQXlDLDRDQUE0QyxHQUFHLGlEQUFpRCwyQ0FBMkMsaUJBQWlCLDJCQUEyQixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsYUFBYSxjQUFjLG9CQUFvQixtQkFBbUIsb0NBQW9DLEdBQUcsWUFBWSw2QkFBNkIseUJBQXlCLHlCQUF5QiwrQ0FBK0MsbUJBQW1CLHNCQUFzQix1QkFBdUIsZ0RBQWdELEdBQUcsbUNBQW1DLGlCQUFpQiwyQkFBMkIsR0FBRyw2QkFBNkIsdUJBQXVCLDBCQUEwQixHQUFHLDZCQUE2QixvQkFBb0IsNkJBQTZCLGVBQWUsMEJBQTBCLEdBQUcsOEJBQThCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcscUNBQXFDLHdCQUF3Qix5QkFBeUIsbUJBQW1CLHVDQUF1QyxHQUFHLGtCQUFrQixnREFBZ0QsbUJBQW1CLHdCQUF3QixHQUFHLHdCQUF3QixnQ0FBZ0MsR0FBRyxpQkFBaUIsa0NBQWtDLEdBQUcsdUJBQXVCLDJDQUEyQyxHQUFHLG1CQUFtQixHQUFHLDRCQUE0Qix3QkFBd0IsMEJBQTBCLEdBQUcseUJBQXlCLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQzNqZjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUd0Q7QUFDeEQsaUVBQWUsOERBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNENUI7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUU7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWMsaUJBQWlCOztBQUV4RCw2RUFBNkU7O0FBRTdFO0FBQ0E7QUFDQSxhQUFhLHFFQUFlO0FBQzVCLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTixXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQixRQUFROztBQUUvQyxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUVBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVB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Q3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxlQUFlLG1FQUFTO0FBQ3hCLFNBQVMsK0RBQVM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUIwQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7QUFDQSwyQ0FBMkMsdURBQU07QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLG9EQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTLEtBQUssa0JBQWtCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsZ0RBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVEQUFXO0FBQ1gsa0VBQXNCO0FBQ3RCLDBEQUFjOztBQUVkOztBQUVBLDBCQUEwQiw0REFBZ0I7QUFDMUMsb0VBQXdCOztBQUV4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AeWFpcmVvL3RhZ2lmeS9kaXN0L3RhZ2lmeS5taW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0B5YWlyZW8vdGFnaWZ5L2Rpc3QvdGFnaWZ5LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkWWVhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViWWVhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0B5YWlyZW8vdGFnaWZ5L2Rpc3QvdGFnaWZ5LmNzcz9hZTcwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUYWdpZnkgKHYgNC4xNS4zKSAtIHRhZ3MgaW5wdXQgY29tcG9uZW50XG4gKiBCeSBZYWlyIEV2ZW4tT3JcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS95YWlyRU8vdGFnaWZ5XG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKiBcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqIFxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqIFRIRSBTT0ZUV0FSRS5cclxuICogXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBOT1QgUEVSTUlTU0lCTEUgVE8gQkUgU09MRC5cbiAqL1xuXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLlRhZ2lmeT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpe3ZhciBpPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHM9cy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksaS5wdXNoLmFwcGx5KGkscyl9cmV0dXJuIGl9ZnVuY3Rpb24gZShlKXtmb3IodmFyIHM9MTtzPGFyZ3VtZW50cy5sZW5ndGg7cysrKXt2YXIgYT1udWxsIT1hcmd1bWVudHNbc10/YXJndW1lbnRzW3NdOnt9O3MlMj90KE9iamVjdChhKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7aShlLHQsYVt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhhKSk6dChPYmplY3QoYSkpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBpKHQsZSxpKXtyZXR1cm4gZSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPWksdH1jb25zdCBzPSh0LGUsaSxzKT0+KHQ9XCJcIit0LGU9XCJcIitlLHMmJih0PXQudHJpbSgpLGU9ZS50cmltKCkpLGk/dD09ZTp0LnRvTG93ZXJDYXNlKCk9PWUudG9Mb3dlckNhc2UoKSksYT0odCxlKT0+dCYmQXJyYXkuaXNBcnJheSh0KSYmdC5tYXAoKHQ9Pm4odCxlKSkpO2Z1bmN0aW9uIG4odCxlKXt2YXIgaSxzPXt9O2ZvcihpIGluIHQpZS5pbmRleE9mKGkpPDAmJihzW2ldPXRbaV0pO3JldHVybiBzfWZ1bmN0aW9uIG8odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5yZXBsYWNlKC9cXCYjP1swLTlhLXpdKzsvZ2ksKGZ1bmN0aW9uKHQpe3JldHVybiBlLmlubmVySFRNTD10LGUuaW5uZXJUZXh0fSkpfWZ1bmN0aW9uIHIodCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0LnRyaW0oKSxcInRleHQvaHRtbFwiKS5ib2R5LmZpcnN0RWxlbWVudENoaWxkfWZ1bmN0aW9uIGwodCxlKXtmb3IoZT1lfHxcInByZXZpb3VzXCI7dD10W2UrXCJTaWJsaW5nXCJdOylpZigzPT10Lm5vZGVUeXBlKXJldHVybiB0fWZ1bmN0aW9uIGQodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dC5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC88L2csXCImbHQ7XCIpLnJlcGxhY2UoLz4vZyxcIiZndDtcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKS5yZXBsYWNlKC9gfCcvZyxcIiYjMDM5O1wiKTp0fWZ1bmN0aW9uIGgodCl7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNwbGl0KFwiIFwiKVsxXS5zbGljZSgwLC0xKTtyZXR1cm4gdD09PU9iamVjdCh0KSYmXCJBcnJheVwiIT1lJiZcIkZ1bmN0aW9uXCIhPWUmJlwiUmVnRXhwXCIhPWUmJlwiSFRNTFVua25vd25FbGVtZW50XCIhPWV9ZnVuY3Rpb24gZyh0LGUsaSl7ZnVuY3Rpb24gcyh0LGUpe2Zvcih2YXIgaSBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkoaSkpe2lmKGgoZVtpXSkpe2godFtpXSk/cyh0W2ldLGVbaV0pOnRbaV09T2JqZWN0LmFzc2lnbih7fSxlW2ldKTtjb250aW51ZX1pZihBcnJheS5pc0FycmF5KGVbaV0pKXt0W2ldPU9iamVjdC5hc3NpZ24oW10sZVtpXSk7Y29udGludWV9dFtpXT1lW2ldfX1yZXR1cm4gdCBpbnN0YW5jZW9mIE9iamVjdHx8KHQ9e30pLHModCxlKSxpJiZzKHQsaSksdH1mdW5jdGlvbiBwKCl7Y29uc3QgdD1bXSxlPXt9O2ZvcihsZXQgaSBvZiBhcmd1bWVudHMpZm9yKGxldCBzIG9mIGkpaChzKT9lW3MudmFsdWVdfHwodC5wdXNoKHMpLGVbcy52YWx1ZV09MSk6dC5pbmNsdWRlcyhzKXx8dC5wdXNoKHMpO3JldHVybiB0fWZ1bmN0aW9uIGModCl7cmV0dXJuIFN0cmluZy5wcm90b3R5cGUubm9ybWFsaXplP1wic3RyaW5nXCI9PXR5cGVvZiB0P3Qubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csXCJcIik6dm9pZCAwOnR9dmFyIHU9KCk9Pi8oPz0uKmNocm9tZSkoPz0uKmFuZHJvaWQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtmdW5jdGlvbiBtKCl7cmV0dXJuKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCh0PT4odF5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSYxNT4+dC80KS50b1N0cmluZygxNikpKX1mdW5jdGlvbiB2KHQpe3JldHVybiB0JiZ0LmNsYXNzTGlzdCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZyl9dmFyIGY9e2RlbGltaXRlcnM6XCIsXCIscGF0dGVybjpudWxsLHRhZ1RleHRQcm9wOlwidmFsdWVcIixtYXhUYWdzOjEvMCxjYWxsYmFja3M6e30sYWRkVGFnT25CbHVyOiEwLG9uQ2hhbmdlQWZ0ZXJCbHVyOiEwLGR1cGxpY2F0ZXM6ITEsd2hpdGVsaXN0OltdLGJsYWNrbGlzdDpbXSxlbmZvcmNlV2hpdGVsaXN0OiExLHVzZXJJbnB1dDohMCxrZWVwSW52YWxpZFRhZ3M6ITEsY3JlYXRlSW52YWxpZFRhZ3M6ITAsbWl4VGFnc0FsbG93ZWRBZnRlcjovLHxcXC58XFw6fFxccy8sbWl4VGFnc0ludGVycG9sYXRvcjpbXCJbW1wiLFwiXV1cIl0sYmFja3NwYWNlOiEwLHNraXBJbnZhbGlkOiExLHBhc3RlQXNUYWdzOiEwLGVkaXRUYWdzOntjbGlja3M6MixrZWVwSW52YWxpZDohMH0sdHJhbnNmb3JtVGFnOigpPT57fSx0cmltOiEwLGExMXk6e2ZvY3VzYWJsZVRhZ3M6ITF9LG1peE1vZGU6e2luc2VydEFmdGVyVGFnOlwiwqBcIn0sYXV0b0NvbXBsZXRlOntlbmFibGVkOiEwLHJpZ2h0S2V5OiExfSxjbGFzc05hbWVzOntuYW1lc3BhY2U6XCJ0YWdpZnlcIixtaXhNb2RlOlwidGFnaWZ5LS1taXhcIixzZWxlY3RNb2RlOlwidGFnaWZ5LS1zZWxlY3RcIixpbnB1dDpcInRhZ2lmeV9faW5wdXRcIixmb2N1czpcInRhZ2lmeS0tZm9jdXNcIix0YWdOb0FuaW1hdGlvbjpcInRhZ2lmeS0tbm9BbmltXCIsdGFnSW52YWxpZDpcInRhZ2lmeS0taW52YWxpZFwiLHRhZ05vdEFsbG93ZWQ6XCJ0YWdpZnktLW5vdEFsbG93ZWRcIixzY29wZUxvYWRpbmc6XCJ0YWdpZnktLWxvYWRpbmdcIixoYXNNYXhUYWdzOlwidGFnaWZ5LS1oYXNNYXhUYWdzXCIsaGFzTm9UYWdzOlwidGFnaWZ5LS1ub1RhZ3NcIixlbXB0eTpcInRhZ2lmeS0tZW1wdHlcIixpbnB1dEludmFsaWQ6XCJ0YWdpZnlfX2lucHV0LS1pbnZhbGlkXCIsZHJvcGRvd246XCJ0YWdpZnlfX2Ryb3Bkb3duXCIsZHJvcGRvd25XcmFwcGVyOlwidGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlclwiLGRyb3Bkb3duSGVhZGVyOlwidGFnaWZ5X19kcm9wZG93bl9faGVhZGVyXCIsZHJvcGRvd25Gb290ZXI6XCJ0YWdpZnlfX2Ryb3Bkb3duX19mb290ZXJcIixkcm9wZG93bkl0ZW06XCJ0YWdpZnlfX2Ryb3Bkb3duX19pdGVtXCIsZHJvcGRvd25JdGVtQWN0aXZlOlwidGFnaWZ5X19kcm9wZG93bl9faXRlbS0tYWN0aXZlXCIsZHJvcGRvd25JdGVtSGlkZGVuOlwidGFnaWZ5X19kcm9wZG93bl9faXRlbS0taGlkZGVuXCIsZHJvcGRvd25Jbml0YWw6XCJ0YWdpZnlfX2Ryb3Bkb3duLS1pbml0aWFsXCIsdGFnOlwidGFnaWZ5X190YWdcIix0YWdUZXh0OlwidGFnaWZ5X190YWctdGV4dFwiLHRhZ1g6XCJ0YWdpZnlfX3RhZ19fcmVtb3ZlQnRuXCIsdGFnTG9hZGluZzpcInRhZ2lmeV9fdGFnLS1sb2FkaW5nXCIsdGFnRWRpdGluZzpcInRhZ2lmeV9fdGFnLS1lZGl0YWJsZVwiLHRhZ0ZsYXNoOlwidGFnaWZ5X190YWctLWZsYXNoXCIsdGFnSGlkZTpcInRhZ2lmeV9fdGFnLS1oaWRlXCJ9LGRyb3Bkb3duOntjbGFzc25hbWU6XCJcIixlbmFibGVkOjIsbWF4SXRlbXM6MTAsc2VhcmNoS2V5czpbXCJ2YWx1ZVwiLFwic2VhcmNoQnlcIl0sZnV6enlTZWFyY2g6ITAsY2FzZVNlbnNpdGl2ZTohMSxhY2NlbnRlZFNlYXJjaDohMCxoaWdobGlnaHRGaXJzdDohMSxjbG9zZU9uU2VsZWN0OiEwLGNsZWFyT25TZWxlY3Q6ITAscG9zaXRpb246XCJhbGxcIixhcHBlbmRUYXJnZXQ6bnVsbH0saG9va3M6e2JlZm9yZVJlbW92ZVRhZzooKT0+UHJvbWlzZS5yZXNvbHZlKCksYmVmb3JlUGFzdGU6KCk9PlByb21pc2UucmVzb2x2ZSgpLHN1Z2dlc3Rpb25DbGljazooKT0+UHJvbWlzZS5yZXNvbHZlKCl9fTtmdW5jdGlvbiBUKCl7dGhpcy5kcm9wZG93bj17fTtmb3IobGV0IHQgaW4gdGhpcy5fZHJvcGRvd24pdGhpcy5kcm9wZG93blt0XT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl9kcm9wZG93blt0XT90aGlzLl9kcm9wZG93blt0XS5iaW5kKHRoaXMpOnRoaXMuX2Ryb3Bkb3duW3RdO3RoaXMuZHJvcGRvd24ucmVmcygpfXZhciB3PXtyZWZzKCl7dGhpcy5ET00uZHJvcGRvd249dGhpcy5wYXJzZVRlbXBsYXRlKFwiZHJvcGRvd25cIixbdGhpcy5zZXR0aW5nc10pLHRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQ9dGhpcy5ET00uZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIltkYXRhLXNlbGVjdG9yPSd0YWdpZnktc3VnZ2VzdGlvbnMtd3JhcHBlciddXCIpfSxnZXRIZWFkZXJSZWYoKXtyZXR1cm4gdGhpcy5ET00uZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIltkYXRhLXNlbGVjdG9yPSd0YWdpZnktc3VnZ2VzdGlvbnMtaGVhZGVyJ11cIil9LGdldEZvb3RlclJlZigpe3JldHVybiB0aGlzLkRPTS5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VsZWN0b3I9J3RhZ2lmeS1zdWdnZXN0aW9ucy1mb290ZXInXVwiKX0sZ2V0QWxsU3VnZ2VzdGlvbnNSZWZzKCl7cmV0dXJuWy4uLnRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtU2VsZWN0b3IpXX0sc2hvdyh0KXt2YXIgZSxpLGEsbj10aGlzLnNldHRpbmdzLG89XCJtaXhcIj09bi5tb2RlJiYhbi5lbmZvcmNlV2hpdGVsaXN0LHI9IW4ud2hpdGVsaXN0fHwhbi53aGl0ZWxpc3QubGVuZ3RoLGw9XCJtYW51YWxcIj09bi5kcm9wZG93bi5wb3NpdGlvbjtpZih0PXZvaWQgMD09PXQ/dGhpcy5zdGF0ZS5pbnB1dFRleHQ6dCwhKHImJiFvJiYhbi50ZW1wbGF0ZXMuZHJvcGRvd25JdGVtTm9NYXRjaHx8ITE9PT1uLmRyb3Bkb3duLmVuYWJsZXx8dGhpcy5zdGF0ZS5pc0xvYWRpbmd8fHRoaXMuc2V0dGluZ3MucmVhZG9ubHkpKXtpZihjbGVhclRpbWVvdXQodGhpcy5kcm9wZG93bkhpZGVfX2JpbmRFdmVudHNUaW1lb3V0KSx0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcz10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcyh0KSx0JiYhdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMubGVuZ3RoJiYodGhpcy50cmlnZ2VyKFwiZHJvcGRvd246bm9NYXRjaFwiLHQpLG4udGVtcGxhdGVzLmRyb3Bkb3duSXRlbU5vTWF0Y2gmJihhPW4udGVtcGxhdGVzLmRyb3Bkb3duSXRlbU5vTWF0Y2guY2FsbCh0aGlzLHt2YWx1ZTp0fSkpKSwhYSl7aWYodGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMubGVuZ3RoKXQmJm8mJiF0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUmJiFzKHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zWzBdLnZhbHVlLHQpJiZ0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy51bnNoaWZ0KHt2YWx1ZTp0fSk7ZWxzZXtpZighdHx8IW98fHRoaXMuc3RhdGUuZWRpdGluZy5zY29wZSlyZXR1cm4gdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMpLHZvaWQgdGhpcy5kcm9wZG93bi5oaWRlKCk7dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXM9W3t2YWx1ZTp0fV19aT1cIlwiKyhoKGU9dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXNbMF0pP2UudmFsdWU6ZSksbi5hdXRvQ29tcGxldGUmJmkmJjA9PWkuaW5kZXhPZih0KSYmdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMsZSl9dGhpcy5kcm9wZG93bi5maWxsKGEpLG4uZHJvcGRvd24uaGlnaGxpZ2h0Rmlyc3QmJnRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKHRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQuY2hpbGRyZW5bMF0pLHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZXx8c2V0VGltZW91dCh0aGlzLmRyb3Bkb3duLmV2ZW50cy5iaW5kaW5nLmJpbmQodGhpcykpLHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZT10fHwhMCx0aGlzLnN0YXRlLmRyb3Bkb3duLnF1ZXJ5PXQsdGhpcy5zZXRTdGF0ZVNlbGVjdGlvbigpLGx8fHNldFRpbWVvdXQoKCgpPT57dGhpcy5kcm9wZG93bi5wb3NpdGlvbigpLHRoaXMuZHJvcGRvd24ucmVuZGVyKCl9KSksc2V0VGltZW91dCgoKCk9Pnt0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpzaG93XCIsdGhpcy5ET00uZHJvcGRvd24pfSkpfX0saGlkZSh0KXt2YXIgZT10aGlzLkRPTSxpPWUuc2NvcGUscz1lLmRyb3Bkb3duLGE9XCJtYW51YWxcIj09dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5wb3NpdGlvbiYmIXQ7aWYocyYmZG9jdW1lbnQuYm9keS5jb250YWlucyhzKSYmIWEpcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5kcm9wZG93bi5wb3NpdGlvbiksdGhpcy5kcm9wZG93bi5ldmVudHMuYmluZGluZy5jYWxsKHRoaXMsITEpLGkuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCExKSxzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocyksc2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGU9ITF9KSwxMDApLHRoaXMuc3RhdGUuZHJvcGRvd24ucXVlcnk9dGhpcy5zdGF0ZS5kZEl0ZW1EYXRhPXRoaXMuc3RhdGUuZGRJdGVtRWxtPXRoaXMuc3RhdGUuc2VsZWN0aW9uPW51bGwsdGhpcy5zdGF0ZS50YWcmJnRoaXMuc3RhdGUudGFnLnZhbHVlLmxlbmd0aCYmKHRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3NbdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldF09dGhpcy5zdGF0ZS50YWcpLHRoaXMudHJpZ2dlcihcImRyb3Bkb3duOmhpZGVcIixzKSx0aGlzfSx0b2dnbGUodCl7dGhpcy5kcm9wZG93blt0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJiF0P1wiaGlkZVwiOlwic2hvd1wiXSgpfSxyZW5kZXIoKXt2YXIgdCxlLGkscz0odD10aGlzLkRPTS5kcm9wZG93biwoaT10LmNsb25lTm9kZSghMCkpLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDsgdG9wOi05OTk5cHg7IG9wYWNpdHk6MFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaSksZT1pLmNsaWVudEhlaWdodCxpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksZSksYT10aGlzLnNldHRpbmdzO3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhLmRyb3Bkb3duLmVuYWJsZWQmJmEuZHJvcGRvd24uZW5hYmxlZD49MD8odGhpcy5ET00uc2NvcGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuRE9NLmRyb3Bkb3duKXx8KHRoaXMuRE9NLmRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoYS5jbGFzc05hbWVzLmRyb3Bkb3duSW5pdGFsKSx0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKHMpLGEuZHJvcGRvd24uYXBwZW5kVGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuRE9NLmRyb3Bkb3duKSxzZXRUaW1lb3V0KCgoKT0+dGhpcy5ET00uZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShhLmNsYXNzTmFtZXMuZHJvcGRvd25Jbml0YWwpKSkpLHRoaXMpOnRoaXN9LGZpbGwodCl7dD1cInN0cmluZ1wiPT10eXBlb2YgdD90OnRoaXMuZHJvcGRvd24uY3JlYXRlTGlzdEhUTUwodHx8dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMpO3ZhciBlLGk9dGhpcy5zZXR0aW5ncy50ZW1wbGF0ZXMuZHJvcGRvd25Db250ZW50LmNhbGwodGhpcyx0KTt0aGlzLkRPTS5kcm9wZG93bi5jb250ZW50LmlubmVySFRNTD0oZT1pKT9lLnJlcGxhY2UoL1xcPltcXHJcXG4gXStcXDwvZyxcIj48XCIpLnJlcGxhY2UoLyg8Lio/Pil8XFxzKy9nLCgodCxlKT0+ZXx8XCIgXCIpKTpcIlwifSxmaWxsSGVhZGVyRm9vdGVyKCl7dGhpcy5zZXR0aW5ncy50ZW1wbGF0ZXM7dmFyIHQ9dGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXModGhpcy5zdGF0ZS5kcm9wZG93bi5xdWVyeSksZT10aGlzLnBhcnNlVGVtcGxhdGUoXCJkcm9wZG93bkhlYWRlclwiLFt0XSksaT10aGlzLnBhcnNlVGVtcGxhdGUoXCJkcm9wZG93bkZvb3RlclwiLFt0XSkscz10aGlzLmRyb3Bkb3duLmdldEhlYWRlclJlZigpLGE9dGhpcy5kcm9wZG93bi5nZXRGb290ZXJSZWYoKTtlJiZzPy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlLHMpLGkmJmE/LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGksYSl9LHJlZmlsdGVyKHQpe3Q9dHx8dGhpcy5zdGF0ZS5kcm9wZG93bi5xdWVyeXx8XCJcIix0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcz10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcyh0KSx0aGlzLmRyb3Bkb3duLmZpbGwoKSx0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5sZW5ndGh8fHRoaXMuZHJvcGRvd24uaGlkZSgpLHRoaXMudHJpZ2dlcihcImRyb3Bkb3duOnVwZGF0ZWRcIix0aGlzLkRPTS5kcm9wZG93bil9LHBvc2l0aW9uKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MuZHJvcGRvd247aWYoXCJtYW51YWxcIiE9ZS5wb3NpdGlvbil7dmFyIGkscyxhLG4sbyxyLGw9dGhpcy5ET00uZHJvcGRvd24sZD1lLnBsYWNlQWJvdmUsaD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGc9TWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofHwwLHdpbmRvdy5pbm5lcldpZHRofHwwKT40ODA/ZS5wb3NpdGlvbjpcImFsbFwiLHA9dGhpcy5ET01bXCJpbnB1dFwiPT1nP1wiaW5wdXRcIjpcInNjb3BlXCJdO3Q9dHx8bC5jbGllbnRIZWlnaHQsdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiYoXCJ0ZXh0XCI9PWc/KGE9KGk9dGhpcy5nZXRDYXJldEdsb2JhbFBvc2l0aW9uKCkpLmJvdHRvbSxzPWkudG9wLG49aS5sZWZ0LG89XCJhdXRvXCIpOihyPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLGk9MDt0OyllKz10Lm9mZnNldExlZnR8fDAsaSs9dC5vZmZzZXRUb3B8fDAsdD10LnBhcmVudE5vZGU7cmV0dXJue2xlZnQ6ZSx0b3A6aX19KHRoaXMuc2V0dGluZ3MuZHJvcGRvd24uYXBwZW5kVGFyZ2V0KSxzPShpPXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLnRvcC1yLnRvcCxhPWkuYm90dG9tLTEtci50b3Asbj1pLmxlZnQtci5sZWZ0LG89aS53aWR0aCtcInB4XCIpLHM9TWF0aC5mbG9vcihzKSxhPU1hdGguY2VpbChhKSxkPXZvaWQgMD09PWQ/aC1pLmJvdHRvbTx0OmQsbC5zdHlsZS5jc3NUZXh0PVwibGVmdDpcIisobit3aW5kb3cucGFnZVhPZmZzZXQpK1wicHg7IHdpZHRoOlwiK28rXCI7XCIrKGQ/XCJ0b3A6IFwiKyhzK3dpbmRvdy5wYWdlWU9mZnNldCkrXCJweFwiOlwidG9wOiBcIisoYSt3aW5kb3cucGFnZVlPZmZzZXQpK1wicHhcIiksbC5zZXRBdHRyaWJ1dGUoXCJwbGFjZW1lbnRcIixkP1widG9wXCI6XCJib3R0b21cIiksbC5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLGcpKX19LGV2ZW50czp7YmluZGluZygpe2xldCB0PSEoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0pfHxhcmd1bWVudHNbMF07dmFyIGU9dGhpcy5kcm9wZG93bi5ldmVudHMuY2FsbGJhY2tzLGk9dGhpcy5saXN0ZW5lcnMuZHJvcGRvd249dGhpcy5saXN0ZW5lcnMuZHJvcGRvd258fHtwb3NpdGlvbjp0aGlzLmRyb3Bkb3duLnBvc2l0aW9uLmJpbmQodGhpcyksb25LZXlEb3duOmUub25LZXlEb3duLmJpbmQodGhpcyksb25Nb3VzZU92ZXI6ZS5vbk1vdXNlT3Zlci5iaW5kKHRoaXMpLG9uTW91c2VMZWF2ZTplLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLG9uQ2xpY2s6ZS5vbkNsaWNrLmJpbmQodGhpcyksb25TY3JvbGw6ZS5vblNjcm9sbC5iaW5kKHRoaXMpfSxzPXQ/XCJhZGRFdmVudExpc3RlbmVyXCI6XCJyZW1vdmVFdmVudExpc3RlbmVyXCI7XCJtYW51YWxcIiE9dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5wb3NpdGlvbiYmKHdpbmRvd1tzXShcInJlc2l6ZVwiLGkucG9zaXRpb24pLHdpbmRvd1tzXShcImtleWRvd25cIixpLm9uS2V5RG93bikpLHRoaXMuRE9NLmRyb3Bkb3duW3NdKFwibW91c2VvdmVyXCIsaS5vbk1vdXNlT3ZlciksdGhpcy5ET00uZHJvcGRvd25bc10oXCJtb3VzZWxlYXZlXCIsaS5vbk1vdXNlTGVhdmUpLHRoaXMuRE9NLmRyb3Bkb3duW3NdKFwibW91c2Vkb3duXCIsaS5vbkNsaWNrKSx0aGlzLkRPTS5kcm9wZG93bi5jb250ZW50W3NdKFwic2Nyb2xsXCIsaS5vblNjcm9sbCl9LGNhbGxiYWNrczp7b25LZXlEb3duKHQpe2lmKHRoaXMuc3RhdGUuaGFzRm9jdXMpe3ZhciBlPXRoaXMuRE9NLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbUFjdGl2ZVNlbGVjdG9yKSxpPXRoaXMuZHJvcGRvd24uZ2V0U3VnZ2VzdGlvbkRhdGFCeU5vZGUoZSk7c3dpdGNoKHQua2V5KXtjYXNlXCJBcnJvd0Rvd25cIjpjYXNlXCJBcnJvd1VwXCI6Y2FzZVwiRG93blwiOmNhc2VcIlVwXCI6dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBzPXRoaXMuZHJvcGRvd24uZ2V0QWxsU3VnZ2VzdGlvbnNSZWZzKCksYT1cIkFycm93VXBcIj09dC5rZXl8fFwiVXBcIj09dC5rZXk7ZSYmKGU9dGhpcy5kcm9wZG93bi5nZXROZXh0T3JQcmV2T3B0aW9uKGUsIWEpKSxlJiZlLm1hdGNoZXModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbVNlbGVjdG9yKXx8KGU9c1thP3MubGVuZ3RoLTE6MF0pLGk9dGhpcy5kcm9wZG93bi5nZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZShlKSx0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbihlLCEwKTticmVhaztjYXNlXCJFc2NhcGVcIjpjYXNlXCJFc2NcIjp0aGlzLmRyb3Bkb3duLmhpZGUoKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6aWYodGhpcy5zdGF0ZS5hY3Rpb25zLkFycm93TGVmdClyZXR1cm47Y2FzZVwiVGFiXCI6aWYoXCJtaXhcIiE9dGhpcy5zZXR0aW5ncy5tb2RlJiZlJiYhdGhpcy5zZXR0aW5ncy5hdXRvQ29tcGxldGUucmlnaHRLZXkmJiF0aGlzLnN0YXRlLmVkaXRpbmcpe3QucHJldmVudERlZmF1bHQoKTt2YXIgbj10aGlzLmRyb3Bkb3duLmdldE1hcHBlZFZhbHVlKGkpO3JldHVybiB0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zZXQuY2FsbCh0aGlzLG4pLCExfXJldHVybiEwO2Nhc2VcIkVudGVyXCI6dC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuc2V0dGluZ3MuaG9va3Muc3VnZ2VzdGlvbkNsaWNrKHQse3RhZ2lmeTp0aGlzLHRhZ0RhdGE6aSxzdWdnZXN0aW9uRWxtOmV9KS50aGVuKCgoKT0+e2lmKGUpcmV0dXJuIHRoaXMuZHJvcGRvd24uc2VsZWN0T3B0aW9uKGUpLGU9dGhpcy5kcm9wZG93bi5nZXROZXh0T3JQcmV2T3B0aW9uKGUsIWEpLHZvaWQgdGhpcy5kcm9wZG93bi5oaWdobGlnaHRPcHRpb24oZSk7dGhpcy5kcm9wZG93bi5oaWRlKCksXCJtaXhcIiE9dGhpcy5zZXR0aW5ncy5tb2RlJiZ0aGlzLmFkZFRhZ3ModGhpcy5zdGF0ZS5pbnB1dFRleHQudHJpbSgpLCEwKX0pKS5jYXRjaCgodD0+dCkpO2JyZWFrO2Nhc2VcIkJhY2tzcGFjZVwiOntpZihcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGV8fHRoaXMuc3RhdGUuZWRpdGluZy5zY29wZSlyZXR1cm47Y29uc3QgdD10aGlzLmlucHV0LnJhdy5jYWxsKHRoaXMpO1wiXCIhPXQmJjgyMDMhPXQuY2hhckNvZGVBdCgwKXx8KCEwPT09dGhpcy5zZXR0aW5ncy5iYWNrc3BhY2U/dGhpcy5yZW1vdmVUYWdzKCk6XCJlZGl0XCI9PXRoaXMuc2V0dGluZ3MuYmFja3NwYWNlJiZzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDApKX19fX0sb25Nb3VzZU92ZXIodCl7dmFyIGU9dC50YXJnZXQuY2xvc2VzdCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtU2VsZWN0b3IpO2UmJnRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKGUpfSxvbk1vdXNlTGVhdmUodCl7dGhpcy5kcm9wZG93bi5oaWdobGlnaHRPcHRpb24oKX0sb25DbGljayh0KXtpZigwPT10LmJ1dHRvbiYmdC50YXJnZXQhPXRoaXMuRE9NLmRyb3Bkb3duJiZ0LnRhcmdldCE9dGhpcy5ET00uZHJvcGRvd24uY29udGVudCl7dmFyIGU9dC50YXJnZXQuY2xvc2VzdCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtU2VsZWN0b3IpLGk9dGhpcy5kcm9wZG93bi5nZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZShlKTt0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uPSEwLHNldFRpbWVvdXQoKCgpPT50aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uPSExKSw1MCksdGhpcy5zZXR0aW5ncy5ob29rcy5zdWdnZXN0aW9uQ2xpY2sodCx7dGFnaWZ5OnRoaXMsdGFnRGF0YTppLHN1Z2dlc3Rpb25FbG06ZX0pLnRoZW4oKCgpPT57ZT90aGlzLmRyb3Bkb3duLnNlbGVjdE9wdGlvbihlLHQpOnRoaXMuZHJvcGRvd24uaGlkZSgpfSkpLmNhdGNoKCh0PT5jb25zb2xlLndhcm4odCkpKX19LG9uU2Nyb2xsKHQpe3ZhciBlPXQudGFyZ2V0LGk9ZS5zY3JvbGxUb3AvKGUuc2Nyb2xsSGVpZ2h0LWUucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQpKjEwMDt0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpzY3JvbGxcIix7cGVyY2VudGFnZTpNYXRoLnJvdW5kKGkpfSl9fX0sZ2V0U3VnZ2VzdGlvbkRhdGFCeU5vZGUodCl7dmFyIGU9dCYmdC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm4gdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMuZmluZCgodD0+dC52YWx1ZT09ZSkpfHxudWxsfSxnZXROZXh0T3JQcmV2T3B0aW9uKHQpe2xldCBlPSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07dmFyIGk9dGhpcy5kcm9wZG93bi5nZXRBbGxTdWdnZXN0aW9uc1JlZnMoKSxzPWkuZmluZEluZGV4KChlPT5lPT09dCkpO3JldHVybiBlP2lbcysxXTppW3MtMV19LGhpZ2hsaWdodE9wdGlvbih0LGUpe3ZhciBpLHM9dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbUFjdGl2ZTtpZih0aGlzLnN0YXRlLmRkSXRlbUVsbSYmKHRoaXMuc3RhdGUuZGRJdGVtRWxtLmNsYXNzTGlzdC5yZW1vdmUocyksdGhpcy5zdGF0ZS5kZEl0ZW1FbG0ucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiKSksIXQpcmV0dXJuIHRoaXMuc3RhdGUuZGRJdGVtRGF0YT1udWxsLHRoaXMuc3RhdGUuZGRJdGVtRWxtPW51bGwsdm9pZCB0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyk7aT10aGlzLnN1Z2dlc3RlZExpc3RJdGVtc1t0aGlzLmdldE5vZGVJbmRleCh0KV0sdGhpcy5zdGF0ZS5kZEl0ZW1EYXRhPWksdGhpcy5zdGF0ZS5kZEl0ZW1FbG09dCx0LmNsYXNzTGlzdC5hZGQocyksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsITApLGUmJih0LnBhcmVudE5vZGUuc2Nyb2xsVG9wPXQuY2xpZW50SGVpZ2h0K3Qub2Zmc2V0VG9wLXQucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQpLHRoaXMuc2V0dGluZ3MuYXV0b0NvbXBsZXRlJiYodGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMsaSksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpKX0sc2VsZWN0T3B0aW9uKHQsZSl7dmFyIGk9dGhpcy5zZXR0aW5ncy5kcm9wZG93bixzPWkuY2xlYXJPblNlbGVjdCxhPWkuY2xvc2VPblNlbGVjdDtpZighdClyZXR1cm4gdGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUuaW5wdXRUZXh0LCEwKSx2b2lkKGEmJnRoaXMuZHJvcGRvd24uaGlkZSgpKTtlPWV8fHt9O3ZhciBuPXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksbz1cIm5vTWF0Y2hcIj09bixyPXRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmZpbmQoKHQ9Pih0LnZhbHVlfHx0KT09bikpO3RoaXMudHJpZ2dlcihcImRyb3Bkb3duOnNlbGVjdFwiLHtkYXRhOnIsZWxtOnQsZXZlbnQ6ZX0pLG4mJihyfHxvKT8odGhpcy5zdGF0ZS5lZGl0aW5nP3RoaXMub25FZGl0VGFnRG9uZShudWxsLGcoe19faXNWYWxpZDohMH0sdGhpcy5ub3JtYWxpemVUYWdzKFtyXSlbMF0pKTp0aGlzW1wibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT9cImFkZE1peFRhZ3NcIjpcImFkZFRhZ3NcIl0oW3J8fHRoaXMuaW5wdXQucmF3LmNhbGwodGhpcyldLHMpLHRoaXMuRE9NLmlucHV0LnBhcmVudE5vZGUmJihzZXRUaW1lb3V0KCgoKT0+e3RoaXMuRE9NLmlucHV0LmZvY3VzKCksdGhpcy50b2dnbGVGb2N1c0NsYXNzKCEwKX0pKSxhJiZzZXRUaW1lb3V0KHRoaXMuZHJvcGRvd24uaGlkZS5iaW5kKHRoaXMpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsKCgpPT57dGhpcy5kcm9wZG93bi5maWxsSGVhZGVyRm9vdGVyKCksc2V0VGltZW91dCgoKCk9PnQucmVtb3ZlKCkpLDEwMCl9KSx7b25jZTohMH0pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtSGlkZGVuKSkpOmEmJnNldFRpbWVvdXQodGhpcy5kcm9wZG93bi5oaWRlLmJpbmQodGhpcykpfSxzZWxlY3RBbGwodCl7dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMubGVuZ3RoPTAsdGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXMoXCJcIik7dmFyIGU9dGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXMoXCJcIik7cmV0dXJuIHR8fChlPXRoaXMuc3RhdGUuZHJvcGRvd24uc3VnZ2VzdGlvbnMpLHRoaXMuYWRkVGFncyhlLCEwKSx0aGlzfSxmaWx0ZXJMaXN0SXRlbXModCxlKXt2YXIgaSxzLGEsbixvLHI9dGhpcy5zZXR0aW5ncyxsPXIuZHJvcGRvd24sZD0oZT1lfHx7fSxbXSksZz1bXSxwPXIud2hpdGVsaXN0LHU9bC5tYXhJdGVtcz49MD9sLm1heEl0ZW1zOjEvMCxtPWwuc2VhcmNoS2V5cyx2PTA7aWYoISh0PVwic2VsZWN0XCI9PXIubW9kZSYmdGhpcy52YWx1ZS5sZW5ndGgmJnRoaXMudmFsdWVbMF1bci50YWdUZXh0UHJvcF09PXQ/XCJcIjp0KXx8IW0ubGVuZ3RoKXJldHVybiBkPXIuZHVwbGljYXRlcz9wOnAuZmlsdGVyKCh0PT4hdGhpcy5pc1RhZ0R1cGxpY2F0ZShoKHQpP3QudmFsdWU6dCkpKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnN1Z2dlc3Rpb25zPWQsZC5zbGljZSgwLHUpO2Z1bmN0aW9uIGYodCxlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5ldmVyeSgoZT0+dC5pbmNsdWRlcyhlLnRvTG93ZXJDYXNlKCkpKSl9Zm9yKG89bC5jYXNlU2Vuc2l0aXZlP1wiXCIrdDooXCJcIit0KS50b0xvd2VyQ2FzZSgpO3Y8cC5sZW5ndGg7disrKXtsZXQgdCx1O2k9cFt2XWluc3RhbmNlb2YgT2JqZWN0P3Bbdl06e3ZhbHVlOnBbdl19O2xldCBUPSFPYmplY3Qua2V5cyhpKS5zb21lKCh0PT5tLmluY2x1ZGVzKHQpKSk/W1widmFsdWVcIl06bTtsLmZ1enp5U2VhcmNoJiYhZS5leGFjdD8oYT1ULnJlZHVjZSgoKHQsZSk9PnQrXCIgXCIrKGlbZV18fFwiXCIpKSxcIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKSxsLmFjY2VudGVkU2VhcmNoJiYoYT1jKGEpLG89YyhvKSksdD0wPT1hLmluZGV4T2YobyksdT1hPT09byxzPWYoYSxvKSk6KHQ9ITAscz1ULnNvbWUoKHQ9Pnt2YXIgcz1cIlwiKyhpW3RdfHxcIlwiKTtyZXR1cm4gbC5hY2NlbnRlZFNlYXJjaCYmKHM9YyhzKSxvPWMobykpLGwuY2FzZVNlbnNpdGl2ZXx8KHM9cy50b0xvd2VyQ2FzZSgpKSx1PXM9PT1vLGUuZXhhY3Q/cz09PW86MD09cy5pbmRleE9mKG8pfSkpKSxuPSFyLmR1cGxpY2F0ZXMmJnRoaXMuaXNUYWdEdXBsaWNhdGUoaChpKT9pLnZhbHVlOmkpLHMmJiFuJiYodSYmdD9nLnB1c2goaSk6XCJzdGFydHNXaXRoXCI9PWwuc29ydGJ5JiZ0P2QudW5zaGlmdChpKTpkLnB1c2goaSkpfXJldHVybiB0aGlzLnN0YXRlLmRyb3Bkb3duLnN1Z2dlc3Rpb25zPWcuY29uY2F0KGQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwuc29ydGJ5P2wuc29ydGJ5KGcuY29uY2F0KGQpLG8pOmcuY29uY2F0KGQpLnNsaWNlKDAsdSl9LGdldE1hcHBlZFZhbHVlKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ubWFwVmFsdWVUbztyZXR1cm4gZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UodCk6dFtlXXx8dC52YWx1ZTp0LnZhbHVlfSxjcmVhdGVMaXN0SFRNTCh0KXtyZXR1cm4gZyhbXSx0KS5tYXAoKCh0LGkpPT57XCJzdHJpbmdcIiE9dHlwZW9mIHQmJlwibnVtYmVyXCIhPXR5cGVvZiB0fHwodD17dmFsdWU6dH0pO3ZhciBzPXRoaXMuZHJvcGRvd24uZ2V0TWFwcGVkVmFsdWUodCk7cmV0dXJuIHM9XCJzdHJpbmdcIj09dHlwZW9mIHM/ZChzKTpzLHRoaXMuc2V0dGluZ3MudGVtcGxhdGVzLmRyb3Bkb3duSXRlbS5hcHBseSh0aGlzLFtlKGUoe30sdCkse30se21hcHBlZFZhbHVlOnN9KSx0aGlzXSl9KSkuam9pbihcIlwiKX19O2NvbnN0IGI9XCJAeWFpcmVvL3RhZ2lmeS9cIjt2YXIgeSx4PXtlbXB0eTpcImVtcHR5XCIsZXhjZWVkOlwibnVtYmVyIG9mIHRhZ3MgZXhjZWVkZWRcIixwYXR0ZXJuOlwicGF0dGVybiBtaXNtYXRjaFwiLGR1cGxpY2F0ZTpcImFscmVhZHkgZXhpc3RzXCIsbm90QWxsb3dlZDpcIm5vdCBhbGxvd2VkXCJ9LE89e3dyYXBwZXI6KHQsZSk9PmA8dGFncyBjbGFzcz1cIiR7ZS5jbGFzc05hbWVzLm5hbWVzcGFjZX0gJHtlLm1vZGU/YCR7ZS5jbGFzc05hbWVzW2UubW9kZStcIk1vZGVcIl19YDpcIlwifSAke3QuY2xhc3NOYW1lfVwiXFxuICAgICAgICAgICAgICAgICAgICAke2UucmVhZG9ubHk/XCJyZWFkb25seVwiOlwiXCJ9XFxuICAgICAgICAgICAgICAgICAgICAke2UuZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOlwiXCJ9XFxuICAgICAgICAgICAgICAgICAgICAke2UucmVxdWlyZWQ/XCJyZXF1aXJlZFwiOlwiXCJ9XFxuICAgICAgICAgICAgICAgICAgICAke1wic2VsZWN0XCI9PT1lLm1vZGU/XCJzcGVsbGNoZWNrPSdmYWxzZSdcIjpcIlwifVxcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiPlxcbiAgICAgICAgICAgIDxzcGFuICR7IWUucmVhZG9ubHkmJmUudXNlcklucHV0P1wiY29udGVudGVkaXRhYmxlXCI6XCJcIn0gdGFiSW5kZXg9XCIwXCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7ZS5wbGFjZWhvbGRlcnx8XCImIzgyMDM7XCJ9XCIgYXJpYS1wbGFjZWhvbGRlcj1cIiR7ZS5wbGFjZWhvbGRlcnx8XCJcIn1cIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7ZS5jbGFzc05hbWVzLmlucHV0fVwiXFxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcXG4gICAgICAgICAgICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCJib3RoXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1tdWx0aWxpbmU9XCIke1wibWl4XCI9PWUubW9kZX1cIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICYjODIwMztcXG4gICAgICAgIDwvdGFncz5gLHRhZyh0LGUpe2xldCBpPWUuc2V0dGluZ3M7cmV0dXJuYDx0YWcgdGl0bGU9XCIke3QudGl0bGV8fHQudmFsdWV9XCJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRlZGl0YWJsZT0nZmFsc2UnXFxuICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPSdmYWxzZSdcXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiJHtpLmExMXkuZm9jdXNhYmxlVGFncz8wOi0xfVwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIiR7aS5jbGFzc05hbWVzLnRhZ30gJHt0LmNsYXNzfHxcIlwifVwiXFxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuZ2V0QXR0cmlidXRlcyh0KX0+XFxuICAgICAgICAgICAgPHggdGl0bGU9JycgY2xhc3M9XCIke2kuY2xhc3NOYW1lcy50YWdYfVwiIHJvbGU9J2J1dHRvbicgYXJpYS1sYWJlbD0ncmVtb3ZlIHRhZyc+PC94PlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHtpLmNsYXNzTmFtZXMudGFnVGV4dH1cIj4ke3RbaS50YWdUZXh0UHJvcF18fHQudmFsdWV9PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC90YWc+YH0sZHJvcGRvd24odCl7dmFyIGU9dC5kcm9wZG93bixpPVwibWFudWFsXCI9PWUucG9zaXRpb24scz1gJHt0LmNsYXNzTmFtZXMuZHJvcGRvd259YDtyZXR1cm5gPGRpdiBjbGFzcz1cIiR7aT9cIlwiOnN9ICR7ZS5jbGFzc25hbWV9XCIgcm9sZT1cImxpc3Rib3hcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93blwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNlbGVjdG9yPSd0YWdpZnktc3VnZ2VzdGlvbnMtd3JhcHBlcicgY2xhc3M9XCIke3QuY2xhc3NOYW1lcy5kcm9wZG93bldyYXBwZXJ9XCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PmB9LGRyb3Bkb3duQ29udGVudCh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9dGhpcy5zdGF0ZS5kcm9wZG93bi5zdWdnZXN0aW9ucztyZXR1cm5gXFxuICAgICAgICAgICAgJHtlLnRlbXBsYXRlcy5kcm9wZG93bkhlYWRlci5jYWxsKHRoaXMsaSl9XFxuICAgICAgICAgICAgJHt0fVxcbiAgICAgICAgICAgICR7ZS50ZW1wbGF0ZXMuZHJvcGRvd25Gb290ZXIuY2FsbCh0aGlzLGkpfVxcbiAgICAgICAgYH0sZHJvcGRvd25JdGVtKHQpe3JldHVybmA8ZGl2ICR7dGhpcy5nZXRBdHRyaWJ1dGVzKHQpfVxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9JyR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbX0gJHt0LmNsYXNzP3QuY2xhc3M6XCJcIn0nXFxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm9wdGlvblwiPiR7dC5tYXBwZWRWYWx1ZXx8dC52YWx1ZX08L2Rpdj5gfSxkcm9wZG93bkhlYWRlcih0KXtyZXR1cm5gPGhlYWRlciBkYXRhLXNlbGVjdG9yPSd0YWdpZnktc3VnZ2VzdGlvbnMtaGVhZGVyJyBjbGFzcz1cIiR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSGVhZGVyfVwiPjwvaGVhZGVyPmB9LGRyb3Bkb3duRm9vdGVyKHQpe3ZhciBlPXQubGVuZ3RoLXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ubWF4SXRlbXM7cmV0dXJuIGU+MD9gPGZvb3RlciBkYXRhLXNlbGVjdG9yPSd0YWdpZnktc3VnZ2VzdGlvbnMtZm9vdGVyJyBjbGFzcz1cIiR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duRm9vdGVyfVwiPlxcbiAgICAgICAgICAgICAgICAke2V9IG1vcmUgaXRlbXMuIFJlZmluZSB5b3VyIHNlYXJjaC5cXG4gICAgICAgICAgICA8L2Zvb3Rlcj5gOlwiXCJ9LGRyb3Bkb3duSXRlbU5vTWF0Y2g6bnVsbH07ZnVuY3Rpb24gRCh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtmdW5jdGlvbiBpKHQsaSxzKXtzJiZpLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goKGk9PmVbdCtcIkV2ZW50TGlzdGVuZXJcIl0uY2FsbChlLGkscykpKX1yZXR1cm57b2ZmKHQsZSl7cmV0dXJuIGkoXCJyZW1vdmVcIix0LGUpLHRoaXN9LG9uKHQsZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmkoXCJhZGRcIix0LGUpLHRoaXN9LHRyaWdnZXIoaSxzLGEpe3ZhciBuO2lmKGE9YXx8e2Nsb25lRGF0YTohMH0saSlpZih0LnNldHRpbmdzLmlzSlF1ZXJ5UGx1Z2luKVwicmVtb3ZlXCI9PWkmJihpPVwicmVtb3ZlVGFnXCIpLGpRdWVyeSh0LkRPTS5vcmlnaW5hbElucHV0KS50cmlnZ2VySGFuZGxlcihpLFtzXSk7ZWxzZXt0cnl7dmFyIG89XCJvYmplY3RcIj09dHlwZW9mIHM/czp7dmFsdWU6c307aWYoKG89YS5jbG9uZURhdGE/Zyh7fSxvKTpvKS50YWdpZnk9dGhpcyxzLmV2ZW50JiYoby5ldmVudD1mdW5jdGlvbih0KXtpZighdClyZXR1cm47bGV0IGU9bmV3IEZ1bmN0aW9uO2ZvcihsZXQgaSBpbiB0KXtsZXQgcz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsaSk7cyYmKHMuZ2V0fHxzLnNldCk/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSxzKTplW2ldPXRbaV19cmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpLGV9KHMuZXZlbnQpKSxzIGluc3RhbmNlb2YgT2JqZWN0KWZvcih2YXIgciBpbiBzKXNbcl1pbnN0YW5jZW9mIEhUTUxFbGVtZW50JiYob1tyXT1zW3JdKTtuPW5ldyBDdXN0b21FdmVudChpLHtkZXRhaWw6b30pfWNhdGNoKHQpe2NvbnNvbGUud2Fybih0KX1lLmRpc3BhdGNoRXZlbnQobil9fX19dmFyIE09e2N1c3RvbUJpbmRpbmcoKXt0aGlzLmN1c3RvbUV2ZW50c0xpc3QuZm9yRWFjaCgodD0+e3RoaXMub24odCx0aGlzLnNldHRpbmdzLmNhbGxiYWNrc1t0XSl9KSl9LGJpbmRpbmcoKXtsZXQgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdKXx8YXJndW1lbnRzWzBdO3ZhciBlLGk9dGhpcy5ldmVudHMuY2FsbGJhY2tzLHM9dD9cImFkZEV2ZW50TGlzdGVuZXJcIjpcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjtpZighdGhpcy5zdGF0ZS5tYWluRXZlbnRzfHwhdCl7Zm9yKHZhciBhIGluIHRoaXMuc3RhdGUubWFpbkV2ZW50cz10LHQmJiF0aGlzLmxpc3RlbmVycy5tYWluJiYodGhpcy5ldmVudHMuYmluZEdsb2JhbC5jYWxsKHRoaXMpLHRoaXMuc2V0dGluZ3MuaXNKUXVlcnlQbHVnaW4mJmpRdWVyeSh0aGlzLkRPTS5vcmlnaW5hbElucHV0KS5vbihcInRhZ2lmeS5yZW1vdmVBbGxUYWdzXCIsdGhpcy5yZW1vdmVBbGxUYWdzLmJpbmQodGhpcykpKSxlPXRoaXMubGlzdGVuZXJzLm1haW49dGhpcy5saXN0ZW5lcnMubWFpbnx8e2ZvY3VzOltcImlucHV0XCIsaS5vbkZvY3VzQmx1ci5iaW5kKHRoaXMpXSxrZXlkb3duOltcImlucHV0XCIsaS5vbktleWRvd24uYmluZCh0aGlzKV0sY2xpY2s6W1wic2NvcGVcIixpLm9uQ2xpY2tTY29wZS5iaW5kKHRoaXMpXSxkYmxjbGljazpbXCJzY29wZVwiLGkub25Eb3VibGVDbGlja1Njb3BlLmJpbmQodGhpcyldLHBhc3RlOltcImlucHV0XCIsaS5vblBhc3RlLmJpbmQodGhpcyldLGRyb3A6W1wiaW5wdXRcIixpLm9uRHJvcC5iaW5kKHRoaXMpXX0pdGhpcy5ET01bZVthXVswXV1bc10oYSxlW2FdWzFdKTtjbGVhckludGVydmFsKHRoaXMubGlzdGVuZXJzLm1haW4ub3JpZ2luYWxJbnB1dFZhbHVlT2JzZXJ2ZXJJbnRlcnZhbCksdGhpcy5saXN0ZW5lcnMubWFpbi5vcmlnaW5hbElucHV0VmFsdWVPYnNlcnZlckludGVydmFsPXNldEludGVydmFsKGkub2JzZXJ2ZU9yaWdpbmFsSW5wdXRWYWx1ZS5iaW5kKHRoaXMpLDUwMCk7dmFyIG49dGhpcy5saXN0ZW5lcnMubWFpbi5pbnB1dE11dGF0aW9uT2JzZXJ2ZXJ8fG5ldyBNdXRhdGlvbk9ic2VydmVyKGkub25JbnB1dERPTUNoYW5nZS5iaW5kKHRoaXMpKTtuJiZuLmRpc2Nvbm5lY3QoKSxcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJm4ub2JzZXJ2ZSh0aGlzLkRPTS5pbnB1dCx7Y2hpbGRMaXN0OiEwfSl9fSxiaW5kR2xvYmFsKHQpe3ZhciBlLGk9dGhpcy5ldmVudHMuY2FsbGJhY2tzLHM9dD9cInJlbW92ZUV2ZW50TGlzdGVuZXJcIjpcImFkZEV2ZW50TGlzdGVuZXJcIjtpZih0fHwhdGhpcy5saXN0ZW5lcnMuZ2xvYmFsKWZvcihlIG9mKHRoaXMubGlzdGVuZXJzLmdsb2JhbD10aGlzLmxpc3RlbmVycyYmdGhpcy5saXN0ZW5lcnMuZ2xvYmFsfHxbe3R5cGU6dGhpcy5pc0lFP1wia2V5ZG93blwiOlwiaW5wdXRcIix0YXJnZXQ6dGhpcy5ET00uaW5wdXQsY2I6aVt0aGlzLmlzSUU/XCJvbklucHV0SUVcIjpcIm9uSW5wdXRcIl0uYmluZCh0aGlzKX0se3R5cGU6XCJrZXlkb3duXCIsdGFyZ2V0OndpbmRvdyxjYjppLm9uV2luZG93S2V5RG93bi5iaW5kKHRoaXMpfSx7dHlwZTpcImJsdXJcIix0YXJnZXQ6dGhpcy5ET00uaW5wdXQsY2I6aS5vbkZvY3VzQmx1ci5iaW5kKHRoaXMpfV0sdGhpcy5saXN0ZW5lcnMuZ2xvYmFsKSllLnRhcmdldFtzXShlLnR5cGUsZS5jYil9LHVuYmluZEdsb2JhbCgpe3RoaXMuZXZlbnRzLmJpbmRHbG9iYWwuY2FsbCh0aGlzLCEwKX0sY2FsbGJhY2tzOntvbkZvY3VzQmx1cih0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9dC50YXJnZXQ/dGhpcy50cmltKHQudGFyZ2V0LnRleHRDb250ZW50KTpcIlwiLHM9dGhpcy52YWx1ZT8uWzBdPy5bZS50YWdUZXh0UHJvcF0sYT10LnR5cGUsbj1lLmRyb3Bkb3duLmVuYWJsZWQ+PTAsbz17cmVsYXRlZFRhcmdldDp0LnJlbGF0ZWRUYXJnZXR9LHI9dGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbiYmKG58fCFlLmRyb3Bkb3duLmNsb3NlT25TZWxlY3QpLGw9dGhpcy5zdGF0ZS5hY3Rpb25zLmFkZE5ldyYmbixkPXQucmVsYXRlZFRhcmdldCYmdi5jYWxsKHRoaXMsdC5yZWxhdGVkVGFyZ2V0KSYmdGhpcy5ET00uc2NvcGUuY29udGFpbnModC5yZWxhdGVkVGFyZ2V0KTtpZihcImJsdXJcIj09YSl7aWYodC5yZWxhdGVkVGFyZ2V0PT09dGhpcy5ET00uc2NvcGUpcmV0dXJuIHRoaXMuZHJvcGRvd24uaGlkZSgpLHZvaWQgdGhpcy5ET00uaW5wdXQuZm9jdXMoKTt0aGlzLnBvc3RVcGRhdGUoKSxlLm9uQ2hhbmdlQWZ0ZXJCbHVyJiZ0aGlzLnRyaWdnZXJDaGFuZ2VFdmVudCgpfWlmKCFyJiYhbClpZih0aGlzLnN0YXRlLmhhc0ZvY3VzPVwiZm9jdXNcIj09YSYmK25ldyBEYXRlLHRoaXMudG9nZ2xlRm9jdXNDbGFzcyh0aGlzLnN0YXRlLmhhc0ZvY3VzKSxcIm1peFwiIT1lLm1vZGUpe2lmKFwiZm9jdXNcIj09YSlyZXR1cm4gdGhpcy50cmlnZ2VyKFwiZm9jdXNcIixvKSx2b2lkKDAhPT1lLmRyb3Bkb3duLmVuYWJsZWQmJmUudXNlcklucHV0fHx0aGlzLmRyb3Bkb3duLnNob3codGhpcy52YWx1ZS5sZW5ndGg/XCJcIjp2b2lkIDApKTtcImJsdXJcIj09YSYmKHRoaXMudHJpZ2dlcihcImJsdXJcIixvKSx0aGlzLmxvYWRpbmcoITEpLFwic2VsZWN0XCI9PWUubW9kZSYmKGQmJih0aGlzLnJlbW92ZVRhZ3MoKSxpPVwiXCIpLHM9PT1pJiYoaT1cIlwiKSksaSYmIXRoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb24mJmUuYWRkVGFnT25CbHVyJiZ0aGlzLmFkZFRhZ3MoaSwhMCkpLHRoaXMuRE9NLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLHRoaXMuZHJvcGRvd24uaGlkZSgpfWVsc2VcImZvY3VzXCI9PWE/dGhpcy50cmlnZ2VyKFwiZm9jdXNcIixvKTpcImJsdXJcIj09dC50eXBlJiYodGhpcy50cmlnZ2VyKFwiYmx1clwiLG8pLHRoaXMubG9hZGluZyghMSksdGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlPXZvaWQgMCx0aGlzLnNldFN0YXRlU2VsZWN0aW9uKCkpfSxvbldpbmRvd0tleURvd24odCl7dmFyIGUsaT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O2lmKHYuY2FsbCh0aGlzLGkpJiZ0aGlzLkRPTS5zY29wZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlzd2l0Y2goZT1pLm5leHRFbGVtZW50U2libGluZyx0LmtleSl7Y2FzZVwiQmFja3NwYWNlXCI6dGhpcy5zZXR0aW5ncy5yZWFkb25seXx8KHRoaXMucmVtb3ZlVGFncyhpKSwoZXx8dGhpcy5ET00uaW5wdXQpLmZvY3VzKCkpO2JyZWFrO2Nhc2VcIkVudGVyXCI6c2V0VGltZW91dCh0aGlzLmVkaXRUYWcuYmluZCh0aGlzKSwwLGkpfX0sb25LZXlkb3duKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3M7XCJzZWxlY3RcIj09ZS5tb2RlJiZlLmVuZm9yY2VXaGl0ZWxpc3QmJnRoaXMudmFsdWUubGVuZ3RoJiZcIlRhYlwiIT10LmtleSYmdC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBpPXRoaXMudHJpbSh0LnRhcmdldC50ZXh0Q29udGVudCk7aWYodGhpcy50cmlnZ2VyKFwia2V5ZG93blwiLHtvcmlnaW5hbEV2ZW50OnRoaXMuY2xvbmVFdmVudCh0KX0pLFwibWl4XCI9PWUubW9kZSl7c3dpdGNoKHQua2V5KXtjYXNlXCJMZWZ0XCI6Y2FzZVwiQXJyb3dMZWZ0XCI6dGhpcy5zdGF0ZS5hY3Rpb25zLkFycm93TGVmdD0hMDticmVhaztjYXNlXCJEZWxldGVcIjpjYXNlXCJCYWNrc3BhY2VcIjppZih0aGlzLnN0YXRlLmVkaXRpbmcpcmV0dXJuO3ZhciBzLGEsbixyPWRvY3VtZW50LmdldFNlbGVjdGlvbigpLGQ9XCJEZWxldGVcIj09dC5rZXkmJnIuYW5jaG9yT2Zmc2V0PT0oci5hbmNob3JOb2RlLmxlbmd0aHx8MCksaD1yLmFuY2hvck5vZGUucHJldmlvdXNTaWJsaW5nLGc9MT09ci5hbmNob3JOb2RlLm5vZGVUeXBlfHwhci5hbmNob3JPZmZzZXQmJmgmJjE9PWgubm9kZVR5cGUmJnIuYW5jaG9yTm9kZS5wcmV2aW91c1NpYmxpbmcscD1vKHRoaXMuRE9NLmlucHV0LmlubmVySFRNTCksYz10aGlzLmdldFRhZ0VsbXMoKTtpZihcImVkaXRcIj09ZS5iYWNrc3BhY2UmJmcpcmV0dXJuIHM9MT09ci5hbmNob3JOb2RlLm5vZGVUeXBlP251bGw6ci5hbmNob3JOb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsc2V0VGltZW91dCh0aGlzLmVkaXRUYWcuYmluZCh0aGlzKSwwLHMpLHZvaWQgdC5wcmV2ZW50RGVmYXVsdCgpO2lmKHUoKSYmZylyZXR1cm4gbj1sKGcpLGcuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIil8fGcucmVtb3ZlKCksdGhpcy5ET00uaW5wdXQuZm9jdXMoKSx2b2lkIHNldFRpbWVvdXQoKCgpPT57dGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKG4pLHRoaXMuRE9NLmlucHV0LmNsaWNrKCl9KSk7aWYoXCJCUlwiPT1yLmFuY2hvck5vZGUubm9kZU5hbWUpcmV0dXJuO2lmKChkfHxnKSYmMT09ci5hbmNob3JOb2RlLm5vZGVUeXBlP2E9MD09ci5hbmNob3JPZmZzZXQ/ZD9jWzBdOm51bGw6Y1tNYXRoLm1pbihjLmxlbmd0aCxyLmFuY2hvck9mZnNldCktMV06ZD9hPXIuYW5jaG9yTm9kZS5uZXh0RWxlbWVudFNpYmxpbmc6ZyYmKGE9ZyksMz09ci5hbmNob3JOb2RlLm5vZGVUeXBlJiYhci5hbmNob3JOb2RlLm5vZGVWYWx1ZSYmci5hbmNob3JOb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcmJnQucHJldmVudERlZmF1bHQoKSwoZ3x8ZCkmJiFlLmJhY2tzcGFjZSlyZXR1cm4gdm9pZCB0LnByZXZlbnREZWZhdWx0KCk7aWYoXCJSYW5nZVwiIT1yLnR5cGUmJiFyLmFuY2hvck9mZnNldCYmci5hbmNob3JOb2RlPT10aGlzLkRPTS5pbnB1dCYmXCJEZWxldGVcIiE9dC5rZXkpcmV0dXJuIHZvaWQgdC5wcmV2ZW50RGVmYXVsdCgpO2lmKFwiUmFuZ2VcIiE9ci50eXBlJiZhJiZhLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpKXJldHVybiB2b2lkIHRoaXMucGxhY2VDYXJldEFmdGVyTm9kZShsKGEpKTtjbGVhclRpbWVvdXQoeSkseT1zZXRUaW1lb3V0KCgoKT0+e3ZhciB0PWRvY3VtZW50LmdldFNlbGVjdGlvbigpLGU9byh0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUwpLGk9IWQmJnQuYW5jaG9yTm9kZS5wcmV2aW91c1NpYmxpbmc7aWYoZS5sZW5ndGg+PXAubGVuZ3RoJiZpKWlmKHYuY2FsbCh0aGlzLGkpJiYhaS5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSl7aWYodGhpcy5yZW1vdmVUYWdzKGkpLHRoaXMuZml4RmlyZWZveExhc3RUYWdOb0NhcmV0KCksMj09dGhpcy5ET00uaW5wdXQuY2hpbGRyZW4ubGVuZ3RoJiZcIkJSXCI9PXRoaXMuRE9NLmlucHV0LmNoaWxkcmVuWzFdLnRhZ05hbWUpcmV0dXJuIHRoaXMuRE9NLmlucHV0LmlubmVySFRNTD1cIlwiLHRoaXMudmFsdWUubGVuZ3RoPTAsITB9ZWxzZSBpLnJlbW92ZSgpO3RoaXMudmFsdWU9W10ubWFwLmNhbGwoYywoKHQsZSk9Pnt2YXIgaT10aGlzLnRhZ0RhdGEodCk7aWYodC5wYXJlbnROb2RlfHxpLnJlYWRvbmx5KXJldHVybiBpO3RoaXMudHJpZ2dlcihcInJlbW92ZVwiLHt0YWc6dCxpbmRleDplLGRhdGE6aX0pfSkpLmZpbHRlcigodD0+dCkpfSksMjApfXJldHVybiEwfXN3aXRjaCh0LmtleSl7Y2FzZVwiQmFja3NwYWNlXCI6XCJzZWxlY3RcIj09ZS5tb2RlJiZlLmVuZm9yY2VXaGl0ZWxpc3QmJnRoaXMudmFsdWUubGVuZ3RoP3RoaXMucmVtb3ZlVGFncygpOnRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZSYmXCJtYW51YWxcIiE9ZS5kcm9wZG93bi5wb3NpdGlvbnx8XCJcIiE9dC50YXJnZXQudGV4dENvbnRlbnQmJjgyMDMhPWkuY2hhckNvZGVBdCgwKXx8KCEwPT09ZS5iYWNrc3BhY2U/dGhpcy5yZW1vdmVUYWdzKCk6XCJlZGl0XCI9PWUuYmFja3NwYWNlJiZzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDApKTticmVhaztjYXNlXCJFc2NcIjpjYXNlXCJFc2NhcGVcIjppZih0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUpcmV0dXJuO3QudGFyZ2V0LmJsdXIoKTticmVhaztjYXNlXCJEb3duXCI6Y2FzZVwiQXJyb3dEb3duXCI6dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlfHx0aGlzLmRyb3Bkb3duLnNob3coKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6e2xldCB0PXRoaXMuc3RhdGUuaW5wdXRTdWdnZXN0aW9ufHx0aGlzLnN0YXRlLmRkSXRlbURhdGE7aWYodCYmZS5hdXRvQ29tcGxldGUucmlnaHRLZXkpcmV0dXJuIHZvaWQgdGhpcy5hZGRUYWdzKFt0XSwhMCk7YnJlYWt9Y2FzZVwiVGFiXCI6e2xldCBzPVwic2VsZWN0XCI9PWUubW9kZTtpZighaXx8cylyZXR1cm4hMDt0LnByZXZlbnREZWZhdWx0KCl9Y2FzZVwiRW50ZXJcIjppZih0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGV8fDIyOT09dC5rZXlDb2RlKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCksc2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9ufHx0aGlzLmFkZFRhZ3MoaSwhMCl9KSl9fSxvbklucHV0KHQpe3RoaXMucG9zdFVwZGF0ZSgpO3ZhciBlPXRoaXMuc2V0dGluZ3M7aWYoXCJtaXhcIj09ZS5tb2RlKXJldHVybiB0aGlzLmV2ZW50cy5jYWxsYmFja3Mub25NaXhUYWdzSW5wdXQuY2FsbCh0aGlzLHQpO3ZhciBpPXRoaXMuaW5wdXQubm9ybWFsaXplLmNhbGwodGhpcykscz1pLmxlbmd0aD49ZS5kcm9wZG93bi5lbmFibGVkLGE9e3ZhbHVlOmksaW5wdXRFbG06dGhpcy5ET00uaW5wdXR9LG49dGhpcy52YWxpZGF0ZVRhZyh7dmFsdWU6aX0pO1wic2VsZWN0XCI9PWUubW9kZSYmdGhpcy50b2dnbGVTY29wZVZhbGlkYXRpb24obiksYS5pc1ZhbGlkPW4sdGhpcy5zdGF0ZS5pbnB1dFRleHQhPWkmJih0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMsaSwhMSksLTEhPWkuc2VhcmNoKGUuZGVsaW1pdGVycyk/dGhpcy5hZGRUYWdzKGkpJiZ0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMpOmUuZHJvcGRvd24uZW5hYmxlZD49MCYmdGhpcy5kcm9wZG93bltzP1wic2hvd1wiOlwiaGlkZVwiXShpKSx0aGlzLnRyaWdnZXIoXCJpbnB1dFwiLGEpKX0sb25NaXhUYWdzSW5wdXQodCl7dmFyIGUsaSxzLGEsbixvLHIsbCxkPXRoaXMuc2V0dGluZ3MsaD10aGlzLnZhbHVlLmxlbmd0aCxwPXRoaXMuZ2V0VGFnRWxtcygpLGM9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09d2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCksdj1bXS5tYXAuY2FsbChwLCh0PT50aGlzLnRhZ0RhdGEodCkudmFsdWUpKTtpZihcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiPT10LmlucHV0VHlwZSYmdSgpJiZ0aGlzLmV2ZW50cy5jYWxsYmFja3Mub25LZXlkb3duLmNhbGwodGhpcyx7dGFyZ2V0OnQudGFyZ2V0LGtleTpcIkJhY2tzcGFjZVwifSksdGhpcy52YWx1ZS5zbGljZSgpLmZvckVhY2goKHQ9Pnt0LnJlYWRvbmx5JiYhdi5pbmNsdWRlcyh0LnZhbHVlKSYmYy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRhZ0VsZW0odCkpfSkpLGMuY2hpbGROb2Rlcy5sZW5ndGgmJihtLmluc2VydE5vZGUoYyksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoITEsYy5sYXN0Q2hpbGQpKSxwLmxlbmd0aCE9aClyZXR1cm4gdGhpcy52YWx1ZT1bXS5tYXAuY2FsbCh0aGlzLmdldFRhZ0VsbXMoKSwodD0+dGhpcy50YWdEYXRhKHQpKSksdm9pZCB0aGlzLnVwZGF0ZSh7d2l0aG91dENoYW5nZUV2ZW50OiEwfSk7aWYodGhpcy5oYXNNYXhUYWdzKCkpcmV0dXJuITA7aWYod2luZG93LmdldFNlbGVjdGlvbiYmKG89d2luZG93LmdldFNlbGVjdGlvbigpKS5yYW5nZUNvdW50PjAmJjM9PW8uYW5jaG9yTm9kZS5ub2RlVHlwZSl7aWYoKG09by5nZXRSYW5nZUF0KDApLmNsb25lUmFuZ2UoKSkuY29sbGFwc2UoITApLG0uc2V0U3RhcnQoby5mb2N1c05vZGUsMCkscz0oZT1tLnRvU3RyaW5nKCkuc2xpY2UoMCxtLmVuZE9mZnNldCkpLnNwbGl0KGQucGF0dGVybikubGVuZ3RoLTEsKGk9ZS5tYXRjaChkLnBhdHRlcm4pKSYmKGE9ZS5zbGljZShlLmxhc3RJbmRleE9mKGlbaS5sZW5ndGgtMV0pKSksYSl7aWYodGhpcy5zdGF0ZS5hY3Rpb25zLkFycm93TGVmdD0hMSx0aGlzLnN0YXRlLnRhZz17cHJlZml4OmEubWF0Y2goZC5wYXR0ZXJuKVswXSx2YWx1ZTphLnJlcGxhY2UoZC5wYXR0ZXJuLFwiXCIpfSx0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0PW8uYmFzZU9mZnNldC10aGlzLnN0YXRlLnRhZy52YWx1ZS5sZW5ndGgsbD10aGlzLnN0YXRlLnRhZy52YWx1ZS5tYXRjaChkLmRlbGltaXRlcnMpKXJldHVybiB0aGlzLnN0YXRlLnRhZy52YWx1ZT10aGlzLnN0YXRlLnRhZy52YWx1ZS5yZXBsYWNlKGQuZGVsaW1pdGVycyxcIlwiKSx0aGlzLnN0YXRlLnRhZy5kZWxpbWl0ZXJzPWxbMF0sdGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUudGFnLnZhbHVlLGQuZHJvcGRvd24uY2xlYXJPblNlbGVjdCksdm9pZCB0aGlzLmRyb3Bkb3duLmhpZGUoKTtuPXRoaXMuc3RhdGUudGFnLnZhbHVlLmxlbmd0aD49ZC5kcm9wZG93bi5lbmFibGVkO3RyeXtyPShyPXRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3NbdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldF0pLnByZWZpeD09dGhpcy5zdGF0ZS50YWcucHJlZml4JiZyLnZhbHVlWzBdPT10aGlzLnN0YXRlLnRhZy52YWx1ZVswXSx0aGlzLnN0YXRlLmZsYWdnZWRUYWdzW3RoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXRdJiYhdGhpcy5zdGF0ZS50YWcudmFsdWUmJmRlbGV0ZSB0aGlzLnN0YXRlLmZsYWdnZWRUYWdzW3RoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXRdfWNhdGNoKHQpe30ocnx8czx0aGlzLnN0YXRlLm1peE1vZGUubWF0Y2hlZFBhdHRlcm5Db3VudCkmJihuPSExKX1lbHNlIHRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3M9e307dGhpcy5zdGF0ZS5taXhNb2RlLm1hdGNoZWRQYXR0ZXJuQ291bnQ9c31zZXRUaW1lb3V0KCgoKT0+e3RoaXMudXBkYXRlKHt3aXRob3V0Q2hhbmdlRXZlbnQ6ITB9KSx0aGlzLnRyaWdnZXIoXCJpbnB1dFwiLGcoe30sdGhpcy5zdGF0ZS50YWcse3RleHRDb250ZW50OnRoaXMuRE9NLmlucHV0LnRleHRDb250ZW50fSkpLHRoaXMuc3RhdGUudGFnJiZ0aGlzLmRyb3Bkb3duW24/XCJzaG93XCI6XCJoaWRlXCJdKHRoaXMuc3RhdGUudGFnLnZhbHVlKX0pLDEwKX0sb25JbnB1dElFKHQpe3ZhciBlPXRoaXM7c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLmV2ZW50cy5jYWxsYmFja3Mub25JbnB1dC5jYWxsKGUsdCl9KSl9LG9ic2VydmVPcmlnaW5hbElucHV0VmFsdWUoKXt0aGlzLkRPTS5vcmlnaW5hbElucHV0LnBhcmVudE5vZGV8fHRoaXMuZGVzdHJveSgpLHRoaXMuRE9NLm9yaWdpbmFsSW5wdXQudmFsdWUhPXRoaXMuRE9NLm9yaWdpbmFsSW5wdXQudGFnaWZ5VmFsdWUmJnRoaXMubG9hZE9yaWdpbmFsVmFsdWVzKCl9LG9uQ2xpY2tTY29wZSh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9dC50YXJnZXQuY2xvc2VzdChcIi5cIitlLmNsYXNzTmFtZXMudGFnKSxzPStuZXcgRGF0ZS10aGlzLnN0YXRlLmhhc0ZvY3VzO2lmKHQudGFyZ2V0IT10aGlzLkRPTS5zY29wZSl7aWYoIXQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhlLmNsYXNzTmFtZXMudGFnWCkpcmV0dXJuIGk/KHRoaXMudHJpZ2dlcihcImNsaWNrXCIse3RhZzppLGluZGV4OnRoaXMuZ2V0Tm9kZUluZGV4KGkpLGRhdGE6dGhpcy50YWdEYXRhKGkpLG9yaWdpbmFsRXZlbnQ6dGhpcy5jbG9uZUV2ZW50KHQpfSksdm9pZCgxIT09ZS5lZGl0VGFncyYmMSE9PWUuZWRpdFRhZ3MuY2xpY2tzfHx0aGlzLmV2ZW50cy5jYWxsYmFja3Mub25Eb3VibGVDbGlja1Njb3BlLmNhbGwodGhpcyx0KSkpOnZvaWQodC50YXJnZXQ9PXRoaXMuRE9NLmlucHV0JiYoXCJtaXhcIj09ZS5tb2RlJiZ0aGlzLmZpeEZpcmVmb3hMYXN0VGFnTm9DYXJldCgpLHM+NTAwKT90aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGU/dGhpcy5kcm9wZG93bi5oaWRlKCk6MD09PWUuZHJvcGRvd24uZW5hYmxlZCYmXCJtaXhcIiE9ZS5tb2RlJiZ0aGlzLmRyb3Bkb3duLnNob3codGhpcy52YWx1ZS5sZW5ndGg/XCJcIjp2b2lkIDApOlwic2VsZWN0XCI9PWUubW9kZSYmIXRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZSYmdGhpcy5kcm9wZG93bi5zaG93KCkpO3RoaXMucmVtb3ZlVGFncyh0LnRhcmdldC5wYXJlbnROb2RlKX1lbHNlIHRoaXMuc3RhdGUuaGFzRm9jdXN8fHRoaXMuRE9NLmlucHV0LmZvY3VzKCl9LG9uUGFzdGUodCl7dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlLGkscz10aGlzLnNldHRpbmdzO2lmKFwic2VsZWN0XCI9PXMubW9kZSYmcy5lbmZvcmNlV2hpdGVsaXN0fHwhcy51c2VySW5wdXQpcmV0dXJuITE7cy5yZWFkb25seXx8KGU9dC5jbGlwYm9hcmREYXRhfHx3aW5kb3cuY2xpcGJvYXJkRGF0YSxpPWUuZ2V0RGF0YShcIlRleHRcIikscy5ob29rcy5iZWZvcmVQYXN0ZSh0LHt0YWdpZnk6dGhpcyxwYXN0ZWRUZXh0OmksY2xpcGJvYXJkRGF0YTplfSkudGhlbigoZT0+e3ZvaWQgMD09PWUmJihlPWkpLGUmJih0aGlzLmluamVjdEF0Q2FyZXQoZSx3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSksXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP3RoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbk1peFRhZ3NJbnB1dC5jYWxsKHRoaXMsdCk6dGhpcy5zZXR0aW5ncy5wYXN0ZUFzVGFncz90aGlzLmFkZFRhZ3ModGhpcy5zdGF0ZS5pbnB1dFRleHQrZSwhMCk6dGhpcy5zdGF0ZS5pbnB1dFRleHQ9ZSl9KSkuY2F0Y2goKHQ9PnQpKSl9LG9uRHJvcCh0KXt0LnByZXZlbnREZWZhdWx0KCl9LG9uRWRpdFRhZ0lucHV0KHQsZSl7dmFyIGk9dC5jbG9zZXN0KFwiLlwiK3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWcpLHM9dGhpcy5nZXROb2RlSW5kZXgoaSksYT10aGlzLnRhZ0RhdGEoaSksbj10aGlzLmlucHV0Lm5vcm1hbGl6ZS5jYWxsKHRoaXMsdCksbz17W3RoaXMuc2V0dGluZ3MudGFnVGV4dFByb3BdOm4sX190YWdJZDphLl9fdGFnSWR9LHI9dGhpcy52YWxpZGF0ZVRhZyhvKTt0aGlzLmVkaXRUYWdDaGFuZ2VEZXRlY3RlZChnKGEsbykpfHwhMCE9PXQub3JpZ2luYWxJc1ZhbGlkfHwocj0hMCksaS5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdJbnZhbGlkLCEwIT09ciksYS5fX2lzVmFsaWQ9cixpLnRpdGxlPSEwPT09cj9hLnRpdGxlfHxhLnZhbHVlOnIsbi5sZW5ndGg+PXRoaXMuc2V0dGluZ3MuZHJvcGRvd24uZW5hYmxlZCYmKHRoaXMuc3RhdGUuZWRpdGluZyYmKHRoaXMuc3RhdGUuZWRpdGluZy52YWx1ZT1uKSx0aGlzLmRyb3Bkb3duLnNob3cobikpLHRoaXMudHJpZ2dlcihcImVkaXQ6aW5wdXRcIix7dGFnOmksaW5kZXg6cyxkYXRhOmcoe30sdGhpcy52YWx1ZVtzXSx7bmV3VmFsdWU6bn0pLG9yaWdpbmFsRXZlbnQ6dGhpcy5jbG9uZUV2ZW50KGUpfSl9LG9uRWRpdFRhZ0ZvY3VzKHQpe3RoaXMuc3RhdGUuZWRpdGluZz17c2NvcGU6dCxpbnB1dDp0LnF1ZXJ5U2VsZWN0b3IoXCJbY29udGVudGVkaXRhYmxlXVwiKX19LG9uRWRpdFRhZ0JsdXIodCl7aWYodGhpcy5zdGF0ZS5oYXNGb2N1c3x8dGhpcy50b2dnbGVGb2N1c0NsYXNzKCksdGhpcy5ET00uc2NvcGUuY29udGFpbnModCkpe3ZhciBlLGkscz10aGlzLnNldHRpbmdzLGE9dC5jbG9zZXN0KFwiLlwiK3MuY2xhc3NOYW1lcy50YWcpLG49dGhpcy5pbnB1dC5ub3JtYWxpemUuY2FsbCh0aGlzLHQpLG89dGhpcy50YWdEYXRhKGEpLHI9by5fX29yaWdpbmFsRGF0YSxsPXRoaXMuZWRpdFRhZ0NoYW5nZURldGVjdGVkKG8pLGQ9dGhpcy52YWxpZGF0ZVRhZyh7W3MudGFnVGV4dFByb3BdOm4sX190YWdJZDpvLl9fdGFnSWR9KTtpZihuKWlmKGwpe2lmKGU9dGhpcy5oYXNNYXhUYWdzKCksaT1nKHt9LHIse1tzLnRhZ1RleHRQcm9wXTp0aGlzLnRyaW0obiksX19pc1ZhbGlkOmR9KSxzLnRyYW5zZm9ybVRhZy5jYWxsKHRoaXMsaSxyKSwhMCE9PShkPSghZXx8ITA9PT1yLl9faXNWYWxpZCkmJnRoaXMudmFsaWRhdGVUYWcoaSkpKXtpZih0aGlzLnRyaWdnZXIoXCJpbnZhbGlkXCIse2RhdGE6aSx0YWc6YSxtZXNzYWdlOmR9KSxzLmVkaXRUYWdzLmtlZXBJbnZhbGlkKXJldHVybjtzLmtlZXBJbnZhbGlkVGFncz9pLl9faXNWYWxpZD1kOmk9cn1lbHNlIHMua2VlcEludmFsaWRUYWdzJiYoZGVsZXRlIGkudGl0bGUsZGVsZXRlIGlbXCJhcmlhLWludmFsaWRcIl0sZGVsZXRlIGkuY2xhc3MpO3RoaXMub25FZGl0VGFnRG9uZShhLGkpfWVsc2UgdGhpcy5vbkVkaXRUYWdEb25lKGEscik7ZWxzZSB0aGlzLm9uRWRpdFRhZ0RvbmUoYSl9fSxvbkVkaXRUYWdrZXlkb3duKHQsZSl7c3dpdGNoKHRoaXMudHJpZ2dlcihcImVkaXQ6a2V5ZG93blwiLHtvcmlnaW5hbEV2ZW50OnRoaXMuY2xvbmVFdmVudCh0KX0pLHQua2V5KXtjYXNlXCJFc2NcIjpjYXNlXCJFc2NhcGVcIjplLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGUuX190YWdpZnlUYWdEYXRhLl9fb3JpZ2luYWxIVE1MLGUpLHRoaXMuc3RhdGUuZWRpdGluZz0hMTtjYXNlXCJFbnRlclwiOmNhc2VcIlRhYlwiOnQucHJldmVudERlZmF1bHQoKSx0LnRhcmdldC5ibHVyKCl9fSxvbkRvdWJsZUNsaWNrU2NvcGUodCl7dmFyIGUsaSxzPXQudGFyZ2V0LmNsb3Nlc3QoXCIuXCIrdGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZyksYT10aGlzLnRhZ0RhdGEocyksbj10aGlzLnNldHRpbmdzO3MmJm4udXNlcklucHV0JiYhMSE9PWEuZWRpdGFibGUmJihlPXMuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdFZGl0aW5nKSxpPXMuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIiksXCJzZWxlY3RcIj09bi5tb2RlfHxuLnJlYWRvbmx5fHxlfHxpfHwhdGhpcy5zZXR0aW5ncy5lZGl0VGFnc3x8dGhpcy5lZGl0VGFnKHMpLHRoaXMudG9nZ2xlRm9jdXNDbGFzcyghMCksdGhpcy50cmlnZ2VyKFwiZGJsY2xpY2tcIix7dGFnOnMsaW5kZXg6dGhpcy5nZXROb2RlSW5kZXgocyksZGF0YTp0aGlzLnRhZ0RhdGEocyl9KSl9LG9uSW5wdXRET01DaGFuZ2UodCl7dC5mb3JFYWNoKCh0PT57dC5hZGRlZE5vZGVzLmZvckVhY2goKHQ9PntpZihcIjxkaXY+PGJyPjwvZGl2PlwiPT10Lm91dGVySFRNTCl0LnJlcGxhY2VXaXRoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7ZWxzZSBpZigxPT10Lm5vZGVUeXBlJiZ0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ1NlbGVjdG9yKSl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7Mz09dC5jaGlsZE5vZGVzWzBdLm5vZGVUeXBlJiZcIkJSXCIhPXQucHJldmlvdXNTaWJsaW5nLm5vZGVOYW1lJiYoZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcblwiKSksdC5yZXBsYWNlV2l0aChlLC4uLlsuLi50LmNoaWxkTm9kZXNdLnNsaWNlKDAsLTEpKSx0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUoZSl9ZWxzZSBpZih2LmNhbGwodGhpcyx0KSYmKDMhPXQucHJldmlvdXNTaWJsaW5nPy5ub2RlVHlwZXx8dC5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnR8fHQucHJldmlvdXNTaWJsaW5nLnJlbW92ZSgpLHQucHJldmlvdXNTaWJsaW5nJiZcIkJSXCI9PXQucHJldmlvdXNTaWJsaW5nLm5vZGVOYW1lKSl7dC5wcmV2aW91c1NpYmxpbmcucmVwbGFjZVdpdGgoXCJcXG7igItcIik7bGV0IGU9dC5uZXh0U2libGluZyxpPVwiXCI7Zm9yKDtlOylpKz1lLnRleHRDb250ZW50LGU9ZS5uZXh0U2libGluZztpLnRyaW0oKSYmdGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKHQucHJldmlvdXNTaWJsaW5nKX19KSksdC5yZW1vdmVkTm9kZXMuZm9yRWFjaCgodD0+e3QmJlwiQlJcIj09dC5ub2RlTmFtZSYmdi5jYWxsKHRoaXMsZSkmJih0aGlzLnJlbW92ZVRhZ3MoZSksdGhpcy5maXhGaXJlZm94TGFzdFRhZ05vQ2FyZXQoKSl9KSl9KSk7dmFyIGU9dGhpcy5ET00uaW5wdXQubGFzdENoaWxkO2UmJlwiXCI9PWUubm9kZVZhbHVlJiZlLnJlbW92ZSgpLGUmJlwiQlJcIj09ZS5ub2RlTmFtZXx8dGhpcy5ET00uaW5wdXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKX19fTtmdW5jdGlvbiBJKHQsZSl7aWYoIXQpe2NvbnNvbGUud2FybihcIlRhZ2lmeTpcIixcImlucHV0IGVsZW1lbnQgbm90IGZvdW5kXCIsdCk7Y29uc3QgZT1uZXcgUHJveHkodGhpcyx7Z2V0OigpPT4oKT0+ZX0pO3JldHVybiBlfWlmKHQuX190YWdpZnkpcmV0dXJuIGNvbnNvbGUud2FybihcIlRhZ2lmeTogXCIsXCJpbnB1dCBlbGVtZW50IGlzIGFscmVhZHkgVGFnaWZpZWQgLSBTYW1lIGluc3RhbmNlIGlzIHJldHVybmVkLlwiLHQpLHQuX190YWdpZnk7dmFyIGk7Zyh0aGlzLEQodGhpcykpLHRoaXMuaXNGaXJlZm94PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBJbnN0YWxsVHJpZ2dlcix0aGlzLmlzSUU9d2luZG93LmRvY3VtZW50LmRvY3VtZW50TW9kZSxlPWV8fHt9LHRoaXMuZ2V0UGVyc2lzdGVkRGF0YT0oaT1lLmlkLHQ9PntsZXQgZSxzPVwiL1wiK3Q7aWYoMT09bG9jYWxTdG9yYWdlLmdldEl0ZW0oYitpK1wiL3ZcIiwxKSl0cnl7ZT1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtiK2krc10pfWNhdGNoKHQpe31yZXR1cm4gZX0pLHRoaXMuc2V0UGVyc2lzdGVkRGF0YT0odD0+dD8obG9jYWxTdG9yYWdlLnNldEl0ZW0oYit0K1wiL3ZcIiwxKSwoZSxpKT0+e2xldCBzPVwiL1wiK2ksYT1KU09OLnN0cmluZ2lmeShlKTtlJiZpJiYobG9jYWxTdG9yYWdlLnNldEl0ZW0oYit0K3MsYSksZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzdG9yYWdlXCIpKSl9KTooKT0+e30pKGUuaWQpLHRoaXMuY2xlYXJQZXJzaXN0ZWREYXRhPSh0PT5lPT57Y29uc3QgaT1iK1wiL1wiK3QrXCIvXCI7aWYoZSlsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpK2UpO2Vsc2UgZm9yKGxldCB0IGluIGxvY2FsU3RvcmFnZSl0LmluY2x1ZGVzKGkpJiZsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0KX0pKGUuaWQpLHRoaXMuYXBwbHlTZXR0aW5ncyh0LGUpLHRoaXMuc3RhdGU9e2lucHV0VGV4dDpcIlwiLGVkaXRpbmc6ITEsYWN0aW9uczp7fSxtaXhNb2RlOnt9LGRyb3Bkb3duOnt9LGZsYWdnZWRUYWdzOnt9fSx0aGlzLnZhbHVlPVtdLHRoaXMubGlzdGVuZXJzPXt9LHRoaXMuRE9NPXt9LHRoaXMuYnVpbGQodCksVC5jYWxsKHRoaXMpLHRoaXMuZ2V0Q1NTVmFycygpLHRoaXMubG9hZE9yaWdpbmFsVmFsdWVzKCksdGhpcy5ldmVudHMuY3VzdG9tQmluZGluZy5jYWxsKHRoaXMpLHRoaXMuZXZlbnRzLmJpbmRpbmcuY2FsbCh0aGlzKSx0LmF1dG9mb2N1cyYmdGhpcy5ET00uaW5wdXQuZm9jdXMoKSx0Ll9fdGFnaWZ5PXRoaXN9cmV0dXJuIEkucHJvdG90eXBlPXtfZHJvcGRvd246dyxoZWxwZXJzOntzYW1lU3RyOnMscmVtb3ZlQ29sbGVjdGlvblByb3A6YSxvbWl0Om4saXNPYmplY3Q6aCxwYXJzZUhUTUw6cixlc2NhcGVIVE1MOmQsZXh0ZW5kOmcsY29uY2F0V2l0aG91dER1cHM6cCxnZXRVSUQ6bSxpc05vZGVUYWc6dn0sY3VzdG9tRXZlbnRzTGlzdDpbXCJjaGFuZ2VcIixcImFkZFwiLFwicmVtb3ZlXCIsXCJpbnZhbGlkXCIsXCJpbnB1dFwiLFwiY2xpY2tcIixcImtleWRvd25cIixcImZvY3VzXCIsXCJibHVyXCIsXCJlZGl0OmlucHV0XCIsXCJlZGl0OmJlZm9yZVVwZGF0ZVwiLFwiZWRpdDp1cGRhdGVkXCIsXCJlZGl0OnN0YXJ0XCIsXCJlZGl0OmtleWRvd25cIixcImRyb3Bkb3duOnNob3dcIixcImRyb3Bkb3duOmhpZGVcIixcImRyb3Bkb3duOnNlbGVjdFwiLFwiZHJvcGRvd246dXBkYXRlZFwiLFwiZHJvcGRvd246bm9NYXRjaFwiLFwiZHJvcGRvd246c2Nyb2xsXCJdLGRhdGFQcm9wczpbXCJfX2lzVmFsaWRcIixcIl9fcmVtb3ZlZFwiLFwiX19vcmlnaW5hbERhdGFcIixcIl9fb3JpZ2luYWxIVE1MXCIsXCJfX3RhZ0lkXCJdLHRyaW0odCl7cmV0dXJuIHRoaXMuc2V0dGluZ3MudHJpbSYmdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQ/dC50cmltKCk6dH0scGFyc2VIVE1MOnIsdGVtcGxhdGVzOk8scGFyc2VUZW1wbGF0ZSh0LGUpe3JldHVybiB0PXRoaXMuc2V0dGluZ3MudGVtcGxhdGVzW3RdfHx0LHRoaXMucGFyc2VIVE1MKHQuYXBwbHkodGhpcyxlKSl9LHNldCB3aGl0ZWxpc3QodCl7Y29uc3QgZT10JiZBcnJheS5pc0FycmF5KHQpO3RoaXMuc2V0dGluZ3Mud2hpdGVsaXN0PWU/dDpbXSx0aGlzLnNldFBlcnNpc3RlZERhdGEoZT90OltdLFwid2hpdGVsaXN0XCIpfSxnZXQgd2hpdGVsaXN0KCl7cmV0dXJuIHRoaXMuc2V0dGluZ3Mud2hpdGVsaXN0fSxnZW5lcmF0ZUNsYXNzU2VsZWN0b3JzKHQpe2ZvcihsZXQgZSBpbiB0KXtsZXQgaT1lO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkrXCJTZWxlY3RvclwiLHtnZXQoKXtyZXR1cm5cIi5cIit0aGlzW2ldLnNwbGl0KFwiIFwiKVswXX19KX19LGFwcGx5U2V0dGluZ3ModCxpKXtmLnRlbXBsYXRlcz10aGlzLnRlbXBsYXRlczt2YXIgcz10aGlzLnNldHRpbmdzPWcoe30sZixpKTtpZihzLmRpc2FibGVkPXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIikscy5yZWFkb25seT1zLnJlYWRvbmx5fHx0Lmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpLHMucGxhY2Vob2xkZXI9ZCh0LmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpfHxzLnBsYWNlaG9sZGVyfHxcIlwiKSxzLnJlcXVpcmVkPXQuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIiksdGhpcy5nZW5lcmF0ZUNsYXNzU2VsZWN0b3JzKHMuY2xhc3NOYW1lcyksdGhpcy5pc0lFJiYocy5hdXRvQ29tcGxldGU9ITEpLFtcIndoaXRlbGlzdFwiLFwiYmxhY2tsaXN0XCJdLmZvckVhY2goKGU9Pnt2YXIgaT10LmdldEF0dHJpYnV0ZShcImRhdGEtXCIrZSk7aSYmKGk9aS5zcGxpdChzLmRlbGltaXRlcnMpKWluc3RhbmNlb2YgQXJyYXkmJihzW2VdPWkpfSkpLFwiYXV0b0NvbXBsZXRlXCJpbiBpJiYhaChpLmF1dG9Db21wbGV0ZSkmJihzLmF1dG9Db21wbGV0ZT1mLmF1dG9Db21wbGV0ZSxzLmF1dG9Db21wbGV0ZS5lbmFibGVkPWkuYXV0b0NvbXBsZXRlKSxcIm1peFwiPT1zLm1vZGUmJihzLmF1dG9Db21wbGV0ZS5yaWdodEtleT0hMCxzLmRlbGltaXRlcnM9aS5kZWxpbWl0ZXJzfHxudWxsLHMudGFnVGV4dFByb3AmJiFzLmRyb3Bkb3duLnNlYXJjaEtleXMuaW5jbHVkZXMocy50YWdUZXh0UHJvcCkmJnMuZHJvcGRvd24uc2VhcmNoS2V5cy5wdXNoKHMudGFnVGV4dFByb3ApKSx0LnBhdHRlcm4pdHJ5e3MucGF0dGVybj1uZXcgUmVnRXhwKHQucGF0dGVybil9Y2F0Y2godCl7fWlmKHMuZGVsaW1pdGVycyl7cy5fZGVsaW1pdGVycz1zLmRlbGltaXRlcnM7dHJ5e3MuZGVsaW1pdGVycz1uZXcgUmVnRXhwKHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVycyxcImdcIil9Y2F0Y2godCl7fX1zLmRpc2FibGVkJiYocy51c2VySW5wdXQ9ITEpLHRoaXMuVEVYVFM9ZShlKHt9LHgpLHMudGV4dHN8fHt9KSxcInNlbGVjdFwiIT1zLm1vZGUmJnMudXNlcklucHV0fHwocy5kcm9wZG93bi5lbmFibGVkPTApLHMuZHJvcGRvd24uYXBwZW5kVGFyZ2V0PWkuZHJvcGRvd24mJmkuZHJvcGRvd24uYXBwZW5kVGFyZ2V0P2kuZHJvcGRvd24uYXBwZW5kVGFyZ2V0OmRvY3VtZW50LmJvZHk7bGV0IGE9dGhpcy5nZXRQZXJzaXN0ZWREYXRhKFwid2hpdGVsaXN0XCIpO0FycmF5LmlzQXJyYXkoYSkmJih0aGlzLndoaXRlbGlzdD1BcnJheS5pc0FycmF5KHMud2hpdGVsaXN0KT9wKHMud2hpdGVsaXN0LGEpOmEpfSxnZXRBdHRyaWJ1dGVzKHQpe3ZhciBlLGk9dGhpcy5nZXRDdXN0b21BdHRyaWJ1dGVzKHQpLHM9XCJcIjtmb3IoZSBpbiBpKXMrPVwiIFwiK2UrKHZvaWQgMCE9PXRbZV0/YD1cIiR7aVtlXX1cImA6XCJcIik7cmV0dXJuIHN9LGdldEN1c3RvbUF0dHJpYnV0ZXModCl7aWYoIWgodCkpcmV0dXJuXCJcIjt2YXIgZSxpPXt9O2ZvcihlIGluIHQpXCJfX1wiIT1lLnNsaWNlKDAsMikmJlwiY2xhc3NcIiE9ZSYmdC5oYXNPd25Qcm9wZXJ0eShlKSYmdm9pZCAwIT09dFtlXSYmKGlbZV09ZCh0W2VdKSk7cmV0dXJuIGl9LHNldFN0YXRlU2VsZWN0aW9uKCl7dmFyIHQ9d2luZG93LmdldFNlbGVjdGlvbigpLGU9e2FuY2hvck9mZnNldDp0LmFuY2hvck9mZnNldCxhbmNob3JOb2RlOnQuYW5jaG9yTm9kZSxyYW5nZTp0LmdldFJhbmdlQXQmJnQucmFuZ2VDb3VudCYmdC5nZXRSYW5nZUF0KDApfTtyZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3Rpb249ZSxlfSxnZXRDYXJldEdsb2JhbFBvc2l0aW9uKCl7Y29uc3QgdD1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtpZih0LnJhbmdlQ291bnQpe2NvbnN0IGU9dC5nZXRSYW5nZUF0KDApLGk9ZS5zdGFydENvbnRhaW5lcixzPWUuc3RhcnRPZmZzZXQ7bGV0IGEsbjtpZihzPjApcmV0dXJuIG49ZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxuLnNldFN0YXJ0KGkscy0xKSxuLnNldEVuZChpLHMpLGE9bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx7bGVmdDphLnJpZ2h0LHRvcDphLnRvcCxib3R0b206YS5ib3R0b219O2lmKGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KXJldHVybiBpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfXJldHVybntsZWZ0Oi05OTk5LHRvcDotOTk5OX19LGdldENTU1ZhcnMoKXt2YXIgdD1nZXRDb21wdXRlZFN0eWxlKHRoaXMuRE9NLnNjb3BlLG51bGwpO3ZhciBlO3RoaXMuQ1NTVmFycz17dGFnSGlkZVRyYW5zaXRpb246KHQ9PntsZXQgZT10LnZhbHVlO3JldHVyblwic1wiPT10LnVuaXQ/MWUzKmU6ZX0pKGZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybnt9O3ZhciBlPSh0PXQudHJpbSgpLnNwbGl0KFwiIFwiKVswXSkuc3BsaXQoL1xcZCsvZykuZmlsdGVyKCh0PT50KSkucG9wKCkudHJpbSgpO3JldHVybnt2YWx1ZTordC5zcGxpdChlKS5maWx0ZXIoKHQ9PnQpKVswXS50cmltKCksdW5pdDplfX0oKGU9XCJ0YWctaGlkZS10cmFuc2l0aW9uXCIsdC5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1cIitlKSkpKX19LGJ1aWxkKHQpe3ZhciBlPXRoaXMuRE9NO3RoaXMuc2V0dGluZ3MubWl4TW9kZS5pbnRlZ3JhdGVkPyhlLm9yaWdpbmFsSW5wdXQ9bnVsbCxlLnNjb3BlPXQsZS5pbnB1dD10KTooZS5vcmlnaW5hbElucHV0PXQsZS5vcmlnaW5hbElucHV0X3RhYkluZGV4PXQudGFiSW5kZXgsZS5zY29wZT10aGlzLnBhcnNlVGVtcGxhdGUoXCJ3cmFwcGVyXCIsW3QsdGhpcy5zZXR0aW5nc10pLGUuaW5wdXQ9ZS5zY29wZS5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5pbnB1dFNlbGVjdG9yKSx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUuc2NvcGUsdCksdC50YWJJbmRleD0tMSl9LGRlc3Ryb3koKXt0aGlzLmV2ZW50cy51bmJpbmRHbG9iYWwuY2FsbCh0aGlzKSx0aGlzLkRPTS5zY29wZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuRE9NLnNjb3BlKSx0aGlzLkRPTS5vcmlnaW5hbElucHV0LnRhYkluZGV4PXRoaXMuRE9NLm9yaWdpbmFsSW5wdXRfdGFiSW5kZXgsZGVsZXRlIHRoaXMuRE9NLm9yaWdpbmFsSW5wdXQuX190YWdpZnksdGhpcy5kcm9wZG93bi5oaWRlKCEwKSxjbGVhclRpbWVvdXQodGhpcy5kcm9wZG93bkhpZGVfX2JpbmRFdmVudHNUaW1lb3V0KSxjbGVhckludGVydmFsKHRoaXMubGlzdGVuZXJzLm1haW4ub3JpZ2luYWxJbnB1dFZhbHVlT2JzZXJ2ZXJJbnRlcnZhbCl9LGxvYWRPcmlnaW5hbFZhbHVlcyh0KXt2YXIgZSxpPXRoaXMuc2V0dGluZ3M7aWYodGhpcy5zdGF0ZS5ibG9ja0NoYW5nZUV2ZW50PSEwLHZvaWQgMD09PXQpe2NvbnN0IGU9dGhpcy5nZXRQZXJzaXN0ZWREYXRhKFwidmFsdWVcIik7dD1lJiYhdGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZT9lOmkubWl4TW9kZS5pbnRlZ3JhdGVkP3RoaXMuRE9NLmlucHV0LnRleHRDb250ZW50OnRoaXMuRE9NLm9yaWdpbmFsSW5wdXQudmFsdWV9aWYodGhpcy5yZW1vdmVBbGxUYWdzKCksdClpZihcIm1peFwiPT1pLm1vZGUpdGhpcy5wYXJzZU1peFRhZ3ModGhpcy50cmltKHQpKSwoZT10aGlzLkRPTS5pbnB1dC5sYXN0Q2hpbGQpJiZcIkJSXCI9PWUudGFnTmFtZXx8dGhpcy5ET00uaW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsXCI8YnI+XCIpO2Vsc2V7dHJ5e0pTT04ucGFyc2UodClpbnN0YW5jZW9mIEFycmF5JiYodD1KU09OLnBhcnNlKHQpKX1jYXRjaCh0KXt9dGhpcy5hZGRUYWdzKHQsITApLmZvckVhY2goKHQ9PnQmJnQuY2xhc3NMaXN0LmFkZChpLmNsYXNzTmFtZXMudGFnTm9BbmltYXRpb24pKSl9ZWxzZSB0aGlzLnBvc3RVcGRhdGUoKTt0aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQ9aS5taXhNb2RlLmludGVncmF0ZWQ/XCJcIjp0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlLHRoaXMuc3RhdGUuYmxvY2tDaGFuZ2VFdmVudD0hMX0sY2xvbmVFdmVudCh0KXt2YXIgZT17fTtmb3IodmFyIGkgaW4gdCllW2ldPXRbaV07cmV0dXJuIGV9LGxvYWRpbmcodCl7cmV0dXJuIHRoaXMuc3RhdGUuaXNMb2FkaW5nPXQsdGhpcy5ET00uc2NvcGUuY2xhc3NMaXN0W3Q/XCJhZGRcIjpcInJlbW92ZVwiXSh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuc2NvcGVMb2FkaW5nKSx0aGlzfSx0YWdMb2FkaW5nKHQsZSl7cmV0dXJuIHQmJnQuY2xhc3NMaXN0W2U/XCJhZGRcIjpcInJlbW92ZVwiXSh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTG9hZGluZyksdGhpc30sdG9nZ2xlQ2xhc3ModCxlKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmdGhpcy5ET00uc2NvcGUuY2xhc3NMaXN0LnRvZ2dsZSh0LGUpfSx0b2dnbGVTY29wZVZhbGlkYXRpb24odCl7dmFyIGU9ITA9PT10fHx2b2lkIDA9PT10OyF0aGlzLnNldHRpbmdzLnJlcXVpcmVkJiZ0JiZ0PT09dGhpcy5URVhUUy5lbXB0eSYmKGU9ITApLHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0ludmFsaWQsIWUpLHRoaXMuRE9NLnNjb3BlLnRpdGxlPWU/XCJcIjp0fSx0b2dnbGVGb2N1c0NsYXNzKHQpe3RoaXMudG9nZ2xlQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmZvY3VzLCEhdCl9LHRyaWdnZXJDaGFuZ2VFdmVudDpmdW5jdGlvbigpe2lmKCF0aGlzLnNldHRpbmdzLm1peE1vZGUuaW50ZWdyYXRlZCl7dmFyIHQ9dGhpcy5ET00ub3JpZ2luYWxJbnB1dCxlPXRoaXMuc3RhdGUubGFzdE9yaWdpbmFsVmFsdWVSZXBvcnRlZCE9PXQudmFsdWUsaT1uZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pO2UmJih0aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQ9dC52YWx1ZSxpLnNpbXVsYXRlZD0hMCx0Ll92YWx1ZVRyYWNrZXImJnQuX3ZhbHVlVHJhY2tlci5zZXRWYWx1ZShNYXRoLnJhbmRvbSgpKSx0LmRpc3BhdGNoRXZlbnQoaSksdGhpcy50cmlnZ2VyKFwiY2hhbmdlXCIsdGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkKSx0LnZhbHVlPXRoaXMuc3RhdGUubGFzdE9yaWdpbmFsVmFsdWVSZXBvcnRlZCl9fSxldmVudHM6TSxmaXhGaXJlZm94TGFzdFRhZ05vQ2FyZXQoKXt9LHBsYWNlQ2FyZXRBZnRlck5vZGUodCl7aWYodCYmdC5wYXJlbnROb2RlKXt2YXIgZT10LGk9d2luZG93LmdldFNlbGVjdGlvbigpLHM9aS5nZXRSYW5nZUF0KDApO2kucmFuZ2VDb3VudCYmKHMuc2V0U3RhcnRBZnRlcihlfHx0KSxzLmNvbGxhcHNlKCEwKSxpLnJlbW92ZUFsbFJhbmdlcygpLGkuYWRkUmFuZ2UocykpfX0saW5zZXJ0QWZ0ZXJUYWcodCxlKXtpZihlPWV8fHRoaXMuc2V0dGluZ3MubWl4TW9kZS5pbnNlcnRBZnRlclRhZyx0JiZ0LnBhcmVudE5vZGUmJmUpcmV0dXJuIGU9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZSk6ZSx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdC5uZXh0U2libGluZyksZX0sZWRpdFRhZ0NoYW5nZURldGVjdGVkKHQpe3ZhciBlPXQuX19vcmlnaW5hbERhdGE7Zm9yKHZhciBpIGluIGUpaWYoIXRoaXMuZGF0YVByb3BzLmluY2x1ZGVzKGkpJiZ0W2ldIT1lW2ldKXJldHVybiEwO3JldHVybiExfSxnZXRUYWdUZXh0Tm9kZSh0KXtyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdUZXh0U2VsZWN0b3IpfSxzZXRUYWdUZXh0Tm9kZSh0LGUpe3RoaXMuZ2V0VGFnVGV4dE5vZGUodCkuaW5uZXJIVE1MPWQoZSl9LGVkaXRUYWcodCxlKXt0PXR8fHRoaXMuZ2V0TGFzdFRhZygpLGU9ZXx8e30sdGhpcy5kcm9wZG93bi5oaWRlKCk7dmFyIGk9dGhpcy5zZXR0aW5ncyxzPXRoaXMuZ2V0VGFnVGV4dE5vZGUodCksYT10aGlzLmdldE5vZGVJbmRleCh0KSxuPXRoaXMudGFnRGF0YSh0KSxvPXRoaXMuZXZlbnRzLmNhbGxiYWNrcyxyPXRoaXMsbD0hMDtpZihzKXtpZighKG4gaW5zdGFuY2VvZiBPYmplY3QmJlwiZWRpdGFibGVcImluIG4pfHxuLmVkaXRhYmxlKXJldHVybiBuPXRoaXMudGFnRGF0YSh0LHtfX29yaWdpbmFsRGF0YTpnKHt9LG4pLF9fb3JpZ2luYWxIVE1MOnQuY2xvbmVOb2RlKCEwKX0pLHRoaXMudGFnRGF0YShuLl9fb3JpZ2luYWxIVE1MLG4uX19vcmlnaW5hbERhdGEpLHMuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsITApLHQuY2xhc3NMaXN0LmFkZChpLmNsYXNzTmFtZXMudGFnRWRpdGluZykscy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixvLm9uRWRpdFRhZ0ZvY3VzLmJpbmQodGhpcyx0KSkscy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLChmdW5jdGlvbigpe3NldFRpbWVvdXQoKCgpPT5vLm9uRWRpdFRhZ0JsdXIuY2FsbChyLHIuZ2V0VGFnVGV4dE5vZGUodCkpKSl9KSkscy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixvLm9uRWRpdFRhZ0lucHV0LmJpbmQodGhpcyxzKSkscy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlPT5vLm9uRWRpdFRhZ2tleWRvd24uY2FsbCh0aGlzLGUsdCkpKSxlLnNraXBWYWxpZGF0aW9ufHwobD10aGlzLmVkaXRUYWdUb2dnbGVWYWxpZGl0eSh0KSkscy5vcmlnaW5hbElzVmFsaWQ9bCx0aGlzLnRyaWdnZXIoXCJlZGl0OnN0YXJ0XCIse3RhZzp0LGluZGV4OmEsZGF0YTpuLGlzVmFsaWQ6bH0pLHMuZm9jdXMoKSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCghMSxzKSx0aGlzfWVsc2UgY29uc29sZS53YXJuKFwiQ2Fubm90IGZpbmQgZWxlbWVudCBpbiBUYWcgdGVtcGxhdGU6IC5cIixpLmNsYXNzTmFtZXMudGFnVGV4dFNlbGVjdG9yKX0sZWRpdFRhZ1RvZ2dsZVZhbGlkaXR5KHQsZSl7dmFyIGk7aWYoZT1lfHx0aGlzLnRhZ0RhdGEodCkpcmV0dXJuKGk9IShcIl9faXNWYWxpZFwiaW4gZSl8fCEwPT09ZS5fX2lzVmFsaWQpfHx0aGlzLnJlbW92ZVRhZ3NGcm9tVmFsdWUodCksdGhpcy51cGRhdGUoKSx0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQsIWkpLGUuX19pc1ZhbGlkO2NvbnNvbGUud2FybihcInRhZyBoYXMgbm8gZGF0YTogXCIsdCxlKX0sb25FZGl0VGFnRG9uZSh0LGUpe2U9ZXx8e307dmFyIGk9e3RhZzp0PXR8fHRoaXMuc3RhdGUuZWRpdGluZy5zY29wZSxpbmRleDp0aGlzLmdldE5vZGVJbmRleCh0KSxwcmV2aW91c0RhdGE6dGhpcy50YWdEYXRhKHQpLGRhdGE6ZX07dGhpcy50cmlnZ2VyKFwiZWRpdDpiZWZvcmVVcGRhdGVcIixpLHtjbG9uZURhdGE6ITF9KSx0aGlzLnN0YXRlLmVkaXRpbmc9ITEsZGVsZXRlIGUuX19vcmlnaW5hbERhdGEsZGVsZXRlIGUuX19vcmlnaW5hbEhUTUwsdCYmZVt0aGlzLnNldHRpbmdzLnRhZ1RleHRQcm9wXT8odD10aGlzLnJlcGxhY2VUYWcodCxlKSx0aGlzLmVkaXRUYWdUb2dnbGVWYWxpZGl0eSh0LGUpLHRoaXMuc2V0dGluZ3MuYTExeS5mb2N1c2FibGVUYWdzP3QuZm9jdXMoKTp0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUodCkpOnQmJnRoaXMucmVtb3ZlVGFncyh0KSx0aGlzLnRyaWdnZXIoXCJlZGl0OnVwZGF0ZWRcIixpKSx0aGlzLmRyb3Bkb3duLmhpZGUoKSx0aGlzLnNldHRpbmdzLmtlZXBJbnZhbGlkVGFncyYmdGhpcy5yZUNoZWNrSW52YWxpZFRhZ3MoKX0scmVwbGFjZVRhZyh0LGUpe2UmJmUudmFsdWV8fChlPXQuX190YWdpZnlUYWdEYXRhKSxlLl9faXNWYWxpZCYmMSE9ZS5fX2lzVmFsaWQmJmcoZSx0aGlzLmdldEludmFsaWRUYWdBdHRycyhlLGUuX19pc1ZhbGlkKSk7dmFyIGk9dGhpcy5jcmVhdGVUYWdFbGVtKGUpO3JldHVybiB0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGksdCksdGhpcy51cGRhdGVWYWx1ZUJ5RE9NVGFncygpLGl9LHVwZGF0ZVZhbHVlQnlET01UYWdzKCl7dGhpcy52YWx1ZS5sZW5ndGg9MCxbXS5mb3JFYWNoLmNhbGwodGhpcy5nZXRUYWdFbG1zKCksKHQ9Pnt0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZC5zcGxpdChcIiBcIilbMF0pfHx0aGlzLnZhbHVlLnB1c2godGhpcy50YWdEYXRhKHQpKX0pKSx0aGlzLnVwZGF0ZSgpfSxzZXRSYW5nZUF0U3RhcnRFbmQodCxlKXt0PVwibnVtYmVyXCI9PXR5cGVvZiB0P3Q6ISF0LGU9KGU9ZXx8dGhpcy5ET00uaW5wdXQpLmxhc3RDaGlsZHx8ZTt2YXIgaT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTt0cnl7aS5yYW5nZUNvdW50Pj0xJiZbXCJTdGFydFwiLFwiRW5kXCJdLmZvckVhY2goKHM9PmkuZ2V0UmFuZ2VBdCgwKVtcInNldFwiK3NdKGUsdHx8ZS5sZW5ndGgpKSl9Y2F0Y2godCl7fX0saW5qZWN0QXRDYXJldCh0LGUpe3JldHVybiEoZT1lfHx0aGlzLnN0YXRlLnNlbGVjdGlvbj8ucmFuZ2UpJiZ0Pyh0aGlzLmFwcGVuZE1peFRhZ3ModCksdGhpcyk6KFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSksZS5kZWxldGVDb250ZW50cygpLGUuaW5zZXJ0Tm9kZSh0KSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCghMSx0KSx0aGlzLnVwZGF0ZVZhbHVlQnlET01UYWdzKCksdGhpcy51cGRhdGUoKSx0aGlzKX0saW5wdXQ6e3NldCgpe2xldCB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcIlwiLGU9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXTt2YXIgaT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLmNsb3NlT25TZWxlY3Q7dGhpcy5zdGF0ZS5pbnB1dFRleHQ9dCxlJiYodGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MPWQoXCJcIit0KSksIXQmJmkmJnRoaXMuZHJvcGRvd24uaGlkZS5iaW5kKHRoaXMpLHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzKSx0aGlzLmlucHV0LnZhbGlkYXRlLmNhbGwodGhpcyl9LHJhdygpe3JldHVybiB0aGlzLkRPTS5pbnB1dC50ZXh0Q29udGVudH0sdmFsaWRhdGUoKXt2YXIgdD0hdGhpcy5zdGF0ZS5pbnB1dFRleHR8fCEwPT09dGhpcy52YWxpZGF0ZVRhZyh7dmFsdWU6dGhpcy5zdGF0ZS5pbnB1dFRleHR9KTtyZXR1cm4gdGhpcy5ET00uaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuaW5wdXRJbnZhbGlkLCF0KSx0fSxub3JtYWxpemUodCl7dmFyIGU9dHx8dGhpcy5ET00uaW5wdXQsaT1bXTtlLmNoaWxkTm9kZXMuZm9yRWFjaCgodD0+Mz09dC5ub2RlVHlwZSYmaS5wdXNoKHQubm9kZVZhbHVlKSkpLGk9aS5qb2luKFwiXFxuXCIpO3RyeXtpPWkucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csdGhpcy5zZXR0aW5ncy5kZWxpbWl0ZXJzLnNvdXJjZS5jaGFyQXQoMCkpfWNhdGNoKHQpe31yZXR1cm4gaT1pLnJlcGxhY2UoL1xccy9nLFwiIFwiKSx0aGlzLnRyaW0oaSl9LGF1dG9jb21wbGV0ZTp7c3VnZ2VzdCh0KXtpZih0aGlzLnNldHRpbmdzLmF1dG9Db21wbGV0ZS5lbmFibGVkKXtcInN0cmluZ1wiPT10eXBlb2YodD10fHx7fSkmJih0PXt2YWx1ZTp0fSk7dmFyIGU9dC52YWx1ZT9cIlwiK3QudmFsdWU6XCJcIixpPWUuc3Vic3RyKDAsdGhpcy5zdGF0ZS5pbnB1dFRleHQubGVuZ3RoKS50b0xvd2VyQ2FzZSgpLHM9ZS5zdWJzdHJpbmcodGhpcy5zdGF0ZS5pbnB1dFRleHQubGVuZ3RoKTtlJiZ0aGlzLnN0YXRlLmlucHV0VGV4dCYmaT09dGhpcy5zdGF0ZS5pbnB1dFRleHQudG9Mb3dlckNhc2UoKT8odGhpcy5ET00uaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdWdnZXN0XCIscyksdGhpcy5zdGF0ZS5pbnB1dFN1Z2dlc3Rpb249dCk6KHRoaXMuRE9NLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3VnZ2VzdFwiKSxkZWxldGUgdGhpcy5zdGF0ZS5pbnB1dFN1Z2dlc3Rpb24pfX0sc2V0KHQpe3ZhciBlPXRoaXMuRE9NLmlucHV0LmdldEF0dHJpYnV0ZShcImRhdGEtc3VnZ2VzdFwiKSxpPXR8fChlP3RoaXMuc3RhdGUuaW5wdXRUZXh0K2U6bnVsbCk7cmV0dXJuISFpJiYoXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP3RoaXMucmVwbGFjZVRleHRXaXRoTm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnN0YXRlLnRhZy5wcmVmaXgraSkpOih0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMsaSksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoKSksdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMpLHRoaXMuZHJvcGRvd24uaGlkZSgpLCEwKX19fSxnZXRUYWdJZHgodCl7cmV0dXJuIHRoaXMudmFsdWUuZmluZEluZGV4KChlPT5lLl9fdGFnSWQ9PSh0fHx7fSkuX190YWdJZCkpfSxnZXROb2RlSW5kZXgodCl7dmFyIGU9MDtpZih0KWZvcig7dD10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7KWUrKztyZXR1cm4gZX0sZ2V0VGFnRWxtcygpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpLGk9MDtpPHQ7aSsrKWVbaV09YXJndW1lbnRzW2ldO3ZhciBzPVwiLlwiK1suLi50aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnLnNwbGl0KFwiIFwiKSwuLi5lXS5qb2luKFwiLlwiKTtyZXR1cm5bXS5zbGljZS5jYWxsKHRoaXMuRE9NLnNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwocykpfSxnZXRMYXN0VGFnKCl7dmFyIHQ9dGhpcy5ET00uc2NvcGUucXVlcnlTZWxlY3RvckFsbChgJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnU2VsZWN0b3J9Om5vdCguJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnSGlkZX0pOm5vdChbcmVhZG9ubHldKWApO3JldHVybiB0W3QubGVuZ3RoLTFdfSx0YWdEYXRhOih0LGUsaSk9PnQ/KGUmJih0Ll9fdGFnaWZ5VGFnRGF0YT1pP2U6Zyh7fSx0Ll9fdGFnaWZ5VGFnRGF0YXx8e30sZSkpLHQuX190YWdpZnlUYWdEYXRhKTooY29uc29sZS53YXJuKFwidGFnIGVsZW1lbnQgZG9lc24ndCBleGlzdFwiLHQsZSksZSksaXNUYWdEdXBsaWNhdGUodCxlLGkpe3ZhciBhPTA7aWYoXCJzZWxlY3RcIj09dGhpcy5zZXR0aW5ncy5tb2RlKXJldHVybiExO2ZvcihsZXQgbiBvZiB0aGlzLnZhbHVlKXtzKHRoaXMudHJpbShcIlwiK3QpLG4udmFsdWUsZSkmJmkhPW4uX190YWdJZCYmYSsrfXJldHVybiBhfSxnZXRUYWdJbmRleEJ5VmFsdWUodCl7dmFyIGU9W107cmV0dXJuIHRoaXMuZ2V0VGFnRWxtcygpLmZvckVhY2goKChpLGEpPT57cyh0aGlzLnRyaW0oaS50ZXh0Q29udGVudCksdCx0aGlzLnNldHRpbmdzLmRyb3Bkb3duLmNhc2VTZW5zaXRpdmUpJiZlLnB1c2goYSl9KSksZX0sZ2V0VGFnRWxtQnlWYWx1ZSh0KXt2YXIgZT10aGlzLmdldFRhZ0luZGV4QnlWYWx1ZSh0KVswXTtyZXR1cm4gdGhpcy5nZXRUYWdFbG1zKClbZV19LGZsYXNoVGFnKHQpe3QmJih0LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0ZsYXNoKSxzZXRUaW1lb3V0KCgoKT0+e3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnRmxhc2gpfSksMTAwKSl9LGlzVGFnQmxhY2tsaXN0ZWQodCl7cmV0dXJuIHQ9dGhpcy50cmltKHQudG9Mb3dlckNhc2UoKSksdGhpcy5zZXR0aW5ncy5ibGFja2xpc3QuZmlsdGVyKChlPT4oXCJcIitlKS50b0xvd2VyQ2FzZSgpPT10KSkubGVuZ3RofSxpc1RhZ1doaXRlbGlzdGVkKHQpe3JldHVybiEhdGhpcy5nZXRXaGl0ZWxpc3RJdGVtKHQpfSxnZXRXaGl0ZWxpc3RJdGVtKHQsZSxpKXtlPWV8fFwidmFsdWVcIjt2YXIgYSxuPXRoaXMuc2V0dGluZ3M7cmV0dXJuKGk9aXx8bi53aGl0ZWxpc3QpLnNvbWUoKGk9Pnt2YXIgbz1cInN0cmluZ1wiPT10eXBlb2YgaT9pOmlbZV18fGkudmFsdWU7aWYocyhvLHQsbi5kcm9wZG93bi5jYXNlU2Vuc2l0aXZlLG4udHJpbSkpcmV0dXJuIGE9XCJzdHJpbmdcIj09dHlwZW9mIGk/e3ZhbHVlOml9OmksITB9KSksYXx8XCJ2YWx1ZVwiIT1lfHxcInZhbHVlXCI9PW4udGFnVGV4dFByb3B8fChhPXRoaXMuZ2V0V2hpdGVsaXN0SXRlbSh0LG4udGFnVGV4dFByb3AsaSkpLGF9LHZhbGlkYXRlVGFnKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT1cInZhbHVlXCJpbiB0P1widmFsdWVcIjplLnRhZ1RleHRQcm9wLHM9dGhpcy50cmltKHRbaV0rXCJcIik7cmV0dXJuKHRbaV0rXCJcIikudHJpbSgpP2UucGF0dGVybiYmZS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwJiYhZS5wYXR0ZXJuLnRlc3Qocyk/dGhpcy5URVhUUy5wYXR0ZXJuOiFlLmR1cGxpY2F0ZXMmJnRoaXMuaXNUYWdEdXBsaWNhdGUocyxlLmRyb3Bkb3duLmNhc2VTZW5zaXRpdmUsdC5fX3RhZ0lkKT90aGlzLlRFWFRTLmR1cGxpY2F0ZTp0aGlzLmlzVGFnQmxhY2tsaXN0ZWQocyl8fGUuZW5mb3JjZVdoaXRlbGlzdCYmIXRoaXMuaXNUYWdXaGl0ZWxpc3RlZChzKT90aGlzLlRFWFRTLm5vdEFsbG93ZWQ6IWUudmFsaWRhdGV8fGUudmFsaWRhdGUodCk6dGhpcy5URVhUUy5lbXB0eX0sZ2V0SW52YWxpZFRhZ0F0dHJzKHQsZSl7cmV0dXJue1wiYXJpYS1pbnZhbGlkXCI6ITAsY2xhc3M6YCR7dC5jbGFzc3x8XCJcIn0gJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZH1gLnRyaW0oKSx0aXRsZTplfX0saGFzTWF4VGFncygpe3JldHVybiB0aGlzLnZhbHVlLmxlbmd0aD49dGhpcy5zZXR0aW5ncy5tYXhUYWdzJiZ0aGlzLlRFWFRTLmV4Y2VlZH0sc2V0UmVhZG9ubHkodCxlKXt2YXIgaT10aGlzLnNldHRpbmdzO2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpLGlbZXx8XCJyZWFkb25seVwiXT10LHRoaXMuRE9NLnNjb3BlWyh0P1wic2V0XCI6XCJyZW1vdmVcIikrXCJBdHRyaWJ1dGVcIl0oZXx8XCJyZWFkb25seVwiLCEwKSx0aGlzLnNldENvbnRlbnRFZGl0YWJsZSghdCl9LHNldENvbnRlbnRFZGl0YWJsZSh0KXt0aGlzLkRPTS5pbnB1dC5jb250ZW50RWRpdGFibGU9dCx0aGlzLkRPTS5pbnB1dC50YWJJbmRleD10PzA6LTF9LHNldERpc2FibGVkKHQpe3RoaXMuc2V0UmVhZG9ubHkodCxcImRpc2FibGVkXCIpfSxub3JtYWxpemVUYWdzKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT1lLndoaXRlbGlzdCxzPWUuZGVsaW1pdGVycyxhPWUubW9kZSxuPWUudGFnVGV4dFByb3A7ZS5lbmZvcmNlV2hpdGVsaXN0O3ZhciBvPVtdLHI9ISFpJiZpWzBdaW5zdGFuY2VvZiBPYmplY3QsbD1BcnJheS5pc0FycmF5KHQpLGQ9bCYmdFswXS52YWx1ZSxoPXQ9Pih0K1wiXCIpLnNwbGl0KHMpLmZpbHRlcigodD0+dCkpLm1hcCgodD0+KHtbbl06dGhpcy50cmltKHQpLHZhbHVlOnRoaXMudHJpbSh0KX0pKSk7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQmJih0PXQudG9TdHJpbmcoKSksXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKCF0LnRyaW0oKSlyZXR1cm5bXTt0PWgodCl9ZWxzZSBsJiYodD1bXS5jb25jYXQoLi4udC5tYXAoKHQ9PnQudmFsdWU/dDpoKHQpKSkpKTtyZXR1cm4gciYmIWQmJih0LmZvckVhY2goKHQ9Pnt2YXIgZT1vLm1hcCgodD0+dC52YWx1ZSkpLGk9dGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXMuY2FsbCh0aGlzLHRbbl0se2V4YWN0OiEwfSk7dGhpcy5zZXR0aW5ncy5kdXBsaWNhdGVzfHwoaT1pLmZpbHRlcigodD0+IWUuaW5jbHVkZXModC52YWx1ZSkpKSk7dmFyIHM9aS5sZW5ndGg+MT90aGlzLmdldFdoaXRlbGlzdEl0ZW0odFtuXSxuLGkpOmlbMF07cyYmcyBpbnN0YW5jZW9mIE9iamVjdD9vLnB1c2gocyk6XCJtaXhcIiE9YSYmKG51bGw9PXQudmFsdWUmJih0LnZhbHVlPXRbbl0pLG8ucHVzaCh0KSl9KSksby5sZW5ndGgmJih0PW8pKSx0fSxwYXJzZU1peFRhZ3ModCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPWUubWl4VGFnc0ludGVycG9sYXRvcixzPWUuZHVwbGljYXRlcyxhPWUudHJhbnNmb3JtVGFnLG49ZS5lbmZvcmNlV2hpdGVsaXN0LG89ZS5tYXhUYWdzLHI9ZS50YWdUZXh0UHJvcCxsPVtdO3JldHVybiB0PXQuc3BsaXQoaVswXSkubWFwKCgodCxlKT0+e3ZhciBkLGgsZyxwPXQuc3BsaXQoaVsxXSksYz1wWzBdLHU9bC5sZW5ndGg9PW87dHJ5e2lmKGM9PStjKXRocm93IEVycm9yO2g9SlNPTi5wYXJzZShjKX1jYXRjaCh0KXtoPXRoaXMubm9ybWFsaXplVGFncyhjKVswXXx8e3ZhbHVlOmN9fWlmKGEuY2FsbCh0aGlzLGgpLHV8fCEocC5sZW5ndGg+MSl8fG4mJiF0aGlzLmlzVGFnV2hpdGVsaXN0ZWQoaC52YWx1ZSl8fCFzJiZ0aGlzLmlzVGFnRHVwbGljYXRlKGgudmFsdWUpKXtpZih0KXJldHVybiBlP2lbMF0rdDp0fWVsc2UgaFtkPWhbcl0/cjpcInZhbHVlXCJdPXRoaXMudHJpbShoW2RdKSxnPXRoaXMuY3JlYXRlVGFnRWxlbShoKSxsLnB1c2goaCksZy5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb0FuaW1hdGlvbikscFswXT1nLm91dGVySFRNTCx0aGlzLnZhbHVlLnB1c2goaCk7cmV0dXJuIHAuam9pbihcIlwiKX0pKS5qb2luKFwiXCIpLHRoaXMuRE9NLmlucHV0LmlubmVySFRNTD10LHRoaXMuRE9NLmlucHV0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKSx0aGlzLkRPTS5pbnB1dC5ub3JtYWxpemUoKSx0aGlzLmdldFRhZ0VsbXMoKS5mb3JFYWNoKCgodCxlKT0+dGhpcy50YWdEYXRhKHQsbFtlXSkpKSx0aGlzLnVwZGF0ZSh7d2l0aG91dENoYW5nZUV2ZW50OiEwfSksdH0scmVwbGFjZVRleHRXaXRoTm9kZSh0LGUpe2lmKHRoaXMuc3RhdGUudGFnfHxlKXtlPWV8fHRoaXMuc3RhdGUudGFnLnByZWZpeCt0aGlzLnN0YXRlLnRhZy52YWx1ZTt2YXIgaSxzLGE9dGhpcy5zdGF0ZS5zZWxlY3Rpb258fHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxuPWEuYW5jaG9yTm9kZSxvPXRoaXMuc3RhdGUudGFnLmRlbGltaXRlcnM/dGhpcy5zdGF0ZS50YWcuZGVsaW1pdGVycy5sZW5ndGg6MDtyZXR1cm4gbi5zcGxpdFRleHQoYS5hbmNob3JPZmZzZXQtbyksLTE9PShpPW4ubm9kZVZhbHVlLmxhc3RJbmRleE9mKGUpKT8hMDoocz1uLnNwbGl0VGV4dChpKSx0JiZuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHQscyksITApfX0sc2VsZWN0VGFnKHQsZSl7dmFyIGk9dGhpcy5zZXR0aW5ncztpZighaS5lbmZvcmNlV2hpdGVsaXN0fHx0aGlzLmlzVGFnV2hpdGVsaXN0ZWQoZS52YWx1ZSkpe3RoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyxlW2kudGFnVGV4dFByb3BdfHxlLnZhbHVlLCEwKSx0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uJiZzZXRUaW1lb3V0KHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kLmJpbmQodGhpcykpO3ZhciBzPXRoaXMuZ2V0TGFzdFRhZygpO3JldHVybiBzP3RoaXMucmVwbGFjZVRhZyhzLGUpOnRoaXMuYXBwZW5kVGFnKHQpLHRoaXMudmFsdWVbMF09ZSx0aGlzLnVwZGF0ZSgpLHRoaXMudHJpZ2dlcihcImFkZFwiLHt0YWc6dCxkYXRhOmV9KSxbdF19fSxhZGRFbXB0eVRhZyh0KXt2YXIgZT1nKHt2YWx1ZTpcIlwifSx0fHx7fSksaT10aGlzLmNyZWF0ZVRhZ0VsZW0oZSk7dGhpcy50YWdEYXRhKGksZSksdGhpcy5hcHBlbmRUYWcoaSksdGhpcy5lZGl0VGFnKGkse3NraXBWYWxpZGF0aW9uOiEwfSl9LGFkZFRhZ3ModCxlLGkpe3ZhciBzPVtdLGE9dGhpcy5zZXR0aW5ncyxuPVtdLG89ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2lmKGk9aXx8YS5za2lwSW52YWxpZCwhdHx8MD09dC5sZW5ndGgpcmV0dXJuIHM7c3dpdGNoKHQ9dGhpcy5ub3JtYWxpemVUYWdzKHQpLGEubW9kZSl7Y2FzZVwibWl4XCI6cmV0dXJuIHRoaXMuYWRkTWl4VGFncyh0KTtjYXNlXCJzZWxlY3RcIjplPSExLHRoaXMucmVtb3ZlQWxsVGFncygpfXJldHVybiB0aGlzLkRPTS5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKSx0LmZvckVhY2goKHQ9Pnt2YXIgZSxyPXt9LGw9T2JqZWN0LmFzc2lnbih7fSx0LHt2YWx1ZTp0LnZhbHVlK1wiXCJ9KTtpZih0PU9iamVjdC5hc3NpZ24oe30sbCksYS50cmFuc2Zvcm1UYWcuY2FsbCh0aGlzLHQpLHQuX19pc1ZhbGlkPXRoaXMuaGFzTWF4VGFncygpfHx0aGlzLnZhbGlkYXRlVGFnKHQpLCEwIT09dC5fX2lzVmFsaWQpe2lmKGkpcmV0dXJuO2lmKGcocix0aGlzLmdldEludmFsaWRUYWdBdHRycyh0LHQuX19pc1ZhbGlkKSx7X19wcmVJbnZhbGlkRGF0YTpsfSksdC5fX2lzVmFsaWQ9PXRoaXMuVEVYVFMuZHVwbGljYXRlJiZ0aGlzLmZsYXNoVGFnKHRoaXMuZ2V0VGFnRWxtQnlWYWx1ZSh0LnZhbHVlKSksIWEuY3JlYXRlSW52YWxpZFRhZ3MpcmV0dXJuIHZvaWQgbi5wdXNoKHQudmFsdWUpfWlmKFwicmVhZG9ubHlcImluIHQmJih0LnJlYWRvbmx5P3JbXCJhcmlhLXJlYWRvbmx5XCJdPSEwOmRlbGV0ZSB0LnJlYWRvbmx5KSxlPXRoaXMuY3JlYXRlVGFnRWxlbSh0LHIpLHMucHVzaChlKSxcInNlbGVjdFwiPT1hLm1vZGUpcmV0dXJuIHRoaXMuc2VsZWN0VGFnKGUsdCk7by5hcHBlbmRDaGlsZChlKSx0Ll9faXNWYWxpZCYmITA9PT10Ll9faXNWYWxpZD8odGhpcy52YWx1ZS5wdXNoKHQpLHRoaXMudHJpZ2dlcihcImFkZFwiLHt0YWc6ZSxpbmRleDp0aGlzLnZhbHVlLmxlbmd0aC0xLGRhdGE6dH0pKToodGhpcy50cmlnZ2VyKFwiaW52YWxpZFwiLHtkYXRhOnQsaW5kZXg6dGhpcy52YWx1ZS5sZW5ndGgsdGFnOmUsbWVzc2FnZTp0Ll9faXNWYWxpZH0pLGEua2VlcEludmFsaWRUYWdzfHxzZXRUaW1lb3V0KCgoKT0+dGhpcy5yZW1vdmVUYWdzKGUsITApKSwxZTMpKSx0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKCl9KSksdGhpcy5hcHBlbmRUYWcobyksdGhpcy51cGRhdGUoKSx0Lmxlbmd0aCYmZSYmKHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyxhLmNyZWF0ZUludmFsaWRUYWdzP1wiXCI6bi5qb2luKGEuX2RlbGltaXRlcnMpKSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCgpKSxhLmRyb3Bkb3duLmVuYWJsZWQmJnRoaXMuZHJvcGRvd24ucmVmaWx0ZXIoKSxzfSxhZGRNaXhUYWdzKHQpe2lmKCh0PXRoaXMubm9ybWFsaXplVGFncyh0KSlbMF0ucHJlZml4fHx0aGlzLnN0YXRlLnRhZylyZXR1cm4gdGhpcy5wcmVmaXhlZFRleHRUb1RhZyh0WzBdKTtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W3t2YWx1ZTp0fV0pLHRoaXMuc3RhdGUuc2VsZWN0aW9uO3ZhciBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm4gdC5mb3JFYWNoKCh0PT57dmFyIGk9dGhpcy5jcmVhdGVUYWdFbGVtKHQpO2UuYXBwZW5kQ2hpbGQoaSksdGhpcy5pbnNlcnRBZnRlclRhZyhpKX0pKSx0aGlzLmFwcGVuZE1peFRhZ3MoZSksZX0sYXBwZW5kTWl4VGFncyh0KXt2YXIgZT0hIXRoaXMuc3RhdGUuc2VsZWN0aW9uO2U/dGhpcy5pbmplY3RBdENhcmV0KHQpOih0aGlzLkRPTS5pbnB1dC5mb2N1cygpLChlPXRoaXMuc2V0U3RhdGVTZWxlY3Rpb24oKSkucmFuZ2Uuc2V0U3RhcnQodGhpcy5ET00uaW5wdXQsZS5yYW5nZS5lbmRPZmZzZXQpLGUucmFuZ2Uuc2V0RW5kKHRoaXMuRE9NLmlucHV0LGUucmFuZ2UuZW5kT2Zmc2V0KSx0aGlzLkRPTS5pbnB1dC5hcHBlbmRDaGlsZCh0KSx0aGlzLnVwZGF0ZVZhbHVlQnlET01UYWdzKCksdGhpcy51cGRhdGUoKSl9LHByZWZpeGVkVGV4dFRvVGFnKHQpe3ZhciBlLGk9dGhpcy5zZXR0aW5ncyxzPXRoaXMuc3RhdGUudGFnLmRlbGltaXRlcnM7aWYoaS50cmFuc2Zvcm1UYWcuY2FsbCh0aGlzLHQpLHQucHJlZml4PXQucHJlZml4fHx0aGlzLnN0YXRlLnRhZz90aGlzLnN0YXRlLnRhZy5wcmVmaXg6KGkucGF0dGVybi5zb3VyY2V8fGkucGF0dGVybilbMF0sZT10aGlzLmNyZWF0ZVRhZ0VsZW0odCksdGhpcy5yZXBsYWNlVGV4dFdpdGhOb2RlKGUpfHx0aGlzLkRPTS5pbnB1dC5hcHBlbmRDaGlsZChlKSxzZXRUaW1lb3V0KCgoKT0+ZS5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb0FuaW1hdGlvbikpLDMwMCksdGhpcy52YWx1ZS5wdXNoKHQpLHRoaXMudXBkYXRlKCksIXMpe3ZhciBhPXRoaXMuaW5zZXJ0QWZ0ZXJUYWcoZSl8fGU7dGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKGEpfXJldHVybiB0aGlzLnN0YXRlLnRhZz1udWxsLHRoaXMudHJpZ2dlcihcImFkZFwiLGcoe30se3RhZzplfSx7ZGF0YTp0fSkpLGV9LGFwcGVuZFRhZyh0KXt2YXIgZT10aGlzLkRPTSxpPWUuaW5wdXQ7aT09PWUuaW5wdXQ/ZS5zY29wZS5pbnNlcnRCZWZvcmUodCxpKTplLnNjb3BlLmFwcGVuZENoaWxkKHQpfSxjcmVhdGVUYWdFbGVtKHQsaSl7dC5fX3RhZ0lkPW0oKTt2YXIgcyxhPWcoe30sdCxlKHt2YWx1ZTpkKHQudmFsdWUrXCJcIil9LGkpKTtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBlLGk9ZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKHQsTm9kZUZpbHRlci5TSE9XX1RFWFQsbnVsbCwhMSk7ZT1pLm5leHROb2RlKCk7KWUudGV4dENvbnRlbnQudHJpbSgpfHxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9KHM9dGhpcy5wYXJzZVRlbXBsYXRlKFwidGFnXCIsW2EsdGhpc10pKSx0aGlzLnRhZ0RhdGEocyx0KSxzfSxyZUNoZWNrSW52YWxpZFRhZ3MoKXt2YXIgdD10aGlzLnNldHRpbmdzO3RoaXMuZ2V0VGFnRWxtcyh0LmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZCkuZm9yRWFjaCgoKGUsaSk9Pnt2YXIgcz10aGlzLnRhZ0RhdGEoZSksYT10aGlzLmhhc01heFRhZ3MoKSxuPXRoaXMudmFsaWRhdGVUYWcocyksbz0hMD09PW4mJiFhO2lmKFwic2VsZWN0XCI9PXQubW9kZSYmdGhpcy50b2dnbGVTY29wZVZhbGlkYXRpb24obiksbylyZXR1cm4gcz1zLl9fcHJlSW52YWxpZERhdGE/cy5fX3ByZUludmFsaWREYXRhOnt2YWx1ZTpzLnZhbHVlfSx0aGlzLnJlcGxhY2VUYWcoZSxzKTtlLnRpdGxlPWF8fG59KSl9LHJlbW92ZVRhZ3ModCxlLGkpe3ZhciBzLGE9dGhpcy5zZXR0aW5ncztpZih0PXQmJnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD9bdF06dCBpbnN0YW5jZW9mIEFycmF5P3Q6dD9bdF06W3RoaXMuZ2V0TGFzdFRhZygpXSxzPXQucmVkdWNlKCgodCxlKT0+e2UmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT10aGlzLmdldFRhZ0VsbUJ5VmFsdWUoZSkpO3ZhciBpPXRoaXMudGFnRGF0YShlKTtyZXR1cm4gZSYmaSYmIWkucmVhZG9ubHkmJnQucHVzaCh7bm9kZTplLGlkeDp0aGlzLmdldFRhZ0lkeChpKSxkYXRhOnRoaXMudGFnRGF0YShlLHtfX3JlbW92ZWQ6ITB9KX0pLHR9KSxbXSksaT1cIm51bWJlclwiPT10eXBlb2YgaT9pOnRoaXMuQ1NTVmFycy50YWdIaWRlVHJhbnNpdGlvbixcInNlbGVjdFwiPT1hLm1vZGUmJihpPTAsdGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzKSksMT09cy5sZW5ndGgmJlwic2VsZWN0XCIhPWEubW9kZSYmc1swXS5ub2RlLmNsYXNzTGlzdC5jb250YWlucyhhLmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZCkmJihlPSEwKSxzLmxlbmd0aClyZXR1cm4gYS5ob29rcy5iZWZvcmVSZW1vdmVUYWcocyx7dGFnaWZ5OnRoaXN9KS50aGVuKCgoKT0+e2Z1bmN0aW9uIHQodCl7dC5ub2RlLnBhcmVudE5vZGUmJih0Lm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0Lm5vZGUpLGU/YS5rZWVwSW52YWxpZFRhZ3MmJnRoaXMudHJpZ2dlcihcInJlbW92ZVwiLHt0YWc6dC5ub2RlLGluZGV4OnQuaWR4fSk6KHRoaXMudHJpZ2dlcihcInJlbW92ZVwiLHt0YWc6dC5ub2RlLGluZGV4OnQuaWR4LGRhdGE6dC5kYXRhfSksdGhpcy5kcm9wZG93bi5yZWZpbHRlcigpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24oKSx0aGlzLkRPTS5pbnB1dC5ub3JtYWxpemUoKSxhLmtlZXBJbnZhbGlkVGFncyYmdGhpcy5yZUNoZWNrSW52YWxpZFRhZ3MoKSkpfWkmJmk+MTAmJjE9PXMubGVuZ3RoP2Z1bmN0aW9uKGUpe2Uubm9kZS5zdHlsZS53aWR0aD1wYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUubm9kZSkud2lkdGgpK1wicHhcIixkb2N1bWVudC5ib2R5LmNsaWVudFRvcCxlLm5vZGUuY2xhc3NMaXN0LmFkZChhLmNsYXNzTmFtZXMudGFnSGlkZSksc2V0VGltZW91dCh0LmJpbmQodGhpcyksaSxlKX0uY2FsbCh0aGlzLHNbMF0pOnMuZm9yRWFjaCh0LmJpbmQodGhpcykpLGV8fCh0aGlzLnJlbW92ZVRhZ3NGcm9tVmFsdWUocy5tYXAoKHQ9PnQubm9kZSkpKSx0aGlzLnVwZGF0ZSgpLFwic2VsZWN0XCI9PWEubW9kZSYmdGhpcy5zZXRDb250ZW50RWRpdGFibGUoITApKX0pKS5jYXRjaCgodD0+e30pKX0scmVtb3ZlVGFnc0Zyb21ET00oKXtbXS5zbGljZS5jYWxsKHRoaXMuZ2V0VGFnRWxtcygpKS5mb3JFYWNoKCh0PT50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCkpKX0scmVtb3ZlVGFnc0Zyb21WYWx1ZSh0KXsodD1BcnJheS5pc0FycmF5KHQpP3Q6W3RdKS5mb3JFYWNoKCh0PT57dmFyIGU9dGhpcy50YWdEYXRhKHQpLGk9dGhpcy5nZXRUYWdJZHgoZSk7aT4tMSYmdGhpcy52YWx1ZS5zcGxpY2UoaSwxKX0pKX0scmVtb3ZlQWxsVGFncyh0KXt0PXR8fHt9LHRoaXMudmFsdWU9W10sXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP3RoaXMuRE9NLmlucHV0LmlubmVySFRNTD1cIlwiOnRoaXMucmVtb3ZlVGFnc0Zyb21ET00oKSx0aGlzLmRyb3Bkb3duLnJlZmlsdGVyKCksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpLHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZSYmc2V0VGltZW91dCgoKCk9Pnt0aGlzLkRPTS5pbnB1dC5mb2N1cygpfSkpLFwic2VsZWN0XCI9PXRoaXMuc2V0dGluZ3MubW9kZSYmKHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyksdGhpcy5zZXRDb250ZW50RWRpdGFibGUoITApKSx0aGlzLnVwZGF0ZSh0KX0scG9zdFVwZGF0ZSgpe3ZhciB0PXRoaXMuc2V0dGluZ3MsZT10LmNsYXNzTmFtZXMsaT1cIm1peFwiPT10Lm1vZGU/dC5taXhNb2RlLmludGVncmF0ZWQ/dGhpcy5ET00uaW5wdXQudGV4dENvbnRlbnQ6dGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZS50cmltKCk6dGhpcy52YWx1ZS5sZW5ndGgrdGhpcy5pbnB1dC5yYXcuY2FsbCh0aGlzKS5sZW5ndGg7dGhpcy50b2dnbGVDbGFzcyhlLmhhc01heFRhZ3MsdGhpcy52YWx1ZS5sZW5ndGg+PXQubWF4VGFncyksdGhpcy50b2dnbGVDbGFzcyhlLmhhc05vVGFncywhdGhpcy52YWx1ZS5sZW5ndGgpLHRoaXMudG9nZ2xlQ2xhc3MoZS5lbXB0eSwhaSksXCJzZWxlY3RcIj09dC5tb2RlJiZ0aGlzLnRvZ2dsZVNjb3BlVmFsaWRhdGlvbih0aGlzLnZhbHVlPy5bMF0/Ll9faXNWYWxpZCl9LHNldE9yaWdpbmFsSW5wdXRWYWx1ZSh0KXt2YXIgZT10aGlzLkRPTS5vcmlnaW5hbElucHV0O3RoaXMuc2V0dGluZ3MubWl4TW9kZS5pbnRlZ3JhdGVkfHwoZS52YWx1ZT10LGUudGFnaWZ5VmFsdWU9ZS52YWx1ZSx0aGlzLnNldFBlcnNpc3RlZERhdGEodCxcInZhbHVlXCIpKX0sdXBkYXRlKHQpe3ZhciBlPXRoaXMuZ2V0SW5wdXRWYWx1ZSgpO3RoaXMuc2V0T3JpZ2luYWxJbnB1dFZhbHVlKGUpLHRoaXMucG9zdFVwZGF0ZSgpLHRoaXMuc2V0dGluZ3Mub25DaGFuZ2VBZnRlckJsdXImJih0fHx7fSkud2l0aG91dENoYW5nZUV2ZW50fHx0aGlzLnN0YXRlLmJsb2NrQ2hhbmdlRXZlbnR8fHRoaXMudHJpZ2dlckNoYW5nZUV2ZW50KCl9LGdldElucHV0VmFsdWUoKXt2YXIgdD10aGlzLmdldENsZWFuVmFsdWUoKTtyZXR1cm5cIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5nZXRNaXhlZFRhZ3NBc1N0cmluZyh0KTp0Lmxlbmd0aD90aGlzLnNldHRpbmdzLm9yaWdpbmFsSW5wdXRWYWx1ZUZvcm1hdD90aGlzLnNldHRpbmdzLm9yaWdpbmFsSW5wdXRWYWx1ZUZvcm1hdCh0KTpKU09OLnN0cmluZ2lmeSh0KTpcIlwifSxnZXRDbGVhblZhbHVlKHQpe3JldHVybiBhKHR8fHRoaXMudmFsdWUsdGhpcy5kYXRhUHJvcHMpfSxnZXRNaXhlZFRhZ3NBc1N0cmluZygpe3ZhciB0PVwiXCIsZT10aGlzLGk9dGhpcy5zZXR0aW5ncyxzPWkub3JpZ2luYWxJbnB1dFZhbHVlRm9ybWF0fHxKU09OLnN0cmluZ2lmeSxhPWkubWl4VGFnc0ludGVycG9sYXRvcjtyZXR1cm4gZnVuY3Rpb24gaShvKXtvLmNoaWxkTm9kZXMuZm9yRWFjaCgobz0+e2lmKDE9PW8ubm9kZVR5cGUpe2NvbnN0IHI9ZS50YWdEYXRhKG8pO2lmKFwiQlJcIj09by50YWdOYW1lJiYodCs9XCJcXHJcXG5cIiksciYmdi5jYWxsKGUsbykpe2lmKHIuX19yZW1vdmVkKXJldHVybjt0Kz1hWzBdK3MobihyLGUuZGF0YVByb3BzKSkrYVsxXX1lbHNlIG8uZ2V0QXR0cmlidXRlKFwic3R5bGVcIil8fFtcIkJcIixcIklcIixcIlVcIl0uaW5jbHVkZXMoby50YWdOYW1lKT90Kz1vLnRleHRDb250ZW50OlwiRElWXCIhPW8udGFnTmFtZSYmXCJQXCIhPW8udGFnTmFtZXx8KHQrPVwiXFxyXFxuXCIsaShvKSl9ZWxzZSB0Kz1vLnRleHRDb250ZW50fSkpfSh0aGlzLkRPTS5pbnB1dCksdH19LEkucHJvdG90eXBlLnJlbW92ZVRhZz1JLnByb3RvdHlwZS5yZW1vdmVUYWdzLEl9KSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiOzpyb290ey0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnk6cmdiKDUzLDE0OSwyNDYpOy0tdGFnaWZ5LWRkLWJnLWNvbG9yOndoaXRlOy0tdGFnaWZ5LWRkLWl0ZW0tcGFkOi4zZW0gLjVlbX0udGFnaWZ5ey0tdGFncy1kaXNhYmxlZC1iZzojRjFGMUYxOy0tdGFncy1ib3JkZXItY29sb3I6I0RERDstLXRhZ3MtaG92ZXItYm9yZGVyLWNvbG9yOiNDQ0M7LS10YWdzLWZvY3VzLWJvcmRlci1jb2xvcjojMzU5NWY2Oy0tdGFnLWJvcmRlci1yYWRpdXM6M3B4Oy0tdGFnLWJnOiNFNUU1RTU7LS10YWctaG92ZXI6I0QzRTJFMjstLXRhZy10ZXh0LWNvbG9yOmJsYWNrOy0tdGFnLXRleHQtY29sb3ItLWVkaXQ6YmxhY2s7LS10YWctcGFkOjAuM2VtIDAuNWVtOy0tdGFnLWluc2V0LXNoYWRvdy1zaXplOjEuMWVtOy0tdGFnLWludmFsaWQtY29sb3I6I0QzOTQ5NDstLXRhZy1pbnZhbGlkLWJnOnJnYmEoMjExLCAxNDgsIDE0OCwgMC41KTstLXRhZy1yZW1vdmUtYmc6cmdiYSgyMTEsIDE0OCwgMTQ4LCAwLjMpOy0tdGFnLXJlbW92ZS1idG4tY29sb3I6YmxhY2s7LS10YWctcmVtb3ZlLWJ0bi1iZzpub25lOy0tdGFnLXJlbW92ZS1idG4tYmctLWhvdmVyOiNjNzc3Nzc7LS1pbnB1dC1jb2xvcjppbmhlcml0Oy0tdGFnLS1taW4td2lkdGg6MWNoOy0tdGFnLS1tYXgtd2lkdGg6YXV0bzstLXRhZy1oaWRlLXRyYW5zaXRpb246MC4zczstLXBsYWNlaG9sZGVyLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC40KTstLXBsYWNlaG9sZGVyLWNvbG9yLWZvY3VzOnJnYmEoMCwgMCwgMCwgMC4yNSk7LS1sb2FkZXItc2l6ZTouOGVtOy0tcmVhZG9ubHktc3RyaXBlZDoxO2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtmbGV4LXdyYXA6d3JhcDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXRhZ3MtYm9yZGVyLWNvbG9yKTtwYWRkaW5nOjA7bGluZS1oZWlnaHQ6MDtjdXJzb3I6dGV4dDtvdXRsaW5lOjA7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246LjFzfUBrZXlmcmFtZXMgdGFncy0tYnVtcHszMCV7dHJhbnNmb3JtOnNjYWxlKDEuMil9fUBrZXlmcmFtZXMgcm90YXRlTG9hZGVye3Rve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX0udGFnaWZ5OmhvdmVyOm5vdCgudGFnaWZ5LS1mb2N1cyk6bm90KC50YWdpZnktLWludmFsaWQpey0tdGFncy1ib3JkZXItY29sb3I6dmFyKC0tdGFncy1ob3Zlci1ib3JkZXItY29sb3IpfS50YWdpZnlbZGlzYWJsZWRde2JhY2tncm91bmQ6dmFyKC0tdGFncy1kaXNhYmxlZC1iZyk7ZmlsdGVyOnNhdHVyYXRlKDApO29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5W2Rpc2FibGVkXS50YWdpZnktLXNlbGVjdCwudGFnaWZ5W3JlYWRvbmx5XS50YWdpZnktLXNlbGVjdHtwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpLC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3Qpe2N1cnNvcjpkZWZhdWx0fS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpPi50YWdpZnlfX2lucHV0LC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpPi50YWdpZnlfX2lucHV0e3Zpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjA7bWFyZ2luOjVweCAwfS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXYsLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdntwYWRkaW5nOnZhcigtLXRhZy1wYWQpfS50YWdpZnlbZGlzYWJsZWRdOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXY6OmJlZm9yZSwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2OjpiZWZvcmV7YW5pbWF0aW9uOnJlYWRvbmx5U3R5bGVzIDFzIGNhbGMoLTFzICogKHZhcigtLXJlYWRvbmx5LXN0cmlwZWQpIC0gMSkpIHBhdXNlZH1Aa2V5ZnJhbWVzIHJlYWRvbmx5U3R5bGVzezAle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHZhcigtLXRhZy1iZykgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUsdmFyKC0tdGFnLWJnKSA1MCUsdmFyKC0tdGFnLWJnKSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KSAwLzVweCA1cHg7Ym94LXNoYWRvdzpub25lO2ZpbHRlcjpicmlnaHRuZXNzKC45NSl9fS50YWdpZnlbZGlzYWJsZWRdIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuLC50YWdpZnlbcmVhZG9ubHldIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue2Rpc3BsYXk6bm9uZX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0PmJyOmxhc3QtY2hpbGR7ZGlzcGxheTpub25lfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtjb250ZW50Om5vbmV9LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dDo6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7b3BhY2l0eToxO3dpZHRoOi43ZW07aGVpZ2h0Oi43ZW07d2lkdGg6dmFyKC0tbG9hZGVyLXNpemUpO2hlaWdodDp2YXIoLS1sb2FkZXItc2l6ZSk7bWluLXdpZHRoOjA7Ym9yZGVyOjNweCBzb2xpZDtib3JkZXItY29sb3I6I2VlZSAjYmJiICM4ODggdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7YW5pbWF0aW9uOnJvdGF0ZUxvYWRlciAuNHMgaW5maW5pdGUgbGluZWFyO2NvbnRlbnQ6XFxcIlxcXCIhaW1wb3J0YW50O21hcmdpbjotMnB4IDAgLTJweCAuNWVtfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ6ZW1wdHk6OmFmdGVye21hcmdpbi1sZWZ0OjB9LnRhZ2lmeStpbnB1dCwudGFnaWZ5K3RleHRhcmVhe3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtsZWZ0Oi05OTk5ZW0haW1wb3J0YW50O3RyYW5zZm9ybTpzY2FsZSgwKSFpbXBvcnRhbnR9LnRhZ2lmeV9fdGFne2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjo1cHggMCA1cHggNXB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtvdXRsaW5lOjA7bGluZS1oZWlnaHQ6bm9ybWFsO2N1cnNvcjpkZWZhdWx0O3RyYW5zaXRpb246LjEzcyBlYXNlLW91dH0udGFnaWZ5X190YWc+ZGl2e3ZlcnRpY2FsLWFsaWduOnRvcDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzp2YXIoLS10YWctcGFkKTtjb2xvcjp2YXIoLS10YWctdGV4dC1jb2xvcik7bGluZS1oZWlnaHQ6aW5oZXJpdDtib3JkZXItcmFkaXVzOnZhcigtLXRhZy1ib3JkZXItcmFkaXVzKTt3aGl0ZS1zcGFjZTpub3dyYXA7dHJhbnNpdGlvbjouMTNzIGVhc2Utb3V0fS50YWdpZnlfX3RhZz5kaXY+Knt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWluLXdpZHRoOnZhcigtLXRhZy0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tdGFnLS1tYXgtd2lkdGgpO3RyYW5zaXRpb246LjhzIGVhc2UsLjFzIGNvbG9yfS50YWdpZnlfX3RhZz5kaXY+W2NvbnRlbnRlZGl0YWJsZV17b3V0bGluZTowOy13ZWJraXQtdXNlci1zZWxlY3Q6dGV4dDt1c2VyLXNlbGVjdDp0ZXh0O2N1cnNvcjp0ZXh0O21hcmdpbjotMnB4O3BhZGRpbmc6MnB4O21heC13aWR0aDozNTBweH0udGFnaWZ5X190YWc+ZGl2OjpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOmluaGVyaXQ7aW5zZXQ6dmFyKC0tdGFnLWJnLWluc2V0LDApO3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOjEyMG1zIGVhc2U7YW5pbWF0aW9uOnRhZ3MtLWJ1bXAgLjNzIGVhc2Utb3V0IDE7Ym94LXNoYWRvdzowIDAgMCB2YXIoLS10YWctaW5zZXQtc2hhZG93LXNpemUpIHZhcigtLXRhZy1iZykgaW5zZXR9LnRhZ2lmeV9fdGFnOmZvY3VzIGRpdjo6YmVmb3JlLC50YWdpZnlfX3RhZzpob3Zlcjpub3QoW3JlYWRvbmx5XSkgZGl2OjpiZWZvcmV7LS10YWctYmctaW5zZXQ6LTIuNXB4Oy0tdGFnLWJnOnZhcigtLXRhZy1ob3Zlcil9LnRhZ2lmeV9fdGFnLS1sb2FkaW5ne3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeV9fdGFnLS1sb2FkaW5nIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue2Rpc3BsYXk6bm9uZX0udGFnaWZ5X190YWctLWxvYWRpbmc6OmFmdGVyey0tbG9hZGVyLXNpemU6LjRlbTtjb250ZW50OlxcXCJcXFwiO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtvcGFjaXR5OjE7d2lkdGg6LjdlbTtoZWlnaHQ6LjdlbTt3aWR0aDp2YXIoLS1sb2FkZXItc2l6ZSk7aGVpZ2h0OnZhcigtLWxvYWRlci1zaXplKTttaW4td2lkdGg6MDtib3JkZXI6M3B4IHNvbGlkO2JvcmRlci1jb2xvcjojZWVlICNiYmIgIzg4OCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTthbmltYXRpb246cm90YXRlTG9hZGVyIC40cyBpbmZpbml0ZSBsaW5lYXI7bWFyZ2luOjAgLjVlbSAwIC0uMWVtfS50YWdpZnlfX3RhZy0tZmxhc2ggZGl2OjpiZWZvcmV7YW5pbWF0aW9uOm5vbmV9LnRhZ2lmeV9fdGFnLS1oaWRle3dpZHRoOjAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNpdGlvbjp2YXIoLS10YWctaGlkZS10cmFuc2l0aW9uKTtwb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlfX3RhZy0taGlkZT5kaXY+Knt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhZ2lmeV9fdGFnLnRhZ2lmeS0tbm9BbmltPmRpdjo6YmVmb3Jle2FuaW1hdGlvbjpub25lfS50YWdpZnlfX3RhZy50YWdpZnktLW5vdEFsbG93ZWQ6bm90KC50YWdpZnlfX3RhZy0tZWRpdGFibGUpIGRpdj5zcGFue29wYWNpdHk6LjV9LnRhZ2lmeV9fdGFnLnRhZ2lmeS0tbm90QWxsb3dlZDpub3QoLnRhZ2lmeV9fdGFnLS1lZGl0YWJsZSkgZGl2OjpiZWZvcmV7LS10YWctYmc6dmFyKC0tdGFnLWludmFsaWQtYmcpO3RyYW5zaXRpb246LjJzfS50YWdpZnlfX3RhZ1tyZWFkb25seV0gLnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57ZGlzcGxheTpub25lfS50YWdpZnlfX3RhZ1tyZWFkb25seV0+ZGl2OjpiZWZvcmV7YW5pbWF0aW9uOnJlYWRvbmx5U3R5bGVzIDFzIGNhbGMoLTFzICogKHZhcigtLXJlYWRvbmx5LXN0cmlwZWQpIC0gMSkpIHBhdXNlZH1Aa2V5ZnJhbWVzIHJlYWRvbmx5U3R5bGVzezAle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHZhcigtLXRhZy1iZykgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUsdmFyKC0tdGFnLWJnKSA1MCUsdmFyKC0tdGFnLWJnKSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KSAwLzVweCA1cHg7Ym94LXNoYWRvdzpub25lO2ZpbHRlcjpicmlnaHRuZXNzKC45NSl9fS50YWdpZnlfX3RhZy0tZWRpdGFibGU+ZGl2e2NvbG9yOnZhcigtLXRhZy10ZXh0LWNvbG9yLS1lZGl0KX0udGFnaWZ5X190YWctLWVkaXRhYmxlPmRpdjo6YmVmb3Jle2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLXRhZy1ob3ZlcikgaW5zZXQhaW1wb3J0YW50fS50YWdpZnlfX3RhZy0tZWRpdGFibGU+LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5X190YWctLWVkaXRhYmxlPi50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOjphZnRlcntvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSkgdHJhbnNsYXRlWCg1cHgpfS50YWdpZnlfX3RhZy0tZWRpdGFibGUudGFnaWZ5LS1pbnZhbGlkPmRpdjo6YmVmb3Jle2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLXRhZy1pbnZhbGlkLWNvbG9yKSBpbnNldCFpbXBvcnRhbnR9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG57b3JkZXI6NTtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1yYWRpdXM6NTBweDtjdXJzb3I6cG9pbnRlcjtmb250OjE0cHgvMSBBcmlhbDtiYWNrZ3JvdW5kOnZhcigtLXRhZy1yZW1vdmUtYnRuLWJnKTtjb2xvcjp2YXIoLS10YWctcmVtb3ZlLWJ0bi1jb2xvcik7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDttYXJnaW4tcmlnaHQ6NC42NjY2NjY2NjY3cHg7bWFyZ2luLWxlZnQ6YXV0bztvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjouMnMgZWFzZS1vdXR9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46OmFmdGVye2NvbnRlbnQ6XFxcIsOXXFxcIjt0cmFuc2l0aW9uOi4zcyxjb2xvciAwc30udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQ6dmFyKC0tdGFnLXJlbW92ZS1idG4tYmctLWhvdmVyKX0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjpob3ZlcitkaXY+c3BhbntvcGFjaXR5Oi41fS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOmhvdmVyK2Rpdjo6YmVmb3Jle2JveC1zaGFkb3c6MCAwIDAgdmFyKC0tdGFnLWluc2V0LXNoYWRvdy1zaXplKSB2YXIoLS10YWctcmVtb3ZlLWJnLHJnYmEoMjExLDE0OCwxNDgsLjMpKSBpbnNldCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4yc30udGFnaWZ5Om5vdCgudGFnaWZ5LS1taXgpIC50YWdpZnlfX2lucHV0IGJye2Rpc3BsYXk6bm9uZX0udGFnaWZ5Om5vdCgudGFnaWZ5LS1taXgpIC50YWdpZnlfX2lucHV0ICp7ZGlzcGxheTppbmxpbmU7d2hpdGUtc3BhY2U6bm93cmFwfS50YWdpZnlfX2lucHV0e2ZsZXgtZ3JvdzoxO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDoxMTBweDttYXJnaW46NXB4O3BhZGRpbmc6dmFyKC0tdGFnLXBhZCk7bGluZS1oZWlnaHQ6bm9ybWFsO3Bvc2l0aW9uOnJlbGF0aXZlO3doaXRlLXNwYWNlOnByZS13cmFwO2NvbG9yOnZhcigtLWlucHV0LWNvbG9yKTtib3gtc2l6aW5nOmluaGVyaXR9LnRhZ2lmeV9faW5wdXQ6ZW1wdHk6OmJlZm9yZXtwb3NpdGlvbjpzdGF0aWN9LnRhZ2lmeV9faW5wdXQ6Zm9jdXN7b3V0bGluZTowfS50YWdpZnlfX2lucHV0OmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgZWFzZS1vdXQ7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGV4KDZweCl9QHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pey50YWdpZnlfX2lucHV0OmZvY3VzOjpiZWZvcmV7ZGlzcGxheTpub25lfX0udGFnaWZ5X19pbnB1dDpmb2N1czplbXB0eTo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGVhc2Utb3V0O29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZTtjb2xvcjpyZ2JhKDAsMCwwLC4yNSk7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3ItZm9jdXMpfUAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKXsudGFnaWZ5X19pbnB1dDpmb2N1czplbXB0eTo6YWZ0ZXJ7ZGlzcGxheTpub25lfX0udGFnaWZ5X19pbnB1dDo6YmVmb3Jle2NvbnRlbnQ6YXR0cihkYXRhLXBsYWNlaG9sZGVyKTtoZWlnaHQ6MWVtO2xpbmUtaGVpZ2h0OjFlbTttYXJnaW46YXV0byAwO3otaW5kZXg6MTtjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7d2hpdGUtc3BhY2U6bm93cmFwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlfS50YWdpZnlfX2lucHV0OjphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zdWdnZXN0KTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cG9zaXRpb246YWJzb2x1dGU7bWluLXdpZHRoOmNhbGMoMTAwJSAtIDEuNWVtKTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpwcmU7Y29sb3I6dmFyKC0tdGFnLXRleHQtY29sb3IpO29wYWNpdHk6LjM7cG9pbnRlci1ldmVudHM6bm9uZTttYXgtd2lkdGg6MTAwcHh9LnRhZ2lmeV9faW5wdXQgLnRhZ2lmeV9fdGFne21hcmdpbjowIDFweH0udGFnaWZ5LS1taXh7ZGlzcGxheTpibG9ja30udGFnaWZ5LS1taXggLnRhZ2lmeV9faW5wdXR7cGFkZGluZzo1cHg7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtsaW5lLWhlaWdodDoxLjU7ZGlzcGxheTpibG9ja30udGFnaWZ5LS1taXggLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtoZWlnaHQ6YXV0bztkaXNwbGF5Om5vbmU7bGluZS1oZWlnaHQ6aW5oZXJpdH0udGFnaWZ5LS1taXggLnRhZ2lmeV9faW5wdXQ6OmFmdGVye2NvbnRlbnQ6bm9uZX0udGFnaWZ5LS1zZWxlY3Q6OmFmdGVye2NvbnRlbnQ6XFxcIj5cXFwiO29wYWNpdHk6LjU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2JvdHRvbTowO2ZvbnQ6MTZweCBtb25vc3BhY2U7bGluZS1oZWlnaHQ6OHB4O2hlaWdodDo4cHg7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xNTAlLC01MCUpIHNjYWxlWCgxLjIpIHJvdGF0ZSg5MGRlZyk7dHJhbnNpdGlvbjouMnMgZWFzZS1pbi1vdXR9LnRhZ2lmeS0tc2VsZWN0W2FyaWEtZXhwYW5kZWQ9dHJ1ZV06OmFmdGVye3RyYW5zZm9ybTp0cmFuc2xhdGUoLTE1MCUsLTUwJSkgcm90YXRlKDI3MGRlZykgc2NhbGVZKDEuMil9LnRhZ2lmeS0tc2VsZWN0IC50YWdpZnlfX3RhZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDoxLjhlbTtib3R0b206MH0udGFnaWZ5LS1zZWxlY3QgLnRhZ2lmeV9fdGFnIGRpdntkaXNwbGF5Om5vbmV9LnRhZ2lmeS0tc2VsZWN0IC50YWdpZnlfX2lucHV0e3dpZHRoOjEwMCV9LnRhZ2lmeS0tZW1wdHkgLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dDtvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0b30udGFnaWZ5LS1taXggLnRhZ2lmeS0tZW1wdHkgLnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9ja30udGFnaWZ5LS1mb2N1c3stLXRhZ3MtYm9yZGVyLWNvbG9yOnZhcigtLXRhZ3MtZm9jdXMtYm9yZGVyLWNvbG9yKTt0cmFuc2l0aW9uOjBzfS50YWdpZnktLWludmFsaWR7LS10YWdzLWJvcmRlci1jb2xvcjojRDM5NDk0fS50YWdpZnlfX2Ryb3Bkb3due3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTk5OTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxcHgpO292ZXJmbG93OmhpZGRlbn0udGFnaWZ5X19kcm9wZG93bltwbGFjZW1lbnQ9dG9wXXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpfS50YWdpZnlfX2Ryb3Bkb3duW3BsYWNlbWVudD10b3BdIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye2JvcmRlci10b3Atd2lkdGg6MS4xcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS50YWdpZnlfX2Ryb3Bkb3duW3Bvc2l0aW9uPXRleHRde2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEodmFyKC0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnkpLC4xKTtmb250LXNpemU6LjllbX0udGFnaWZ5X19kcm9wZG93bltwb3NpdGlvbj10ZXh0XSAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcntib3JkZXItd2lkdGg6MXB4fS50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye21heC1oZWlnaHQ6MzAwcHg7b3ZlcmZsb3c6YXV0bztvdmVyZmxvdy14OmhpZGRlbjtiYWNrZ3JvdW5kOnZhcigtLXRhZ2lmeS1kZC1iZy1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tdGFnaWZ5LWRkLWNvbG9yLXByaW1hcnkpO2JvcmRlci1ib3R0b20td2lkdGg6MS41cHg7Ym9yZGVyLXRvcC13aWR0aDowO2JveC1zaGFkb3c6MCAycHggNHB4IC0ycHggcmdiYSgwLDAsMCwuMik7dHJhbnNpdGlvbjouMjVzIGN1YmljLWJlemllcigwLDEsLjUsMSl9LnRhZ2lmeV9fZHJvcGRvd25fX2hlYWRlcjplbXB0eXtkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fZHJvcGRvd25fX2Zvb3RlcntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOi41ZW07cGFkZGluZzp2YXIoLS10YWdpZnktZGQtaXRlbS1wYWQpO2ZvbnQtc2l6ZTouN2VtO2ZvbnQtc3R5bGU6aXRhbGljO29wYWNpdHk6LjV9LnRhZ2lmeV9fZHJvcGRvd25fX2Zvb3RlcjplbXB0eXtkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fZHJvcGRvd24tLWluaXRpYWwgLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7bWF4LWhlaWdodDoyMHB4O3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xZW0pfS50YWdpZnlfX2Ryb3Bkb3duLS1pbml0aWFsW3BsYWNlbWVudD10b3BdIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye3RyYW5zZm9ybTp0cmFuc2xhdGVZKDJlbSl9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW17Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6dmFyKC0tdGFnaWZ5LWRkLWl0ZW0tcGFkKTttYXJnaW46MXB4O2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6MDttYXgtaGVpZ2h0OjYwcHg7bWF4LXdpZHRoOjEwMCV9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5KTtjb2xvcjojZmZmfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtOmFjdGl2ZXtmaWx0ZXI6YnJpZ2h0bmVzcygxMDUlKX0udGFnaWZ5X19kcm9wZG93bl9faXRlbS0taGlkZGVue3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW46MCAxcHg7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzpoaWRkZW47bWF4LWhlaWdodDowO3RyYW5zaXRpb246dmFyKC0tdGFnaWZ5LWRkLWl0ZW0tLWhpZGRlbi1kdXJhdGlvbiwuM3MpIWltcG9ydGFudH0udGFnaWZ5X19kcm9wZG93bl9faXRlbS0taGlkZGVuPip7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO29wYWNpdHk6MDt0cmFuc2l0aW9uOmluaGVyaXR9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0B5YWlyZW8vdGFnaWZ5L2Rpc3QvdGFnaWZ5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0IsQ0FBQyxNQUFNLHlDQUF5QyxDQUFDLDBCQUEwQixDQUFDLDhCQUE4QixDQUFDLFFBQVEsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsOEJBQThCLENBQUMsaUNBQWlDLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQUMsMkJBQTJCLENBQUMseUNBQXlDLENBQUMsd0NBQXdDLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsa0NBQWtDLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLENBQUMsc0NBQXNDLENBQUMsNkNBQTZDLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMs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Q0FBQyxnQ0FBZ0MsWUFBWSxDQUFDLHNEQUFzRCxlQUFlLENBQUMsMEJBQTBCLENBQUMscUVBQXFFLHlCQUF5QixDQUFDLHdCQUF3QixxQkFBcUIsQ0FBQyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGdDQUFnQyx5Q0FBeUMsQ0FBQyxVQUFVLENBQUMsK0JBQStCLHVCQUF1QixDQUFDLGdDQUFnQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsK0RBQStELENBQUMsa0NBQWtDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjs6cm9vdHstLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5OnJnYig1MywxNDksMjQ2KTstLXRhZ2lmeS1kZC1iZy1jb2xvcjp3aGl0ZTstLXRhZ2lmeS1kZC1pdGVtLXBhZDouM2VtIC41ZW19LnRhZ2lmeXstLXRhZ3MtZGlzYWJsZWQtYmc6I0YxRjFGMTstLXRhZ3MtYm9yZGVyLWNvbG9yOiNEREQ7LS10YWdzLWhvdmVyLWJvcmRlci1jb2xvcjojQ0NDOy0tdGFncy1mb2N1cy1ib3JkZXItY29sb3I6IzM1OTVmNjstLXRhZy1ib3JkZXItcmFkaXVzOjNweDstLXRhZy1iZzojRTVFNUU1Oy0tdGFnLWhvdmVyOiNEM0UyRTI7LS10YWctdGV4dC1jb2xvcjpibGFjazstLXRhZy10ZXh0LWNvbG9yLS1lZGl0OmJsYWNrOy0tdGFnLXBhZDowLjNlbSAwLjVlbTstLXRhZy1pbnNldC1zaGFkb3ctc2l6ZToxLjFlbTstLXRhZy1pbnZhbGlkLWNvbG9yOiNEMzk0OTQ7LS10YWctaW52YWxpZC1iZzpyZ2JhKDIxMSwgMTQ4LCAxNDgsIDAuNSk7LS10YWctcmVtb3ZlLWJnOnJnYmEoMjExLCAxNDgsIDE0OCwgMC4zKTstLXRhZy1yZW1vdmUtYnRuLWNvbG9yOmJsYWNrOy0tdGFnLXJlbW92ZS1idG4tYmc6bm9uZTstLXRhZy1yZW1vdmUtYnRuLWJnLS1ob3ZlcjojYzc3Nzc3Oy0taW5wdXQtY29sb3I6aW5oZXJpdDstLXRhZy0tbWluLXdpZHRoOjFjaDstLXRhZy0tbWF4LXdpZHRoOmF1dG87LS10YWctaGlkZS10cmFuc2l0aW9uOjAuM3M7LS1wbGFjZWhvbGRlci1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNCk7LS1wbGFjZWhvbGRlci1jb2xvci1mb2N1czpyZ2JhKDAsIDAsIDAsIDAuMjUpOy0tbG9hZGVyLXNpemU6LjhlbTstLXJlYWRvbmx5LXN0cmlwZWQ6MTtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZmxleC13cmFwOndyYXA7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS10YWdzLWJvcmRlci1jb2xvcik7cGFkZGluZzowO2xpbmUtaGVpZ2h0OjA7Y3Vyc29yOnRleHQ7b3V0bGluZTowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOi4xc31Aa2V5ZnJhbWVzIHRhZ3MtLWJ1bXB7MzAle3RyYW5zZm9ybTpzY2FsZSgxLjIpfX1Aa2V5ZnJhbWVzIHJvdGF0ZUxvYWRlcnt0b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19LnRhZ2lmeTpob3Zlcjpub3QoLnRhZ2lmeS0tZm9jdXMpOm5vdCgudGFnaWZ5LS1pbnZhbGlkKXstLXRhZ3MtYm9yZGVyLWNvbG9yOnZhcigtLXRhZ3MtaG92ZXItYm9yZGVyLWNvbG9yKX0udGFnaWZ5W2Rpc2FibGVkXXtiYWNrZ3JvdW5kOnZhcigtLXRhZ3MtZGlzYWJsZWQtYmcpO2ZpbHRlcjpzYXR1cmF0ZSgwKTtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeVtkaXNhYmxlZF0udGFnaWZ5LS1zZWxlY3QsLnRhZ2lmeVtyZWFkb25seV0udGFnaWZ5LS1zZWxlY3R7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KXtjdXJzb3I6ZGVmYXVsdH0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KT4udGFnaWZ5X19pbnB1dCwudGFnaWZ5W3JlYWRvbmx5XTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KT4udGFnaWZ5X19pbnB1dHt2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDowO21hcmdpbjo1cHggMH0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2LC50YWdpZnlbcmVhZG9ubHldOm5vdCgudGFnaWZ5LS1taXgpOm5vdCgudGFnaWZ5LS1zZWxlY3QpIC50YWdpZnlfX3RhZz5kaXZ7cGFkZGluZzp2YXIoLS10YWctcGFkKX0udGFnaWZ5W2Rpc2FibGVkXTpub3QoLnRhZ2lmeS0tbWl4KTpub3QoLnRhZ2lmeS0tc2VsZWN0KSAudGFnaWZ5X190YWc+ZGl2OjpiZWZvcmUsLnRhZ2lmeVtyZWFkb25seV06bm90KC50YWdpZnktLW1peCk6bm90KC50YWdpZnktLXNlbGVjdCkgLnRhZ2lmeV9fdGFnPmRpdjo6YmVmb3Jle2FuaW1hdGlvbjpyZWFkb25seVN0eWxlcyAxcyBjYWxjKC0xcyAqICh2YXIoLS1yZWFkb25seS1zdHJpcGVkKSAtIDEpKSBwYXVzZWR9QGtleWZyYW1lcyByZWFkb25seVN0eWxlc3swJXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS10YWctYmcpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHZhcigtLXRhZy1iZykgNTAlLHZhcigtLXRhZy1iZykgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCkgMC81cHggNXB4O2JveC1zaGFkb3c6bm9uZTtmaWx0ZXI6YnJpZ2h0bmVzcyguOTUpfX0udGFnaWZ5W2Rpc2FibGVkXSAudGFnaWZ5X190YWdfX3JlbW92ZUJ0biwudGFnaWZ5W3JlYWRvbmx5XSAudGFnaWZ5X190YWdfX3JlbW92ZUJ0bntkaXNwbGF5Om5vbmV9LnRhZ2lmeS0tbG9hZGluZyAudGFnaWZ5X19pbnB1dD5icjpsYXN0LWNoaWxke2Rpc3BsYXk6bm9uZX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0OjpiZWZvcmV7Y29udGVudDpub25lfS50YWdpZnktLWxvYWRpbmcgLnRhZ2lmeV9faW5wdXQ6OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7dmVydGljYWwtYWxpZ246bWlkZGxlO29wYWNpdHk6MTt3aWR0aDouN2VtO2hlaWdodDouN2VtO3dpZHRoOnZhcigtLWxvYWRlci1zaXplKTtoZWlnaHQ6dmFyKC0tbG9hZGVyLXNpemUpO21pbi13aWR0aDowO2JvcmRlcjozcHggc29saWQ7Ym9yZGVyLWNvbG9yOiNlZWUgI2JiYiAjODg4IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpyb3RhdGVMb2FkZXIgLjRzIGluZmluaXRlIGxpbmVhcjtjb250ZW50OlxcXCJcXFwiIWltcG9ydGFudDttYXJnaW46LTJweCAwIC0ycHggLjVlbX0udGFnaWZ5LS1sb2FkaW5nIC50YWdpZnlfX2lucHV0OmVtcHR5OjphZnRlcnttYXJnaW4tbGVmdDowfS50YWdpZnkraW5wdXQsLnRhZ2lmeSt0ZXh0YXJlYXtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7bGVmdDotOTk5OWVtIWltcG9ydGFudDt0cmFuc2Zvcm06c2NhbGUoMCkhaW1wb3J0YW50fS50YWdpZnlfX3RhZ3tkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46NXB4IDAgNXB4IDVweDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7b3V0bGluZTowO2xpbmUtaGVpZ2h0Om5vcm1hbDtjdXJzb3I6ZGVmYXVsdDt0cmFuc2l0aW9uOi4xM3MgZWFzZS1vdXR9LnRhZ2lmeV9fdGFnPmRpdnt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym94LXNpemluZzpib3JkZXItYm94O21heC13aWR0aDoxMDAlO3BhZGRpbmc6dmFyKC0tdGFnLXBhZCk7Y29sb3I6dmFyKC0tdGFnLXRleHQtY29sb3IpO2xpbmUtaGVpZ2h0OmluaGVyaXQ7Ym9yZGVyLXJhZGl1czp2YXIoLS10YWctYm9yZGVyLXJhZGl1cyk7d2hpdGUtc3BhY2U6bm93cmFwO3RyYW5zaXRpb246LjEzcyBlYXNlLW91dH0udGFnaWZ5X190YWc+ZGl2Pip7d2hpdGUtc3BhY2U6cHJlLXdyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wO21pbi13aWR0aDp2YXIoLS10YWctLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLXRhZy0tbWF4LXdpZHRoKTt0cmFuc2l0aW9uOi44cyBlYXNlLC4xcyBjb2xvcn0udGFnaWZ5X190YWc+ZGl2Pltjb250ZW50ZWRpdGFibGVde291dGxpbmU6MDstd2Via2l0LXVzZXItc2VsZWN0OnRleHQ7dXNlci1zZWxlY3Q6dGV4dDtjdXJzb3I6dGV4dDttYXJnaW46LTJweDtwYWRkaW5nOjJweDttYXgtd2lkdGg6MzUwcHh9LnRhZ2lmeV9fdGFnPmRpdjo6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czppbmhlcml0O2luc2V0OnZhcigtLXRhZy1iZy1pbnNldCwwKTt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjoxMjBtcyBlYXNlO2FuaW1hdGlvbjp0YWdzLS1idW1wIC4zcyBlYXNlLW91dCAxO2JveC1zaGFkb3c6MCAwIDAgdmFyKC0tdGFnLWluc2V0LXNoYWRvdy1zaXplKSB2YXIoLS10YWctYmcpIGluc2V0fS50YWdpZnlfX3RhZzpmb2N1cyBkaXY6OmJlZm9yZSwudGFnaWZ5X190YWc6aG92ZXI6bm90KFtyZWFkb25seV0pIGRpdjo6YmVmb3Jley0tdGFnLWJnLWluc2V0Oi0yLjVweDstLXRhZy1iZzp2YXIoLS10YWctaG92ZXIpfS50YWdpZnlfX3RhZy0tbG9hZGluZ3twb2ludGVyLWV2ZW50czpub25lfS50YWdpZnlfX3RhZy0tbG9hZGluZyAudGFnaWZ5X190YWdfX3JlbW92ZUJ0bntkaXNwbGF5Om5vbmV9LnRhZ2lmeV9fdGFnLS1sb2FkaW5nOjphZnRlcnstLWxvYWRlci1zaXplOi40ZW07Y29udGVudDpcXFwiXFxcIjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7b3BhY2l0eToxO3dpZHRoOi43ZW07aGVpZ2h0Oi43ZW07d2lkdGg6dmFyKC0tbG9hZGVyLXNpemUpO2hlaWdodDp2YXIoLS1sb2FkZXItc2l6ZSk7bWluLXdpZHRoOjA7Ym9yZGVyOjNweCBzb2xpZDtib3JkZXItY29sb3I6I2VlZSAjYmJiICM4ODggdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7YW5pbWF0aW9uOnJvdGF0ZUxvYWRlciAuNHMgaW5maW5pdGUgbGluZWFyO21hcmdpbjowIC41ZW0gMCAtLjFlbX0udGFnaWZ5X190YWctLWZsYXNoIGRpdjo6YmVmb3Jle2FuaW1hdGlvbjpub25lfS50YWdpZnlfX3RhZy0taGlkZXt3aWR0aDowIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb246dmFyKC0tdGFnLWhpZGUtdHJhbnNpdGlvbik7cG9pbnRlci1ldmVudHM6bm9uZX0udGFnaWZ5X190YWctLWhpZGU+ZGl2Pip7d2hpdGUtc3BhY2U6bm93cmFwfS50YWdpZnlfX3RhZy50YWdpZnktLW5vQW5pbT5kaXY6OmJlZm9yZXthbmltYXRpb246bm9uZX0udGFnaWZ5X190YWcudGFnaWZ5LS1ub3RBbGxvd2VkOm5vdCgudGFnaWZ5X190YWctLWVkaXRhYmxlKSBkaXY+c3BhbntvcGFjaXR5Oi41fS50YWdpZnlfX3RhZy50YWdpZnktLW5vdEFsbG93ZWQ6bm90KC50YWdpZnlfX3RhZy0tZWRpdGFibGUpIGRpdjo6YmVmb3Jley0tdGFnLWJnOnZhcigtLXRhZy1pbnZhbGlkLWJnKTt0cmFuc2l0aW9uOi4yc30udGFnaWZ5X190YWdbcmVhZG9ubHldIC50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue2Rpc3BsYXk6bm9uZX0udGFnaWZ5X190YWdbcmVhZG9ubHldPmRpdjo6YmVmb3Jle2FuaW1hdGlvbjpyZWFkb25seVN0eWxlcyAxcyBjYWxjKC0xcyAqICh2YXIoLS1yZWFkb25seS1zdHJpcGVkKSAtIDEpKSBwYXVzZWR9QGtleWZyYW1lcyByZWFkb25seVN0eWxlc3swJXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS10YWctYmcpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHZhcigtLXRhZy1iZykgNTAlLHZhcigtLXRhZy1iZykgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCkgMC81cHggNXB4O2JveC1zaGFkb3c6bm9uZTtmaWx0ZXI6YnJpZ2h0bmVzcyguOTUpfX0udGFnaWZ5X190YWctLWVkaXRhYmxlPmRpdntjb2xvcjp2YXIoLS10YWctdGV4dC1jb2xvci0tZWRpdCl9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT5kaXY6OmJlZm9yZXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS10YWctaG92ZXIpIGluc2V0IWltcG9ydGFudH0udGFnaWZ5X190YWctLWVkaXRhYmxlPi50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue3BvaW50ZXItZXZlbnRzOm5vbmV9LnRhZ2lmeV9fdGFnLS1lZGl0YWJsZT4udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjo6YWZ0ZXJ7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpIHRyYW5zbGF0ZVgoNXB4KX0udGFnaWZ5X190YWctLWVkaXRhYmxlLnRhZ2lmeS0taW52YWxpZD5kaXY6OmJlZm9yZXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS10YWctaW52YWxpZC1jb2xvcikgaW5zZXQhaW1wb3J0YW50fS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRue29yZGVyOjU7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItcmFkaXVzOjUwcHg7Y3Vyc29yOnBvaW50ZXI7Zm9udDoxNHB4LzEgQXJpYWw7YmFja2dyb3VuZDp2YXIoLS10YWctcmVtb3ZlLWJ0bi1iZyk7Y29sb3I6dmFyKC0tdGFnLXJlbW92ZS1idG4tY29sb3IpO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7bWFyZ2luLXJpZ2h0OjQuNjY2NjY2NjY2N3B4O21hcmdpbi1sZWZ0OmF1dG87b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246LjJzIGVhc2Utb3V0fS50YWdpZnlfX3RhZ19fcmVtb3ZlQnRuOjphZnRlcntjb250ZW50OlxcXCLDl1xcXCI7dHJhbnNpdGlvbjouM3MsY29sb3IgMHN9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnZhcigtLXRhZy1yZW1vdmUtYnRuLWJnLS1ob3Zlcil9LnRhZ2lmeV9fdGFnX19yZW1vdmVCdG46aG92ZXIrZGl2PnNwYW57b3BhY2l0eTouNX0udGFnaWZ5X190YWdfX3JlbW92ZUJ0bjpob3ZlcitkaXY6OmJlZm9yZXtib3gtc2hhZG93OjAgMCAwIHZhcigtLXRhZy1pbnNldC1zaGFkb3ctc2l6ZSkgdmFyKC0tdGFnLXJlbW92ZS1iZyxyZ2JhKDIxMSwxNDgsMTQ4LC4zKSkgaW5zZXQhaW1wb3J0YW50O3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMnN9LnRhZ2lmeTpub3QoLnRhZ2lmeS0tbWl4KSAudGFnaWZ5X19pbnB1dCBicntkaXNwbGF5Om5vbmV9LnRhZ2lmeTpub3QoLnRhZ2lmeS0tbWl4KSAudGFnaWZ5X19pbnB1dCAqe2Rpc3BsYXk6aW5saW5lO3doaXRlLXNwYWNlOm5vd3JhcH0udGFnaWZ5X19pbnB1dHtmbGV4LWdyb3c6MTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MTEwcHg7bWFyZ2luOjVweDtwYWRkaW5nOnZhcigtLXRhZy1wYWQpO2xpbmUtaGVpZ2h0Om5vcm1hbDtwb3NpdGlvbjpyZWxhdGl2ZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtjb2xvcjp2YXIoLS1pbnB1dC1jb2xvcik7Ym94LXNpemluZzppbmhlcml0fS50YWdpZnlfX2lucHV0OmVtcHR5OjpiZWZvcmV7cG9zaXRpb246c3RhdGljfS50YWdpZnlfX2lucHV0OmZvY3Vze291dGxpbmU6MH0udGFnaWZ5X19pbnB1dDpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGVhc2Utb3V0O29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRleCg2cHgpfUBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKXsudGFnaWZ5X19pbnB1dDpmb2N1czo6YmVmb3Jle2Rpc3BsYXk6bm9uZX19LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6ZW1wdHk6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBlYXNlLW91dDtvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmU7Y29sb3I6cmdiYSgwLDAsMCwuMjUpO2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yLWZvY3VzKX1ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCl7LnRhZ2lmeV9faW5wdXQ6Zm9jdXM6ZW1wdHk6OmFmdGVye2Rpc3BsYXk6bm9uZX19LnRhZ2lmeV9faW5wdXQ6OmJlZm9yZXtjb250ZW50OmF0dHIoZGF0YS1wbGFjZWhvbGRlcik7aGVpZ2h0OjFlbTtsaW5lLWhlaWdodDoxZW07bWFyZ2luOmF1dG8gMDt6LWluZGV4OjE7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO3doaXRlLXNwYWNlOm5vd3JhcDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZX0udGFnaWZ5X19pbnB1dDo6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc3VnZ2VzdCk7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOmFic29sdXRlO21pbi13aWR0aDpjYWxjKDEwMCUgLSAxLjVlbSk7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6cHJlO2NvbG9yOnZhcigtLXRhZy10ZXh0LWNvbG9yKTtvcGFjaXR5Oi4zO3BvaW50ZXItZXZlbnRzOm5vbmU7bWF4LXdpZHRoOjEwMHB4fS50YWdpZnlfX2lucHV0IC50YWdpZnlfX3RhZ3ttYXJnaW46MCAxcHh9LnRhZ2lmeS0tbWl4e2Rpc3BsYXk6YmxvY2t9LnRhZ2lmeS0tbWl4IC50YWdpZnlfX2lucHV0e3BhZGRpbmc6NXB4O21hcmdpbjowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGluZS1oZWlnaHQ6MS41O2Rpc3BsYXk6YmxvY2t9LnRhZ2lmeS0tbWl4IC50YWdpZnlfX2lucHV0OjpiZWZvcmV7aGVpZ2h0OmF1dG87ZGlzcGxheTpub25lO2xpbmUtaGVpZ2h0OmluaGVyaXR9LnRhZ2lmeS0tbWl4IC50YWdpZnlfX2lucHV0OjphZnRlcntjb250ZW50Om5vbmV9LnRhZ2lmeS0tc2VsZWN0OjphZnRlcntjb250ZW50OlxcXCI+XFxcIjtvcGFjaXR5Oi41O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtib3R0b206MDtmb250OjE2cHggbW9ub3NwYWNlO2xpbmUtaGVpZ2h0OjhweDtoZWlnaHQ6OHB4O3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTUwJSwtNTAlKSBzY2FsZVgoMS4yKSByb3RhdGUoOTBkZWcpO3RyYW5zaXRpb246LjJzIGVhc2UtaW4tb3V0fS50YWdpZnktLXNlbGVjdFthcmlhLWV4cGFuZGVkPXRydWVdOjphZnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xNTAlLC01MCUpIHJvdGF0ZSgyNzBkZWcpIHNjYWxlWSgxLjIpfS50YWdpZnktLXNlbGVjdCAudGFnaWZ5X190YWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MS44ZW07Ym90dG9tOjB9LnRhZ2lmeS0tc2VsZWN0IC50YWdpZnlfX3RhZyBkaXZ7ZGlzcGxheTpub25lfS50YWdpZnktLXNlbGVjdCAudGFnaWZ5X19pbnB1dHt3aWR0aDoxMDAlfS50YWdpZnktLWVtcHR5IC50YWdpZnlfX2lucHV0OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgZWFzZS1vdXQ7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG99LnRhZ2lmeS0tbWl4IC50YWdpZnktLWVtcHR5IC50YWdpZnlfX2lucHV0OjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnRhZ2lmeS0tZm9jdXN7LS10YWdzLWJvcmRlci1jb2xvcjp2YXIoLS10YWdzLWZvY3VzLWJvcmRlci1jb2xvcik7dHJhbnNpdGlvbjowc30udGFnaWZ5LS1pbnZhbGlkey0tdGFncy1ib3JkZXItY29sb3I6I0QzOTQ5NH0udGFnaWZ5X19kcm9wZG93bntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMXB4KTtvdmVyZmxvdzpoaWRkZW59LnRhZ2lmeV9fZHJvcGRvd25bcGxhY2VtZW50PXRvcF17bWFyZ2luLXRvcDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKX0udGFnaWZ5X19kcm9wZG93bltwbGFjZW1lbnQ9dG9wXSAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcntib3JkZXItdG9wLXdpZHRoOjEuMXB4O2JvcmRlci1ib3R0b20td2lkdGg6MH0udGFnaWZ5X19kcm9wZG93bltwb3NpdGlvbj10ZXh0XXtib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKHZhcigtLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5KSwuMSk7Zm9udC1zaXplOi45ZW19LnRhZ2lmeV9fZHJvcGRvd25bcG9zaXRpb249dGV4dF0gLnRhZ2lmeV9fZHJvcGRvd25fX3dyYXBwZXJ7Ym9yZGVyLXdpZHRoOjFweH0udGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcnttYXgtaGVpZ2h0OjMwMHB4O292ZXJmbG93OmF1dG87b3ZlcmZsb3cteDpoaWRkZW47YmFja2dyb3VuZDp2YXIoLS10YWdpZnktZGQtYmctY29sb3IpO2JvcmRlcjoxcHggc29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLXRhZ2lmeS1kZC1jb2xvci1wcmltYXJ5KTtib3JkZXItYm90dG9tLXdpZHRoOjEuNXB4O2JvcmRlci10b3Atd2lkdGg6MDtib3gtc2hhZG93OjAgMnB4IDRweCAtMnB4IHJnYmEoMCwwLDAsLjIpO3RyYW5zaXRpb246LjI1cyBjdWJpYy1iZXppZXIoMCwxLC41LDEpfS50YWdpZnlfX2Ryb3Bkb3duX19oZWFkZXI6ZW1wdHl7ZGlzcGxheTpub25lfS50YWdpZnlfX2Ryb3Bkb3duX19mb290ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDouNWVtO3BhZGRpbmc6dmFyKC0tdGFnaWZ5LWRkLWl0ZW0tcGFkKTtmb250LXNpemU6LjdlbTtmb250LXN0eWxlOml0YWxpYztvcGFjaXR5Oi41fS50YWdpZnlfX2Ryb3Bkb3duX19mb290ZXI6ZW1wdHl7ZGlzcGxheTpub25lfS50YWdpZnlfX2Ryb3Bkb3duLS1pbml0aWFsIC50YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVye21heC1oZWlnaHQ6MjBweDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMWVtKX0udGFnaWZ5X19kcm9wZG93bi0taW5pdGlhbFtwbGFjZW1lbnQ9dG9wXSAudGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyZW0pfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVte2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOnZhcigtLXRhZ2lmeS1kZC1pdGVtLXBhZCk7bWFyZ2luOjFweDtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOjA7bWF4LWhlaWdodDo2MHB4O21heC13aWR0aDoxMDAlfS50YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS10YWdpZnktZGQtY29sb3ItcHJpbWFyeSk7Y29sb3I6I2ZmZn0udGFnaWZ5X19kcm9wZG93bl9faXRlbTphY3RpdmV7ZmlsdGVyOmJyaWdodG5lc3MoMTA1JSl9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWhpZGRlbntwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luOjAgMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO21heC1oZWlnaHQ6MDt0cmFuc2l0aW9uOnZhcigtLXRhZ2lmeS1kZC1pdGVtLS1oaWRkZW4tZHVyYXRpb24sLjNzKSFpbXBvcnRhbnR9LnRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWhpZGRlbj4qe3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjppbmhlcml0fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogbGlzdCBpY29uICovXFxuLyogZm9yZXN0IGljb24gKi9cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRlZmF1bHQtZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWhlYWRlci1iZy1jb2xvdXI6ICM3YmIyYTM7XFxuICAgIC0tbmF2YmFyLWJnLWNvbG91cjogIzQxNWQyZTtcXG4gICAgLS1jb250ZW50LWJnLWNvbG91cjogI2ZmZjtcXG4gICAgLS1wcm9qZWN0LXNpZ24tYmctY29sb3VyOiAjYTA1ODI0O1xcblxcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWhlYWRlci13aWR0aDogMTAwdnc7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiB2YXIoLS1oZWFkZXItd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG91cik7XFxufVxcblxcbi5ncmlkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnLWNvbG91cik7XFxuICAgIC8qIG1heC13aWR0aDogODAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC0taGVhZGluZ19fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXdQcm9qZWN0QnRuLCAubmV3SXRlbUJ0biB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvSXRlbS5hY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG9JdGVtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWluLXdpZHRoOiA2MHZ3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogU3R5bGluZyBGb3JtIElucHV0cyAqL1xcbmlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG9kb0l0ZW0tLXByaW9yaXR5X19sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MHB4LCAycHgpO1xcbn1cXG5cXG4udG9kb0l0ZW0tLXByaW9yaXR5X190ZXh0IHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLm5vbmVTZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS0tZHJvcGRvd24gb3B0aW9uIHtcXG4gICBjb2xvcjogcmVkO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLml0ZW1JbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4uaXRlbUluZm8uY29udHJhY3RlZCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHJvdy1nYXA6IDA7XFxufVxcblxcbi5leHBhbmRlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBhbmltYXRpb246IG9wZW4gMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmNvbnRyYWN0ZWQge1xcbiAgICBhbmltYXRpb246IGNsb3NlIDAuMnMgZWFzZS1pbiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2xvc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIH1cXG59XFxuXFxuLyogU2F2ZSBCdXR0b24gYW5kIE1lc3NhZ2UgKi9cXG5cXG4uc2F2ZUl0ZW1CdG4ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5zYXZlQnRuQ29udGFpbmVyLFxcbi5tZXNzYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNhdmVNZXNzYWdlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4vKiBOYXZiYXIgJiBOYXZiYXIgQ29udGVudHMgKi9cXG5cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWJnLWNvbG91cik7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbl9fYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2YmFyLS1hY3Rpb25fX2J1dHRvbiBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uX19idXR0b24gc3BhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uc19fYm90dG9tIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX2xpbmtzIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX2xpbmtzID4gbGksIGEsIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm5hdmJhci0tcHJvamVjdHNfX3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubmF2YmFyIGxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC0tc2lnbnBvc3QgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0IHtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJvamVjdC1zaWduLWJnLWNvbG91cik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0ZXh0LWluZGVudDogMTAlO1xcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMjBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB2YXIoLS1wcm9qZWN0LXNpZ24tYmctY29sb3VyKTtcXG4gICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLyogTmV3IFByb2plY3QgTW9kYWwgRm9ybSAqL1xcbi5tb2RhbENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuLm1vZGFsQ29udGFpbmVyLnNob3dNb2RhbCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC0taGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLS1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LS1tb2RhbF9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC0tbW9kYWxfX2J1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG59XFxuXFxuI3N1Ym1pdE1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWJnLWNvbG91cik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNzdWJtaXRNb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRiMjQ7XFxufVxcblxcbiNjbG9zZU1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jY2xvc2VNb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzEsIDE2OCwgMTY4KTtcXG59XFxuXFxuLnRvZGF5LS10aXRsZSB7XFxufVxcblxcbi50b2RheS0tdGl0bGVfX2hlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnRvZGF5LS10aXRsZV9fZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLGNBQWM7QUFFZCxnQkFBZ0I7O0FBR2hCOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTs7OztpQkFJYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsaUNBQWlDOztJQUVqQyxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osMENBQTBDO0FBQzlDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdC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ckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcbi8qIGxpc3QgaWNvbiAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFxcXCIpO1xcbi8qIGZvcmVzdCBpY29uICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXFxcIik7XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1oZWFkZXItYmctY29sb3VyOiAjN2JiMmEzO1xcbiAgICAtLW5hdmJhci1iZy1jb2xvdXI6ICM0MTVkMmU7XFxuICAgIC0tY29udGVudC1iZy1jb2xvdXI6ICNmZmY7XFxuICAgIC0tcHJvamVjdC1zaWduLWJnLWNvbG91cjogI2EwNTgyNDtcXG5cXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1oZWFkZXItd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogdmFyKC0taGVhZGVyLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvdXIpO1xcbn1cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICAvKiBmb250LXNpemU6IDJyZW07ICovXFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvdXIpO1xcbiAgICAvKiBtYXgtd2lkdGg6IDgwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtLWhlYWRpbmdfX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmV3UHJvamVjdEJ0biwgLm5ld0l0ZW1CdG4ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdzsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kb0l0ZW0uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvSXRlbSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi13aWR0aDogNjB2dztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIFN0eWxpbmcgRm9ybSBJbnB1dHMgKi9cXG5pbnB1dFt0eXBlPSd0ZXh0J106OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRvZG9JdGVtLS1wcmlvcml0eV9fbGFiZWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjBweCwgMnB4KTtcXG59XFxuXFxuLnRvZG9JdGVtLS1wcmlvcml0eV9fdGV4dCB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ub25lU2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktLWRyb3Bkb3duIG9wdGlvbiB7XFxuICAgY29sb3I6IHJlZDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5pdGVtSW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuLml0ZW1JbmZvLmNvbnRyYWN0ZWQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICByb3ctZ2FwOiAwO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmV4cGFuZGVkIHtcXG4gICAgYW5pbWF0aW9uOiBvcGVuIDAuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5jb250cmFjdGVkIHtcXG4gICAgYW5pbWF0aW9uOiBjbG9zZSAwLjJzIGVhc2UtaW4gZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgbWF4LWhlaWdodDogMHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNsb3NlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgbWF4LWhlaWdodDogMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIFNhdmUgQnV0dG9uIGFuZCBNZXNzYWdlICovXFxuXFxuLnNhdmVJdGVtQnRuIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uc2F2ZUJ0bkNvbnRhaW5lcixcXG4ubWVzc2FnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zYXZlTWVzc2FnZSB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuLyogTmF2YmFyICYgTmF2YmFyIENvbnRlbnRzICovXFxuXFxuLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1iZy1jb2xvdXIpO1xcbn1cXG5cXG4ubmF2YmFyLS1hY3Rpb25fX2J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdmJhci0tYWN0aW9uX19idXR0b24gaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbl9fYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXZiYXItLWFjdGlvbnNfX2JvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxufVxcblxcbi5uYXZiYXItLXByb2plY3RzX19saW5rcyB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5uYXZiYXItLXByb2plY3RzX19saW5rcyA+IGxpLCBhLCBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5uYXZiYXItLXByb2plY3RzX190aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm5hdmJhciBsaSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtLXNpZ25wb3N0IGEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5wcm9qZWN0LS1zaWducG9zdCB7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByb2plY3Qtc2lnbi1iZy1jb2xvdXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgdGV4dC1pbmRlbnQ6IDEwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5wcm9qZWN0LS1zaWducG9zdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTIwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdmFyKC0tcHJvamVjdC1zaWduLWJnLWNvbG91cik7XFxuICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi8qIE5ldyBQcm9qZWN0IE1vZGFsIEZvcm0gKi9cXG4ubW9kYWxDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbi5tb2RhbENvbnRhaW5lci5zaG93TW9kYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnByb2plY3QtbW9kYWwtLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC0tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC0tbW9kYWxfX2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtLW1vZGFsX19idXR0b25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxufVxcblxcbiNzdWJtaXRNb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1iZy1jb2xvdXIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jc3VibWl0TW9kYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0YjI0O1xcbn1cXG5cXG4jY2xvc2VNb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuI2Nsb3NlTW9kYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcxLCAxNjgsIDE2OCk7XFxufVxcblxcbi50b2RheS0tdGl0bGUge1xcbn1cXG5cXG4udG9kYXktLXRpdGxlX19oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi50b2RheS0tdGl0bGVfX2RhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiAocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiAocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1vbnRocyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7IC8vIFRoZSBKUyBEYXRlIG9iamVjdCBzdXBwb3J0cyBkYXRlIG1hdGggYnkgYWNjZXB0aW5nIG91dC1vZi1ib3VuZHMgdmFsdWVzIGZvclxuICAvLyBtb250aCwgZGF5LCBldGMuIEZvciBleGFtcGxlLCBuZXcgRGF0ZSgyMDIwLCAwLCAwKSByZXR1cm5zIDMxIERlYyAyMDE5IGFuZFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMSkgcmV0dXJucyAxIEZlYiAyMDIxLiAgVGhpcyBpcyAqYWxtb3N0KiB0aGUgYmVoYXZpb3Igd2VcbiAgLy8gd2FudCBleGNlcHQgdGhhdCBkYXRlcyB3aWxsIHdyYXAgYXJvdW5kIHRoZSBlbmQgb2YgYSBtb250aCwgbWVhbmluZyB0aGF0XG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAzMSkgd2lsbCByZXR1cm4gMyBNYXIgMjAyMSBub3QgMjggRmViIDIwMjEgYXMgZGVzaXJlZC4gU29cbiAgLy8gd2UnbGwgZGVmYXVsdCB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkIG1vbnRoIGJ5IGFkZGluZyAxIHRvIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoIGFuZCB1c2luZyBhIGRhdGUgb2YgMCB0byBiYWNrIHVwIG9uZSBkYXkgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZFxuICAvLyBtb250aC5cblxuICB2YXIgZW5kT2ZEZXNpcmVkTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gIGVuZE9mRGVzaXJlZE1vbnRoLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xuICB2YXIgZGF5c0luTW9udGggPSBlbmRPZkRlc2lyZWRNb250aC5nZXREYXRlKCk7XG5cbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBkYXRlLnNldEZ1bGxZZWFyKGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNb250aHMgZnJvbSBcIi4uL2FkZE1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkWWVhcnNcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB5ZWFycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB5ZWFycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgeWVhcnMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgeWVhcnMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZFllYXJzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gU2VwIDAxIDIwMTkgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRZZWFycyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1vbnRocyhkaXJ0eURhdGUsIGFtb3VudCAqIDEyKTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkWWVhcnMgZnJvbSBcIi4uL2FkZFllYXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJZZWFyc1xuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHllYXJzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIHllYXJzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgeWVhcnMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA1IHllYXJzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YlllYXJzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBUdWUgU2VwIDAxIDIwMDkgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJZZWFycyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZFllYXJzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFnaWZ5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWdpZnkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHRvZG9JdGVtRmFjdG9yeSBmcm9tICcuL3RvZG8uanMnO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBub3RlcztcbiAgICB0b2RvSXRlbXMgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRvZG9JdGVtIE9iamVjdHMgdG8gSlNPTlxuICAgIHNlbGVjdEl0ZW1Qcm9wZXJ0aWVzKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdPYmplY3RzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnRvZG9JdGVtcykubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgZmluYWxPYmogPSB7fTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0aWVzID0gKFxuICAgICAgICAgICAgICAgICh7IHRpdGxlLCBub3RlcywgcHJpb3JpdHksIGNoZWNrbGlzdCwgZGF0ZSwgZHVlRGF0ZSwgX3RhZ3MsIGNvbXBsZXRpb24gfSkgPT5cbiAgICAgICAgICAgICAgICAoeyB0aXRsZSwgbm90ZXMsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRhdGUsIGR1ZURhdGUsIF90YWdzLCBjb21wbGV0aW9uIH0pXG4gICAgICAgICAgICApKGl0ZW0pO1xuXG4gICAgICAgICAgICBmaW5hbE9ialtpdGVtLnV1aWRdID0gc2VsZWN0ZWRQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsT2JqO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0cmluZ09iamVjdHM7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIC8qIFxuICAgICAgICBLZXlzOiB0aGlzLm5hbWVcbiAgICAgICAgVmFsdWVzOiB0b2RvSXRlbXMgb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IG9iamVjdE1lcmdlID0ge31cbiAgICAgICAgY29uc3QgYXJyYXlPZk9iamVjdHMgPSB0aGlzLnNlbGVjdEl0ZW1Qcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIGFycmF5T2ZPYmplY3RzKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG9iamVjdE1lcmdlLCBvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0TWVyZ2UpKTtcbiAgICB9XG5cbiAgICBfcmVjb25zdHJ1Y3RUb2RvSXRlbU9iamVjdHMoX3BhcnNlKSB7XG4gICAgICAgIC8vIGNsZWFyIGN1cnJlbnQgdG9kbyBpdGVtcyBpbiBwcm9qZWN0XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKF9wYXJzZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0b2RvSXRlbUZhY3RvcnkodmFsdWUudGl0bGUpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgcmVtYWluaW5nIGZpZWxkcyB1c2luZyBzZXR0ZXJzXG4gICAgICAgICAgICBpdGVtLnNldE5vdGVzKHZhbHVlLm5vdGVzKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0UHJpb3JpdHkodmFsdWUucHJpb3JpdHkpO1xuICAgICAgICAgICAgaXRlbS5zZXRDaGVja2xpc3QodmFsdWUuY2hlY2tsaXN0KTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0ZSh2YWx1ZS5kYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RHVlRGF0ZSh2YWx1ZS5kdWVEYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0VGFncyh2YWx1ZS5fdGFncyk7XG4gICAgICAgICAgICBpdGVtLnNldENvbXBsZXRpb24odmFsdWUuY29tcGxldGlvbik7XG4gICAgICAgICAgICBpdGVtLnNldFVVSUQoa2V5KTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiByZWNvbnN0cnVjdGVkIG9iamVjdCBiYWNrIHRvIGluc3RhbmNlIHByb3BlcnR5XG4gICAgICAgICAgICB0aGlzLnRvZG9JdGVtc1trZXldID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvZG9JdGVtcyk7XG4gICAgfVxuXG4gICAgcmV0cmlldmVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFyc2UpO1xuICAgICAgICB0aGlzLl9yZWNvbnN0cnVjdFRvZG9JdGVtT2JqZWN0cyhwYXJzZSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbSh0aXRsZSkge1xuICAgICAgICBjb25zdCBpdGVtID0gdG9kb0l0ZW1GYWN0b3J5KHRpdGxlKTtcbiAgICAgICAgLy8gdGhpcy50b2RvSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy50b2RvSXRlbXNbaXRlbS51dWlkXSA9IGl0ZW07XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbSh1dWlkKSB7XG4gICAgICAgIGlmKHRoaXMudG9kb0l0ZW1zW3V1aWRdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy50b2RvSXRlbXNbdXVpZF07XG5cbiAgICAgICAgICAgIGxldCBzdG9yZWRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmVkSXRlbXNbdXVpZF07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHN0b3JlZEl0ZW1zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSXRlbTogJHt1dWlkfSBkb2VzIG5vdCBleGlzdCFgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB0b2RvSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICAgKi9cbiAgICBzZXQgbm90ZXModGV4dCkge1xuICAgICAgICB0aGlzLl9ub3RlcyA9IHRleHQ7XG4gICAgfVxuXG4gICAgZ2V0VW5pcXVlVGFncygpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IE9iamVjdC52YWx1ZXModGhpcy50b2RvSXRlbXMpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS50YWdzKVxuICAgICAgICAgICAgLmZsYXQoKTtcblxuICAgICAgICBjb25zdCB1bmlxdWVBcnJheSA9IEFycmF5LmZyb20obmV3IFNldCh0YWdzKSk7XG4gICAgICAgIHJldHVybiB1bmlxdWVBcnJheTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHJldHVybiBwO1xufVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmNvbnN0IHRhZ01peGluID0ge1xuICAgIGdldFRhZ3MgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgICB9LFxuXG4gICAgdXBkYXRlVGFncyAoKSB7XG4gICAgICAgIGlmKHRoaXMudGFnaWZ5LnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWdzID0gdGhpcy50YWdpZnkudmFsdWUubWFwKHggPT4geC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkVGFnaWZ5VGFnICh0KSB7XG4gICAgICAgIHRoaXMudGFnaWZ5LmFkZFRhZ3ModCk7XG4gICAgfSxcblxuICAgIC8vIFVzZWQgb25seSB0byBsb2FkIHRhZ3MgZm9yIG1vY2sgdG9kb0l0ZW1zIGluIHByb2plY3QuanNcbiAgICBfYXBwZW5kVGFnICgpIHtcbiAgICAgICAgZm9yIChjb25zdCBbXywgdmFsXSBvZiBPYmplY3QuZW50cmllcyhhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICBpZih0eXBlb2YodmFsKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhZ3MucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE5vbi1zdHJpbmcgYXJndW1lbnQgZGV0ZWN0ZWQ6ICR7dmFsfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuY29uc3QgY2hlY2tsaXN0TWl4aW4gPSB7XG4gICAgcHJpbnRDaGVja2xpc3QgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoZWNrbGlzdCk7XG4gICAgfSxcbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5jaGVja2xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldHRlck1peGluID0ge1xuICAgIHNldFRpdGxlICh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfSxcblxuICAgIHNldE5vdGVzIChub3Rlcykge1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfSxcblxuICAgIHNldENoZWNrbGlzdCAoY2hlY2tsaXN0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIH0sXG5cbiAgICBzZXREYXRlIChkYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfSxcblxuICAgIHNldER1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9LFxuXG4gICAgc2V0VGFncyAodGFncykge1xuICAgICAgICB0aGlzLl90YWdzID0gdGFncztcbiAgICB9LFxuXG4gICAgc2V0Q29tcGxldGlvbiAoY29tcGxldGlvbikge1xuICAgICAgICB0aGlzLmNvbXBsZXRpb24gPSBjb21wbGV0aW9uO1xuICAgIH0sXG5cbiAgICBzZXRVVUlEIChpZCkge1xuICAgICAgICB0aGlzLnV1aWQgPSBpZDtcbiAgICB9LFxuXG4gICAgc2V0UHJpb3JpdHkgKHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9ucyB1c2VkIHRvIGxvZ2dpbmcgYW5kIGRlYnVnZ2luZyBwdXJwb3Nlc1xuY29uc3QgZGVidWdNaXhpbiA9IHtcbiAgICBwcmludFN1bW1hcnlJbk9iamVjdCAoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICBUaXRsZTogJHt0aGlzLnRpdGxlfSxcbiAgICAgICAgICAgIERhdGU6ICR7dGhpcy5kYXRlfSxcbiAgICAgICAgICAgIER1ZSBEYXRlOiAke3RoaXMuZHVlRGF0ZX0sXG4gICAgICAgICAgICBUYWdzOiAke3RoaXMuX3RhZ3N9LFxuICAgICAgICAgICAgTm90ZXM6ICR7dGhpcy5ub3Rlc30sXG4gICAgICAgICAgICBDaGVja2xpc3Q6ICR7dGhpcy5fY2hlY2tsaXN0fSxcbiAgICAgICAgICAgIENvbXBsZXRpb246ICR7dGhpcy5jb21wbGV0aW9ufSxcbiAgICAgICAgICAgIFVVSUQ6ICR7dGhpcy51dWlkfVxuICAgICAgICBgO1xuICAgIH1cbn1cblxuLy8gdXNpbmcgYSBjbG9zdXJlIHRvIGVuc3VyZSBhIG5ldyBpdGVtVGFncyBBcnJheSBpcyBjcmVhdGVkIGV2ZXJ5IHRpbWUgdGhpcyBpcyBjYWxsZWRcbmNvbnN0IGdldERlZmF1bHRBcmdzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbURhdGU6IG51bGwsIFxuICAgICAgICBpdGVtRHVlRGF0ZTogbnVsbCwgXG4gICAgICAgIGl0ZW1UYWdzOiBuZXcgQXJyYXkoKSxcbiAgICAgICAgaXRlbVRhZ2lmeTogbnVsbCxcbiAgICAgICAgaXRlbU5vdGVzOiBudWxsLFxuICAgICAgICBpdGVtUHJpb3JpdHk6IG51bGwsXG4gICAgICAgIGl0ZW1DaGVja2xpc3Q6IG5ldyBBcnJheSgpLFxuICAgICAgICBpdGVtQ29tcGxldGlvbjogZmFsc2UsXG4gICAgfVxufVxuXG4vLyBSZXNwb25zaWJpbGl0eTogcmV0dXJuL2NvbnN0cnVjdCBhIHRvZG9JdGVtIG9iamVjdCwgd2hpY2ggcmVwcmVzZW50cyBhIHNpbmdsZSB0b2RvIGl0ZW1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9JdGVtRmFjdG9yeShpdGVtVGl0bGUsIHsuLi5kZWZ9ID0gZ2V0RGVmYXVsdEFyZ3MoKSkge1xuICAgIGNvbnN0IHRpdGxlID0gaXRlbVRpdGxlO1xuICAgIGNvbnN0IGRhdGUgPSBkZWYuaXRlbURhdGU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRlZi5pdGVtRHVlRGF0ZTtcbiAgICBjb25zdCB0YWdzID0gZGVmLml0ZW1UYWdzO1xuICAgIGNvbnN0IHRhZ2lmeSA9IGRlZi5pdGVtVGFnaWZ5O1xuICAgIGNvbnN0IG5vdGVzID0gZGVmLml0ZW1Ob3RlcztcbiAgICBjb25zdCBwcmlvcml0eSA9IGRlZi5pdGVtUHJpb3JpdHk7XG4gICAgY29uc3QgX2NoZWNrbGlzdCA9IGRlZi5pdGVtQ2hlY2tsaXN0O1xuICAgIGxldCBjb21wbGV0aW9uID0gZGVmLml0ZW1Db21wbGV0aW9uO1xuXG4gICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuXG4gICAgY29uc3QgcHJpbnRTdW1tYXJ5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgVGl0bGU6ICR7dGl0bGV9LFxuICAgICAgICAgICAgRGF0ZTogJHtkYXRlfSxcbiAgICAgICAgICAgIER1ZSBEYXRlOiAke2R1ZURhdGV9LFxuICAgICAgICAgICAgVGFnczogJHt0YWdzfSxcbiAgICAgICAgICAgIE5vdGVzOiAke25vdGVzfSxcbiAgICAgICAgICAgIENoZWNrbGlzdDogJHtfY2hlY2tsaXN0fSxcbiAgICAgICAgICAgIENvbXBsZXRpb246ICR7Y29tcGxldGlvbn0sXG4gICAgICAgICAgICBVVUlEOiAke3V1aWR9XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGlvbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvcnlNZXRob2RzID0ge1xuICAgICAgICBwcmludFN1bW1hcnksXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRpb25cbiAgICB9XG5cbiAgICAvLyBjb3BpZXMgXCJ0YWdcIiBwcm9wZXJ0aWVzIGludG8gXCJpdGVtXCIgcHJvcGVydGllc1xuICAgIGxldCBwcm90byA9IE9iamVjdC5hc3NpZ24odGFnTWl4aW4sIGNoZWNrbGlzdE1peGluLCBzZXR0ZXJNaXhpbiwgZGVidWdNaXhpbik7ICAvLyAodGFyZ2V0T2JqLCBzb3VyY2VPYmopXG4gICAgXG4gICAgLy8gY3JlYXRlcyBhIG5ldyBvYmplY3QsIHVzaW5nIGFuIGV4aXN0aW5nIG9iamVjdCBhcyBpdHMgcHJvdG90eXBlIG9mIG5ld2x5IGNyZWF0ZWQgb2JqZWN0XG4gICAgbGV0IHRvZG9JdGVtT2JqID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgXG4gICAgLy8gXCJtaXgtaW5cIiBtZXRob2RzIGRlZmluZWQgaW4gZmFjdG9yeSBmdW5jdGlvblxuICAgIHRvZG9JdGVtT2JqID0gT2JqZWN0LmFzc2lnbih0b2RvSXRlbU9iaiwgZmFjdG9yeU1ldGhvZHMpO1xuXG4gICAgdG9kb0l0ZW1PYmoudGl0bGUgPSB0aXRsZTtcbiAgICB0b2RvSXRlbU9iai5kYXRlID0gZGF0ZTtcbiAgICB0b2RvSXRlbU9iai5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0b2RvSXRlbU9iai5fdGFncyA9IHRhZ3M7XG4gICAgdG9kb0l0ZW1PYmoudGFnaWZ5ID0gdGFnaWZ5O1xuICAgIHRvZG9JdGVtT2JqLmNoZWNrbGlzdCA9IF9jaGVja2xpc3Q7XG4gICAgdG9kb0l0ZW1PYmouY29tcGxldGlvbiA9IGNvbXBsZXRpb247XG4gICAgdG9kb0l0ZW1PYmoudXVpZCA9IHV1aWQ7XG4gICAgdG9kb0l0ZW1PYmoucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHJldHVybiB0b2RvSXRlbU9iajtcbn1cbiIsImltcG9ydCB7IGZvcm1hdCwgYWRkWWVhcnMsIHN1YlllYXJzLCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbi8vIEltcG9ydCBUYWdpZnlcbmltcG9ydCBUYWdpZnkgZnJvbSAnQHlhaXJlby90YWdpZnknO1xuaW1wb3J0ICdAeWFpcmVvL3RhZ2lmeS9kaXN0L3RhZ2lmeS5jc3MnO1xuXG4vLyBJbWFnZXNcbmltcG9ydCBwbGFudEltZyBmcm9tICcuL2ltYWdlcy9wbGFudC5wbmcnO1xuaW1wb3J0IGZvcmVzdEltZyBmcm9tICcuL2ltYWdlcy9mb3Jlc3QucG5nJztcbmltcG9ydCBiZWF2ZXJJbWcgZnJvbSAnLi9pbWFnZXMvYmVhdmVyLnBuZyc7XG5pbXBvcnQgbHVtYmVyamFja0ltZyBmcm9tICcuL2ltYWdlcy9sdW1iZXJqYWNraW5nLnBuZyc7XG5pbXBvcnQgc3VucmlzZUltZyBmcm9tICcuL2ltYWdlcy9zdW5yaXNlLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiB2aWV3KCkge1xuICAgIGxldCBlbGVtZW50SUQgPSAwO1xuICAgIGxldCBjb25maWcgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gYmluZENvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUsIGNsYXNzTmFtZT1udWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGNsYXNzTmFtZSkgeyAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOYXZBY3Rpb24oc3JjLCB0ZXh0LCBsaXN0ZW5lckZ1bmMpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb25zdCBhY3Rpb25JY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnN0IGFjdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgYWN0aW9uSWNvbi5zcmMgPSBzcmM7XG4gICAgICAgIGFjdGlvblRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgIGFjdGlvbkRpdi5jbGFzc05hbWUgPSAnbmF2YmFyLS1hY3Rpb25fX2J1dHRvbiBuZXdJdGVtQnRuJztcbiAgICAgICAgYWN0aW9uRGl2LmhyZWYgPSAnIyc7XG4gICAgICAgIGFjdGlvbkRpdi5hcHBlbmQoYWN0aW9uSWNvbiwgYWN0aW9uVGV4dCk7XG4gICAgICAgIGFjdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyRnVuYyk7XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbkRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbWFnZUJ1dHRvbihzcmMsIGNsYXNzTmFtZSwgbGlzdGVuZXJGdW5jKSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuZXdJdGVtQnRuLnR5cGUgPSAnaW1hZ2UnO1xuICAgICAgICBuZXdJdGVtQnRuLnNyYyA9IHNyY1xuICAgICAgICBuZXdJdGVtQnRuLm5hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lckZ1bmMpO1xuICAgICAgICBuZXdJdGVtQnRuLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIG5ld0l0ZW1CdG47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0ZUlucHV0KGxhYmVsTmFtZSwgZmllbGROYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBtYXhEYXRlID0gYWRkWWVhcnMoY3VycmVudERhdGUsIDEpO1xuICAgICAgICBjb25zdCBtaW5EYXRlID0gc3ViWWVhcnMoY3VycmVudERhdGUsIDEpO1xuICAgICAgICBcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxOYW1lO1xuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZUlucHV0Lm5hbWUgPSBmaWVsZE5hbWU7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgZGF0ZUlucHV0Lm1pbiA9IGZvcm1hdChtaW5EYXRlLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICBkYXRlSW5wdXQubWF4ID0gZm9ybWF0KG1heERhdGUsICd5eXl5LU1NLWRkJyk7XG5cbiAgICAgICAgZGF0ZURpdi5hcHBlbmQoZGF0ZUxhYmVsLCBkYXRlSW5wdXQpXG4gICAgICAgIHJldHVybiBkYXRlRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydFByb2plY3RIZWFkaW5nKHF1ZXJ5LCBwcm9qZWN0TmFtZSwgcmVwbGFjZT1mYWxzZSkge1xuICAgICAgICBjb25zdCB0YXJnZXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgaGVhZGluZ0ZsZXhDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncHJvamVjdC0taGVhZGluZ19fY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcblxuICAgICAgICBoZWFkaW5nRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC0taGVhZGluZ19fY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYocmVwbGFjZSAmJiBjdXJyZW50SGVhZGluZ0NvbnRhaW5lcikge1xuICAgICAgICAgICAgdGFyZ2V0RGl2LnJlcGxhY2VDaGlsZChoZWFkaW5nRmxleENvbnRhaW5lciwgY3VycmVudEhlYWRpbmdDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0RGl2LmFwcGVuZENoaWxkKGhlYWRpbmdGbGV4Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydFByb2plY3RJdGVtRm9ybShxdWVyeSwgaXRlbSkge1xuICAgICAgICAvLyBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlICd0b2RvJyBjaGVja2JveFxuICAgICAgICBjb25zdCB0b2dnbGVJdGVtQ29tcGxldGlvbk9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNvbmZpZy5jdXJyZW50UHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS51dWlkO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG5cbiAgICAgICAgICAgIGl0ZW0udG9nZ2xlQ29tcGxldGlvbigpO1xuICAgICAgICAgICAgcHJvamVjdFN0b3JlW2l0ZW1JZF0uY29tcGxldGlvbiA9IGl0ZW0uY29tcGxldGlvbjtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBzdG9yZWQgZGF0YSB3aXRoIG5ldyBjb21wbGV0aW9uIHN0YXR1c1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdFN0b3JlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVDaGVja2JveCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICdpdGVtQ29tcGxldGlvbic7XG4gICAgICAgICAgICBpbnB1dC5pZCA9IGVsZW1lbnRJRDsgLy8gbGluayBcImlkXCIgYW5kIFwiZm9yXCJcblxuICAgICAgICAgICAgaWYoaXRlbS5jb21wbGV0aW9uKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUl0ZW1Db21wbGV0aW9uT25DbGljayk7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gaW5wdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldEV4Y2x1c2l2ZVNpYmxpbmdOb2RlcyA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2libGluZ3MgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudElEID0gbm9kZS5wYXJlbnROb2RlLmlkO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJUb2RvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudG9kb0l0ZW1baWRdOm5vdChbaWQ9XCIke2N1cnJlbnRJRH1cIl0pYCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEFycmF5LmZyb20ob3RoZXJUb2RvSXRlbXMpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUluZm8gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtSW5mbycpO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goaXRlbUluZm8pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFrZVRvZG9JdGVtRXhwYW5kID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdJbmZvRGl2ID0gZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuaXRlbUluZm8nKTtcblxuICAgICAgICAgICAgaWYoc2libGluZ0luZm9EaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHNpYmxpbmdJbmZvRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2libGluZ0luZm9EaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29udHJhY3RlZCcpO1xuICAgICAgICAgICAgc2libGluZ0luZm9EaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcblxuICAgICAgICAgICAgLy8gbWFrZSBwYXJlbnQgbm9kZSBhY3RpdmUgc28gdGhhdCBpdCBjYW4gYWN0aXZhdGUgYm9yZGVyc1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUl0ZW1UaXRsZSA9ICh0aXRsZVR5cGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0aXRsZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZih0aXRsZVR5cGUgPT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmRlZmF1bHRWYWx1ZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50Lm5hbWUgPSAnaXRlbVRpdGxlJztcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuaWQgPSAnaXRlbVRpdGxlJztcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSAnVG9kbyBJdGVtJztcbiAgICAgICAgICAgICAgICB0aXRsZUVsZW1lbnQgPSBpbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRpdGxlVHlwZSA9PSAnbGFiZWwnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRpdGxlRWxlbWVudCA9IGxhYmVsRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aXRsZUVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVMYWJlbCA9IChfdGl0bGVUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUl0ZW1UaXRsZShfdGl0bGVUeXBlKTtcbiAgICAgICAgICAgIC8qIE5COiBXZSBkb24ndCBsaW5rIHRoZSAnaWQnIGFuZCAnZm9yJyBlbGVtZW50cyBiZWNhdXNlIHVzZXJzJyBjbGlja2luZyBvbiB0aGUgbGFiZWwgc2hvdWxkbid0IHRvZ2dsZSB0aGUgY2hlY2tib3guXG4gICAgICAgICAgICAvLyBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGVsZW1lbnRJRCk7ICovXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGFkZCBjYWxsYmFjayB0byBleHBhbmQgaXRlbSBvbiBjbGlja1xuICAgICAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IGhpZGUgb3RoZXIgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvdGhlckl0ZW1JbmZvID0gZ2V0RXhjbHVzaXZlU2libGluZ05vZGVzKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBvdGhlckl0ZW1JbmZvLmZvckVhY2goaW5mb0RpdiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluZm9EaXYucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRyYWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyB0aGVuIG1ha2UgY3VycmVudCBpdGVtIGV4cGFuZFxuICAgICAgICAgICAgICAgIG1ha2VUb2RvSXRlbUV4cGFuZChlKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUl0ZW1JbmZvRXhwYW5kYWJsZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzSW5wdXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBub3Rlcy50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgIG5vdGVzLm5hbWUgPSAnaXRlbU5vdGVzJztcbiAgICAgICAgICAgICAgICBub3Rlcy5wbGFjZWhvbGRlciA9ICdOb3Rlcyc7XG4gICAgICAgICAgICAgICAgbm90ZXMuZGVmYXVsdFZhbHVlID0gKGl0ZW0ubm90ZXMpID8gaXRlbS5ub3RlcyA6ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBub3RlcztcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UYXNrTGlzdERpdiA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaXRlbS5jaGVja2xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0RGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdExpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2xpc3REaXY7XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRlc0RpdiA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGNyZWF0ZURhdGVJbnB1dCgnRGF0ZTogJywgJ2l0ZW1EYXRlJywgKGl0ZW0uZGF0ZSkgPyBpdGVtLmRhdGUgOiBudWxsKTtcbiAgICAgICAgICAgICAgICAvLyAnRmlndXJlIFNwYWNlJyB1c2VkIGluIGR1ZURhdGUgbGFiZWwgdG8gYWxpZ24gdGhlIGRhdGUgcGlja2VycyAoc2VlOiBodHRwczovL3F3ZXJ0eS5kZXYvd2hpdGVzcGFjZS8pXG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZURhdGVJbnB1dCgnRHVlOuKAhycsICdpdGVtRHVlRGF0ZScsIChpdGVtLmR1ZURhdGUpID8gaXRlbS5kdWVEYXRlIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGF0ZUVsZW1lbnRzLmFwcGVuZChkYXRlLCBkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZUVsZW1lbnRzO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgY29uc3QgdGFnc0RpdiA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAndGFnc0lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBsYWNlaG9sZGVyID0gJ1RhZ3MnO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIC8vIFR1cm5zIHRleHQgaW5wdXQgaW50byBhIFRhZ2lmeSBpbnB1dCwgZW5hYmxpbmcgdGFnIGFkZG9uXG4gICAgICAgICAgICBjb25zdCB0YWdpZnlJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ2lmeUluc3RhbmNlID0gbmV3IFRhZ2lmeShpbnB1dCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFnaWZ5RXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gVGFnaWZ5IG9iamVjdCBhcyBhIHRvZG9JdGVtIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgaXRlbS50YWdpZnkgPSB0YWdpZnlJbnN0YW5jZTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdGFnaWZ5RXZlbnRMaXN0ZW5lciAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZVRhZ3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5RHJvcGRvd24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3ByaW9yaXR5RHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gWydTZWxlY3QgUHJpb3JpdHknLCAnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgICAgICAgICAgICAgICBkcm9wZG93bi5uYW1lID0gJ2l0ZW1Qcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcblxuICAgICAgICAgICAgICAgIHByaW9yaXRpZXMuZm9yRWFjaChwcmlvcml0eSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gQXJyYXkuZnJvbShkcm9wZG93bikuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT0gaXRlbS5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZpbHRlci5sZW5ndGggPT0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclswXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kKGxhYmVsLCBkcm9wZG93bik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByaW9yaXR5RGl2O1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2F2ZUJ0biA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZUZvcm1EYXRhVG9NZW1vcnkgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kb0l0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtT2JqID0ge31cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZUZvcm1hdHRlZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoa2V5LmluY2x1ZGVzKCdEYXRlJykgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0dGVkID0gZm9ybWF0KG5ldyBEYXRlKHZhbHVlKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVhZCBmb3JtRGF0YSAoaXRlcmF0b3IpIHZhbHVlcyBpbnRvIGFuIG9iamVjdCwgZm9ybWF0dGluZyB3aGVyZSBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCBmcm9tIElTTyB0byAneXl5eS1NTS1kZCcgZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXRlbURhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtT2JqW2tleV0gPSBkYXRlRm9ybWF0dGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpdGVtRHVlRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1PYmpba2V5XSA9IGRhdGVGb3JtYXR0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1PYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0VGl0bGUoZm9ybU9iai5pdGVtVGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldE5vdGVzKGZvcm1PYmouaXRlbU5vdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRQcmlvcml0eShmb3JtT2JqLml0ZW1Qcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0RGF0ZShmb3JtT2JqLml0ZW1EYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXREdWVEYXRlKGZvcm1PYmouaXRlbUR1ZURhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldENvbXBsZXRpb24oIChmb3JtT2JqLml0ZW1Db21wbGV0aW9uKSA/IHRydWUgOiBmYWxzZSApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtT2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NOYW1lID0gJ3NhdmVJdGVtQnRuJztcbiAgICAgICAgICAgICAgICBidG4udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgICAgIGJ0bi52YWx1ZSA9ICdTYXZlIENoYW5nZXMnO1xuICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENoYW5nZXMnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVGb3JtRGF0YVRvTWVtb3J5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJdGVtID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kb0l0ZW0nKS5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmN1cnJlbnRQcm9qZWN0LmRlbGV0ZUl0ZW0oaXRlbUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuVE9ET19DT05UQUlORVIpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGNsdW1zeSAtIGlzIHRoZXJlIGEgYmV0dGVyIHNvbHV0aW9uP1xuICAgICAgICAgICAgICAgICAgICBjb25maWcucHJvamVjdHNbY29uZmlnLmN1cnJlbnRQcm9qZWN0Lm5hbWVdLnJ1bigpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggcHJvamVjdCBudW1JdGVtcyBvbiBjcmVhdGUgb3IgZGVsZXRlXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQnV0dG9uKCdEZWxldGUgSXRlbScsICdkZWxldGVJdGVtQnRuJywgZGVsZXRlSXRlbSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlUHJvamVjdExpc3QoKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlQnRuO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaXRlbUJ1dHRvbkdyb3VwJyk7XG4gICAgICAgICAgICBidXR0b25Hcm91cC5hcHBlbmQoZGVsZXRlQnRuLCBzYXZlQnRuKTtcblxuICAgICAgICAgICAgLy8gY29udGVudCB0aGF0IHdpbGwgc2hvdyAoZXhwYW5kKSB3aGVuIGl0ZW0gdGl0bGUgaXMgY2xpY2tlZFxuICAgICAgICAgICAgY29uc3QgZXhwYW5kYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZXhwYW5kYWJsZS5jbGFzc0xpc3QuYWRkKCdpdGVtSW5mbycsICdjb250cmFjdGVkJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgZXhwYW5kYWJsZS5hcHBlbmQobm90ZXNJbnB1dCwgcHJpb3JpdHlEcm9wZG93biwgaXRlbVRhc2tMaXN0RGl2LCBkYXRlc0RpdiwgdGFnc0RpdiwgYnV0dG9uR3JvdXApO1xuXG4gICAgICAgICAgICB0YWdpZnlJbnB1dChleHBhbmRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy50YWdzSW5wdXQnKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIExvYWQgc2F2ZWQgdGFncyBpZiB0aGV5IGV4aXN0XG4gICAgICAgICAgICBpZiAoaXRlbS5fdGFncyAmJiBpdGVtLnRhZ2lmeSkge1xuICAgICAgICAgICAgICAgIGl0ZW0udGFnaWZ5LmFkZFRhZ3MoaXRlbS5fdGFncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBleHBhbmRhYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbUluZm9Gb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsICd0b2RvSXRlbScpO1xuICAgICAgICBpdGVtSW5mb0Zvcm0uaWQgPSBpdGVtLnV1aWQ7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVDaGVja2JveCgpO1xuXG4gICAgICAgIGxldCBfdGl0bGVUeXBlID0gJ2lucHV0JztcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAndG9kb0l0ZW0tLXByaW9yaXR5X19sYWJlbCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVRleHQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ3RvZG9JdGVtLS1wcmlvcml0eV9fdGV4dCcpO1xuICAgICAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBpdGVtLnByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoIChpdGVtLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlICdIaWdoJzpcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01lZGl1bSc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0xvdyc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdub25lU2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kKHByaW9yaXR5VGV4dCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpdGVtTGFiZWwgPSBjcmVhdGVMYWJlbChfdGl0bGVUeXBlKTtcbiAgICAgICAgaXRlbUluZm9Gb3JtLnNldEF0dHJpYnV0ZSgndGl0bGVUeXBlJywgX3RpdGxlVHlwZSk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRhcmdldERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgICAgICBcbiAgICAgICAgaXRlbUluZm9Gb3JtLmFwcGVuZChjaGVja2JveCwgaXRlbUxhYmVsLCBwcmlvcml0eUxhYmVsLCBjcmVhdGVJdGVtSW5mb0V4cGFuZGFibGUoKSk7XG4gICAgICAgIHRhcmdldERpdi5hcHBlbmRDaGlsZChpdGVtSW5mb0Zvcm0pO1xuXG4gICAgICAgIC8vIGVuc3VyZSBlYWNoIGlucHV0LWxhYmVsIHBhaXIgaGFzIGEgdW5pcXVlIGludGVnZXIgaWRlbnRpZmllclxuICAgICAgICBlbGVtZW50SUQrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRJdGVtQ2hhbmdlTGlzdGVuZXIoaWQsIHByb2plY3QpIHtcbiAgICAgICAgY29uc3Qgc2hvd0l0ZW1TYXZlZE1lc3NhZ2VPbkZvcm1DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlU2F2ZVNwYW4gPSAobXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuY2xhc3NOYW1lID0gJ21lc3NhZ2VDb250YWluZXInO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZVNwYW4pO1xuICAgIFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VTcGFuLnRleHRDb250ZW50ID0gbXNnO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VTcGFuLmNsYXNzTmFtZSA9ICdzYXZlTWVzc2FnZSc7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZUNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwZW5kcyBpZiBtc2cgZWxlbWVudCBkb2VzIG5vdCBleGlzdCwgb3RoZXJ3aXNlIHJlcGxhY2VzIHRoZSBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBzbWFydEFwcGVuZE1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXhpc3RpbmdTYXZlTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgY2hpbGQgb2YgLm1lc3NhZ2VDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdTYXZlTXNnLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNyZWF0ZVNhdmVTcGFuKG1zZyksIGV4aXN0aW5nU2F2ZU1zZyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mb1BhcmVudC5hcHBlbmRDaGlsZChjcmVhdGVTYXZlU3Bhbihtc2cpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3QucG9wdWxhdGVMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW5mb1BhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5pdGVtSW5mbycpO1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTYXZlTXNnID0gaW5mb1BhcmVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZU1lc3NhZ2UnKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZm9ybUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBzbWFydEFwcGVuZE1lc3NhZ2UoJ0NoYW5nZXMgU2F2ZWQnKTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VySXRlbUxpc3RSZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgZm9ybUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc21hcnRBcHBlbmRNZXNzYWdlKCdObyBDaGFuZ2VkIERldGVjdGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmlnZ2VySXRlbUxpc3RSZWZyZXNoID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9JdGVtJyk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gaW5zZXJ0IHRvZG8gaXRlbXMgYWdhaW5cbiAgICAgICAgICAgIGNvbmZpZy5wcm9qZWN0c1tjb25maWcuY3VycmVudFByb2plY3QubmFtZV0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGl0ZW1Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zYXZlSXRlbUJ0bicpO1xuICAgICAgICBcbiAgICAgICAgaXRlbUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgZm9ybUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIFtzaG93SXRlbVNhdmVkTWVzc2FnZU9uRm9ybUNoYW5nZV0uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChidXR0b25UZXh0LCBidXR0b25DbGFzcywgZXZlbnRDYWxsYmFjaykgPT4ge1xuICAgICAgICAvLyBcIkNyZWF0ZSBOZXcgSXRlbVwiIGJ1dHRvblxuICAgICAgICBjb25zdCBuZXdCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBidXR0b25DbGFzcyk7XG4gICAgICAgIG5ld0J0bi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50Q2FsbGJhY2spO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0J0bjtcbiAgICB9XG5cbiAgICBjb25zdCBsb3JlbUlwc3VtID0gKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVIZWFkaW5ncygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtLWhlYWRpbmdfX2NvbnRhaW5lcicpO1xuICAgIFxuICAgICAgICBwcm9qZWN0SGVhZGluZ3MuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktLXRpdGxlJyk7XG4gICAgICAgIHRvZGF5VGl0bGUucmVtb3ZlKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENsaWNrZWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICAgICAgICBjb25zdCBwcm9qZWN0T25EaXNwbGF5ID0gY29uZmlnLmN1cnJlbnRQcm9qZWN0O1xuXG4gICAgICAgIGlmIChwcm9qZWN0T25EaXNwbGF5Lm5hbWUgIT0gcHJvamVjdENsaWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZy5jdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGNvbmZpZy5jdXJyZW50UHJvamVjdCA9PSAnX190b2RheScpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlIGhlYWRpbmdzIScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUhlYWRpbmdzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN3aXRjaCBnbG9iYWwgZm9jdXMgdG8gY2xpY2tlZCBwcm9qZWN0XG4gICAgICAgICAgICBjb25maWcuY3VycmVudFByb2plY3QgPSBjb25maWcucHJvamVjdHNbcHJvamVjdENsaWNrZWRdLm5ld1Byb2plY3Q7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBleGlzdGluZyB0b2RvSXRlbXNcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvSXRlbScpO1xuXG4gICAgICAgICAgICBjdXJyZW50SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJ1biB0aGlzIHByb2plY3QgKHBvcHVsYXRlIHRvZG8gaXRlbXMpXG4gICAgICAgICAgICBjb25maWcucHJvamVjdHNbcHJvamVjdENsaWNrZWRdLnJ1bigpO1xuICAgICAgICAgICAgLy8gYXNzaWduIGN1cnJlbnRQcm9qZWN0IHRvIGNsaWNrZWQgcHJvamVjdFxuICAgICAgICAgICAgY29uZmlnLmN1cnJlbnRQcm9qZWN0ID0gY29uZmlnLnByb2plY3RzW3Byb2plY3RDbGlja2VkXS5uZXdQcm9qZWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0IGlzIGFscmVhZHkgZGlzcGxheWVkIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0c0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RPZlByb2plY3RzID0gY3JlYXRlRWxlbWVudCgndWwnLCAncHJvamVjdExpc3QnKTtcbiAgICAgICAgbGlzdE9mUHJvamVjdHMuY2xhc3NOYW1lID0gJ25hdmJhci0tcHJvamVjdHNfX2xpbmtzJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnbmF2YmFyLS1wcm9qZWN0c19fdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBJbnNlcnQgbGlzdCBvZiBwcm9qZWN0cyBpbnRvIERPTVxuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcucHJvamVjdHMpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5pZCA9IHByb2plY3Q7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc05hbWUgPSAncHJvamVjdC0tc2lnbnBvc3QnO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SXRlbVN0b3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdClcbiAgICAgICAgICAgIGNvbnN0IG51bUl0ZW1zSW5Qcm9qZWN0ID0gKHByb2plY3RJdGVtU3RvcmUpID8gT2JqZWN0LmtleXMoSlNPTi5wYXJzZShwcm9qZWN0SXRlbVN0b3JlKSkubGVuZ3RoIDogMDtcblxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0fSA6OiAke251bUl0ZW1zSW5Qcm9qZWN0fWA7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSAnIyc7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoUHJvamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGlzdE9mUHJvamVjdHM7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItLXByb2plY3RzX19saW5rcycpO1xuICAgICAgICBjdXJyZW50UHJvamVjdExpc3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVmcmVzaFByb2plY3RzTGlzdCgpLCBjdXJyZW50UHJvamVjdExpc3QpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjcmVhdGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlTW9kYWxGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBjb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gJ1Byb2plY3QgRGV0YWlscyc7XG5cbiAgICAgICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgICAgICAgICAgIG5hbWVJbnB1dC5uYW1lID0gJ3Byb2plY3ROYW1lJztcbiAgICAgICAgICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgICAgICAgICBub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ05vdGVzJztcbiAgICAgICAgICAgIG5vdGVzSW5wdXQubmFtZSA9ICdwcm9qZWN0Tm90ZXMnO1xuICAgICAgICAgICAgbm90ZXNJbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgICAgICAgICBmaWVsZHNldC5jbGFzc05hbWUgPSAncHJvamVjdC1tb2RhbC0tZGV0YWlscyc7XG4gICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQobGVnZW5kLCBuYW1lTGFiZWwsIG5hbWVJbnB1dCwgbm90ZXNMYWJlbCwgbm90ZXNJbnB1dCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZm9ybTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZU1vZGFsQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9kYWxDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtb2RhbCcpO1xuICAgICAgICAgICAgY29uc3QgbW9kYWxIZWFkaW5nID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtbW9kYWwtLWhlYWRpbmcnKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IGNyZWF0ZU1vZGFsRm9ybSgpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncHJvamVjdC0tbW9kYWxfX2J1dHRvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdE1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuaWQgPSAnbW9kYWxDb250YWluZXInO1xuICAgICAgICAgICAgbW9kYWxGb3JtLmlkID0gJ3Byb2plY3QtbW9kYWwtZm9ybSc7XG4gICAgICAgICAgICBzdWJtaXRNb2RhbEJ0bi5pZCA9ICdzdWJtaXRNb2RhbCc7XG4gICAgICAgICAgICBjbG9zZU1vZGFsQnRuLmlkID0gJ2Nsb3NlTW9kYWwnO1xuICAgIFxuICAgICAgICAgICAgbW9kYWxIZWFkaW5nLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBcbiAgICAgICAgICAgIHN1Ym1pdE1vZGFsQnRuLnRleHRDb250ZW50ID0gJ0FjY2VwdCc7XG4gICAgICAgICAgICBzdWJtaXRNb2RhbEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBzdWJtaXRNb2RhbEJ0bi5zZXRBdHRyaWJ1dGUoJ2Zvcm0nLCAncHJvamVjdC1tb2RhbC1mb3JtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlTW9kYWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwLmFwcGVuZChjbG9zZU1vZGFsQnRuLCBzdWJtaXRNb2RhbEJ0bik7XG4gICAgXG4gICAgICAgICAgICBtb2RhbC5hcHBlbmQobW9kYWxIZWFkaW5nLCBtb2RhbEZvcm0sIGJ1dHRvbkdyb3VwKTtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICAgICAgICAgIHJldHVybiBtb2RhbENvbnRhaW5lcjsgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlTW9kYWxDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0RnJvbU1vZGFsID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwtZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEZ1bmMgPSBlLmN1cnJlbnRUYXJnZXQuY2FsbGJhY2tGdW5jO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGZvcm1EYXRhLmdldCgncHJvamVjdE5hbWUnKTtcbiAgICAgICAgbGV0IHByb2plY3ROb3RlcyA9IGZvcm1EYXRhLmdldCgncHJvamVjdE5vdGVzJyk7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdEZ1bmMocHJvamVjdE5hbWUsIHByb2plY3ROb3Rlcyk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG5cbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnI21vZGFsQ29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd01vZGFsJyk7XG5cbiAgICAgICAgLy8gc3dpdGNoIHRvIG5ldyBwcm9qZWN0IHdpdGggZGVmYXVsdCBlbXB0eSBpdGVtXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdE5hbWV9ID4gYWApO1xuICAgICAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW1CdG4nKTtcbiAgICAgICAgbmV3UHJvamVjdExpbmsuY2xpY2soKTtcbiAgICAgICAgbmV3SXRlbUJ0bi5jbGljaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzc2lnbk1vZGFsTGlzdGVuZXIoYWRkUHJvamVjdENhbGxiYWNrLCBwcm9qZWN0c0xpc3QpIHtcbiAgICAgICAgY29uc3Qgb3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuTW9kYWwnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWwnKTtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250YWluZXInKTtcblxuICAgICAgICBvcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvd01vZGFsJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RGcm9tTW9kYWwsIGZhbHNlKTtcbiAgICAgICAgc3VibWl0LmNhbGxiYWNrRnVuYyA9IGFkZFByb2plY3RDYWxsYmFjaztcbiAgICAgICAgc3VibWl0LnByb2plY3RzID0gcHJvamVjdHNMaXN0O1xuXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd01vZGFsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByaW9yaXR5VG9JbnRlZ2VyKHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IHdlaWdodHMgPSB7XG4gICAgICAgICAgICAnSGlnaCc6IDMsXG4gICAgICAgICAgICAnTWVkaXVtJzogMixcbiAgICAgICAgICAgICdMb3cnOiAxLFxuICAgICAgICAgICAgJ1NlbGVjdCBQcmlvcml0eSc6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3ZWlnaHRzW3ByaW9yaXR5XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cEhUTUwoKSB7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGNvbmZpZy5jdXJyZW50UHJvamVjdDtcbiAgICBcbiAgICAgICAgY29uc3QgY2xpY2tMYXN0VG9kb0l0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvSXRlbScpO1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsYXN0RWxlbWVudENsaWNrYWJsZSA9XG4gICAgICAgICAgICAgICAgKGxhc3QuZ2V0QXR0cmlidXRlKCd0aXRsZVR5cGUnKSA9PSAnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICA/IGxhc3QucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RleHQnXVwiKVxuICAgICAgICAgICAgICAgICAgICA6IGxhc3QucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGFzdEVsZW1lbnRDbGlja2FibGUuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZGF5IGRhdGUgaGFyZGNvZGVkIHRvICcyMDIyLTA4LTMwJ1xuICAgICAgICBjb25zdCBzZXR1cFNob3dUb2RheUJ0biA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RUb2RheUl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gJzIwMjItMDgtMzEnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5SXRlbXMgPSB7fVxuXG4gICAgICAgICAgICAgICAgLyogbmFtZTogcHJvamVjdCBuYW1lXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb2plY3RSdW5uZXIgb2JqZWN0IHByb3BlcnRpZXMgKG5hbWUsIHJ1bigpLCBldGMpICovXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW25hbWUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcucHJvamVjdHMpKSB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IE9iamVjdC52YWx1ZXModmFsdWUubmV3UHJvamVjdC50b2RvSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmID0gdG9kby5maWx0ZXIoaXRlbSA9PiBpdGVtLmRhdGUgPT0gY3VycmVudERhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtc0ZpbHRlcmVkID0ge31cbiAgICAgICAgICAgICAgICAgICAgZi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNGaWx0ZXJlZFtpdGVtLnV1aWRdID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGl0ZW1zRmlsdGVyZWQpLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RheUl0ZW1zW25hbWVdID0gaXRlbXNGaWx0ZXJlZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXlJdGVtcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvSXRlbUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0b2RheS0tdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheUhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ3RvZGF5LS10aXRsZV9faGVhZGluZycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5RGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAndG9kYXktLXRpdGxlX19kYXRlJyk7XG4gICAgICAgICAgICAgICAgdG9kYXlIZWFkaW5nLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICAgICAgICAgICAgICB0b2RheURhdGUudGV4dENvbnRlbnQgPSAnV2VkIEF1ZyAzMSc7XG4gICAgICAgICAgICAgICAgdG9kYXlEaXYuYXBwZW5kKHRvZGF5SGVhZGluZywgdG9kYXlEYXRlKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZGF5RGl2KTtcblxuICAgICAgICAgICAgICAgIC8vIHZhbHVlID0gb2JqZWN0IGNvbnRhaW5pbmcgcHJvamVjdCdzIHRvZG9JdGVtc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModG9kYXlJdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UHJvamVjdEhlYWRpbmcoYCN0b2RvSXRlbUNvbnRhaW5lcmAsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFByb2plY3RJdGVtRm9ybShgI3RvZG9JdGVtQ29udGFpbmVyYCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRJdGVtQ2hhbmdlTGlzdGVuZXIoaWQsIGNvbmZpZy5wcm9qZWN0c1tuYW1lXS5uZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25maWcuY3VycmVudFByb2plY3QgPSAnX190b2RheSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5hdkFjdGlvbihzdW5yaXNlSW1nLCAnVG9kYXknLCBsaXN0VG9kYXlJdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldE5ld0l0ZW1CdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGROZXdJdGVtID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpZy5jdXJyZW50UHJvamVjdCA9PSAnX190b2RheScpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0l0ZW0gY3JlYXRpb24gZGlzYWJsZWQgaW4gVG9kYXkgc2VjdGlvbi4gUGxlYXNlIG5hdmlnYXRlIHRvIHRoZSBpbmRpdmlkdWFsIHByb2plY3RzLicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBjb25maWcuY3VycmVudFByb2plY3Q7XG4gICAgICAgICAgICAgICAgLy8gYWRkIG5ldyBpdGVtIHRvIHByb2plY3RcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKCcnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgY3VycmVudCBpdGVtcyBhbmQgcmVzZXQgZGl2XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5UT0RPX0NPTlRBSU5FUik7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW1Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgaW5zZXJ0UHJvamVjdEhlYWRpbmcoY29uZmlnLlRPRE9fQ09OVEFJTkVSLCBjdXJyZW50UHJvamVjdC5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gcmVwb3B1bGF0ZSBsaXN0IGl0ZW1zIGZyb20gcHJvamVjdFxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFByb2plY3QudG9kb0l0ZW1zKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRQcm9qZWN0SXRlbUZvcm0oY29uZmlnLlRPRE9fQ09OVEFJTkVSLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0SXRlbUNoYW5nZUxpc3RlbmVyKGl0ZW0udXVpZCwgY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjbGlja0xhc3RUb2RvSXRlbSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTmF2QWN0aW9uKHBsYW50SW1nLCAnR3JvdyBUb2RvIEl0ZW0nLCBhZGROZXdJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2V0dXBEZWJ1Z0J0biA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ0l0ZW1zSW5PYmplY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShjdXJyZW50UHJvamVjdC50b2RvSXRlbXMsIFsndGl0bGUnLCAnbm90ZXMnLCAnZGF0ZScsICdkdWVEYXRlJywgJ2NoZWNrbGlzdCcsICdfdGFncycsICdjb21wbGV0aW9uJywgJ3RhZ2lmeSddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbG9nUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnLnByb2plY3RzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9nRGVmYXVsdFByb2plY3RJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb25maWcuY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVOYXZBY3Rpb24oYmVhdmVySW1nLCAnTG9nIEpTT04nLCBsb2dQcm9qZWN0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZXR1cERlbGV0ZVByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gY29uZmlnLmN1cnJlbnRQcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvblRleHQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBwcm9qZWN0ICR7Y3VycmVudH0/IERlbGV0aW9uIGlzIGZpbmFsLmA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybShjb25maXJtYXRpb25UZXh0KSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciBpbml0aWF0ZWQgZGVsZXRpb24gb2YgJHtjdXJyZW50fS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUHJvamVjdCBcIiR7Y3VycmVudH1cIiBleGlzdHMgaW4gbG9jYWxzdG9yYWdlIWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgY2FuY2VsbGVkIGRlbGV0aW9uIScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgXCIke2N1cnJlbnR9XCIgbm90IGZvdW5kIWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5hdkFjdGlvbihsdW1iZXJqYWNrSW1nLCAnRGVsZXRlIFByb2plY3QnLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2V0dXBIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGFwcEhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoMScsICdhcHAtLWhlYWRpbmcnKTtcbiAgICAgICAgICAgIGNvbnN0IGljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICBhcHBIZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZvcmVzdHMgLSBhIHRvZG8gYXBwJztcbiAgICAgICAgICAgIGljb25TcGFuLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiO1xuICAgICAgICAgICAgaWNvblNwYW4udGV4dENvbnRlbnQgPSAnZm9yZXN0JztcbiAgICAgICAgXG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kKGljb25TcGFuLCBhcHBIZWFkaW5nKTtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgbmF2YmFyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmF2Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ25hdmJhcicpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYWN0aW9uIGJ1dHRvbnNcbiAgICAgICAgICAgIGNvbnN0IG5hdmJhckFjdGlvbkNvbnRhaW5lcl9fVG9wID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ25hdmJhci0tYWN0aW9uc19fdG9wJyk7XG4gICAgICAgICAgICBjb25zdCBuYXZCYXJBY3Rpb25Db250YWluZXJfX0JvdHRvbSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICduYXZiYXItLWFjdGlvbnNfX2JvdHRvbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gY3JlYXRlTmF2QWN0aW9uKGZvcmVzdEltZywgJ1BsYW50IFByb2plY3QnLCBudWxsKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RCdG4uaWQgPSAnb3Blbk1vZGFsJztcblxuICAgICAgICAgICAgbmF2YmFyQWN0aW9uQ29udGFpbmVyX19Ub3AuYXBwZW5kKHNldHVwU2hvd1RvZGF5QnRuKCksIHNldE5ld0l0ZW1CdG4oKSwgbmV3UHJvamVjdEJ0biwgc2V0dXBEZWJ1Z0J0bigpKTtcbiAgICAgICAgICAgIG5hdkJhckFjdGlvbkNvbnRhaW5lcl9fQm90dG9tLmFwcGVuZENoaWxkKHNldHVwRGVsZXRlUHJvamVjdEJ0bigpKTtcbiAgICBcbiAgICAgICAgICAgIC8vIHRvZG86IHN0eWxlIGFuZCBwb3NpdGlvbiBuZXcgcHJvamVjdCBidXR0b25cbiAgICAgICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmQobmF2YmFyQWN0aW9uQ29udGFpbmVyX19Ub3AsIHJlZnJlc2hQcm9qZWN0c0xpc3QoKSwgbmF2QmFyQWN0aW9uQ29udGFpbmVyX19Cb3R0b20pO1xuICAgICAgICAgICAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdncmlkQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudC5pZCA9IGNvbmZpZy5DT05URU5UX0RJVl9JRDtcblxuICAgICAgICBjb25zdCB0b2RvSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvSXRlbUNvbnRhaW5lci5pZCA9ICd0b2RvSXRlbUNvbnRhaW5lcic7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbUNvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZChuYXZiYXIoKSwgY29udGVudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHNldHVwSGVhZGVyKCksIGdyaWRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluc2VydFByb2plY3RIZWFkaW5nLFxuICAgICAgICBpbnNlcnRQcm9qZWN0SXRlbUZvcm0sXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgICAgIGNyZWF0ZUJ1dHRvbixcbiAgICAgICAgaW5zZXJ0SXRlbUNoYW5nZUxpc3RlbmVyLFxuICAgICAgICBjcmVhdGVNb2RhbCxcbiAgICAgICAgYXNzaWduTW9kYWxMaXN0ZW5lcixcbiAgICAgICAgc2V0dXBIVE1MLFxuICAgICAgICBiaW5kQ29uZmlndXJhdGlvblxuICAgIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBidWlsZFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldy5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG4vLyBpbnN0YW50aWF0ZSBwcm9qZWN0IGFuZCBsb2FkIG1vY2sgaXRlbXNcbmZ1bmN0aW9uIHByb2plY3RSdW5uZXIocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGJ1aWxkUHJvamVjdChuYW1lKTtcblxuICAgIGZ1bmN0aW9uIGFkZE1vY2tUYWdzKGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHRvZG9JdGVtcyA9IE9iamVjdC52YWx1ZXMoaXRlbXMpO1xuICAgICAgICB0b2RvSXRlbXNbMF0uYWRkVGFnaWZ5VGFnKCdFcnJhbmRzJyk7XG4gICAgICAgIHRvZG9JdGVtc1sxXS5hZGRUYWdpZnlUYWcoJ0VycmFuZHMnKTtcbiAgICAgICAgdG9kb0l0ZW1zWzJdLmFkZFRhZ2lmeVRhZygnRml0bmVzcycpO1xuICAgICAgICB0b2RvSXRlbXNbM10uYWRkVGFnaWZ5VGFnKFsnRml0bmVzcycsICdTdHVkeSddKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0dXBNb2NrUHJvamVjdCgpIHtcbiAgICAgICAgbmV3UHJvamVjdC5ub3RlcyA9ICdFdmVyeWRheSB0YXNrcy4nO1xuICAgIFxuICAgICAgICBuZXdQcm9qZWN0LmFkZEl0ZW0oJ01haWwgcGFyY2VsIHRvIE11bScpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEl0ZW0oJ1BheSB0aGUgYmlsbHMnKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRJdGVtKCdSdW4gZm9yIDEwIG1pbnV0ZXMnKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRJdGVtKCdTdHVkeSBvbiB0aGUgZXhlcmNpc2UgYmlrZScpO1xuICAgIFxuICAgICAgICBjb25zdCBpdGVtVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhuZXdQcm9qZWN0LnRvZG9JdGVtcyk7XG4gICAgXG4gICAgICAgIGl0ZW1WYWx1ZXNbMF0ubm90ZXMgPSAnTmVlZHMgdG8gYmUgZG9uZSBhdCB0aGUgcG9zdCBvZmZpY2UuJ1xuICAgICAgICBpdGVtVmFsdWVzWzBdLmFkZFRhc2soJ0ZpbmQgaXRlbS4nKTtcbiAgICAgICAgaXRlbVZhbHVlc1swXS5hZGRUYXNrKCdQYWNrIHBhcmNlbC4nKTtcbiAgICAgICAgaXRlbVZhbHVlc1swXS5hZGRUYXNrKCdNYWlsIHBhcmNlbC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkTW9ja0l0ZW1zSW50b0RPTSA9ICgpID0+IHtcbiAgICAgICAgLy8gb25seSBsb2FkIGZyb20gc3RvcmFnZSBpZiBrZXkgZXhpc3RzXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5ld1Byb2plY3QubmFtZSkpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QucmV0cmlldmVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXcuaW5zZXJ0UHJvamVjdEhlYWRpbmcoYCN0b2RvSXRlbUNvbnRhaW5lcmAsIERPTV9DT05GSUcuY3VycmVudFByb2plY3QubmFtZSwgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBlbnVtZXJhdGUgaXRlbXMgaW4gZGVmYXVsdCBwcm9qZWN0XG4gICAgICAgIE9iamVjdC52YWx1ZXMobmV3UHJvamVjdC50b2RvSXRlbXMpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2aWV3Lmluc2VydFByb2plY3RJdGVtRm9ybShgI3RvZG9JdGVtQ29udGFpbmVyYCwgaXRlbSk7XG4gICAgICAgICAgICB2aWV3Lmluc2VydEl0ZW1DaGFuZ2VMaXN0ZW5lcihpdGVtLnV1aWQsIG5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuZXdQcm9qZWN0Lm5hbWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc3RvcmVkIGRhdGEgZGV0ZWN0ZWQhJyk7XG4gICAgICAgICAgICBsb2FkTW9ja0l0ZW1zSW50b0RPTSgpO1xuICAgICAgICAgICAgLy8gc2V0dXBNb2NrUHJvamVjdCgpO1xuICAgICAgICAgICAgLy8gbG9hZE1vY2tJdGVtc0ludG9ET00oKTtcbiAgICAgICAgICAgIC8vIGFkZE1vY2tUYWdzKG5ld1Byb2plY3QudG9kb0l0ZW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgZGF0YSBkZXRlY3RlZCEnKTtcbiAgICAgICAgICAgIGxvYWRNb2NrSXRlbXNJbnRvRE9NKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBydW4sXG4gICAgICAgIG5ld1Byb2plY3RcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdG9yZWRQcm9qZWN0cyAoKSB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RSdW5uZXIobmFtZSk7XG4gICAgICAgIHByb2plY3QubmV3UHJvamVjdC5yZXRyaWV2ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXByb2plY3RzW25hbWVdKSB7XG4gICAgICAgICAgICBwcm9qZWN0c1tuYW1lXSA9IHByb2plY3Q7XG4gICAgXG4gICAgICAgICAgICAvLyBpZihub3Rlcykge1xuICAgICAgICAgICAgLy8gICAgIHByb2plY3RzW25hbWVdLm5ld1Byb2plY3Qubm90ZXMgPSBub3RlcztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBBIHByb2plY3QgbmFtZWQgXCIke25hbWV9XCIgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSB0cnkgYW5vdGhlciBuYW1lLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICB9XG5cblxuXG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QobmFtZSwgbm90ZXM9bnVsbCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0UnVubmVyKG5hbWUpO1xuICAgIFxuICAgIGlmKCFwcm9qZWN0c1tuYW1lXSkge1xuICAgICAgICBwcm9qZWN0c1tuZXdQcm9qZWN0Lm5hbWVdID0gbmV3UHJvamVjdDtcblxuICAgICAgICBpZihub3Rlcykge1xuICAgICAgICAgICAgcHJvamVjdHNbbmV3UHJvamVjdC5uYW1lXS5uZXdQcm9qZWN0Lm5vdGVzID0gbm90ZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgQSBwcm9qZWN0IG5hbWVkIFwiJHtuYW1lfVwiIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgdHJ5IGFub3RoZXIgbmFtZS5gKTtcbiAgICB9XG59XG5cbmxldCBwcm9qZWN0cyA9IHt9XG5cbmNvbnN0IENPTlRFTlRfRElWX0lEID0gJ2NvbnRlbnQnO1xuY29uc3QgQ09OVEVOVF9ESVZfU0VMRUNUT1IgPSBgIyR7Q09OVEVOVF9ESVZfSUR9YDtcblxuY29uc3QgRE9NX0NPTkZJRyA9IHtcbiAgICAncHJvamVjdHMnOiBwcm9qZWN0cyxcbiAgICAnVE9ET19DT05UQUlORVInOiAnI3RvZG9JdGVtQ29udGFpbmVyJ1xufVxuXG5sb2FkU3RvcmVkUHJvamVjdHMoKTtcblxuYWRkTmV3UHJvamVjdCgnRGFpbHknKTtcbi8vIGFkZE5ld1Byb2plY3QoJ0VtcHR5Jyk7XG4vLyBhZGROZXdQcm9qZWN0KCdJbnZlc3RpZ2F0aW9ucycpO1xuXG5ET01fQ09ORklHWydjdXJyZW50UHJvamVjdCddID0gRE9NX0NPTkZJRy5wcm9qZWN0c1snRGFpbHknXS5uZXdQcm9qZWN0O1xuXG52aWV3LmNvbmZpZyA9IERPTV9DT05GSUc7XG52aWV3LmJpbmRDb25maWd1cmF0aW9uKCk7XG52aWV3LnNldHVwSFRNTCgpO1xuXG5wcm9qZWN0c1snRGFpbHknXS5ydW4oKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3LmNyZWF0ZU1vZGFsKCkpO1xudmlldy5hc3NpZ25Nb2RhbExpc3RlbmVyKGFkZE5ld1Byb2plY3QsIHByb2plY3RzKTtcblxubG9hZFN0b3JlZFByb2plY3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=