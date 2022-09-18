import React from 'react'

const GmbMap = ({width, height}) => {
    if(!width || !height){
        width =600
        height =450
    }
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.036826338058!2d28.015070616212732!3d45.428758979100586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b6df269f1c858b%3A0x67ed054f79c30ef3!2sIncaltaminte%20Piele%20Galati%20-%20CoraMarc!5e0!3m2!1sro!2sro!4v1663509734461!5m2!1sro!2sro"
      width={width}
      height={height}
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default GmbMap