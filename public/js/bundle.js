/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/DataManager.js":
/*!*******************************!*\
  !*** ./src/js/DataManager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DataManager; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DataManager = /*#__PURE__*/function () {\n  function DataManager() {\n    _classCallCheck(this, DataManager);\n  }\n\n  _createClass(DataManager, [{\n    key: \"constuctor\",\n    value: function constuctor() {\n      this.types = ['task'];\n    }\n  }, {\n    key: \"request\",\n    value: function request(url) {\n      return new Promise(function (resolve, reject) {\n        fetch(url, {\n          method: \"GET\",\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        }).then(function (response) {\n          if (response.status !== 200) {\n            alert('Error: ' + response.status);\n          } else {\n            return response.json();\n          }\n        }).then(function (data) {\n          resolve(data);\n        });\n      });\n    }\n  }, {\n    key: \"post\",\n    value: function post(url, payload) {\n      return new Promise(function (resolve, reject) {\n        fetch(url, {\n          method: \"POST\",\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(payload)\n        }).then(function (response) {\n          if (response.status !== 200) {\n            alert('Error: ' + response.status);\n          } else {\n            return resolve(response);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update(url, payload) {\n      var self = this;\n      return new Promise(function (resolve, reject) {\n        console.log(\"updaaate..\");\n        console.log(url);\n        payload = self.jsonToUrlEncoded(payload);\n        console.log(payload);\n        fetch(url, {\n          method: \"PUT\",\n          headers: {\n            'Content-Type': 'application/x-www-form-urlencoded'\n          },\n          body: payload\n        }).then(function (response) {\n          if (response.status !== 200) {\n            alert('Error: ' + response.status);\n          } else {\n            return resolve(response);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(url) {\n      return new Promise(function (resolve, reject) {\n        fetch(url, {\n          method: \"DELETE\",\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        }).then(function (response) {\n          if (response.status !== 200) {\n            alert('Error: ' + response.status);\n          } else {\n            return resolve(response.json());\n          }\n        });\n      });\n    }\n  }, {\n    key: \"jsonToUrlEncoded\",\n    value: function jsonToUrlEncoded(element, key, list) {\n      var list = list || [];\n\n      if (_typeof(element) == 'object') {\n        for (var idx in element) {\n          this.jsonToUrlEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);\n        }\n      } else {\n        list.push(key + '=' + encodeURIComponent(element));\n      }\n\n      return list.join('&');\n    }\n  }]);\n\n  return DataManager;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/DataManager.js?");

/***/ }),

/***/ "./src/js/Login.js":
/*!*************************!*\
  !*** ./src/js/Login.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Login = /*#__PURE__*/function () {\n  function Login() {\n    _classCallCheck(this, Login);\n\n    this.appId = '2636744946566075';\n    this.scopes = '';\n  }\n\n  _createClass(Login, [{\n    key: \"init\",\n    value: function init(FB) {\n      var self = this;\n      this.FB = FB;\n      this.FB.init({\n        appId: this.appId,\n        status: true,\n        cookie: true,\n        xfbml: true,\n        version: 'v7.0'\n      });\n      this.FB.getLoginStatus(function (response) {\n        if (response.status === 'connected') {\n          self.FB.api('/me', function (response) {\n            var event = new CustomEvent(\"login\", {\n              detail: response\n            });\n            window.dispatchEvent(event);\n          });\n        } else {\n          self.error(response);\n        }\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login() {\n      var self = this;\n      this.FB.login(function (response) {\n        if (response.status === 'connected') {\n          self.FB.api('/me', function (response) {\n            var event = new CustomEvent(\"login\", {\n              detail: response\n            });\n            window.dispatchEvent(event);\n          });\n        } else {\n          self.error(response);\n        }\n      }, {\n        scope: self.scopes\n      });\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      this.FB.logout(function (response) {\n        var event = new CustomEvent(\"logout\", {\n          detail: response\n        });\n        window.dispatchEvent(event);\n      });\n    }\n  }, {\n    key: \"error\",\n    value: function error(response) {\n      console.log(\"error\", response);\n      var event = new CustomEvent(\"login-error\", {\n        detail: response\n      });\n      window.dispatchEvent(event);\n    }\n  }]);\n\n  return Login;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Login.js?");

/***/ }),

/***/ "./src/js/UIManager.js":
/*!*****************************!*\
  !*** ./src/js/UIManager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UIManager; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UIManager = /*#__PURE__*/function () {\n  function UIManager(body) {\n    _classCallCheck(this, UIManager);\n\n    this.user = {};\n    this.severities = [];\n    this.statuses = [];\n    this.tasks = [];\n    this.body = body;\n    this.avatarElm = body.querySelector('.avatar');\n    this.btnLoginElm = body.querySelector('.btn-login');\n    this.taskListSection = body.querySelector('.task-list-section');\n    this.setupLoginBtn();\n  }\n\n  _createClass(UIManager, [{\n    key: \"update\",\n    value: function update(action) {\n      var self = this;\n      var uiEvents = {\n        login: function login() {\n          self.avatarElm.setAttribute('title', this.userName);\n          self.avatarElm.style.backgroundImage = 'url(' + 'http://graph.facebook.com/' + self.user.id + '/picture?type=small' + ')';\n          self.btnLoginElm.innerHTML = \"Logout\";\n          self.btnLoginElm.setAttribute('data-action', 'logout');\n          return true;\n        },\n        logout: function logout() {\n          self.avatarElm.style.backgroundImage = 'url()';\n          self.btnLoginElm.innerHTML = \"login\";\n          self.btnLoginElm.setAttribute('data-action', 'login');\n          self.taskListSection.innerHTML = '';\n          self.body.classList.add('align-middle');\n          self.body.querySelector('.add-task-section').classList.add('hidden');\n          return true;\n        },\n        load: function load() {\n          self.setupAddTaskForm();\n          self.setupHideElms();\n          self.setupCalendarPicker();\n          return true;\n        }\n      };\n      uiEvents[action]();\n    }\n  }, {\n    key: \"setData\",\n    value: function setData(type, params) {\n      if (Array.isArray(params)) {\n        for (var i = 0, length1 = params.length; i < length1; i++) {\n          this[type].push(params[i]);\n        }\n      } else {\n        //type is object\n        for (var key in params) {\n          this[type][key] = params[key];\n        }\n      }\n    }\n  }, {\n    key: \"addTask\",\n    value: function addTask(task) {\n      var row = document.createElement('div');\n      row.classList.add('row', task.status.toLowerCase());\n      row.setAttribute('data-task-id', task.id);\n      /************---------------------*****/\n\n      var title = document.createElement('h3');\n      title.innerHTML = task.text;\n      /************---------------------*****/\n\n      var p = document.createElement('p');\n      p.classList.add('float-right');\n      p.innerHTML = 'Finish by ' + task.target_completion_date;\n      /************---------------------*****/\n\n      var p2 = document.createElement('p');\n      p2.classList.add('severity', task.severity.toLowerCase());\n      p2.innerHTML = 'Severity: ' + task.severity;\n      /************---------------------*****/\n\n      var p3 = document.createElement('p');\n      p3.classList.add('status');\n      p3.innerHTML = 'Status: ' + task.status;\n      /************---------------------*****/\n\n      var btnRemove = document.createElement('button');\n      btnRemove.innerHTML = 'Delete';\n      btnRemove.classList.add('event-task-remove');\n      btnRemove.setAttribute('data-task-id', task.id);\n      btnRemove.addEventListener('click', this.handleClick);\n      /************---------------------*****/\n\n      var btnComplete = document.createElement('button');\n      btnComplete.innerHTML = 'Finished';\n      btnComplete.classList.add('event-task-finish');\n      btnComplete.setAttribute('data-task-id', task.id);\n\n      if (task.status.toLowerCase() === 'complete') {\n        btnComplete.setAttribute('disabled', true);\n      }\n\n      btnComplete.addEventListener('click', this.handleClick);\n      /************---------------------*****/\n\n      row.appendChild(btnRemove);\n      row.appendChild(btnComplete);\n      row.appendChild(title);\n      row.appendChild(p);\n      row.appendChild(p2);\n      row.appendChild(p3);\n      this.taskListSection.prepend(row);\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      e.preventDefault();\n      var id = this.getAttribute('data-task-id');\n      var row = document.querySelector('.row[data-task-id=\"' + id + '\"]');\n\n      if (this.classList.contains('event-task-remove')) {\n        row.parentNode.removeChild(row);\n        var event = new CustomEvent(\"delete-task\", {\n          detail: id\n        });\n        window.dispatchEvent(event);\n      }\n\n      if (this.classList.contains('event-task-finish')) {\n        row.querySelector('.status').innerHTML = 'Status: Complete';\n        row.classList.remove('pending');\n        row.classList.add('complete');\n        this.setAttribute('disabled', true);\n        var event = new CustomEvent(\"complete-task\", {\n          detail: {\n            \"id\": id,\n            payload: {\n              \"status_id\": 2\n            }\n          }\n        });\n        window.dispatchEvent(event);\n      }\n    }\n  }, {\n    key: \"setupLoginBtn\",\n    value: function setupLoginBtn() {\n      this.btnLoginElm.onclick = function () {\n        var action = this.getAttribute('data-action');\n\n        if (action === 'login') {\n          var event = new CustomEvent(\"click-login\");\n          window.dispatchEvent(event);\n        }\n\n        if (action === 'logout') {\n          var event = new CustomEvent(\"click-logout\");\n          window.dispatchEvent(event);\n        }\n      };\n    }\n  }, {\n    key: \"setupCalendarPicker\",\n    value: function setupCalendarPicker() {\n      var inputElms = document.querySelectorAll('.event-calendar');\n\n      for (var i = 0, length1 = inputElms.length; i < length1; i++) {\n        var simplepicker = new SimplePicker({\n          zIndex: 10\n        });\n        attachCalendar(inputElms[i], simplepicker);\n      }\n\n      function attachCalendar(elm, simplepicker) {\n        elm.onfocus = function () {\n          simplepicker.open();\n        };\n\n        simplepicker.on('submit', function (date, readableDate) {\n          elm.value = readableDate;\n        });\n      }\n    }\n  }, {\n    key: \"setupHideElms\",\n    value: function setupHideElms() {\n      var unhideElms = document.querySelectorAll('.event-unhide');\n\n      for (var i = 0, length1 = unhideElms.length; i < length1; i++) {\n        unhideElms[i].onclick = handleUnhide;\n      }\n\n      function handleUnhide(e) {\n        var className = this.getAttribute('data-target');\n        var target = document.querySelector('.' + className);\n        target.classList.toggle('hidden');\n      }\n    }\n  }, {\n    key: \"setupAddTaskForm\",\n    value: function setupAddTaskForm() {\n      var self = this;\n      self.body.classList.remove('align-middle');\n      var form = self.body.querySelector('form.add-task');\n      self.body.querySelector('.add-task-section').classList.remove('hidden');\n      form.reset();\n      form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        var text = this.querySelector('input[name=\"text\"]');\n        var target_completion_date = this.querySelector('input[name=\"target_completion_date\"]');\n        var payload = {\n          text: this.querySelector('input[name=\"text\"]').value,\n          target_completion_date: this.querySelector('input[name=\"target_completion_date\"]').value,\n          severity: this.querySelector('select[name=\"severity\"]').value,\n          user_id: self.user.id,\n          status: this.querySelector('input[name=\"status\"]').value\n        };\n        form.reset();\n        var event = new CustomEvent(\"post-task\", {\n          detail: payload\n        });\n        window.dispatchEvent(event);\n      });\n    }\n  }, {\n    key: \"closest\",\n    value: function closest(s) {\n      var matches = (this.document || this.ownerDocument).querySelectorAll(s),\n          i,\n          el = this;\n\n      do {\n        i = matches.length;\n\n        while (--i >= 0 && matches.item(i) !== el) {}\n      } while (i < 0 && (el = el.parentElement));\n\n      return el;\n    }\n  }]);\n\n  return UIManager;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/UIManager.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ \"./src/js/Login.js\");\n/* harmony import */ var _UIManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIManager */ \"./src/js/UIManager.js\");\n/* harmony import */ var _DataManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataManager */ \"./src/js/DataManager.js\");\n\n\n\nvar ui = new _UIManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('body'));\nvar data = new _DataManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar login = new _Login__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nwindow.fbAsyncInit = function () {\n  login.init(FB);\n};\n\nwindow.addEventListener(\"login\", function (userData) {\n  ui.setData('user', userData.detail);\n  ui.update('login');\n  var url = \"task/status/all\";\n  data.request(url).then(function (res) {\n    ui.setData('statuses', res);\n  });\n  url = \"task/severity/all\";\n  data.request(url).then(function (res) {\n    ui.setData('severities', res);\n  });\n  ui.update('load');\n  url = \"task/\" + userData.detail.id;\n  data.request(url).then(function (tasks) {\n    for (var i = 0, length1 = tasks.length; i < length1; i++) {\n      var task = tasks[i];\n      ui.addTask(task);\n    }\n  });\n});\nwindow.addEventListener(\"logout\", function (e) {\n  ui.setData('user', e.detail);\n  ui.update('logout');\n});\nwindow.addEventListener(\"click-login\", function (e) {\n  login.login(e.detail);\n});\nwindow.addEventListener(\"click-logout\", function (e) {\n  login.logout(e.detail);\n});\nwindow.addEventListener(\"post-task\", function (e) {\n  data.post('task/', e.detail).then(function (res) {\n    ui.addTask(e.detail);\n  });\n});\nwindow.addEventListener(\"delete-task\", function (e) {\n  data[\"delete\"]('task/' + e.detail).then(function (res) {});\n});\nwindow.addEventListener(\"complete-task\", function (e) {\n  data.update('task/' + e.detail.id, e.detail.payload).then(function (res) {\n    console.log('res');\n    console.log(res);\n  });\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });