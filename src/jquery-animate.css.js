(function($) {
    var aevents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    var onerror = function(msg) {
        console.log(msg);
    }
    /**
     * Gets animation-duration value in milliseconds
     */
    function getDuration($el) {
        var ad = $el.css("animation-duration"),
            adnum = parseInt(ad),
            mult = ($.isNumeric(adnum) && ad.indexOf("ms") == -1) ? 1000 : 1;

        return (adnum && $.isNumeric(adnum))
            ? adnum * mult
            : 1000;
    };

    var defaultOptions = {
        duration : 800,
        delay : 0,
        callback : undefined,
        animationClass : 'animated',
        logErrors : false,
        queue : 'fx'
    };

    function init($el, effect, options) {
         // Options normalization
        options = options || {};
        if ($.isFunction(options)) {
            options = {callback : options};
        }
        options = $.extend({}, defaultOptions, options);
        
        // Queue the effects in the fx queue
        $el.queue(options.queue, function() {});
        
        if ($.isNumeric && options.delay > 0) {
            setTimeout(function() {
                doAnimateCss($el, effect, options);
            }, options.delay);
        } else {
            doAnimateCss($el, effect, options);
        }
    }

    function doAnimateCss ($el, effect, options) {
        var $this = $el;             


        // Execute callback in element scope
        function executeCallback() {
            if ($.isFunction(options.callback)) {
                $.proxy(options.callback, $this)();
            }
        };

        if (effect === undefined) {
            executeCallback();
        } else {
            // classes to remove
            var toRemove = options.animationClass + " " + effect;
            var animationEndHandler = function(e, isTimeout) {
                if (isTimeout === true) {
                    onerror("Animacion detenida por timeout");
                }
                $this.removeClass(toRemove);
                $this.dequeue(options.queue);
                executeCallback();            
            };

            if ($.isNumeric(options.duration)) {
                $this.css('animation-duration', options.duration + "ms");
            }

            $this.removeClass(toRemove)
                .addClass(effect + ' ' + options.animationClass)
                .off(aevents)
                .one(aevents, animationEndHandler);
            // This event ensures callback is being called
            setTimeout(function() {
                $this.trigger('animationend', [true]);
            }, getDuration($this) + 50);
        }            
        return $this;
    };

    $.fn.extend({
        animateCss : function(effect, options) {           
            return this.each(function() {
                return init($(this), effect, options);
            });
        }
    });
})($);