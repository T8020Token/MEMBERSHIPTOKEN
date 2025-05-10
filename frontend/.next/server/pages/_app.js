/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCKU1acHcpNzOLiZKOwYXkZYUrLh-Pr6rM\",\n    authDomain: \"t8020-news.firebaseapp.com\",\n    projectId: \"t8020-news\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_3__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: isSubscribed , 1: setIsSubscribed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: city , 1: setCity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"New York\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, async (firebaseUser)=>{\n            if (firebaseUser) {\n                const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, \"users\", firebaseUser.uid));\n                setUser(firebaseUser);\n                setIsSubscribed(userDoc.data()?.isSubscribed || false);\n            } else {\n                setUser(null);\n                setIsSubscribed(false);\n            }\n        });\n        return unsubscribe;\n    }, []);\n    const signup = async (email, password)=>{\n        const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);\n        await fetch(\"/api/auth/signup\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        return userCredential;\n    };\n    const login = async (email, password)=>{\n        return await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);\n    };\n    const logout = async ()=>{\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isSubscribed,\n            city,\n            setCity,\n            signup,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspaces/t8020-news/t8020-news/frontend/lib/auth.js\",\n        lineNumber: 56,\n        columnNumber: 2\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPLEdBQUc7SUFDMUIsT0FBT3BELGlEQUFVLENBQUN3QixXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDgwMjAtbmV3cy1mcm9udGVuZC8uL2xpYi9hdXRoLmpzPzI4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG5hcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG5hdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbnByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5jb25zdCBbaXNTdWJzY3JpYmVkLCBzZXRJc1N1YnNjcmliZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoJ05ldyBZb3JrJyk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgYXN5bmMgKGZpcmViYXNlVXNlcikgPT4ge1xuICAgaWYgKGZpcmViYXNlVXNlcikge1xuICAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgJ3VzZXJzJywgZmlyZWJhc2VVc2VyLnVpZCkpO1xuICAgICBzZXRVc2VyKGZpcmViYXNlVXNlcik7XG4gICAgIHNldElzU3Vic2NyaWJlZCh1c2VyRG9jLmRhdGEoKT8uaXNTdWJzY3JpYmVkIHx8IGZhbHNlKTtcbiAgIH0gZWxzZSB7XG4gICAgIHNldFVzZXIobnVsbCk7XG4gICAgIHNldElzU3Vic2NyaWJlZChmYWxzZSk7XG4gICB9XG4gfSk7XG4gcmV0dXJuIHVuc3Vic2NyaWJlO1xufSwgW10pO1xuXG5jb25zdCBzaWdudXAgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoL3NpZ251cCcsIHtcbiAgIG1ldGhvZDogJ1BPU1QnLFxuICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiB9KTtcbiByZXR1cm4gdXNlckNyZWRlbnRpYWw7XG59O1xuXG5jb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiByZXR1cm4gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbn07XG5cbmNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiBhd2FpdCBzaWduT3V0KGF1dGgpO1xufTtcblxucmV0dXJuIChcbiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNTdWJzY3JpYmVkLCBjaXR5LCBzZXRDaXR5LCBzaWdudXAsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICB7Y2hpbGRyZW59XG4gPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xucmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJnZXREb2MiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsImFwcCIsImF1dGgiLCJkYiIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzU3Vic2NyaWJlZCIsInNldElzU3Vic2NyaWJlZCIsImNpdHkiLCJzZXRDaXR5IiwidW5zdWJzY3JpYmUiLCJmaXJlYmFzZVVzZXIiLCJ1c2VyRG9jIiwidWlkIiwiZGF0YSIsInNpZ251cCIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyQ3JlZGVudGlhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9naW4iLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/workspaces/t8020-news/t8020-news/frontend/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/t8020-news/t8020-news/frontend/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 2\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNZO0FBQ0g7QUFDTjtBQUVsQyxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN6QyxNQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFMUIscUJBQ0MsOERBQUNELG1EQUFZO2tCQUNYLDRFQUFDSSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2YsQ0FDZDtBQUNGLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDgwMjAtbmV3cy1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9saWIvYXV0aCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbnJldHVybiAoXG4gPEF1dGhQcm92aWRlcj5cbiAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiA8L0F1dGhQcm92aWRlcj5cbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();