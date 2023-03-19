<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
<template>
    <main class="h-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Brand</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="input-group flex-nowrap clo-6">
          <span class="input-group-text" id="addon-wrapping">
              <i class="bi bi-search"></i>
          </span>
          <input type="text" class="form-control" placeholder="Search now" aria-label="Username" aria-describedby="addon-wrapping">
          </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
              <i class="bi bi-chat-left-text"></i>
          </li>
          <li class="nav-item">
              <i class="bi bi-bell-fill"></i>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
        </ul>
      </div>
    </nav>
    <div class="d-flex  flex-column w-25 h-95 text-bg-dark h-100">
      <ul class="nav flex-column nav-pills">
        <li class="nav-item "><RouterLink to="/profile">profile</RouterLink></li>
        <li class="nav-item "><RouterLink to="/">home</RouterLink></li>
        <li class="nav-item ">13323</li>
        <li class="nav-item ">23232</li>
        <li class="nav-item ">13232</li>
        <li class="nav-item ">3232</li>
      </ul> 
    </div>
  </main>
  <router-view></router-view>
</template>
