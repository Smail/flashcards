<template>
  <ul class="m-0 self-stretch items-stretch grid grid-cols-2 p-0 gap-2">
    <li v-for="link in links" class="flex justify-center">
      <button-link :title="link.title" :href="link.href" />
    </li>
  </ul>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import ButtonLink from "@/components/ButtonLink.vue";

export default {
  name: "ButtonLinkGroup",
  components: { MainContent, ButtonLink },
  props: {
    links: {
      type: Array,
      required: true,
      validator(values) {
        // Check if all links in have a title and href value.
        for (const link of values) {
          if (link.title == null || link.href == null) {
            return false;
          }
        }
        return true;
      },
    },
  },
};
</script>
