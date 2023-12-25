"use strict";
import d from "./base.js";
class u extends d {
    static name = "liquidLocalscroll";
    static model = new Backbone.Model(this.initialModelProps);
    options() {
        return {
            ease: "power2.inOut",
            duration: null,
            offset: null
        }
    }
    get ui() {
        return {
            links: "[data-lqd-local-scroll-el]"
        }
    }
    get domEvents() {
        return {
            "click @links": "onLinkClicked"
        }
    }
    initialize() {
        super.initialize(), this.watchers = [], this.initWatcher(), typeof elementorFrontend < "u" && elementorFrontend ? .utils ? .anchors ? .setSettings("selectors.targets", ".to-disabled-el-local")
    }
    initWatcher() {
        const t = this.getUI("links");
        t.forEach((s, o) => {
            const e = s.getAttribute("href");
            if (!e || e === "") return;
            const i = new URL(e, window.location.href).hash;
            if (!i) return;
            const r = document.querySelector(i);
            if (!r) return;
            const l = ScrollTrigger.create({
                trigger: r,
                start: "top center",
                end: "bottom center+=10px",
                onToggle: n => {
                    n.isActive && (t.forEach(a => a.classList.remove("lqd-is-active")), s.classList.add("lqd-is-active"))
                }
            });
            this.watchers.push(l)
        })
    }
    onLinkClicked(t) {
        const o = t.currentTarget ? .getAttribute("href");
        if (!o || o === "") return;
        const e = new URL(o, window.location.href).hash;
        if (!e) return;
        const i = document.querySelector(e);
        if (!i) return;
        t.preventDefault(), t.stopPropagation();
        const r = this.getOption("offset") || this.liquidApp.globalOptions.localScroll ? .offset,
            l = this.getOption("duration") || this.liquidApp.globalOptions.localScroll ? .duration || 1,
            n = this.getOption("ease"),
            a = this.view.model.get("behaviors") ? .filter(c => c.name === "liquidToggle");
        this.scrollTween = gsap.to(window, {
            duration: l,
            ease: n,
            scrollTo: {
                y: i,
                offsetY: r,
                autoKill: !liquidTouchMM.matches
            }
        }), liquidTouchMM.matches && a ? .forEach(c => {
            const h = c.getChangeProp();
            this.view.model.set({
                [h]: [-1]
            })
        })
    }
    destroy() {
        this.scrollTween ? .kill(), this.watchers ? .forEach(t => t.kill()), super.destroy()
    }
}
export default u;