"use strict";
import u from "./base.js";
class y extends u {
    static name = "liquidAnimations";
    static model = new Backbone.Model(this.initialModelProps);
    defaultElementsSelector = "[data-lqd-animation-el]";
    options() {
        return {
            domain: "inview",
            trigger: "ghost",
            duration: 1,
            ease: "power4.out",
            stagger: {
                each: .075,
                from: "start"
            },
            delay: 0,
            repeat: 0,
            repeatDelay: 0,
            yoyo: !1,
            yoyoEase: !1,
            start: "top bottom",
            end: "bottom top",
            startElementOffset: 0,
            startViewportOffset: 0,
            endElementOffset: 0,
            endViewportOffset: 0,
            toggleActions: "play none none none",
            scrub: !1,
            animations: [{
                elements: this.defaultElementsSelector,
                breakpointsKeyframes: {
                    all: {
                        options: {},
                        keyframes: []
                    },
                    tablet: {
                        options: {},
                        keyframes: []
                    },
                    mobile: {
                        options: {},
                        keyframes: []
                    }
                }
            }]
        }
    }
    get viewModelEvents() {
        return {
            "change:ghost": [{
                "change:animatableElements": {
                    func: "initialize",
                    once: !0
                }
            }],
            "change:animatableElements": [{
                "change:ghost": {
                    func: "initialize",
                    once: !0
                }
            }]
        }
    }
    initialize() {
        this.isDestroyed || this.initAnimations()
    }
    initAnimations() {
        this.isDestroyed || (this.animations = this.buildAnimationsArray(), this.animationsBreakpoints = this.buildAnimationsBreakpoints(), this.matchMedia = gsap.matchMedia(), this.buildAnimations())
    }
    onAnimatablesChange(i, t) {
        const e = this.getOption("domain");
        if (!i.models && !Array.isArray(t)) {
            const s = [...i ? .changed ? .behaviors || []];
            if (i.previous && i.previous("behaviors") ? .length && s.push(...i.previous("behaviors")), !s.find(r => r.name === this.name && r.getOption("domain") === e)) return
        }
        this.revertAnimations(), this.initAnimations()
    }
    buildAnimationsArray() {
        const i = {
            duration: this.getOption("duration"),
            ease: this.getOption("ease"),
            stagger: this.getOption("stagger"),
            repeat: this.getOption("repeat"),
            repeatDelay: this.getOption("repeatDelay"),
            yoyo: this.getOption("yoyo"),
            yoyoEase: this.getOption("yoyoEase")
        };
        let t = [...this.getOption("animations")];
        return t.forEach((s, n) => {
            const {
                elements: r,
                breakpointsKeyframes: h,
                originalElements: o
            } = s;
            Object.entries(h).forEach(([f]) => {
                const l = this.breakpointsOrder.findIndex(g => g === f);
                let m = {};
                for (let g = l; g < this.breakpointsOrder.length; g++) s.breakpointsKeyframes[this.breakpointsOrder[g]] && (m = s.breakpointsKeyframes[this.breakpointsOrder[g]]);
                h[f].options = { ...i,
                    ...m ? .options || {},
                    ...h[f] ? .options || {}
                }
            }), typeof r == "string" ? r === "selfAnimatables" ? t.splice(n, 0, {
                elements: this.view.model.get("animatableElements"),
                breakpointsKeyframes: h
            }) : r === "self" ? t[n].elements = [this.view.el] : r !== "" && (t[n].elements = [...this.view.el.querySelectorAll(r)]) : t[n].elements = [...this.view.el.querySelectorAll(this.defaultElementsSelector)]
        }), t.filter(s => typeof s ? .elements != "string" && s ? .elements ? .length)
    }
    buildAnimationsBreakpoints() {
        const i = this.animations.flatMap(e => Object.keys(e.breakpointsKeyframes)),
            t = _.uniq(i).sort((e, s) => this.breakpointsOrder.indexOf(e) - this.breakpointsOrder.indexOf(s));
        return t.forEach((e, s) => {
            const n = window.liquid.breakpoints[e];
            let r = n ? `(${n.direction}-width: ${n.value}px)` : "all";
            t[s] = {
                name: e,
                value: r
            }, n && (t[s].direction = n.direction, t[s].screenSize = n.value)
        }), t
    }
    buildAnimations() {
        const i = [this.animations.length - 1 >> 1],
            t = this.animations.length % 2,
            e = {
                delay: this.getOption("delay"),
                repeat: this.getOption("repeat"),
                repeatDelay: this.getOption("repeatDelay"),
                yoyo: this.getOption("yoyo"),
                yoyoEase: this.getOption("yoyoEase")
            },
            s = {
                trigger: this.getTrigger(),
                toggleActions: this.getOption("toggleActions"),
                scrub: this.getOption("scrub"),
                start: this.getStartAndEnd(this.getOption("start"), [this.getOption("startElementOffset"), this.getOption("startViewportOffset")]),
                end: this.getStartAndEnd(this.getOption("end"), [this.getOption("endElementOffset"), this.getOption("endViewportOffset")])
            };
        t || i.push(this.animations.length >> 1), this.animationsBreakpoints.forEach(({
            name: n,
            value: r,
            direction: h,
            screenSize: o
        }, f) => {
            let l = r;
            const g = Object.entries(this.animations).filter(([p, d]) => !d.isChildAnimation).map(([p, d]) => d.breakpointsKeyframes[n])[0] ? .options ? .stagger,
                a = this.animationsBreakpoints[f],
                c = this.animationsBreakpoints[f - 1];
            if (r === "all" && c ? .direction && c ? .screenSize) {
                const p = c.direction === "max" ? "min" : "max",
                    d = c.direction === "max" ? c.screenSize + 1 : c.screenSize;
                l = `(${p}-width: ${d}px)`
            }
            a ? .direction && a ? .screenSize && c ? .direction && c.screenSize && (l = `(min-width: ${c?.screenSize+1}px) and (max-width: ${a.screenSize}px)`), this.matchMedia.add(l, () => {
                const p = gsap.timeline({
                    delay: e.repeat !== 0 ? 0 : e.delay,
                    scrollTrigger: s
                });
                this.getBreakpointAnimation(p, n, i, g), a.timeline = p
            }), e ? .repeat !== 0 && (this.repeatTimelines = this.repeatTimelines || [], this.repeatTimelines[f] = this.repeatTimelines[f] || {
                name: n,
                value: r
            }, this.matchMedia.add(l, () => {
                a.timeline.restart();
                const p = gsap.timeline({
                    paused: !1,
                    ...e,
                    scrollTrigger: s
                });
                p.add(a.timeline), this.repeatTimelines[f].timeline = p
            }))
        })
    }
    getBreakpointAnimation(i, t, e, s) {
        const n = { ...this.getOption("stagger")
            },
            r = s || n;
        let h = [...this.animations];
        r.from === "random" && (h = _.shuffle(h)), h.forEach((o, f) => {
            if (!o.elements ? .length || !o.breakpointsKeyframes[t] ? .keyframes) return;
            const l = _.pick({ ...n,
                    ...o.breakpointsKeyframes[t] ? .options
                }, "ease", "duration", "stagger"),
                m = this.buildBreakpointStagger(l, o, f, e);
            let g = o.breakpointsKeyframes[t].keyframes.map(a => this.buildKeyframe(l, m, a));
            i.to(o.elements, {
                stagger: m,
                delay: l.delay || 0,
                keyframes: g,
                onUpdate: () => {
                    o.elements.forEach(a => a.style.transition = "none")
                },
                onComplete: () => {
                    o.elements.forEach(a => a.style.transition = "")
                }
            }, this.getTweensPositionInTimeline(r, t, f, e))
        })
    }
    buildBreakpointStagger(i, t, e, s) {
        if (t.isChildAnimation) return i.stagger;
        const n = {
                from: i ? .stagger ? .from,
                each: i ? .stagger ? .each
            },
            r = s[0],
            h = s[s.length - 1];
        if (n.from === "center") {
            let o = n.from;
            s.length === 1 && e === r ? o = "center" : e <= r ? o = "end" : o = "start", n.from = o
        }
        if (n.from === "edges") {
            let o = n.from;
            s.length === 1 && e === r ? o = "edges" : e >= h ? o = "end" : o = "start", n.from = o
        }
        return n
    }
    buildKeyframe(i, t, e) {
        const s = {
                from: e ? .stagger ? .from || t.from,
                each: e ? .stagger ? .each || t.each
            },
            n = { ...this.timelinesDefaultOptions,
                ...i,
                ...e,
                stagger: s
            };
        return _.omit(n, "stagger")
    }
    getTweensPositionInTimeline(i, t, e, s) {
        const n = {
                from: i.from,
                each: i.each
            },
            r = n.each || 0,
            h = this.animations[e - 1],
            o = h ? .breakpointsKeyframes[t] ? h.elements.length : 0,
            f = h ? .breakpointsKeyframes[t] ? .options ? .stagger ? .each;
        let l = `<+=${(e>=1?o:0)*(f||r)}`;
        if (n.from === "end") {
            let m = 0;
            for (let g = e; g < this.animations.length; g++) {
                const a = this.animations[g + 1];
                if (a) {
                    const c = a ? .breakpointsKeyframes[t] ? a.elements.length : 0,
                        p = a ? .breakpointsKeyframes[t] ? .options ? .stagger ? .each || 0;
                    m += c * p
                }
            }
            l = m
        }
        if (n.from === "center" && (s.includes(e) && (l = 0), e < s[0])) {
            const m = this.animations[s[0]].elements.length >> 1;
            l = `${(this.animations.slice(e,s[0]).map(a=>a.elements.length).reduce((a,c)=>a+c,0)+m)*r}`
        }
        return n.from === "edges" && (s.includes(e) || (e === 0 || e === this.animations.length - 1 ? l = 0 : e > s[0] ? l = this.animations[e].elements.length * r : e < s[0] && (l = `<+=${this.animations[e===0?0:e-1].elements.length*r}`))), l
    }
    getTrigger() {
        const i = this.getOption("trigger");
        let t;
        if (i === "self") t = this.view.el;
        else if (i === "ghost") t = this.view.model.get("ghost") ? .el || this.view.el;
        else if (i === "topParentContainer") {
            const e = this.view.model.get("topParentContainer");
            t = e ? e.get("ghost") ? .el || e.view ? .el : this.view.el
        } else if (i === "closestParentContainer") {
            const e = this.view.model.get("parentsCollection") ? .at(0);
            t = e ? e.get("ghost") ? .el || e.view ? .el : this.view.el
        } else t = i;
        return t
    }
    getStartAndEnd(i, t = [0, 0]) {
        if (!i) return 0;
        if (typeof i == "number") return `${i}%`;
        if (i === "max") return i;
        const e = i.split(" ");
        let s = "",
            n = "";
        return t[0] !== 0 && (s = `${t[0]<0?"-":"+"}=${Math.abs(t[0])}%`, e[0] = e[0].split(/[+-]/)[0]), t[1] !== 0 && (n = `${t[1]<0?"-":"+"}=${Math.abs(t[1])}%`, e[1] = e[1].split(/[+-]/)[0]), `${e[0]}${s} ${e[1]}${n}`
    }
    revertAnimations() {
        this.repeatTimelines ? .filter(i => i.timeline) ? .forEach(i => {
            i.timeline.revert()
        }), this.animationsBreakpoints ? .filter(i => i.timeline) ? .forEach(i => {
            i.timeline.revert()
        }), this.repeatTimelines = null, this.animationsBreakpoints = null, this.matchMedia ? .revert()
    }
    destroy() {
        this.revertAnimations(), super.destroy()
    }
}
export default y;