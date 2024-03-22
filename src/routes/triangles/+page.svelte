<script lang="ts">
	import { onMount } from 'svelte';

	const degToRad = (deg: number): number => deg * (Math.PI / 180);

	// TEMP
	$: A = 50;
	$: B = 70;
	$: C = 180 - A - B;
	const a: number = 1.0;

	$: triangle = {
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

	$: triangleDimensions = {
		height: Math.sin(triangle.angles.B) * triangle.sides.c,
		width: Math.max(
			...Object.values({
				a: triangle.sides.a,
				b: Math.cos(triangle.angles.C) * triangle.sides.b,
				c: Math.cos(triangle.angles.B) * triangle.sides.c
			})
		)
	};

	$: triangleScale = Math.min(
		(canvasDimensions.height * 0.8) / triangleDimensions.height,
		(canvasDimensions.width * 0.8) / triangleDimensions.width
	);

	$: scaledTriangle = {
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

	$: scaledTriangleDimensions = {
		height: triangleDimensions.height * triangleScale,
		width: triangleDimensions.width * triangleScale
	};

	$: padding = {
		horizontal: (canvasDimensions.width - scaledTriangleDimensions.width) / 2,
		vertical: (canvasDimensions.height - scaledTriangleDimensions.height) / 2
	};

	$: triangleOrigin = [padding.horizontal, padding.vertical];

	$: triangleCoords = {
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

	$: sideLabelCoords = {
		a: [
			triangleCoords.B[0] + (triangleCoords.C[0] - triangleCoords.B[0]) / 2,
			triangleCoords.B[1] + 30
		],
		b: [
			triangleCoords.A[0] + (triangleCoords.C[0] - triangleCoords.A[0]) / 2 + 70,
			triangleCoords.A[1] + (triangleCoords.C[1] - triangleCoords.A[1]) / 2
		],
		c: [
			triangleCoords.A[0] + (triangleCoords.B[0] - triangleCoords.A[0]) / 2 - 50,
			triangleCoords.A[1] + (triangleCoords.B[1] - triangleCoords.A[1]) / 2
		]
	};

	let canvas: HTMLCanvasElement;
	let ctx;

	onMount(() => {
		ctx = canvas.getContext('2d');
		drawTriangle();
	});

	const handleAngleChange = () => {
		drawTriangle();
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
		ctx.fillText(`A: ${A.toFixed(0)}º`, triangleCoords.A[0], triangleCoords.A[1] - 30);
		ctx.fillText(`B: ${B.toFixed(0)}º`, triangleCoords.B[0], triangleCoords.B[1] + 30);
		ctx.fillText(`C: ${C.toFixed(0)}º`, triangleCoords.C[0], triangleCoords.C[1] + 30);

		// Draw side labels
		ctx.fillText(`a: ${triangle.sides.a.toFixed(2)}`, sideLabelCoords.a[0], sideLabelCoords.a[1]);
		ctx.fillText(`b: ${triangle.sides.b.toFixed(2)}`, sideLabelCoords.b[0], sideLabelCoords.b[1]);
		ctx.fillText(`c: ${triangle.sides.c.toFixed(2)}`, sideLabelCoords.c[0], sideLabelCoords.c[1]);

		ctx.textAlign = 'center'; // alignment
		ctx.textBaseline = 'middle';
	};
</script>

<h1>Triangle Calculator</h1>

<div class="controls">
	<label for="A">A</label>
	<input
		type="range"
		name="A"
		min="1"
		max={180 - B}
		bind:value={A}
		on:input={handleAngleChange}
	/><span>{A}º</span>
	<label for="B">B</label>
	<input
		type="range"
		name="B"
		min="1"
		max={180 - A}
		bind:value={B}
		on:input={handleAngleChange}
	/><span>{B}º</span>
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
