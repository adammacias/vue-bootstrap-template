<template>
  <div id="app">
    <div class="container p-5">

      <header>
        <h1>Bootstrap + Vue</h1>
        <p>Componentes criados a partir de cores temas ($theme-colors) são disponibilizados pelo Bootstrap por padrão, você pode <a href="https://getbootstrap.com/docs/4.1/getting-started/theming/">customizar o tema</a> incluindo e removendo cores tema e/ou componentes</p>
      </header>

      <!-- Colors -->
      <section class="mb-4">
        <h2 class="mb-3">Cores</h2>
        <div class="row">
          <div class="col-md-3 mb-2" v-for="color in themeColors">
            <code>.{{ color }}</code>
            <div :class="'p-3 bg-blue bg-' + color"></div>
          </div>
        </div>
      </section>

      <!-- Buttons -->
      <section class="mb-4">
        <h2 class="mb-3">Botões</h2>
        <div class="row">
          <div class="col-md-3 mb-2" v-for="color in themeColors">
            <button type="button" :class="'btn btn-block btn-' + color">{{ color }}</button>
            <button type="button" :class="'btn btn-block btn-outline-' + color">{{ color }}</button>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      themeColors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>
