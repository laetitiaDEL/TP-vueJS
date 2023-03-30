Vue.createApp({
    data(){
        return {
            mesCourses: [],
            course: '',
            msg: 'Masquer',
            affichage: false
        };
    },
    methods: {
        addCourse(){
            this.mesCourses.push(this.course);
            this.course = '';
        },
        suppr(index){
            this.mesCourses.splice(index, 1);
        },
        toggleList(){
            if(this.msg == 'Masquer'){
                this.affichage = true;
                this.msg = 'Afficher liste';
            }else{
                this.affichage = false;
                this.msg = 'Masquer';
            }
        }

    },
    }).mount('#listeCourses');
    
    