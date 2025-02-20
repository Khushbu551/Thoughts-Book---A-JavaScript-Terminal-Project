//  Import readline-sync module(for user input)
import readlineSync from "readline-sync";

// Introduction Story: "The For Doors of Thought"
function introductionStory() {
  const storyLines = [
    "🔷 Welcome to the Thoughts Book!",
    "🔷 Imagine your mind as a room with four doors.",
    "🔷 The logic [Intelligent] opens to logic and decisions.",
    "🔷 The feel [Emotional] welcomes emotions and feelings.",
    "🔷 The sense [Senses] invites you to experience the world through senses.",
    "🔷 The memory [Memory] holds memories-joyful and challenging.",
    "🔷 Each door has something unique to offer.",
    "🔷 Choose a door, explore your thoughts, and let's begin!",
  ];

  let index = 0; // index start 0

  function displayLine() {
    if (index < storyLines.length) {
      console.log(storyLines[index]); //Current line
      index++; // for next line
      setTimeout(displayLine, 2000); // 2 second
    } else {
      readlineSync.question("\n Press Enter to start your journey...");
      console.clear();
      checkThought(); // Start the main program
    }
  }
  displayLine();
}

//  Define thought categories and their motivational messages
const msgs = {
  logic: [
    "🧠 Your mind thinks with logic - let's use it!",
    "🔍 Your thoughts are sharp - let's analyze!",
    "💡 Clear thinking leads to smart choices",
  ],
  feel: [
    "😇 Your thought is full of emotion - let's explore your feelings!",
    "😊 It's okay to feel - every emotion matters!",
    "💖 Every emotion has a story to tell.",
  ],
  sense: [
    "🤠 Enjoy the little things!",
    "🎵 The world speaks through senses.",
    "🌿 Notice the details, enjoy the present.",
  ],
  memory: [
    "💭 You are in the Memories - where past meets present!",
    "📜 Your thought is a memory - let's explore it!",
    "🌟 Your past holds lessons and joy.",
  ],
};

// I center (Logical) - Thought Decision Maze Game
function startThoughtChallenge() {
  console.clear(); // Clear the terminal before starting the game
  console.log(
    "🌿  Welcome to the Thought Challenge!\n🧩 Make your choices wisely - your decision will shape the result"
  );
  readlineSync.question("Press Enter to start...");

  console.clear();
  console.log(
    "\n ❓ Situation:\nYou are preparing for an exam, and a frind asks for help. What do you do?"
  );
  console.log(
    "A: 🧑‍🤝‍🧑 Help your friend first.\nB: 📚 Focus on your exam first.\nC: ⏳ Help for a short time, then study."
  );

  let choice;
  while (true) {
    choice = readlineSync
      .question("\nEnter your choice (A, B, or C): ")
      .trim()
      .toUpperCase();
    if (["A", "B", "C"].includes(choice)) {
      break;
    } else {
      console.log("❌ Invalid choice! Please enter A, B, or C.");
    }
  }

  //Show the result based on user's choice

  console.clear();
  console.log("\n📋 Result:");
  if (choice === "A") {
    console.log("Your friend is happy, but your preparation got delayed.");
    console.log(
      "💡 Thought: Sometimes helping others feels right, but time management is key."
    );
  } else if (choice === "B") {
    console.log(
      "You are well-prepared for the exam, but your friend might feel neglected."
    );
    console.log(
      "💡 Thought: Prioritizing yourself is important, but balancing relationships matters too."
    );
  } else if (choice === "C") {
    console.log("Both tasks are managed, but you feel time-crunched.");
    console.log(
      "💡 Thought: Balance is good, but it often comes with its challenges."
    );
  }
  console.log("\n🌱 Reflect on your choices and keep growing.");
  readlineSync.question("Press Enter to exit the game...");
  console.clear(); // Clear terminal
}

