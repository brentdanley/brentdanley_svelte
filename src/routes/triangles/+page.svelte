<script lang="ts">
	/**
	 * This is a simple Svelte component that calculates the angles of a triangle
	 * given the lengths of its sides, or the lengths of its sides given the angles.
	 *
	 * It also draws a triangle on a canvas.
	 *
	 * When the user changes a side or angle, determine if there's enough information to draw a triangle. In addition to calculating sides and angles, calculate the canvas points for each corner of the triangle.
	 * 1. Calculate the sides
	 * 2. Get scale factor
	 * 3. Set new triangle side values
	 * 4. Calculate height and width of triangle
	 * 5. Calculate triangle origin
	 * 6. Calculate triangle coordinates
	 */
	import { onMount } from 'svelte';

	const degToRad = (deg: number): number => deg * (Math.PI / 180);

	// TEMP
	let A: number = 96;
	let B: number = 70;
	let C: number = 180 - A - B;
	let a: number = 3.32;
	if (C < 0) {
		console.error('Invalid triangle');
		throw new Error('Invalid triangle');
	}

	type Triangle = {
		sides: {
			a: number;
			b: number;
			c: number;
		};
		angles: {
			A: number;
			B: number;
			C: number;
		};
	};

	const triangle: Triangle = {
		angles: {
			A: degToRad(A),
			B: degToRad(B),
			C: degToRad(180 - A - B)
		},
		sides: {
			a: a,
			b: (a / Math.sin(degToRad(A))) * Math.sin(degToRad(B)),
			c: (a / Math.sin(degToRad(A))) * Math.sin(degToRad(C))
		}
	};

	const canvasDimensions = { width: 800, height: 800 };

	const triangleDimensions = {
		height: Math.sin(triangle.angles.B) * triangle.sides.c,
		width: Math.max(
			...Object.values({
				a: triangle.sides.a,
				b: Math.cos(triangle.angles.C) * triangle.sides.b,
				c: Math.cos(triangle.angles.B) * triangle.sides.c
			})
		)
	};

	const triangleScale = Math.min(
		(canvasDimensions.height * 0.8) / triangleDimensions.height,
		(canvasDimensions.width * 0.8) / triangleDimensions.width
	);

	const scaledTriangle = {
		sides: {
			a: triangle.sides.a * triangleScale,
			b: triangle.sides.b * triangleScale,
			c: triangle.sides.c * triangleScale
		},
		angles: {
			A: triangle.angles.A,
			B: triangle.angles.B,
			C: triangle.angles.C
		}
	};

	const scaledTriangleDimensions = {
		height: triangleDimensions.height * triangleScale,
		width: triangleDimensions.width * triangleScale
	};

	const padding = {
		horizontal: (canvasDimensions.width - scaledTriangleDimensions.width) / 2,
		vertical: (canvasDimensions.height - scaledTriangleDimensions.height) / 2
	};

	// Triangle origin is the B angle at top left
	const triangleOrigin = [padding.horizontal, padding.vertical];

	// Draw the triangle, beginning with B, then C, finally A with B at the bottom left, C at the bottom right, and A at the top.
	const triangleCoords = {
		A: [
			scaledTriangle.angles.B >= Math.PI / 2
				? triangleOrigin[0]
				: triangleOrigin[0] + Math.cos(scaledTriangle.angles.B) * scaledTriangle.sides.c,
			triangleOrigin[1]
		],
		B: [
			scaledTriangle.angles.B >= Math.PI / 2
				? triangleOrigin[0] + scaledTriangleDimensions.width - scaledTriangle.sides.a
				: triangleOrigin[0],
			triangleOrigin[1] + scaledTriangleDimensions.height
		],
		C: [
			scaledTriangle.angles.B >= Math.PI / 2
				? triangleOrigin[0] + scaledTriangleDimensions.width
				: triangleOrigin[0] + scaledTriangle.sides.a,
			triangleOrigin[1] + scaledTriangleDimensions.height
		]
	};

	let sideLabelCoords: { a: [number, number]; b: [number, number]; c: [number, number] } = {
		a: [
			triangleCoords.B[0] + (triangleCoords.C[0] - triangleCoords.B[0]) / 2,
			triangleCoords.B[1] + 30
		],
		b: [
			triangleCoords.A[0] + (triangleCoords.C[0] - triangleCoords.A[0]) / 2 + 30,
			triangleCoords.A[1] + (triangleCoords.C[1] - triangleCoords.A[1]) / 2
		],
		c: [
			triangleCoords.A[0] + (triangleCoords.B[0] - triangleCoords.A[0]) / 2 - 80,
			triangleCoords.A[1] + (triangleCoords.B[1] - triangleCoords.A[1]) / 2
		]
	};

	let clicked: number = 0;

	let canvas: HTMLCanvasElement;

	let ctx;

	onMount(() => {
		ctx = canvas.getContext('2d');
		drawTriangle();
	});

	$: {
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
			triangle.angles.A = degToRad(value);
		} else if (target.name === 'B') {
			B = value;
		} else if (target.name === 'C') {
			C = value;
		}
	};

	const drawTriangle = () => {
		ctx.strokeStyle = 'blue';
		ctx.lineWidth = 5;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.moveTo(triangleCoords.A[0], triangleCoords.A[1]);
		ctx.lineTo(triangleCoords.B[0], triangleCoords.B[1]);
		ctx.lineTo(triangleCoords.C[0], triangleCoords.C[1]);
		ctx.closePath();
		ctx.fillStyle = 'rgba(0, 0, 255, 0.3)';
		ctx.fill();
		ctx.stroke();

		ctx.font = '18px Arial black';
		ctx.lineWidth = 2;
		ctx.fillStyle = 'black';
		// Draw angle labels
		ctx.fillText(`A: ${A.toFixed(0)}º`, triangleCoords.A[0], triangleCoords.A[1]);
		ctx.fillText(`B: ${B.toFixed(0)}º`, triangleCoords.B[0], triangleCoords.B[1]);
		ctx.fillText(`C: ${C.toFixed(0)}º`, triangleCoords.C[0], triangleCoords.C[1]);

		// Draw side labels
		ctx.fillText(`a: ${triangle.sides.a.toFixed(2)}`, sideLabelCoords.a[0], sideLabelCoords.a[1]);
		ctx.fillText(`b: ${triangle.sides.b.toFixed(2)}`, sideLabelCoords.b[0], sideLabelCoords.b[1]);
		ctx.fillText(`c: ${triangle.sides.c.toFixed(2)}`, sideLabelCoords.c[0], sideLabelCoords.c[1]);

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

	<!-- <label>
		Side b:
		<input type="number" bind:value={b} on:change={handleSideChange} />
	</label>

	<label>
		Side c:
		<input type="number" bind:value={c} on:change={handleSideChange} />
	</label> -->

	<label>
		Angle A:
		<input type="range" min="0" max="180" step="1" bind:value={A} on:change={handleAngleChange} />
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
