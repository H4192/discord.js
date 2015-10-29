"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PMChannel = (function () {
	function PMChannel(data, client) {
		_classCallCheck(this, PMChannel);

		this.user = client.getUser("id", data.recipient.id);
		this.id = data.id;
		this.messages = [];
		this.client = client;
	}

	PMChannel.prototype.addMessage = function addMessage(data) {
		if (!this.getMessage("id", data.id)) {
			this.messages.push(data);
		}
		return this.getMessage("id", data.id);
	};

	PMChannel.prototype.getMessage = function getMessage(key, value) {

		if (this.messages.length > 1000) {
			this.messages.splice(0, 1);
		}

		for (var _iterator = this.messages, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;

			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref = _i.value;
			}

			var message = _ref;

			if (message[key] === value) {
				return message;
			}
		}
		return null;
	};

	_createClass(PMChannel, [{
		key: "isPrivate",
		get: function get() {
			return true;
		}
	}]);

	return PMChannel;
})();

module.exports = PMChannel;