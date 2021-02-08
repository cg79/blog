function createNestedObject(source, path) {
	const paths = path.split('.');
	const last = paths.pop();
	if (paths.length === 0) {
		return {
			source,
			ref: source,
			last
		};
	}
	let ref = source;
	for (var i = 0; i < paths.length; i++) {
		const p = paths[i];
		if (!ref[p]) {
			ref[p] = {};
			ref = ref[p];
		} else {
			ref = ref[p];
		}
	}

	return {
		source,
		ref,
		last
	};
}

function readObjectValueByPath(source, path) {
	const paths = path.split('.');
	if(paths.length === 1) {
		return source[path];
	}
	var ref =source;
	
	for (var i = 0; i < paths.length; i++) {
		const p = paths[i];
		ref = ref[p];
	}

	return ref;
}

function copyFrom(source, fields = [], destination = {}) {
	// fields = array od {from , to}

	for (var i = 0; i < fields.length; i++) {
		const f = fields[i];
		const { from } = f;
		const to = f.to ? f.to : f.from;
		
		const fromValue = readObjectValueByPath(source, from);
		let nested = null;

		if (fromValue) {
			const toType = typeof to;

			switch (toType) {
				case 'string': {
					nested = createNestedObject(destination, to);
					const { ref, last } = nested;
					ref[last] = fromValue;
					break;
				}
				case 'object': {
					const isArray = Array.isArray(to);
					const { name, fields } = to;

					if (!isArray) {
						// expects an oject with name and fields properties
						if (!to) {
							throw 'When to is an object , is expected to habe name and fields properties'
						}
						
						nested = createNestedObject(destination, name);
						const { ref, last } = nested;
						if (Array.isArray(fromValue)) {
							ref[last] = [];
							fromValue.forEach(el => {
								const newV = copyFrom(el, fields, {})
								ref[last].push(newV);
							});
						} else {
							// debugger;
							if(!fields) {
								ref[last] = fromValue;
							} else{
								ref[last] = copyFrom(fromValue, fields, {});
							}
						}
						
					} else {
						nested = createNestedObject(destination, from);
						// if (!fields) { throw 'no fields property provided for ', to };
						const { ref, last } = nested;
						if (Array.isArray(fromValue)) {
							ref[last] = [];
							fromValue.forEach(el => {
								const newV = copyFrom(el, to, {})
								ref[last].push(newV);
							});
						}
					}

					break;
				}
			}
		}
	}
	return destination;
}

var source = {
	a: 5,
	b: [{ c: 1, d: 5 }, { c: 2, d: 6 }],
	address: {
		location: {
			street: 'street value'
		},
		geo: {
			lat: 15,
			lng: 78
		}
	}
};
// copyFrom(source, [{from: 'a', to: 'bbbb'}])

// copyFrom(source, [{from: 'a', to: 'bbbb.a'}])

copyFrom(source, [
	{ from: 'a', to: 'x' },
	{ from: 'a', to: 'aa.a' },
	{ from: 'b', to: 'b1' },
	{ from: 'b', to: 'bb.b' },
	{
		from: 'b', to: [
			{
				from: 'c',
				to: 'c1'
			}
		]
	},
	{
		from: 'b', to:
		{
			name: 'newb',
			fields: [{ from: 'c', to: 'c1' }, {from: 'd', to: 'd1' }]
		}
	},
	{
		from: 'b', to:
		{
			name: 'ne.wb',
			fields: [{ from: 'c', to: 'c1' }, {from: 'd', to: 'd1' }]
		}
	},
	{from: 'address.location', to: 'location1'},
	{from: 'address', to: {
		name: "address1"
	}},
	{from: 'address', to: {
		name: "address2",
		fields: [{
			from : 'location',
			to: 'location1'
		},{
			from: 'geo',
			to: "geo1"
		}]
	}},
	{from: 'address', to: {
		name: "address3",
		fields: [{
			from : 'location',
			to: 'location1'
		},{
			from: 'geo',
			to: {
				name: 'geo2'
			}
		}]
	}},
	{from: 'address', to: {
		name: "address4",
		fields: [{
			from : 'location',
			to: 'location1'
		},{
			from: 'geo',
			to: {
				name: 'geo2',
				fields: [{
					from: 'lat',
					to: 'lat111'
				}]
			}
		}]
	}},
	{from: 'address', to: {
		name: "address5",
		fields: [{
			from : 'location',
			to: 'location1'
		},{
			from: 'geo',
			to: {
				name: 'geo2',
				fields: [{
					from: 'lat'
				}]
			}
		}]
	}}
]); 