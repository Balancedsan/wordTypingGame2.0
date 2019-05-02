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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/domCreate.js":
/*!*************************!*\
  !*** ./js/domCreate.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateDomTag; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * Used to create dom element tags in javascript\r\n *\r\n */\nvar CreateDomTag =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * Creates the document element and sets it to the property this.element\r\n   * @param {string} element the name of the tag to create \r\n   */\n  function CreateDomTag(element) {\n    _classCallCheck(this, CreateDomTag);\n\n    this._element = document.createElement(element);\n  }\n  /**\r\n   * add text in between the tag of the element created \r\n   * @param {string} text the text used to add inside the tag element \r\n   */\n\n\n  _createClass(CreateDomTag, [{\n    key: \"addText\",\n    value: function addText(text) {\n      this._element.appendChild(document.createTextNode(text));\n    }\n    /**\r\n     * adds a className to the element tag created \r\n     * @param {string} select the css class to add to the element\r\n     */\n\n  }, {\n    key: \"addClass\",\n    value: function addClass(select) {\n      this._element.classList.add(select);\n    }\n    /**\r\n    *  attaches the tag element to a DOM element by css class name \r\n     * @param {string} select the name of the class to add the element tag to \r\n     */\n\n  }, {\n    key: \"attachToClass\",\n    value: function attachToClass(select) {\n      document.querySelector(\".\".concat(select)).append(this._element);\n    }\n  }]);\n\n  return CreateDomTag;\n}();\n\n\n\n//# sourceURL=webpack:///./js/domCreate.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n/* harmony import */ var _domCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domCreate */ \"./js/domCreate.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.js */ \"./js/timer.js\");\n/* harmony import */ var _words_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./words.js */ \"./js/words.js\");\n/* harmony import */ var _setScore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setScore.js */ \"./js/setScore.js\");\n/* harmony import */ var _tracker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracker.js */ \"./js/tracker.js\");\n\n\n\n\n\n // selectors to replace elements on the dom page\n// const scoreTag = document.querySelector(\".game-info__score\");\n\nvar displayContent = {\n  start: document.querySelector(\".box__start\"),\n  mainContent: document.querySelector(\".box__content\"),\n  replaceElement: document.querySelector(\".game-content--hidden\")\n};\nvar wordTracking = {\n  currentWord: document.querySelector(\".game-content__word\"),\n  wordInput: document.querySelector(\".game-content__input\"),\n  message: document.querySelector(\".game-content__message\") // const timeElement = document.querySelector(\".game-content__timer\");\n\n};\nvar stopButton = document.querySelector(\".game-content__stop\");\n\nvar createCharacters = function createCharacters(length) {\n  return _words_js__WEBPACK_IMPORTED_MODULE_3__[\"generateWords\"].generateCharacters(length);\n};\n/**\r\n * used to check if game should increase in level \r\n * @param {integer} score current score of the game \r\n * @param {*integer} multipler the multipler for the game state\r\n */\n\n\nvar checkLevelIncrement = function checkLevelIncrement(score, multipler) {\n  return score % multipler === 0;\n};\n\nvar getCurrentRecord = function getCurrentRecord(_ref) {\n  var score = _ref.score;\n  return Object(_setScore_js__WEBPACK_IMPORTED_MODULE_4__[\"checkNewRecord\"])(score) ? score : Object(_setScore_js__WEBPACK_IMPORTED_MODULE_4__[\"getCurrentBest\"])();\n};\n\nvar stopGameState = function stopGameState(tracker, _ref2) {\n  var currentWord = _ref2.currentWord,\n      wordInput = _ref2.wordInput;\n  tracker.resetTracker();\n  wordInput.readOnly = true;\n  currentWord.textContent = \"\";\n  return Boolean(!currentWord.textContent);\n};\n\nvar writeEndMessage = function writeEndMessage(tracker, wordTracking) {\n  if (stopGameState(tracker, wordTracking)) {\n    var highest = getCurrentRecord(tracker);\n    wordTracking.message.textContent = \"Game Over, your highest score is \".concat(highest);\n    stopButton.textContent = \"Play Again?\";\n    tracker.gameStatus = false;\n    return true;\n  }\n\n  return false;\n};\n\nvar resetGame = function resetGame() {\n  stopButton.textContent = \"Stop\";\n  _tracker_js__WEBPACK_IMPORTED_MODULE_5__[\"tracker\"].gameStatus = true;\n  _timer_js__WEBPACK_IMPORTED_MODULE_2__[\"timer\"].timerReset();\n  wordTracking.message.textContent = \" \";\n  wordTracking.wordInput.readOnly = false; // wordTracking.wordInput = \" \";\n\n  startGame(wordTracking, _tracker_js__WEBPACK_IMPORTED_MODULE_5__[\"tracker\"]);\n};\n\nvar stopGame = function stopGame() {\n  _timer_js__WEBPACK_IMPORTED_MODULE_2__[\"timer\"].foceStop();\n  writeEndMessage(_tracker_js__WEBPACK_IMPORTED_MODULE_5__[\"tracker\"], wordTracking);\n};\n\nvar toggleButtons = function toggleButtons() {\n  _tracker_js__WEBPACK_IMPORTED_MODULE_5__[\"tracker\"].gameStatus ? stopGame() : resetGame();\n};\n\nvar addStopButton = function addStopButton() {\n  stopButton.addEventListener(\"click\", toggleButtons);\n};\n/**\r\n * Used to start the timer for the game \r\n * @param {dom} element the element to show the timer\r\n */\n\n\nvar startTimer = function startTimer(element) {\n  _timer_js__WEBPACK_IMPORTED_MODULE_2__[\"timer\"].startCountDown(element).then(function (timeValue) {\n    if (timeValue > 1) {\n      startTimer(element);\n    } else {\n      writeEndMessage(_tracker_js__WEBPACK_IMPORTED_MODULE_5__[\"tracker\"], wordTracking);\n    }\n  });\n};\n/**\r\n * Used to replace the dom page to the game when start is being clicked\r\n * @param {dom} mainContent the content to replace the element with\r\n * @param {dom} replaceElement the element to replace the mainContent with \r\n */\n\n\nvar replaceStart = function replaceStart(_ref3) {\n  var mainContent = _ref3.mainContent,\n      replaceElement = _ref3.replaceElement;\n  replaceElement.classList.add(\"game-content--reveal\");\n  mainContent.textContent = \"\";\n  mainContent.appendChild(replaceElement);\n  return Boolean(mainContent.textContent); // return falsy value on message content to indicate start has been replaced\n};\n/**\r\n * Used to check if the words typed by the player matches the currentword shown\r\n * @param {*} message the message content of the result  \r\n * @param {*} wordInput the word typed by the user \r\n * @param {*} currentWord the current word displayed\r\n */\n\n\nvar checkForMatch = function checkForMatch(_ref4) {\n  var wordInput = _ref4.wordInput,\n      currentWord = _ref4.currentWord,\n      message = _ref4.message;\n  message.textContent = wordInput.value === currentWord.textContent ? \"correct\" : \"\";\n  return Boolean(message.textContent);\n};\n\nvar shouldLevelIncrease = function shouldLevelIncrease(currentWord, tracker) {\n  if (checkLevelIncrement(tracker.score, 5)) {\n    tracker.baseCount += 1;\n    currentWord.textContent = createCharacters(tracker.baseCount);\n    tracker.incrementLevel();\n  }\n\n  {\n    currentWord.textContent = createCharacters(tracker.baseCount);\n  }\n};\n\nvar continueNextStage = function continueNextStage(_ref5, tracker) {\n  var wordInput = _ref5.wordInput,\n      currentWord = _ref5.currentWord;\n  _timer_js__WEBPACK_IMPORTED_MODULE_2__[\"timer\"].clearTimer();\n  wordInput.value = \"\";\n  tracker.incrementScore();\n  shouldLevelIncrease(currentWord, tracker);\n};\n\nvar listenKeyInput = function listenKeyInput(wordTracking, tracker) {\n  wordTracking.wordInput.addEventListener(\"input\", function () {\n    if (checkForMatch(wordTracking)) {\n      continueNextStage(wordTracking, tracker);\n    }\n  });\n};\n\nvar startGame = function startGame(wordTracking, tracker) {\n  wordTracking.currentWord.textContent = createCharacters(tracker.baseCount);\n  startTimer(document.querySelector(\".game-content__timer\"));\n  tracker.initializeTracker();\n  wordTracking.wordInput.focus();\n  listenKeyInput(wordTracking, tracker);\n};\n\ndisplayContent.start.addEventListener(\"click\", function () {\n  if (replaceStart(displayContent)) {\n    // if the content has sucessfully replaced when the start button is clicked\n    startGame(wordTracking, _tracker_js__WEBPACK_IMPORTED_MODULE_5__[\"tracker\"]);\n    addStopButton();\n  }\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modalHandler = function () {\n  var modal = document.querySelector(\".modal\");\n  var trigger = document.querySelector(\".trigger\");\n  var closeButton = document.querySelector(\".close-button\");\n  /**\r\n   *  triggers the modal on and off\r\n   */\n\n  var toggleModal = function toggleModal() {\n    modal.classList.toggle(\"show-modal\");\n  };\n  /**\r\n   * \r\n   * @param  event object by dom event listener\r\n   * \r\n   * check if the user has clicked on the modal when the modal is showing and it closes the modal \r\n   * \r\n   */\n\n\n  var windowOnClick = function windowOnClick(event) {\n    if (event.target === modal) {\n      toggleModal();\n    }\n  }; // 3 events to trigger the modal , when a button is clicked , modal is clicked and the close button is clicked \n\n\n  trigger.addEventListener(\"click\", toggleModal);\n  closeButton.addEventListener(\"click\", toggleModal);\n  window.addEventListener(\"click\", windowOnClick);\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalHandler);\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/setScore.js":
/*!************************!*\
  !*** ./js/setScore.js ***!
  \************************/
/*! exports provided: getCurrentBest, checkNewRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentBest\", function() { return getCurrentBest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkNewRecord\", function() { return checkNewRecord; });\n/**\r\n * gets the current score \r\n */\nvar getlocalStorage = function getlocalStorage(name) {\n  var getCurrentScore = localStorage.getItem(name);\n\n  if (!getCurrentScore) {\n    localStorage.setItem(name, 0);\n  }\n\n  return function () {\n    return localStorage.getItem(name);\n  };\n};\n\nvar getCurrentBest = getlocalStorage(\"score\");\n/**\r\n */\n\nvar setLocalStorage = function setLocalStorage(name) {\n  return function (score) {\n    if (score > getCurrentBest()) {\n      localStorage.setItem(name, score);\n      return true;\n    }\n\n    return false;\n  };\n};\n\nvar checkNewRecord = setLocalStorage(\"score\");\n\n//# sourceURL=webpack:///./js/setScore.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * Use to keep track of the timer and display it to the user\r\n *\r\n */\nvar TimerTracker =\n/*#__PURE__*/\nfunction () {\n  function TimerTracker(time) {\n    _classCallCheck(this, TimerTracker);\n\n    this._time = time; // time in miliseconds \n\n    this._clear = false; // use to notify the timer to stop while the game resets \n\n    this._initial = time; // resets the timer when the timer resets\n  }\n  /**\r\n   * Starts the countdown timer and display the time on the html element\r\n   * @param element the dom element to display the timer to\r\n   * \r\n   */\n\n\n  _createClass(TimerTracker, [{\n    key: \"startCountDown\",\n    value: function startCountDown(element) {\n      var _this = this;\n\n      var promise = new Promise(function (resolve, reject) {\n        var timer = setInterval(function () {\n          if (_this._time <= 0) {\n            clearInterval(timer);\n            _this._time = 0;\n            resolve(_this._time);\n          }\n\n          if (_this._clear) {\n            // if anytime clear is set to true , stop the timer countdown and reset the initial values\n            clearInterval(timer);\n            _this._clear = false;\n            _this._time = _this._initial;\n            resolve(_this._time);\n          }\n\n          _this._time--;\n          var res = _this._time > 0 ? _this._time / 100 : 0;\n          element.textContent = \"\".concat(res.toPrecision(_this._time.toString().length));\n        }, 10);\n      });\n      return promise;\n    }\n    /**\r\n     * Stops the timer while the timer is counting down\r\n     */\n\n  }, {\n    key: \"clearTimer\",\n    value: function clearTimer() {\n      this._clear = true;\n    }\n  }, {\n    key: \"foceStop\",\n    value: function foceStop() {\n      this._time = 0;\n    }\n  }, {\n    key: \"timerReset\",\n    value: function timerReset() {\n      this._time = 500;\n    }\n  }]);\n\n  return TimerTracker;\n}();\n\nvar timer = new TimerTracker(500);\n\n//# sourceURL=webpack:///./js/timer.js?");

/***/ }),

/***/ "./js/tracker.js":
/*!***********************!*\
  !*** ./js/tracker.js ***!
  \***********************/
/*! exports provided: tracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tracker\", function() { return tracker; });\nvar tracker = {\n  score: 0,\n  level: 1,\n  baseCount: 5,\n  gameStatus: true,\n  currentLevel: document.querySelector(\".game-content__level\"),\n  scoreCount: document.querySelector(\".game-content__score-count\"),\n  incrementScore: function incrementScore() {\n    this.score++;\n    this.scoreCount.textContent = this.score;\n  },\n  incrementLevel: function incrementLevel() {\n    this.level++;\n    this.currentLevel.textContent = \"Level \".concat(this.level);\n  },\n  resetTracker: function resetTracker() {\n    this.score = 0;\n    this.level = 1;\n  },\n  initializeTracker: function initializeTracker() {\n    this.currentLevel.textContent = \"Level \".concat(this.level);\n    this.scoreCount.textContent = this.score;\n  }\n};\n\n//# sourceURL=webpack:///./js/tracker.js?");

/***/ }),

