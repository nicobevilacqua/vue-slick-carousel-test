<template>
  <div>
    <v-card>
      <v-tabs show-arrows center-active v-model="tab" class="sub-menu">
        <v-tab v-for="item in menu" :key="item.path" :to="item.path"></v-tab>
      </v-tabs>
    </v-card>
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
    <button @click="show = !show">show</button>
  </div>
</template>

<script>
import 'prismjs/themes/prism-tomorrow.css'
import '@/slick-theme.css'

import configs from './configs'

export default {
  name: 'ExamplesPage',

  computed: {
    slidesWidth() {
      const { min, max } =
        this.screen === 'mobile'
          ? { min: 50, max: 150 }
          : { min: 200, max: 400 }

      return Array.from(
        { length: this.config.numSlides || 6 },
        () => Math.floor(Math.random() * (max - min)) + min,
      )
    },
  },
  data() {
    const menu = Object.keys(configs).map(key => {
      return {
        title: configs[key].title,
        path: `/example/${key}`,
      }
    })

    return {
      show: false,
      tab: null,
      menu,
      config: {
        title: 'As Navigation For',
        settings: {
          focusOnSelect: true,
        },
        asNavFor: {
          settings: {
            slidesToShow: 4,
            focusOnSelect: true,
          },
        },
      },
    }
  },
  mounted() {
    window.carousel = this.$refs.c1
  },
}
</script>

<style lang="scss" scoped>
::v-deep * {
  font-weight: 300;
  color: var(--v-secondary-base);
}
.slick-slider {
  h1 {
    background-color: var(--v-secondary-base);
    text-align: center;
    color: var(--v-primary-lighten2);
    line-height: 100px;
    margin: 1px;
    font-size: 1em;
    @media (min-width: 1024px) {
      line-height: 300px;
      margin: 10px;
      font-size: 2em;
    }
  }
  &.short-row h1 {
    line-height: 50px;
    @media (min-width: 1024px) {
      line-height: 100px;
    }
  }
  img {
    height: 100px;
    margin: 1px auto;
    @media (min-width: 1024px) {
      height: 300px;
      margin: 10px auto;
    }
  }
  &.adaptive-height .slick-slide:nth-of-type(even) h1 {
    line-height: 200px;
  }

  ::v-deep .slick-dots {
    padding: 0px;
    li {
      width: 10px;
      @media (min-width: 1024px) {
        width: 20px;
      }
    }
    button::before {
      color: var(--v-secondary-base);
      opacity: 0.25;
    }
    .slick-active button::before {
      opacity: 1;
    }
  }

  ::v-deep .slick-arrow:before {
    color: var(--v-secondary-base);
    opacity: 1;
  }
  ::v-deep .slick-arrow.slick-disabled:before {
    opacity: 0.25;
  }
}
.carousel-wrapper {
  min-height: 170px;
  @media (min-width: 1024px) {
    min-height: 430px;
  }
  &.as-nav-for {
    min-height: 110px;
    @media (min-width: 1024px) {
      min-height: 180px;
    }
  }
}

.code {
  width: 100%;
  max-height: 200px;
  overflow: auto;
  background-color: var(--v-secondary-base);
  ::v-deep code {
    width: 100%;
    box-shadow: unset;
    background-color: var(--v-secondary-base);
  }
}
</style>
