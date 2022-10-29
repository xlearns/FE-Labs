export function getException() {
	try {
		throw Error("");
	} catch (err) {
		return err.stack;
	}
}

function addZero(str) {
	str = String(str);
	if (str.length < 2) {
		str = "0" + str;
	}
	return str;
}

export function getTime() {
	let t = new Date();
	let year = addZero(t.getFullYear());
	let month = addZero(t.getMonth() + 1);
	let day = addZero(t.getDate());
	let hour = addZero(t.getHours());
	let min = addZero(t.getMinutes());
	let sec = addZero(t.getSeconds());
	let now = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
	return now;
}
