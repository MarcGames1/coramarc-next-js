import React from 'react';
import CategoryLayiout from '../../layout/CategoryLayiout';
import { dateFirma, dateComert } from '../../helpers/setari';

export default function TermeniSiConditii() {
  return (
    <CategoryLayiout>
      <h1 className="text-center">Termeni Si Conditii</h1>
      <strong>Date Generale</strong>
      <p>
        Accesarea site-ului <b>{dateFirma.site}</b> si comandarea produselor de
        pe acesta presupune acceptarea termenilor si conditiilor de utilizare.
      </p>
      <p>
        Acest site este administrat de catre{' '}
        <b>
          {dateFirma.nume}, CUI:{dateFirma.CUI}, {dateFirma.J}{' '}
        </b>
        cu sediul in {dateFirma.sediu}, {dateFirma.judet}
      </p>
      <p>
        Site-ul poate contine si legaturi catre alte site-uri. {dateFirma.nume}{' '}
        nu poate fi raspunzatoare pentru informatiile de pe aceste site-uri.
      </p>
      <p>
        In calitate de client nou, la prima achizitie de pe site vi se va crea
        automat un cont de utilizator.
      </p>
      <p>
        Toate materialele integrate in acest site sunt proprietatea intelectuala
        a {dateFirma.nume}.
      </p>
      <h2>Pretul si modalitati de plata</h2>
      <p>
        <strong>{dateFirma.nume}</strong> nu este platitoare de TVA asadar,
        preturile nu includ TVA.
      </p>
      <p>
        Plata produselor se efectueaza online cu card, in numerar la livrare sau
        prin ordin de plata, caz in care, ne informati, si vi se va emite
        factura proforma, iar livrarea nu se va face decat dupa confirmarea
        platii.
      </p>
      <h2>Livrare</h2>
      <p>
        Modalitati de livrare Livrarea se face prin curierii agreati de{' '}
        {dateFirma.nume}. Pentru valori mai mari de 299 ron transportul este
        gratuit, in caz contrar pretul transportului este de 15 ron. Livrarea
        produselor se va face intr-un termen de {dateComert.livrareMin} pana la{' '}
        {dateComert.livrareMax} de la confirmarea comenzii. Daca produsul nu
        este disponibil, {dateFirma.nume} va va informa.
      </p>
      <h2>Confidentialitate</h2>
      <p>
        {dateFirma.nume} culege date cu caracter personal de la utilizatori si
        se obliga sa respecte dispozitiile legii nr. 677/2001 pentru protectia
        persoanelor cu privire la prelucrarea datelor cu caracter personal si
        libera circulatie a acestor date.
      </p>

      <h2>Politica de retur</h2>

      <p>
        Produsul returnat trebuie sa nu fie deteriorat sau purtat, cu ambalajul
        in starea initiala si sa fie insotit de toate accesoriile si documentele
        primite la livrarea produsului.
      </p>
      <p>
        Conform Ordonantei de Guvern nr.130/2000, daca sunteti nemultumit de
        produs, puteti renunta la cumparare in maxim 14 zile lucratoare de la
        data primirii produsului (acesta trebuie sa fie in aceeasi conditie in
        care a fost primit) .{' '}
      </p>
      <p>
        Denuntarea returnarii se face la adresa de e-mail{' '}
        {dateFirma.contact.email}, urmand a primi in scris informatii privind
        returul.{' '}
      </p>
      <p>
        Contravaloarea produsului se face in contul clientului, in maxim 30 de
        zile de la primirea produsului. Eventualele litigii aparute intre
        vanzator si client vor fi rezolvate pe cale amiabila. Pentru cererile de
        retur refuzate costul transportului va fi suportat de catre destinatar.
      </p>

      <h2>Cum fac un retur la un produs?</h2>
      <p>
        Dacă aveţi o problemă cu un produs comandat de la noi, care nu a fost
        rezolvată de către Departamentul Tehnic sau de către Departamentul
        Vanzări, aveți posibilitatea de a returna produsul. Avem rugamintea sa
        nu depasesti termenul de 14 zile calandaristice de la receptionarea
        produsului!
      </p>
      <p>
        1. Completeaza acest formular de retur - formularul de retur trebuie să
        fie completat în întregime, și vă vom răspunde prin e-mail sau telefon
        în termen de 3 zile lucrătoare cu instrucțiunile de returnare.
      </p>
      <p>2. Un curier va fi trimis catre tine</p>
      <p>3. Aseaza produsul in ambalajul original</p>
      <p>4. Preda-l curierului</p>
      <p>
        5. Contravaloarea produsului va fi rambursata in termen de 30 de zile de
        la receptionarea si verificarea coletului de catre departamentul
        retururi. Plata va fi efectuata exclusive prin virement bancar. 6. In
        cazul in care ai beneficiat de neplata transportului la comenzi de peste
        299 ron, daca se face retur la vreunul dintre produsele de pe acea
        comanda, si in aceasta situatie valoarea comenzii cobora sub 299 ron,
        contravaloarea transportului de 15 ron va fi retinuta din suma care
        trebuie restituita pentru retur. Returul si schimbul se face gratuit!
        Atenție: Schimbul / înlocuirea produselor se efectuează cu titlu gratuit
        o singură dată. În caz contrar se percepe o taxă de transport tur-retur
        în valoare de 30 ron. Incaltamintea se probeaza pe o suprafata plana,
        neteda, curata fara a produce deteriorari talpii acesteia.
      </p>
    </CategoryLayiout>
  );
}
