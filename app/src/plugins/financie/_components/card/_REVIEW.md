# 8.5 Rene
[zatial(z-advancedImgCards,z-categoryCard,z-homeCategoryCard,z-imgCard,z-textCard,z-blogCards)x] Štruktúru html by som si nejak upratal, najprv by som používal klasické html atribúty, potom by som to stackoval podla toho do riadkov, ďalej by som dal vue listenery, bindy ...
[-] Radšj by som použil !str.length namiesto str != ''"
[x] Importy by som dával zo sourcu čiže @ a nie ../../../
[x] Zbytočné čiarky za objektami, funkciami, etc ... keď za nimi nič nenasleduje
[x] dvojite zatvorky ... asi si myslel uvodzovky
[-] postupne by som poodoberal console logy, ktoré už nepotrebuješ, pretože keď ich tam budeš mať milión a budeš niečo debugovať, tak sa ti to bude motať
[] Nazvy premennych, funkcii by som spravil konzistentnejší, nedával by som niečo po anglicky a niečo po slovensky
[] Keď niečo loaduješ z apiny, a ukladáš to do nejakej premennej, tak by som ju nastavil najprv na null, tým pádom si to možeš potom ošetriř v kóde cez v-ifka ...
[] private methods by som dával na spodok metód
[x] bodkočiarky ...
[x] ! trojité rovnása hneď preč, je len málo use casov, kde ho potrebuješ a to rozhodne nie je jedno z nich ...
[] keď používaš js metódy, tak by som element neobaloval do zátvoriek, je to zbytočné
[x] pre private methods ako actualPage, changeRightPage ... by som dával prefix _, a v tomto prípade mi príde táto metóda celkom zbytočná ... možeš to spraviť rovno v handleri
[este spravim] náhodné medzeri v kóde
[-] keď používate moment vo viacerých súboroch, tak lang môžete nastaviť globálne
[x] v najnovšej verzii routera na menili jeho atribúty, že sa už nebindujú, čiže :to => to=
[] používal by som skôr js literals namiesto niečo + " " + niečo2, a keď už tak si nájsť konzistentný spôsob a nepoužívať to niekde tak a inde inak ...
[x] this.blogCards = cards.data.blog; možeš to ukladať rovno do this.blogCards a za await dáš len .blog
[-] loadovať z apiny v created namiesto v mounted ?
[] spraviť si štruktúru v importoch najprv by som dával hlavné importy ako cudzie libky a potom až svoje veci alebo naopak, nájsť si svôj spôsob a spraviť to konzistentne
[x] prázdne html atribúty dať preč alt="" ...
[] pri cardImg spraviť use case, keď ti to vráti zlý link alebo žiadny (na obrázok)
[] pri if nemusíš používať zložené zátvorky keď nemáš else if
[] .length > 0 môžeš nahradiť iba .length
[] nepoužívať `` keď v tom nie sú premenné
[x]     this.link1Cards = cards2.data.link_cards;
        this.link2Cards = cards3.data.link_cards;
        this.link3Cards = cards4.data.link_cards;
		toto je uplne useless, možeš dať za await.link_cards ...
[-] keď do router-niku vnáraš ďalší tag, tak by som to stackoval pod seba