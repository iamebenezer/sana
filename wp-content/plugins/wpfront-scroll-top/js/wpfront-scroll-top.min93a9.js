(function() {
    function t(t) {
        var n = o("#wpfront-scroll-top-container"),
            e = !1,
            i = 0,
            a = function() {
                clearTimeout(i), n.is(":visible") && n.stop().fadeTo(t.button_fade_duration, 0, function() {
                    n.hide(), e = !1
                })
            },
            c = function() {
                t.auto_hide && (clearTimeout(i), i = setTimeout(function() {
                    a()
                }, 1e3 * t.auto_hide_after))
            },
            l = !1,
            r = function() {
                l || (l = !0, o(window).scrollTop() > t.scroll_offset ? (n.stop().css("opacity", e ? 1 : t.button_opacity).show(), e || c()) : a(), l = !1)
            };
        o(window).on("scroll", r), o(document).on("scroll", r), n.on("mouseenter", function() {
            clearTimeout(i), e = !0, o(this).css("opacity", 1)
        }).on("mouseleave", function() {
            o(this).css("opacity", t.button_opacity), e = !1, c()
        }).on("click", function(n) {
            if ("url" === t.button_action) return !0;
            if ("element" === t.button_action) {
                n.preventDefault();
                var e = o(t.button_action_element_selector).first(),
                    i = o(t.button_action_container_selector),
                    a = e.offset();
                if (null == a) return !1;
                var c = i.last().offset();
                if (null == c) return !1;
                t.button_action_element_offset = parseInt(t.button_action_element_offset), isNaN(t.button_action_element_offset) && (t.button_action_element_offset = 0);
                var l = a.top - c.top - t.button_action_element_offset;
                return i.animate({
                    scrollTop: l
                }, t.scroll_duration), !1
            }
            return n.preventDefault(), o("html, body").animate({
                scrollTop: 0
            }, t.scroll_duration), !1
        })
    }
    var o = jQuery;
    o(window).on("load", function() {
        function n(n) {
            n.data.hide_iframe && o(window).attr("self") !== o(window).attr("top") || (o("<style>").text(n.css).appendTo("head"), o("body").append(n.html), t(n.data))
        }
        n(wpfront_scroll_top_data.data)
    })
})();