<template>
  <v-card class="ma-5">
    <v-card color="grey-lighten-3" flat rounded="1">
      <v-container>
        <v-col cols="4">
          <v-card>
            <v-table fixed-header height="500px">
              <thead>
                <tr>
                  <th class="text-left">Module Code</th>

                  <th class="text-left">Assignment</th>

                  <th class="text-left">Progress</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.progress }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          progress: "20%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          progress: "50%",
        },
        {
          name: "Eclair",
          calories: 262,
          progress: "60%",
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
