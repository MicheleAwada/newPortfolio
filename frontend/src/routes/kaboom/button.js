export default function addButton(txt, p, layer, k) {
	// add a parent background object
	const btn = layer.add([
		k.rect(240, 80, { radius: 8 }),
		k.pos(p),
		k.area(),
		k.scale(1),
		k.anchor("center"),
		k.outline(4, k.color(k.hsl2rgb(0, 0, 0.2))),
	]);

	// add a child object that displays the text
	btn.add([
		k.text(txt, {
			align: "center",
		}),
		k.anchor("center"),
		k.color(k.hsl2rgb(0, 0, 0.2)),
	]);

	// onHoverUpdate() comes from area() component
	// it runs every frame when the object is being hovered
	btn.onHoverUpdate(() => {
		const t = k.time() * 10;
		btn.color = k.hsl2rgb(0, 0, 0.9);
		k.setCursor("pointer");
	});

	// onHoverEnd() comes from area() component
	// it runs once when the object stopped being hovered
	btn.onHoverEnd(() => {
		btn.scale = k.vec2(1);
		btn.color = k.rgb();
	});

	return btn;
}
