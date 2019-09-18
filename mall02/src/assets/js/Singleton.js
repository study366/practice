export const Singleton = (
	function (fn) {
		let instance = null;
		return function () {
			return instance || (instance = fn.apply(this,arguments));
		}
	})();