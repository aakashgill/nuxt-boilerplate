<template>
  <header class="page-header">
    <div class="page-container">
      <div class="flex justify-space-between">
        <nav class="main-navigation">
          <NuxtLink to="/" class="main-logo">
            <img src="" alt="Logo">
          </NuxtLink>
          <ul class="navigation-list">
            <li>
              <NuxtLink class="navigation-item" to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink class="navigation-item" to="/the-blog">Blog</NuxtLink>  
            </li>
            <li>
              <NuxtLink class="navigation-item" to="/about">About</NuxtLink>    
            </li>
          </ul>
        </nav>
        <app-button class="align-self-center">Sign up here</app-button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .page-header {
    background-color: var(--color-white);
    box-shadow: 0 4px 16px -4px rgba(72, 44, 234, 0.25);
  }
  .main-navigation {
    height: 60px;
  }
  .main-navigation, .navigation-list {
    display: flex;
    align-items: center;
  }
  .navigation-item,
  .main-logo {
    display: block;
    padding: 10px;
  }
</style>