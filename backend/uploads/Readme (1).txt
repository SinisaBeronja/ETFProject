Uputstvo za inicijalizaciju i korišćenje remote repositorijuma na GITHUB-u.

Ja sam, uz Mirzinu pomoć, napravio novi ripozitorijum na GITHUB-u, on je public i poslao sam Vam pozivnice. Tu sam pushovao ono što je potrebno od našeg projekta (uradio .gitignore za nepotrebne delove, kako je Jelica sugerisala). Na njemu je napravljena develop branch i mi svi sa nje povlačimo kod na kom radimo.
Vi radite sledeće:
Napravite novi folder negde na C ili D, gde mislite da bude projekat, nazovite folder npr. NasProjekat.
U GIT CMD se pozicionirate u taj folder i kucate sledeće:

git clone https://github.com/SinisaBeronja/ETFProject.git

Otvorite u Visual Studio Code-u taj folder, videćete poznatu strukturu. Pozicionirate se u komand promptu u visual studio codu na backend i kucate:

npm install 

Pozicionirate se u komand promptu u visual studio codu na frontend i kucate: 

npm install

Time ste instalisali sve neophodno za aplikaciju i ona bi trebala da se kompletno vidi. Ona će biti i dalje na tom mestu kod Vas.
Aplikaciju pokrećete kao i do sad: 

npm run dev

na backendu i 

ng serve 

na frontendu. Ako ne radi ng serve probajte npm start na frontendu.
Poslednje što treba je da napravite granu develop kod Vas na lokalu. To radite tako što se u GIT CMD pozicionirate u onaj folder gde je aplikacija, (NasProjekat sam gore predložio) i kucate 

git checkout develop

Time prelazite na granu develop i time ste sve namestili. Nadam se da radi...

Kada radite izmene u kodu idete sledeće:
U GIT CMD se pozicionirate u folder gde je projekat (Verovatno ste već tamo, ako ne gasite kompjuter) i prelazite na granu develop sa 

git checkout develop 

(možda ste već na njoj, pa će reći allready on branch develop). Kucate:

git pull 

da povučete najnoviju verziju (on sa develop na githubu dovlači na develop kod Vas na lokalu). Ako nema izmena na develop grani na GITHUB-u (niko nije radio od Vašeg zadnjeg commit-a), reći će da je up to date. Ako ima nekih 
izmena on dovlači sve što treba. Vi tada pravite jednokratnu granu stefangrana1 za konkretan rad tog dana i prelazite na nju sa komandom:

git checkout -b stefangrana1

Sve što radite Vi radite kod Vas u lokalu na toj grani. 
Radite kod
.
.
Kada završite sve što ste planirali da radite, kucate u GIT CMD 

git commit -a -m “Stefan uradio”

Time je napravljena grana na remote repos na GITHUB-u koja se isto zove stefangrana1. Sve što ste radili pushujete se komandom u GIT CMD:

git push --set-upstream origin stefangrana1 

Na lokalu prelazite na granu develop sa komandom u GIT CMD git checkout  develop. Sve promene su na toj grani na GITHUB-u, vi ne morate brisati tu granu na lokalu (svaku granu pravite jednokratno, a one posle ne smetaju).
Ja radim dalje, proveravam na git hubu, ja mergujem na granu develop, brišem šta treba na githubu i trudim se da to sve odrzavam kako treba i da ispravljam konflikte. Znači ja mergujem na github-u, a Vaš deo sam objasnio.


