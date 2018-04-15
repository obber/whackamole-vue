Vue.component('Moles', {
  props: ['gameActive', 'moles'],
  methods: {
    handleWhack: function(moleId) {
      this.$emit('whack', moleId);
    }
  },
  computed: {
    classObject: function() {
      return {
        moles: true,
        'game-active': !!this.gameActive,
      }
    }
  },
  template: `
    <div v-bind:class="classObject">
      <Mole
        v-for="(moleState, idx) in moles"
        v-bind:key="idx"
        v-bind:active="moleState"
        v-bind:id="idx"
        v-on:whack="handleWhack"
      >
      </Mole>
    </div>
  `
});
