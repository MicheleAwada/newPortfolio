import addButton from "./button";
import kaboom from "kaboom";

export default function start_game(canvas_name) {
	const window_width = window.innerWidth;
	const window_height = window.innerHeight;
	const window_min = Math.min(window_width, window_height);
	const is_width_bigger = window_width > window_height;

	const scale_by =
		window_min /
		(is_width_bigger ? 600 : 1000) /
		(is_width_bigger ? 1.1 : 1.025);

	const k = kaboom({
		width: 1000,
		height: 600,
		debug: true,
		global: false,
		background: [135, 206, 235],
		font: "pixelated_font",
		scale: scale_by,
		canvas: document.getElementById(canvas_name),
	});

	k.loadFont("pixelated_font", "/kaboom/fonts/VT323.ttf");

	k.loadRoot("/kaboom/images/");

	//bg
	const day_night_cycle_speed = 0.1;

	k.loadSprite("sky", "bg/sky spritesheet.png", {
		sliceX: 5,
		anims: {
			day_night_cycle: {
				from: 0,
				to: 4,
				pingpong: true,
				loop: true,
				speed: day_night_cycle_speed,
			},
		},
	});
	k.loadSprite("mountains", "bg/mountains spritesheet.png", {
		sliceX: 5,
		anims: {
			day_night_cycle: {
				from: 0,
				to: 4,
				pingpong: true,
				loop: true,
				speed: day_night_cycle_speed,
			},
		},
	});
	k.loadSprite("hills", "bg/hills spritesheet.png", {
		sliceX: 5,
		anims: {
			day_night_cycle: {
				from: 0,
				to: 4,
				pingpong: true,
				loop: true,
				speed: day_night_cycle_speed,
			},
		},
	});
	k.loadSprite("clouds", "bg/clouds spritesheet.png", {
		sliceX: 5,
		anims: {
			day_night_cycle: {
				from: 0,
				to: 4,
				pingpong: true,
				loop: true,
				speed: day_night_cycle_speed,
			},
		},
	});
	k.loadSprite("tree", "bg/tree spritesheet.png", {
		sliceX: 5,
		anims: {
			day_night_cycle: {
				from: 0,
				to: 4,
				pingpong: true,
				loop: true,
				speed: day_night_cycle_speed,
			},
		},
	});

	//player

	const kentucky_animation_speed = 4;

	k.loadSprite("kentucky", "kentucky spritesheet.png", {
		sliceX: 18,
		anims: {
			walk: { from: 0, to: 3, loop: true, speed: kentucky_animation_speed },
			jump_charge: {
				from: 4,
				to: 7,
				loop: true,
				speed: kentucky_animation_speed,
			},
			max_jump_charge: {
				from: 8,
				to: 11,
				loop: true,
				speed: kentucky_animation_speed,
			},
			jump: { from: 0, to: 0, loop: true, speed: kentucky_animation_speed },
			glide: { from: 12, to: 13, loop: true, speed: kentucky_animation_speed },
			eat: { from: 14, to: 14, loop: false, speed: 1 },
			hurt: {
				from: 15,
				to: 17,
				loop: true,
				pingpong: true,
				speed: kentucky_animation_speed,
			},
		},
	});
	k.loadSprite("dead kentucky", "kentucky dead.png");

	const fox_animation_speed = 8;

	k.loadSprite("fox", "fox/fox spritesheet.png", {
		sliceX: 2,
		anims: {
			walk: {
				from: 0,
				to: 1,
				loop: true,
				speed: fox_animation_speed,
			},
		},
	});
	k.loadSprite("redfox", "fox/redfox spritesheet.png", {
		sliceX: 2,
		anims: {
			walk: {
				from: 0,
				to: 1,
				loop: true,
				speed: fox_animation_speed,
			},
		},
	});

	const hawk_animation_speed = 3;

	k.loadSprite("hawk", "hawk/hawk spritesheet.png", {
		sliceX: 2,
		anims: {
			walk: {
				from: 0,
				to: 1,
				loop: true,
				speed: hawk_animation_speed,
			},
		},
	});

	// food
	const worm_animation_speed = 5;

	k.loadSprite("banana", "food/banana.png");
	k.loadSprite("strawberry", "food/strawberry.png");
	k.loadSprite("worm", "food/worm spritesheet.png", {
		sliceX: 2,
		anims: {
			walk: {
				from: 0,
				to: 1,
				loop: true,
				speed: worm_animation_speed,
			},
		},
	});

	//gui

	k.loadSprite("heart", "gui/heart.png");

	const bg = k.add([k.z(0), k.fixed()]);

	const obj = k.add([k.z(100), k.fixed()]);

	const ui = k.add([k.z(200), k.fixed()]);

	const floor_height = 40;
	// TODO when resized // actually maybe not needed
	const floor_y = k.height() - floor_height;

	function move_background(obj_width = k.width(), speed_amplifier = 1) {
		return {
			update() {
				this.move(get_kentucky_speed(speed_amplifier, true), 0);
				if (this.pos.x > Math.min(obj_width, k.width())) {
					this.pos.x -= 4 * obj_width;
				}
			},
		};
	}

	function add_background(sprite_name, speed_amplifier = 1) {
		const images_height = 30;
		const scale_by = scale_for_image(images_height, k.height());
		const image_width = 200;
		const width = 2 * 1000;
		const pre_move_width = -width / 2;
		const bg1 = bg.add([
			k.sprite(sprite_name, { anim: "day_night_cycle" }),
			k.scale(scale_by),
			k.pos(-pre_move_width, 0),
			move_background(width, speed_amplifier),
		]);
		const bg2 = bg.add([
			k.sprite(sprite_name, { anim: "day_night_cycle" }),
			k.scale(scale_by),
			k.pos(-2 * width - pre_move_width, 0),
			move_background(width, speed_amplifier),
		]);
	}

	add_background("sky", 0.1);
	add_background("clouds", 0.2);
	add_background("mountains", 0.5);
	add_background("hills", 0.8);
	add_background("tree", 1);

	const floor = bg.add([
		k.pos(0, floor_y),
		k.rect(k.width(), floor_height),
		k.area(),
		k.color(120, 120, 120),
		k.body({ isStatic: true }),
	]);

	k.setGravity(1000);

	function physics() {
		let acc_y = 0;
		let is_air = false;
		let gliding = false;

		let jump_charge = 0;
		let jump_charge_maxed = false;
		let wait_till_ground = false;

		const base_jump_amplifier = 1.1;
		const base_jump_force_amplifier = 6;
		const base_jump_extra_amplifier = 1.1;
		const jump_charge_max_time = 1;
		const jump_charge_force = 1;
		const jump_charge_extra = 20;

		const base_gravity_amplifier = 60;
		const base_gliding_gravity_amplifier = 10;
		let gravity_amplifier = base_gravity_amplifier;
		return {
			reset_physics() {
				this.stop_glide();
				jump_charge = 0;
				this.dont_wait_till_ground();
				jump_charge_maxed = false;
			},
			update() {
				if (player.dead) {
					if (player.pos.y === floor_y) {
						return;
					}
					this.stop_glide();
					jump_charge = 0;
					this.dont_wait_till_ground();
					jump_charge_maxed = false;
				}
				if (this.pos.y > floor_y) {
					this.pos.y = floor_y;
				} else {
					//on or above ground

					// gravity logic
					const gravity_time = gravity_amplifier * k.dt();

					this.pos.y = Math.min(floor_y, this.pos.y + acc_y * gravity_time);

					// above ground
					if (this.pos.y < floor_y) {
						acc_y += gravity_time;
					} else {
						//on ground
						if (is_air) {
							is_air = false;
							stop_n_animate(this, "walk");
							if (gliding) {
								this.stop_glide();
							}
						}
						if (wait_till_ground) {
							wait_till_ground = false;
							this.glide_or_charge_jump();
						}
					}
				}
				if (jump_charge) {
					this.charge_jump();
				}
			},
			jump(force = Math.floor(jump_charge), extra = jump_charge_extra) {
				if (player.dead) {
					return;
				}
				force *= base_jump_amplifier * base_jump_force_amplifier;
				extra *= base_jump_amplifier * base_jump_extra_amplifier;
				if (this.pos.y === floor_y) {
					acc_y = -(force + extra);
				}
				is_air = true;
				jump_charge = 0;
				jump_charge_maxed = false;

				stop_n_animate(this, "jump");
			},
			glide_or_charge_jump() {
				if (player.dead) {
					return;
				}
				if (!is_air) {
					stop_n_animate(this, "jump_charge");
					this.charge_jump();
				} else {
					wait_till_ground = true;
					gliding = true;
					gravity_amplifier = base_gliding_gravity_amplifier;
					stop_n_animate(this, "glide");
				}
			},
			charge_jump() {
				if (player.dead) {
					return;
				}
				if (this.charged_jump_is_max()) {
					!jump_charge_maxed && stop_n_animate(this, "max_jump_charge");
					jump_charge_maxed = true;
				} else {
					jump_charge += jump_charge_force * k.dt();
				}
				return jump_charge;
			},
			charged_jump_is_max() {
				return jump_charge / jump_charge_force >= jump_charge_max_time;
			},
			dont_wait_till_ground() {
				wait_till_ground = false;
			},
			is_grounded() {
				return !is_air;
			},
			is_normal() {
				return this.is_grounded() && jump_charge === 0 && !player.dead; // TODO && not crouched
			},
			stop_glide() {
				gliding = false;
				gravity_amplifier = base_gravity_amplifier;
				is_air && stop_n_animate(this, "jump");
			},
		};
	}

	const baseHealth = 2;
	const maxHealth = 5;

	function getHealthHearts() {
		let hearts = [];
		for (let i = 0; i < baseHealth; i++) {
			hearts = addHealthHeart(hearts);
		}
		return hearts;
	}

	let hearts = getHealthHearts();

	function addHealthHeart(hearts) {
		const number_of_hearts = hearts.length;

		const base_gapy = 20;
		const base_gapx = 30;

		const gapx = 25;

		const original_heart_size = 9;
		const desired_heart_size = 50;
		const heart_scale_by = scale_for_image(
			original_heart_size,
			desired_heart_size
		);

		hearts.push(
			ui.add([
				k.sprite("heart"),
				"gui",
				"heart",
				"health",
				k.pos(
					number_of_hearts * (desired_heart_size + gapx) + base_gapx,
					base_gapy
				),
				k.scale(heart_scale_by),
			])
		);
		return hearts;
	}

	function removeHealthHeart(hearts) {
		if (hearts.length === 0) {
			return hearts;
		}
		const last_heart = hearts.pop(-1);
		last_heart.destroy();
		return hearts;
	}

	function scale_for_image(base, desired) {
		return desired / base;
	}

	const base_kentucky_image_height = 175;
	const scale_for_kentucky = scale_for_image(base_kentucky_image_height, 875);

	const base_kentucky_speed = 250; //basically just the speed of "static" objects to make kentucky look moving
	let kentucky_speed = base_kentucky_speed; //basically just the speed of "static" objects to make kentucky look moving

	const player = obj.add([
		k.sprite("kentucky", {
			anim: "walk",
		}),
		k.pos(k.width() - 75, floor_y - 200),
		k.area(),
		physics(),
		k.scale(scale_for_kentucky),
		k.anchor("botright"),
		k.health(baseHealth),
		"player",
		"kentucky",
		{
			dir: "LEFT",
			dead: false,
		},
	]);

	function is_player_alive() {
		return !player.dead;
	}

	player.onHeal(() => {
		const maxed = player.hp() > maxHealth;
		if (maxed) {
			player.setHP(maxHealth);
		} else {
			hearts = addHealthHeart(hearts);
			short_animation(player, "eat", "walk", 156, player.is_normal);
		}
	});

	player.onHurt(() => {
		hearts = removeHealthHeart(hearts);
		player.hp() !== 0 &&
			short_animation(player, "hurt", "walk", 1500, player.is_normal);
	});

	player.onDeath(() => {
		player.dead = true;
		player.stop();
		player.use(k.sprite("dead kentucky"));
		clearObjectCreation();
		kentucky_speed = 0;
		default_values();

		const old_high_score = localStorage.getItem("high_score") || 0;
		const is_high_score = score > old_high_score;
		is_high_score && localStorage.setItem("high_score", score);

		const play_again_button = addButton(
			"You Died.\nPlay Again!",
			k.vec2(k.width() / 2, k.height() / 2),
			ui,
			k
		);
		function play_again_button_onClick() {
			k.destroyAll("entity");
			kentucky_speed = base_kentucky_speed;
			play_again_button.destroy();
			player.dead = false;
			player.reset_physics();
			player.use(
				k.sprite("kentucky", {
					anim: "walk",
				})
			);
			player.setHP(baseHealth);
			k.destroyAll("hearts");
			hearts = getHealthHearts();
			resetScore();
			start_obs_creation();
		}

		play_again_button.onClick(play_again_button_onClick);
		play_again_button.onKeyPress("space", play_again_button_onClick);
	});

	player.onCollide("food", (f) => {
		if (player.dead) {
			return;
		}
		f.destroy();
		player.heal();
	});

	player.onCollide("bad", (b) => {
		// TODO remove and make player invisible for short period of time
		if (player.dead) {
			return;
		}
		b.destroy();
		player.hurt();
	});

	function input_press() {
		if (player.dead) {
			return;
		}
		player.glide_or_charge_jump();
	}

	function input_release() {
		if (player.dead) {
			return;
		}
		player.dont_wait_till_ground();
		player.stop_glide();
		player.jump();
	}

	k.onKeyPress("space", input_press);
	k.onKeyRelease("space", input_release);

	k.onTouchStart(input_press);
	k.onTouchEnd(input_release);

	k.onMousePress("left", input_press);
	k.onMouseRelease(input_release);

	function move_obstacle(
		speed = get_kentucky_speed(),
		wiggle = false,
		wiggle_height = 20,
		wiggle_speed = 35,
		base_y = floor_y
	) {
		let wiggle_up = true;
		return {
			update() {
				this.move(speed, 0);
				if (this.pos.x > k.width() + 400) {
					// plus 400 just because of image width so it doesnt go away before it goes offscreen
					this.destroy();
				}
				if (wiggle) {
					const m = wiggle_up ? -wiggle_speed : wiggle_speed;
					this.move(0, m);
					const gap = base_y - this.pos.y;
					if (gap > wiggle_height) {
						wiggle_up = false;
					}
					if (gap <= 0 && !wiggle_up) {
						wiggle_up = true;
					}
				}
			},
		};
	}

	function stop_n_animate(
		obj,
		sprite_animation_name = "walk",
		speed = kentucky_animation_speed
	) {
		// obj.stop();
		return animate(obj, sprite_animation_name, speed);
	}

	function animate(
		obj,
		sprite_animation_name = "walk",
		speed = kentucky_animation_speed
	) {
		if (player.dead) {
			return;
		}
		return obj.play(sprite_animation_name, {
			speed: speed,
		});
	}
	function short_animation(obj, anim1, anim2, duration = 156, condition) {
		if (condition()) {
			stop_n_animate(obj, anim1);
		}
		setTimeout(() => {
			if (condition()) {
				stop_n_animate(obj, anim2);
			}
		}, duration);
	}

	function summonFood(
		sprite_function = () => k.sprite("banana"),
		move_function = () => move_obstacle(get_kentucky_speed(), false)
	) {
		const food = obj.add([
			sprite_function(),
			k.pos(0, floor_y),
			k.anchor("botleft"),
			k.area(),
			k.scale(3.5),
			move_function(),
			"food",
			"good",
			"entity",
			{
				dir: "RIGHT",
			},
		]);
		return food;
	}

	function summonHawk() {
		const hawks_to_rare_hawks = 50;
		const is_rare_hawk = false;

		const base_extra_speed_amplifier = 1.1;
		const max_speed = 700;

		const hawk_height_from_ground = 250;
		const hawk_height = floor_y - hawk_height_from_ground;

		const speed = Math.min(
			get_kentucky_speed(base_extra_speed_amplifier),
			max_speed
		);
		const base_hawk = [
			k.pos(0, hawk_height),
			k.anchor("botright"),
			move_obstacle(speed, true, 50, 60, hawk_height),
			k.area(),
			k.scale(3.5),
			"bad",
			"fox",
			"ground",
			"entity",
			{
				dir: "RIGHT",
				dead: false,
			},
		];

		if (is_rare_hawk) {
		} else {
			return obj.add([
				k.sprite("hawk", { anim: "walk", flipX: true }),
				...base_hawk,
			]);
		}
	}

	function summonFox() {
		const foxes_to_redfoxes = 50;
		const is_red_fox = k.chance(1 / foxes_to_redfoxes);

		const base_extra_speed_amplifier = 1.2;
		const max_speed = 1000;

		const fox_image_height = 25;
		const desired_fox_image_height = 75;
		const scale_by = scale_for_image(
			fox_image_height,
			desired_fox_image_height
		);

		const base_fox = [
			k.pos(0, floor_y),
			k.anchor("botright"),
			move_obstacle(
				Math.min(get_kentucky_speed(base_extra_speed_amplifier), max_speed)
			),
			k.area(),
			k.scale(scale_by),
			"bad",
			"fox",
			"ground",
			"entity",
			{
				dir: "RIGHT",
				dead: false,
			},
		];

		if (is_red_fox) {
			return obj.add([
				k.sprite("redfox", { anim: "walk" }),
				"redfox",
				"rare",
				...base_fox,
			]);
		} else {
			return obj.add([k.sprite("fox", { anim: "walk" }), ...base_fox]);
		}
	}

	let high_score = localStorage.getItem("high_score") || 0;
	let score = 0;

	function scoreToText(scoreVal, high_score = false) {
		return (high_score ? "High Score" : "Score") + ": " + scoreVal;
	}

	const scoreLabelPaddingX = 40;
	const scoreLabelPaddingY = 25;
	const scoreLabel = ui.add([
		k.text(scoreToText(score)),
		k.pos(k.width() - scoreLabelPaddingX, scoreLabelPaddingY),
		k.anchor("topright"),
		{
			value: score,
		},
	]);
	const high_scoreLabelPaddingX = 40;
	const high_scoreLabelPaddingY = 25;
	const high_scoreLabel = ui.add([
		k.text(scoreToText(high_score, true)),
		k.pos(k.width() - high_scoreLabelPaddingX - 200, high_scoreLabelPaddingY),
		k.anchor("topright"),
		{
			value: high_score,
		},
	]);

	function addToScore(multiplier = 1) {
		if (score > high_score) {
			high_scoreLabel.value = score;
			high_scoreLabel.text = scoreToText(high_scoreLabel.value, true);
		}
		scoreLabel.value += multiplier;
		scoreLabel.text = scoreToText(scoreLabel.value);
	}

	function resetScore() {
		scoreLabel.value = score = 0;
		scoreLabel.text = scoreToText(scoreLabel.value);
	}

	function get_kentucky_speed(amplifier = 1, none_if_dead = false) {
		if (none_if_dead && player.dead) {
			return 0;
		}
		const kentucky_slow_rate = 100;
		const kentucky_max_speed = 950;
		return (
			Math.min(
				kentucky_max_speed,
				kentucky_speed + kentucky_speed * (score / 10 / kentucky_slow_rate)
			) * amplifier
		);
	}

	let add_food_every;
	let skip_food;

	const change_food_dur_max = 580;
	const change_food_dur_add = 12;
	const change_food_change_max = 400;

	let add_bad_every; //meaning how often a obs is created, every x/10 s loops so 50 is 5 seconds
	let skip_bad;

	const change_bad_change_max = 256;
	const change_bad_dur_min = 12;
	const change_bad_dur_add = 2;

	const loop_animate = 5;

	const food = [
		() => summonFood(() => k.sprite("banana")),
		() => summonFood(() => k.sprite("strawberry")),
		() =>
			summonFood(
				() => k.sprite("worm", { anim: "walk" }),
				() => move_obstacle(get_kentucky_speed(1.3))
			),
	];

	function default_values() {
		add_food_every = 100;
		skip_food = 0;
		add_bad_every = 34; //meaning how often a obs is created, in this case every 50 loops so every 5 seconds
		skip_bad = 1;
	}
	default_values();

	function obs_loop() {
		if (!k.isFocused()) {
			return;
		}
		if (score % add_bad_every === 0) {
			if (skip_bad) {
				skip_bad--;
			} else {
				// making duration less as you play more to summon foxes
				if (
					score %
						Math.min(change_bad_change_max, add_bad_every * add_bad_every) ===
					0
				) {
					add_bad_every = Math.max(
						add_bad_every + change_bad_dur_add,
						change_bad_dur_min
					);
					skip_bad = k.choose([1, 1, 1, 1, 2, 2, 3]);
				}

				if (score > 80) {
					k.choose([summonFox, summonHawk])();
				} else {
					summonFox();
				}
			}
		}
		if (score % add_food_every === 0) {
			if (skip_food) {
				skip_food--;
			} else {
				// making duration less as you play more to summon foxes
				if (
					score %
						Math.min(
							change_food_change_max,
							add_food_every * add_food_every
						) ===
					0
				) {
					add_food_every = Math.min(
						add_food_every + change_food_dur_add,
						change_food_dur_max
					);
					skip_food = k.choose([1, 1, 2, 2, 3]);
				}

				k.choose(food)();
			}
		}
		score++;
		addToScore();
	}

	let obs_creation_interval;
	function start_obs_creation() {
		obs_creation_interval = setInterval(obs_loop, 100);
	}
	start_obs_creation();

	function clearObjectCreation() {
		return clearInterval(obs_creation_interval);
	}
	return function stop_game() {
		// i dont think i need to do anything
	};
}
