<template>
  <div class="dashboard-actions">

      <div class="header-dashboard-actions">
        <h1 class="dashboard-actions-title">{{title}}</h1>
        <div class="dashboard-actions-buttons">
          <Create @create="initialize()" class="dashboard-action-create" />
          <Delete @delete="initialize()" />
        </div>
      </div>

      <div class="dashboard-actions-container">
          <div v-for="(aviso, index) in avisos" :key="index" class="inside-container-dashboard">
            <div class="item-container-dashboard">

               <div class="styled-input--square">
                  <div class="styled-input-single">
                    <input type="checkbox" @change="select(aviso)" :id="aviso.id" />
                    <label :for="aviso.id"> {{ aviso.titulo }} </label>
                  </div>
              </div>

              <Edit />

            </div>
          </div>
      </div>

  </div>
</template>


<script>
import Create from "./Components/Create";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";
import { url } from '../../../../_mixins/url.js'
import { initialize } from '../../../../_mixins/boxInitialize.js'

export default {
  name: "ActivitiesBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Avisis",
      avisos: null,
    }
  },

  methods:{
    postData(){
      this.route = 'api/avisos';
    }
  }

}
</script>
