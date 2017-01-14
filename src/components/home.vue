<template lang="html">
  <div id="home">
    <div class="container">
      <div class="header">
          <h1>Boop</h1>
          <span class="point"></span>
      </div>
      <div class="wifiContainer">
        Wifi List
        <ul>
          <li v-for='wifi in wifiList'>
            {{wifi}}
          </li>
        </ul>
      </div>
      <div class="step">
        <div class="prevStep">

        </div>
        <router-link to="/setup">
          <div class="nextStep">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'home',
  data () {
    return {
      wifiList:{
      }
    }
  },
  computed: {},
  ready () {
    console.log(' LOGWIFI: ENABLE')
    console.log(WifiWizard);
    WifiWizard.isWifiEnabled((handler)=>{
      console.log('wifi Is On');
    })
    WifiWizard.listNetworks((list)=>{
      console.log(list);
      this.wifiList = list
    }, err)
  },
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
@import "~style/globals";
@import "~style/home";
</style>
