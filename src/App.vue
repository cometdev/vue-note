<template>
  <div>
    <header>
      <router-link to="/login" class="link">로그인</router-link>|
      <router-link to="/signup" class="link">회원가입</router-link>|
    </header>
    <!-- 컴포넌트가 뿌려지는 영역 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