// E center (Emotional ) - Emotion-Based Response
function emotionalCenter() {
  console.log("💗 Welcome to the Emotional  - Explore Your Emotions!");
  readlineSync.question(
    "Let's explore your emotions together! Press Enter to continue..."
  );

  console.clear(); // clear terminal
  console.log("Please choose your current emotion:");
  console.log(
    "😊 Happy\n😔 Sad\n😡 Angry\n😞 Low\n🤩 Excited\n🧘 Calm\n😰 Stressed\n🙏 Grateful\n🧍 Lonely"
  );
  let emotion = readlineSync
    .question("\n(Type your choice): ")
    .trim()
    .toLowerCase();

  const happyEmotions = ["happy", "excited", "calm", "grateful"];
  const sadEmotions = ["sad", "angry", "low", "stressed", "lonely"];

  if (![...happyEmotions, ...sadEmotions].includes(emotion)) {
    console.log("❌ Invalid choice! Returning to Thoughts Book...");
    readlineSync.question("Press Enter to continue...");
    console.clear();
    return;
  }
  if (sadEmotions.includes(emotion)) {
    console.clear();
    console.log(
      `😔 You chose ${emotion}. Here are some vidios that might help:\n`
    );
    console.log(
      " ▶️ Positivity Boost - https://www.youtube.com/watch?v=JorTh7Dbin0"
    );
    readlineSync.question("\nPress Enter to return to the Thoughts Book...");
    console.clear();
  } else if (happyEmotions.includes(emotion)) {
    console.clear();
    console.log(`😊 You chose ${emotion}. Let's capture your happiness!\n`);
    console.log("Can you write 3 reasons that made you happy today?");
    let reasons = [];
    for (let i = 1; i <= 3; i++) {
      let reason = readlineSync.question(
        `⭐ Reason ${i} (type 'skip' to skip):`
      );
      if (reason.trim().toLowerCase() === "skip") break;
      reasons.push(reason.trim());
    }
    console.log("\n🌟 Your happiness matters!");
    if (reasons.length > 0) {
      console.log("Here are your happy moments:");
      reasons.forEach((r, idx) => console.log(`${idx + 1}. ${r}`));
    } else {
      console.log("That's okay! Keep smiling!");
    }
    readlineSync.question("\nPress Enter to return to the Thoughts Book...");
    console.clear();
  }
}

