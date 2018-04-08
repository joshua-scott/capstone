<template>
    <form name="contact" method="POST" netlify>
        <p>
            <label>Your Name: <input type="text" name="name"></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
    </form>
      <div v-if="rendered" v-show="visible" class="alert">
    <p>Alert!</p>
  </div>
</template>
<style>
  .alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style> 
<script>
  import Popup from 'vue-popup';
  require('vue-popup/lib/popup.css');
  export default {
      mixins: [Popup],
      props: {
        modal: {
          default: true
        },
        closeOnClickModal: {
          default: true
        }
      }
    };
//<script>
//(document).ready(function () {
  //('Form').modal('show')
//})
</script>
