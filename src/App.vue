<template>
  <div class="container">
    <h1>{{$i18n('app.text')}}</h1>
    <div class="card">
      <h2> {{$i18n('app.title')}}</h2>
      <button class="btn primary" @click="changelang">{{$i18n('app.changeBtn')}}</button>
       
      <select class="select" name="languge" v-model="selected">
        <option v-for="option in options" :value="option.value">
          {{option.text}}          
        </option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  inject: ['changeI18n'],
  data() {
    return{
    selected: 'ru',
    options: [
       { text: 'Русский', value: 'ru' },
      { text: 'English', value: 'en' },
      { text: 'France', value: 'fr' },
      { text: 'China', value: 'ch' },
    ]
    }

  },
  methods: {
    changelang(){
      this.changeI18n(this.selected)
      this.$forceUpdate()
    }
  }

}
</script>

<style>

</style>