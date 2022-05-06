  /* 
  Exercice 1
  -- Transformer un tableau en chaîne de caractère --
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser la variable de sortie -> une chaîne de caractère
  3. Créer une boucle qui va de 0 jusqu'à la longueur du tableau
  4. Ajouter à la variable de sortie chaque case du tableau
  5. Retourner la variable de sortie
  */

  function tabToString(tab){
    let res = "";
    for(let i = 0; i < tab.length; i++) {
      res += tab[i];
    }
    return res;
  }

  /* 
  Exercice 2
  -- Transformer une chaîne de caractère en tableau --
  0. Regardez ce que fait la méthode "push"
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de sortie -> un tableau
  3. Créer une boucle qui va de 0 jusqu'à la longueur de la chaîne de caractère
  4. Ajouter chaque caractère à une case du tableau de sortie
  5. Retourner la variable de sortie
  */

  function stringToTab(str){
    let res = [];
    for(let i = 0; i < str.length; i++) {
      res.push(str[i]);
    }
    return res;
  }

  /* 
  Exercice 3
  -- Transformer un tableau en chaîne de caractère version rapide --
  0. Regardez ce que fait la méthode "concat"
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser une variable "resLeft" qui va être remplie avec la partie gauche du tableau
  3. Initialiser une variable "resRight" qui va être remplie avec la partie droite du tableau
  4. Initialiser une variable "j" qui va être égale à la longueur du tableau -1
  5. La boucle va parcourir le tableau à la fois depuis la droite et depuis la gauche.
     Pour se faire on va à chaque itération ajouter 1 ("i") à une variable soustraire 1 ("j") à l'autre.
     À créer donc une boucle qui commence à 0 et qui va jusqu'à "j" (qui diminuera de 1 à chaque itération)
  6. Dans la boucle, ajouter chaque case du tableau en partant du début à resLeft 
  7. Dans la boucle, tester si on est pas sur la même case avec "i" et "j"
  8. Si on est pas sur la même case, ajouter chaque case du tableau en partant de la fin resRight
     Attention au sens de l'ajout
  9. Décrémenter "j" 
  8. Quand la boucle est finie, on concatène resLeft et resRight et on retourne la valeur
  */

  function tabToStringFast(tab){
    let res = "";
    let resLeft = "";
    let resRight = "";
    let j = tab.length-1;

    for(let i = 0; i <= j; i++) {
      resLeft += tab[i];
      if (i!=j) { 
        resRight = tab[j] + resRight
        j--;
      }
    }
    res = resLeft.concat(resRight);
    return res;
  }

  /* 
  Exercice 4
  -- Transformer une chaîne de caractère en tableau version rapide --
  0. Regardez ce que fait la méthode "unshift"
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser une variable "resLeft" qui va être remplie avec la partie gauche de la chaîne
  3. Initialiser une variable "resRight" qui va être remplie avec la partie droite de la chaîne
  4. Initialiser une variable "j" qui va être égale à la longueur de la chaîne -1
  5. La boucle va parcourir la chaîne à la fois depuis la droite et depuis la gauche.
     Pour se faire on va à chaque itération ajouter 1 ("i") à une variable soustraire 1 ("j") à l'autre.
     À créer donc une boucle qui commence à 0 et qui va jusqu'à "j" (qui diminuera de 1 à chaque itération)
  6. Dans la boucle, ajouter chaque caractère de la chaîne en partant du début à chaque case de resLeft 
  7. Dans la boucle, tester si on est pas sur le même caractère avec "i" et "j"
  8. Si on est pas sur le même caractère, ajoute à resRight chaque caractère de la chaîne en partant 
     de la fin de celle-ci. Chaque caractère sera ajouté au début de resRight
     Exemple : La fin de la chaîne est égale à "eau". Première boucle on va avoir pour resRight "u".
     2ème on va avoir "au". Et dernière, on va avoir "eau". Chaque fois le caractère est ajouté au début.
  9. Décrémenter "j" 
  8. Quand la boucle est finie, on concatène resLeft et resRight et on retourne la valeur
  */

  function stringToTabFast(str){

    let res;
    let resLeft = [];
    let resRight = [];
    let j = str.length -1;
    
    for(let i = 0; i <= j; i++) {
      resLeft.unshift(str[i]);
      if(str[i] !== str[j]) {
        resRight.unshift(str[j]);
        j--;
      }
    }
    res = resLeft.reverse().concat(resRight);
    return res;
  }

  /* 
  Exercice 5
  -- Transformer un tableau en chaîne de caractère version récursive --
  0. Regarder ce que fait la méthode "slice"
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser la variable de sortie
  3. On regarde si notre la longueur du tableau est plus grande que 0
  4. Si notre la longueur du tableau est plus grande que 0, on concatène à notre valeur de sortie
     la valeur de la première case du tableau avec le résultat de notre fonction qu'on rappel en lui 
     renvoyant un tableau avec la première case en moins
  5. On retourne le résultat concaténé 
  */

  function tabToStringRec(tab) { 
    let res = "";
    let length = tab.length;
    if(!tab.length) return "";
    return [
      res = tab[0] + "" + tabToStringRec(tab.slice(1, length)),
    ];
  }

  /* 
  Exercice 6
  -- Transformer une chaîne de caractère en tableau version récursive --
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de sortie
  3. On regarde si la longueur de chaîne est plus grande que 0
  4. On ajoute à la variable de sortie, à la case suivante, le premier caractère de la chaine
  5. On concatène à notre valeur de sortie le résultat de notre fonction qu'on rappel en lui 
     renvoyant la chaine de caractère emputée de son premier caractère
  6. On retourne le résultat concaténé 
  */
  
  function stringToTabRec(str) {   
    if (!str.length) return [];

    return [
      str[0],
      res = stringToTabRec(str.slice(1))
    ]
  }

  
  /* 
  Exercice 7
  -- Chercher si un mot est un palindrome --
  0. On va comparer la première lettre avec la dernière, puis la seconde avec l'avant dernière, etc.
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de boucle "j" qui a comme valeur de départ la longuer de la chaîne
  3. Initialises la boucle avec comme condition que la boucle continue tant que la variable 
     qui s'incrémente "i" soit plus petite que celle qui se décrémente "j" (que les indices se rejoignent)
  4. Tester les caractères courant entre eux (1er avec dernier, 2nd avec avant dernier, etc.)
  5. Si le test trouve des valeurs différentes entre les deux caractères comparés, 
     alors on retourne "faux"
  7. On décrémente la variable "j" et incrémente "i" (automatique dans une boucle for pour cett dernière)
  6. Une fois la boucle terminée, on retourne "vrai" en dehors de la boulce
  */

  function isPalindrome(str){
    let res;
    let j = str.length -1;
    for (let i = 0; i <= j; i++) {
      if (str[i] == str[j]) {
        j--;
        res = true
      } else {
        j--;
        res = false
      }
    }
    return res;
  }

  /* 
  Exercice 8
  -- Chercher si un mot est un palindrome version recursive --
  0. On va comparer la première lettre avec la dernière, puis la seconde avec l'avant dernière, etc.
  1. La fonction reçoit en paramètre une chaîne de caractère, l'indice du caractère à gauche et l'indice
     du caractère à droite (on va sans cesse comparer ces deux caractère). Les valeurs par séfaut sont
     respectivement 0 et la longeur de la chaîne de caractère
  2. Tester si l'indice de gauche et celui de droite ne se sont pas rejoint ou dépassé
  3. Tester si le caractère de gauche et celui de droite sont égaux.
    3a. Si c'est le cas, continuer à chercher en relançant la fonction, en retournant son résultat,
        avec comme paramètre toujours la chaîne mais aussi l'indice de gauche augmenté de 1 et 
        l'indice de droite diminué de 1
    3b. Si les deux caractères sont différents, renvoyer "faux"
  4. En dehors du test, retourner "vrai" (cela veut dire qu'on aura soit lancé toutes les instructions,
     soit que gauche et droite se seront rejoint ou dépassé.)
  */

  function isPalindromeRecursif(str,left=0,right=str.length-1){   
    let res;
    if (left < right) {
      if (str[left] == str[right]) {
        isPalindromeRecursif(str, ++left, --right);
        res = true;
      } else {
        res = false
      }
    }
    return res;
  }

  /* 
  Exercice 9
  -- Chercher si un mot est un palindrome version recursive avec coupe de chaîne --
  0. On va à chaque fois comparer la première lettre avec la dernière. À chaque récursion, on va
     emputer la chaîne du premier et dernier caractère.
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Tester si la chaîne est vide ou à 1 de longueur (soit dès le départ on a un palindrome, soit
    à force de couper la chaîne et après avoir fait toute les comparaisons on a un palindrome)
  3. Si c'est le cas, on retourne "vrai" 
  4. Tester si le caractère le premier caractère de la chaîne est égal au dernier.
    4a. Si c'est le cas, continuer à chercher en relançant la fonction, en retournant son résultat,
        avec comme paramètre toujours la chaîne mais le premier et le dernier caractère en moins
    4b. Si les deux caractères sont différents, renvoyer "faux"
  */

  function isPalindromeRecursifSubString(str){
    let res;
    let j = str.length -1;
    let i = 0;
    if(str[i] === str[j]) {
      if (i < j) {
        j--;
        isPalindromeRecursifSubString(str.slice(0,1));
        res = true;
      }
    } else {
      res = false;
    }
    return res;
  }

  /* 
  Exercice 10
  -- Inverser une chaîne de caractère en partant de la fin de celle-ci --
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. On initialise la variable de retour
  3. On initialise la boucle pour partir de la fin de la chaine et décrémenter de 1 jusqu'à 0
  4. À chaque pas de boucle, on conctène le caractère courant à notre variable de retour
  5. On retourne notre variable de retour en sortie de boucle 
  */

  function strInvertForEnd(str){
    let res = "";

    for(let i = str.length-1; i >= 0; i--) {
      res += str[i]; 
    }
    return res;
  }

  /* 
  Exercice 11
  -- Fonction permettant d'échanger de place des caractère dans une chaîne grace à substring --
  1. La fonction reçoit en paramètre une chaîne de caractère et les indices des deux éléments à échanger
  2. On concatène différentes partie de la chaîne
    2a. On découpe la partie de gauche jusqu'au premier élément
    2b. On ajoute le second élément
    2c. On ajoute la partie de chaîne entre les deux éléments
    2d. On ajoute le premier élément
    2e. On ajoute la fin de chaîne à partir du second élément
  3. On retourne le tout concaténé à la sortie
  */

  //res = substring[début de chaîne jusqu'à str[a-1]] + str[b] + substring[chaine de a jusqu'à str[b-1]] + str[a] + substring[fin de chaîne à partir de str[b+1]]
  //Exemple "nez" -> a = 0, et b =2
  // res = [début de chaîne jusqu'à 0-1]="" + z + e + n + substring[fin de chaîne à partir de 2+1]=""
  //Exemple "partir" -> a = 1, et b =3
  // res = [début de chaîne jusqu'à 1-1]="p" + t + r + a + substring[fin de chaîne à partir de 3+1]="ir"

  function swapStr(str, a, b){
    
    let res = "";

    let first = str.substring(a-1, a);
    let second = str.substring(a+1, b);
    let third = str.substring(b+1)

    return res = first + str[b] + second + str[a] + third;
  }

  /* 
  Exercice 12
  -- Fonction permettant d'inverser les lettres d'une chaîne de caractère en utilisant la fonction 
  précédente qui permet d'échanger des lettres --
  0. Cette fonction va prendre les caractères de gauche et ceux de droite et les échanger les uns avec
  les autres en allant vers le centre jusqu'à ce que la chaîne soit complétement inversée
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. On initialise la variable de l'indice de droite en lui affectant la longueur de la chaîne 
  3. On initialise la valeur de retour en lui affectant la valeur d'entrée de la fonction
  4. On initialise la boucle avec comme condition de sortie que l'indice de gauche rejoint l'indice de droite
  5. On affecte à la valeur de retour le résultat de notre fonction échangeant des lettres
  6. On décrémente la valeur de l'indice de droite 
  4. On retourne le résultat à la sortie
  */

  function strInvertFor(str){
    let j = str.length-1;
    let res = str;

    for (let i = 0; i < j; i++) {
      res = swapStr(res ,i , j);
      j--;
    }
    return res
  }

  /* 
  Exercice 13
  -- Fonction permettant d'échanger de place des valeurs dans un tableau --
  0. À savoir que les tableaux se comportent comme des variables publiques
  1. La fonction reçoit en paramètre un tableau et les indices des deux éléments à échanger
  2. On initialise une valeur temporaire en lui affectant la valeur se trouvant au premier indice
     dans le tableau
  3. On affecte à la case du tableau avec le premier indice la valeur de la case du tableau au second indice
  4. On affecte à la case du tableau avec le second indice la valeur de la variable temporaire
  5. Pas besoin de retourner de valeur car le tableau est directement affecté
  */

  function swap(tab, a, b){
    let index = tab[a];
    tab[a] = tab[b];
    tab[b] = index;
  }

  /* 
  Exercice 14
  -- Fonction permettant d'inverser les cases d'un tableau avec leurs valeurs en utilisant la fonction 
  précédente qui permet d'échanger des cases de tableau avec leurs valeurs --
  0. Cette fonction va prendre les cases de gauche et celles de droite et les échanger les uns avec
  les autres en allant vers le centre jusqu'à ce que tout soit inversé
  1. La fonction reçoit en paramètre un tableau
  2. On initialise la variable de l'indice de droite en lui affectant la longueur du tableau
  3. On initialise la boucle avec comme condition de sortie que l'indice de gauche rejoint l'indice de droite
  4. On lance la fonction échangeant des cases
  5. On décrémente la valeur de l'indice de droite 
  6. On retourne le tableau qu'on a reçu en entrée de fonction
  */

  function tabInvertFor(tab){
    let res = tab;
    let j = tab.length-1;
    for(let i = 0; i < j; i++) {
      swap(res, i, j)
      j--
    }
    return res;
  }

  /* 
  Exercice 15
  Commentez et expliquez la fonction suivante :
  */

  /**
   * 
   * @param {*} str string
   * @param {*} right egal a 0
   * @param {*} left longeur string -1
   * @param {*} res resultat
   * @returns renverse la valeur de str et la retourne.
   */
  function strInvertRec(str,right=0,left=str.length-1,res="") {   
    //permet de rassembler les deux cote
    if (right == left){
      //res ("") est egal a res plus l'index 0 du string
      res = res + str[left];
    }else{ //si droite est pas egal a la gauche
      //declare mid, split chaque valeur jusqu'a obtenir toutes les valeur individuel
      let mid = right + Math.floor((left-right)/2);
      //declare resLeft, recursive permet de continuer le split jusqu'a que le premier if est vrai
      let resLeft = strInvertRec(str, right, mid, res);
      //declare resRight, recursive permet de continuer le split jusqu'a que le premier if est vrai
      let resRight = strInvertRec(str, mid+1, left, res);
      //console.log("Right", resRight);
      
      //renverse l'ordre des lettre du cote gauche 
      if (resLeft.length > 0){
        //res egal a la reponse plus resleft
        res =  res + resLeft;
      }
      //renverse l'ordre des lettre du cote droit 
      if (resRight.length > 0){
        //res egal la response plus resRight
        res = resRight + res;
      }
    }    
    // renvoie le string mais renverser.
    return res;
  }

  /*
  Exercice 16
  Tentez de faire un fonction d'inversion de chaîne récursive en utilisant la fonction de chaîne native
  substring
  */

  function strInvertRecSubstr(str) {

    if(str.length <=1) {
      return str;
    } else {
      let str2 = str;
      return str.charAt(str2.length -1) + strInvertRecSubstr(str.substring(0, str.length -1));
    }
  }

  console.log("strInvertRecSubstr",strInvertRecSubstr("edcba"));

  /*
  Exercice 17
  Faire des fonctions qui permettent de vérifier si une chaîne reçu en entrée est un palindrome ou non
  en utilisant les fonctions d'inversion de chaîne précédente. Une ligne avec un return suffit à chaque fois
  */

  //Avec strInvertRec
  function isPalindromeAgain(str){
    return strInvertRec(str,right=0,left=str.length-1);
  }

  console.log("isPalindromeAgain",isPalindromeAgain("tset"));

  //Avec strInvertFor
  function isPalindromeAgain2(str){
    return strInvertFor(str);
  }
  console.log("isPalindromeAgain2",isPalindromeAgain2("tset"));

  //Avec tabInvertFor
  function isPalindromeAgain3(str){
    return tabInvertFor(str);
  }

  console.log("isPalindromeAgain3",isPalindromeAgain3(['t', 's', 'e', 't']));

  //Avec strInvertRecSubstr
  function isPalindromeAgain4(str){
    return strInvertRecSubstr(str);
  }

  console.log("isPalindromeAgain4",isPalindromeAgain4("gfedcba"));

  //Avec strInvertForEnd
  function isPalindromeAgain5(str){
    return strInvertForEnd(str);
  }

  console.log("isPalindromeAgain5",isPalindromeAgain5("tset"));

  /*
  Exercice 18
  Faites une fonction qui cherche la valeur minimum dans un tableau avec une boucle simple
  */

  function minimumFor(tab){
    let res = tab[0];

    for(let i = 1; i < tab.length-1; i++) {
      if(tab[i] < res) {
        res = tab[i];
      }
    }
    return res
  }

  /*
  Exercice 19
  Faites une fonction qui cherche la valeur minimum dans un tableau avec une boucle avec deux indices
  pour parcourir le tableau depuis le début et la fin jusqu'à ce que les indices se rejoignent 
  (milieu du tableau). 
  */

  function minimumForTwoStep(tab){
    let res = tab[0];
    let j = tab.length -1;

    for(let i = 1; i < j; i++) {

      if(tab[i] < res) {
        res = tab[i];
      } else if (tab[j] < res) {
        res = tab[j];
        j--;
      }
    }
    return res
  }

  /*
  Exercice 20
  -- Fonction permettant de chercher de manière récursive la valeur minimum dans un tableau --
  1. La fonction prend en paramètre un tableau, un indice (pour la partie droite du tableau) 
     ayant 0 comme valeur par défaut et un autre indice (pour la partie gauche du tableau) ayant 
     la longueur du tableau comme valeur par défaut
  2. On initialise la valeur de retour (le minimum) en lui affectant la valeur de la case du tableau 
     à l'indice de droite
  3. On test si l'indice de droite est toujours plus petit que celui de gauche (en ce cas les deux 
     indices ne se sont pas rejoins et on continue de chercher la valeur minimu)
  4. Si la valeur de retour (voir point 2) est plus petite ou égale à la valeur de la case du tableau 
     à l'indice de gauche :
     4a. On affecte à la valeur de retour le résultat de notre fonction récursive qui aura en paramètre
         le tableau, l'indice de droite, et l'indice de gauche décrémenté de 1
     4b. SINON on affecte à la valeur de retour le résultat de notre fonction récursive qui aura en 
         paramètre le tableau, l'indice de droite incrémenté de 1, et l'indice de gauche
  5. En dehors des conditions, on retourne la valeur de retour (le minimum)
  */
  
  //Cette fonction déplace notre pointeur de gauche à droite jusqu'à se fixer sur la valeur la plus petite
  function minimumRecursif(tab,right=0,left=tab.length-1){
    let res = tab[right];
    
    if (right < left) {
      if(res <= tab[left]) {
        res = minimumRecursif(tab, right, --left);
      } else {
        res = minimumRecursif (tab, ++right, left);
      }
    }
    return res;
  }

  /*
  Exercice 21
  Commentez le code suivant
  */

  /**
   * check la valeur de gauche et droite du tableau en meme temps, puis affecte a min une valeur plus petite si il la trouve.
   * @param {*} tab tableau de numero
   * @param {*} start index du debut
   * @param {*} end index de la fin
   * @param {*} min valeur du tableau index start
   * @returns retourne la valeur minimal du tableau
   */
  function minimumRecursifTwoStep(tab,start=0,end=tab.length-1,min=tab[start]){
    
    //si index droit est plus petit que l'index gauche alors on execute.
    if (start < end) {
      //si la valeur du tableau index 0 est plus petite que le tableau index 0 ou que le tableau index end (fin du tableau), alors elle execute.
      if ( (tab[start]<min) || (tab[end]<min) ) {
        //si le numeroTab index 0 est plus petit que min (tab index 0).
        if (tab[start]<min) {
          //alors min est egal a la nouvelle valeur (tab index start) puis on rappelle la function mais on incremente start de 1 et end de -1 (c'est valeur on deja ete check). 
          min = minimumRecursifTwoStep(tab,start+1,end-1,tab[start]);
        }else{ //sinon min est egal a la nouvelle valeur (tab index end) puis on rappelle la function mais on incremente start de 1 et end de -1 (c'est valeur on deja ete check). 
          min = minimumRecursifTwoStep(tab,start+1,end-1,tab[end]);
        }
      }else{ //si aucune des valeurs est plus petite que min alors la valeur de min reste la meme, puis on rappelle la function mais on incremente start de 1 et end de -1 (c'est valeur on deja ete check). 
        min = minimumRecursifTwoStep(tab,start+1,end-1,min);
      }
    }

    //Avec les "if" on a check les valeur autant de gauche comme de droite et min a change ça valeur si un autre etait plus petit. Une fois que start n'est plus petit que end il retourne la valeur de min qui correspond a la valeur plus petite.
    return min;

  }

  /*
  Exercice 22
  Commentez et expliquez le code suivant
  */

  /**
   * il va faire un check de la longeur du tableau, si c'est egal a 0 returne index 0 du tableau, sinon avec math.min et la recursivite retourne la valeur la plus petite a chaque boucle.
   * @param {*} tab tableau avec des numero
   * @param {*} len longeur du tableau -1
   * @returns le numero le plus petit
   */
  function minimumRecursifMath(tab, len=tab.length-1) {        
      if (len == 0){ //si la longitue est egal a 0;
      //retourne la seul valeur du tableau.
          return tab[0]; 
      }
      //Math.min retourne la valeur la plus petite entre deux valeur, a chaque recursivite compare tab[longeur -1] puis la valeur de la fonction a chaque boucle.
      return Math.min(tab[len - 1], minimumRecursifMath(tab, len - 1));
  }

  /*
  Exercice 23
  1) Commentez et expliquez le code suivant
  2) Dessinez ou décrivez les différentes étapes afin que l'on voit ce qui se passe sur le tableau de
  départ : [1,43,98,723,-2,4,-28,17,45,13,-11,0,37,-23]
  */

  /**
   * cette fonction fait un sort, si le tableau est pas plus grand que 2 retourne le plus petit des deux, sinon diviser tous les element pour le comparer.
   * @param {*} tab tableau de valeur
   * @param {*} start index egal 0
   * @param {*} end longeur du tableau -1
   * @returns la valeur la plus petite
   */
  function minimumRecursifDivideAndConquer(tab,start=0,end=tab.length-1) {
    //si la longeur du tableau moins start(0) est plus petit que 2,
    if ((end-start) < 2){
      //si le tableau est plus petit que 2 il compare les deux valeur (ternaire) puis retourne le plus petit.
      return ((tab[end]<tab[start]) ? tab[end] : tab[start]);
    }else{ //si le tableau est plus grand que 2
      //divise la longeur du tableau en deux
      let mid = Math.floor((end+start)/2); 
      //Recusivite de la fonction avec parametre start (0) puis mid (moitie du tableau), tant que la longeur est plus que 2 il divisera a nouveau.
      let minLeft = minimumRecursifDivideAndConquer(tab, start, mid);
      //Recusivite de la fonction avec parametre mid (moitie du tableau) puis end (longeur du tableau), tant que la longeur est plus que 2 il divisera a nouveau.
      let minRight = minimumRecursifDivideAndConquer(tab, ++mid, end);
      //A chaque recursivite compare les valeur (ternaire) puis retourne la plus petite.
      return ((minLeft<minRight) ? minLeft : minRight);
    }
  }

  /*
  Exercice 24
  Faites une fonction qui permet de chercher le minimum ET le maximum dans un tableau
  Retournez un tableau de deux cases contenants ces deux valeurs
  Inspirez-vous des algos précédent
  */

  function minAndMaxRecDAC (tab,start=0,end=tab.length-1){
    let res = [];
    let min = tab[start];
    let max = tab[start];

    for(let i = 1; i < end; i++) {

      if (tab[i] < min) {
        min = tab[i];
      } 
      if (tab[i] > max) {
        max = tab[i];
      }
    }
    res.push(min, max)
    return res;
  }

  //Partie lançant les différents fonction et affichant leurs résultats 

  //Initialisation des variables
  let res = "";
  let t = ["J","e"," ","s","u","i","s"," ","u","n","e"," ","s","t","r","i","n","g"," ","m","a","i","n","t","e","n","a","n","t"];
  let s = "Je suis une string transformé en tableau";

  //Partie de transformation de tableau en String ou de string en tableau
  res += "Exercice 1 : "+tabToString(t)+"\n--\n";
  res += "Exercice 2 : ["+stringToTab(s)+"]\n--\n";
  res += "Exercice 3 : "+tabToStringFast(t)+"\n--\n";
  res += "Exercice 4 : ["+stringToTabFast(s)+"]\n--\n";
  res += "Exercice 5 : "+tabToStringRec(t)+"\n--\n";
  res += "Exercice 6 : ["+stringToTabRec(s)+"]\n--\n";

  //Partie Palindrome
  s ="repasser"; 
  res += "Exercice 7 : '"+s+"' est palindrome ? -> "+isPalindrome(s)+"\n--\n";
  s ="ressasser";
  res += "Exercice 7 : '"+s+"' est palindrome ? -> "+isPalindrome(s)+"\n--\n";
  s ="koala";
  res += "Exercice 8 : '"+s+"' est palindrome ? -> "+isPalindromeRecursif(s)+"\n--\n";
  s ="kayak";
  res += "Exercice 8 : '"+s+"' est palindrome ? -> "+isPalindromeRecursif(s)+"\n--\n";
  s ="turing";
  res += "Exercice 9 : '"+s+"' est palindrome ? -> "+isPalindromeRecursifSubString(s)+"\n--\n";
  s ="ada";
  res += "Exercice 9 : '"+s+"' est palindrome ? -> "+isPalindromeRecursifSubString(s)+"\n--\n";

  //Partie inversion de string ou de tableau
  s = "bons";
  res += "Exercice 10 : À l'envers, '"+s+"' s'écrit : "+strInvertForEnd(s)+"\n--\n";
  s = "rage";
  res += "Exercice 11 : si on inverse la première et troisième lettre à '"+s+"' ça donne : "+swapStr(s, 0, 2)+"\n--\n";
  s = "zen";
  res += "Exercice 10 : À l'envers, '"+s+"' s'écrit : "+strInvertFor(s)+"\n--\n";
  t = ["r","a","g","e"];
  //Regardez ce qu'il se passe dans la console
  console.log(t);
  swap(t, 0, 2);
  console.log(t);
  res += "Exercice 13 : si on inverse la première et 3ème case du tableau [r,a,g,e] ça donne :"+t+"\n--\n";
  t = ["é","c","a","r","t"];
  res += "Exercice 14 : à l'envers le tableau ["+t+"] donne : "+tabInvertFor(t)+"\n--\n";
  s = "saper";
  res += "Exercice 15 : À l'envers, '"+s+"' s'écrit : "+strInvertRec(s)+"\n--\n";

  //Partie recherche de minimum
  t = [1,43,98,723,-2,4,-28,17,45,13,-11,0,37,-23];
  res += "Exercice 18 : le plus petit chiffre dans le tableau ["+t+"] est : "+minimumFor(t)+"\n--\n";
  res += "Exercice 19 : le plus petit chiffre dans le tableau ["+t+"] est toujours : "+minimumForTwoStep(t)+"\n--\n";
  res += "Exercice 20 : le plus petit chiffre dans le tableau ["+t+"] est encore : "+minimumRecursif(t)+"\n--\n";
  
  //Partie recher de minimum et maximum
  res += "Exercice 24 : le plus petit et le plus grand chiffre dans le tableau ["+t+"] sont : "+minAndMaxRecDAC(t)+"\n--\n";
  
  //Affichage dans la textarea au chargement ou reload de la page
  window.addEventListener("load", function () {  
    document.forms['myForm'].elements['result'].value = res;
  });
  