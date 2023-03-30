Vue.createApp({
    data(){
        return {
            Pclass:"",
            Pcouleur:""
        };        
    },

    methods: {
        setClass(){
            if(this.Pclass == 'hello'){
                return 'maClasseHello';
            }else if(this.Pclass == 'world'){
                return 'maClasseWorld';
            }
        }

    },    

}).mount('#TPstyle');