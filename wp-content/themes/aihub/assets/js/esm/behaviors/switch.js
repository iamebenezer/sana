"use strict";
import {
    getElementFromString as c
} from "../utils/getElementFromString.js";
import {
    STATE_CLASSNAMES as a
} from "../lib/consts.js";
import h from "./base.js";
class l extends h {
    static name = "liquidSwitch";
    static model = new Backbone.Model(this.initialModelProps);
    options() {
        return {
            useLocalStorage: !1,
            attrs: []
        }
    }
    get ui() {
        return {
            switcher: "input[type=checkbox]"
        }
    }
    get domEvents() {
        return {
            "click @switcher:not([type=checkbox])": "onSwitcherChange",
            "change @switcher[type=checkbox]": "onSwitcherChange"
        }
    }
    get modelEvents() {
        return {
            "change:isOn": "onModelChange"
        }
    }
    get initialModelProps() {
        return {
            isOn: !1
        }
    }
    initialize() {
        this.handleInitialValues()
    }
    handleInitialValues() {
        if (!this.getOption("useLocalStorage")) return;
        this.getOption("attrs").forEach(({
            attr: o,
            val: i,
            el: r
        }) => {
            c(r, this.view.el).getAttribute(o) === i.on && this.getUI("switcher").forEach(n => {
                n.classList.add(a.ACTIVE), n.checked = !0
            })
        })
    }
    onModelChange(t, e) {
        this.onSwitchChange(e ? "on" : "off")
    }
    onSwitcherChange(t) {
        const e = t.currentTarget;
        this.model.set({
            isOn: e ? .checked
        })
    }
    onSwitchChange(t) {
        const e = this.getOption("useLocalStorage");
        this.getOption("attrs").forEach(i => {
            this.handleHtmlAttrs(t, i), e && this.handleLocalStorate(t, i)
        })
    }
    handleHtmlAttrs(t, {
        attr: e,
        el: o,
        val: i
    }) {
        c(o).setAttribute(e, i[t]), t === "on" ? this.getUI("switcher").forEach(s => {
            s.classList.add(a.ACTIVE), s.checked = !0
        }) : this.getUI("switcher").forEach(s => {
            s.classList.remove(a.ACTIVE), s.checked = !1
        })
    }
    handleLocalStorate(t, {
        key: e,
        val: o
    }) {
        localStorage.setItem(e, o[t])
    }
}
export default l;