
ok = (d) => {
	debugger;
	console.log('OKKKKKK');
	return {
		ok:2
	};
}

fail = (e) => {
	debugger;
	console.log(e);
}

function o() {
console.log('END');
	return {
		a:1
	};
}

function dispatch(data) {
	console.log('dispatch' , data);
}


async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  const p = promise
  .then(ok)
	.catch(fail)
	.then(dispatch)
	.then(o)
	.then(dispatch)

	return p;

}

async function test() {
	let x = await f();
	console.log('sdddffff');	
	console.log(x);	

}

//test();

 function exception() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("done!"), 1000)
  });

  return promise;
  

}

function test1() {
	let x = exception()
	.then(ok)
	.catch(fail)

	console.log('sdddffff');	
	console.log(x);	

}
//f();



var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("done!"), 1000)
  });

function test1() {
	var r = promise2
		.then(ans => {
			debugger;
			console.log(ans);
			throw new Error('asd');
		})
		.catch(ex => {
			debugger;
			console.log('exxxxxxx');
		})
	;
}