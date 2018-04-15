Vue.component('Mole', {
  props: ['active', 'id'],
  methods: {
    handleClick: function() {
      if (this.active) {
        this.$emit('whack', this.id);
      }
    }
  },
  computed: {
    classObject: function() {
      return {
        'mole-container': true,
        active: this.active,
        inactive: !this.active,
      };
    }
  },
  template: `
    <div v-bind:class="classObject">
      <div class="mole-image-container">
        <img
          v-on:click="handleClick"
          class="mole"
          src="/assets/mole.png"
          alt="mole"
        />
      </div>
      <img
        class="dirt"
        src="/assets/dirt.svg"
        alt="mole dirt"
      />
    </div>
  `
});
