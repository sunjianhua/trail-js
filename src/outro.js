if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = TRAIL;
    }
    exports.TRAIL = TRAIL;
} else if (typeof define !== 'undefined' && define.amd) {
    define(TRAIL);
} else {
    root.TRAIL = TRAIL;
}
}).call(this);