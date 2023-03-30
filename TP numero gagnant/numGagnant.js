Vue.createApp({
    data(){
        return {
            leNombre : 0
        };        
    },

    methods: {
        augmenter(num){
            this.leNombre += num;
        },
        afficherMsg(){
            if(this.leNombre == 7){
                return 'Le nombre mystère est 7 !';
            }else if(this.leNombre < 7){
                return 'Essaye encore !!';
            }else{
                return 'Tu as dépassé le nombre mystère.'
            }
        }

    },    

    watch:{
        leNombre(value) {
        if(value > 30){
            alert('Calme-toi Bobby, t\'es trop loin là.');
            this.leNombre = 0;
        }
        },
    }

}).mount('#num');