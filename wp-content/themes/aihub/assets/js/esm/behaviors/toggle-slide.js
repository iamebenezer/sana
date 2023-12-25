"use strict";
import l from "./base.js";
class r extends l {
    static name = "liquidEffectsSlideToggle";
    static model = new Backbone.Model(this.initialModelProps);
    defaultActiveDisplay = ":flex";
    options() {
        return {
            duration: .7,
            changePropPrefix: null,
            keepHiddenClassname: !0
        }
    }
    get viewEvents() {
        const e = this.getChangeProp(),
            t = this.getChangeProp("closedItems");
        return {
            [`change:${e}`]: "onOpenedElements",
            [`change:${t}`]: "onClosedElements"
        }
    }
    onOpenedElements({
        targets: e
    }) {
        e ? .length && e.forEach(t => {
            if ((getComputedStyle(t).display !== "none" || t.offsetHeight > 0) && !gsap.isTweening(t)) return;
            gsap.killTweensOf(t), this.setInitialState(t);
            const i = this.getActiveDisplay(t);
            gsap.set(t, {
                display: i
            }), t.classList.remove("hidden"), gsap.from(t, {
                duration: this.getOption("duration"),
                ease: "power4.out",
                height: 0,
                onComplete: () => {
                    gsap.set(t, {
                        height: "",
                        overflow: ""
                    })
                }
            })
        })
    }
    onClosedElements({
        targets: e
    }) {
        if (!e ? .length) return;
        const t = this.getOption("keepHiddenClassname");
        gsap.killTweensOf(e), e.forEach(s => {
            this.setInitialState(s, !1), gsap.to(s, {
                duration: this.getOption("duration"),
                ease: "power4.out",
                height: 0,
                onComplete: () => {
                    t && s.classList.add("hidden"), gsap.set(s, {
                        display: "",
                        height: "",
                        overflow: ""
                    })
                }
            })
        })
    }
    getActiveDisplay(e) {
        const t = this.view.model.get("lastActiveDisplay");
        if (t) return t;
        const a = (e.className.split(" ").find(o => o.startsWith("[&.lqd-is-active")) || this.defaultActiveDisplay).split(":")[1].replace("]", "");
        return this.view.model.set({
            lastActiveDisplay: a
        }), a
    }
    setInitialState(e, t = !0) {
        const s = {
            overflow: "hidden"
        };
        t && (s.height = "auto"), gsap.set(e, s)
    }
}
export default r;