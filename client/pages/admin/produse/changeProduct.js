
const changeProduct = (item, e, product) => {
  switch (item) {
    case 'name':
      product.name = e
      break;
      
      case 'description':
        product.description = e
        break;
        
        
        
        case 'price':
          product.price = e
          break;
         
      
      

      
      

    case 'discountedPrice':
     product.discountedPrice = e
     break;
    

    case 'color.name':
     product.color.name = e;
     break;
      
      

    case 'color.hex':
      product.color.hex = e;
      break;
     

    case 'codIntern':
     product.codIntern = e
     break;
     

    case 'size.nr':
     product.size.nr = e
      break;

    case 'size.cm':
      product.size.cm = e
      break;
     

    case 'image':
      product.image = e
      break;
      

    case 'category':
      
      let currentProductCategories = product.category;
      currentProductCategories.append(e);
     product.category = currentProductCategories;
      break;

    case 'content':
      product.content = e.target.value;
      break;

    }
    return product;
};

//  const change = {
//    name: (e) => {
//      changeProduct('name', e);
//    },
//    description: (e) => {
//      changeProduct('description', e);
//    },
//    price: (e) => {
//      changeProduct('price', e);
//    },
//    discountedPrice: (e) => {
//      changeProduct('discountedPrice', e);
//    },
//    color: {
//      name: (e) => {
//        changeProduct('color.name', e);
//      },
//      hex: (e) => {
//        changeProduct('color.hex', e);
//      },
//    },
//    codIntern: (e) => {
//      changeProduct('codIntern', e);
//    },
//    size: {
//      nr: (e) => {
//        changeProduct('size.nr', e);
//      },
//      cm: (e) => {
//        changeProduct('size.cm', e);
//      },
//    },
//    image: (e) => {
//      changeProduct('image', e);
//    },
//    category: (e) => {
//      changeProduct('category', e);
//    },
//    content: (e) => {
//      changeProduct('content', e);
//    },
//  };
   

export default changeProduct;