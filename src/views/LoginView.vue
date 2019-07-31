<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for>username:</label>
        <input type="text" v-model="username" />
      </div>
      <div>
        <label for>password:</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import { loginUser } from '../api/account.js';

export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		submitForm() {
			let url = 'http://localhost:3000/login';
			let data = {
				username: this.username,
				password: this.password,
			};
			loginUser(data)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		},
	},
};
</script>

<style>
</style>
