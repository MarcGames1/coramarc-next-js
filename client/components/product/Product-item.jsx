import React from 'react'
import Image from 'next/image'



// name: numele produsului
//mainImageSrc: imaginea principala - url absolut 356 x 265


export default function ProductItem({name, mainImageSrc}) {
  return (
    <div>
      <div class="product-item">
        <div class="product-thumb">
          <a href="product-details.html">
            <Image src={mainImageSrc} alt={name} width={350} height={265} />
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
          <div class="product-label">
            <span>new</span>
          </div>
        </div>
        <div class="product-content">
          <div class="product-caption">
            <h6 class="product-name">
              <a href="product-details.html">Leather Mens slippers</a>
            </h6>
            <div class="price-box">
              <span class="price-old">
                <del>$70.00</del>
              </span>
              <span class="price-regular">$50.00</span>
            </div>
            <a class="add-to-cart" href="cart.html">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div>
          <div class="ratings">
            <span>
              <i class="fa fa-star"></i>
            </span>
            <span>
              <i class="fa fa-star"></i>
            </span>
            <span>
              <i class="fa fa-star"></i>
            </span>
            <span>
              <i class="fa fa-star"></i>
            </span>
            <span>
              <i class="fa fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

