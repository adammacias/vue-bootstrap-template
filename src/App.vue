<template>
  <div id="app">
    <b-container class="p-5">

      <header>
        <h1>Bootstrap + Vue</h1>
        <p>Componentes criados a partir de cores temas ($theme-colors) são disponibilizados pelo Bootstrap por padrão, você pode <a href="https://getbootstrap.com/docs/4.1/getting-started/theming/">customizar o tema</a> incluindo e removendo cores tema e/ou componentes</p>
      </header>

      <!-- Colors -->
      <section class="mb-4">
        <h2 class="mb-3">Cores</h2>
        <b-row>
          <b-col class="mb-2" md="3" v-for="color in themeColors">
            <code>.{{ color }}</code>
            <div :class="'p-3 bg-blue bg-' + color"></div>
          </b-col>
        </b-row>
      </section>

      <!-- Buttons -->
      <section class="mb-4">
        <h2 class="mb-3">Botões</h2>
        <b-row>
          <b-col class="mb-2" md="3" v-for="color in themeColors">
            <button type="button" :class="'btn btn-block btn-' + color">{{ color }}</button>
            <button type="button" :class="'btn btn-block btn-outline-' + color">{{ color }}</button>
          </b-col>
        </b-row>
      </section>

      <!-- Modal -->
      <section class="mb-4">
        <h2 class="mb-3">Modal</h2>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-block btn-primary" @click="modalShow = !modalShow">
          Abrir modal de demostração
        </button>

        <!-- Modal component -->
        <b-modal
          cancel-title="Cancelar"
          centered
          title="Título do Modal"
          size="sm"
          v-model="modalShow"
          ok-title="Da hora!"
          class="text-dark w-50 float-left">
            Olá mundo! <a href="https://bootstrap-vue.js.org/docs/components/modal">Veja como me usar</a>.
        </b-modal>
      </section>

    </b-container>
  </div>
</template>

<script>
import bModal from 'bootstrap-vue/es/components/modal/modal'

export default {
  name: 'app',
  data () {
    return {
      themeColors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      modalShow: false
    }
  },
  components: {
    'b-modal': bModal
  }
}
</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>
