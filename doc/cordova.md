Cordova lietošana
=======================

Cordova lietošana notiek tikai caur **Node.js command prompt**. Sekojošās ir biežāk izmantojamās komandas.
Lai projektu izveidotu, to ir ieteicams darīt projektiem paredzētā direktorijā. Piemēram, workspace direktorijā zem lietotāja direktorijas. Lietotāja direktorija tiek atvērta atverot komandrindu. workspace direktorij var izveidot ar sekojošo komandu.

	mkdir workspace
	
Ieiet direktorijā var ar sekojošo komandu.

	cd workspace

Lietotnes projekta izveidošana.

	cordova create kjpsProjekts com.kjps.kjpsProjekts KjpsProjekts

Lai izpildītu pārējās komandas, ir jāatrodas projekta direktorijā.	

	cd kjpsProjekts
	
Android platformas pievienošana projektam. Šādi pievieno platformu, uz kuru vēlas kompilēt projektu.

	cordova platform add android
	
Projekta kompilēšanas komanda.

	cordova build
	
Komanda projekta darbināšnai Android emulatorā.

	cordova emulate android