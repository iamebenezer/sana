import LiquidApp from '../../themes/aihub/assets/js/esm/app.js';
import LiquidGetElementComputedStylesBehavior from '../../themes/aihub/assets/js/esm/behaviors/get-element-computed-styles.js';
import LiquidAnimationsBehavior from '../../themes/aihub/assets/js/esm/behaviors/animations.js';
import LiquidHover3dBehavior from '../../themes/aihub/assets/js/esm/behaviors/hover-3d.js';
import LiquidSplitTextBehavior from '../../themes/aihub/assets/js/esm/behaviors/split-text.js';
import LiquidToggleBehavior from '../../themes/aihub/assets/js/esm/behaviors/toggle.js';
import LiquidDropdownBehavior from '../../themes/aihub/assets/js/esm/behaviors/dropdown.js';
import LiquidEffectsSlideToggleBehavior from '../../themes/aihub/assets/js/esm/behaviors/toggle-slide.js';
import LiquidLocalScrollBehavior from '../../themes/aihub/assets/js/esm/behaviors/local-scroll.js';
import LiquidSwitchBehavior from '../../themes/aihub/assets/js/esm/behaviors/switch.js';
import LiquidStickyHeaderBehavior from '../../themes/aihub/assets/js/esm/behaviors/sticky-header.js';

