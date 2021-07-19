<template>
  <Dashboard :user="user" />
</template>

<script>
import { remote } from 'electron';
import Dashboard from './components/Dashboard';

export default {
  components: {
    Dashboard
  },
  data () {
    return {
      user: {
        name: 'Vicio Betespin',
        email: 'vicio@betespin.com',
        username: viciespin07
      }
    }
  },
  methods: {}
}
</script>

<style>

</style>
