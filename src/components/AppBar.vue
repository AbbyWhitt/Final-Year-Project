<template>
  <v-app-bar :elevation="0" app color="#449682" density="comfortable">
    <template v-slot:prepend>
      <router-link to="/Dashboard" class="title">
        <div
          class="text-h5 font-weight-light"
          aria-label="Study Buddy - link to home page"
        >
          StudyBuddy
        </div>
      </router-link>
    </template>

    <div
      class="pr-16 mr-16 d-none d-sm-flex"
      id="clock"
      style="color: white; font-size: 20px"
    >
      <v-icon
        aria-label="clock icon to the right of the icon is the current time"
        dark
        size="25"
        class="mb-1"
      >
        mdi-clock
      </v-icon>
      {{ time }}
    </div>

    <template v-slot:append>
      <router-link to="/UserSettings" style="text-decoration: none">
        <v-btn>
          <v-avatar>
            <v-icon
              dark
              size="40"
              style="color: white"
              aria-label="profile icon which links to profile"
            >
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-btn>
      </router-link>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      time: null,
    };
  },
  created() {
    this.time = Intl.DateTimeFormat(navigator.language, {
      timeStyle: "short",
      hourCycle: "h12",
    }).format();
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        timeStyle: "short",
        hourCycle: "h12",
      }).format();
    }, 1000);
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.title {
  color: white;
  padding: 2.5em;
  text-decoration: none;
}
</style>
