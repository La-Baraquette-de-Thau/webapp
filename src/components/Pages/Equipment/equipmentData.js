
import {
    AcUnitRounded, BedRounded, CheckroomRounded, CleaningServicesRounded, CoffeeMakerRounded,
    DeckRounded, DeleteRounded, FlatwareRounded, IronRounded, KitchenRounded, LocalFireDepartmentRounded,
    LocalParkingRounded, MicrowaveRounded, OutdoorGrillRounded,
    PanoramaRounded, SanitizerRounded, ShowerRounded, SingleBedRounded, SoapRounded, WcRounded, WineBarRounded
} from "@mui/icons-material";

export const equipmentData = [
    {name: 'Extérieur', list: [
        {name: 'Place de Parking sur place', icon: <LocalParkingRounded color={'info'} />},
        {name: 'Mobilier extérieur', icon: <DeckRounded color={'info'} />},
        {name: 'Plancha', icon: <OutdoorGrillRounded color={'info'} />},
        {name: 'Barbecue', icon: <OutdoorGrillRounded color={'info'} />},
        {name: 'Étendoir à linge dans le jardin haut', icon: <CheckroomRounded color={'info'}/>},
        {name: 'Vue sur le Mont saint clair', icon: <PanoramaRounded color={'info'}/>},
        {name: 'Jardin privé', icon: <DeckRounded color={'info'} />}
    ]},
    {name: 'Cuisine', list: [
        {name: 'Frigo', icon: <KitchenRounded color={'info'}/>},
        {name: 'Freezer', icon: <AcUnitRounded color={'info'}/>},
        {name: 'Micro-ondes', icon: <MicrowaveRounded color={'info'}/>},
        {name: 'Four', icon: <LocalFireDepartmentRounded color={'info'}/>},
        {name: 'Vaisselle, assiettes et couverts et ustensiles divers', icon: <FlatwareRounded color={'info'}/>},
        {name: 'Casseroles avec manche amovible', icon: <FlatwareRounded color={'info'}/>},
        {name: 'Plat à four', icon: <FlatwareRounded color={'info'}/>},
        {name: 'Passoire', icon: <FlatwareRounded color={'info'}/>},
        {name: 'Verres à vin, eau, mug, bols', icon: <WineBarRounded color={'info'} />},
        {name: 'Plaque induction', icon: <LocalFireDepartmentRounded color={'info'}/>},
        {name: 'Hotte', icon: <KitchenRounded color={'info'}/>},
        {name: 'Nespresso et bouilloire avec kit d’accueil pour vous premiers thé et café', icon: <CoffeeMakerRounded color={'info'}/>},
        {name: 'Grille pain', icon: <KitchenRounded color={'info'}/>},
        {name: 'Sel, poivre, huile et vinaigre', icon: <FlatwareRounded color={'info'}/>},
        {name: 'Produits ménagers', icon: <SanitizerRounded color={'info'}/>},
        {name: 'Bassine', icon: <SanitizerRounded color={'info'}/>},
        {name: '2 poubelles', icon: <DeleteRounded color={'info'}/>},
        {name: 'Seau balais, serpiere et aspirateur', icon: <CleaningServicesRounded color={'info'} />},
        {name: 'Fer à repasser', icon: <IronRounded color={'info'}/>},
    ]},
    {name: 'Chambre', list: [
        {name: 'Lit deux places 140cm, draps et serviettes fourni', icon: <BedRounded color={'info'}/>},
        {name: 'Mini dressing avec cintre', icon: <CheckroomRounded color={'info'}/>},
        {name: 'Lit d’appoint sur roulette', icon: <SingleBedRounded color={'info'}/>}
    ]},
    {name: 'Salle de bain', list: [
        {name: 'Sèche cheveux', icon: <ShowerRounded color={'info'} />},
        {name: 'Savon et shampooing', icon: <SoapRounded color={'info'} />},
        {name: 'Papier toilette', icon: <WcRounded color={'info'} />}
    ]}
]