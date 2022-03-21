/*Viene fornito un layout di base in cui è presente *una card di esempio* inserita staticamente nell’html.
 Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e *dovrà quindi essere rimossa dall’html*.
Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team.
 Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
stampare dinamicamente una card per ogni membro del team.


BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale* e viene stampata una nuova card con tutte le informazioni inserite dall'utente.*/

const teamContainer =document.querySelector('.team-container');

const membri =[
    {
        nome:'Angela Caroll',
        ruolo:'Chief editor',
        foto: 'img/angela-caroll-chief-editor.jpg'

    },
    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'

    },
    {
        nome:'Barbara Ramos',
        ruolo:'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'

    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        foto: 'img/scott-estrada-developer.jpg'

    },
    {
        nome:'Wayne Barnett',
        ruolo:'Founder-Ceo',
        foto: 'img/wayne-barnett-founder-ceo.jpg'

    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'

    },
];
console.log(membri);


function creoCarta(){
    for(let i=0; i<membri.length;i++){


        const teamCard =document.createElement('div');
        teamCard.className='team-Card';
        teamContainer.appendChild(teamCard);

        const contenitoreCardImage =document.createElement('div');
        contenitoreCardImage.className='card-image';
        teamCard.appendChild(contenitoreCardImage);
        const cardImage=document.createElement('img')
        contenitoreCardImage.appendChild(cardImage)
        cardImage.src = membri[i].foto;
        

        const cardText =document.createElement('div');
        cardText.className='card-text';
        teamCard.appendChild(cardText);
        
    }
}

creoCarta();