# Prévision des marées sur les sites d'escalade bretons
Salut à toi jeune explorateur,

Ce dépôt me sert à partager un projet que j'ai réalisé sur QGIS et R Shiny dans mon temps libre.  
L'application permet de visualiser le niveau de la mer dans les mois à venir sur différents sites d'escalade bretons (Côtes-d'Armor et alentours), ainsi que les fenêtres d'accessibilité de ces derniers.

## Utilisation
L'application est hébergée sur un serveur [shinyapps](https://www.shinyapps.io/) et vous pouvez y accéder avec ce lien : <https://yannpir.shinyapps.io/CliffCast/>

La barre de navigation en haut vous permet de sélectionner le site qui vous intéresse (ils sont triés par département).  
Quant à la lecture des données : un calendrier permet de renseigner la date et l'horaire souhaités. Les prévisions vont du 1er mars 2026 au 1er octobre 2026.
Les mesures sont basées sur le zéro hydrographique de port aux alentours.  
Cela devrait être suffisamment cohérent avec les sites de relevée de marées type maree.info .  
 
## Sources :
Les prévisions de marées proviennent de l'application __Marée__ de Christian Guine. Les couches du niveau de la mer sont générées à l'aide du [Modèle Numérique de Terrain](https://diffusion.shom.fr/multiproduct/product/configure/id/427) du __SHOM__.

L'application est faite à l'aide du framework [Shiny](http://shiny.rstudio.com) en [langage R](https://www.r-project.org/). La mise en page est produite à l'aide du package [flexdashboard](http://rstudio.github.io/flexdashboard/index.html), et les graphiques ainsi que les cartes grâce aux packages [Plotly](http://plot.ly), [Leaflet.js](http://leafletjs.com/) et [ggplot2](http://ggplot2.org/).  Le code de l'application est disponible sur ce lien : <https://github.com/YannPIR/Maree>. 

## Remarques

Si vous avez des questions, envies, remarques, n'hésitez pas à m'envoyer un message.
Bien que les valeurs soient cohérentes, il doit y avoir une incertitude 15 à 30 minutes. Si vous finissez à l'eau par ma faute, je ne suis pas responsable.

## Contacts

Mail : [yannluc.pierre@gmail.com](mailto:yannluc.pierre@gmail.com)

