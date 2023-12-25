"use strict";
import {
    STATE_CLASSNAMES as a
} from "../lib/consts.js";
import c from "./base.js";
class h extends c {
    static name = "liquidToggle";
    static model = new Backbone.Model(this.initialModelProps);
    options() {
        return {
            openedItems: [-1],
            toggleOffActiveItem: !1,
            keepOneItemActive: !1,
            toggleAllTriggers: !1,
            disableOnTouch: !1,
            changeTriggerClassname: [],
            changeTargetClassname: [],
            parentToChangeClassname: "",
            changePropPrefix: null,
            toggleOffOnEscPress: !1,
            toggleOffOnOutsideClick: !1,
            ignoreEnterOnFocus: !1,
            triggerElements: ["click @togglableTriggers"]
        }
    }
    get ui() {
        return {
            togglableTriggers: ".lqd-togglable-trigger",
            togglableElements: ".lqd-togglable-element"
        }
    }
    get viewModelEvents() {
        return {
            [`change:${this.getChangeProp()}`]: "onChangeOpenedItems"
        }
    }
    get domEvents() {
        const e = this.getOption("triggerElements");
        if (!e ? .length) return;
        const t = {};
        return e.forEach(s => {
            t[s] = "onLqdWidgetChangeOpenedItems"
        }), { ...t,
            "click <document": {
                ifHasOption: "toggleOffOnOutsideClick",
                func: "onDocClick"
            }
        }
    }
    get windowEvents() {
        return {
            keyup: {
                ifHasOption: "toggleOffOnEscPress",
                func: "onKeyUp"
            }
        }
    }
    initialize() {
        const e = this.getOption("openedItems").filter(t => t >= 0);
        e ? .length || this.view.model.set({
            [this.getChangeProp()]: e
        }, {
            silent: !0
        })
    }
    changeOpenedItems(e) {
        const t = this.getChangeProp(),
            s = this.getOption("toggleOffActiveItem"),
            g = this.getOption("toggleAllTriggers"),
            i = this.getOption("keepOneItemActive"),
            r = [...this.view.model.get(t) || []];
        let l = _.uniq([...r, e]);
        s && (l = [e]), r.includes(e) && !i && (l = l.filter(n => n !== e)), g && (l = this.getUI("togglableTriggers").map((n, o) => o).filter((n, o) => !r.includes(o))), this.view.model.set({
            [t]: l
        })
    }
    onLqdWidgetChangeOpenedItems(e) {
        if (this.getOption("ignoreEnterOnFocus") && e.pointerType === "" && this.getUI("togglableTriggers").findIndex(i => i === document.activeElement) < 0 || this.getOption("disableOnTouch") && liquidTouchMM.matches) return;
        e.preventDefault(), e.stopPropagation();
        const s = e.currentTarget,
            g = this.getUI("togglableTriggers").findIndex(i => i === s);
        g < 0 || this.changeOpenedItems(g)
    }
    onChangeOpenedItems() {
        this.handleClassnames(), this.view.trigger(`change:${this.getChangeProp()}`, this.openedElements), this.view.trigger(`change:${this.getChangeProp("closedItems")}`, this.closedElements)
    }
    handleClassnames() {
        const e = this.getOption("changeTriggerClassname"),
            t = this.getOption("changeTargetClassname"),
            s = this.getOption("parentToChangeClassname"),
            g = [...this.openedElements.triggers, ...this.closedElements.triggers],
            i = [...this.openedElements.targets, ...this.closedElements.targets],
            r = [...this.openedElements.triggers, ...this.openedElements.targets],
            l = [...this.closedElements.triggers, ...this.closedElements.targets];
        s !== "" && (r.forEach(n => n ? .parentElement ? .closest(s) ? .classList ? .add(a.ACTIVE)), l.forEach(n => n ? .parentElement ? .closest(s) ? .classList ? .remove(a.ACTIVE))), e.length && g.forEach(n => e.forEach(o => n ? .classList ? .toggle(o))), t.length && i.forEach(n => t.forEach(o => n ? .classList ? .toggle(o))), r.forEach(n => n.classList.add(a.ACTIVE)), l.forEach(n => n.classList.remove(a.ACTIVE))
    }
    onDocClick(e) {
        const t = [...this.openedElements.targets, ...this.openedElements.triggers];
        if (!t.length) return;
        const s = e.composedPath();
        let g = !1;
        t.forEach(i => {
            if (s.includes(i)) return g = !0
        }), !g && this.view.model.set({
            [this.getChangeProp()]: []
        })
    }
    onKeyUp(e) {
        e.code !== "Escape" || ![...this.openedElements.targets, ...this.openedElements.triggers].length || this.view.model.set({
            [this.getChangeProp()]: []
        })
    }
    get openedElements() {
        const e = this.view.model.get(this.getChangeProp());
        return {
            targets: this.getUI("togglableElements").filter((t, s) => e.includes(s)),
            triggers: this.getUI("togglableTriggers").filter((t, s) => e.includes(s))
        }
    }
    get closedElements() {
        const e = this.view.model.get(this.getChangeProp());
        return {
            targets: this.getUI("togglableElements").filter((t, s) => !e.includes(s)),
            triggers: this.getUI("togglableTriggers").filter((t, s) => !e.includes(s))
        }
    }
}
export default h;