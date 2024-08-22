export const BEDWARS = {
	TITLE : 'Bed Wars',
	EASY_XP: [500, 1000, 2000, 3500],
	NORMAL_XP: 5000,
	PRESTIGES: [
		{level: 0, colormap: '7', color: 'gray', name: 'None'},
		{level: 100, colormap: 'f', color: 'white', name: 'Iron'},
		{level: 200, colormap: '6', color: 'gold', name: 'Gold'},
		{level: 300, colormap: 'b', color: 'aqua', name: 'Diamond'},
		{level: 400, colormap: '2', color: 'darkgreen', name: 'Emerald'},
		{level: 500, colormap: '3', color: 'darkaqua', name: 'Sapphire'},
		{level: 600, colormap: '4', color: 'darkred', name: 'Ruby'},
		{level: 700, colormap: 'd', color: 'pink', name: 'Crystal'},
		{level: 800, colormap: '9', color: 'blue', name: 'Opal'},
		{level: 900, colormap: '5', color: 'purple', name: 'Amethyst'},
		{level: 1000, colormap: 'c6eabd5', color: 'rainbow', name: 'Rainbow'},
		{level: 1100, colormap: '7ffff77', color: 'white', name: 'Iron Prime'},
		{level: 1200, colormap: '7eeee67', color: 'yellow', name: 'Gold Prime'},
		{level: 1300, colormap: '7bbbb37', color: 'aqua', name: 'Diamond Prime'},
		{level: 1400, colormap: '7aaaa27', color: 'green', name: 'Emerald Prime'},
		{level: 1500, colormap: '7333397', color: 'darkaqua', name: 'Sapphire Prime'},
		{level: 1600, colormap: '7cccc47', color: 'red', name: 'Ruby Prime'},
		{level: 1700, colormap: '7dddd57', color: 'pink', name: 'Crystal Prime'},
		{level: 1800, colormap: '7999917', color: 'blue', name: 'Opal Prime'},
		{level: 1900, colormap: '7555587', color: 'purple', name: 'Amethyst Prime'},
		{level: 2000, colormap: '87ff778', color: 'white', name: 'Mirror'},
		{level: 2100, colormap: 'ffee666', color: 'yellow', name: 'Light'},
		{level: 2200, colormap: '66ffb33', color: 'aqua', name: 'Dawn'},
		{level: 2300, colormap: '55dd6ee', color: 'purple', name: 'Dusk'},
		{level: 2400, colormap: 'bbff778', color: 'white', name: 'Air'},
		{level: 2500, colormap: 'ffaa222', color: 'green', name: 'Wind'},
		{level: 2600, colormap: '44ccdd5', color: 'darkred', name: 'Nebula'},
		{level: 2700, colormap: 'eeff777', color: 'yellow', name: 'Thunder'},
		{level: 2800, colormap: 'aa2266e', color: 'darkgreen', name: 'Earth'},
		{level: 2900, colormap: 'bb33991', color: 'blue', name: 'Water'},
		{level: 3000, colormap: 'ee66cc4', color: 'red', name: 'Fire'},
		{level: 3100, colormap: '993366e', color: 'blue', name: '3100'},
		{level: 3200, colormap: 'c4774cc', color: 'darkred', name: '3200'},
		{level: 3300, colormap: '999dcc4', color: 'blue', name: '3300'},
		{level: 3400, colormap: '2add552', color: 'green', name: '3400'},
		{level: 3500, colormap: 'cc442aa', color: 'red', name: '3500'},
		{level: 3600, colormap: 'aaab991', color: 'green', name: '3600'},
		{level: 3700, colormap: '44ccb33', color: 'darkred', name: '3700'},
		{level: 3800, colormap: '11955d1', color: 'darkblue', name: '3800'},
		{level: 3900, colormap: 'ccaa399', color: 'red', name: '3900'},
		{level: 4000, colormap: '55cc66e', color: 'purple', name: '4000'},
		{level: 4100, colormap: 'ee6cdd5', color: 'yellow', name: '4100'},
		{level: 4200, colormap: '193bf77', color: 'blue', name: '4200'},
		{level: 4300, colormap: '0588550', color: 'purple', name: '4300'},
		{level: 4400, colormap: '22ae65d', color: 'darkgreen', name: '4400'},
		{level: 4500, colormap: 'ffbb333', color: 'white', name: '4500'},
		{level: 4600, colormap: '3bee6d5', color: 'aqua', name: '4600'},
		{level: 4700, colormap: 'f4cc919', color: 'darkred', name: '4700'},
		{level: 4800, colormap: '55c6eb3', color: 'purple', name: '4800'},
		{level: 4900, colormap: '2affaa2', color: 'green', name: '4900'},
		{level: 5000, colormap: '4459910', color: 'darkred', name: '5000'},
	],
	PRESTIGE_ICONS: [
		{level: 0, symbol: '✫'},
		{level: 1100, symbol: '✪'},
		{level: 2100, symbol: '⚝'},
		{level: 3100, symbol: '✥'},
	],
	MODES : [
		{id: 'eight_one_', name: 'Solo'},
		{id: 'eight_two_', name: 'Doubles'},
		{id: 'four_three_', name: '3v3v3v3'},
		{id: 'four_four_', name: '4v4v4v4'},
		{id: 'two_four_', name: '4v4'},
		{id: 'eight_one_rush_', name: 'Rush Solo'},
		{id: 'eight_two_rush_', name: 'Rush Doubles'},
		{id: 'four_four_rush_', name: 'Rush 4v4v4v4'},
		{id: 'eight_one_ultimate_', name: 'Ultimate Solo'},
		{id: 'eight_two_ultimate_', name: 'Ultimate Doubles'},
		{id: 'four_four_ultimate_', name: 'Ultimate 4v4v4v4'},
		{id: 'eight_two_lucky_', name: 'Lucky Doubles'},
		{id: 'four_four_lucky_', name: 'Lucky 4v4v4v4'},
		{id: 'eight_two_voidless_', name: 'Voidless Doubles'},
		{id: 'four_four_voidless_', name: 'Voidless 4v4v4v4'},
		{id: 'eight_two_armed_', name: 'Armed Doubles'},
		{id: 'four_four_armed_', name: 'Armed 4v4v4v4'},
		{id: 'eight_two_swap_', name: 'Swappage Doubles'},
		{id: 'four_four_swap_', name: 'Swappage 4v4v4v4'},
		{id: 'eight_two_underworld_', name: 'Underworld Doubles'},
		{id: 'four_four_underworld_', name: 'Underworld 4v4v4v4'},
		{id: 'castle_', name: 'Castle'},
		{id: '', name: 'Overall'},
	],
	PRACTICEMODES: [
		{id: 'bridging', name: 'Bridging'},
		{id: 'mlg', name: 'MLG'},
		{id: 'fireball_jumping', name: 'Fireball/TNT Jumping'},
	],
	PRACTICEBRIDGING: {
		bridging_distance: [30, 50, 100],
		elevation: [
			{id: 'NONE', name: 'Flat'}, 
			{id: 'SLIGHT', name: 'Inclined'}, 
			{id: 'STAIRCASE', name: 'Stairs'},
		],
		angle: [
			{id: 'STRAIGHT', name: 'Straight'},
			{id: 'DIAGONAL', name: 'Diagonal'},
		],
	},
	SLUMBER_WALLETS: {
		'MINI_WALLET': 25,
		'LIGHT_SLUMBERS_WALLET': 99,
		'LIGHT_IMPERIAL_WALLET': 500,
		'EXPLORERS_WALLET': 5000,
		'HOTEL_STAFF_WALLET': 10000,
		'PLATINUM_MEMBERSHIP_WALLET': 100000,
	},
	SLUMBER_ROOMS: [
		{id: 'room_1', name: 'Throne Door'},
		{id: 'room_2', name: 'Hotel Door'},
		{id: 'room_3', name: 'Desert Door'},
		{id: 'room_4', name: 'Electronic Door'},
		{id: 'room_5', name: 'Door from the Sky'},
		{id: 'room_6', name: 'Door as seen on TV'},
		{id: 'room_7', name: 'Skyscraper Door'},
		{id: 'room_8', name: 'Arcade Door'},
		{id: 'room_9', name: 'Intricate Door'},
		{id: 'room_10', name: 'Space Door'},
		{id: 'room_11', name: 'D\xa0\xa0\xa0o\xa0\xa00\xa0\xa0\xa0\xa0\xa0\xa0r'},
		{id: 'room_12', name: 'Garage Door'},
		{id: 'owners_office', name: 'Owner\'s Office'},
	],
	WINSTREAK_SUFFIX: 'winstreak',
};