<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
export default{
  data(){
    return{
      nama: ""
    }
  },
  methods:{
    berubah(){
      this.nama="Danang"
    },
    async ambildata(){
      const response = await fetch("http://localhost:3000/sensor1");
      const data = await response.json();
      this.nama = data.sensor1
      console.log(data)
    },
  },
};
</script>

<template>
  <header>
    <input type="text" v-model="nama"/>
    {{ nama }}
    <button @click="berubah()">berubah</button>
    <button @click="ambildata()">ambildata  </button>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
