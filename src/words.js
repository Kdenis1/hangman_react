var ENGLISH_WORDS = [
"affix",
"avenue",
"awkward",
"beekeeper",
"boggle",
"cobweb",
"cycle",
"disavow",
"duplex",
"equip",
"exodus",
"funny",
"galaxy",
"gossip",
"icebox",
"injury",
"ivory",
"jackpot",
"jelly",
"jockey",
"joking",
"joyful",
"jumbo",
"kayak",
"khaki",
"kiosk",
"lengths",
"lucky",
"luxury",
"lymph",
"nightclub",
"onyx",
"ovary",
"pajama",
"pneumonia",
"pshaw",
"puppy",
"scratch",
"staff",
"stretch"
];

function randomWord() {
  return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };
