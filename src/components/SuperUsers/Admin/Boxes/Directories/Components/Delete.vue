 <template>
     <div>

      <button @click="show">
        <IconDelete class="icon-delete" />
      </button>

      <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Remover Diretório</h1>

      <form slot="content" class="form-modal">
          <input type="text" :value="titulo"  readonly>
          <input type="text" :value="url"  readonly>
      </form>

      <div slot="footer">
          <button type="submit" @click.prevent="onSubmit" class="modal-buttons">
              Remover
          </button>
          <button @click="showModal = false" class="modal-buttons">
              Cancelar
          </button>
      </div>

      </modal>

    </div>
  </template>

<script>
import  Modal         from  "../../../../../UIComponents/Modal"
import  IconDelete    from  '../../../../../_utils/Svgs/IconDelete'
import  { url }       from  '../../../../../_mixins/url.js'
import  { showModal } from  '../../../../../_mixins/showModal.js'
import  { del }       from  '../../../../../_mixins/delete.js'

export default {

  components: { Modal, IconDelete },

  mixins: [ url, showModal, del] ,

  data() {
    return {
      titulo: "",
      url: "",
      id: ""
    };
  },

  methods:{
    postData(){
      this.route = 'api/diretorios/';
      this.datas = JSON.stringify({
        id: this.id
      })
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (diretorio) => {
        this.titulo = diretorio.titulo;
        this.url = diretorio.url;
        this.id = diretorio.id;
      });
  },

}
</script>
