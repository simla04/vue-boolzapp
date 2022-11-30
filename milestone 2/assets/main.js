        
var app = new Vue(
    {
        el: '#app',
        data: {
            indiceDinamico: 0,
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
                }
                ],
                },
            ]
        },
        mounted() {

        },
        methods: {
            miaFunzione(elem,index){
                // modifica indiceDinamico
                this.indiceDinamico = index;
            },
            getLastHourContacts(elem){
                let lastDate = elem.messages[ elem.messages.length-1 ].date
                lastDate = lastDate.split(' ')
                console.log( lastDate[1])

                return lastDate[1]
            },
            getLastHourMessages(elem){
                let date = elem.date;
                date = date.split(' ')

                return date[1];
        //         split(' ')
        // [ 'info1', 'info2' ]
        // array[1]
            }
        } 
    } )


