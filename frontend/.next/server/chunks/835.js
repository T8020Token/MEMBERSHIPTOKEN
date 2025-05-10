"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const firebaseConfig = {
    apiKey: "AIzaSyCKU1acHcpNzOLiZKOwYXkZYUrLh-Pr6rM",
    authDomain: "t8020-news.firebaseapp.com",
    projectId: "t8020-news"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_3__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AuthProvider({ children  }) {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isSubscribed , 1: setIsSubscribed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: city , 1: setCity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("New York");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, async (firebaseUser)=>{
            if (firebaseUser) {
                const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, "users", firebaseUser.uid));
                setUser(firebaseUser);
                setIsSubscribed(userDoc.data()?.isSubscribed || false);
            } else {
                setUser(null);
                setIsSubscribed(false);
            }
        });
        return unsubscribe;
    }, []);
    const signup = async (email, password)=>{
        const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);
        await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        return userCredential;
    };
    const login = async (email, password)=>{
        return await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);
    };
    const logout = async ()=>{
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            isSubscribed,
            city,
            setCity,
            signup,
            login,
            logout
        },
        children: children
    });
}
function useAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;