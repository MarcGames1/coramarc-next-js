import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Link from 'next/link';
function CategoriesCard() {
    return (
        <div className='single-category-item' border="light">
            <Link href={'/'}>

                <a href="/">
                    <Image width={320} height={500} layout="responsive" variant="top" src="/assets/img/category/shoes_category_pic.jpg" />
                </a>
            </Link>
            <div className='category-thumb' >

                <div className="category-title ">Card Title</div>
                <div className="shop-collection text-center">
               
                </div>

            </div>
                <div className="text-center">
                    <Link as={Button} className='shop-btn' href={'/'}><a className='shop-btn' href={'/'}> Go somewhere</a></Link>
                </div>

                
                

                
        </div>
    );
}

export default CategoriesCard;