#Installatie

Installeer de angular cli door middel van: `npm  install -g @angular/cli`.
Run het commando: `npm install` om de node_modules te installeren die nodig zijn voor het project.
Run het commando: `ng serve`.
De applicatie is beschikbaar op: `http://localhost:4200/`.

#Implementatie van features

* light: volledige layout in flexbox
* light: transitions
    * transitions op a met class button
    * transitions op images onderaan
* light: css grid (gebruikt voor form met behulp van Bootstrap)
* heavy: Typescript
    * functionaliteit gemaakt in Angular, met behulp van Typescript
        * modal component in Bootstrap bevat een demo product form 
        * product form met daarbij 2-way data binding
            * alle nodige classes geschreven in Typescript (Product, Order)
            * 2-way data binding: data ingegeven in het formulier wordt rechtstreeks doorgegeven aan het             achterliggende model
    
