(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        if (!pssnoweffect.enable) return;
        $.snow({
            flake_number: pssnoweffect.flake_number,
            flake_folder: 'images/' + pssnoweffect.flake_folder + '/',
            flake_imgs: 6,
            melt: pssnoweffect.melt,
            wind: pssnoweffect.wind,
            rotation: pssnoweffect.rotation,
            speed: pssnoweffect.speed,
        });
    });
})(jQuery);