// S center (Sensory Center) - Sensory Flash Game
function sensoryGame() {
  console.log("🌿Let's test your senses with the Memory Blink Game!");
  let start = readlineSync.question(
    "Press Enter to start...(Type 'skip' to return): "
  );
  if (start.trim().toLowerCase() === "skip") return;

  let sentences = ["I am happy today.", "The sky is clear today."];
  let score = 0;

  for (let i = 0; i < sentences.length; i++) {
    console.clear();
    console.log(`📝 Memorize this sentence:`);
    console.log(`"${sentences[i]}"`);

    let now = Date.now(); // Current time save
    while (Date.now() - now < 2000) {} // 2 second delay loop

    console.clear(); // 2 second after clear

    let userInput = readlineSync
      .question("💭 Now type the exact sentence you saw: ")
      .trim();
    //Removing any extra quotes from user input
    userInput = userInput.replace(/['"\\]+/g, "");
    if (userInput.trim().toLowerCase() === sentences[i].trim().toLowerCase()) {
      console.log("✅ Perfect! Your memory is strong! You earned 10 points!");
      score += 10;
    } else {
      console.log(
        `❌ Oh no! The sentence was: "${sentences[i]}". It's Okay, practice will make you better!`
      );
    }

    if (i === 0) {
      let nextRound = readlineSync
        .question("🔄 Would you like to play another round? (yes/no): ")
        .trim()
        .toLowerCase();
      if (nextRound !== "yes") {
        console.log(`🌱 Thanks for playing! Your total score: ${score}`);
        readlineSync.question("Press Enter to return...");
        console.clear();
        return;
      }
    } else {
      console.log(`🌱 Thanks for playing! Your total score: ${score}`);
      readlineSync.question("Press Enter to return...");
      console.clear();
    }
  }
}

// M Center(Memory) - Renew Your Memory Game
function memoryCenter() {
  console.log("🧠 Welcome to the memory - Renew Your Memory!");
  let memoryType = readlineSync
    .question("Is your memory 😊 Happy or 😔 Sad? (happy?sad): ")
    .trim()
    .toLowerCase();

  if (memoryType === "happy") {
    console.log(
      "\n✨ Good memories are a beautiful part of life! But remenber - new moment are created when you stay present. Take some time for today!"
    );
    readlineSync.question("Press Enter to return...");
    console.clear();
    return;
  } else if (memoryType === "sad") {
    console.clear();
    console.log("🎨Let's renew your memory.");
    let sadFeelings = [
      "😔 You are sad",
      "🤔 You are confused",
      "🥱 You are tired",
    ];
    const positiveFeelings = {
      1: "🌄 Sometimes being sad is normal, but remember every darkness leads to a new dawn.",
      2: "🔍 Confusion means you are learning something new, take your time, answers will come.",
      3: "🛌  Taking some rest is important, giving time to yourself is also an achievement.",
    };
    console.log("\nHere are 3 feelings you might be experiencing:");
    sadFeelings.forEach((feeling, index) => {
      console.log(`${index + 1}. ${feeling}`);
    });

    let choice = readlineSync
      .question("\n🔄 Which part would you like to replace? (1, 2, or 3): ")
      .trim();
    if (!["1", "2", "3"].includes(choice)) {
      console.log("❌ Invalid choice! Try again.");
      readlineSync.question("Press Enter to return...");
      console.clear();
      return;
    }

    let chosenIndex = parseInt(choice) - 1;
    sadFeelings[chosenIndex] = positiveFeelings[choice];
    console.clear();
    console.log("🎨 You have viewed your memory in a new way:");
    sadFeelings.forEach((feeling) => {
      console.log(`- ${feeling}`);
    });
    console.log(
      "\n🌱 Your memory is renewed! Every little positivity is the beginning of a new journey."
    );
    readlineSync.question("Press Enter to return...");
    console.clear();
  } else {
    console.log("❌ Invalid input! Only 'happy' or 'sad' is allowed.");
    readlineSync.question("Press Enter to return...");
    console.clear();
  }
}

//  Main Thought Categorizer Code (unchanged)
function checkThought() {
  while (true) {
    // Run a loop to allow multiple thoughts to be entered
    let txt = readlineSync
      .question("\n💬 Enter a thought(or type 'exit' to quit):")
      .trim()
      .toLowerCase();

    // 4. Exit condition (If the user type "exit", the program will stop)
    if (txt === "exit") {
      console.log("🌱 Keep reflecting, keep growing!");
      break; // Break the loop to exit the program
    }

    let type; // Variable to store thought type

    // 5. Categorize the thought based on keywords
    if (["plan", "goal", "idea", "logic"].some((w) => txt.includes(w))) {
      type = "logic";
    } else if (["love", "happy", "sad", "anger"].some((w) => txt.includes(w))) {
      type = "feel";
    } else if (
      ["smell", "taste", "sound", "touch", "see"].some((w) => txt.includes(w))
    ) {
      type = "sense";
    } else if (
      ["remember", "past", "childhood", "old"].some((w) => txt.includes(w))
    ) {
      type = "memory";
    } else {
      console.log("🤔 Thought not recognized. Try another word.");
      continue; // If the thought doesn't match, restart the loop
    }

    console.log(`🧩 Thought Type: ${type.toUpperCase()}`);
    let msg = msgs[type][Math.floor(Math.random() * msgs[type].length)];
    console.log(msg);

    // Offer thought Decision Maze Game if logical thought detected

    if (type === "logic") {
      let playGame = readlineSync
        .question(
          "\nWould you like to play the Thought Challenge game? (yes/no): "
        )
        .trim()
        .toLowerCase();
      if (playGame === "yes") startThoughtChallenge(); // call the game function
    } else if (type === "feel") {
      emotionalCenter();
    } else if (type === "sense") {
      console.log("\n🌱 Welcome to the Senses Center!");
      sensoryGame();
    } else if (type === "memory") {
      memoryCenter();
    } else {
      console.log("💡 No additional feature for this thought yet.");
    }
  }
}

//  Start the program
introductionStory();
