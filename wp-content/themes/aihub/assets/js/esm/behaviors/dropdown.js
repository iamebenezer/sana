"use strict";
import r from "./base.js";
class d extends r {
    static name = "liquidDropdown";
    static model = new Backbone.Model(this.initialModelProps);
    get ui() {
        return {
            dropdownTriggers: ".lqd-menu-dropdown-trigger",
            dropdownElements: ".lqd-menu-dropdown"
        }
    }
    get viewModelEvents() {
        return {
            "change:computedStyles": "measure",
            "change:dropdownsRects": "onDropdownsRectsAdded",
            "done:positionDropdowns": "onDonePositionDropdowns"
        }
    }
    get bindToThis() {
        return ["measure", "events", "getRect", "onDropdownsRectsAdded"]
    }
    initialize() {
        this.triggersRects = [], this.dropdownsRects = [], this.liquidApp.on("start", this.events)
    }
    events() {
        this.view.model.get("layoutRegion") === "liquidPageHeader" && this.listenTo(this.liquidApp.layoutRegions.liquidPageHeader.model, "change:isSticky", this.measure)
    }
    async measure() {
        this.isDestroyed || (this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }, this.windowScroll = {
            x: window.scrollX,
            y: window.scrollY
        }, await fastdom.measure(() => {
            this.isDestroyed || (this.getUI("dropdownTriggers").forEach((e, i) => this.triggersRects[i] = this.getRect(e)), this.getUI("dropdownElements").forEach((e, i) => this.dropdownsRects[i] = this.getRect(e)))
        }), !this.isDestroyed && this.view.model.set({
            triggersRects: [...this.triggersRects],
            dropdownsRects: [...this.dropdownsRects]
        }))
    }
    getRect(e) {
        if (this.isDestroyed) return;
        e.style.insetInlineStart = "";
        let {
            x: i,
            y: o
        } = this.windowScroll;
        this.view.model.get("isInVerticalBar") && (i = o = 0);
        const t = e.getBoundingClientRect();
        return {
            y: t.y + o,
            x: t.x + i,
            width: t.width,
            height: t.height,
            bottom: t.bottom + o,
            right: t.right + i,
            preferedHorizontalAlign: e.getAttribute("data-lqd-align-h")
        }
    }
    onDropdownsRectsAdded(e, i) {
        i.forEach((o, t) => this.positionDropdown(t)), this.view.model.trigger("done:positionDropdowns")
    }
    positionDropdown(e) {
        const i = this.getUI("dropdownElements")[e],
            o = this.triggersRects[e],
            t = this.dropdownsRects[e];
        if (!i || !o || !t) return;
        const {
            preferedHorizontalAlign: n
        } = t;
        let s = 0;
        n === "center" ? s = t.width / 2 * -1 : n === "end" && (s = t.width * -1 + o.width), t.right + s > this.windowSize.width ? s = (t.right - this.windowSize.width) * -1 : t.x + s < 0 && (s = o.x * -1), s !== 0 && (i.style.insetInlineStart = `${s}px`)
    }
    onDonePositionDropdowns() {
        this.view.el.setAttribute("data-lqd-menu-dropdown-position-applied", !0)
    }
}
export default d;