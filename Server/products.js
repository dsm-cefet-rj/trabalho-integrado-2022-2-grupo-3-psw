const products = [
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "8B4513",
            "cor2": "F5DEB3"
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "imagens":{
            "imagem1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "imagem2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "imagem3" : "../../img/folded-towels-on-the-bed.jpg",
            "imagem4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id": 1,
        
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "imagens":{
            "imagem1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "imagem2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "imagem3" : "../../img/folded-towels-on-the-bed.jpg",
            "imagem4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id": 2,
        
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "imagens":{
            "imagem1" : "../../img/folded-towels-on-the-bed.jpg",
            "imagem2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "imagem3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "imagem4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "imagens":{
            "imagem1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "imagem2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "imagem3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "imagem4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id": 4
    },

    //------------------------------------------------------------------------//

    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "imagem3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id": 4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id": 2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id": 1
    },

    //------------------------------------------------------------------------//

    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id": 1
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 1
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },

    //------------------------------------------------------------------------//
    
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },   

    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },  

    //------------------------------------------------------------------------//

    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },

    //------------------------------------------------------------------------//

    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },  

    //------------------------------------------------------------------------//

    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },

    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },

    //------------------------------------------------------------------------//

    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },

    //------------------------------------------------------------------------//

    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },

    //------------------------------------------------------------------------//
    
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },   

    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//
    //------------------------------------------------------------------------//

    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },  

    //------------------------------------------------------------------------//

    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },

    //------------------------------------------------------------------------//

    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },  

    //------------------------------------------------------------------------//

    {
        "nome": "Cama de luxo",
        "cores": {
            "cor1": "",
            "cor2": ""
        },
        "categoria" : "Cama",
        "preco" : 786.00,
        "fotos":{
            "foto1": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto2" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Cama boa demais pra dormir bem.",
        "detalhes": {
            "medidas": "50cm altura - 70cm largura - 24cm espessura ",
            "material": "100% Algodão",
            "fabricante": "Casas Bahia"
        },
        "id":  1
    },
    {
        "nome": "Estrado de cama bom",
        "cores":{
            "cor1": "DEB887"
        },
        "categoria": "Estrado",
        "preco" : 235.00,
        "fotos":{
            "foto1" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/folded-towels-on-the-bed.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Estrado de cama que aguenta várias coisas, compra esse.",
        "detalhes": {
            "medidas": "230cm altura - 200cm largura - 30cm espessura ",
            "material": "100% Madeira",
            "fabricante": "Árvore"
        },
        "id":  2
    },
    {
        "nome": "Toalha que seca bem",
        "cores":{
            "cor1" : "4B0082",
            "cor2": "98FB98",
            "cor3": "D3D3D3"
        },
        "categoria": "Toalha",
        "preco" : 76.00,
        "fotos":{
            "foto1" : "../../img/folded-towels-on-the-bed.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg"
        },
        "descricao": "Toalha boa demais pra secar as paradas, boa mesmo.",
        "detalhes": {
            "medidas": "50cm altura - 50cm largura - 20cm espessura ",
            "material": "100% Pano bom",
            "fabricante": "ToalhaMaker"
        },
        "id": 3
    },
    {
        "nome": "Coco que ajuda a dormir",
        "cores":{
            "cor1": "A0522D"
        },
        "categoria": "Coco",
        "preco" : 185.00,
        "fotos":{
            "foto1" : "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg",
            "foto2": "../../img/beautiful-luxury-hotel-bedroom.jpg",
            "foto3" : "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
            "foto4" : "../../img/folded-towels-on-the-bed.jpg"
        },
        "descricao": "Coco mas não de beber água, esse é o que ajuda a dormir",
        "detalhes": {
            "medidas": "30cm altura - 30cm largura - 30cm espessura ",
            "material": "100% Fruta de sono",
            "fabricante": "Coqueiro"
        },
        "id":  4
    },
]

module.exports = products;