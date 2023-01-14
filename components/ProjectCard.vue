<template>
  <!-- <div v-for="project in projects" :key="project._id">
    <div class="col-lg-6 col-12">
      <div class="card bg-gray-800 card-profile  overflow-hidden">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
            <a href="javascript:;">
              <div class="p-3 pe-md-0">
                <img class="w-100 border-radius-md" :src="$urlFor(project._mainImage)" :alt="project.title"
                  loading="lazy" />
              </div>
            </a>
          </div>
          <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
            <div class="card-body py-0">
              <h5 class="mb-0 text-gradient text-warning text-bolder">{{ project._title }}</h5>
              <h6 class="text-white text-light text-sm ">{{ project._publishedAt }}</h6>
              <p class="mb-0 text-white text-light" v-text="project.body.download">
              </p>
              <div class="d-flex justify-content-start mb-2 mb-sm-0 h-scroll">
                <a href="#" class="flash text-warning border border-warning px-2 my-2 me-3 rounded">Windows</a>
                <a href="#" class="flash text-warning border border-warning px-2 my-2 me-3 rounded">Linux</a>
                <a href="#" class="flash text-warning border border-warning px-2 my-2 me-3 rounded">Linux</a>
                <a href="#" class="flash text-warning border border-warning px-2 my-2 me-3 rounded">Linux</a>
                <a href="#" class="flash text-warning border border-warning px-2 my-2 me-3 rounded">Linux</a>
                <a href="#" class="flash text-warning border border-warning px-2 my-2 me-3 rounded">Linux</a>
                <a href="#" class="flash text-warning border border-warning px-2 my-2 me-3 rounded">Linux</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

</template>

<script>

</script>

<style>
.h-scroll {
  overflow: auto;
  white-space: nowrap;
}
</style>
