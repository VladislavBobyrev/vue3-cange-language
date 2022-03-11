export default {
  install(app, options)
  {
    let curent = 'ru'

    const cangeLenguage = nameLang =>
    {
      curent = nameLang
      console.log(curent)
    }
    
    app.config.globalProperties.$i18n = key =>
    {
      return key.split('.').reduce((words, k) =>
      {
        return words[k] || '===UNDEFIEND==='        
      }, options[curent])
    }
    
    app.provide('changeI18n', cangeLenguage)
  }
}