{/* <html>
<head>
	<title>JS Basics II</title>
	<script type="text/javascript">

	function magicMultiply(x, y) {

        // 2
		if (x === 0 && y === 0) {
			return "All inputs 0";
		}

        // 3
		if (x.constructor === Array) {
			for (let i = 0; i < x.length; i++) {
				x[i] = x[i] * y
			}
			return x;
		}

        // 4
		if (y.constructor === String) {
			return "Error: Can not multiply by string";
		}

        // 5
		if (x.constructor === String) {
			let newString = "";
			for (let i = 0; i<y; i++) {
				newString += x;
			}
			return newString;
		}

		// 1
		return x * y;
	}

	const test1 = magicMultiply(5, 2);
	const test2 = magicMultiply(0, 0);
	const test3 = magicMultiply([1, 2, 3], 2);
	const test4 = magicMultiply(7, "three");
	const test5 = magicMultiply("Brendo", 4);

	console.log(test1);
	console.log(test2);
	console.log(test3);
	console.log(test4);
	console.log(test5);

	</script>
</head>
<body>

</body>
</html> */}


function starString(num) {
			let stars = "";
			for (let i = 0; i < num; i++) {
				stars += "*";
			}
			return stars;
		};

		// Part II + III
		function drawStars(arr) {
			const result = [];
			for (let i = 0; i < arr.length; i++) {
				if (typeof arr[i] === 'number') {
					result.push(starString(arr[i]))
				} else if (typeof arr[i] === 'string') {
					let string = "";
					for (let j = 0; j < arr[i].length; j++) {
						string += arr[i][0].toLowerCase();
					}
					result.push(string);
				}
			}
			return result;
		}

		const y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
		const z = [4, 6, 1, 3, 5, 7, 25]

    console.log(drawStars(y));
    console.log(drawStars(z));