"use strict";
class v {
    static name = "liquidBase";
    static model = new Backbone.Model(this.initialModelProps);
    static initialModelProps = {};
    static initializeConditions = [];
    breakpointsOrder = ["all", ...Object.keys(window.liquid.breakpoints).filter(t => window.liquid.breakpoints[t].is_enabled)];
    constructor(t, e) {
        _.extend(this, Backbone.Events), this.view = t, this._ui = {}, this._allEvents = {
            domEvents: [],
            windowEvents: []
        }, this._options = { ...this.options(),
            ...e
        }, this.initializeHandledByEvents = !1, this.isDestroyed = !1, this.liquidApp = window.liquid.app, this.preInitialize()
    }
    preInitialize() {
        this.addUi(), this.addAllEvents()
    }
    initialize() {}
    options() {
        return {}
    }
    get name() {
        return this.constructor.name
    }
    get model() {
        return this.constructor.model
    }
    get initialModelProps() {
        return this.constructor.initialModelProps
    }
    get willEmitEvents() {
        return []
    }
    get ui() {
        return {}
    }
    get appEvents() {
        return {}
    }
    get regionsEvents() {
        return {}
    }
    get modelEvents() {
        return {}
    }
    get viewEvents() {
        return {}
    }
    get viewModelEvents() {
        return {}
    }
    get parentsEvents() {
        return {}
    }
    get topParentContainerEvents() {
        return {}
    }
    get childrenCollectionEvents() {
        return {}
    }
    get domEvents() {
        return {}
    }
    get windowEvents() {
        return {}
    }
    get throttledFunctions() {
        return {}
    }
    get debouncedFunctions() {
        return {}
    }
    get bindToThis() {
        return []
    }
    get initializeConditions() {
        return this.constructor.initializeConditions
    }
    addUi() {
        Object.entries({ ...this.ui,
            ...this.getOption("ui") || {}
        }).forEach(([t, e]) => {
            this._ui[t] = [...this.view.el.querySelectorAll(e)]
        })
    }
    addAllEvents() {
        this.bindAllEvents(), this.listenToAppEvents(), this.listenToRegionsEvents(), this.buildThrottledAndDebouncedFunctions(this.throttledFunctions, "throttle"), this.buildThrottledAndDebouncedFunctions(this.debouncedFunctions, "debounce"), this.listenToModelsAndViewEvents("parentsEvents", this.view.model.get("parentsCollection")), this.listenToModelsAndViewEvents("topParentContainerEvents", this.view.model.get("topParentContainer") || this.view.model), this.listenToModelsAndViewEvents("modelEvents", this.model), this.listenToModelsAndViewEvents("viewEvents", this.view), this.listenToModelsAndViewEvents("viewModelEvents", this.view.model), this.listenToModelsAndViewEvents("childrenCollectionEvents", this.view.model.get("childrenCollection")), this.addDomEvents(), this.addWindowEvents()
    }
    bindAllEvents() {
        this.bindToThis ? .length && _.bindAll(this, ...this.bindToThis)
    }
    getChangeProp(t = "openedItems") {
        const e = this.getOption("changePropPrefix");
        return e ? `${t}@${e}` : t
    }
    listenToModelsAndViewEvents(t, e) {
        const i = this[t],
            s = Object.entries(i),
            r = this.view.model.get("childrenCollection");
        s.length && s.forEach(([n, l]) => {
            const d = [];
            Array.isArray(l) ? l.forEach(o => {
                if (typeof o == "string") d.push(this.buildFunction(o));
                else if (typeof o == "object") {
                    const c = Object.keys(o)[0],
                        h = Object.values(o)[0];
                    d.push(() => this.listenTo(e, c, this.buildFunction(h)))
                }
            }) : d.push(this.buildFunction(l)), d.filter(o => o).forEach(o => {
                if (!e ? .models) {
                    const c = new Backbone.Collection;
                    if (l.listenToChildrenToo) {
                        if (r) {
                            const h = r.where(u => u.get("behaviors") ? .find(a => a.willEmitEvents.includes(n)));
                            h.length && c.add(h)
                        }
                        if (e ? .get("behaviors") ? .find(h => h.willEmitEvents.includes(n)) && c.add(e), c.length) return o = _.after(c.length, o), this.listenTo(c, n, o);
                        if (!this.view.model.get("behaviors") ? .find(h => h.willEmitEvents.includes(n))) return o()
                    }
                }
                this.listenTo(e, n, o)
            })
        })
    }
    listenToAppEvents() {
        this.liquidApp && Object.entries(this.appEvents).forEach(([t, e]) => {
            const i = this.buildFunction(e);
            i && this.listenTo(this.liquidApp, t, i)
        })
    }
    listenToRegionsEvents() {
        this.liquidApp && Object.entries(this.regionsEvents).forEach(([t, e]) => {
            const i = this.liquidApp.layoutRegions[t] ? .model;
            i && e.forEach(s => {
                const r = Object.keys(s)[0],
                    n = this.buildFunction(Object.values(s)[0]);
                n && this.listenTo(i, r, n)
            })
        })
    }
    addDomEvents() {
        this.domEvents && Object.entries(this.domEvents).forEach(([t, e]) => {
            const i = t.split(" "),
                s = this.buildFunction(e);
            if (!s) return;
            const r = i[0],
                n = i[1];
            let l;
            if (n)
                if (n.startsWith("@")) l = this.getUI(n.replace("@", ""));
                else if (n.includes("<")) {
                const d = n.replace("<", "");
                d === "document" ? l = [document] : l = document.querySelectorAll(d)
            } else l = this.view.el.querySelectorAll(n);
            else l = [this.view.el];
            l.forEach(d => d.addEventListener(r, s)), this._allEvents.domEvents.push({
                els: l,
                eventType: r,
                fn: s
            })
        })
    }
    addWindowEvents() {
        this.windowEvents && Object.entries(this.windowEvents).forEach(([t, e]) => {
            const i = this.buildFunction(e);
            i && (window.addEventListener(t, i), this._allEvents.windowEvents.push({
                event: t,
                fn: i
            }))
        })
    }
    buildFunction(t) {
        const e = t.func || t;
        if (!this[e]) return console.warn("Could not find the handler", this, e);
        if (t.ifHasOption && !this.getOption(t.ifHasOption)) return !1;
        let i = this[e].bind(this);
        return t.once && (i = _.once(i)), t.throttle ? i = _.throttle(i, t.throttle.wait, { ...t.throttle.options
        }) : t.debounce && (i = _.debounce(i, t.debounce.wait, t.debounce ? .options ? .immediate)), e === "initialize" && (this.initializeHandledByEvents = !0), i
    }
    buildThrottledAndDebouncedFunctions(t, e) {
        Object.entries(t).forEach(([i, s]) => {
            if (!this[i]) return console.warn("Could not find the handler", this, i);
            this[i] = _[e](this[i].bind(this), s.wait, e === "throttle" ? { ..._.omit(s, "wait")
            } : s.immediate)
        })
    }
    getUI(t) {
        let e = this._ui[t] || [];
        const i = t.split(/:|\[/);
        if (i.length < 2) return e;
        const s = i[0],
            r = t.replace(s, "");
        return e = this._ui[s].filter(n => n.matches(r)), e
    }
    getOption(t) {
        return this._options[t]
    }
    setOption(t, e, i = !0) {
        if (this._options[t] && i) return this._options[t] = _.extend(this._options[t], e);
        this._options[t] = e
    }
    destroy() {
        this.handleDestroy(), this.isInitialized = !1
    }
    handleDestroy() {
        this.offAllEvents();
        const t = this.view.model.get("behaviors").filter(e => e.model.cid !== this.model.cid);
        this.view.model.set({
            behaviors: t
        }), this.isDestroyed = !0
    }
    offAllEvents() {
        this.offDomEvents(), this.offWindowEvents(), this.model.off(), this.off(), this.stopListening()
    }
    offDomEvents() {
        this._allEvents.domEvents.forEach(({
            els: t,
            eventType: e,
            fn: i
        }) => t.forEach(s => s.removeEventListener(e, i, !1)))
    }
    offWindowEvents() {
        this._allEvents.windowEvents.forEach(({
            event: t,
            fn: e
        }) => window.removeEventListener(t, e, !1))
    }
}
export default v;