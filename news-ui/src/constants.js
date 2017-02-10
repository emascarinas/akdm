function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("KEY_HEADER", "header");
define("KEY_HERO", "hero");
define("KEY_SHOUT", "shout");
define("KEY_ACTIVITY", "activity");
