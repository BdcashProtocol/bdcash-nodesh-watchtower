<template>
  <div id="app">
      <b-navbar>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="/logo.png" />
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item href="/#/">NodeSH network</b-navbar-item>
          <b-navbar-item href="/#/devchain">DevChain sidechains</b-navbar-item>
          <b-navbar-item href="/#/rewards">NodeSH Rewards</b-navbar-item>
        </template>
      </b-navbar>
      <router-view />
      <hr />BDCash Nodesh Watchtower
      <a
        href="https://github.com/BdcashProtocol/bdcash-nodesh-watchtower"
        target="_blank"
      >open-source</a> project by
      <a href="https://bdcashprotocol.com" target="_blank">BDCash Protocol</a>.
      <br />
      <br />
  </div>
</template>

<script>
  let BDCashCore = require("@bdcash-protocol/core");

  export default {
    data() {
      return {
        bdcash: new BDCashCore(true)
      };
    },
    methods: {
    }
  };
  </script>

<style>
  #app {
    font-family: "Sen";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
  }

  #nav {
    padding: 30px;
    background: #ecc206;
  }

  #nav a {
    font-weight: bold;
    color: #f3f5f7;
  }

  #nav a.router-link-exact-active {
    color: #eecc0d;
  }
</style>