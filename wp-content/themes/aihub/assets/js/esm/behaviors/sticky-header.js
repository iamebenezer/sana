"use strict";
import {
    DATA_ATTRS as i
} from "../lib/consts.js";
import n from "./base.js";
class a extends n {
    static name = "liquidStickyHeader";
    static model = new Backbone.Model(this.initialModelProps);
    options() {
        return {
            end: "max",
            offset: 0
        }
    }
    get viewModelEvents() {
        return {
            "change:computedStyles": "initialize",
            "change:isSticky": "setHeaderAttrs"
        }
    }
    get bindToThis() {
        return ["handleContainerOnEnter", "handleContainerOnLeaveBack"]
    }
    initialize() {
        this.scrollTriggers = [], this.containerModels = [], this.stopListening(), this.alwaysVisibleContainersModels = this.view.model.get("childrenCollection").filter(e => e.get("isTopLevelContainer")).filter(e => !e.view.el.dataset[i.SHOW_ON_STICKY.JS_DATASET] && !e.view.el.dataset[i.HIDE_ON_STICKY.JS_DATASET]), this.alwaysVisibleContainersModels.length && this.alwaysVisibleContainersModels.forEach((e, t) => _.defer(this.initStickyContainers.bind(this, e, t)))
    }
    setHeaderAttrs(e, t) {
        this.view.el.setAttribute(i.STICKY_HEADER.HTML_ATTR, t)
    }
    setContainerAttrs(e, t) {
        e.view.el.setAttribute(i.STICKY_CONTAINER.HTML_ATTR, t)
    }
    initStickyContainers(e, t) {
        this.setContainerAttrs(e, !1), this.containerModelEventHandler(e), this.buildScrollTrigger(e, t)
    }
    buildScrollTrigger(e, t) {
        const s = ScrollTrigger.create({
            trigger: e.view.el,
            pin: !0,
            pinSpacing: !1,
            start: `top-=${this.getOption("offset")+(document.body.classList.contains("admin-bar")&&window.innerWidth>=601?32:0)} top`,
            endTrigger: document.body,
            end: "bottom top",
            onEnter: () => this.handleContainerOnEnter(e, t),
            onLeaveBack: () => this.handleContainerOnLeaveBack(e, t)
        });
        e.view.el.style.zIndex = this.alwaysVisibleContainersModels.length - t, this.scrollTriggers.push(s)
    }
    handleContainerOnEnter(e, t) {
        t === this.alwaysVisibleContainersModels.length - 1 && this.handleHeaderStickyChange(!0), this.handleContainerStickyChange(e, !0), e.view.el.style.zIndex = this.alwaysVisibleContainersModels.length - t
    }
    handleContainerOnLeaveBack(e, t) {
        t === 0 && this.handleHeaderStickyChange(!1), this.handleContainerStickyChange(e, !1), e.view.el.style.zIndex = this.alwaysVisibleContainersModels.length - t
    }
    containerModelEventHandler(e) {
        this.listenTo(e, "change:isSticky", (t, s) => this.setContainerAttrs(e, s))
    }
    handleContainerStickyChange(e, t) {
        e.set({
            isSticky: t
        })
    }
    handleHeaderStickyChange(e) {
        this.view.model.set({
            isSticky: e
        })
    }
    destroy() {
        this.scrollTriggers ? .forEach(e => e.kill()), this.alwaysVisibleContainersModels ? .forEach(e => e.el && (e.el.style.zIndex = "")), super.destroy()
    }
}
export default a;