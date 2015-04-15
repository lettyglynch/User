var args = arguments[0] || {};
$.index.open();
$.doLoginBtn.addEventListener('click', doLoginBtnClicked);

function doLoginBtnClicked() {

	var user = Alloy.createModel('User');

	user.login($.email.value, $.password.value, userActionResponseHandler);
};
function userActionResponseHandler(_resp) {
	if (_resp.success === true) {

		alert("loginSuccess");
		$.loginText.text = _resp.model.id;
	
	} else {

		alert("loginFailed", _resp.error.message);

	}
};

