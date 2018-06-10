import { AuthService } from './auth-service';  
import { Observable } from 'rxjs';

const activitees = [
  {"_id":"5a5b579e9359cd0001609f4d","latitude":44.061275,"longitude":6.854417,"condition":"- Equipement à prévoir : Chaussures fermées, maillot de bain et serviette - Age minimum : 6 - Activité soumise aux conditions météo - Ville la plus proche : Gap (39 km) , Briançon (47 km) - Raft de 4 ou 8 places - Equipements fournis: casque, gilet, combinaison, pagaie.","photo":"rafting.jpg","description":"Vous aurez l’occasion de naviguer sur la plus longue rivière provençale et partager un moment convivial en famille ou entre amis. A bord d’un bateau pneumatique, vous profiterez de 2 parcours exceptionnels au choix et d’une vue splendide sur la région. ","prix":56,"type_act":"Aquatique","libelle":"Rafting","visible_home":false,"visible":false,"en_promo":false},
  {"_id":"5a60e7e9bb55120001e121da","latitude":44.061275,"longitude":6.854417,"condition":"<ul><li>Age minimum : 13(Autorisation parentale (pour les mineurs) nécessaire)</li><li>Poids minimum : 40 , Poids maximum : 130</li><li>Activité soumise aux conditions météo</li><li>Ville la plus proche : Chateauroux (40 km)</li><li>Pour les personnes de plus de 55 ans, le certificat médical est obligatoire</li></ul> ","photo":"elastique-2.jpg","description":"1 saut à l'élastique 10 sauts à l'élastique sur un pont ou un viaduc Relevez le challenge et faites votre wonder saut ! Du haut de ce coffret, vivez une expérience unique avec cette sélection de 10 sauts à l’élastique aux panoramas imprenables. <br>Lancez-vous au viaduc de Coquillau en Vendée, sur le pont du Cluis dans l’Indre ou sur la passerelle de L'Isle-Jourdain en Poitou-Charentes.<br>Pas de panique : on reste derrière vous !","prix":50,"type_act":"Terrestre","libelle":"Saut à l'élastique","visible_home":false,"visible":false,"en_promo":false},
  {"_id":"5a662e4daf4ffd00015dd42d","latitude":52.042277,"longitude":8.886414,"remise":0,"condition":"<ul><li>Age minimum : 15(Autorisation parentale (pour les mineurs) nécessaire)</li><li>Heure de départ: 8:30</li><li></li></ul><h2>Prérequis : </h2><br>Tous les participants doivent être âgés d'au moins 15 ans (les moins de 18 ans doivent impérativement être accompagnés d'un adulte) et peser moins de 90 kilos (pour des raisons de sécurité).<br>Veuillez noter que l'activité dépend des conditions météo.<br>Les participants devront se munir d'un certificat médical de non contre-indication à la pratique de l'activité.<br> Durée : un jour","photo":"saut-en-parachute.jpg","description":"1Découvrez les sensations extrêmes du saut en parachute, en tandem avec un instructeur certifié, entraîné spécialement pour que vous profitiez à fond de l'activité sans vous soucier de la sécurité ou des contraintes techniques.<br>Quand vous arrivez sur la zone de saut, vous suivez une formation rapide d'environ 15 minutes où l'instructeur vous présente l'équipement et les règles de sécurité du saut en tandem.<br>Une fois équipés, vous vous rendez jusqu'à la piste de décollage pour prendre l'avion et monter jusqu'à 4200m (environ 15 minutes). Vous vous attachez à votre instructeur dans l'avion et êtes enfin prêts à sauter!<br>Une fois l'altitude de saut atteinte, la porte s'ouvre... sur un panorama déjà exceptionnel et sur une inévitable montée d'adrénaline!<br>Ensuite, c'est que du bonheur. Le saut, la chute-libre de 50 secondes, les sensations, le paysage qui défile... Profitez-en à fond!<br>A 1500m, l'instructeur ouvre le parachute et il ne vous reste plus qu'à vous laisser porter et profiter de la vue.<br>Pour immortaliser ces moments, l'équipe de Gege Skydive vous propose de vous filmer tout au long de cette activité unique : <br>- avant de monter dans l'avion, <br>- la montée en altitude, <br>- la chute libre, <br>- le vol sous voile,<br>- vos premières impressions une fois posés.<br><br>Venez faire le grand saut à moins de 150 km de Paris sur la dropzone la plus proche de la capitale!","prix":215,"type_act":"Aerienne","libelle":"Saut en parachute","visible_home":false,"visible":false,"en_promo":false},
  {"_id":"5a66374daf4ffd00015dd42e","latitude":52.042277,"longitude":8.886414,"remise":0,"condition":"<ul><li>Age minimum : 13(Autorisation parentale (pour les mineurs) nécessaire)</li><li>Poids minimum : 40 Kg</li><li>Activité soumise aux conditions météo</li><li>Ville la plus proche : Chateauroux (40 km)</li><li>Pour les personnes de plus de 55 ans, le certificat médical est obligatoire</li></ul> ","photo":"canoe-kayak-2.jpg","description":"Le canoë-kayak est une activité physique de loisir ou sportive,</br> pratiquée avec des embarcations propulsées à la pagaie, notamment le canoë, le kayak, le raft, ou la pirogue. </br>Cette activité est également désignée par « sports de pagaie ». Se pratique en loisir ou en compétition, dans les milieux d'eau calme (étangs), d'eau vive (rivières) et maritime (estuaires, mer). La sécurité implique la maîtrise du bateau, un entraînement technique et physique, l'équipement, <br>l'information préalable des conditions du parcours (météo, état du parcours), l'encadrement… variables selon le type de pratique.!","prix":50,"type_act":"Aquatique","libelle":"Canoe Kayak","visible_home":false,"visible":false,"en_promo":false},
  {"_id":"5a664126af4ffd00015dd430","latitude":44.061275,"longitude":6.854417,"remise":0,"condition":"<ul><li>Age minimum : 4(Autorisation parentale (pour les mineurs) nécessaire)</li><li>Vous avez juste besoin d'être capable de courir quelques mètres</li><li>Ville la plus proche : Genève (40 km)</li><li>Pour les personnes de plus de 55 ans, le certificat médical est obligatoire</li></ul> ","photo":"Vol-Parapente-Biplace.jpg","description":"Le parapente est l'une des activités à ne pas manquer dans la vallée de Chamonix ! </br>La vue sur le Mont-Blanc et sur l'ensemble de la chaîne des Alpes est absolument imprenable.<br>Les moniteurs diplômés d'Etat d'Air Sport Chamonix sont là pour pour vous emmener dans les airs. </br>Eté comme hiver, vous explorerez ensemble les magnifiques paysages du Mont Blanc.<br>Un vol parapente bi-place est une expérience magique et sereine, avec uniquement le son du vent pour accompanger la beauté des paysages de la vallée de Chamonix. Mais si vous êtes un adepte des sensations extrêmes, vous pouvez aussi opter pour un vol acrobatique qui fera battre votre coeur à toute allure.","prix":110,"type_act":"Aérienne","libelle":"Vol Parapente Biplace","visible_home":true,"visible":true,"en_promo":false},
]
const resultat = [
  {"_id":"5a5b579e9359cd0001609f4d","latitude":44.061275,"longitude":6.854417,"condition":"- Equipement à prévoir : Chaussures fermées, maillot de bain et serviette - Age minimum : 6 - Activité soumise aux conditions météo - Ville la plus proche : Gap (39 km) , Briançon (47 km) - Raft de 4 ou 8 places - Equipements fournis: casque, gilet, combinaison, pagaie.","photo":"rafting.jpg","description":"Vous aurez l’occasion de naviguer sur la plus longue rivière provençale et partager un moment convivial en famille ou entre amis. A bord d’un bateau pneumatique, vous profiterez de 2 parcours exceptionnels au choix et d’une vue splendide sur la région. ","prix":56,"type_act":"Aquatique","libelle":"Rafting","visible_home":false,"visible":false,"en_promo":false},
]
const id = "5a5b579e9359cd0001609f4d";
describe('Teste activité', () => {
  let service: AuthService;
  let http = {
    get: jest.fn(() =>
      Observable.of(activitees)
    )
  };
  beforeEach(() => {  
    service =  new AuthService(http as any)
  });

  /* Test get acttivite par id */
  it('Get activite par id', () => { 
    expect.assertions(1);
    return  service.getActivite(id)
    .then(data => {  
      expect(data._id).toBe("5a5b579e9359cd0001609f4d")
    })
  });
  /* Test get acttivite par id */
  it('Get toutes les activitees', () => { 
    expect.assertions(1);
    return  service.getactivites()
    .then(data => {  
      expect(data).toEqual(activitees)
    })
  });
});