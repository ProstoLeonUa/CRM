<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div class="row" v-else>
        <CategoryCreate @created="addNewCategory" />
        <CategoryEdit
          v-if="categories.length"
          :categories="categories"
          :key="categories.lenght + updateCount"
          @updated="updateCategries"
        />
        <p v-else class="center">Категории не созданы</p>
      </div>
    </section>
  </div>
</template>
<script>
import CategoryCreate from "@/components/CategoryCreated";
import CategoryEdit from "@/components/CategoryEdit";

export default {
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0,
  }),
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;
  },
  components: {
    CategoryCreate,
    CategoryEdit,
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategries(category) {
      const indx = this.categories.findIndex((c) => c.id === category.id);
      this.categories[indx].title = category.title;
      this.categories[indx].limit = category.limit;
      this.updateCount++;
    },
  },
};
</script>