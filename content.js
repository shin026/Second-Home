/* ============================================================
   EDIT THIS FILE to make the site yours. Everything the site
   shows lives here. Anything in [BRACKETS] is a placeholder.

   PHOTOS: copy your pictures into the "photos" folder, then set
   src to e.g. "photos/beach.jpg". Leave src as "" and a clearly
   labeled placeholder box shows instead (not a fake memory).
   ============================================================ */
const SITE = {
  groupName: "Second Home",          // shown top-left
  heroPhoto: "images/photo1.jpg",                          // e.g. "photos/group.jpg"
  finalePhoto: "images/photo2.jpg",                        // e.g. "photos/group2.jpg"

  // SOUNDTRACK: put an mp3 in the photos folder (or any folder), e.g. "photos/song.mp3".
  // Leave "" to disable. Never autoplays.
  music: { src: "music/Christina Perri - A Thousand Years.mp3", title: "Our song" },

  // OUR STORY: add, remove or reorder entries freely.
  story: [
    { date: "August 29,2026", title: "How we met",     text: "It all started during our college orientation. At that time, we were just people who happened to be in the same place, not knowing that this simple beginning would become something worth remembering. Then came our group presentation in RPH, bringing me, Kiann, Bryan, Kathleen, Thea, Princess Dianne, Princess Jane, Aysha, Chrisleen, and Vivien together. Looking back, I realize that maybe this was one of the little keys that started everything. We were brought together because of a school activity, something that was probably just another requirement to finish at the time. None of us could have known that, beyond the presentation, we would begin creating memories, sharing laughter, and building a bond that would eventually mean so much more than just being classmates. It's funny how life works sometimes. It doesn't always introduce people to us through grand moments or unforgettable first impressions. Sometimes, it starts with a simple orientation, a group assignment, and a bunch of people trying to get things done. And somehow, those ordinary beginnings become the stories we look back on with the biggest smiles. Maybe back then, we didn't realize what was beginning. But now, when I look back at that moment, I can't help but feel grateful that we ended up in the same group, in the same place, at the right time. Because who would've thought that one college orientation and one RPH presentation would become one of the first pages of our story? And if I could go back to that day, knowing all the memories we would eventually make, I would still choose to be there all over again.", photo: "images/photo3.jpg" },
    { date: "September 13, 2026", title: "How we got close",      text: "[The moment it stopped being 'classmates' and became 'friends'.]", photo: "images/photo11.jpg" },
    { date: "[DATE]", title: "The first thing we shared", text: "[A first trip, first inside joke, first long night talking.]", photo: "" },
    { date: "[DATE]", title: "The unexpected part",   text: "[Something nobody planned that pulled us together.]", photo: "" },
    { date: "Today",  title: "What defines us now",   text: "[The little things that make us us.]", photo: "" }
  ],

  // GALLERY: each album is a tab. Add as many photos as you like.
  albums: {
    "The Beginning": [
      { src: "", caption: "[Caption]", date: "[Date]", place: "[Place]", note: "[handwritten note]" },
      { src: "", caption: "[Caption]", date: "[Date]", place: "", note: "" },
      { src: "", caption: "[Caption]", date: "[Date]", place: "[Place]", note: "" }
    ],
    "Random Days": [
      { src: "", caption: "[Caption]", date: "", place: "", note: "[note]" },
      { src: "", caption: "[Caption]", date: "[Date]", place: "", note: "" },
      { src: "", caption: "[Caption]", date: "", place: "[Place]", note: "" }
    ],
    "The Chaos": [
      { src: "", caption: "[Caption]", date: "", place: "", note: "[inside joke?]" },
      { src: "", caption: "[Caption]", date: "[Date]", place: "", note: "" }
    ],
    "Unforgettable Moments": [
      { src: "", caption: "[Caption]", date: "[Date]", place: "[Place]", note: "" },
      { src: "", caption: "[Caption]", date: "", place: "", note: "[note]" }
    ],
    "Just Us Being Us": [
      { src: "", caption: "[Caption]", date: "", place: "", note: "" },
      { src: "", caption: "[Caption]", date: "[Date]", place: "", note: "[note]" }
    ]
  },

  // LETTERS: one per friend. Blank line in "letter" = new paragraph.
  // These are sample letters, rewrite them in your own voice.
  friends: [
    { name: "Thea", photo: "images/Thea.jpg",
      preview: "I don't think I say this enough, but...",
      letter: "I don't think I say this enough, but I'm genuinely grateful that life allowed our paths to cross. Thank you for being part of my ordinary days and turning them into memories I know I'll miss someday.\n\nMaybe life will take us in different directions, and maybe we won't always have the same amount of time for each other. But I hope that whenever we look back, we remember that we had something real here.\n\nAnd no matter where life takes us, a part of me will always be grateful that I got to experience this chapter with you.\n\n[Your name]" },
    { name: "Maem Kath", photo: "images/Kath.jpg",
      preview: "Thank you for showing up, even on the boring days...",
      letter: "Thank you for showing up, even on the boring days. Honestly those are the ones I'll remember most. [Add one specific thing they did for you.]\n\nYou make things lighter without even trying, and I don't think you know how much that has mattered.\n\nWhen life gets busy, I hope we still text, still meet up, still say 'remember when'. I'd really like that.\n\n[Your name]" },
    
{ name: "Bry", photo: "images/Bry.jpg",
  preview: "Somehow you always knew when I needed you...",
  letter: "Somehow you always knew when I needed someone, and you never made a big deal out of it. [Add a real memory here.]\n\nI'm glad we got to grow up a little alongside each other. I hope we keep doing that, wherever we end up.\n\n[Your name]" },

{ name: "Kiann", photo: "images/Kiann.jpg",
  preview: "Somehow we've become friends because of a purpose...",
  letter: "Somehow we've become friends because of a purpose, and blah blah blah."
},
{ name: "Chrisleen", photo: "images/Chrisleen.jpg",
  preview: "Somehow we've become friends because of a purpose...",
  letter: "Somehow we've become friends because of a purpose, and blah blah blah."
}
    ],

  // INSIDE JOKES: teaser on front, full story on click.
  jokes: [
    { title: "[Inside joke #1]", teaser: "You had to be there.", story: "[Explain the full story, who said it, what happened.]" },
    { title: "[Iconic quote]",   teaser: "\"[Quote]\" , [who]", story: "[The context nobody outside the group would get.]" },
    { title: "[Nickname]",       teaser: "Don't ask.", story: "[How it started.]" },
    { title: "[Most embarrassing moment]", teaser: "We swore we'd never mention it.", story: "[We're mentioning it.]" }
  ],

  // COLLECTION OF WORDS
  words: [
    "Thank you for being part of my growing-up years.",
    "We didn't plan these memories. We just lived them.",
    "One day, these ordinary days will be the stories we tell.",
    "I hope we meet again in every version of our lives.",
    "Some chapters end, but that doesn't make them any less beautiful.",
    "If I could keep one thing from this chapter, it would be the people in it."
  ],

  // TIME CAPSULE
  capsule: {
    message: "If you're reading this years from now, I hope life has been kind to you. I hope we're becoming the people we once dreamed of being. Maybe our schedules have changed, maybe we're chasing different dreams, and maybe we don't see each other as often as we used to. But I hope you can still look at these pictures and remember how we laughed, how we made ordinary days special, and how lucky we were to have each other during this part of our lives.",
    favorites: ["[Favorite memory 1]", "[Favorite memory 2]"],
    rightNow: "[What we're all doing in life right now]",
    dreams: "[Our current dreams and goals]",
    neverChange: "[What we hope never changes about us]"
  },

  // FINAL SECTION
  finale: {
    headline: "To the people who made this chapter worth remembering.",
    text: "Thank you for the memories we planned, the ones that happened by accident, and all the moments in between. Thank you for being part of a chapter I know I'll look back on with a smile. Whatever happens next, I'm glad this part of my life had you in it.",
    closing: "This isn't the end of our story. It's just a place to remember where it all began."
  }
};
