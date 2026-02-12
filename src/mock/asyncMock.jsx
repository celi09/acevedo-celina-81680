const productos = [
    {
        id:'01',
        name: 'PANTALÓN TILO',
        description: "Pantalón de fit recto con silueta clásica y líneas limpias.",
        stock: 21,
        price: 1599,
        category: 'Mujer',
        img: 'https://f.fcdn.app/imgs/43e5e5/www.danielcassin.com.uy/dcs/c0cc/webp/catalogo/226213503301-002-01/1500-1500/pantalon-tilo-negro.jpg'
    },
    {
        id:'02',
        name: 'CHALECO LARGO BEIGE',
        description: "Chaleco largo con cuello en V y cierre de botones.",
        stock: 18,
        price: 1890,
        category: 'Furor',
        img: 'https://hmuruguay.vtexassets.com/unsafe/1280x0/center/middle/https%3A%2F%2Fhmuruguay.vtexassets.com%2Farquivos%2Fids%2F5003311%2FChaleco-largo---Beige-claro-jaspeado---H-M-UY.jpg%3Fv%3D638955781103030000'
    },
    {
        id:'03',
        name: 'PANTALON CIDER ESTAMPADO',
        description: "Pantalon jean, tajo, flare y calce alto",
        stock: 45,
        price: 2100,
        category: 'New Trend',
        img: 'https://f.fcdn.app/imgs/7d328c/www.indian.com.uy/indiuy/df30/webp/catalogo/01347771001_0/1000-1500/pantalon-cider-estampado-1.jpg'
    },
    {
        id:'04',
        name: 'VESTIDO BASILE',
        description: "Vestido camisero de lino para verano.",
        stock: 10,
        price: 599,
        category: 'Rebajas',
        img: 'https://f.fcdn.app/imgs/d8f5d1/www.danielcassin.com.uy/dcs/7b6f/webp/catalogo/226101704311-002-01/1500-1500/vestido-basile-negro.jpg'
    },
    
]

let error = false
export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(error){
                //algo paso y no se resuelve
                reject('🚨 Hubo un error, intente más tarde 🚨')
            }else{
                //todo bien y se resuelve
                resolve(productos)
            }
        }, 3000)
    })
}