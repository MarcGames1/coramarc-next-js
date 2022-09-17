import React from 'react'
import Image from 'next/image'
import Link from 'next/link';



// name: numele produsului
//mainImageSrc: imaginea principala - url absolut 356 x 265


export default function ProductItem({ name, thumbnail, pret }) {

  let productUrl = `/produse/${name.replace(' ', '-').toLowerCase()}`;


  return (

    <div>
      <div class="product-item">
        <div class="product-thumb">
          <a href="product-details.html">
            <Image src={thumbnail} alt={name} width={350} height={265} />
          </a>
          <div class="button-group">
            <a
              href="wishlist.html"
              data-bs-toggle="tooltip"
              title="Add to Wishlist"
            >
              <i class="fa fa-heart-o"></i>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view">
              <span data-bs-toggle="tooltip" title="Quick View">
                <i class="fa fa-eye"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="product-content">
          <div class="product-caption">
            <h6 class="product-name">
              <Link href={productUrl}>
              <a href={productUrl}>{name}</a>
              </Link>

            </h6>
            <div class="price-box">
              <span class="price-regular">{pret}</span>
            </div>
            <a class="add-to-cart" href="cart.html">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

