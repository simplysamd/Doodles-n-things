const animals = [
  {name: "Gold Bird"},
  {name: "Moon Rabbit"},
  {name: "Leviathan"},
  {name: "Sleipnir"},
  {name: "Tsutsuga"},
  {name: "Ganesha"},
  {name: "High Wolf"},
  {name: "Fate Worm"},
  {name: "Totetsu"},
  {name: "Kudan"},
  {name: "Tengu"},
  {name: "Chimera"},
  {name: "Qi Lin"},
  {name: "Tohkoh"},
  {name: "Baku"},
  {name: "Ouryu"},
  {name: "Nue"},
  {name: "Two-tailed Fox"},
  {name: "Malice Cat"},
  {name: "Dark Goat"}
]

const items = [
  {name: "Health Drink", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Healing Serum", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Healing Potion", source: "Buy at Trade Store Dol Dona"},
  {name: "Healing Rain", source: "Dropped by Lady Guard"},
  {name: "Revive Rain", source: "Dropped by Revive Rain"},
  {name: "Healing Storm", source: "Dropped by Gimmick Torch"},
  {name: "Sprite Drop", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Fairy Drop", source: "Buy at Trade Store Dol Dona"},
  {name: "Sprite Rain", source: "Dropped by Living Tower"},
  {name: "Fairy Rain", source: "Trade with Tiphereth"},
  {name: "Weird Black Tea", source: "Dropped by Long-Lived"},
  {name: "Strange Coffee", source: "Dropped by Long-Lived-Lord"},
  {name: "Holy Potion", source: "Medic Union Shop (Mac Anu)"},
  {name: "Godly Potion", source: "Trade with Blue Eye Samurai"},
  {name: "Antidote Soda", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Stimulant Soda", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Blessing Soda", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Solution Soda", source: "Buy at Trade Store Dol Dona"},
  {name: "Esthesio Soda", source: "Buy at Trade Store Dol Dona"},
  {name: "Revival Medicine", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Vital Talisman", source: "Buy at Trade Store Dol Dona"},
  {name: "Spirit Talisman", source: "Buy at Trade Store Dol Dona"},
  {name: "Speed Talisman", source: "Dropped by Chickie Mama"},
  {name: "Asian Mango", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Caramel Sauce", source: "Shop in the Kiosk (Mac Anu)"},
  {name: "Fire Storm", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Fire Barrel", source: "Buy at Magic shop in Dol Dona"},
  {name: "Tidal Wave", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Water Dragon", source: "Buy at Magic shop in Dol Dona"},
  {name: "Tornado", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Hurrican Razor", source: "Buy at Magic shop in Dol Dona"},
  {name: "Earth Spike", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Earth Rain", source: "Buy at Magic shop in Dol Dona"},
  {name: "Light Arrows", source: "Buy at Magic shop in Dol Dona"},
  {name: "Air Stroke", source: "Buy at Magic shop in Dol Dona"},
  {name: "The Death", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "The Moon", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "The Devil", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "The Emperor", source: "Buy at Magic shop in Dol Dona"},
  {name: "The Hanged Man", source: "Buy at Magic shop in Dol Dona"},
  {name: "The Hermit", source: "Buy at Magic shop in Dol Dona"},
  {name: "Warrior Blood", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "Knight Blood", source: "Dropped by Ruby Cutter"},
  {name: "Wizard Blood", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "Astrologer Blood", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "Warrior Seal", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "Knight Seal", source: "Buy from Bad @$$ Guild Shop"},
  {name: "Wizard Seal", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "Astrologer Seal", source: "Buy from Bad @$$ Guild Shop in Dol Dona"},
  {name: "Warrior Soul", source: "Trade with Heavenly Flower"},
  {name: "Knight Soul", source: "Dropped by Scissor Byte"},
  {name: "Wizard Soul", source: "Trade with Corporal Yano"},
  {name: "Astrologer Soul", source: "Trade with Kunio"},
  {name: "Warrior Chain", source: "Trade with Eddie"},
  {name: "Knight Chain", source: "Trade with Eddie"},
  {name: "Wizard Chain", source: "Trade with Boltz"},
  {name: "Astrologer Chain", source: "Trade with Abcinian"},
  {name: "Smoke Screen", source: "Buy at Dol Dona Kiosk"},
  {name: "Fairy's Orb", source: "Buy at Dol Dona Kiosk"},
  {name: "Return Feather", source: "Buy at Dol Dona Kiosk"},
  {name: "Return Wing", source: "Medic Clerk at Dol Dona"},
  {name: "Fire Mouse Skin", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Olm Shell", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Wing of Lufu", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Soil Bug Antenna", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Scorpion Tail", source: "Lumina Cloth Shop"},
  {name: "Midoro Flagellum", source: "Lumina Cloth Shop"},
  {name: "Sleeping Powder", source: "Lumina Cloth Shop"},
  {name: "Mantis Nail", source: "Dropped by Fat Lancer"},
  {name: "Bear Paw", source: "Empireo's Guild shop (Mac Anu)"},
  {name: "Thunder Deer Hoof", source: "Buy at Junk shop Dol Dona"},
  {name: "Dark Lizard Tail", source: "Buy at Junk shop Dol Dona"},
  {name: "Astrid Specimen", source: "Buy at Junk shop Dol Dona"},
  {name: "Cow Stomach", source: "Buy at Junk shop Dol Dona"},
  {name: "Stingray Stinger", source: "Buy at Junk shop Dol Dona"},
  {name: "Shark Tooth", source: "Dropped by Solid Eye"},
  {name: "Niki Baku Tongue", source: "Kick Barrels at Dreaming Swift Belladonna"},
  {name: "Ein Baku Tongue", source: "Kick Barrels at Petitioning Daylightâ€™s Starlit Sky"},
  {name: "Hermit Shell", source: "Trade for Defense Amalgam from Inui"},
  {name: "Turtle Shell", source: "Lumina Cloth Shop"},
  {name: "Turtle Crest", source: "Lumina Cloth Shop"},
  {name: "Cleansing Pill", source: "Lumina Cloth Shop"},
  {name: "Jinx's Bane", source: "Lumina Cloth Shop"},
  {name: "Caffeine Drink", source: "Lumina Cloth Shop"},
  {name: "Poison Leaf", source: "Lumina Cloth Shop"},
  {name: "Curse Plant", source: "Lumina Cloth Shop"},
  {name: "Dream Wood Leaf", source: "Lumina Cloth Shop"},
  {name: "Body Egg", source: "D rank (Delta) Dancing Doomed Bum (2 Barrels then leave)"},
  {name: "Mind Egg", source: "Customize Demon Suit Dropped by Long-Lived"},
  {name: "Body Scale", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Mind Scale", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Fire Resist Seal", source: "Strange Heads drop Damp Armor [It's on the armor]"},
  {name: "Aqua Board", source: "Kick Barrels at (Delta) Forgotten Wrathâ€™s Two Wings"},
  {name: "Calm Propeller", source: "Dropped by Strange Head"},
  {name: "Dustproof Lens", source: "Dropped by Strange Head"},
  {name: "Iron Shell", source: "Black Market Shop, hidden behind the Arena (Lumina Cloth)"},
  {name: "Iron Crest", source: "Black Market Shop, hidden behind the Arena (Lumina Cloth)"},
  {name: "Armadillo Shell", source: "Dropped by Death Kettle"},
  {name: "Armadillo Crest", source: "Dropped by Sorceror Owl"},
  {name: "Tinted Glass", source: "from Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Flash Light", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Opening Cutter", source: "Buy at Junk shop Dol Dona"},
  {name: "Fast Glycerin", source: "Buy at Junk shop Dol Dona"},
  {name: "Anti-Paralysis", source: "Buy at Junk shop Dol Dona"},
  {name: "Blast Leaf", source: "Dropped by Meggido Hydra"},
  {name: "Whirlpool Leaf", source: "Kick barrels at (Theta) Paling Starting Route"},
  {name: "Vacuum Leaf", source: "-Kick barrels at (Theta) Ephemeral Times Memoir"},
  {name: "Desert Rose Leaf", source: "Dropped by Entowal"},
  {name: "Flash Leaf", source: "Kick barrels at (Theta) Unselfish Deity's Clepsydra"},
  {name: "Dark Leaf", source: "- Kick barrels at(Theta) Confused Maiden's Rash Action"},
  {name: "Coiling Vine", source: "Kick barrels at (Theta) Unselfish Deity's Clepsydra"},
  {name: "Paralysis Leaf", source: "Dropped by Druk"},
  {name: "Body Larva", source: "Trade with Shirochan for Vigor Dragon and un-customize"},
  {name: "Mind Larva", source: "Trade with Joanna for Demon Dragon and un-customize"},
  {name: "Body Wing", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Mind Wing", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Tortoise Shell", source: "D Rank (Theta) Roaring Discordâ€™s Resort (3 Barrels leave)"},
  {name: "Tortoise Crest", source: "Kick Barrels at Counting Wrathâ€™s Bum"},
  {name: "Twin Scales", source: "Kick Barrels at (Theta)Springâ€™s Black Hand Song"},
  {name: "Red Sun Stone", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Blue Moon Ore", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "White Star Sand", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Gray Comet Dust", source: "Material Shop in Alchemy District (Mac Anu)"},
  {name: "Gold Snake Skin", source: "Kick Barrels at (Delta) Protected Wrathâ€™s Two Wings"},
  {name: "Drowsing Rod", source: "Kick Barrels at (Delta) Protected Wrathâ€™s Two Wings"},
  {name: "Amber Dragon Eye", source: "Kick Barrels at (Delta) Concealed Military Berserker"},
  {name: "Evil Snake Skin", source: "Kick Barrels at (Theta)Springâ€™s Wrathâ€™s Belladonna"},
  {name: "Dowsing Chain", source: "Kick Barrels at (Theta)Galloping Swift Two Wings"},
  {name: "Gudo Oil", source: "Buy anything with the name Compress from Guards Guild shop"},
  {name: "Spirit Tree Bud", source: "Kick Barrels at (Theta)Decadent Pocketed Slacker"},
  {name: "Boost Candle", source: "Buy anything with the name Appraise from Guards Guild shop"},
  {name: "Jade Dragon Eye", source: "Buy anything with the name Train from Guards Guild Shop"},
  {name: "Beginner's Text", source: "Buy from the Bad @$$ Guild Shop"},
  {name: "Beginner's Book", source: "Buy from the Bad @$$ Guild Shop"},
  {name: "Text of Power", source: "Quests"},
  {name: "Book of Power", source: "Quests"},
  {name: "Text of Stamina", source: "Quests"},
  {name: "Book of Stamina", source: "Quests"},
  {name: "Text of Wisdom", source: "Quests"},
  {name: "Text of Sense", source: "Quests"},
  {name: "Word of Vigor", source: "Quests"},
  {name: "Dawn Chim Chim", source: "Chim Data Side Quest Reward"},
  {name: "Word of Spirit", source: "Quests"},
  {name: "Dusk Chim Chim", source: "Quests"},
  {name: "Health Scroll", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Antidote Scroll", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Dawn Bird Scroll", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Priest Scroll", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Life Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Ressurect Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Reflect Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Repeal Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Hellfire Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Tidal Scroll", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Tornado Scroll", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Avalance Scroll", source: "Magic Item Shop in Mercenary District (Mac Anu)"},
  {name: "Halcyon Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Abyss Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Vitality Scroll", source: "Buy at Magic shop in Dol Dona"},
  {name: "Chim Crown", source: "Randomly dropped by Chim King"},
  {name: "Coupon", source: "Gifts from NPCâ€™s you meet in Dungeons/Fields"},
  {name: "Flyer Radar", source: "Bikman Flyer Side Quest"},
  {name: "Animal Radar", source: "Lucky Animal Side Quest"},
  {name: "Anti-Air Compass", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Nutcracker", source: "Trade with Sagittarius Crush Sheaf and un-customize it"},
  {name: "Ninja Claw", source: "Kick Barrels at (Theta) Decadent Pocketed Slacker"},
  {name: "Strategic Fan", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "War Drum", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Dual Angel", source: "(Theta) Piling Bustling Pure Bred"},
  {name: "Broad Angel", source: "Kick barrels at (Theta) Paling Starting Route"},
  {name: "Scythe Angel", source: "Kick Barrels at (Theta) Graceful Grieving Drunkered"},
  {name: "Bayonet Angel", source: "(Theta)Blazing Multiple Buttercup"},
  {name: "Blade Angel", source: "Kick Barrels at (Theta) Dreaming Wrath's Bum"},
  {name: "Gauntlets Angel", source: "Kick Barrels at (Theta) Decadent Pocketed Slacker"},
  {name: "Lance Angel", source: "Kick barrels at (Theta) Serene Fighter Runner"},
  {name: "Staff Angel", source: "Kick barrels at (Theta) Paling Starting Route"},
  {name: "Grimore Angel", source: "Kick Barrels at (Theta) Essential Doomed Pure Bred"},
  {name: "Fan Angel", source: "Kick Barrels at (Theta)Dreaming Doomed Belladonna"},
  {name: "Phonosheet", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Time Conch", source: "Buy from Emperio Guild shop (Dol Dona)"},
  {name: "Demonic Mallet", source: "Buy from Emperio Guild shop (Dol Dona"}
]

const accessories = [
  {name: "Simple Bracelet", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Simple Necklace", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Seal of Ya Wang", source: "Kestrel Guild Shop (Mac Anu)"},
  {name: "Crown of Lu Ming", source: "Moon Tree Guild Shop (Mac Anu)"},
  {name: "Medic Badge", source: "Medic Union Shop"},
  {name: "1-Line Reference", source: "Trifle Guild Shop"},
  {name: "Secret News Book", source: "Empireo Guild Shop"},
  {name: "Simple Fire Idol", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Simple Water Idol", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Simple Wind Idol", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Simple Earth Idol", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Simple Steam Ring", source: "Mecha Grunty Rescue Vol 1"},
  {name: "Simple Gloves", source: "DX Armor Shop in Alchemy District (Mac Anu)"},
  {name: "Simple Earrings", source: "DX Armor Shop in Alchemy District (Mac Anu)"},
  {name: "Steam Bracelet", source: "Mecha Grunty Rescue Vol 1"},
  {name: "Dusty Miller", source: "Sakubo Starts with it"},
  {name: "Rose Flower", source: "Endrance Starts with it"},
  {name: "Simple Pendant", source: "Chest at (Delta) Delicious Swift Two Wings"},
  {name: "Simple Fire Bell", source: "DX Armor Shop Alchemy District (Mac Anu)"},
  {name: "Simple Water Bell", source: "DX Armor Shop Alchemy District (Mac Anu)"},
  {name: "Simple Wind Bell", source: "DX Armor Shop Alchemy District (Mac Anu)"},
  {name: "Simple Earth Bell", source: "DX Armor Shop Alchemy District (Mac Anu)"},
  {name: "Simple Pouch", source: "Chest at (Delta) Closed Ruined Bum"},
  {name: "Simple Head Band", source: "Chest at (Delta) Cheering Wrath's Pure Bred"},
  {name: "Simple Watch", source: "Antares starts with it"},
  {name: "Simple Light Idol", source: "Chest at (Delta) Soulful Fruitless Orion"},
  {name: "Simple Dark Idol", source: "Chest at (Delta) Confused Fruitless Orion"},
  {name: "Simple Dark Bell", source: "Chest at (Delta) Winding Grieving Drama"},
  {name: "Simple Light Bell", source: "Chest at (Delta) Serene Grieving Drama"},
  {name: "Simple Wing Cap", source: "Armor Shop (Dol Dona)"},
  {name: "Simple Shoulder", source: "Armor Shop (Dol Dona)"},
  {name: "Simple Glasses", source: "Armor Shop (Dol Dona)"},
  {name: "Wind Barrette", source: "Lucky animal Research vol 2"},
  {name: "Wrist Watch", source: "Mecha Grunty Rescue Vol 2"},
  {name: "Shallow Wit", source: "Bad @$$ Guild Shop (Dol Dona)"},
  {name: "Feed Bag", source: "Zoo Guild Shop (Dol Dona)"},
  {name: "For Her", source: "knights Guild Shop (Dol Dona)"},
  {name: "Devote Guts", source: "Salt Mania Guild Shop (Dol Dona)"},
  {name: "Shining Love", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Clogs", source: "Guards Guild Shop (Dol Dona"},
  {name: "Simple Fire Balm", source: "Armor Shop (Dol Dona)"},
  {name: "Simple Water Balm", source: "Armor Shop (Dol Dona)"},
  {name: "Simple Wind Balm", source: "Armor Shop (Dol Dona)"},
  {name: "Simple Earth Balm", source: "Armor Shop (Dol Dona)"},
  {name: "Simple Light Balm", source: "Armor Shop (Dol Dona)"},
  {name: "Simple Dark Balm", source: "Armor Shop (Dol Dona)"},
  {name: "Steam Watch", source: "Mecha Grunty Rescue Vol 2"},
  {name: "Simple Coat Rope", source: "Guards Guild Shop"},
  {name: "Simple Goggles", source: "Guards Guild Shop"},
  {name: "Simple Brazier", source: "Guards Guild Shop"},
  {name: "Biker's Charm", source: "Complete Biker's Quest"},
  {name: "Simple Hood", source: "Guards Guild Shop"},
  {name: "Simple Fire Comb", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Water Comb", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Wind Comb", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Earth Comb", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Light Comb", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Dark Comb", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Mittens", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Gaiters", source: "Guards Guild Shop Dol Dona"},
  {name: "Simple Handbag", source: "Guards Guild Shop Dol Dona"},
  {name: "Flicking Scale", source: "Dropped by The One Sin"},
  {name: "Simple Fortunes", source: "Guards Guild Shop Dol Dona"},
]

const weapons = [
  {name: "Spin Gai Gu", source: "Trap box in (Delta) Fly Away Marbles Windup Box"},
  {name: "Spin Kouga", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Spin Man Que", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Spin Rasetu", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Spin Corpse", source: "Dropped by Goblin Guard"},
  {name: "Spin Locust", source: "Trap Box in (Delta) Wailing Grieving Windup Box (Random)"},
  {name: "Spin Ban Mu", source: "Trap Box in (Delta) Wailing Hardshipâ€™s Windup Box (Random)"},
  {name: "Spin Piney", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Spin Axe", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Dorje Hatchet", source: "Alkaid Starter Weapon"},
  {name: "Spin Needle", source: "Begin Vol 2 with it"},
  {name: "Ripper's Blade", source: "Vol 1 Special event (Vol 2 ?)"},
  {name: "Spin Ribs", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Spin Indigo", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Lit Honeysuckle", source: "Story Event"},
  {name: "Spin Fang", source: "Dropped by Maxima Bazooka"},
  {name: "Spin Heaven", source: "Dropped by Massacre Mummy"},
  {name: "Heine's Invasion", source: "Transfer Vol 1 data and defeat Dopple"},
  {name: "Broad Demon", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Broad Wheel", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Broad Maiden", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Broad Legged", source: "Dropped by Fever Horse"},
  {name: "Broad Zhen", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Broad Tu Wan", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Flame Sword", source: "Begin Volume 2 with it"},
  {name: "Broad Wings", source: "Dropped by Fate Crabs"},
  {name: "Broad Guiren", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Broad Seigen", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Broad Kuajie", source: "Dropped by Anchor Bind"},
  {name: "Broad Sheaf", source: "Dropped by Scissor Byte"},
  {name: "Broad Fenlong", source: "Dropped by Blind Pain"},
  {name: "Heine's Shadow", source: "Defeat Dopple vol 2"},
  {name: "Scythe Shouxiao", source: "Vol 2 Job Extention"},
  {name: "Scythe Hook", source: "Buy from kinights guild shop (Dol Dona)"},
  {name: "Ticking Death", source: "Lost Weapon"},
  {name: "Scythe Bite", source: "Trade with Barson"},
  {name: "Scythe Hidaru", source: "Trade From Alkaid or buy at Knights Guild (Dol Dona)"},
  {name: "Heine's Zero", source: "Defeat Dopple Vol 2 twice"},
  {name: "Gun Steel", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Gun Fu Yue", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Water Bayonet", source: "Kuhnâ€™s Starter weapon"},
  {name: "Gun Waves", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Gun Ocher", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Gun Hong", source: "(for new game V2 Kuhn Starts with this)"},
  {name: "Gun Lion", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Gun Bead", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Silent Jade", source: "Lost Weapon"},
  {name: "Gun Fisher", source: "Dropped by Gobtank 75"},
  {name: "Blade Guifel", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Blade Fern", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Blade Thorns", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Blade Thread", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Crimson Sword", source: "Antares Starter Weapon"},
  {name: "Blade Sun", source: "Dropped by Goblin Knight"},
  {name: "Princess Blade", source: "Enderanceâ€™s Starter Weapon"},
  {name: "Blade Luer", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Blade Rivet", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Tempting Rose", source: "Lost Weapon"},
  {name: "Blade Rank", source: "Trade with Nogmung"},
  {name: "Tiger Fist", source: "Piâ€™s Starter Weapon"},
  {name: "Fist Altair", source: "Dropped by Gan Ziger (or any element Ziger)"},
  {name: "Fist Talon", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Fist Fairy", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Stained Wing", source: "Lost Weapon"},
  {name: "Fist Thrush", source: "Trade with Rider Chyob"},
  {name: "Golden Spear", source: "Piros Starter Weapon"},
  {name: "Lance Yantie", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Lance Law", source: "Trap box in (Delta)Adoring Grieving Windup Box (Random)"},
  {name: "Lance Xiong", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Lance Tulong", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Lance Snake", source: "Dropped by Sea Trident"},
  {name: "Spell Xialin", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Spell Xinzhu", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Spell Baiyan", source: "Dropped by Goblin Abyss"},
  {name: "Spell Omen", source: "Trap box in (Delta)Adoring Military Windup Box (Random)"},
  {name: "Spell Ji Yi", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Dancing Haze", source: "Lost Weapon"},
  {name: "Spell Noble", source: "Trade with NAOO"},
  {name: "Magic Amber", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Magic Hosei", source: "Weapon Shop in Mercenary District (Mac Anu)"},
  {name: "Magic Nymph", source: "DX Weapon Shop in Alchemy District (Mac Anu)"},
  {name: "Magic Crest", source: "Dropped by Goblin Sage"},
  {name: "Magic Huawen", source: "Buy from Weapons shop(Dol Dona)"},
  {name: "Ogre's Heaven", source: "Sakubo Starter Weapon"},
  {name: "Infinite Spiral", source: "Lost Weapon"},
  {name: "Magic Dielin", source: "Trade with Isolde"},
]

const armor = [
  {name: "Sub Gear", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Sub Robe", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Sub Gown", source: "Dropped by Goblin Mage"},
  {name: "Sub Attire", source: "DX Armor Shop in Alchemy District (Mac Anu)"},
  {name: "Sub Yin Yang", source: "DX Armor Shop in Alchemy District (Mac Anu)"},
  {name: "Sub Garment", source: "Chest at (Delta) Springâ€™s Cupidâ€™s Windup Box"},
  {name: "Wild Robe", source: "Lucky Animal Research Vol 1"},
  {name: "Sub Cape", source: "Buy Dol Dona Armor Shop"},
  {name: "Sub Mantle", source: "Buy Dol Dona Armor Shop"},
  {name: "The Unexperienced", source: "Lucky Animal Research Vol 2"},
  {name: "Sub Frock", source: "Buy Dol Dona Armor Shop"},
  {name: "Steam Vest", source: "Mecha Grunty Rescue Vol 2"},
  {name: "Sub Suit", source: "Dropped by Long-Lived"},
  {name: "Sub Cloak", source: "Trade with Pen Pen"},
  {name: "Sub Dragon", source: "Trade with Oimatsu"},
  {name: "Loose Sash", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Loose Guard", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Loose Kimono", source: "Dropped by Gigamouth"},
  {name: "Loose Vest", source: "Dropped by Elder Growth"},
  {name: "Loose Plate", source: "DX Armor Shop in Alchemy District"},
  {name: "Loose Sheath", source: "Dropped by Apititer"},
  {name: "Loose Leather", source: "Buy Dol Dona Armor Shop"},
  {name: "Steam Coat", source: "Mecha Grunty Rescue Vol 2"},
  {name: "Loose Fur", source: "Buy Dol Dona Armor Shop"},
  {name: "Golden Lion", source: "Lucky Animal Research vol 2"},
  {name: "Loose Guardian", source: "Buy Dol Dona Armor Shop"},
  {name: "Loose Scales", source: "Chest at (Theta) Unselfish Exposed Windup Box"},
  {name: "Loose Case", source: "Trade with Eddie"},
  {name: "Loose Lionel", source: "Trade with DOMINATOR"},
  {name: "Rough Armor", source: "Armor Shop in Mercenary District (Mac Anu)"},
  {name: "Rough Shell", source: "Dropped by Wild Kettle"},
  {name: "Steam Plate", source: "Chim Chim Research Vol 1"},
  {name: "Rough Mail", source: "Dropped by Steam Shell"},
  {name: "Rough Defense", source: "Dropped by Buster Kettle"},
  {name: "Rough Jiongjia", source: "DX Armor Shop in Alchemy District (Mac Anu)"},
  {name: "Steam Armor", source: "Mecha Grunty Rescue Vol 1"},
  {name: "Rough Metal", source: "DX Armor Shop in Alchemy District (Mac Anu)"},
  {name: "Rough Alloy", source: "Dropped by Horned Archelon"},
  {name: "Black Armor", source: "Abyss Quest Vol 1"},
  {name: "Steam Suit", source: "Mecha Grunty Rescue Vol 1"},
  {name: "Rough Steel", source: "Buy Dol Dona Armor Shop"},
  {name: "Whistle Armor", source: "Lucky Animal Research Vol 2"},
  {name: "Rough Wave", source: "Buy Dol Dona Armor Shop"},
  {name: "Rough Buddha", source: "Buy Dol Dona Armor Shop"},
  {name: "Mountaineer Vest", source: "Lucky Animal Research Vol 2"},
  {name: "Rough Iron", source: "Knights Guild Shop"},
  {name: "Rough Amalgam", source: "Trade with Encephalon"},
  {name: "Steam Battle Pod", source: "Mecha Grunty Rescue Vol 2"},
  {name: "Summit King", source: "Lucky Animal Research Quest Volume 2"},
  {name: "Rough Dragon", source: "Dropped by Olin Pack"},
  {name: "Invincible Shell", source: "Bounty Hunter Black List Volume 2"},
  {name: "Rainbow Scale", source: "Dropped by God Eater"},
]

const enemies = [
  {name: "Goblin Rookie", source: "Submissive Tragedyâ€™s 1000]Oaks"},
  {name: "Gun Giant", source: "Buzzing Aster's Bum"},
  {name: "Wight Ride", source: "LotD Quest Vol 1"},
  {name: "Goblin Mage", source: "Upfront Blazing Camellia"},
  {name: "Gigamouth", source: "Essential Bustling Generation"},
  {name: "Goblin Guard", source: "Creeping Wrathâ€™s Two Wings"},
  {name: "Goblin Abyss", source: "Piling Returning Hand Song"},
  {name: "Poisoned Dead", source: "LotD Quest Vol 1"},
  {name: "Gurugon", source: "Gurugon Quest Vol 1"},
  {name: "Baz Giant", source: "Graceful Humbling Holy Relic"},
  {name: "Living Corpse", source: "LotD Quest Vol 1"},
  {name: "Apititer", source: "Counting Blazing Berserker"},
  {name: "Goblin Knight", source: "Counting Blazing Foot Stone"},
  {name: "Goblin Sage", source: "Dawning Wrathâ€™s Two Wings"},
  {name: "Giga Bazooka", source: "Buzzing Vane Two Wings"},
  {name: "Morgul", source: "Chaotic Fortified Guard (Abyss Quest V2)"},
  {name: "Goblin Nemesis", source: "Buzzing Returning Phoenix"},
  {name: "Steam Goblin", source: "Halberd Daybreakâ€™s Belladonna"},
  {name: "Mono-Grosser", source: "Essential Doomed Pure Bred"},
  {name: "Maxima Bazooka", source: "Dreaming Doomed Generation"},
  {name: "Duster Goblin", source: "Galloping wrathâ€™s Pure Bred"},

  {name: "Angelic Gore", source: "Truthful Marbleâ€™s Bum"},
  {name: "Fat Lancer", source: "Agonizing Blazing Camellia"},
  {name: "Holy Eater", source: "Counting Wrathâ€™s Two Wings"},
  {name: "Cernunnos", source: "LotD Quest Vol 1"},
  {name: "Gaze Knight", source: "Dawning Red Plumâ€™s Berserker"},
  {name: "Heavens Doom", source: "Buzzing Wrathâ€™s Phoenix"},
  {name: "Solid Eye", source: "Graceful Wrathâ€™s Belladonna"},
  {name: "Mirage Banisher", source: "Lost Ground"},
  {name: "Death eater", source: "Lost Ground"},
  {name: "Propogate Stopper", source: "Lost Ground"},
  {name: "Avenge Preventer", source: "Lost Ground"},
  {name: "Tempt Rejecter", source: "Lost Ground"},
  {name: "Scheme Breacher", source: "Lost Ground"},

  {name: "Spear Fish", source: "Rising Loves Gate"},
  {name: "Lancer Marine", source: "Counting Wrathâ€™s Two Wings"},
  {name: "Sea Trident", source: "Counting Wrathâ€™s Bum"},
  {name: "Azul Sachem", source: "Springâ€™s Wrathâ€™s Two Wings"},
  {name: "Zan Bezel", source: "Wealthy Daybreakâ€™s Globe"},
  {name: "Vak Bezel", source: "Submissive Tragedyâ€™s 1000]Oaks"},
  {name: "Gan Bezel", source: "Truthful Marbleâ€™s Bum"},
  {name: "Rue Bezel", source: "Creeping Vane Camellia"},
  {name: "Zan Juggler", source: "Saddened Humbling Bulwark"},
  {name: "Vak Juggler", source: "Saddened Joyous Shadow"},
  {name: "Gan Juggler", source: "Counting Joyous Shadow"},
  {name: "Rue Juggler", source: "Protected Loveâ€™s Bum"},
  {name: "Lei Zin", source: "Troubled Her Antithesis"},
  {name: "Zan Zin", source: "Warm Doomed Generation"},
  {name: "Rue Zin", source: "Paling Leading Phoenix"},
  {name: "Ani Zin", source: "Bequeathed Insatiable Mysteries"},
  {name: "Gan Zin", source: "Paling Doomed Belladonna"},
  {name: "Vak Zin", source: "Saddened Asterâ€™s Phoenix"},
  {name: "Chickie", source: "Overjoyed Wrathâ€™s Berserker"},
  {name: "Trainee Owl", source: "Screaming Aster's Bulwark"},
  {name: "Raven Claw", source: "Croaking Military Whicker"},
  {name: "Chickie Dada", source: "Coiling Friendâ€™s Whiplash"},
  {name: "Scalvenger", source: "Scalvenger Quest Vol 1"},
  {name: "Hermit Owl", source: "Counting Cupidâ€™s Bum"},
  {name: "Black Raptor", source: "Freezing Bustling Whicker"},
  {name: "Lady Guard", source: "Clever Geniusâ€™s Moon River"},
  {name: "Sorceror Owl", source: "Halberd Daybreakâ€™s Belladonna"},
  {name: "Chickie Mama", source: "Essential Wrathâ€™s Dagger"},
  {name: "Hell Vulture", source: "Paling Red Plumâ€™s Generation"},
  {name: "Ignis Tail", source: "Galloping Wrathâ€™s Pure Bred"},
  {name: "Onion Mash", source: "Submissive Tragedyâ€™s 1000]Oaks"},
  {name: "Crumple Tree", source: "Great Cursed Inlaws"},
  {name: "Truffle", source: "Piling Red Plumâ€™s Twin Rocks"},
  {name: "Elder Growth", source: "Piling Red Plumâ€™s Twin Rocks"},
  {name: "Hanger Berry", source: "Buzzing Doomed Pure Bred"},
  {name: "Entowal", source: "Buzzing Doomed Pure Bred"},
  {name: "Funger Hat", source: "Piling Bustling Pure Bred"},
  {name: "Forest King", source: "Galloping Asterâ€™s Dagger"},
  {name: "Rue Fang", source: "Buzzing Wrathâ€™s Puddle"},
  {name: "Gan Fang", source: "Starting Bustling Holy Ground"},
  {name: "Bravo Nose", source: "Wealthy Dusk's Bum"},
  {name: "Vak Fang", source: "Truthful Forbidden 1000]Oaks"},
  {name: "Zan Fang", source: "Truthful Forbidden 1000]Oaks"},
  {name: "Ani Fang", source: "Spectating Cloudless Hand Song"},
  {name: "Lei Fang", source: "Soulful Swift Alga Grass"},
  {name: "Zan Ziger", source: "Paling Grey Gate"},
  {name: "Rue Ziger", source: "Rising Cursed metal Doll"},
  {name: "Ani Ziger", source: "Thrilling Doomed Two Wings"},
  {name: "Don Elephant", source: "Counting Hereticâ€™s Frog Lake"},
  {name: "Vak Ziger", source: "Saddened Returning Shadow"},
  {name: "Gan Ziger", source: "Counting Gamblerâ€™s 1000]Oaks"},
  {name: "Lei Ziger", source: "Cheering Exposed Generation"},
  {name: "Shadowless Dog", source: "Gathering Shadows Quest"},
  {name: "Mighty Nauman", source: "Buzzing Bustling Pure Bred"},
  {name: "Strange Head", source: "Buzzing Wrathâ€™s Dagger"},
  {name: "Olin Pack", source: "Counting Wrathâ€™s Bum"},
  {name: "Giga Mammoth", source: "Roaring Asterâ€™s Phoenix"},
  {name: "Wild Kettle", source: "Buzzing Wrathâ€™s Puddle"},
  {name: "Knuckleman", source: "Knuckleman Quest Vol 1"},
  {name: "Buster Kettle", source: "Creeping Wrathâ€™s Two Wings"},
  {name: "Steam Shell", source: "Rough Song Dusks Hand song"},
  {name: "Metal Fist", source: "Counting Blazing Foot Stone"},
  {name: "# Rain", source: "(Steam Scientist Quest)"},
  {name: "# Cloud", source: "(Steam Scientist Quest)"},
  {name: "Death Kettle", source: "Blazing Multiple Buttercup"},
  {name: "# Rain Cloud", source: "(Steam Scientist Quest)"},
  {name: "Process Gear", source: "Paling Leading Phoenix"},
  {name: "Gobtank 75", source: "Dreaming Swift Belladonna"},
  {name: "Bowler Head", source: "Roaring Swift Belladonna"},
  {name: "Chain Whip", source: "Springâ€™s Doomed Belladonna"},
  {name: "Gobcannon 77", source: "Galloping Doomed Two Wing"},

  {name: "Lizard Hunter", source: "Truthful Marbleâ€™s Bum"},
  {name: "Lizard Assassin", source: "Piling Military Shadow"},
  {name: "Drygon", source: "Blurry Cursed Camellia"},
  {name: "Fever Horse", source: "Graceful Wrath's Shadow"},
  {name: "Blaze Drake", source: "Roaring Wrathâ€™s berserker"},
  {name: "Dryas", source: "Roaring Doomed Snow Caps"},
  {name: "Elite Lizard", source: "Buzzing Wrathâ€™s Fast Horse"},
  {name: "Meggido Hydra", source: "Essential Wrathâ€™s Fast Horse"},
  {name: "Long-Lived", source: "Essential Doomed Pure Bred"},
  {name: "Dardeus", source: "Counting Bustling Generation"},
  {name: "Long-Lived-Lord", source: "Galloping Swift Two Wings"},
  {name: "Hecatonfoot", source: "Graceful Aster's Pure Bred"},
  {name: "Ruby Cutter", source: "Piling Red Plumâ€™s Twin Rocks"},
  {name: "Carrie", source: "Rising Cursed Metal Doll"},
  {name: "Mad Jaws", source: "Disputing Gray Tiny Beast (Crab Monster Quest Vol 1)"},
  {name: "Great Jaws", source: "Crab Monster Quest Vol 1"},
  {name: "Carrianne", source: "Counting Red Plumâ€™s Shadow"},
  {name: "Ruby Cutter", source: "Piling Red Plumâ€™s Twin Rocks"},
  {name: "Horned Archelon", source: "Protected Bustling Weed Eater"},
  {name: "Fate Crab", source: "Dawning Wrathâ€™s Two Wingâ€™s"},
  {name: "Tick Mask", source: "Buzzing Vane Pure Bred"},
  {name: "Scorpio 7", source: "Warm Bustling Generation"},
  {name: "Carrizabeth", source: "Essential Wrathâ€™s Dagger"},
  {name: "Face Bug", source: "Paling Wrathâ€™s Phoenix"},
  {name: "Scissor Byte", source: "Dreaming Wrathâ€™s Pure Bred"},
  {name: "Hash Chase", source: "Decadent Pocketed Slacker"},
  {name: "Bison Tortoris", source: "Paling Doomed Belladonna"},
  {name: "Anchor Bind", source: "Warm Doomed Generation"},
  {name: "Druk", source: "Thrilling Aster's Pure Bred"},
  {name: "Titan Dead", source: "Abyss Quest"},
  {name: "Massacre Mummy", source: "Galloping Swift Two Wings"},
  {name: "Blind Pain", source: "Roaring Doomed Two Wings"},
  {name: "Hell Charm", source: "Buzzing Doomed Pure Bred"},
  {name: "Living Tower", source: "Piling Bustling Pure Bred"},
  {name: "Gimmick Torch", source: "Roaring Swift Belladonna"},
  {name: "Break Pillar", source: "Springâ€™s Wrathâ€™s Belladonna"},
  {name: "Heavenly Ray", source: "Unselfish Wrathâ€™s Pure Bred"},
  {name: "Ovan", source: "Final Boss Volume 2"},
  {name: "The One Sin", source: "source"},
  {name: "God Eater", source: "source"},
]

export default [...animals]
// export default animals