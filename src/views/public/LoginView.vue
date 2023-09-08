<template>
  <main>
    <div class="contain">
      <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
      </div>
      <button type="submit" class="btn-primary">Login</button>
    </form>
    </div>
  </main>
</template>

<style scoped>
  form {
    @apply w-full max-w-[500px] mx-1 overflow-hidden py-12 px-2 sm:px-8 md:px-12;

    button {
      @apply w-full
    }
  }
</style>