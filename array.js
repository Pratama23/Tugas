let a = [1,2];
let b = [1,2];
let c = [5,5];

function arrcmp(a, b) {
	if (!(Array.isArray(a) && Array.isArray(b))) {
		return false;
}
	if (a.length !== b.length) {
		return false;
}

	for (let i=0; i < a.length; i++) {
		if (a[i] !== b[i]) {
		return false;
				}
			}

	return true;
}