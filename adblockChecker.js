function isAdblockOn() {
	var testAdblockEl = document.createElement('div');
	testAdblockEl.innerHTML = '&nbsp;';
	testAdblockEl.className = 'adsbox';
	document.body.appendChild(testAdblockEl);

	var isAdblockOn = (testAdblockEl.offsetHeight === 0);
	document.body.removeChild(testAdblockEl);
	
	return isAdblockOn;
}


