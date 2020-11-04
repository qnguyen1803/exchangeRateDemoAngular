# Liste des fonctionnalités manquantes & points à améliorer
1. Switch
    * Améliorer la fonction switch pour que les inputs s'échangent leurs positions après chaque click
    * Mettre des couleurs différentes pour les sens d'échange pour les différencier facilement
2. Valeurs des chiffres
    * Les valeurs des chiffres après le calcul ont beaucoup de chiffres après le "," des fois, il faut chercher pourquoi
3. Champs manquant pour forcer le taux
    * A transformer le champs taux en input avec un bouton "Forcer taux". A chaque click sur le bouton, il faut mettre un booléan fixed = true. Rajouter la condition if (fixed) pour l'Interval 
    * La fonction du bouton "Forcer taux" doit aussi vérifier si la valeur du champs taux est > 0.02 
4. Tableau historique
    * Créer un array d'objet, chaque object contient des propriétés demandées, chaque fois que le calcul est fini, ajouter la nouvelle objet à la fin du array et supprimer le premier objet


