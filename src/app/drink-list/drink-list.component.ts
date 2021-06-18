import { Component, OnInit } from '@angular/core';
import {Drinks} from './drink-list.model';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  coctails: Drinks[] = [
    new Drinks('Apple Martini', 'The Apple Martini or “Appletini” adds a twist to the typical dry martini. Vodka is used as opposed to gin as the basis of the cocktail and apple schnapps is added for a sweet but slightly sour twist. The cocktail is usually finished with lemon juice and garnished with a slice of apple, simple but tasty.', 'https://www.hangoverweekends.co.uk/media/15499/applemar.gif?width=217px&height=316px'),
    new Drinks('Long Island Iced Tea', 'A cocktail that never seems to go out of style. The potent concoction of rum, tequila, vodka, gin and triple sec finished with a mixture of sweet and sour cola and lemon juice. Tea isnt actually an addition to the drink, but the ingredients used predominantly the cola, provide the profile of tea with much more flavour.', 'https://www.hangoverweekends.co.uk/media/15498/long-island-iced-tea.jpg?width=236px&height=418px'),
    new Drinks('Pina Colada', 'The classic tropical cocktail, with a distinctive look and taste. More of a smoothie as opposed to an alcoholic beverage. The modest yet perfect blend of coconut milk, rum and pineapple juice has been a firm favourite throughout the years.', 'https://www.hangoverweekends.co.uk/media/15501/pina_colada_cocktail.png?width=243&height=350'),
    new Drinks('Mojito', 'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.', 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375'),
    new Drinks('Cosmopolitan', 'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.', 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px'),
  ];
  wines: Drinks[] = [
    new Drinks('Chêne Bleu Abelard 2012', 'From the Rhône Valley, this Grenache and Syrah blend starts savory, with a whiff of black pepper. It’s a bit tannic, but the wine is drinking well now. Aromas of cooking herbs like rosemary and oregano, as well as brambly berries, give this wine an autumnal feel, making it an ideal pairing for a holiday meal.', 'https://vinepair.com/wp-content/uploads/2020/11/wine17.png'),
    new Drinks('Giovanni Rosso Etna Bianco Doc 2018', 'From the slopes of Mount Etna, an active volcano in Sicily, this wine was produced by Giovanni Rosso, a family-owned winery from Piedmont specializing in red wines made from Nebbiolo. It’s extremely balanced, refreshing, and has great acidity. With its kiss of oak, it will surely be a newfound favorite of Chardonnay lovers looking to try something different.', 'https://vinepair.com/wp-content/uploads/2020/11/wine3.png'),
    new Drinks('Planeta Frappato Vittoria Doc 2018', 'Aromas like rose petals, strawberries, and orange blossoms hit the nose, followed by a soft, creamy texture on the palate. One sip, and this little-known Sicilian grape just may become a newfound favorite. As it opens up, this wine continues to surprise the palate, introducing new flavors and aromas with each sip.', 'https://vinepair.com/wp-content/uploads/2020/11/wine4.png'),
    new Drinks('Luis Seabra Xisto Limitado Branco 2018', 'This is new-wave Portuguese wine that perfectly represents the terroir in which it was made. This bottle demonstrates the amazing value of wines from this region, and is sure to be a crowd-pleaser. It has bright acidity and minerality on the nose. The palate is briny yet floral, making this wine endlessly drinkable.', 'https://vinepair.com/wp-content/uploads/2020/11/wine5.png'),
  ];
  boozes: Drinks[] = [
    new Drinks('Rakia', 'Rakia tastes similar to Italian grappa or Japanese sake. It is usually transparent or light yellow. Sometimes the taste of the fruit from which it was made prevails (for example, pear rakia, quince rakia, or apricot rakia all have a distinctive fruity scent).', 'https://online.idea.rs/images/products/465/465000017_1l.jpg?1551294750'),
    new Drinks('Hennessy Cognac', 'Hennessy is Cognac, which is brandy made in Cognac, France. But the brand was created by an Irishman.', 'https://images.shopdutyfree.com/image/upload/v1580467244/020/002/001/3245990529323/3245990529323_1_default_default.jpg'),
    new Drinks('Grey Goose Vodka', ' Bottle is the essence of the finest ingredients from France; soft winter wheat from in and around Picardy plus pure spring water from Gensac in the Cognac region, nurtured and captured from field to bottle in an exclusive process designed and controlled by the extraordinary skills and commitment of our Cellar Master François Thibault.', 'https://teddybear.rs/wp-content/uploads/2018/06/Grey-Goose.jpg'),
    new Drinks('Jack Daniel’s', 'Jack Daniel’s Tennessee Whiskey comes from the United States oldest registered distillery and is charcoal mellowed through 10 feet of sugar maple charcoal. ', 'https://static.brown-forman.com/wp-content/uploads/2014/07/08151455/JD_big.jpg'),
    new Drinks('Johnnie Walker', 'This wonderful Scotch Whisky delivers big flavour and is a pleasant fresh whisky, both smooth and warm. A robust, traditional whisky on the palate exhibiting sweet notes of vanilla, spice and malt. ', 'https://www.enotekapremier.rs/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/j/o/johnnie-walker-black-label-blended-whiskey-box.jpg'),

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
