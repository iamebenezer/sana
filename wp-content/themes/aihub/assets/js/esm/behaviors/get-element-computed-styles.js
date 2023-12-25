"use strict";
import {
    getAlpha as d,
    getBrightness as f
} from "../utils/colors.js";
import u from "./base.js";
class p extends u {
    static name = "liquidGetComputedStyles";
    static model = new Backbone.Model(this.initialModelProps);
    get willEmitEvents() {
        return ["change:computedStyles", "change:rect", "change:styles", "change:brightness", "change:ghost"]
    }
    options() {
        return {
            includeSelf: !1,
            elementsSelector: !1,
            includeChildren: !1,
            getOnlyContainers: !1,
            getOnlyWidgets: !1,
            getRect: !1,
            getStyles: [],
            getBrightnessOf: [],
            addGhosts: !1
        }
    }
    get appEvents() {
        return {
            "after:windowResize": "afterWindowResize"
        }
    }
    get parentsEvents() {
        return {
            "change:activeCarouselItem": "onParentCarouselChangeItem"
        }
    }
    get childrenCollectionEvents() {
        return {
            update: {
                func: "init",
                debounce: {
                    wait: 285.69,
                    options: {
                        immediate: !1
                    }
                }
            }
        }
    }
    get bindToThis() {
        return ["setStyles", "setBrightness", "setRect"]
    }
    initialize() {
        this.isDestroyed || this.init()
    }
    init() {
        this.isDestroyed || (this.childrenCollection = [], this.initElementStyles())
    }
    initElementStyles() {
        if (!this.isDestroyed && (this.getOption("includeChildren") && this.childrenCollection.push(...this.view.model.get("childrenCollection") ? .models || []), this.getOption("getOnlyContainers") && (this.childrenCollection = this.childrenCollection.filter(e => e.get("isContainer"))), this.getOption("getOnlyWidgets") && (this.childrenCollection = this.childrenCollection.filter(e => !e.get("isContainer"))), this.getOption("includeSelf") && this.childrenCollection.push(this.view.model), !!this.childrenCollection.length)) return fastdom.measure(() => {
            this.isDestroyed || (this.getStyles(), this.getBrightnessOf(), this.getRect(), !this.isDestroyed && this.view.model.set({
                computedStyles: "done"
            }))
        })
    }
    getStyles() {
        this.getOption("getStyles") ? .length && this.childrenCollection.forEach(e => this.setStyles(e))
    }
    getBrightnessOf() {
        this.getOption("getBrightnessOf") ? .length && this.childrenCollection.forEach(e => this.setBrightness(e))
    }
    getRect(e = !1) {
        if (!this.getOption("getRect") || this.isDestroyed || this.isDestroyed || (this.childrenCollection.forEach(i => this.setRect(i)), e)) return;
        const r = this.childrenCollection.filter(i => i.get("layoutRegion") === "liquidPageHeader");
        r.length && this.listenTo(this.liquidApp, "start", i => {
            const t = i.layoutRegions.liquidPageHeader;
            t && this.listenTo(t.model, "change:isSticky", (n, l) => r.forEach(o => this.setRect(o, !l)))
        })
    }
    setStyles(e) {
        const r = this.getOption("getStyles"),
            i = this.getOption("elementsSelector"),
            t = window.getComputedStyle(e.view.el),
            n = e.get("styles") || {},
            l = e.get("isTopLevelContainer"),
            o = window.getComputedStyle(document.body);
        r.forEach(h => {
            let c = t[h];
            h === "backgroundColor" && d(t[h]) === 0 && (l ? c = o.backgroundColor : c = e.get("topParentContainer") ? .get("styles") ? .backgroundColor || o.backgroundColor), n[h] = c
        }), i && e.view.el.querySelectorAll(i).forEach(h => {
            const c = window.getComputedStyle(h),
                s = {
                    el: h,
                    styles: r.map(a => ({
                        [a]: c[a]
                    }))
                };
            n.elements = [...n.elements || [], s]
        }), e.set({
            styles: n
        })
    }
    setBrightness(e) {
        const r = this.getOption("getBrightnessOf"),
            i = e.get("brightness") || {};
        r.forEach(t => {
            let n = e.get("styles")[t];
            if (t === "backgroundColor") {
                const l = e.view.el.getAttribute("data-lqd-color-scheme");
                l && l === "dark" && (n = "#000")
            }
            i[t] = f(n)
        }), e.set({
            brightness: i
        })
    }
    setRect(e, r = !0) {
        const {
            el: i
        } = e.view, t = this.getElementRect(i), n = this.getOption("elementsSelector"), l = this.getOption("addGhosts"), o = e.get("rect"), h = o ? .__v || 0;
        if (n && i.querySelectorAll(n).forEach(c => {
                const s = {
                    el: c,
                    rect: this.getElementRect(c)
                };
                t.elements = [...t.elements || [], s]
            }), l) {
            const c = this.liquidApp.topWrap || document.body;
            let s;
            e.get("ghost") ? .el ? s = e.get("ghost").el : (s = document.createElement("div"), s.className = "absolute pointer-events-none -z-1", s.dataset.id = this.view.el.getAttribute("data-id"), s.style.width = `${t.width}px`, s.style.height = `${t.height}px`, s.style.top = `${t.y}px`, s.style.insetInlineStart = `${t.x}px`, c.insertAdjacentElement("beforeend", s)), this.view.listenTo(e, "change:rect", (a, g) => {
                s.style.width = `${g.width}px`, s.style.height = `${g.height}px`, s.style.top = `${g.y}px`, s.style.insetInlineStart = `${g.x}px`
            }), e.set({
                ghost: {
                    el: s,
                    rect: t,
                    __v: h + 1
                }
            })
        }
        e.set({
            rect: { ...o || {},
                ...t,
                __v: h + 1
            }
        })
    }
    getElementRect(e) {
        const r = window.getComputedStyle(e),
            i = parseFloat(r.width),
            t = parseFloat(r.height);
        let n = e.offsetLeft,
            l = e.offsetTop,
            o = e.offsetParent;
        for (; o !== null;) n += o.offsetLeft, l += o.offsetTop, o = o.offsetParent;
        return {
            width: i,
            height: t,
            x: n,
            y: l,
            right: i + n,
            bottom: t + l
        }
    }
    onParentCarouselChangeItem(e) {
        this.getRect()
    }
    afterWindowResize() {
        fastdom.measure(() => this.getRect(!0))
    }
}
export default p;