let stageText;
let stage;
let option;
let dice = 0;
let song;
let bg;
let inventory = [];
let item1 = "boots";
let bossAlive;
let bossLife;
let damage;
let arrows;
let canShoot;
let combatLog = "";
let win = false;
let interval = 25;

function preload() {
  song = loadSound("Assets/bg1.mp3");
  bg = loadImage("Assets/Adventurebackground.jpg");
  rollD = loadSound("Assets/DiceRoll.mp3");
}

function setup() {
  createCanvas(600, 600);
  bossAlive = true;
  bossLife = 80;
  stage = "0";
  arrows = 10;
  canShoot = true;
  combatTimer = 0;
}

function draw() {
  background(0);

  // story text
  // Stage progression
  if (stage === "0") {
    background(bg);
    fill("rgba(0,0,0,0.75)");
    rect(15, 15, 560, 250);
    stageText = `After five grueling days of traversing the endless, desolate plains, your perseverance has finally paid off. There, standing before you, is the long-sought entrance to the tomb. The legends whispered in hushed tones about its existence were true. The ancient, foreboding structure looms ahead, its presence both awe-inspiring and ominous. The journey was arduous, but you’ve made it. The tomb awaits, its mysteries beckoning you to uncover what lies within

A. Enter the tomb`;
  }
  fill(255);
  textSize(18);
  text(stageText, 25, 25, 550, 550);

  //Stage 1
  if (stage === "1") {
    //stage text
    stageText = `You wrestle and push your way through the narrow opening, finally squeezing inside. As you step into the dark room, two crystals on either side of the wall in front of you suddenly burst into a fierce aquamarine glow. Their light casts eerie shadows that dance across the walls. A haunting, almost wailing sound emanates from the crystals, reverberating through the room.
There's no time to ponder the mysterious source of their light. With the sound echoing in your ears and the room cloaked in shadows, you must make a decision. Where will you go next?

A. Follow the corridor
B. Pick up the boots`;
  }

  //Stage 2
  else if (stage === "2") {
    //stage text
    stageText = `You start walking down the dark corridor, more of the ghostly crystals starts lighting up as you go, showing you the way. They don't shine enough to see the end of the hallway, so you advance with caution.

A. Keep walking`;
  }

  //Stage 2 continuation
  if (stage === "2.1") {
    //stage text
    stageText = `Suddenly, the ground beneath you gives way—your foot plunges into empty space. Your heart leaps to your throat as you stumble forward, barely catching yourself before you tumble into a yawning pit. The dim light of the crystals flickers ominously, revealing the jagged edge of the chasm you nearly fell into.

A. Inspect the chasm.
B. Turn back and leave. `;
  }

  //Stage 3 option A
  if (stage === "3.1") {
    //stage text
    stageText = `You start looking down the chasm. Pure blackness. You get a coin from your pocket and throw it to the chasm —one, two, three, four... a bottomless pit. It doesn't look that wide. Maybe you can jump through.

A. Try to jump over the chasm. `;
  }
  //Stage 3 option B
  if (stage === "3.2") {
    //stage text
    stageText = `As you turn to retreat, the faint glow of the crystals fades into nothingness, plunging you into absolute darkness. Panic wells up as you stretch your hands out, desperately feeling your way back. Step by cautious step, you move forward—until suddenly, your hands collide with cold stone. A wall. But... that wasn’t there before. You were certain you’d walked in a straight line. Heart pounding, you frantically press against the surface, searching for a hidden latch, a button, anything. But it doesn't budge. No matter how hard you try, the wall remains still. The unsettling realization sinks in, sending a chill down your spine: you're trapped. The only way trough is by the chasm.

A.Turn back and inspect the chasm, there must something to do. `;
  }
  //Stage 3 option A continuation
  if (stage === "3.1.1") {
    //stage text
    stageText = `You take some steps back to grab some momentum, and you start running, like you never had before, just the treasure that lies ahead in your mind. You get into the ledge of the chasm and....

A. Check if you are athletic enough to land on the other side. Roll a d20 `;
  }
  //Stage 4 passed athletics check
  if (stage === "4P") {
    //stage text
    stageText = `You rolled a ${dice} :) 

You land firmly on the other side, your breath catching as you steady yourself. For a moment, you can't believe you made it. It seemed so much more dangerous in the heat of the moment, but now that you're across, you realize—the chasm wasn’t as wide as it looked.

A. Keep walking. `;
  }
  //Stage 4 failed athletics check
  if (stage === "4F") {
    //stage text
    stageText = `You rolled a ${dice} :(

You miss the ledge by mere inches, and in an instant, you're plummeting into the abyss. The wind roars in your ears as the dark chasm swallows you whole, with certain death waiting below. In those fleeting moments, your entire life flashes before your eyes—memories, faces, everything. And then—nothing..

A. Restart. `;
  }
  //Stage 5
  if (stage === "5") {
    //stage text
    stageText = `You continue down the corridor, embracing the encroaching darkness as you delve deeper into the abyss. With each step, the ghostly crystals flicker to life, illuminating your path with a cold, spectral glow. After ten minutes of walking straight, you reach a large, shadowy chamber.
In front of you stands a monolithic door, its imposing presence accentuated by the array of crystals that light up around it. As you approach, a pedestal slowly rises from the floor, revealing three intricate dials. Each dial is adorned with a unique set of symbols, and you quickly realize that they can be turned independently. The room is silent except for the soft hum of the crystals, and the challenge before you becomes clear.

A. Turn the dials and see what happen.
B. Look around the room`;
  }
  //Stage 6 option A
  if (stage === "6A") {
    //stage text
    stageText = `You begin to turn the dials, studying the ancient symbols etched into them. As you examine the glyphs, a glimmer of recognition sparks in your mind—they are written in ancient Khalarian script. You dig deep into your memory, trying to recall any knowledge you have of these symbols. Each glyph seems to whisper forgotten secrets, and you strain to piece together their meanings. Your thoughts race as you consider how these symbols might interact with the dials, hoping to unlock the secrets of the monolithic door.

A. Check if you are wise enough to know what the symbols are. Roll a d20.`;
  }
  //Stage 6 option B
  if (stage === "6B") {
    //stage text
    stageText = `You start looking around the room, hoping to find something that might help you unlock the door. Shadows dance across the walls as you scan your surroundings for any clues or hidden mechanisms. Your eyes sweep over the murals, alcoves, and mysterious runes.

A.Roll a d20 to perform a perception check to see if you find something.`;
  }
  //Stage 6 option A pass
  if (stage === "6AP") {
    //stage text
    stageText = `You rolled a ${dice} :)

You concentrate deeply on the ancient Khalarian glyphs, and with a sudden flash of insight, their meanings become clear. The symbols reveal a complex pattern that corresponds to the dials. Your knowledge of ancient languages has paid off—carefully, you start adjusting the dials according to the symbols’ correct sequence. As you do, you hear a faint click, and the monolithic door begins to tremble, indicating that you are on the right track.

A. You input the combination and the door start to open
`;
  }
  //Stage 6 option A Fail
  if (stage === "6AF") {
    //stage text
    stageText = `You rolled a ${dice} :(

Despite your best efforts, the ancient Khalarian symbols remain elusive. The more you study them, the more confusing they seem. Your attempts to match the glyphs to the dials lead nowhere, and you can’t decipher their meanings. Frustration mounts as you realize you’re still missing a crucial piece of the puzzle, and the monolithic door remains unyielding`;
  }
  //Stage 6 option B Pass
  if (stage === "6BP") {
    //stage text
    stageText = `You rolled a ${dice} :)

As you carefully examine the room, your sharp eyes catch sight of something partially hidden in the dim light—a skeleton lying on the floor. The remains of a long-forgotten explorer, clutching a scroll tightly in its bony grasp. The sight sends a shiver down your spine, a stark reminder of what might await you if you fail to solve the puzzle.

You approach the skeletal remains and gently pry the scroll from the explorer’s deathly grip. Unrolling it, you discover that it contains the crucial combination needed for the dials. But as you study the scroll, you notice something disturbing: broken bones, bite marks, and deep cuts mar the skeleton. The wounds suggest that this person didn’t meet their end by natural causes. A grim realization settles in—this adventurer’s death was far from ordinary, and something sinister may still lurk in the shadows of this tomb.

A. You input the combination and the door start to open`;
  }
  //Stage 6 option B Fail
  if (stage === "6BF") {
    //stage text
    stageText = `You rolled a ${dice} :(

You scan the room, but the oppressive darkness and shifting shadows make it difficult to discern any details. Despite your efforts, you find no clues or hidden mechanisms that might help you open the door. The room remains shrouded in mystery, and the monolithic door stands unchanged and impenetrable. With nothing of apparent use in sight, you’re left to ponder your next move in the eerie silence.`;
  }
  //Stage 7
  if (stage === "7") {
    //stage text
    stageText = `The door creaks open as you step into the room. As you move closer to the center, your eyes catch a strange shadow in the distance—a tall, looming, shapeless figure. You take a few cautious steps forward when suddenly—it stirs. The figure awakens with a low, menacing growl and begins to advance. There's no escape. The only way forward is to fight.

A. Fight for your life`;
  }
  if (stage === "8") {
    //stage text
    stageText = `You have 10 arrows, make them count:

`;
    combatSim();
    textSize(14);
    drawTextBox(combatLog);
  }

  if (stage === "9" && win === true) {
    stageText = `Congrats! You killed the boss and you still have ${arrows} arrows left
This is the battle report:
`;
    textSize(14);
    drawTextBox(combatLog);
  }

  if (stage === "9" && win === false) {
    stageText = `you are out of arrows, your aim was not true and the boss is still alive, you are dead
This is the battle report:`;
    textSize(14);
    drawTextBox(combatLog);
  }
}
function keyPressed() {
  if (stage === "0") {
    if (key === "a") {
      song.loop();
      stage = "1";
      console.log(stage);
    } else if (key === "b") {
      inventory.push(item1);
    } else if (key === "m") {
      song.pause();
    } else if (key === "p") {
      song.play();
    }
  } else if (stage === "1") {
    if (key === "a") {
      stage = "2";
      console.log(stage);
    }
  } else if (stage === "2") {
    if (key === "a") {
      stage = "2.1";
      console.log(stage);
    }
  } else if (stage === "2.1") {
    if (key === "a") {
      stage = "3.1";
      console.log(stage);
    } else if (key === "b") {
      stage = "3.2";
      console.log(stage);
    }
  } else if (stage === "3.1") {
    if (key === "a") {
      stage = "3.1.1";
      console.log(stage);
    }
  } else if (stage === "3.1.1") {
    if (key === "a") {
      rollDice();
      if (dice >= 10) {
        stage = "4P";
        console.log(stage);
      } else {
        stage = "4F";
        console.log(stage);
      }
    }
  } else if (stage === "3.2") {
    if (key === "a") {
      stage = "3.1";
      console.log(stage);
    }
  } else if (stage === "4P") {
    if (key === "a") {
      stage = "5";
      console.log(stage);
    }
  } else if (stage === "4F") {
    if (key === "a") {
      stage = "0";
      console.log(stage);
    } else if (keyCode === LEFT_ARROW) {
      stage = "3.1.1";
    }
  } else if (stage === "5") {
    if (key === "a") {
      stage = "6A";
      console.log(stage);
    } else if (key === "b") {
      stage = "6B";
      console.log(stage);
    }
  } else if (stage === "6A") {
    if (key === "a") {
      rollDice();
      if (dice >= 10) {
        stage = "6AP";
        console.log(stage);
      } else {
        stage = "6AF";
        console.log(stage);
      }
    }
  } else if (stage === "6B") {
    if (key === "a") {
      rollDice();
      if (dice >= 10) {
        stage = "6BP";
        console.log(stage);
      } else {
        stage = "6BF";
        console.log(stage);
      }
    }
  } else if (stage === "6AF") {
    if (keyCode === LEFT_ARROW) {
      stage = "6A";
    }
  } else if (stage === "6AP") {
    if (key === "a") {
      stage = "7";
      console.log(stage);
    }
  } else if (stage === "6BP") {
    if (key === "a") {
      stage = "7";
      console.log(stage);
    }
  } else if (stage === "7") {
    if (key === "a") {
      stage = "8";
    }
  }
}