/***/ "./js/words.js":
/*!*********************!*\
  !*** ./js/words.js ***!
  \*********************/
/*! exports provided: generateWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateWords\", function() { return generateWords; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * Author: John Wee\r\n *\r\n * Description: This class is used to initialize the base character set and generate unique random characters for the user to key in \r\n *              , the class allows the base characters to be extended\r\n */\nvar RandomChara =\n/*#__PURE__*/\nfunction () {\n  function RandomChara(base) {\n    _classCallCheck(this, RandomChara);\n\n    this._chara = _toConsumableArray(new Set(base)).join(\"\"); // ensure the random characters set initialized are all unique\n\n    this._count = this._chara.length; // counts the number of chara added\n  }\n\n  _createClass(RandomChara, [{\n    key: \"addCharacters\",\n    value: function addCharacters(characters) {\n      var oldCount = this._count;\n      this._chara = _toConsumableArray(new Set(\"\".concat(this._chara).concat(characters))).join(\"\");\n      this._count = this._chara.length;\n      return this._count > oldCount;\n    }\n  }, {\n    key: \"generateCharacters\",\n    value: function generateCharacters(length) {\n      var results = \"\";\n\n      for (var index = 0; index < length; index++) {\n        results += this._chara.charAt(Math.floor(Math.random() * this._chara.length));\n      }\n\n      return results;\n    }\n  }, {\n    key: \"base\",\n    get: function get() {\n      return this._chara;\n    },\n    set: function set(characters) {\n      if (characters.length > 1) {\n        this._chara = _toConsumableArray(new Set(characters)).join(\"\");\n      } else {\n        throw new Error(\"characters cannot be empty\");\n      }\n    }\n  }]);\n\n  return RandomChara;\n}();\n\nvar generateWords = new RandomChara(\"abcdefghijklmopqrstuvwxyz1234567890\");\n\n//# sourceURL=webpack:///./js/words.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/main.js */\"./js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./js/main.js?");

/***/ })

/******/ });