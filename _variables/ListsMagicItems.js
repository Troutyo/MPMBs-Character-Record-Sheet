var TreasureCheckpointsTable = {
	A : { tier : 1, points : 8 },
	B : { tier : 1, points : 8 },
	C : { tier : 1, points : 8 },
	D : { tier : 2, points : 16 },
	E : { tier : 3, points : 16 },
	F : { tier : 1, points : 16 },
	G : { tier : 2, points : 20 },
	H : { tier : 3, points : 20 },
	I : { tier : 3, points : 24 }
}

var Base_MagicItemsList = {
	"adamantine armor" : {
		name : "Adamantine Armor",
		nameTest : "Adamantine",
		source : [["SRD", 207], ["D", 150]],
		type : "armor (medium, or heavy)",
		rarity : "uncommon",
		description : "This armor is reinforced with adamantine, one of the hardest substances in existence. While I'm wearing it, any critical hit against me becomes a normal hit.",
		descriptionFull : "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
		allowDuplicates : true,
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "suffix",
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
			}
		}
	},
	"ammunition, +1, +2, or +3" : {
		name : "Ammunition, +1, +2, or +3",
		source : [["SRD", 207], ["D", 150]],
		type : "weapon (any ammunition)",
		rarity : "varies",
		description : "I have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the magic item: uncommon (+1), rare (+2), or very rare (+3). Once it hits a target, the ammunition is no longer magical. Select the bonus using the little square button in this magic item line.",
		descriptionFull : "You have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition: uncommon (+1), rare (+2), or very rare (+3). Once it hits a target, the ammunition is no longer magical.",
		allowDuplicates : true,
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "ammunition"]
		},
		choices : ["+1 Ammunition (uncommon)", "+2 Ammunition (rare)", "+3 Ammunition (very rare)"],
		"+1 ammunition (uncommon)" : {
			name : "Ammunition +1",
			nameTest : "+1 Ammunition",
			rarity : "uncommon",
			magicItemTable : "B",
			description : "I have a +1 bonus to attack and damage rolls made with this magic ammunition. Once it hits a target, the ammunition is no longer magical.",
			allowDuplicates : true
		},
		"+2 ammunition (rare)" : {
			name : "Ammunition +2",
			nameTest : "+2 Ammunition",
			rarity : "rare",
			magicItemTable : "C",
			description : "I have a +2 bonus to attack and damage rolls made with this magic ammunition. Once it hits a target, the ammunition is no longer magical.",
			allowDuplicates : true
		},
		"+3 ammunition (very rare)" : {
			name : "Ammunition +3",
			nameTest : "+3 Ammunition",
			rarity : "very rare",
			magicItemTable : "D",
			description : "I have a +3 bonus to attack and damage rolls made with this magic ammunition. Once it hits a target, the ammunition is no longer magical.",
			allowDuplicates : true
		}
	},
	"amulet of health" : {
		name : "Amulet of Health",
		source : [["SRD", 207], ["D", 150]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "My Constitution score is 19 while I'm wearing this amulet, provided that my Constitution is not already 19 or higher.",
		descriptionFull : "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution score is already 19 or higher without it.",
		attunement : true,
		weight : 1,
		scoresOverride : [0, 0, 19, 0, 0, 0]
	},
	"armor, +1, +2, or +3" : {
		name : "Armor, +1, +2, or +3",
		source : [["SRD", 208], ["D", 152]],
		type : "armor (light, medium, or heavy)",
		rarity : "varies",
		description : "I have a bonus to AC while wearing this armor. The bonus is determined by the rarity of the magic item: rare (+1), very rare (+2), or legendary (+3). Select the bonus using the little square button in this magic item line.",
		descriptionFull : "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity: rare (+1), very rare (+2), or legendary (+3).\n\nThere are several magic item tables in the Dungeon Masters Guide where this item appears on. It varies per type of armor and magic bonus, with not all types of combinations listed. See below for the table per type of armor and bonus:\n\n" + toUni("Table\tBonus\tArmor Types") + "\n  G\t  +1\tChain Mail, Chain Shirt, Leather, Scale Mail\n  H\t  +1\tBreastplate, Splint, Studded Leather\n  H\t  +2\tChain Mail, Chain Shirt, Leather, Scale Mail\n  I\t  +1\tHalf Plate, Plate, Scale Mail\n  I\t  +2\tBreastplate, Half Plate, Plate, Scale Mail, Splint, Studded Leather\n  I\t  +3\tBreastplate, Chain Mail, Chain Shirt, Half Plate\n  I\t  +3\tLeather, Plate, Splint, Studded Leather",
		allowDuplicates : true,
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			descriptionChange : ["prefix", "armor"]
		},
		choices : ["+1 AC bonus (rare)", "+2 AC bonus (very rare)", "+3 AC bonus (legendary)"],
		"+1 ac bonus (rare)" : {
			name : "Armor +1",
			nameTest : "+1 Armor",
			rarity : "rare",
			description : "I have a +1 bonus to AC while wearing this armor.",
			allowDuplicates : true
		},
		"+2 ac bonus (very rare)" : {
			name : "Armor +2",
			nameTest : "+2 Armor",
			rarity : "very rare",
			description : "I have a +2 bonus to AC while wearing this armor.",
			allowDuplicates : true
		},
		"+3 ac bonus (legendary)" : {
			name : "Armor +3",
			nameTest : "+3 Armor",
			rarity : "legendary",
			description : "I have a +3 bonus to AC while wearing this armor.",
			allowDuplicates : true
		}
	},
	"armor of resistance" : {
		name : "Armor of Resistance",
		source : [["SRD", 208], ["D", 152]],
		type : "armor (light, medium, or heavy)",
		rarity : "rare",
		description : "Select the damage type that this armor gives resistance to using the square button in this line. While I'm wearing this armor and attuned to it, I gain resistance to one type of damage.",
		descriptionFull : "You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly from the options below:\n\n" + toUni("d10\tType\t\td10\tType") + "\n 1\tAcid\t\t 6\tNecrotic\n 2\tCold\t\t 7\tPoison\n 3\tFire\t\t 8\tPsychic\n 4\tForce\t\t 9\tRadiant\n 5\tLightning\t\t 10\tThunder\n\nThere are several magic item tables in the Dungeon Masters Guide where this item appears on. It varies per type of armor, and not all types of armor are listed. See below for the table per type of armor or resistance:\n\n" + toUni("Table\tArmor") + "\n G\tChain Mail\n G\tChain Shirt\n G\tLeather\n G\tScale Mail\n H\tBreastplate\n H\tSplint\n H\tStudded Leather\n I\tHalf Plate\n I\tPlate",
		attunement : true,
		allowDuplicates : true,
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix"
		},
		choices : ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
		"acid" : {
			name : "Armor of Acid Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to acid damage.",
			dmgres : ["Acid"]
		},
		"cold" : {
			name : "Armor of Cold Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to cold damage.",
			dmgres : ["Cold"]
		},
		"fire" : {
			name : "Armor of Fire Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to fire damage.",
			dmgres : ["Fire"]
		},
		"force" : {
			name : "Armor of Force Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to force damage.",
			dmgres : ["Force"]
		},
		"lightning" : {
			name : "Armor of Lightning Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to lightning damage.",
			dmgres : ["Lightning"]
		},
		"necrotic" : {
			name : "Armor of Necrotic Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to necrotic damage.",
			dmgres : ["Necrotic"]
		},
		"poison" : {
			name : "Armor of Poison Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to poison damage.",
			dmgres : ["Poison"]
		},
		"psychic" : {
			name : "Armor of Psychic Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to psychic damage.",
			dmgres : ["Psychic"]
		},
		"radiant" : {
			name : "Armor of Radiant Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to radiant damage.",
			dmgres : ["Radiant"]
		},
		"thunder" : {
			name : "Armor of Thunder Resistance",
			description : "While I'm wearing this armor and I'm attuned to it, I have resistance to thunder damage.",
			dmgres : ["Thunder"]
		}
	},
	"arrow of slaying" : {
		name : "Arro\u200Aw of Slaying",
		nameTest : "of Slaying",
		source : [["SRD", 209], ["D", 152]],
		type : "weapon (any ammunition)",
		rarity : "very rare",
		magicItemTable : "E",
		description : "This magic ammunition is meant to hurt a particular race, type, or group of creatures. Its specificity varies. If an associated target is hit by this ammunition, it takes +6d10 piercing damage. It can then make a DC 17 Con save to half this extra damage. After dealing its extra damage, the ammunition becomes nonmagical.",
		descriptionFull : "An arrow of slaying is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both arrows of dragon slaying and arrows of blue dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.\n   Once an arrow of slaying deals its extra damage to a creature, it becomes a nonmagical arrow.\n   Other types of magic ammunition of this kind exist, such as bolts of slaying meant for a crossbow, though arrows are most common.",
		allowDuplicates : true,
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "ammunition"]
		}
	},
	"belt of giant strength" : {
		name : "Belt of Giant Strength",
		source : [["SRD", 211], ["D", 155]],
		type : "wondrous item",
		rarity : "varies",
		description : "Set the type of giant using the button in this line. While wearing this belt, my Strength score changes to a certain number depending on the type of giant the belt is associated with, provided that my Strength is not already that amount or higher.",
		descriptionFull : "While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt’s score, the item has no effect on you. Six varieties of this belt exist, corresponding with and having rarity according to the six kinds of true giants. The belt of stone giant strength and the belt of frost giant strength look different, but they have the same effect.\n\n" + toUni("Type") + "\t\t" + toUni("Str") + "\t" + toUni("Rarity") + "\nHill giant\t\t21\tRare\nStone/frost giant\t23\tVery rare\nFire giant\t\t25\tVery rare\nCloud giant\t27\tLegendary\nStorm giant\t29\tLegendary",
		attunement : true,
		allowDuplicates : true,
		choices : ["Hill (Str 21, rare)", "Stone (Str 23, very rare)", "Frost (Str 23, very rare)", "Fire (Str 25, very rare)", "Cloud (Str 27, legendary)", "Storm (Str 29, legendary)"],
		"hill (str 21, rare)" : {
			name : "Belt of Hill Giant Strength",
			rarity : "rare",
			magicItemTable : "G",
			description : "My Strength score is 21 while I'm wearing this belt, provided that my Strength is not already 21 or higher.",
			scoresOverride : [21, 0, 0, 0, 0, 0]
		},
		"stone (str 23, very rare)" : {
			name : "Belt of Stone Giant Strength",
			rarity : "very rare",
			magicItemTable : "H",
			description : "My Strength score is 23 while I'm wearing this belt, provided that my Strength is not already 23 or higher.",
			scoresOverride : [23, 0, 0, 0, 0, 0]
		},
		"frost (str 23, very rare)" : {
			name : "Belt of Frost Giant Strength",
			rarity : "very rare",
			magicItemTable : "H",
			description : "My Strength score is 23 while I'm wearing this belt, provided that my Strength is not already 23 or higher.",
			scoresOverride : [23, 0, 0, 0, 0, 0]
		},
		"fire (str 25, very rare)" : {
			name : "Belt of Fire Giant Strength",
			rarity : "very rare",
			magicItemTable : "H",
			description : "My Strength score is 25 while I'm wearing this belt, provided that my Strength is not already 25 or higher.",
			scoresOverride : [25, 0, 0, 0, 0, 0]
		},
		"cloud (str 27, legendary)" : {
			name : "Belt of Cloud Giant Strength",
			rarity : "legendary",
			magicItemTable : "I",
			description : "My Strength score is 27 while I'm wearing this belt, provided that my Strength is not already 27 or higher.",
			scoresOverride : [27, 0, 0, 0, 0, 0]
		},
		"storm (str 29, legendary)" : {
			name : "Belt of Storm Giant Strength",
			rarity : "legendary",
			magicItemTable : "I",
			description : "My Strength score is 29 while I'm wearing this belt, provided that my Strength is not already 29 or higher.",
			scoresOverride : [29, 0, 0, 0, 0, 0]
		}
	},
	"berserker axe" : {
		name : "Berserker Axe",
		nameTest : "Berserker",
		source : [["SRD", 211], ["D", 155]],
		type : "weapon (any axe)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This axe gives +1 to hit and damage, +1 HP per level, and is cursed. I can't part with it and have disadv. using other weapons. Whenever I'm damaged by a hostile, I must make a DC 15 Wis save or go berserk, using my action each round to attack the closest creature with the axe until none remain within 60 ft.",
		descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.\n   " + toUni("Curse") + ". This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.\n   Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "axe"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /axe/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/axe/i).test(v.baseWeaponName) && (/berserker/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
					}
				},
				'If I include the word "Berserker" in a the name of an axe, it will be treated as the magic weapon Berserker Axe. It has +1 to hit and damage, but also bears a curse.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/axe/i).test(v.baseWeaponName) && (/berserker/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			],
			hp : "extrahp += Number(What('Character Level')); extrastring += '\\n + ' + What('Character Level') + ' from Berserker Axe (magic item)'; "
		}
	},
	"boots of elvenkind" : { // contributed by AelarTheElfRogue
		name : "Boots of Elvenkind",
		source : [["SRD", 212], ["D", 155]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "While I wear these boots, my steps make no sound, regardless of the surface I am moving across. I also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
		descriptionFull : "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently."
	},
	"boots of levitation" : { // contributed by AelarTheElfRogue
		name : "Boots of Levitation",
		source : [["SRD", 212], ["D", 155]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "While I wear these boots, I can use an action to cast the levitate spell on myself at will.",
		descriptionFull : "While you wear these boots, you can use an action to cast the Levitate spell on yourself at will.",
		spellcastingBonus : {
			name : "Self Only",
			spells : ["levitate"],
			selection : ["levitate"],
			firstCol : "atwill"
		},
		spellChanges : {
			"levitate" : {
				range : "Self",
				changes : "The spell can only affect the wearer."
			}
		}
	},
	"boots of speed" : {
		name : "Boots of Speed",
		source : [["SRD", 212], ["D", 155]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "As a bonus action, I can click the heels of these boots together to double my walking speed and make opportunity attacks against me have disadvantage. I can end this effect with another bonus action. After the boots' magic has been used for a total of 10 minutes, they lose their power until I finish a long rest.",
		descriptionFull : "While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.\n   When the boots' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.",
		action : [["bonus action", " (start/stop)"]],
		usages : 10,
		recovery : "long rest",
		additional : "minutes"
	},
	"boots of striding and springing" : { // contributed by AelarTheElfRogue
		name : "Boots of Striding and Springing",
		source : [["SRD", 212], ["D", 156]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "While I wear these boots, my walking speed becomes 30 feet, unless my walking speed is higher, and my speed isn't reduced if I am encumbered or wearing heavy armor. In addition, I can jump three times the normal distance, though I can't jump farther than my remaining movement would allow.",
		descriptionFull : "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow.",
		speed : { walk : { spd : "fixed30", enc : "fixed30" } }
	},
	"boots of the winterlands" : {
		name : "Boots of the Winterlands",
		source : [["SRD", 212], ["D", 156]],
		type : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		magicItemTable : "F",
		description : "While wearing these boots, I have resistance to cold damage and I ignore difficult terrain created by ice or snow. I can tolerate temperatures as low as -50 \u00B0F without any additional protection. If I wear heavy clothes, I can tolerate temperatures as low as -100 \u00B0F.",
		descriptionFull : "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:\n \u2022 You have resistance to cold damage.\n \u2022 You ignore difficult terrain created by ice or snow.\n \u2022 You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
		dmgres : ["Cold"]
	},
	"bowl of commanding water elementals" : {
		name : "Bowl of Commanding Water Elementals",
		source : [["SRD", 212], ["D", 156]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "While this bowl is filled with water, I can speak the bowl's command word as an action and summon a water elemental, as if I had cast Conjure Elemental. The bowl can't be used again until the next dawn. The bowl is about 1 foot in diameter and half as deep, and holds about 3 gallons of water.",
		descriptionFull : "While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a water elemental, as if you had cast the Conjure Elemental spell. The bowl can't be used this way again until the next dawn.\n   The bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.",
		weight : 3,
		spellcastingBonus : {
			name : "Water Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				description : "CR 5 water elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Bowl of Commanding Water Elementals, the spell only takes 1 action instead of 1 minute, but can only bring forth a water elemental."
			}
		}
	},
	"bracers of archery" : {
		name : "Bracers of Archery",
		source : [["SRD", 212], ["D", 156]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "While wearing these bracers, I have proficiency with the longbow and shortbow, and I gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		descriptionFull : "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
			],
		}
	},
	"bracers of defense" : {
		name : "Bracers of Defense",
		source : [["SRD", 212], ["D", 156]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "These bracers give me a +2 bonus to AC, but only if I'm not wearing armor or using a shield.",
		descriptionFull : "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		attunement : true,
		extraAC : {
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
		}
	},
	"brazier of commanding fire elementals" : {
		name : "Brazier of Commanding Fire Elementals",
		source : [["SRD", 212], ["D", 156]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "While a fire burns in this brass brazier, I can use an action to speak the brazier's command word and summon a fire elemental, as if I had cast the Conjure Elemental spell. The brazier can't be used this way again until the next dawn.",
		descriptionFull : "While a fire burns in this brass brazier, you can use an action to speak the brazier's command word and summon a fire elemental, as if you had cast the Conjure Elemental spell. The brazier can't be used this way again until the next dawn.\n   The brazier weighs 5 pounds.",
		weight : 5,
		spellcastingBonus : {
			name : "Fire Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				description : "CR 5 fire elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Brazier of Commanding Fire Elementals, the spell only takes 1 action instead of 1 minute, but can only bring forth a fire elemental."
			}
		}
	},
	"brooch of shielding" : { // contributed by Smashman
		name : "Brooch of Shielding",
		source : [["SRD", 212], ["D", 156]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "While wearing this brooch, I have resistance to force damage, and have immunity to damage from the Magic Missile spell.",
		descriptionFull : "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.",
		attunement : true,
		dmgres: ["Force"],
		savetxt: {
			immune: ["Magic Missile spell"]
		}
	},
	"broom of flying" : {
		name : "Broom of Flying",
		source : [["SRD", 213], ["D", 156]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "With the command word, this broom hovers and can either be ridden in the air or send alone up to 1 mile by naming a familiar location. It has a flying speed of 50 ft, holds up to 400 lb, but only has 30 ft speed if over 200 lb. It stops hovering when I land. With another command word, it flies to me if within 1 mile.",
		descriptionFull : "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n   You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.",
		weight : 3
	},
	"cape of the mountebank" : { // contributed by Smashman
		name : "Cape of the Mountebank",
		source : [["SRD", 213], ["D", 157]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "While wearing this cape, I can use it to cast the Dimension Door spell as an action. This property of the cape can't be used again until the next dawn. The cape smells faintly of brimstone. When I disappear, smoke lightly obscures the place that I left and the place that I appear, which dissipates at the end of my next turn.",
		descriptionFull : "This cape smells faintly of brimstone. While wearing it, you can use it to cast the Dimension Door spell as an action. This property of the cape can't be used again until the next dawn.\n   When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.",
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : {
			name: "Cape of the Mountebank",
			spells: ["dimension door"],
			selection: ["dimension door"],
			firstCol : "oncelr"
		}
	},
	"carpet of flying" : {
		name : "Carpet of Flying",
		source : [["SRD", 213], ["D", 157]],
		type : "wondrous item",
		rarity : "very rare",
		magicItemTable : "H",
		description : "I can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to my spoken directions if I am within 30 feet of it. A carpet can carry up to twice the weight for its type, but it flies at half speed if it carries more than its normal capacity.",
		descriptionFull : "You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.\n   Four sizes of carpet of flying exist. The DM chooses the size of a given carpet or determines it randomly.\n\n" + toUni("d100\tSize\tCapacity\tFlying Speed") + "\n01-20\t3 \xD7 5 ft.\t  200 lb.\t  80 feet\n21-55\t4 \xD7 6 ft.\t  400 lb.\t  60 feet\n56-80\t5 \xD7 7 ft.\t  600 lb.\t  40 feet\n81-100\t6 \xD7 9 ft.\t  800 lb.\t  30 feet\n\nA carpet can carry up to twice the weight shown on the table, but it flies at half speed if it carries more than its normal capacity.",
		action : [["action", ""]],
		choices : ["3 \xD7 5 ft (fly 80 ft, 200 lb)", "4 \xD7 6 ft (fly 60 ft, 400 lb)", "5 \xD7 7 ft (fly 40 ft, 600 lb)", "6 \xD7 9 ft (fly 30 ft, 800 lb)"],
		"3 \xD7 5 ft (fly 80 ft, 200 lb)" : {
			name : "Carpet of Flying, 3 ft \xD7 5 ft",
			nameTest : "Carpet of Flying, 1 m \xD7 1,5 m",
			description : "I can speak the carpet's command word as an action to make the 3 ft × 5 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 80 ft and can carry up to 400 lb. If it carries more than 200 lb its flying speed is reduced to only 40 ft."
		},
		"4 \xD7 6 ft (fly 60 ft, 400 lb)" : {
			name : "Carpet of Flying, 4 ft \xD7 6 ft",
			nameTest : "Carpet of Flying, 1,2 m \xD7 2 m",
			description : "I can speak the carpet's command word as an action to make the 4 ft × 6 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 60 ft and can carry up to 800 lb. If it carries more than 400 lb its flying speed is reduced to only 30 ft."
		},
		"5 \xD7 7 ft (fly 40 ft, 600 lb)" : {
			name : "Carpet of Flying, 5 ft \xD7 7 ft",
			nameTest : "Carpet of Flying, 1,5 m \xD7 2,1 m",
			description : "I can speak the carpet's command word as an action to make the 5 ft × 7 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 40 ft and can carry up to 1200 lb. If it carries more than 600 lb its flying speed is reduced to only 20 ft."
		},
		"6 \xD7 9 ft (fly 30 ft, 800 lb)" : {
			name : "Carpet of Flying, 6 ft \xD7 9 ft",
			nameTest : "Carpet of Flying, 1,8 m \xD7 2,7 m",
			description : "I can speak the carpet's command word as an action to make the 6 ft × 9 ft carpet hover and fly. It moves according to my spoken directions if I am within 30 ft of it. It has a flying speed of 30 ft and can carry up to 1600 lb. If it carries more than 800 lb its flying speed is reduced to only 15 ft."
		}
	},
	"censer of controlling air elementals" : {
		name : "Censer of Controlling Air Elementals",
		source : [["SRD", 213], ["D", 158]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "While incense is burning in this censer, I can use an action to speak the censer's command word and summon an air elemental, as if I had cast Conjure Elemental. The censer can't be used this way again until the next dawn. This 6\" wide, 1' high vessel resembles a chalice with a decorated lid.",
		descriptionFull : "While incense is burning in this censer, you can use an action to speak the censer's command word and summon an air elemental, as if you had cast the Conjure Elemental spell. The censer can't be used this way again until the next dawn.\n   This 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound.",
		weight : 1,
		spellcastingBonus : {
			name : "Air Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				description : "CR 5 air elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Censer of Controlling Air Elementals, the spell only takes 1 action instead of 1 minute, but can only bring forth an air elemental."
			}
		}
	},
	"chime of opening" : { // contributed by AelarTheElfRogue
		name : "Chime of Opening",
		source : [["SRD", 213], ["D", 158]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "C",
		description : "I can strike this as an action, pointing it at an object within 120 ft of me that can be opened (i.e. door, lid, lock). One lock or latch on it opens unless the sound can't reach it. If no locks or latches remain, the object itself opens. The chime can be used ten times. After the tenth time it cracks and becomes useless.",
		descriptionFull : "This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens.\n   The chime can be used ten times. After the tenth time it cracks and becomes useless.",
		weight : 1,
		action : [["action", ""]],
		usages : 10,
		recovery : "Never"
	},
	"cloak of displacement" : { // contributed by Smashman
		name : "Cloak of Displacement",
		source : [["SRD", 214], ["D", 158]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "While I wear this cloak, creatures have disadvantage on attack rolls against me as I appear to be standing in a slightly different location. If I take damage, this property ceases to function until the start of my next turn. The property is suppressed while I am incapacitated, restrained, or otherwise unable to move.",
		descriptionFull : "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.",
		attunement : true
	},
	"crystal ball" : {
		name : "Crystal Ball",
		source : [["SRD", 214], ["D", 159]],
		type : "wondrous item",
		description : "I can cast Scrying (save DC 17) while touching this ball of about 6 inches in diameter.",
		descriptionFull : "This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it.",
		attunement : true,
		weight : 3,
		allowDuplicates : true,
		fixedDC : 17,
		spellcastingBonus : {
			name : "DC 17",
			spells : ["scrying"],
			selection : ["scrying"],
			firstCol : "atwill"
		},
		choices : ["Crystal Ball  ", "Crystal Ball of Mind Reading", "Crystal Ball of Telepathy", "Crystal Ball of True Seeing"],
		"crystal ball  " : {
			name : "Crystal Ball  ",
			rarity : "very rare",
			magicItemTable : "H"
		},
		"crystal ball of mind reading" : {
			name : "Crystal Ball of Mind Reading",
			rarity : "legendary",
			magicItemTable : "I",
			description : "I can cast Scrying (DC 17) while touching this crystal ball of 6\" diameter. While scrying, I can cast Detect Thoughts (DC 17) to target creatures I can see within 30 ft of the spell's sensor. I don't need to concentrate on this Detect Thoughts, but it ends when the scrying ends.",
			descriptionFull : "This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it.\n   You can use an action to cast the Detect Thoughts spell (save DC 17) while you are Scrying with the crystal ball, targeting creatures you can see within 30 feet of the spell's sensor. You don't need to concentrate on this Detect Thoughts to maintain it during its duration, but it ends if Scrying ends.",
			spellcastingBonus : {
				name : "DC 17",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				firstCol : "atwill"
			},
			spellChanges : {
				"detect thoughts" : {
					duration : "1 min",
					changes : "Detect Thoughts only works through the spell sensor of the Scrying spell and doesn't require concentration. It ends when the Scrying spell ends."
				}
			}
		},
		"crystal ball of telepathy" : {
			name : "Crystal Ball of Telepathy",
			rarity : "legendary",
			magicItemTable : "I",
			description : "I can cast Scrying (DC 17) while touching this 6\" crystal ball. While scrying, I can communicate telepathically with creatures within 30 ft of the spell's sensor and can cast Suggestion (DC 17) once per dawn on one of them. I don't need to concentrate on this Suggestion, but it ends when the scrying ends.",
			descriptionFull : "This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it.\n   While Scrying with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell's sensor. You can also use an action to cast the Suggestion spell (save DC 17) through the sensor on one of those creatures. You don't need to concentrate on this suggestion to maintain it during its duration, but it ends if Scrying ends. Once used, the suggestion power of the crystal ball can't be used again until the next dawn.",
			spellcastingBonus : {
				name : "DC 17",
				spells : ["suggestion"],
				selection : ["suggestion"],
				firstCol : "oncelr"
			},
			limfeaname : "Suggestion through Crystal Ball",
			usages : 1,
			recovery : "dawn",
			spellChanges : {
				"suggestion" : {
					duration : "8 h (scrying)",
					changes : "Suggestion only works through the spell sensor of the Scrying spell and doesn't require concentration. It ends when the Scrying spell ends."
				},
				"scrying" : {
					description : "1 crea save or sensor follows it around; or sensor in familiar location; telepathy 30 ft on sensor; see B",
					changes : "I can communicate telepathically with creatures within 30 ft of the scrying sensor."
				}
			}
		},
		"crystal ball of true seeing" : {
			name : "Crystal Ball of True Seeing",
			rarity : "legendary",
			magicItemTable : "I",
			description : "I can cast Scrying (save DC 17) while touching this ball of about 6 inches in diameter. While scrying, I can see out from the spell's sensor with truesight out to 120 ft.",
			descriptionFull : "This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it.\n   While Scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell's sensor.",
			spellChanges : {
				"scrying" : {
					description : "1 crea save or sensor follows it around; or sensor in familiar location; truesight 120 ft on sensor; see B",
					changes : "I have truesight out to 120 ft from the scrying sensor."
				}
			}
		}
	},
	"dancing sword" : {
		name : "Dancing Sword",
		nameTest : "Dancing",
		source : [["SRD", 215], ["D", 161]],
		type : "weapon (any sword)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "As a bonus action, I can toss this sword into the air and use the command to make it hover, fly up to 30 ft and attack a target of my choice (as if I'm using it).\nI can command it to move/attack again as a bonus action while it hovers and is in 30 ft.\nAfter the 4th attack, it moves 30 ft to return to my hand.",
		descriptionLong : "As a bonus action, I can toss this magic sword into the air and use the command word to make it hover, fly up to 30 ft and attack a target of my choice within 5 ft of it.\nThe attack uses my attack roll and ability score for damage as if I would be using the sword.\nI can command it to move and attack again as a bonus action while it hovers.\nAfter the 4th attack, it moves 30 ft to try and return to my hand.\nIf it can't reach me or my hands are full, it falls to the ground after moving.\nIt also ceases to hover if I grasp it or move more than 30 ft away from it.",
		descriptionFull : "You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.\n   While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.\n   After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.",
		action : [["bonus action", ""]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/dancing/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Attacks on its own as a bonus action';
					}
				},
				'If I include the word "Dancing" in a the name of a sword, it will be treated as the magic weapon Dancing Sword. The sword can be made to attack on its own as a bonus action.'
			]
		}
	},
	"defender" : {
		name : "Defender",
		source : [["SRD", 218], ["D", 164]],
		type : "weapon (any sword)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "I have a +3 bonus to attack and damage rolls made with this magic sword. The first time I attack with it on each of my turns, I can transfer (part of) the bonus to AC instead. This adjustment remains in affect until the start of my next turn, although I must be holding the sword to gain its bonus to AC.",
		descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon.\n   The first time you attack with the sword on each of your turns, you can transfer some or all of the sword's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the sword to gain a bonus to AC from it.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/defender/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+3 bonus can be used for AC instead';
					}
				},
				'If I include the word "Defender" in a the name of a sword, it will be treated as the magic weapon Defender. It has +3 to hit and damage, but this bonus can be lowered and added to AC instead. Decide to do so with the first attack on your turn.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/defender/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		}
	},
	"dragon scale mail" : {
		name : "Dragon Scale Mail",
		source : [["SRD", 219], ["D", 165]],
		type : "armor (scale mail)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "While wearing this armor, I gain a resistance to a damage type, +1 AC and advantage on saving throws against the frightful presence and breath weapons of dragons. Once per dawn as an action, I can magically discern the distance and direction to the closest dragon of the armor's type within 30 miles of me.",
		descriptionFull : "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued.\n   While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is determined by the kind of dragon that provided the scales (see the table).\n   Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn.\n\n" + toUni("Dragon\tResistance\tDragon\tResistance") + "\nBlack\tAcid\t\tGold\tFire\nBlue\tLightning  \tGreen\tPoison\nBrass\tFire\t\tRed\tFire\nBronze\tLightning  \tSilver\tCold\nCopper\tAcid\t\tWhite\tCold",
		attunement : true,
		weight : 45,
		allowDuplicates : true,
		usages : 1,
		recovery : "dawn",
		savetxt : {
			adv_vs : ["Dragon Frightful Presence", "Dragon Breath Weapons"],
		},
		armorOptions : {
			regExpSearch : /^(?=.*dragon)(?=.*scale)(?=.*mail).*$/i,
			name : "Dragon Scale Mail",
			source : [["SRD", 219], ["D", 165]],
			type : "medium",
			ac : 15,
			stealthdis : true,
			weight : 45
		},
		choices : ["Black (acid)", "Blue (lightning)", "Brass (fire)", "Bronze (lightning)", "Copper (acid)", "Gold (fire)", "Green (poison)", "Red (fire)", "Silver (cold)", "White (cold)"],
		"black (acid)" : {
			name : "Black Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to acid damage. As an action, I can magically discern the distance and direction to the closest black dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Black Dragon Scale Mail",
			dmgres: ["Acid"],
			limfeaname : "Detect Black Dragon",
			action : [["action", "Detect Black Dragon"]]
		},
		"blue (lightning)" : {
			name : "Blue Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to lightning damage. As an action, I can magically discern the distance and direction to the closest blue dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Blue Dragon Scale Mail",
			dmgres: ["Lightning"],
			limfeaname : "Detect Blue Dragon",
			action : [["action", "Detect Blue Dragon"]]
		},
		"brass (fire)" : {
			name : "Brass Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest brass dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Brass Dragon Scale Mail",
			dmgres: ["Fire"],
			limfeaname : "Detect Brass Dragon",
			action : [["action", "Detect Brass Dragon"]]
		},
		"bronze (lightning)" : {
			name : "Bronze Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to lightning damage. As an action, I can magically discern the distance and direction to the closest bronze dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Bronze Dragon Scale Mail",
			dmgres: ["Lightning"],
			limfeaname : "Detect Bronze Dragon",
			action : [["action", "Detect Bronze Dragon"]]
		},
		"copper (acid)" : {
			name : "Copper Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to acid damage. As an action, I can magically discern the distance and direction to the closest copper dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Copper Dragon Scale Mail",
			dmgres: ["Acid"],
			limfeaname : "Detect Copper Dragon",
			action : [["action", "Detect Copper Dragon"]]
		},
		"gold (fire)" : {
			name : "Gold Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest gold dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Gold Dragon Scale Mail",
			dmgres: ["Fire"],
			limfeaname : "Detect Gold Dragon",
			action : [["action", "Detect Gold Dragon"]]
		},
		"green (poison)" : {
			name : "Green Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to poison damage. As an action, I can magically discern the distance and direction to the closest green dragon in 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Green Dragon Scale Mail",
			dmgres: ["Poison"],
			limfeaname : "Detect Green Dragon",
			action : [["action", "Detect Green Dragon"]]
		},
		"red (fire)" : {
			name : "Red Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to fire damage. As an action, I can magically discern the distance and direction to the closest red dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Red Dragon Scale Mail",
			dmgres: ["Fire"],
			limfeaname : "Detect Red Dragon",
			action : [["action", "Detect Red Dragon"]]
		},
		"silver (cold)" : {
			name : "Silver Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to cold damage. As an action, I can magically discern the distance and direction to the closest silver dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "Silver Dragon Scale Mail",
			dmgres: ["Cold"],
			limfeaname : "Detect Silver Dragon",
			action : [["action", "Detect Silver Dragon"]]
		},
		"white (cold)" : {
			name : "White Dragon Scale Mail",
			description : "This scale mail gives +1 to AC, adv. on saves against the frightful presence and breath weapons of dragons, and resistance to cold damage. As an action, I can magically discern the distance and direction to the closest white dragon within 30 miles. Once I use this action, I can't use it again until the next dawn.",
			armorAdd : "White Dragon Scale Mail",
			dmgres: ["Cold"],
			limfeaname : "Detect White Dragon",
			action : [["action", "Detect White Dragon"]]
		}
	},
	"dragon slayer" : {
		name : "Dragon Slayer",
		source : [["SRD", 219], ["D", 166]],
		type : "weapon (any sword)",
		rarity : "rare",
		magicItemTable : "G",
		description : "I have a +1 bonus to attack and damage rolls made with this magic sword. When I hit a creature with the dragon type with this sword, it does 3d6 extra damage of the weapon's damage type.",
		descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon's type. For the purpose of this weapon, \"dragon\" refers to any creature with the dragon type, including dragon turtles and wyverns.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*dragon)(?=.*slayer).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+3d6 damage vs. dragons';
					}
				},
				'If I include the words "Dragon Slayer" in a the name of a sword, it will be treated as the magic weapon Dragon Slayer. It has +1 to hit and damage and deals +3d6 damage to creatures with the dragon type.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*dragon)(?=.*slayer).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		}
	},
	"dust of disappearance" : {
		name : "Dust of Disappearance",
		source : [["SRD", 219], ["D", 166]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "B",
		description : "Once as an action, I can throw this dust into the air. By doing so, me and all creatures within 10 ft of me become invisible for 2d4 minutes. The duration is the same for all subjects. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature.",
		descriptionFull : "Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become invisible for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature."
	},
	"dwarven thrower" : {
		name : "Dwarven Thrower",
		source : [["SRD", 220], ["D", 167]],
		type : "weapon (warhammer)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "This magical warhammer adds a +3 bonus to attack and damage rolls made with it. It has the thrown property with a normal range of 20 ft and a long range of 60 ft. It deals an extra 1d8 damage (or 2d8 if the target is a giant) when thrown. Immediately after the attack, the weapon flies back to my hand.",
		prerequisite : "Requires attunement by a dwarf",
		prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
		weight : 2,
		descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weaponsAdd : ["Dwarven Thrower"],
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*dwarven)(?=.*thrower).*$/i,
			name : "Dwarven Thrower",
			source : [["SRD", 220], ["D", 167]],
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d10); +1d8 damage when thrown (2d8 vs. giants) and returns immediately",
			modifiers : [3, 3] // add 3 to each to hit and damage because of the magical bonus
		}
	},
	"flame tongue" : {
		name : "Flame Tongue",
		source : [["SRD", 223], ["D", 170]],
		type : "weapon (any sword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "As a bonus action, I can speak the command word of this magic sword, causing flames to erupt from it. These flames add +2d6 fire damage and shine bright light in a 40-ft radius and dim light for an additional 40 ft. The flames last until I speak the command word again as a bonus action or sheathe it.",
		descriptionFull : "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
		action : [["bonus action", " (activate/end)"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*flame)(?=.*tongue).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'While active, +2d6 fire damage';
					}
				},
				'If I include the words "Flame Tongue" in a the name of a sword, it will be treated as the magic weapon Flame Tongue. When the command word is spoken, the blade erupts with flames, adding +2d6 fire damage on a hit and shining light.'
			]
		}
	},
	"frost brand" : {
		name : "Frost Brand",
		source : [["SRD", 223], ["D", 171]],
		type : "weapon (any sword)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "This magic sword adds +1d6 cold damage to its damage and grants me resistance to fire. In freezing temperatures, it sheds bright light in a 10-ft radius and dim light for an additional 10 ft. Once per hour when I draw the blade, I can extinguish all nonmagical flames within 30 ft of me.",
		descriptionFull : "When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*frost)(?=.*brand).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1d6 cold damage';
					}
				},
				'If I include the words "Frost Brand" in a the name of a sword, it will be treated as the magic weapon Frost Brand. It does +1d6 cold damage.'
			]
		}
	},
	"gauntlets of ogre power" : {
		name : "Gauntlets of Ogre Power",
		source : [["SRD", 223], ["D", 171]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "My Strength score is 19 while I'm wearing these gauntlets, provided that my Strength is not already 19 or higher.",
		descriptionFull : "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		attunement : true,
		scoresOverride : [19, 0, 0, 0, 0, 0]
	},
	"giant slayer" : {
		name : "Giant Slayer",
		source : [["SRD", 224], ["D", 172]],
		type : "weapon (any axe or sword)",
		rarity : "rare",
		magicItemTable : "G",
		description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. When I hit a creature with the giant type with this weapon, it does 2d6 extra damage of the weapon's damage type and the giant has to make a DC 15 Strength save or be knocked prone.",
		descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, \"giant\" refers to any creature with the giant type, including ettins and trolls.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier|axe/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier|axe/i).test(v.baseWeaponName) && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2d6 damage vs. giants; Giants DC 15 Str save or prone';
					}
				},
				'If I include the words "Giant Slayer" in a the name of a sword, it will be treated as the magic weapon Giant Slayer. It has +1 to hit and damage and when hitting a creatures with the giant type, it does +2d6 damage and the target has to make a DC 15 Strength save or be knocked prone.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier|axe/i).test(v.baseWeaponName) && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		}
	},
	"glamoured studded leather" : {
		name : "Glamoured Studded Leather",
		source : [["SRD", 224], ["D", 172]],
		type : "armor (studded leather)",
		rarity : "rare",
		magicItemTable : "G",
		description : "Studded leather with +1 AC. As a bonus action, I can speak its command word and have it assume the appearance of a normal set of clothing or another armor. I decide what it looks like: style, color, and accessories, but the armor retains its bulk and weight. The illusion lasts until I use this again or remove the armor.",
		weight : 13,
		descriptionFull : "While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance last until you use this property again or remove the armor.",
		armorAdd : "Glamoured Studded Leather",
		armorOptions : {
			regExpSearch : /^(?=.*glamou?r)(?=.*(studded|studs))(?=.*leather).*$/i,
			name : "Glamoured studded Leather",
			source : [["SRD", 224], ["D", 172]],
			type : "light",
			ac : 13,
			weight : 13
		},
		action : [["bonus action", ""]]
	},
	"headband of intellect" : {
		name : "Headband of Intellect",
		source : [["SRD", 225], ["D", 173]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "My Intelligence score is 19 while I'm wearing this headband, provided that my Intelligence is not already 19 or higher.",
		descriptionFull : "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
	},
	"holy avenger" : {
		name : "Holy Avenger",
		source : [["SRD", 225], ["D", 174]],
		type : "weapon (any sword)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 10-ft radius aura (30-ft if level 17 paladin) that grants me and my allies adv. on saves against spells and magical effects.",
		descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.\n   While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.",
		prerequisite : "Requires attunement by a paladin",
		prereqeval : function (v) { return classes.known.paladin ? true : false; },
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			itemName1stPage : ["brackets", "Holy Avenger"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2d10 radiant damage vs. fiends and undead';
					}
				},
				'If I include the words "Holy Avenger" in a the name of a sword, it will be treated as the magic weapon Holy Avenger. It has +3 to hit and damage and does +2d10 radiant damage to fiends and undead.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*holy)(?=.*avenger).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		},
		savetxt : { adv_vs : ["spells", "magical effects"] },
		choices : ["Paladin level 1-16 (10-ft aura)", "Paladin level 17+ (30-ft aura)"],
		selfChoosing : function () {
			return !classes.known.paladin ? "" : classes.known.paladin.level < 17 ? "paladin level 1-16 (10-ft aura)" : "paladin level 17+ (30-ft aura)";
		},
		"paladin level 1-16 (10-ft aura)" : {
			name : "Holy\u200A Avenger",
			description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 10-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
		},
		"paladin level 17+ (30-ft aura)" : {
			name : "Holy\u200A\u200A Avenger",
			description : "I have a +3 bonus to attack and damage rolls made with this magic sword. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 30-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
		}
	},
	"luck blade" : {
		name : "Luck Blade",
		source : [["SRD", 229], ["D", 179]],
		type : "weapon (any sword)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "This magic sword has a +1 bonus to attack and damage rolls made with it, and grants me +1 to all saves. Once per dawn, I can use its luck to reroll one attack, ability check, or save, but I must use the second result. As an action, I can use one of its 1d4-1 charges to cast Wish. Charges can't be regained.",
		descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws.\n   " + toUni("Luck") + ". If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can't be used again until the next dawn.\n   " + toUni("Wish") + ". The sword has 1d4-1 charges. While holding it, you can use an action to expend 1 charge and cast the wish spell from it. This property can't be used again until the next dawn. The sword loses this property if it has no charges.",
		extraLimitedFeatures : [{
			name : "Luck Blade - luck reroll",
			usages : 1,
			recovery : "Dawn"
		}, {
			name : "Luck Blade - cast Wish",
			usages : "1d4-1",
			recovery : "Never"
		}],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		addMod : [{ type : "save", field : "all", mod : 1, text : "While the Luck Blade is on my person, I gain a +1 to all my saving throws." }],
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					}
				},
				'If I include the words "Luck Blade" in a the name of a sword, it will be treated as the magic weapon Luck Blade. It has +1 to hit and damage.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		}
	},
	"nine lives stealer" : {
		name : "Nine Lives Stealer",
		source : [["SRD", 231], ["D", 183]],
		type : "weapon (any sword)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "I have a +2 bonus to attack and damage rolls with this magic sword. It has 1d8+1 charges and if it inflicts a critical hit while it has charges left on a creature with fewer than 100 HP (and that is not a construct or undead, the target must make a DC 15 Con save or die. If it dies, the sword uses a charge.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 1d8+1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
		usages : "1d8+1",
		recovery : "Never",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'On crit to target <100 HP, DC 15 Con save or die';
					}
				},
				'If I include the words "Nine Lives Stealer" in a the name of a sword, it will be treated as the magic weapon Nine Lives Stealer. It has +2 to hit and damage. Also, as long as it has charges left, when it does a critical hit against a creature with fewer than 100 HP, that creature must make a DC 15 Constitution saving throw or die.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			]
		}
	},
	"potion of speed" : {
		name : "Potion of Speed",
		source : [["SRD", 235], ["D", 188]],
		type : "potion",
		rarity : "very rare",
		magicItemTable : "D",
		description : "Once as an action, I can drink this potion or administer it to another to gain the effects of Haste for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own.",
		descriptionLong : "Once as an action, I can drink this potion or administer it to another to gain the effects of Haste for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own. Haste doubles its speed, gives a +2 bonus to AC, gives advantage on Dex saves, and gives an additional action on each turn. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.",
		descriptionFull : "When you drink this potion, you gain the effect of the Haste spell for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own.",
		weight : 0.5
	},
	"ring of jumping" : {
		name : "Ring of Jumping",
		source : [["SRD", 236], ["D", 191]],
		type : "ring",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "As a bonus action, I can use this ring to cast Jump on myself. That spell causes my jump distance to triple for 1 minute.",
		descriptionFull : "While wearing this ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
		attunement : true,
		action : [["bonus action", ""]],
		spellcastingBonus : {
			name : "Self Only",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "atwill"
		},
		spellChanges : {
			"jump" : {
				time : "1 bns",
				range : "Self",
				changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
			}
		}
	},
	"ring of swimming" : {
		name : "Ring of Swimming",
		source : [["SRD", 238], ["D", 193]],
		type : "ring",
		rarity : "uncommon",
		magicItemTable : "B",
		description : "I have a swimming speed of 40 feet while wearing this ring.",
		descriptionFull : "You have a swimming speed of 40 feet while wearing this ring.",
		speed : { swim : { spd : 40, enc : 30 } }
	},
	"staff of the magi" : { // contributed by Pengsloth
		name : "Staff of the Magi",
		source : [["SRD", 244], ["D", 203]],
		type : "staff",
		rarity : "legendary",
		magicItemTable : "I",
		description : "", // NOT YET FINISHED!
		descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n   The staff has 50 charges for the following properties. It regains 4d6+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12+1 charges.\n   " + toUni("Spell Absorption") + ". While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: Conjure Elemental (7 charges), Dispel Magic (3 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Lightning Bolt (7th-level version, 7 charges), Passwall (5 charges), Plane Shift (7 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n   You can also use an action to cast one of the following spells from the staff without using any charges: Arcane Lock, Detect Magic, Enlarge/Reduce, Light, Mage Hand, or Protection from Evil and Good.\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tDamage") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t\t4 \xD7 the number of charges in the staff",
		attunement : true,
		weight : 4,
		weaponsAdd : ["Staff of the Magi"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*magi).*$/i,
			name : "Staff of the Magi",
			source : [["SRD", 245], ["D", 204]],
			modifiers : [2, 2]
		},
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"While holding the Staff of the Magi I have a +2 bonus to spell attack rolls."
			]
		},
		usages : 50,
		recovery : "dawn",
		additional : "regain 4d6+2",
		savetxt : { adv_vs : ["spells"] },
		action : [
			["reaction", " (Spell Absorption)"],
			["action", " (Retributive Strike)"]
		],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "7 Charges",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "7"
		}, {
			name : "7 Charges; 7th level",
			spells : ["fireball"],
			selection : ["fireball"],
			firstCol : "7"
		}, {
			name : "7 Charges; 7th level",
			spells : ["lightning bolt"],
			selection : ["lightning bolt"],
			firstCol : "7"
		}, {
			name : "7 Charges",
			spells : ["plane shift"],
			selection : ["plane shift"],
			firstCol : "7"
		}, {
			name : "5 Charges",
			spells : ["passwall"],
			selection : ["passwall"],
			firstCol : "5"
		}, {
			name : "5 Charges",
			spells : ["telekinesis"],
			selection : ["telekinesis"],
			firstCol : "5"
		}, {
			name : "4 Charges",
			spells : ["ice storm"],
			selection : ["ice storm"],
			firstCol : "4"
		}, {
			name : "4 Charges",
			spells : ["wall of fire"],
			selection : ["wall of fire"],
			firstCol : "4"
		}, {
			name : "3 Charges",
			spells : ["dispel magic"],
			selection : ["dispel magic"],
			firstCol : "3"
		}, {
			name : "2 Charges",
			spells : ["flaming sphere"],
			selection : ["flaming sphere"],
			firstCol : "2"
		}, {
			name : "2 Charges",
			spells : ["invisibility"],
			selection : ["invisibility"],
			firstCol : "2"
		}, {
			name : "2 Charges",
			spells : ["knock"],
			selection : ["knock"],
			firstCol : "2"
		}, {
			name : "2 Charges",
			spells : ["web"],
			selection : ["web"],
			firstCol : "2"
		}, {
			name : "At Will",
			spells : ["arcane lock"],
			selection : ["arcane lock"],
			firstCol : "atwill"
		}, {
			name : "At Will",
			spells : ["enlarge/reduce"],
			selection : ["enlarge/reduce"],
			firstCol : "atwill"
		}, {
			name : "At Will",
			spells : ["protection from evil and good"],
			selection : ["protection from evil and good"],
			firstCol : "atwill"
		}],
		eval : function () {
			// get the CurrentSpells object or create it if it didn't exists yet.
			var spObj = CreateCurrentSpellsEntry("items", "staff of the magi");
			// now set some of the attributes for it, adding the 3 spells that didn't fit as spellcastingBonus
			spObj.typeSp = "known";
			spObj.known = { cantrips : 2, spells : 1 };
			spObj.list = { spells : ["light", "mage hand", "detect magic"] };
			spObj.selectCa = ["light", "mage hand"];
			spObj.selectSp = ["detect magic"];
			spObj.typeList = 2;
		},
		removeeval : function () {
			if (CurrentSpells["staff of the magi"]) {
				// delete the CurrentSpells object
				delete CurrentSpells["staff of the magi"];
				SetStringifieds('spells');
				CurrentUpdates.types.push("spells");
			}
		},
		spellChanges : {
			"light" : { firstCol : "atwill" },
			"mage hand" : { firstCol : "atwill" },
			"detect magic" : { firstCol : "atwill" },
			"fireball" : {
				nameShort : "Fireball (7th level)",
				description : "20-ft rad all crea 12d6 Fire dmg; save halves; unattended flammable objects ignite",
				changes : "Cast as if using a 7th-level spell slot."
			},
			"lightning bolt" : {
				nameShort : "Lightning Bolt (7th level)",
				description : "100-ft long 5-ft wide all 12d6 Lightning dmg; save halves; unattended flammable obj ignite",
				changes : "Cast as if using a 7th-level spell slot."
			},
			"conjure elemental" : {
				time : "1 a",
				changes : "Casting time is only 1 action instead of 1 minute."
			}
		}
	},
	"stone of controlling earth elementals" : {
		name : "Stone of Controlling Earth Elementals",
		source : [["SRD", 246], ["D", 205]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "While the stone is touching the ground, I can use an action to speak its command word and summon an earth elemental, as if I had cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn.",
		descriptionFull : "If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you had cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn. The stone weighs 5 pounds.",
		weight : 5,
		spellcastingBonus : {
			name : "Earth Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				description : "CR 5 earth elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Stone of Controlling Earth Elementals, the spell only takes 1 action instead of 1 minute, but can only bring forth an earth elemental."
			}
		}
	},
	"sun blade" : {
		name : "Sun Blade",
		source : [["SRD", 246], ["D", 205]],
		type : "weapon (longsword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "As a bonus action, I can have this hilt create a blade of radiance. While the blade exists, it acts like a longsword that does +2 to attack and damage rolls, radiant damage (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius and dim light in another 15 ft. As an action, I can change the light's radius by 5 ft.",
		descriptionLong : "As a bonus action, I can have this longsword hilt create or dismiss a blade of pure radiance. While the blade exists, it acts like a longsword that grants a +2 bonus to attack and damage rolls, does radiant damage and has the finesse property. It also deals +1d8 radiant damage to undead and emits sunlight, bright light in a 15-ft radius and dim light in an additional 15-ft radius. As an action, I can expand or reduce both the bright and dim light's radius by 5 ft each, to a maximum of 30 feet each or a minimum of 10 feet each. I am proficient with this weapon if I'm proficient with either longswords or shortswords.",
		descriptionFull : "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", " (start/stop)"], ["action", " (change light)"]],
		weaponsAdd : ["Sun Blade"],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*sun)(?=.*blade).*$/i,
			name : "Sun Blade",
			source : [["SRD", 246], ["D", 205]],
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10); +1d8 damage to undead",
			modifiers : [2, 2]
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
						fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
					}
				}, ''
			]
		}
	},
	"sword of life stealing" : {
		name : "Sword of Life Stealing",
		nameTest : "of Life Stealing",
		source : [["SRD", 246], ["D", 206]],
		type : "weapon (any sword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "When I attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. I then also gain 10 temporary hit points.",
		descriptionFull : "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. You also gain 10 temporary hit points.", // the SRD says 3d6 but that is incorrect
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*life)(?=.*stealing).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +10 Necrotic dmg, 10 temp HP';
					}
				},
				'If I include the words "Life Stealing" in a the name of a sword, it will be treated as the magic weapon Sword of Life Stealing. It does +10 necrotic damage when I roll a 20 on the attack roll and then gives me 10 temporary hit points. It doesn\'t work against Constructs or Undead.'
			]
		}
	},
	"sword of sharpness" : {
		name : "Sword of Sharpness",
		nameTest : "of Sharpness",
		source : [["SRD", 246], ["D", 206]],
		type : "weapon (any sword that deals slashing damage)",
		rarity : "rare",
		magicItemTable : "H",
		attunement : true,
		description : "When I roll a 20 to hit with this magic sword vs. a creature, it takes +14 slashing damage and I have a 5% chance of lobbing off one of its limbs. It does maximum damage vs. objects. With the command word, the blade gives bright light in a 10-ft radius \u0026 dim light in another 10 ft. " + (typePF ? "This stops if sheathed." : "The light stops when commanded again or sheathed."),
		descriptionLong : "When I attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 14 slashing damage and I roll another d20. If that turns op 20 as well, I lob off one of the target's limbs. If the creature has no limb to sever, you lop off a portion of its body instead. When used against an object, the damage dice are maximized. In addition, I can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.",
		descriptionFull : "When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.\n   In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.", // the SRD says 4d6 but that is incorrect
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return (!(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] !== "slashing";
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of sharpness/i).test(v.WeaponText) && v.theWea.damage[2] == "slashing") {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +14 damage \u0026 5% chance to sever limb; Max damage vs. objects';
					}
				},
				'If I include the words "of Sharpness" in a the name of a sword that deals slashing damage, it will be treated as the magic weapon Sword of Sharpness. It deals maximum damage against objects. On a roll of 20 to hit against creatures, it deals +14 slashing damage and has a 5% chance to lob off one limb.'
			]
		}
	},
	"sword of wounding" : {
		name : "Sword of Wounding",
		nameTest : "of Wounding",
		source : [["SRD", 246], ["D", 207]],
		type : "weapon (any sword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "HP lost to this sword can be regained only by resting. Once per turn, I can wound a target hit with this sword. At the start of its turn, it takes 1d4 necrotic damage per such wound, and then makes a DC 15 Con save to stop all wounds on itself. " + (typePF ? "It or another can stop them as an action (DC 15 Medicine)." : "Alternatively, the target or another can stop them with an action (DC 15 Medicine check)."),
		descriptionLong : "Hit points lost to this magic sword can be regained only through a short or long rest, not by regeneration, magic, or other means. Once per turn, when I hit a creature with this sword, I can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time I've wounded it, and it can then make a DC 15 Constitution save to end the effect of all such wounds on itself. Alternatively, the wounded creature, or another within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check to end the effect of all such wounds on it.",
		descriptionFull : "Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.\n   Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of wounding/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Damage can only be healed by resting; Once per turn, wound target';
					}
				},
				'If I include the words "of Wounding" in a the name of a sword, it will be treated as the magic weapon Sword of Wounding. Damage by the sword can only be regained with a short or long rest. Once per turn when I hit with the sword, I can inflict a lingering wound on a target, causing it pain every turn thereafter.'
			]
		}
	},
	"vicious weapon" : {
		name : "Vicious Weapon",
		nameTest : "Vicious",
		source : [["SRD", 248], ["D", 209]],
		type : "weapon (any)",
		rarity : "rare",
		magicItemTable : "G",
		description : "When I roll a 20 on my attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		descriptionFull : "When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"]
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && (/vicious/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +7 damage';
					}
				},
				'If I include the word "Vicious" in a the name of a weapon, it will be treated as the magic weapon Vicious Weapon. On a roll of 20 to hit, it does +7 damage of the weapons type.'
			]
		}
	},
	"vorpal sword" : {
		name : "Vorpal Sword",
		nameTest : "Vorpal",
		source : [["SRD", 248], ["D", 209]],
		type : "weapon (any sword that deals slashing damage)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "I have a +3 bonus to attack and damage rolls with this magic sword. It ignores slashing damage resistance. On a roll of 20 to hit, it cuts off one head" + (typePF ? "" : ", possibly killing it instantly") + ". If the target has no head, is immune to slashing damage, has legendary actions, or its neck is too wide, it takes +6d8 slashing damage instead.",
		descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.\n   When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return (!(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] !== "slashing";
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponText) && v.theWea.damage[2] == "slashing") {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Ignores slashing resistance; On 20 to hit: cut off head';
					}
				},
				'If I include the word "Vorpal" in a the name of a sword that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponText) && v.theWea.damage[2] == "slashing") {
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		}
	},
	"weapon, +1, +2, or +3" : {
		name : "Weapon, +1, +2, or +3",
		source : [["SRD", 250], ["D", 213]],
		type : "weapon (any)",
		rarity : "varies",
		description : "I have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the rarity of the magic item: uncommon (+1), rare (+2), or very rare (+3). Select the bonus using the little square button in this magic item line.",
		descriptionFull : "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1), rare (+2), or very rare (+3).",
		allowDuplicates : true,
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"]
		},
		choices : ["+1 Weapon (uncommon)", "+2 Weapon (rare)", "+3 Weapon (very rare)"],
		"+1 weapon (uncommon)" : {
			name : "Weapon +1",
			nameTest : "+1 Weapon",
			rarity : "uncommon",
			magicItemTable : "F",
			description : "I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			allowDuplicates : true
		},
		"+2 weapon (rare)" : {
			name : "Weapon +2",
			nameTest : "+2 Weapon",
			rarity : "rare",
			magicItemTable : "F",
			description : "I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			allowDuplicates : true
		},
		"+3 weapon (very rare)" : {
			name : "Weapon +3",
			nameTest : "+3 Weapon",
			rarity : "very rare",
			magicItemTable : "H",
			description : "I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			allowDuplicates : true
		}
	},
};