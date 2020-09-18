<template>
  <div>
    <div class="carousel-wrapper as-nav-for">
      <VueSlickCarousel
        v-bind="{ focusOnSelect: true }"
        ref="c1"
        :asNavFor="$refs.c2"
      >
        <div
          v-for="(width, index) in slidesWidth"
          :key="`${width}-${index}`"
          :style="{ width: `${width}px` }"
        >
          <h1>
            {{ index + 1 }}
          </h1>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="carousel-wrapper as-nav-for">
      <VueSlickCarousel
        v-bind="{ focusOnSelect: true, slidesToShow: 4 }"
        ref="c2"
        :asNavFor="$refs.c1"
      >
        <div
          v-for="(width, index) in slidesWidth"
          :key="`${width}-${index}`"
          :style="{ width: `${width}px` }"
        >
          <h1>
            {{ index + 1 }}
          </h1>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import readme from '../../README.md'

export default {
  data() {
    return {
      readme,
    }
  },
}
</script>
