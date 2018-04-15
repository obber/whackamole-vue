new Vue({
  el: '#whackamole',
  data: {
    // counters
    whacks: 0,
    highScore: 0,
    timer: 0,
    // game state
    moles: [false, false, false, false],
    gameActive: false,
  },
  methods: {
    startRound: function() {
      this.timer = 20;
      this.whacks = 0;
      this.gameActive = true;
      this.deactivateAllMoles();
      this.startTimer();
      this.startMoles();
    },
    endRound: function() {
      const { whacks, highScore } = this;
      this.stopTimer();
      this.stopMoles();
      this.deactivateAllMoles();
      this.highScore = Math.max(whacks, highScore);
      this.gameActive = false;
    },
    startTimer: function() {
      this.timerInterval = setInterval(this.decrementTime.bind(this), 1000);
    },
    stopTimer: function() {
      clearInterval(this.timerInterval);
    },
    startMoles: function() {
      this.moleInterval = setInterval(this.activateRandomMole.bind(this), 500);
    },
    stopMoles: function() {
      clearInterval(this.moleInterval);
    },
    decrementTime: function() {
      this.timer = this.timer - 1;
      if (this.timer === 0) {
        this.endRound();
      }
    },
    incrementWhacks: function(moleId) {
      const moles = this.moles.slice();
      moles[moleId] = false;
      this.whacks = this.whacks + 1;
      this.moles = moles;
    },
    activateRandomMole: function() {
      const randomMoleIndex = Math.floor(Math.random() * this.moles.length);
      if (!this.moles[randomMoleIndex]) {
        this.activateMole(randomMoleIndex);
      }
    },
    activateMole: function(id) {
      const moles = this.moles.slice();
      moles[id] = true;
      this.moles = moles;
      setTimeout(() => this.deactivateMole(id), 1500);
    },
    deactivateMole: function(id) {
      const moles = this.moles.slice();
      moles[id] = false;
      this.moles = moles;
    },
    deactivateAllMoles: function () {
      this.moles = this.moles.map(() => false);
    }
  }
});
