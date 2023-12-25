"use strict";
import g from "./models/base.js";
import f from "./views/base.js";
import c from "./models/widgets/base.js";
const C = Backbone.Collection.extend({
    model: c
});
class v {
    isStarted = !1;
    topWrapClassname = "lqd-wrap";
    topWrapSelector = `#${this.topWrapClassname}`;
    containersClassname = "e-con";
    containersBoxedClassname = "e-con-boxed";
    widgetsClassname = "elementor-widget";
    containersSelector = `.${this.containersClassname}`;
    containersBoxedSelector = `.${this.containersBoxedClassname}`;
    widgetsSelector = `.${this.widgetsClassname}`;
    globalBehaviors = [];
    layoutRegions = {};
    elementsCollection = new C;
    behaviorsInitializeQueue = [];
    windowResizeUpdateQueue = [];
    _windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    _prevWindowSize = this._windowSize;
    globalOptions = {
        localScroll: {
            offset: 0,
            duration: 1
        }
    };
    activeBreakpoint = "";
    constructor({
        layoutRegions: t,
        containersSelector: i,
        widgetsSelector: e,
        globalOptions: n,
        globalBehaviors: o
    }) {
        _.extend(this, Backbone.Events), t && (this.layoutRegions = t), i && (this.containersSelector = i), e && (this.widgetsSelector = e), n && (this.globalOptions = { ...this.globalOptions,
            ...n
        }), o && (this.globalBehaviors = [...this.globalBehaviors, ...o]), this.model = new Backbone.Model, this.view = new Backbone.View({
            el: "#lqd-wrap"
        }), this.view.model = this.model, this.model.view = this.view, this.beforeWindowResize = _.debounce(this.beforeWindowResize.bind(this), 185.69), this.afterWindowResize = _.debounce(this.afterWindowResize.bind(this), 585.69, !1)
    }
    get prevWindowSize() {
        return this._prevWindowSize
    }
    set prevWindowSize({
        width: t,
        height: i
    }) {
        this._prevWindowSize = {
            width: t,
            height: i
        }
    }
    get windowSize() {
        return this._windowSize
    }
    set windowSize({
        width: t,
        height: i
    }) {
        this._windowSize = {
            width: t,
            height: i
        }
    }
    start(t = {
        isEditor: !1
    }) {
        this.trigger("app:before:start", this), this.elementsCollection.comparator = (i, e) => {
            this.elementsCollectionSortedCIDs || (this.elementsCollectionSortedCIDs = [...document.querySelectorAll("[data-lqd-model-cid]")].map(l => l.getAttribute("data-lqd-model-cid")));
            const n = i.cid,
                o = e.cid;
            let s = 0;
            return this.elementsCollectionSortedCIDs.indexOf(n) > this.elementsCollectionSortedCIDs.indexOf(o) ? s = 1 : this.elementsCollectionSortedCIDs.indexOf(n) < this.elementsCollectionSortedCIDs.indexOf(o) && (s = -1), s
        }, this.elementsCollection.on("sort", () => {
            this.elementsCollectionSortedCIDs = null
        }), this.topWrap = document.querySelector(this.topWrapSelector), this.setActiveBreakpoint(), Object.entries(this.layoutRegions).forEach(([i, e]) => {
            const n = typeof e.el == "string" ? document.getElementById(e.el) : e.el,
                o = typeof e.contentWrap == "string" ? document.getElementById(e.contentWrap) : e.contentWrap;
            this.layoutRegions[i].el = n, this.layoutRegions[i].contentWrap = o
        }), this.buildElementsCollection(), this.addLayoutRegions(), this.model.set({
            childrenCollection: this.elementsCollection
        }), _.defer(() => {
            t.isEditor || (this.addBehaviors(), this.initializeBehaviors()), this.trigger("app:start", this)
        }), _.defer(() => {
            this.bindWindowResize()
        }), _.defer(() => {
            t.isEditor || (this.isStarted = !0)
        })
    }
    childrenComparator(t, i) {
        const e = this.elementsCollection.map(l => l.cid),
            n = t.cid,
            o = i.cid;
        let s = 0;
        return e.indexOf(n) > e.indexOf(o) ? s = 1 : e.indexOf(n) < e.indexOf(o) && (s = -1), s
    }
    addLayoutRegions() {
        Object.entries(this.layoutRegions).forEach(([t, {
            el: i,
            contentWrap: e
        }]) => {
            const n = this.elementsCollection.where(a => a.get("layoutRegion") === t),
                o = Backbone.Collection.extend({
                    model: c
                }),
                s = new o(n),
                l = new g({
                    childrenCollection: s
                }),
                r = new f({
                    model: l,
                    contentWrap: e,
                    el: i
                });
            s.comparator = this.childrenComparator.bind(this), l.view = r, this.layoutRegions[t] = this.layoutRegions[t] || {}, this.layoutRegions[t].model = l
        })
    }
    buildElementsCollection() {
        [...document.querySelectorAll(`${this.containersSelector}, ${this.widgetsSelector}`)].forEach(i => this.buildElementModelAndView(i))
    }
    buildElementModelAndView(t, {
        region: i,
        sort: e = !1
    } = {}) {
        if (t.hasAttribute("data-lqd-model-cid")) return;
        const n = t.classList.contains(this.containersClassname),
            o = i || this.getElRegion(t),
            s = [],
            l = {},
            r = new c({
                isContainer: n,
                layoutRegion: o,
                animatableElements: [t]
            }),
            a = new f({
                model: r,
                el: t
            });
        r.view = a, t.setAttribute("data-lqd-model-cid", r.cid), t.setAttribute("data-lqd-view-cid", a.cid), this.elementsCollection.add(r, {
            sort: e
        });
        const w = this.layoutRegions[o] ? .model ? .get("childrenCollection");
        w && w.add(r, {
            sort: e
        });
        let h = t.parentElement ? .closest(this.containersSelector);
        for (; h;) s.push(h), h = h ? .parentElement ? .closest(this.containersSelector);
        const m = this.getModelsOfElements(s, {
            layoutRegion: o,
            sort: e
        });
        if (m.length) {
            const d = Backbone.Collection.extend({
                model: c
            });
            l.parentsCollection = new d(m), l.topParentContainer = m.at(-1)
        }
        if (n) {
            const d = [...t.querySelectorAll(`${this.containersSelector}, ${this.widgetsSelector}`)],
                u = this.getModelsOfElements(d, {
                    layoutRegion: o,
                    sort: e
                }),
                p = Backbone.Collection.extend({
                    model: c
                });
            l.childrenCollection = new p(u), l.isBoxed = t.classList.contains(this.containersBoxedClassname), l.childrenCollection.comparator = this.childrenComparator.bind(this), l.topParentContainer || (l.isTopLevelContainer = !0)
        }
        return r.set(l), l.parentsCollection && l.parentsCollection.forEach(d => {
            const u = d.get("childrenCollection");
            u && u.add(r, {
                sort: e
            })
        }), r
    }
    getElRegion(t) {
        const i = _.omit(this.layoutRegions, "liquidPageContent");
        let e = "liquidPageContent";
        return Object.entries(i).forEach(([n, {
            contentWrap: o
        }]) => {
            if (o && o.contains(t)) return e = n
        }), e
    }
    getModelsOfElements(t = [], {
        layoutRegion: i,
        sort: e = !1
    } = {}) {
        let n = [];
        return t ? .length && (n = t.map(o => this.elementsCollection.findWhere(s => s.cid === o.getAttribute("data-lqd-model-cid")) || this.buildElementModelAndView(o, {
            layoutRegion: i,
            sort: e
        })).filter(o => o && o.view)), n
    }
    addToElementsCollection(t, {
        layoutRegion: i = "liquidPageContent"
    } = {}) {
        this.buildElementModelAndView(t, {
            layoutRegion: i,
            sort: !0
        })
    }
    removeFromElementsCollection(t) {
        if (!t) return;
        const i = t.getAttribute("data-lqd-model-cid"),
            e = this.elementsCollection.get(i);
        if (!e) return;
        this.elementsCollection.remove(e);
        const n = e.get("layoutRegion");
        this.elementsCollection.find(o => {
            const s = o.get("parentsCollection"),
                l = o.get("childrenCollection");
            s ? .forEach(r => r ? .get("childrenCollection") ? .remove(e)), l ? .remove(e)
        }), this.layoutRegions[n].model.get("childrenCollection").remove(e), e.view.destroy()
    }
    addBehaviors() {
        const t = [];
        [...this.elementsCollection.models].reverse().forEach(i => {
            const e = window.liquid.behaviors ? .filter(n => n.el === i.view.el) ? .flatMap(n => n.behaviors);
            e ? .length && t.push({
                model: i,
                behaviorsArray: e
            })
        }), Object.entries(this.layoutRegions).forEach(([i, {
            behaviors: e,
            model: n
        }]) => {
            e && t.push({
                model: n,
                behaviorsArray: e
            })
        }), this.globalBehaviors.length && t.push({
            model: this.model,
            behaviorsArray: this.globalBehaviors
        }), this.constructBehaviors(t), window.liquid.behaviors = []
    }
    addElementBehaviors(t, i, e = !1) {
        if (!t || !i) return;
        const o = (e ? Object.values(this.layoutRegions) ? .map(s => s.model) : this.elementsCollection) ? .find(s => s.view.el === t);
        o && (this.constructBehaviors([{
            model: o,
            behaviorsArray: i
        }]), this.initializeBehaviors())
    }
    constructBehaviors(t) {
        [...t].sort((e, n) => e.model.get("isContainer") - n.model.get("isContainer")).forEach(({
            model: e,
            behaviorsArray: n
        }) => {
            n.forEach(o => {
                if (!o.behaviorClass) return;
                const s = o.behaviorClass.initializeConditions;
                if (s.length && !s.every(a => a)) return;
                const l = new o.behaviorClass(e.view, o ? .options || {}),
                    r = e.get("behaviors") || [];
                e.set({
                    behaviors: [...r, l]
                }), this.behaviorsInitializeQueue.push(l)
            })
        })
    }
    initializeBehaviors() {
        this.behaviorsInitializeQueue.forEach(t => {
            !t.initializeHandledByEvents && t.initialize(), this.behaviorsInitializeQueue = this.behaviorsInitializeQueue.filter((i, e) => e > 0)
        })
    }
    destroyElementBehaviors({
        el: t,
        model: i
    } = {}) {
        if (!(!t && !i)) {
            if (!i) {
                const e = t.getAttribute("data-lqd-model-cid");
                i = this.elementsCollection.find(n => n.cid === e)
            }
            i && i.get("behaviors") ? .forEach(e => {
                e.destroy()
            })
        }
    }
    setActiveBreakpoint() {
        const t = liquid ? .breakpoints;
        if (!t) return;
        const i = [{
            mm: window.matchMedia("(min-width: 1201px)"),
            breakpointKey: "desktop"
        }];
        Object.entries(t).forEach(([e, {
            direction: n,
            is_enabled: o,
            value: s
        }]) => {
            o && i.push({
                mm: window.matchMedia(`(${n}-width: ${s}px)`),
                breakpointKey: e
            })
        }), this.activeBreakpoint = i.filter(({
            mm: e
        }) => e.matches).at(-1).breakpointKey
    }
    bindWindowResize() {
        window.addEventListener("resize", () => {
            this.beforeWindowResize(), this.afterWindowResize()
        })
    }
    beforeWindowResize() {
        this.prevWindowSize = this.windowSize, this.trigger("before:windowResize", {
            prevSize: this.prevWindowSize,
            currentSize: this.windowSize
        })
    }
    afterWindowResize() {
        this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }, this.setActiveBreakpoint(), this.trigger("after:windowResize", {
            prevSize: this.prevWindowSize,
            currentSize: this.windowSize
        })
    }
    destroy() {
        this.isStarted = !1, this.off(), this.stopListening(), this.layoutRegions = {}, this.elementsCollection = new C
    }
}
export default v;