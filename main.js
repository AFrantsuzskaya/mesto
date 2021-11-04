(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._ownerId=t.owner._id,this._id=t._id,this._likes=t.likes,this._currentUserId=n,this._templateSelector=r,this._handleImageClick=o,this._handleDeleteButtonClick=i,this._handleLike=u}var n,r;return n=e,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_likeToggle",value:function(){var e=this._element.querySelector(".element__button");this._element.querySelector(".element__counter").textContent=this._likes.length,this.isLiked()?e.classList.add("element__button_active"):e.classList.remove("element__button_active")}},{key:"removeCard",value:function(e){this._element.querySelector(".element__trash-button").closest(".element").remove(),this._element=null}},{key:"getId",value:function(){return this._id}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._currentUserId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeToggle()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__button").addEventListener("click",(function(){e._handleLike(e)})),this._element.querySelector(".element__trash-button").addEventListener("click",(function(){e._handleDeleteButtonClick()})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleImageClick({name:e._name,link:e._link})}))}},{key:"render",value:function(){this._element=this._getCardTemplate();var e=this._element.querySelector(".element__image");return this._setEventListeners(),e.src=this._link,e.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._currentUserId!=this._ownerId&&(this._element.querySelector(".element__trash-button").style.display="none"),this._likeToggle(),this._setEventListeners(),this._element}}])&&t(n.prototype,r),e}();function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e){o._errorElement=o._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(o._config.inputErrorClass),o._errorElement.textContent=e.validationMessage,o._errorElement.classList.add(o._config.errorClass)})),r(this,"_hideInputError",(function(e){o._errorElement=o._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(o._config.inputErrorClass),o._errorElement.classList.remove(o._config.errorClass),o._errorElement.textContent=""})),r(this,"disableSubmitButton",(function(){o._buttonElement.classList.add(o._config.inactiveButtonClass),o._buttonElement.setAttribute("disabled","")})),r(this,"_enableSubmitButton",(function(){o._buttonElement.classList.remove(o._config.inactiveButtonClass),o._buttonElement.removeAttribute("disabled")})),r(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e)})),r(this,"_toggleButtonState",(function(){o._hasInvalidInput()?o.disableSubmitButton():o._enableSubmitButton()})),r(this,"_setEventListeners",(function(){o._formElement.addEventListener("submit",(function(e){e.preventDefault()})),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))})),o._toggleButtonState()})),r(this,"enableValidation",(function(){o._setEventListeners()})),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderAll",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_open")&&e.close()}))}}])&&a(t.prototype,n),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},p(e,t,n||e)}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(){return s(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name,r=this._popupElement.querySelector(".popup__image");r.src=t,r.alt=n,this._popupElement.querySelector(".popup__name-title").textContent=n,p(h(u.prototype),"open",this).call(this)}}])&&f(t.prototype,n),u}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},b(e,t,n||e)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popupElement.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=Array.from(this._form.querySelectorAll(".popup__field")),t={};return e.forEach((function(e){return t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){e._handleFormSubmit(e._getInputValues()),e.close()})),b(E(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),b(E(u.prototype),"close",this).call(this)}}])&&v(t.prototype,n),u}(c);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(n),this._aboutSelector=document.querySelector(r),this._avatarSelector=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._nameSelector.textContent,e.about=this._aboutSelector.textContent,e}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.link;t&&(this._nameSelector.textContent=t),n&&(this._aboutSelector.textContent=n),r&&(this._avatarSelector.style.backgroundImage="url('".concat(r,"')"))}}])&&w(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.address,r=t.groupId,o=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._groupId=r,this._token=o}var t,n;return t=e,(n=[{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getCardList()])}},{key:"getUserInfo",value:function(){return this._get("users/me")}},{key:"setUserInfo",value:function(e,t){return this._set("users/me","PATCH",{name:e,about:t})}},{key:"setUserAvatar",value:function(e){return e={avatar:e},this._set("users/me/avatar","PATCH",e)}},{key:"getCardList",value:function(){return this._get("cards")}},{key:"removeCard",value:function(e){return this._set("cards/"+e,"DELETE",{})}},{key:"setCard",value:function(e,t){return this._set("cards","POST",{name:e,link:t})}},{key:"toggleLike",value:function(e,t){return this._set("cards/likes/".concat(e),t?"PUT":"DELETE")}},{key:"_get",value:function(e){var t={headers:{authorization:this._token}};return fetch(this._url(e),t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_set",value:function(e,t,n){var r={method:t,headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(this._url(e),r).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_url",value:function(e){return"".concat(this._address,"/").concat(this._groupId,"/").concat(e)}}])&&C(t.prototype,n),e}();function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q=document.querySelector(".profile__edit-button"),j=document.querySelector(".popup__form_block_info"),P=document.querySelector(".profile__add-button"),T=document.querySelector(".popup__form_block_add-card"),A=document.querySelector(".popup__form_block_avatar"),B=document.querySelector(".popup__field_type_name"),R=document.querySelector(".popup__field_type_about-me"),U=null,x=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Загрузка...",o=document.querySelector(".popup__submit-button");o.textContent=t?r:n},D=new L({nameSelector:".profile__name",aboutSelector:".profile__occupation",avatarSelector:".profile__avatar"}),V=new u({renderer:function(e){V.addItem($(e))}},".elements__content"),z=new I({address:"http://mesto.nomoreparties.co/v1",groupId:"cohort-29",token:"f416e76f-617f-4e84-afcd-d10e230d2054"});z.getAppInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];U=o._id,console.log(o._id),V.renderAll(i.reverse()),D.setUserInfo({name:o.name,about:o.about,link:o.avatar})})).catch((function(e){return console.log("Ошибка загрузки инициирующих данных: ".concat(e))}));var F=new S(".popup_type_avatar",(function(e){x(F,!0,"Сохранить","Сохраниние..."),z.setUserAvatar(e.avatar).then((function(e){D.setUserInfo({link:e.avatar}),F.close()})).catch((function(e){return console.log("Ошибка сохранения аватара: ".concat(e))})).finally((function(){x(F,!1,"Сохранить","Сохраниние...")})),K.disableSubmitButton()})),H=new c(".popup_type_delete"),M=new m(".popup_type_image"),N=new S(".popup_type_add",(function(e){x(F,!0,"Создать","Создание..."),z.setCard(e.name,e.link).then((function(e){z.getCardList().then((function(e){console.log(e),V.renderAll(e.reverse())})).catch((function(e){return console.log("Ошибка загрузки карточки: ".concat(e))})).finally((function(){x(F,!1,"Создать","Создание...")}))})),G.disableSubmitButton()})),J=new S(".popup_type_submit",(function(e){var t={name:document.querySelector(".popup__field_type_name").value,about:document.querySelector(".popup__field_type_about-me").value};x(F,!0,"Создать","Создание..."),z.setUserInfo(t.name,t.about).then((function(e){D.setUserInfo({name:e.name,about:e.about})})).catch((function(e){return console.log("Ошибка сохранения данных профиля: ".concat(e))})).finally((function(){x(F,!1,"Создать","Создание...")}))})),$=function(e){var t=new n(e,U,"#element__template",(function(e){M.open(e)}),(function(){function t(e){z.removeCard(this._id).then((function(){z.getCardList().then((function(e){V.renderAll(e.reverse())})).catch((function(e){return console.log("Ошибка удаления карточки: ".concat(e))}))})),H.close()}t.bind(e),H.open(),H._popupElement.querySelector(".popup__submit-button").addEventListener("click",t.bind(e))}),(function(e){z.toggleLike(e.getId(),!e.isLiked()).then((function(t){return e.setLikes(t.likes)})).catch((function(e){return console.log("Ошибка изменения состояния лайка ".concat(e))}))}));return t.render()};new o(e,j).enableValidation();var G=new o(e,T);G.enableValidation();var K=new o(e,A);K.enableValidation(),M.setEventListeners(),J.setEventListeners(),N.setEventListeners(),F.setEventListeners(),H.setEventListeners(),q.addEventListener("click",(function(){var e=D.getUserInfo();B.value=e.name,R.value=e.about,J.open()})),P.addEventListener("click",(function(){N.open()})),document.querySelector(".profile__avatar").addEventListener("click",(function(){F.open()}))})();