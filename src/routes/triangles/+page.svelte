<script lang="ts">
	/**
	 * This is a simple Svelte component that calculates the angles of a triangle
	 * given the lengths of its sides, or the lengths of its sides given the angles.
	 *
	 * It also draws a triangle on a canvas.
	 *
	 * When the user changes a side or angle, determine if there's enough information to draw a triangle. In addition to calculating sides and angles, calculate the canvas points for each corner of the triangle.
	 */
	import { onMount } from 'svelte';

	const degToRad = (deg: number): number => deg * (Math.PI / 180);

	// Triangle definitions
	let A: number = 65;
	let B: number = 80;
	let C: number = 180 - A - B;
	let a: number = 9000;
	let b: number = (a / Math.sin(degToRad(A))) * Math.sin(degToRad(B));
	let c: number = (a / Math.sin(degToRad(A))) * Math.sin(degToRad(C));

	const canvasDimensions = { width: 600, height: 600 };
	const longest = Math.max(a, b, c);
	const triangleScale: number = (canvasDimensions.width * 0.8) / longest;

	// Triangle origin is angle A in the bottom left corner, with triangle centered in the middle of the canvas.
	const triangleHeight: number = Math.sin(degToRad(C)) * c * triangleScale;
	const triangleWidth: number = Math.cos(degToRad(C)) * a * triangleScale;
	// The origin of the triangle is the B angle, and the x is left if angle B is acute. Otherwise, the x has to be offset so C is at the right
	const triangleOrigin: [number, number] = [
		(canvasDimensions.width - triangleWidth) / 2,
		triangleHeight + (canvasDimensions.height - triangleHeight) / 2
	];

	console.log('triangleOrigin', triangleOrigin);
	console.log('triangleHeight', triangleHeight);
	console.log('triangleWidth', triangleWidth);

	// Draw the triangle, beginning with B, then C, finally A with B at the bottom left, C at the bottom right, and A at the top.
	let triangleCoords: { A: [number, number]; B: [number, number]; C: [number, number] } = {
		A: [
			triangleOrigin[0] + Math.cos(degToRad(B)) * c * triangleScale,
			triangleOrigin[1] - Math.sin(degToRad(B)) * c * triangleScale
		],
		B: [triangleOrigin[0], triangleOrigin[1]],
		C: [triangleOrigin[0] + a * triangleScale, triangleOrigin[1]]
	};
	let sideLabelCoords: { A: [number, number]; B: [number, number]; C: [number, number] } = {
		a: [triangleOrigin[0] + (a * triangleScale) / 2, triangleOrigin[1]],
		b: [
			triangleCoords.C[0] - Math.cos(degToRad(C)) * ((b * triangleScale) / 2),
			triangleCoords.C[1] - Math.sin(degToRad(C)) * ((b * triangleScale) / 2)
		],
		c: [
			triangleCoords.B[0] + Math.cos(degToRad(B)) * ((c * triangleScale) / 2),
			triangleCoords.B[1] - Math.sin(degToRad(B)) * ((c * triangleScale) / 2)
		]
	};

	let clicked: number = 0;

	let canvas;
	let ctx;

	onMount(() => {
		ctx = canvas.getContext('2d');
		drawTriangle();
	});

	$: {
		if (a && b && c) {
			// calculate angles from sides
			clicked = a + b + c;
		} else if (A && B && C) {
			// calculate sides from angles
			clicked = A + B + C;
		}
	}

	const handleSideChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = parseFloat(target.value);
		if (target.name === 'a') {
			a = value;
		} else if (target.name === 'b') {
			b = value;
		} else if (target.name === 'c') {
			c = value;
		}
		drawTriangle();
	};

	const handleAngleChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = parseFloat(target.value);
		if (target.name === 'A') {
			A = value;
		} else if (target.name === 'B') {
			B = value;
		} else if (target.name === 'C') {
			C = value;
		}
	};

	const drawTriangle = () => {
		ctx.strokeStyle = 'magenta';
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// Draw side a
		ctx.beginPath();
		ctx.moveTo(triangleCoords.A[0], triangleCoords.A[1]);
		ctx.lineTo(triangleCoords.B[0], triangleCoords.B[1]);
		ctx.lineTo(triangleCoords.C[0], triangleCoords.C[1]);
		ctx.closePath();
		ctx.stroke();

		ctx.font = '18px Arial black';
		// Draw angle labels
		ctx.fillText(`A: ${A.toFixed(0)}º`, triangleCoords.A[0], triangleCoords.A[1]);
		ctx.fillText(`B: ${B.toFixed(0)}º`, triangleCoords.B[0], triangleCoords.B[1]);
		ctx.fillText(`C: ${C.toFixed(0)}º`, triangleCoords.C[0], triangleCoords.C[1]);

		// Draw side labels
		ctx.fillText(`a: ${a.toFixed(2)}`, sideLabelCoords.a[0], sideLabelCoords.a[1]);
		ctx.fillText(`b: ${b.toFixed(2)}`, sideLabelCoords.b[0], sideLabelCoords.b[1]);
		ctx.fillText(`c: ${c.toFixed(2)}`, sideLabelCoords.c[0], sideLabelCoords.c[1]);

		ctx.textAlign = 'center'; // alignment
		ctx.textBaseline = 'middle';
	};
</script>

<h1>Triangle Calculator</h1>

<div>
	<p>Clicked {clicked}.</p>
	<label>
		Side a:
		<input type="number" bind:value={a} on:change={handleSideChange} />
	</label>

	<label>
		Side b:
		<input type="number" bind:value={b} on:change={handleSideChange} />
	</label>

	<label>
		Side c:
		<input type="number" bind:value={c} on:change={handleSideChange} />
	</label>

	<label>
		Angle A:
		<input type="number" bind:value={A} on:change={handleAngleChange} />
	</label>

	<label>
		Angle B:
		<input type="number" bind:value={B} on:change={handleAngleChange} />
	</label>

	<label>
		Angle C:
		<input type="number" bind:value={C} on:change={handleAngleChange} />
	</label>
</div>

<canvas
	class="canvas"
	bind:this={canvas}
	width={canvasDimensions.width}
	height={canvasDimensions.height}
/>

<style lang="scss">
	.canvas {
		border: 1px solid black;
		background-color: white;
	}
</style>
