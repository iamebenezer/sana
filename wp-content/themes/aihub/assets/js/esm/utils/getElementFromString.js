"use strict";
export function getElementFromString(e, o) {
    let t;
    return e === "html" ? t = document.documentElement : e === "body" ? t = document.body : e.startsWith("<") ? t = document.querySelector(e.replace("<", "").trim()) : e && o && (t = o.querySelector(e)), t
}