(() => {
    'use strict';
    window.liquid = {
        "app": null,
        "behaviors": [],
        "breakpoints": {
            "tablet": {
                "label": "Tablet Portrait",
                "value": 1024,
                "default_value": 1024,
                "direction": "max",
                "is_enabled": true
            },
            "mobile": {
                "label": "Mobile Portrait",
                "value": 767,
                "default_value": 767,
                "direction": "max",
                "is_enabled": true
            }
        }
    }

    _.extend(window.liquid, Backbone.Events);

    fastdom = fastdom.extend(fastdomPromised);

    /**
     * Initiating elements
     */

    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-8bc3715'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'parallax',
                trigger: 'topParentContainer',
                ease: 'linear',
                scrub: 1,
                start: 'top top',
                end: 'bottom top',
                startElementOffset: 0,
                startViewportOffset: 0,
                endElementOffset: 0,
                endViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '40vh',
                                z: '-169px',
                                rotateX: -45,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 0
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-aac6de7'),
        behaviors: [{
            behaviorClass: LiquidHover3dBehavior,
            options: {
                intensity: 2
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-68c624b'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'parallax',
                trigger: 'topParentContainer',
                ease: 'linear',
                scrub: 1,
                start: 'top top',
                end: 'bottom top',
                startElementOffset: 0,
                startViewportOffset: 0,
                endElementOffset: 0,
                endViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '40vh',
                                z: '-169px',
                                rotateX: -45,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 0
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-5355c90b'),
        behaviors: [{
            behaviorClass: LiquidSplitTextBehavior,
            options: {
                splitDoneFromBackend: true,
                splitType: 'words'
            }
        }, {
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.02,
                    from: 'start'
                },
                delay: 0.4,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'selfAnimatables',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-2ea4ae41'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'parallax',
                trigger: 'topParentContainer',
                ease: 'power1.inOut',
                scrub: 1,
                start: 'top top',
                end: 100,
                startElementOffset: 0,
                startViewportOffset: 0,
                endElementOffset: 0,
                endViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 0.7,
                                scaleY: 0.7,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '50vh',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 0
                            }]
                        },
                        mobile: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '10vh',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 0
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-49a3fd1d'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'parallax',
                trigger: 'topParentContainer',
                ease: 'power1.inOut',
                scrub: 2,
                start: 'top bottom',
                end: 'center center',
                startElementOffset: 0,
                startViewportOffset: 0,
                endElementOffset: 0,
                endViewportOffset: 30,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '-10vh',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-26c550a'),
        behaviors: [{
            behaviorClass: LiquidSplitTextBehavior,
            options: {
                splitDoneFromBackend: true,
                splitType: 'words'
            }
        }, {
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.02,
                    from: 'start'
                },
                delay: 0.4,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'selfAnimatables',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-bba2c0d'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.065,
                    from: 'start'
                },
                delay: 0,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-724fbe2c'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.065,
                    from: 'start'
                },
                delay: 0.1,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-5b386e7'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.065,
                    from: 'start'
                },
                delay: 0,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-2d2eec3'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.065,
                    from: 'start'
                },
                delay: 0,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-f927d72'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.065,
                    from: 'start'
                },
                delay: 0,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-a6018c7'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.065,
                    from: 'start'
                },
                delay: 0,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-8a7b581'),
        behaviors: [{
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                includeSelf: true,
                getRect: true,
                addGhosts: true
            }
        }, {
            behaviorClass: LiquidAnimationsBehavior,
            options: {
                domain: 'inview',
                trigger: 'ghost',
                duration: 0.65,
                ease: 'expo.out',
                stagger: {
                    each: 0.065,
                    from: 'start'
                },
                delay: 0,
                start: 'top+=30px bottom',
                startElementOffset: 0,
                startViewportOffset: 0,
                animations: [{
                    elements: 'self',
                    breakpointsKeyframes: {
                        all: {
                            keyframes: [{
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0,
                                skewY: 0,
                                x: '0px',
                                y: '0px',
                                z: '0px',
                                rotateX: 0,
                                rotateY: 0,
                                rotateZ: 0,
                                opacity: 1
                            }]
                        }
                    }
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-5c4f759'),
        behaviors: [{
            behaviorClass: LiquidToggleBehavior,
            options: {
                disableOnTouch: true,
                changePropPrefix: 'lqdMenuSubmenu-5c4f759',
                ui: {
                    togglableTriggers: '.menu-item-has-children',
                    togglableElements: '.lqd-menu-dropdown'
                },
                triggerElements: ['pointerenter @togglableTriggers', 'pointerleave @togglableTriggers']
            }
        }, {
            behaviorClass: LiquidDropdownBehavior
        }, {
            behaviorClass: LiquidToggleBehavior,
            options: {
                changePropPrefix: 'lqdMenuMobileToggle-5c4f759',
                ui: {
                    togglableTriggers: '.lqd-dropdown-trigger',
                    togglableElements: '.lqd-menu-dropdown'
                },
                triggerElements: ['click @togglableTriggers']
            }
        }, {
            behaviorClass: LiquidEffectsSlideToggleBehavior,
            options: {
                changePropPrefix: 'lqdMenuMobileToggle-5c4f759',
                keepHiddenClassname: false
            }
        }, {
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                getRect: true,
                includeSelf: true
            }
        }, {
            behaviorClass: LiquidToggleBehavior,
            options: {
                changePropPrefix: 'lqdMenuToggle-5c4f759',
                toggleOffOnEscPress: true,
                toggleOffOnOutsideClick: true,
                ui: {
                    togglableTriggers: '.lqd-trigger',
                    togglableElements: '.lqd-menu-wrap'
                },
                triggerElements: ['click @togglableTriggers']
            }
        }, {
            behaviorClass: LiquidEffectsSlideToggleBehavior,
            options: {
                changePropPrefix: 'lqdMenuToggle-5c4f759',
                keepHiddenClassname: false
            }
        }, {
            behaviorClass: LiquidLocalScrollBehavior,
            options: {
                offset: 80,
                ui: {
                    links: '.lqd-menu-link-top'
                }
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-60008c8'),
        behaviors: [{
            behaviorClass: LiquidSwitchBehavior,
            options: {
                useLocalStorage: true,
                attrs: [{
                    key: 'lqd-page-color-scheme',
                    attr: 'data-lqd-page-color-scheme',
                    val: {
                        on: 'dark',
                        off: 'light'
                    },
                    el: 'body'
                }]
            }
        }, ]
    });
    window.liquid.behaviors.push({
        el: document.querySelector('.elementor-element-8f9a34e'),
        behaviors: [{
            behaviorClass: LiquidToggleBehavior,
            options: {
                disableOnTouch: true,
                changePropPrefix: 'lqdMenuSubmenu-8f9a34e',
                ui: {
                    togglableTriggers: '.menu-item-has-children',
                    togglableElements: '.lqd-menu-dropdown'
                },
                triggerElements: ['pointerenter @togglableTriggers', 'pointerleave @togglableTriggers']
            }
        }, {
            behaviorClass: LiquidDropdownBehavior
        }, {
            behaviorClass: LiquidToggleBehavior,
            options: {
                changePropPrefix: 'lqdMenuMobileToggle-8f9a34e',
                ui: {
                    togglableTriggers: '.lqd-dropdown-trigger',
                    togglableElements: '.lqd-menu-dropdown'
                },
                triggerElements: ['click @togglableTriggers']
            }
        }, {
            behaviorClass: LiquidEffectsSlideToggleBehavior,
            options: {
                changePropPrefix: 'lqdMenuMobileToggle-8f9a34e',
                keepHiddenClassname: false
            }
        }, {
            behaviorClass: LiquidGetElementComputedStylesBehavior,
            options: {
                getRect: true,
                includeSelf: true
            }
        }, ]
    });


    const liquidApp = new LiquidApp({
        layoutRegions: {
            liquidPageHeader: {
                el: 'lqd-page-header-wrap',
                contentWrap: 'lqd-page-header',
                behaviors: [{
                    behaviorClass: LiquidStickyHeaderBehavior,
                    options: []
                }, {
                    behaviorClass: LiquidGetElementComputedStylesBehavior,
                    options: {
                        includeSelf: true,
                        getRect: true
                    }
                }, ],
            },
            liquidPageContent: {
                el: 'lqd-page-content-wrap',
                contentWrap: 'lqd-page-content',
                behaviors: [

                ],
            },
            liquidPageFooter: {
                el: 'lqd-page-footer-wrap',
                contentWrap: 'lqd-page-footer'
            },
        },
    });

    window.liquid.app = liquidApp;

    liquidApp.start();
})();