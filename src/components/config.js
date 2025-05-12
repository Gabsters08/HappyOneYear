const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0504", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Why is my bf so perfect?", // Another example query
    `Why is bf's laugh so addicting?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-05-04", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Fukashigi no Carte", // Title of the song
      artist: "Rascal Does not Dream of a Bunny Girl Senpai", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Japanese Denim",
      artist: "Daniel Caesar",
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      left: "15%",
      top: "40%",
    },
    {
      title: "From the Start",
      artist: "Laufey",
      left: "30%",
      top: "75%",
    },
    {
      title: "Light",
      artist: "Wave to Earth",
      left: "5%",
      top: "65%",
    },
    {
      title: "See You Again",
      artist: "Tyler the Creator, Kali Uchis",
      left: "25%",
      top: "90%",
    },
    {
      title: "Only",
      artist: "LeeHi",
      left: "35%",
      top: "50%",
    },
    {
      title: "Moonlight",
      artist: "Twice",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Messages with the Girls", // Title for the messages recap page
    messageGallery: [
      { title: "May 3, 2024", description: "Hershey Park Recap." }, // Message entry
      { title: "May 5, 2024", description: "Makalia didn't forget the fumble either." },
      { title: "May 5, 2024", description: "The Cutest ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "April 27, 2024", description: "Prom " }, // Picture entry
      { title: "September 15, 2024", description: "College Sleepover 💕" },
      { title: "December 14, 2024", description: "Rocky Ridge" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hiiiii baby, Happy 1 year! I can't believe it's already been a year, it's flown by so fast it seems. I always think back to our date at the arcade and the fact that you remembered me talking about it and offered to take me there, from then on I knew you were the one. I love you so so so so much and I could never imagine spending the rest of my life with anyone else. You're my absolute world and I can't wait to spend the next year and more with you. Happy 1 year anniversary again, I love you 💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for an amazing year! 💖 Excited to spend many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
