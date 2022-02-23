// Caractéristiques de la carte
var Map = {
    cols: 21,
    rows: 10,
    tSize: 64,
    // Les différents layers de base
    layers: [
       [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       ],
       [
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]],
       // Les différents layers après modification(s)
   layersTiles: [
     [],
     []
   ],
       // Retourne l'id correspondant au sprite
   getTileId: function (layer, col, row) {
           return this.layers[layer][row * this.cols + col];
   },
       // Remplace l'id à la colonne et à la ligne voulue
       setTileId: function(layer, col, row, id) {
           this.layers[layer][row * this.cols + col] = id
       },
       // Retourne le sprite à la colonne et à la ligne voulue
       getTile: function (layer, col, row) {
           return this.layersTiles[layer][row * this.cols + col];
   },
       // Remplace le sprite à la colonne et à la ligne voulue
   setTile: function(layer, col, row, tile) {
       this.layersTiles[layer][row * this.cols + col] = tile
   },
       // Retourne la colonne par rapport à une valeur x
   getCol: function (x) {
           return Math.floor(x / this.tSize)
       },
       // Retourne la ligne par rapport à une valeur y
       getRow: function (y) {
           return Math.floor(y / this.tSize)
       },
       // Retourne une valeur x par rapport à une colonne
       getX: function (col) {
           return col * this.tsize
       },
       // Retourne une valeur y par rapport à une ligne
       getY: function (row) {
           return row * this.tsize
       },
       // Liste des id correspondant aux différents sprites de l'image
       selecteurIndexesSprite: [
           1, 4, 5, 6, 13, 14, 15, 24, 16, 17, 19,
           12, 10, 11, 7, 8, 9, 27, 25, 26, 18, 20,
           31,  23, 28, 21, 22, undefined, undefined, undefined, undefined, undefined, undefined,
       ],
       // Liste des id correspondant aux différentes collisions
       selecteurIndexesColl: [
           0, 2
       ],
       // Les différents id correspondant à un carré dans une image prédéfinie
      tileKeys: {
     0: {id: 0, size: 64, color: 'transparent', sX: 0, sY: 128, init: function(x,y){this.x = x; this.y = y;}},
     1: {id: 1, name:'fond', size: 64, sX: 576, sY: 128, init: function(x ,y){this.x = x;	this.y = y;}},
     2: {id: 2, name:'collision', color: 'green', size: 64, sX: 0, sY: 0, width: 64, height: 64, init: function(x, y){this.x = x; this.y = y;}},
     3: {id: 3, name:'clone', size: 64, sX: 0, sY: 64, width: 64, height: 64, init: function(x, y){this.x = x; this.y = y;}},
     4: {id: 4, name:'solGauche', size: 64, sX: 64, sY: 0,	init: function(x, y){this.x = x; this.y = y}},
     5: {id: 5, name:'solCentre', size: 64, sX: 128, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     6: {id: 6, name:'solDroite', size: 64, sX: 192, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     7: {id: 7, name:'terreSimple', size: 64, sX: 192, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     8: {id: 8, name:'terreDiagonaleGauche', size: 64, sX: 256, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     9: {id: 9, name:'terreDiagonaleDroite', size: 64, sX: 320, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     10: {id: 10, name:'sol/terre', size: 64, sX: 64, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     11: {id: 11, name:'terre/sol', size: 64, sX: 128, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     12: {id: 12, name:'bordCentre', size: 64, sX: 0, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     13: {id: 13, name:'bordGauche', size: 64, sX: 256, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     14: {id: 14, name:'bordDroite', size: 64, sX: 320, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     15: {id: 15, name:'airGauche', size: 64, sX: 384, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     16: {id: 16, name:'airDroite', size: 64, sX: 512, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     17: {id: 17, name:'pilierHaut', size: 64, sX: 576, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     18: {id: 18, name:'pilierBas', size: 64, sX: 576, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     19: {id: 19, name:'portailHaut', size: 64, sX: 640, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     20: {id: 20, name:'portailBas', size: 64, sX: 640, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     21: {id: 21, name:'ronces', size: 64, sX: 192, sY: 128, init: function(x, y){this.x = x; this.y = y}},
     22: {id: 22, name:'plaque', size: 64, sX: 256, sY: 128, init: function(x, y){this.x = x; this.y = y}},
     23: {id: 23, name:'coeur', size: 64, sX: 64, sY: 128,	init: function(x, y){this.x = x; this.y = y}},
     24: {id: 24, name:'airCentre', size: 64, sX: 448, sY: 0, init: function(x, y){this.x = x; this.y = y}},
     25: {id: 25, name:'plafondGauche', size: 64, sX: 448, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     26: {id: 26, name:'plafondDroit', size: 64, sX: 512, sY: 64,	init: function(x, y){this.x = x; this.y = y}},
     27: {id: 27, name:'airSeule', size: 64, sX: 384, sY: 64, init: function(x, y){this.x = x; this.y = y}},
     28: {id: 28, name:'gemme', size: 64, sX: 128, sY: 128, init: function(x, y){this.x = x; this.y = y}},
     31: {id: 31, name:'blocFendu', size: 64, sX: 0, sY: 128, init: function(x, y){this.x = x; this.y = y}},
  }
}

var model = {
 fpsLimit:10,
   paintingTileId: 1,
   paintingCollId: 0,
   map: Map,
   worldWidth: null,
   worldHeight: null,
   rows: null,
   cols: null,
   width: null,
 height:null,
 sprite: {},
 screenWidth: null,
 screenHeight: null,
 camera: {
   x: 0,
   y:0,
   width:1344,
   height: 512
 },
    sprites:[],
    testColl:[],
   tableSprite:[],
   tableColl:[],
   PLAYING: 0,
   gameState: 0,
   clone: 0,
   colClone: undefined,
   rowClone: undefined,

   init: function(sw,sh){
       // Dimension World
       this.rows = this.map.rows
       this.cols = this.map.cols
       this.worldWidth = this.map.cols * this.map.tSize
       this.worldHeight = this.map.rows * this.map.tSize
       // Dimension de la 'fenêtre' visible = dimension de la caméra
       this.screenWidth = sw
       this.screenHeight = sh
       // Création d'une carte
       this.buildMap()
   },
   buildMap: function(){
       // Modifie Layer 0 Sprites
       for(let row = 0 ; row < this.rows ; row ++){
           for(let col = 0 ; col < this.cols; col ++){
               let tmpNumb = this.map.getTileId(0, col, row)
               let tile = this.map.tileKeys[tmpNumb]
               this.map.setTile(0, col, row, Object.create(tile))
           }
       }
       // Modifie Layer 1 collisions
       for(let row = 0 ; row < this.rows ; row ++){
           for(let col = 0 ; col < this.cols ; col ++){
               let tmpNumb = this.map.getTileId(1, col, row)
               if(tmpNumb != 0){
                   let tile = this.map.tileKeys[tmpNumb]
                   this.map.setTile(1, col, row, Object.create(tile))
               }
           }
       }
       this.tableSprite = model.map.layers[0]
       this.tableColl = model.map.layers[1]
   },
   updateCamWorld: function(){
       // Déterminer les blocs visibles
       let startCol = Math.floor(this.camera.x / this.map.tSize)
       let endCol = startCol + (this.camera.width / this.map.tSize)
       let startRow = Math.floor(this.camera.y / this.map.tSize);
   let endRow = startRow + (this.camera.height / this.map.tSize)
       // Bloque la dernière colonne (et ligne) à 12-1= 11 car un tableau [0,11]
       endCol = Math.max(0, Math.min(endCol, 20))
       endRow = Math.max(0, Math.min(endRow, 9))
       // offset : lorsque la caméra est entre deux bloc
       let offsetX = (startCol * this.map.tSize) - this.camera.x
       let offsetY = (startRow * this.map.tSize) - this.camera.y
       this.sprites = []
       this.testColl = []
       // Création des sprites
       for(let col = startCol; col <= endCol; col++){
           for(let row = startRow; row <= endRow; row++){
               let tile = model.map.getTile(0, col, row)
               let x = Math.round((col - startCol) * this.map.tSize + offsetX)
               let y = Math.round((row - startRow) * this.map.tSize + offsetY)
               tile.init(x,y)
               this.sprites.push(tile)
           }
       }
       this.testColl = []
       // Création des éléts de collision
       for(let col = startCol; col <= endCol; col++){
           for(let row = startRow; row <= endRow; row++){
               let tile = model.map.getTile(1, col, row)
               if(tile !== undefined){
                   // let x = Math.round((col - startCol) * this.map.tSize + offsetX)
                   // let y = Math.round((row - startRow) * this.map.tSize + offsetY)
                   let x = Math.round(col * this.map.tSize)
                   let y = Math.round(row * this.map.tSize)
         tile.init(x, y)
                   this.testColl.push(tile)
               }
           }
       }
 },
   getScreenDim: function(){
       // On définit la largeur et la hauteur de ce que l'on voit
       let screenDim = {
           width: this.screenWidth,
           height: this.screenHeight
       }
       return screenDim
   },
   getWorldDim: function(){
       // On définit la largeur et la hauteur de la taille du monde
       return {
           width: Map.cols * Map.tSize,
           height: Map.rows * Map.SIZE
       }
       return worldDim
   },
   getSprites: function(){
       // On retourne le tableau de sprites
       let sprites = this.sprites
       return sprites
   }
}

var octopus = {
   previousDelta: null,
   frame: null,
   wizard: model.wizard,
   keys:{
   LEFT: false,
   RIGHT: false,
   UP: false,
   DOWN: false,
       SPACE: false
   },
   checkEditor: true,

   init: function(){
       // On vérifie si une carte a déjà été créée auparavant
       octopus.checkEditedMap()
       // On initialise le model avec des tailles définit
       model.init(1344, 512) // 64*8 ou 64 = tSize pour simplifier prendre un multiple de tSize
       // On initialise la vue avec ses tailles
       view.init(model.getScreenDim())
       // On mets en place les écouteurs
       view.bindEvents()
       // On lance le jeu
       octopus.gameLoop()
   },
   checkEditedMap: function(){
       // On vérifie si une carte a déjà été sauvegardée dans la session de navigation en cours
       if(sessionStorage.getItem("layers0") != null && sessionStorage.getItem("layers1") != null){
           octopus.handlerGameEditor()
       }
   },
   gameLoop: function(currentDelta){
       octopus.frame = window.requestAnimationFrame(octopus.gameLoop)
       var delta = currentDelta - octopus.previousDelta
       if (model.fpsLimit && delta < 1000 / model.fpsLimit) {
           return
       }
       // Les différents état du jeu
       switch(model.gameState){
           case model.PLAYING:
               model.updateCamWorld()
           break
       }
       view.render(model.getSprites())
       octopus.previousDelta = currentDelta
   },
   // On définit un sélecteur pour le sprite choisi
 handlerChoseSprite: function(e){
   let sX = Math.floor(e.offsetX/64)*64
   let sY = Math.floor(e.offsetY/64)*64
   view.selecteurSprite.style.top = sY -4 + "px"
   view.selecteurSprite.style.left = sX -4 + "px"
       model.paintingTileId = model.map.selecteurIndexesSprite[(sY / 64) * 11 + (sX / 64)]
       //console.log(model.paintingTileId)
 },
   // On définit un sélecteur pour la collision choisi
   handlerChoseColl: function(e){
   let sX = Math.floor(e.offsetX/64)*64
   let sY = Math.floor(e.offsetY/64)*64
   view.selecteurColl.style.top = sY -4 + "px"
   view.selecteurColl.style.left = sX -4 + "px"
       model.paintingCollId = model.map.selecteurIndexesColl[(sY / 64) * 3 + (sX / 64)]
       //console.log(model.paintingCollId)
 },
   // On récupère la position de la souris et on remplace l'id de cette position par l'id choisi
   handlerChoseCanvas: function(e){
       let cX = e.offsetX
   let cY = e.offsetY
       let canvasCol = model.map.getCol(cX);
       let canvasRow = model.map.getRow(cY);
       if(model.paintingTileId != null){
           model.map.setTileId(0, canvasCol, canvasRow, model.paintingTileId)
       }
       if(model.paintingCollId != null){
           model.map.setTileId(1, canvasCol, canvasRow, model.paintingCollId)
       }
       model.init()
   },
   // On retourne le layers0 actuel
   handlerMapEditor: function(){
       return model.map.layers[0]
   },
   // On retourne le layers1 actuel
   handlerCollEditor: function(){
       return model.map.layers[1]
   },
   // On sauvegarde dans la session de navigation en cours les layers0, layers1 et la valeur de editCheck
   handlerTesterGameEditor: function(){
       sessionStorage.setItem("layers0", octopus.handlerMapEditor());
       sessionStorage.setItem("layers1", octopus.handlerCollEditor());
       sessionStorage.setItem("editCheck", octopus.handlerCheckEditor())
   },
   // On définit si on test la carte créée ou si on retroune au menu pour jouer au mode normal
   handlerCheckEditor: function(){
       if(this.checkEditor === true){
           var oui = 1
           return oui
       }
       else if(this.checkEditor === false){
           var non = 0
           return non
       }
   },
   // On créer de nouveaux layers[0] et layers[1] qui seront les layers0 et layers1 de la session de navigation en cours => la carte créée dans l'éditeur de map
   handlerGameEditor: function(){
       model.map.layers[0] = new Array()
       model.map.layers[1] = new Array()
       let mapSprite = sessionStorage.getItem("layers0").split(",")
       let mapColl = sessionStorage.getItem("layers1").split(",")
       for(let i = 0 ; i < mapSprite.length ; i ++){
           let sprite = Number(mapSprite[i])
           model.map.layers[0].push(sprite)
       }
       for(let y = 0 ; y < mapColl.length ; y ++){
           let coll = Number(mapColl[y])
           model.map.layers[1].push(coll)
       }
   },
   // On créer de nouveaux layers[0] et layers[1] qui seront les layers0 et layers1 de la session de navigation en cours mais vides
   handlerDelEditedMap: function(){
       model.map.layers[0] = new Array()
       model.map.layers[1] = new Array()
       let spriteIdInitial = 1
       let collIdInitial = 0
       for(let i = 0 ; i < 210 ; i ++){
           model.map.layers[0].push(spriteIdInitial)
       }
       for(let y = 0 ; y < 210 ; y ++){
           model.map.layers[1].push(collIdInitial)
       }
       octopus.handlerTesterGameEditor()
       model.init()
   }
}

var view = {
   init: function(screenDim){
       view.canvas = document.querySelector("canvas")
       view.ctx = view.canvas.getContext('2d')
       view.canvas.width = screenDim.width
       view.canvas.height = screenDim.height
       view.imgSprite = document.querySelector(".imgSprite")
       view.imgColl = document.querySelector(".imgColl")
       view.imgFond = document.querySelector(".imgFond")
       view.selecteurSprite = document.querySelector(".selecteurSprite")
       view.selecteurColl = document.querySelector(".selecteurColl")
       view.resTableSprite = document.querySelector(".resTableSprite")
       view.resTableColl = document.querySelector(".resTableColl")
       view.btnMenu = document.querySelector(".btnMenu")
       view.btnTester = document.querySelector(".btnTester")
       view.btnDelEditedMap = document.querySelector(".btnDelEditedMap")
   },
   // Tous les écouteurs sur les boutons et touches du clavier
   bindEvents: function(){
       view.imgSprite.addEventListener('click', octopus.handlerChoseSprite, false)
       view.imgColl.addEventListener('click', octopus.handlerChoseColl, false)
       view.canvas.addEventListener('click', octopus.handlerChoseCanvas, false)
       view.resTableSprite.addEventListener("click", view.copyTableSprite)
       view.resTableColl.addEventListener("click", view.copyTableColl)
       view.btnTester.addEventListener("click", function(){
           octopus.checkEditor = true
           octopus.handlerTesterGameEditor()
       });
       view.btnDelEditedMap.addEventListener("click", octopus.handlerDelEditedMap)
       view.btnMenu.addEventListener("click", function(){
           octopus.checkEditor = false
           octopus.handlerTesterGameEditor()
       })
   },
   render: function(sprites){
       view.ctx.clearRect(0, 0, view.ctx.canvas.width, view.ctx.canvas.height);
       // Pour dessiner les sprites
       sprites.forEach(tile => {
           view.ctx.drawImage(view.imgSprite,
           tile.sX, tile.sY,
           tile.size, tile.size,
           tile.x, tile.y,
           tile.size, tile.size)
   })
       view.resTableSprite.innerHTML = octopus.handlerMapEditor()
       view.resTableColl.innerHTML = octopus.handlerCollEditor()
       // Pour créer une grille de repère sur le cnavas
       for(var x = 64 ; x < 1344 ; x += 64) {
     view.ctx.moveTo(x, 0);
     view.ctx.lineTo(x, 512);
   }
   for(var y = 64; y < 512; y += 64) {
     view.ctx.moveTo(0, y);
     view.ctx.lineTo(1344, y);
       }
       view.ctx.strokeStyle = '#1D1D1D';
   view.ctx.stroke();
   },
   // Pour copier le contenu du textearea en un seul clic
   copyTableSprite: function() {
       var copyText = view.resTableSprite
       copyText.select()
       document.execCommand("copy")
   },
   copyTableColl: function() {
       var copyText = view.resTableColl
       copyText.select()
       document.execCommand("copy")
   }
}
octopus.init();