function rollDice() {
  dice = int(random(0, 21));
  rollD.play();
}
function drawTextBox(storyText) {
  // Draw a white box for the text
  fill(255); // White background
  rect(25, 70, 500, 500, 20); // Rounded rectangle for the story box

  // Add text inside the box
  fill(50); // Dark gray text
  text(storyText, 40, 70, 625, 750); // Text area inside the rectangle
}
function combatSim() {
  if (bossAlive != false && canShoot == true) {
    for (let i = 0; i < arrows; i += 1) {
      arrows -= 1;
      damage = int(random(5, 20));
      bossLife = bossLife - damage;
      fill("white");

      combatLog += `
You dealt ${damage} to the boss
You have ${arrows} arrows remaining
It has ${bossLife} hit point remaining
`;

      console.log(`You dealt ${damage} points of damage to the boss
You have ${arrows} arrows remaining
The boss has ${bossLife} hit point remaining
`);
      if (arrows == 0) {
        canShoot = false;
      }
      if (bossLife <= 0) {
        bossAlive = false;
        win = true;
        console.log("boss is dead");
        break;
      }
      if (bossLife > 0 && canShoot == false) {
        console.log(
          `you are out of arrows, your aim was not true and the boss is still alive, you are dead`
        );
        win = false;
      }
    }
  }
  if (bossAlive == false || (bossLife > 0 && canShoot == false)) {
    setTimeout(() => {
      stage = "9";
      console.log(stage);
    }, 6000); // 5-second delay before switching to stage 9
  }
}
