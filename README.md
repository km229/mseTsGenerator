
# mseTsGenerator

Ce projet consiste à générer un MSE à partir de fichiers source d'une projet Typescript.

Il a été réalisé dans le cadre du cours MGL843 - Sujets avancés en conception logicielle du trimestre d'hiver 2021. 

## Fonctionnement

Le fichier MSE généré part d'un code source en langage TypeScript qui est analysé à l'aide de la librairie ts-morph.
Le projet lie les noeuds identifiés par ts-morph aux entités FAMIX correspondantes pour générer un MSE.

Liens utiles :
* [Documentation Moose](https://modularmoose.org/moose-wiki/)
* [Documentation FAMIX](https://www.researchgate.net/publication/265428652_MSE_and_FAMIX_30_an_Interexchange_Format_and_Source_Code_Model_Family)
* https://github.com/moosetechnology

## Etapes d'installation

Pour installer, le projet il faut récupérer l'ensemble du code source depuis :
https://github.com/km229/mseTsGenerator

Ensuite, il faut lancer à partir du répertoire racine la commande : 
``
npm install
`` pour récupérer les dépendances.

Il est nécessaire de posséder npm pour l'installation :
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Etapes d'exécution

Après avoir effectué les étapes d'installation, il faut éditer le fichier `` index.ts `` pour ajouter les informations d'entrée et de sortie pour la génération du MSE.

Pour l'entrée, il faut pour cela créer une instance de MSEDocument avec le chemin du fichier/dossier à analyser :

```ts
let mse = new MSEDocument("[ROOT PATH OF SOURCE CODE]")
```

Pour la sortie (générer un fichier MSE), il faut appeler la méthode ``generateMseFile()`` sur la même instance :

```ts
mse.generateMseFile("[PATH OF GENERATED FILE]")
```

Après avoir défini le projet Typescript, il est possible de lancer la commande `` npm start `` pour générer le fichier MSE.

### Précisions sur l'utilisation

Ce projet académique reste incomplet sur la structure et l'analyse du code TypeScript mais propose une 1ère approche en la matière.
Il serait intéressant par la suite d'étudier plus en profondeur le fonctionnement de ts_morph pour mieux appréhender le language TypeScript.
La même chose serait utile du côté de Pharo pour approfondir la compréhension des métamodèles. Cela permettrait de créer un métamodèle spécifique au langage TypeScript.

Approfondissement :
* [Création d'un métamodèle](https://modularmoose.org/moose-wiki/Developers/CreateNewMetamodel.html)
* [Modular Moose](https://www.researchgate.net/publication/346143234_Modular_Moose_A_new_generation_software_reverse_engineering_environment)

### Exemple (index.ts)

```ts
import {MSEDocument} from './src/model/MSEDocument'

// Example to generate a MSE file
let mse = new MSEDocument('./sample-ts')
mse.generateMseFile('./result.mse')
```

## Structure du projet

```
    .
    |-- examples                # Examples de fichiers MSE et autre
    |-- lib                     # Librairies externes
    |-- sample-ts               # Example de projet Typescript pour la génération d'un MSE
    |-- src                     # Code source
    |-- package.json            
    |-- package_lock.json        
    |-- mgl843.pdf     
    |-- LICENSE                 
    |-- README.md
```

### Auteurs / Contributeurs
- DELLAC Aurélien - https://github.com/OrelExia
- DEREN Nelson - https://github.com/nelsonderen24
- PEYRET Romain - https://github.com/PtitCaillou
- MORICEAU Kévin - https://github.com/km229
- VAN DRIESSCHE Rémi - https://github.com/remivand

### Librairies utilisées (voir /lib) :
- ts-morph : https://github.com/dsherret/ts-morph
- ts-complex : Utilisation partielle du code dans src/model/metricService.ts - https://github.com/anandundavia/ts-complex
- pascalerni/famix : https://github.com/pascalerni/famix