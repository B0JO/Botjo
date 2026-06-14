presence: {
  status: "online",
  activities: [
    {
      name: "With bojo",
      type: 0,
    },
  ],
},

commands: {
  owners: ["642757440340885555"],
  defaultCooldown: 3,
  deleteCommands: false,
  testGuildId: process.env.TEST_GUILD_ID,
},

applications: {
  defaultQuestions: [
    {
      question: "What is your Discord username?",
      required: true,
    },
    {
      question: "How old are you?",
      required: true,
    },
    {
      question: "Why do you want this position?",
      required: true,
    },
    {
      question: "Do you have previous experience?",
      required: true,
    },
    {
      question: "How active can you be?",
      required: true,
    },
  ],

  statusColors: {
    pending: "#FEE75C",
    approved: "#57F287",
    denied: "#ED4245",
  },

  applicationCooldown: 24,
  deleteDeniedAfter: 7,
  deleteApprovedAfter: 30,
  managerRoles: [],
},

embeds: {
  colors: {
    primary: "#5865F2",
    secondary: "#2F3136",

    success: "#57F287",
    error: "#ED4245",
    warning: "#FEE75C",
    info: "#3498DB",

    light: "#FFFFFF",
    dark: "#202225",
    gray: "#99AAB5",

    blurple: "#5865F2",
    green: "#57F287",
    yellow: "#FEE75C",
    fuchsia: "#EB459E",
    red: "#ED4245",
    black: "#000000",

    giveaway: {
      active: "#57F287",
      ended: "#ED4245",
    },

    ticket: {
      open: "#57F287",
      claimed: "#FAA61A",
      closed: "#ED4245",
      pending: "#99AAB5",
    },

    economy: "#5865F2",
    birthday: "#EB459E",
    moderation: "#9B59B6",

    priority: {
      none: "#95A5A6",
      low: "#3498DB",
      medium: "#2ECC71",
      high: "#F1C40F",
      urgent: "#E74C3C",
    },
  },

  footer: {
    text: "Botjo",
    icon: null,
  },

  thumbnail: null,

  author: {
    name: "Botjo",
    icon: null,
    url: null,
  },
},

economy: {
  currency: {
    name: "Robux",
    namePlural: "Robux",
    symbol: "R$",
  },

  startingBalance: 100,
  baseBankCapacity: 250000,

  dailyAmount: 250,

  workMin: 50,
  workMax: 500,

  begMin: 10,
  begMax: 100,

  robSuccessRate: 0.45,
  robFailJailTime: 3600000,
},

welcome: {
  defaultWelcomeMessage:
    "🎉 Welcome {user} to {server}! Enjoy your stay.",

  defaultGoodbyeMessage:
    "👋 {user} has left the server. We hope to see you again.",

  defaultWelcomeChannel: null,
  defaultGoodbyeChannel: null,
},

verification: {
  enabled: false,
},

features: {
  economy: true,
  leveling: true,
  moderation: true,
  logging: true,
  welcome: true,

  tickets: true,
  giveaways: true,
  birthday: true,
  counter: true,

  verification: false,
  reactionRoles: true,
  joinToCreate: true,

  voice: true,
  search: true,
  tools: true,
  utility: true,
  community: true,
  fun: true,
},
