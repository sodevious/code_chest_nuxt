<template>
    <!-- <Hero />
    <AppLangs /> -->
    <section class="bg-gray-900 px-1 py-3 p-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-md-8 text-start my-4">
                    <h3 class="text-white z-index-1 position-relative">Available to download</h3>
                    <p class="text-white opacity-8 mb-0">Click on the buttons to download for your device type.</p>
                </div>
            </div>
            <div class="row gy-4">
                Products
                <div v-for="project in projects" :key="project._id" v-text="project.title">

                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
export default {
    async asyncData({ $sanity }) {
        const query = groq`*[_type == "project"]`;
        const projects = await $sanity.fetch(query);
        return { projects };
    }
}
</script>
