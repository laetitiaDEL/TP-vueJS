Vue.createApp({
    data(){
        return {
            msg: 'Bonjour',
            p1: '',
            p2: ''
        };
    },
    
    methods: {
        remplirP1(event){
            this.p1 = event.target.value;
        },

        remplirP2(event){
            this.p2 = event.target.value;
        },

        alerter(){
            alert(this.msg);
        }
    },
    
    }).mount('#tp2');