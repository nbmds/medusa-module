<template>
  <div>
    Test
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { test } from "@/api";

@Component
export default class Test extends Vue {
  mounted() {
    test(1).then(res => {
      // res.data
    });
  }
}
</script>
  
<style lang="scss" scoped>
</style>
