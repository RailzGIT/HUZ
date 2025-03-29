<template>
  <div>
    <AdminDashboard />
    <router-view></router-view>
  </div>
</template>

<script>
import AdminDashboard from "@/components/AdminDashboard.vue";

export default {
  components: {
    AdminDashboard,
  },
};
</script>
