import React from 'react'
import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import { faCreditCard, faTruck, faHeart, faHeadphones } from '@fortawesome/free-solid-svg-icons';

export const ServicePolicy = () => {
  return (
    <section className="service-policy mtn-30">
      <div className="container">
        <div className="row row-10">
          <div className="col-lg-3 col-sm-6">
            <div className="policy-block text-center">
              <div className="policy-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="policy-text">
                <h4 className="policy-title">Atentie la detalii</h4>
                <p className="policy-desc">
                  Masuram fiecare pereche cu atentie
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="policy-block text-center">
              <div className="policy-icon">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div className="policy-text">
                <h4 className="policy-title"> Livrare Rapida</h4>
                <p className="policy-desc">Livrare Rapida in toata tara </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="policy-block text-center">
              <div className="policy-icon">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <div className="policy-text">
                <h4 className="policy-title">Plata Securizata</h4>
                <p className="policy-desc">
                  Prin intermediul partenerilor nostri
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="policy-block text-center">
              <div className="policy-icon">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <div className="policy-text">
                <h4 className="policy-title">Suport Dedicat</h4>
                <p className="policy-desc">Prin Whatsapp, Email sau Telefon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
