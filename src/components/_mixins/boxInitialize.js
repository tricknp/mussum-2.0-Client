import axios from 'axios'

export const initialize = {

    data() {
        return {
          selected: null,
          object: '',
        }
      },

    methods: {
      initialize() {
          this.postData();

          axios
            .get(this.BASE_URL + this.route)
            .then(res => {
                this.horarios    =  res.data;
                this.links       =  res.data;
                this.wikis       =  res.data;
                this.professores =  res.data;
                this.cursos      =  res.data;
                this.diretorios  =  res.data;
                this.avisos      =  res.data;
            });
        },

        select(obj) {
            this.selected = obj;
            //console.log('selected    ' + this.selected.id)
            this.$bus.$emit("objectEmited", this.selected);
        },
    },

    created() {
        this.initialize();
    },
}
